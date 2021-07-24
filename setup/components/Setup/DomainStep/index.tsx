import React, { useState, useEffect } from 'react'

type Props = {
  next: (domain:string) => void;
};

export default function DomainStep(props: Props): JSX.Element {

  
  // TODO: Validate if domain is poiting to current IP
  const [color, setColor] = useState('#b4b1b1')
  const [valid, setValid] = useState(false);
  const [domain, setDomain] = useState('');
  const [ip, setIp] = useState('');

  function updateDomain(text: string) {
    if (text.includes('.')) {
      setValid(true)
      setColor('#EF767A')
    } else {
      setValid(false)
      setColor('#b4b1b1')
    }
    setDomain(text.trim())
  }

  useEffect(() => {
    setIp(window.location.hostname);
  }, [])


  return (
    <div >
        <h2>Domain Setup</h2>
        <p style={{textAlign:'left'}}>In this step we will configure our platform to use our custom domain. <br/>
          For that, you need to have your domain poiting to the same IPv4 where you are accessing the platform at the moment.<br/>
          This is usually done by poitting your domain using type A and your IPv4. For this setup to work you must create two records:</p>
          <li>example.com A {ip}</li>
          <li>www.example.com A {ip}</li>
        <h3>Write your domain without www, https:// or http.</h3>
        <input value={domain} onChange={(event) => updateDomain(event.target.value)} placeholder={'example.com'} />
        <button disabled={!valid} style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(domain)}>
          Next Step
        </button>
    </div>
  )
}
