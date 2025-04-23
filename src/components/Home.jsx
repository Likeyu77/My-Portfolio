import React, { useEffect, useState } from 'react'
import { FaGithubSquare, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import DynamicParticles from './DynamicParticles'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = [
    'Support Engineer',
    'Front-End Developer',
    // 'App Developer',
  ]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let index = loopNum % toRotate.length
    let fullText = toRotate[index]

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <div
      id="home"
      className="hero sm:px-16 bg-cover h-screen px-4 w-full"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundRepeat: 'repeat',
      }}>
      <div className="hero-content flex flex-row justify-center w-full">
        {/* image */}

        <DynamicParticles />

        {/* text content */}
        <div className="flex flex-col sm:w-2/3 items-center">
          {/* <p
            className="font-bold tracking-wide p-2 bg-primary 
          inline-block rounded-lg mb-4 text-base-300 text-base sm:text-xl lg:text-3xl">
            Welcome to my Portfolio
          </p> */}
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl h-16 sm:h-20 lg:pt-3">
            {`Hi! I'm Sean Li, `}
          </h1>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl h-16">
            <span className="wrap">{text}</span>
          </h2>
          <div className="pb-3 sm:pt-3 text-xl max-w-lg flex flex-row">
            <FaLocationArrow className="mr-4" />
            <p>Shanghai, CN</p>
          </div>
          <div className="flex mb-6">
            <a
              href="https://github.com/Likeyu77?tab=repositories"
              target="_blank">
              <FaGithubSquare className=" h-10 w-10 mr-2 text-slate-500 hover:text-primary duration-300" />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin className="h-10 w-10 text-slate-500 hover:text-primary duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
