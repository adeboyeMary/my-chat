import React from 'react';

import styles from './Layout.module.css';
// import bg-intro-desktop.png from './src';

const Layout = (props) => {
    return (
        <div className={`${styles.layout} ${props.className}`}>
            <div className={styles.container}>
                <div className={styles.section1}>
                    <h1> Bings</h1>
                </div>
                <div  className={styles.section2}>{props.children}</div>
            </div>
        </div>
    )
}

export default Layout;