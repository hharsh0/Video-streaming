import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Row from '../components/Row'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtoms'
import Modal from '../components/Modal'

const Home = () => {
  const showModal = useRecoilValue(modalState)

  return (
    <div className="relative h-screen lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <Banner />
        <section className="md:space-y-24">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </section>
        {showModal && <Modal />}
      </main>
    </div>
  )
}

export default Home
