"use client";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Typography, Button, Link } from '@mui/material';
import NavBar from '../components/NavBar';
import Restaurant from '../components/Restaurant';
import { useState, useEffect } from "react";

export default function Page() {
  const [restaurants, setRestaurants] = useState([])
  const [restaurant, setRestaurant] = useState()

  //Update restaurants
  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantsFromServer = await fetchRestaurants()
      setRestaurants(restaurantsFromServer)
    }

    getRestaurants()
  }, [])

  //Fetch restaurants
  const fetchRestaurants = async () => {
    const res = await fetch('http://localhost:5000/restaurants', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }) 
    const data = await res.json()
    // console.log(data)
    return data
  }

  const pickRestaurant = () => {
    // console.log(restaurants)
    let index = Math.floor(Math.random() * (restaurants.length));
    console.log(index)
    setRestaurant(restaurants[index]);
    // console.log(restaurant)
  }

return (
    <>
    <NavBar/>
    <br/>
      <Head>
        <title>RU Halal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h2" className={styles.title}>
          RU Halal?!
        </Typography>
        <Button onClick={() => pickRestaurant()} variant="contained">
          Pick!
        </Button>
        <br/>
        {restaurant == null ? (<></>) : (<Restaurant restaurant={restaurant}/>)}
      </main>
    </>
)
}