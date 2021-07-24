import React, { useState, useEffect } from 'react';

type Props = {
  next: (pusherAppId:string, pusherKey: string, pusherSecret: string) => void;
};

export default function PusherStep(props: Props): JSX.Element {
  
  const [color, setColor] = useState('#b4b1b1');
  const [valid, setValid] = useState(false);
  const [pusherAppId, setPusherAppId] = useState('');
  const [pusherKey, setPusherKey] = useState('');
  const [pusherSecret, setPusherSecret] = useState('');

  useEffect(() => {
    if (pusherAppId.length > 3 && pusherKey.length > 3 && pusherSecret.length > 3) {
      setColor('#EF767A')
      return setValid(true)
    }
    if (pusherAppId.length == 0 && pusherKey.length == 0 && pusherSecret.length == 0) {
      setColor('#EF767A')
      return setValid(true)
    }
    setColor('#b4b1b1')
    setValid(false)
  }, [pusherAppId, pusherKey, pusherSecret])

  return (
    <div >
        <h2>Pusher Setup</h2>
        <p style={{textAlign:'left'}}>It's time to enable realtime updates using pusher.<br/>
          You need to create an account at Pusher <a href='https://pusher.com/'>https://pusher.com/</a> to use this service<br/>
          Pusher is optional in the application, ignore the fields bellow if you don't want to use it</p> 
        
        <h3>APP ID</h3>
        <input value={pusherAppId} onChange={(event) => setPusherAppId(event.target.value.trim())} placeholder={'app_id'} />
        <h3>KEY</h3>
        <input value={pusherKey} onChange={(event) => setPusherKey(event.target.value.trim())} placeholder={'key'} />
        <h3>SECRET</h3>
        <input value={pusherSecret} onChange={(event) => setPusherSecret(event.target.value.trim())} placeholder={'secret'} />
        <button disabled={!valid} style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(pusherAppId, pusherKey, pusherSecret)}>
          Next Step
        </button>
    </div>
  )
}
