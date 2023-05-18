import React, { useState } from 'react'
import Map from './Map'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    // You can use the values of name, email, and message for further processing
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
    // Reset the form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='contact section-center'>
      <h2>Contactez Nous</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Nom:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit' className='contact-btn'>
          Envoyer
        </button>
      </form>
      <Map/>
    </div>
  )
}

export default Contact
