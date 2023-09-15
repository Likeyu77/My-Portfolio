import React, { useEffect, useState } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import homeImage from '../assets/header-img.svg'
// import bg from '../assets/banner-bg.png'
const Home = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = [
    'Front-End Developer',
    'Full-Stack Developer',
    'App Developer',
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
      className="hero min-h-screen  px-16 bg-cover"
      style={{
        backgroundImage:
          'url(https://images.ctfassets.net/em6l9zw4tzag/EqjXhOPnRiPWii1fwz2v8/f0c8c4fd8678c8d3aa941f58e3f71958/spectivus-hero.jpg)',
      }}>
      <div className="hero-content flex-col lg:flex-row-reverse gap-2 p-0">
        <img
          src={homeImage}
          className=" max-w-lg md:max-w-md animate-[updown_3s_infinite] "
        />
        <div className="max-h-96">
          <p
            className="font-bold tracking-wide p-2 bg-primary 
          inline-block rounded-lg mb-4 text-base-300 text-3xl">
            Welcome to my Portfolio
          </p>
          <h1 className="text-6xl font-bold">
            {`Hi! I'm Sean, `} <br />
            <span className="wrap">{text}</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
