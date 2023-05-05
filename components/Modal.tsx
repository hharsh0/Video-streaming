import React, { useEffect, useState, useRef } from 'react'
import MuiModal from "@mui/material/Modal"
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'
import { Element, Genre } from '../typings'
import { XIcon } from '@heroicons/react/outline'
import Player from './Player';
import { format } from 'date-fns'

interface trailerDetailsType {
  runtime: number | null
} 

function Modal() {
    const isMounted = useRef(false)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState('')
    const [trailerDetails, setTrailerDetails] = useState<trailerDetailsType | null>(null)
    const [genres, setGenres] = useState<Genre[]>([])
    const [showMore, setShowMore] = useState(true)


    const handleClose = () => {
        setShowModal(false)
    } 

  return (
    <MuiModal 
    open={showModal} 
    onClose={handleClose} 
    className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
        <>
         <button
            onClick={handleClose}
            className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]
            hover:bg-[#181818]"
         >
            <XIcon className="w-6 h-6" />
         </button>

         {/* movie player component */}
           <Player />

         <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
               <div className="flex items-center space-x-2 text-sm">
                <p className='font-semibold text-green-400'> Match</p>
                <p className='font-light'>date</p>

                <p className="text-white">
                  R
                </p>
                <p className='hidden font-light md:inline'>
                  runtime
                </p>
                <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD 
                </div>
               </div>

               {/* movie overview/description */}
               <div className="flex flex-col font-light gap-x-10 gap-y-4 md:flex-row">
                 <p className="w-full md:w-5/6">          
                      <>No Description !!</>
                 </p>
                 <div className='flex flex-col space-y-3 text-sm'>
                   <div>
                    <span className="text-[gray]">Genres: </span>
                   </div>

                   <div>
                     <span className="text-[gray]">Original Language: </span>
                   </div>
                   
                   <div>
                    <span className="text-[gray]">Total Votes: </span>
                   </div> 
                 </div>
               </div>
            </div>
         </div>
        </>
    </MuiModal>
  )
}

export default Modal