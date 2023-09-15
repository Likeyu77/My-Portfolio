import { useRef } from 'react'
import SectionTitle from './SectionTitle'
import emailjs from '@emailjs/browser'
import contactImage from '../assets/contact-img.svg'

const Contact = () => {
  const form = useRef()

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
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-fuchsia-800 via-purple-600 to-violet-800 py-16">
      <SectionTitle text="Let's chat" />
      <div className="grid grid-cols-2 justify-center items-center ">
        <img src={contactImage} alt="contact image" className="max-w-md m-16" />
        <form ref={form} onSubmit={sendEmail} className="flex flex-col m-16">
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4 active:border-orange-300"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="h-10 pl-4 rounded-xl border border-neutral-100 bg-transparent mb-4"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
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
