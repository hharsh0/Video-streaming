import Image from "next/image"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtoms"
import { DocumentData } from "firebase/firestore"
import { Movie } from "../typings"



function ThumbNail() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110"
      onClick={() => {
        // console.log('onclick movie', movie)
        // setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg`}
        className="object-cover rounded-sm md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default ThumbNail