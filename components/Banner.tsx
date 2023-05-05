import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtoms'

function Banner() {
  const [showModal, setShowModal] = useRecoilState(modalState)


  return (
    // <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 xl:pb-7 2xl:pb-4">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold 2xl:w-full md:text-4xl lg:text-5xl xl:text-7xl">
        Movie title or movie name
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-xl">
        movie overview
      </p>

      <div className="flex space-x-3">
        <button
          className="text-black bg-white bannerButton"
          onClick={() => {
            setShowModal(true)
          }}
        >
          <FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          onClick={() => {
            setShowModal(true)
          }}
          className="bannerButton bg-[gray]/50"
        >
          <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" />
          More Info
        </button>
      </div>
    </div>
  )
}

export default Banner
