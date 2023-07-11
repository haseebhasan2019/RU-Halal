"use client";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Typography } from '@mui/material';
import NavBar from '../components/NavBar';

export default function Page() {
return (
    <>
    <NavBar/>
    <br/>
      <Head>
        <title>RU Halal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h2" className={styles.title}>
          RU Halal?!
        </Typography>
      </main>
    </>
)
}