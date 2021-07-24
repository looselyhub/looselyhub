import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './SMTP.module.scss';

type Props = {
  next: (host:string, port: string, user: string, password: string, from: string) => void;
};

export default function SMTPStep(props: Props): JSX.Element {
  
  const [color, setColor] = useState('#b4b1b1')
  const [valid, setValid] = useState(false);
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [from, setFrom] = useState('');

  useEffect(() => {
    console.log(host.length, port.length, user.length, password.length, from.length)
    if (host.length > 3 && port.length > 1 && user.length > 3 && password.length > 3 && from.length > 1) {
      setColor('#EF767A')
      return setValid(true)
    }
    setColor('#b4b1b1')
    setValid(false)
  }, [host, port, user, password, from])

  return (
    <div >
        <h2>SMTP Setup</h2>
        <p style={{textAlign:'left'}}>Now we will configure our SMTP service.<br/>
          This SMTP is used for our magic link authentication system.</p>
          <div className={styles.grid}>
            <div className={styles.cardWrap}>
              <h3>EMAIL HOST</h3>
              <input value={host} onChange={(event) => setHost(event.target.value.trim())} placeholder={'smtp.gmail.com'} />
            </div>
            <div className={styles.cardWrap}>
              <h3>EMAIL PORT</h3>
              <input value={port} onChange={(event) => setPort(event.target.value.trim())} placeholder={'465'} />
            </div>
            <div className={styles.cardWrap}>
              <h3>EMAIL USER</h3>
              <input value={user} onChange={(event) => setUser(event.target.value.trim())} placeholder={'no-reply@looselyhub.com'} />
            </div>
            <div className={styles.cardWrap}>
              <h3>EMAIL PASSWORD</h3>
              <input value={password} onChange={(event) => setPassword(event.target.value.trim())} placeholder={'password123'} />
            </div>
            <div className={styles.cardWrap}>
              <h3>EMAIL FROM</h3>
              <input value={from} onChange={(event) => setFrom(event.target.value)} placeholder={'LooselyHub <no-reply@looselyhub.com>'} />
            </div>
          </div>
        <button disabled={!valid} style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(host, port, user, password, from)}>
          Next Step
        </button>
    </div>
  )
}
