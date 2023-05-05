import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import CircularProgress from '@mui/material/CircularProgress';
import { FaPlay } from 'react-icons/fa'
import { PlusIcon, CheckIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, PauseIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast'
import useVideoEvents from '../hooks/useVideoEvents'


function Player() {

  const {
    loading,
    muted,
    pause,
    play,
    playTadum,
    setPlayTadum,
    setLoading,
    setMuted,
    setPause,
    setPlay,
  } = useVideoEvents()

  const [addedToList, setAddedToList] = useState(false)

  // Find all the movies in the user's list

  // Check if the movie is already in the user's list // returns true if its found, returns false otherwise


  // preventing double useEffect calls in development mode (not an issue though)
  const isMounted = useRef(false)
  useEffect(() => {
    if (isMounted.current) return
    isMounted.current = true
  }, [])

  return (
    <div className="relative pt-[56.25%]">
      <Toaster position="bottom-center" />
      <ReactPlayer
        playing={play}
        url={`https://www.youtube.com/watch?v=r51cYVZWKdY`}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '0', left: '0' }}
        muted={muted}
        onReady={() => setLoading(false)}
        onBuffer={() => {
          setLoading(false)
          setPause(false)
        }}
        onEnded={() => {
          setPlay(false)
          setPause(true)
        }}
      />

      <div className="absolute flex items-center justify-between w-full px-10 bottom-10">
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setPlay(!play)
              setPause(!pause)
            }}
            className="flex items-center gap-x-2 rounded bg-white px-5 md:px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]"
          >
            {/* display play */}
            {!play && pause && !loading && (
              <>
                <FaPlay className="mt-1 text-black h-7 w-11" />
                Play
              </>
            )}

            {/* display pause */}
            {play && !pause && !loading && (
              <>
                <PauseIcon className="mt-1 text-black h-7 w-7" />
                Pause
              </>
            )}
            {/* display loading  */}
            {loading && (
              <>
                <div className="flex items-center justify-between w-24 font-normal">
                  <div className="-ml-3">Loading...</div>
                  <CircularProgress
                    size={20}
                    thickness={5}
                    className="!text-black -mr-3"
                  />
                </div>
              </>
            )}
          </button>
          <button className="modalButton">
            {addedToList ? (
              <CheckIcon className="h-7 w-7" />
            ) : (
              <PlusIcon className="h-7 w-7" />
            )}
          </button>
          <button className="modalButton">
            <ThumbUpIcon className="w-6 h-6" />
          </button>
        </div>
        <button className="modalButton" onClick={() => setMuted(!muted)}>
          {muted ? (
            <VolumeOffIcon className="w-6 h-6" />
          ) : (
            <VolumeUpIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Player