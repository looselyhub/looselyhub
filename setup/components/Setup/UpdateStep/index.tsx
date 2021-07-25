import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import styles from './UpdateStep.module.scss';

type Props = {
  setupProps: any;
};

export default function UpdateStep(props: Props): JSX.Element {

  const [building, setBuilding] = useState(true);
  const [loadingTimer, setLoadingTimer] = useState(10);

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  async function updateBuild() {
    const response = await axios.post('/api/setup', props.setupProps)
    console.log('DONE', response.data)
    await timeout(20000);
    setBuilding(false)
    for (let i = 10; i > 0; i-=1) {
      setLoadingTimer(i);
      await timeout(1000);
    }
    await timeout(1000);
    window.location.href = `https://${props.setupProps.domain}`;
  }

  useEffect(() => {
    updateBuild();
  }, [])

  return (
    <div >
        <h2>UPDATING</h2>
        <p>The platform is beeing updated with the desired values. <br/>Wait <b>10 minutes</b> and then access using the chosen domain: <br/>
        <b>https://{props.setupProps.domain}</b></p>
        {building ?
        <div className={styles.updatingContainer}>
          <h1 style={{color: '#EF767A'}}>UPDATING</h1>
          <ReactLoading type={'spokes'} color={'#FCE247'} height={100} width={100} />
          <br/>
          </div>
        : <div>
          <h1 style={{color: '#23F0C7'}}>COMPLETED</h1>
          <h2>You will be redirected in {loadingTimer} seconds</h2>
        </div>
      }
    </div>
  )
}
