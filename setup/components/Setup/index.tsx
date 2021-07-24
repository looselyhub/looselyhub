import React, { useState } from 'react'
import styles from '../../styles/setup.module.scss'

import Step0 from './Step0';
import DomainStep from './DomainStep';
import SMTPStep from './SMTPStep';
import CredentialsStep from './CredentialsStep';
import PersonalizationsStep from './PersonalizationsStep';
import AuthorizedDomainsStep from './AuthorizedDomainsStep';
import UpdateStep from './UpdateStep';
import PusherStep from './PusherStep';

// TODO: Admin steps
// DONE: Step 1, setup domain
// DONE: Step 2, setup SMTP
// DONE: Step 3, setup Admin account
// DONE: Step 4, setup personalizations
// DONE: Step 5, setup authorized domains
// DONE: Step 6, setup pusher
// TODO: Step 7, setup tracking
// DONE: Step 8, update .env and rebuild


export default function Setup() {

  const [currentStep, setStep] = useState(0);
  const [setupProps, setSetupProps] = useState<any>({});

  function addSMTP(host:string, port:string, user:string, password:string, from:string) {
    const newProps = {
      host,
      port,
      user,
      password,
      from
    }
    setSetupProps({...setupProps, ...newProps});
  }

  function addCredentials(adminUsername: string, adminPassword: string) {
    const newProps = {
      adminUsername,
      adminPassword,
    }
    setSetupProps({...setupProps, ...newProps});
  }

  function addPersonalizations(faviconURL:string, logoURL:string, primaryColor:string, secondaryColor:string) {
    const newProps:any = {}
    if (faviconURL.length > 0) {
      newProps.faviconURL = faviconURL;
    }
    if (logoURL.length > 0) {
      newProps.logoURL = logoURL;
    }
    if (primaryColor.length > 0) {
      newProps.primaryColor = primaryColor;
    }
    if (secondaryColor.length > 0) {
      newProps.secondaryColor = secondaryColor;
    }
    setSetupProps({...setupProps, ...newProps});
  }

  function addPusher(pusherAppId:string, pusherKey: string, pusherSecret: string) {
    const newProps:any = {}
    if (pusherAppId.length > 0) {
      newProps.pusherAppId = pusherAppId;
      newProps.pusherKey = pusherKey;
      newProps.pusherSecret = pusherSecret;
    }
    setSetupProps({...setupProps, ...newProps});
  }

  function renderStep() {
    console.log(setupProps)
    switch (currentStep) {
      case 7:
        return <UpdateStep setupProps={setupProps} />
      case 6:
        return <PusherStep next={(pusherAppId, pusherKey, pusherSecret) => {
          addPusher(pusherAppId, pusherKey, pusherSecret); 
          setStep(7)}}
        />
      case 5: 
          return <AuthorizedDomainsStep next={(authorizedDomains) => {
            setSetupProps({...setupProps, authorizedDomains});
            console.log(authorizedDomains)
            setStep(6)
          }}
        />
      case 4: 
        return <PersonalizationsStep next={(faviconURL, logoURL, primaryColor, secondaryColor) => {
          addPersonalizations(faviconURL, logoURL, primaryColor, secondaryColor); 
          setStep(5)}}
        />
      case 3:
        return <CredentialsStep next={(username, password) => {addCredentials(username, password); setStep(4)}}/>
      case 2:
        return <SMTPStep next={(host, port, user, password, from) => {addSMTP(host, port, user, password, from); setStep(3)}}/>
      case 1:
        return <DomainStep next={(domain) => {setSetupProps({domain}); setStep(2)}}/>
      default: 
        return <Step0 next={() => setStep(1)}/>
    }
  }

  return (
    <div className={styles.container}>
      <style jsx global>{`
        body, html {
          overflow: auto;
        }
      `}</style>
      <div className={styles.setup}>
        <div className={styles.row}>
          <img
            src={
              process.env.NEXT_PUBLIC_LOGO
                ? process.env.NEXT_PUBLIC_LOGO
                : '/logo.png'
            }
          />
          {renderStep()}
          <p>Copyright © Losselyhub 2021.</p>
        </div>
      </div>
    </div>
  )
}
