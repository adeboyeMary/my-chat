import React, { Fragment, useState } from 'react';

import styles from './Form.module.css';
import Button from '../UI/Button';

const Form = ({children}) => {    
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value);
    }
    const submitHandler = event => {
        event.preventDefault();

        const data = {
            username: enteredName,
            email: enteredEmail,
            password:enteredPassword
        }
        console.log(data);
    
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPassword('');
    }

    

    return(
        <div className={styles.form}>
            <form onSubmit={submitHandler}>
                <>
                    <div><label for="fname">Name</label></div>
                    <input type="text" className="fname" 
                    onChange={nameChangeHandler}
                     required></input>
                </>
                <>
                    <div><label for="email">Email</label></div>
                    <input type="email" className="email" 
                    onChange={emailChangeHandler}
                     required></input>
                </>
                <>
                    <div><label for="passw">Password</label></div>
                    <input type="password" className="passw" 
                    onChange={passwordChangeHandler}
                    required></input>
                </>
                <Button type="submit" className={styles.btn}>Create Account</Button>
            {/* {!error && <p className={styles.errtext}>Enter valid inputs.</p>} */}
            </form>


        </div>      
    )
}

export default Form;