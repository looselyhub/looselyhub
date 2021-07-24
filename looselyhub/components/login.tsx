import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import axios from 'axios'
import styles from '../styles/login.module.scss'

export default function SignIn() {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
    ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
    : '#EF767A'
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlet] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post('/api/user/checkUser', { email })
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
        <p style={{ color: '#EF767A' }}>This email is not registered yet!</p>
      )
    }
    return <div />
  }

  return (
    <div className={styles.login}>
      <div className={styles.row}>
        <img
          src={
            process.env.NEXT_PUBLIC_LOGO
              ? process.env.NEXT_PUBLIC_LOGO
              : '/logo.png'
          }
        />
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your E-Mail Address"
            onChange={(event) => setEmail(event.target.value.trim())}
          />
          <button style={{ backgroundColor: primaryColor }} type="submit">
            Sign In
          </button>
        </form>
        {showAlertContainer()}
        <p>Copyright © Losselyhub 2021.</p>
      </div>
    </div>
  )
}
