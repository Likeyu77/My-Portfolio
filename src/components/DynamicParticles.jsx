import React, { useEffect, useRef, createRoot } from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import ReactDOM from 'react-dom/client'
const DynamicParticles = () => {
  const icons = [<FaHtml5 />, <FaCss3Alt />, <RiJavascriptFill />, <FaReact />]
  const canvasRef = useRef(null)
  const particles = []
  let ctx = null
  let mouse = {
    x: -500,
    y: -500,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext('2d')

    const handleMouseMove = (evt) => {
      mouse.x = evt.clientX
      mouse.y = evt.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    class Particle {
      constructor() {
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
        this.age = 0
        this.size = 0
        this.init()
      }

      init() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = Math.random() - 0.5
        this.vy = Math.random() - 0.5
        this.age = (Math.random() * 50) | 0
        this.size = Math.random() * 4
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.init()
        }

        if (this.age < 0) {
          this.age = (Math.random() * 50) | 0
          this.vx += (Math.random() - 0.5) * 0.1
          this.vy += (Math.random() - 0.5) * 0.1
        }

        this.x += (mouse.x - canvas.width / 2) / 1000
        this.y += (mouse.y - canvas.height / 2) / 1000
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.fill()
      }
    }

    function begin() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    begin()

    function ani() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.update()
        p.draw()

        // for (let j = i + 1; j < particles.length; j++) {
        //   let p2 = particles[j]
        //   let r = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2))
        //   if (r < 100) {
        //     ctx.beginPath()
        //     ctx.moveTo(p.x, p.y)
        //     ctx.lineTo(p2.x, p2.y)
        //     ctx.strokeStyle = 'rgba(234,234,234' + (1 - r / 100) + ')'
        //     ctx.stroke()
        //   }
        // }
      }
    }

    const animationInterval = setInterval(ani, 1000 / 30)

    return () => {
      // Cleanup code when the component unmounts
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0"
      style={{ zIndex: -1 }}></canvas>
  )
}

export default DynamicParticles
