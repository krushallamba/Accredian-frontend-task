
import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import ReferralModal from "./components/ReferralModal"
import { ToastContainer } from 'react-toastify';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero openModal={openModal} />
        <Benefits />
        <HowItWorks />
      </main>
      <Footer />
      <ReferralModal isOpen={isModalOpen} closeModal={closeModal} />
      <ToastContainer />
    </div>
  )
}

export default App

