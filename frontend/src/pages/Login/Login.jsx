import { useState } from "react"

import styles from './login.module.css';

export const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return <div>
      <div className={styles.cont}>
        <div className={styles.image}>

        </div>
        <div className={styles.name}>
            Vishnu PS
        </div>
      </div>
    </div>
}