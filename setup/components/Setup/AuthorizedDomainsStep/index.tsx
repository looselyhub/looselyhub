import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
import styles from './AuthorizedDomainsStep.module.scss';

type Props = {
  next: (authorizedDomains: Array<string>) => void;
};

export default function AuthorizedDomainsStep(props: Props): JSX.Element {

  const color = '#EF767A';
  const [authorizedDomains, setAuthorizedDomains] = useState<Array<any>>([]);

  function handleDelete(i: number) {
    setAuthorizedDomains(
      authorizedDomains.filter((tag, index) => index !== i)
    )
  }

  function handleAddition(newDomain: {id: string, text: string}) {
    setAuthorizedDomains([...authorizedDomains, newDomain]);
  }

  function stringArrayFromTags(tags: Array<any>) {
    return tags.map((tag) => tag.text);
  }

  return (
    <div>
        <h2>Authorized Domains Setup</h2>
        <p style={{textAlign:'left'}}>Now we will setup our pre-authorized domains <br/>
          Add all email domains that you want to pre-authorize for login.</p>
        <p><b>This is optional.</b><br/> 
          If there is not domain added, only added users will be able to login.</p>
        <h3>Write your domains without www, https:// or http.</h3>
        <div className={styles.tagsContainer}>
          <ReactTags tags={authorizedDomains}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    placeholder='Press enter to add a new domain' />
        </div>
        <button style={{ backgroundColor: color }} type="submit" onClick={()=> props.next(stringArrayFromTags(authorizedDomains))}>
          Next Step
        </button>
    </div>
  )
}
