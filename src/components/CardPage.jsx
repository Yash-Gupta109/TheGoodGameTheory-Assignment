import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import {addQuote} from '../app/savedSlice'

function CardPage() {
    const [quote, setQuote] = useState('')
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState('') 
    const dispatch = useDispatch();

    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    const fetchQuote = async () => {
        try {
            const response = await axios.get(url);
            setQuote(response.data[0]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchQuote();
    },[])

    function saved(){
        dispatch(addQuote(quote))
    }

    if (error) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <p className='text-lg text-red-500'>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className='h-screen bg-gradient-to-r from-yellow-300 to-pink-400 w-full flex justify-center items-center'>
            <div className='h-[80%] w-[80%] bg-white rounded-md flex'>
                <img src="https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_1280.png" alt="" className='h-[100%] w-[50%] object-cover p-5'/>
                <div className='my-auto items-center'>
                    <p className=' font-semibold italic text-2xl text-center pr-5'>{loading ? "...Loading" : quote}</p>
                        <Stack direction="row" spacing={1} className='flex mt-20 justify-center'>
                            <Tooltip title="Get new Quote">
                                <IconButton aria-label="fingerprint" color="secondary" onClick={()=>fetchQuote()}>
                                    <CachedIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Save">
                                <IconButton aria-label="fingerprint" color="secondary" onClick={() => saved()}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Saved Quotes">
                                <Link to={'/likedQuotes'}>
                                <IconButton aria-label="fingerprint" color="secondary">
                                    <BookmarksIcon />
                                </IconButton>
                                </Link>
                            </Tooltip>
                        </Stack>
                </div>
            </div>
        </div>
    )
}

export default CardPage
