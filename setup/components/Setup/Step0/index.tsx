import React from 'react'

type Props = {
  next: () => void;
};

export default function Step0(props: Props): JSX.Element {
  const primaryColor = '#EF767A';
  return (
    <div >
        <h2>Initial Setup</h2>
        <h3>Wecolme to LooselyHub setup, follow the next steps to configure your plataform.</h3>
        <button style={{ backgroundColor: primaryColor }} type="submit" onClick={props.next}>
          Start Setup
        </button>
    </div>
  )
}
