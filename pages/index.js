import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AddRestaurant from '../components/AddRestaurant';
import Restaurants from '../components/Restaurants';
import { useState, useEffect } from "react";

export default function Home() {
  const [restaurants, setRestaurants] = useState([])

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
    const res = await fetch('http://localhost:5000/restaurants')
    const data = await res.json()
    // console.log(data)
    return data
  }

  //Add Restaurant
  const addRestaurant = async (restaurant) => {
    const res = await fetch(`http://localhost:5000/restaurants`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    })
    const newRestaurant = await res.json()

    setRestaurants([...restaurants, newRestaurant])
  }

  return (
    <>
      <Head>
        <title>Restaurant Tracker App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Restaurant Tracker
        </h1>
        <AddRestaurant onAdd={addRestaurant}/>
        {restaurants.length > 0 ? 
        ( <Restaurants restaurants={restaurants}/>
        ) : (
        'No Restaurants'
      )}
      

      </main>
    </>
  )
}