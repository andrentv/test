import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About us</title>
                <link rel="icon" href="/public/letrav.ico" />
            </Head> 
            <div className={styles.description}>
                <h1>
                    Our family, 120 years make the best pizza in the world!
                </h1>
                <p>
                    Ask any time, from anywhere over our neighborhood, mobile, phone or whatsapp.
                </p>
            </div>
            <img className={styles.oven} src="https://images.unsplash.com/photo-1536622308015-0740925b8221?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Wood Oven" />

        
        </div>
      
    )
}