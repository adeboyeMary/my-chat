import React, {useState} from "react";

import styles from './SignIn.module.css';
import Layout from "../Layout/Layout";
import Button from '../UI/Button';

const SignIn = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const changeHandlerEmail = event => {
        setEnteredEmail(event.target.value);
    }
    const changeHandlerPassword = event => {
        setEnteredPassword(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();

        const data = {
            email: enteredEmail,
            password: enteredPassword
        }
        console.log(data);

        setEnteredEmail('');
        setEnteredPassword('');
    }

    return (
        <Layout className={styles.signin}>
            <h1>Sign in</h1>
            <p>Let's get started with your 30 days free trial.</p>
            <form onSubmit={formSubmitHandler}>
                <>
                    <label>Email</label>
                    <input type='email' value={enteredEmail}
                    onChange={changeHandlerEmail} ></input>
                </>
                <>
                    <label>Password</label>
                    <input type='password' value={enteredPassword}
                    onChange={changeHandlerPassword}></input>
                </>
                <Button type='submit' 
                className={styles.btn}>Login</Button>
            </form>
        </Layout>
    )
}

export default SignIn;