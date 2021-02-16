import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import axios from 'axios'
import styles from '../styles/login.module.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlet] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post('/api/checkUser', { email })
      signIn('email', { email })
      setShowAlert(true)
      setShowErrorAlet(false)
    } catch (error) {
      setShowErrorAlet(true)
      setShowAlert(false)
    }
  }

  function showAlertContainer() {
    if (showAlert) {
      return (
        <p style={{ color: '#23F0C7' }}>
          A sign in link has been sent to your email address!
        </p>
      )
    }
    if (showErrorAlert) {
      return (
        <p style={{ color: '#EF767A' }}>This email is not redistered yet!</p>
      )
    }
    return <div />
  }

  return (
    <div className={styles.login}>
      <div className={styles.row}>
        <img src={'/logo.png'} />
        <h2>Sign In</h2>
        <input
          placeholder="Your E-Mail Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={handleSubmit}>Sign In</button>
        {showAlertContainer()}
        <p>Copyright © Losselyhub 2021.</p>
      </div>
    </div>
  )
}
