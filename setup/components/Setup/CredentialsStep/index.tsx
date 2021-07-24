import React, { useState } from 'react'
import { useEffect } from 'react';

type Props = {
  next: (adminUsername:string, adminPassword: string) => void;
};

export default function CredentialsStep(props: Props): JSX.Element {
  
  const [color, setColor] = useState('#b4b1b1')
  const [valid, setValid] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (username.length > 3 && username.includes('@') && password.length > 5) {
      setColor('#EF767A')
      return setValid(true)
    }
    setColor('#b4b1b1')
    setValid(false)
  }, [username, password])

  return (
    <div >
        <h2>API Setup</h2>
        <p style={{textAlign:'left'}}>It's time to create your admin account.<br/>
          Now you will create your <b>username</b> and <b>password</b> to use LooselyHubs API.</p>
          <p><b>SAVE THEM IN A SAFE PLACE!</b></p>
        <p>
          To access the API documentation go to: <br/>
          <a target="_blank" rel="noopener noreferrer"href={'https://documenter.getpostman.com/view/613589/TWDRreTr'}>
            https://documenter.getpostman.com/view/613589/TWDRreTr</a>
        </p>
        <h3>EMAIL</h3>
        <input value={username} onChange={(event) => setUsername(event.target.value.trim())} placeholder={'admin@example.com'} />
        <h3>PASSWORD</h3>
        <input value={password} onChange={(event) => setPassword(event.target.value.trim())} placeholder={'password123'} />
        <button disabled={!valid} style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(username, password)}>
          Next Step
        </button>
    </div>
  )
}
