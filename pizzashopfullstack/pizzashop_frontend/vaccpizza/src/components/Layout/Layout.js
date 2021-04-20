import React from 'react'
import Head from 'next/head';
import styles from './Layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Shop</title>
                <link rel='icon' href='/public/letrav.ico' />
            </Head>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}><a href="/" target="_blank">Made by Vaccpizza </a></footer>
            <div className={styles.freepick}>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></div>
        </div>
    )
}
