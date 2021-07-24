import React, { useState } from 'react';
import styles from './Personalizations.module.scss';

type Props = {
  next: (faviconURL:string, logoURL: string, primaryColor: string, secondaryColor: string) => void;
};

export default function PersonalizationsStep(props: Props): JSX.Element {
  
  const color = '#EF767A';
  const [faviconURL, setFaviconURL] = useState('');
  const [logoURL, setLogoURL] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  return (
    <div >
        <h2>Personalizations Setup</h2>
        <p style={{textAlign:'left'}}>It's time to style your Looselyhub.<br/>
          All fields are <b>optional</b>, change whatever you like.</p> 
        <div className={styles.grid}>
          <div className={styles.cardWrap}>
            <h3>PRIMARY COLOR</h3>
            <input value={primaryColor} onChange={(event) => setPrimaryColor(event.target.value.trim())} placeholder={'#EF767A'} />
          </div>
          <div className={styles.cardWrap}>
            <h3>SECONDARY COLOR</h3>
            <input value={secondaryColor} onChange={(event) => setSecondaryColor(event.target.value.trim())} placeholder={'#FCE247'} />
          </div>
        </div>
        <h3>FAVICON URL</h3>
        <input value={faviconURL} onChange={(event) => setFaviconURL(event.target.value.trim())} placeholder={'https://opensource.org/files/osi_standard_logo_0.png'} />
    
        <h3>LOGO URL</h3>
        <input value={logoURL} onChange={(event) => setLogoURL(event.target.value.trim())} placeholder={'https://opensource.org/files/osi_standard_logo_0.png'} />
        <button style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(faviconURL, logoURL, primaryColor, secondaryColor)}>
          Next Step
        </button>
    </div>
  )
}
