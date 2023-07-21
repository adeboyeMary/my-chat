import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.css';
import Layout from '../Layout/Layout';
import Form from '../Form/Form'


const SignUp = () => {
    return (
            <Layout className={styles.signup}>
                <h1>Create an account</h1>
                <p>Let's get started with your 30 days free trial.</p>
                <Form />
                <p className={styles.p}>Already have an account? <Link to="SignIn">Log in</Link></p>
            </Layout>
        
    )
};

export default SignUp;