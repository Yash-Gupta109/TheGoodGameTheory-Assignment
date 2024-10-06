import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeQuote} from '../app/savedSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function SaveQuotes() {
    const quotes = useSelector((state) => state.saved)
    const dispatch = useDispatch()
    return (
        <div className='p-7 flex bg-gradient-to-r from-yellow-300 to-pink-400 min-h-screen h-full gap-12 flex-wrap'>
            {quotes.map((q)=> (
                <div className='w-[30%] bg-white h-fit p-4 rounded-xl text-center'>
                    <p className='text-xl italic font-semibold'>{q.quote}</p>
                    <Stack direction="row" spacing={1} className='flex justify-center'>
                    <Tooltip title="Delete">
                        <IconButton aria-label="fingerprint" color="red" onClick={()=> dispatch(removeQuote(q.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    </Stack>
                </div>
            ))}
        </div>
    )
}

export default SaveQuotes