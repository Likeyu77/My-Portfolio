import { useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import emailjs from '@emailjs/browser'
import contactImage from '../assets/contact-img.svg'

const Contact = () => {
  const form = useRef()

  const [feedback, setFeedback] = useState('')

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7bh8gun',
        'template_jiaaa4o',
        form.current,
        'b0DDKnV2c11tP0MQh'
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: '',
          })
          setFeedback(
            'Thank you for your message! I will get back to you soon.'
          )

          setTimeout(() => {
            setFeedback('')
          }, 4000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-fuchsia-800 via-purple-600 to-violet-800 py-16">
      <SectionTitle text="Let's chat" />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mx-12 sm:mx-6">
        <img
          src={contactImage}
          alt="contact image"
          className=" hidden sm:flex"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col m-6 mt-4">
          {feedback && (
            <p className="text-white-500 text-3xl my-4">{feedback}</p>
          )}

          <input
            type="text"
            placeholder="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4 active:border-orange-300"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="pl-4 pt-2 rounded-xl border border-neutral-100 bg-transparent mb-4"></textarea>
          <button type="submit" className="btn btn-outline btn-secondary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
