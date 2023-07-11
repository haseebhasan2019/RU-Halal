"use client";

import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import AddRestaurant from '../../components/AddRestaurant';
import Restaurants from '../../components/Restaurants';
import RestaurantsTable from '../../components/RestaurantsTable';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import { CleaningServices } from '@mui/icons-material';

export default function Page() {
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

  //Add Restaurant
  const addRestaurant = async (restaurant) => {
    const res = await fetch(`http://localhost:5000/restaurants`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(restaurant),
    })
    const newRestaurant = await res.json()

    setRestaurants([...restaurants, newRestaurant])
  }

  //Delete Restaurant
  const deleteRestaurant = async (id, name) => {
    if (
      !confirm(`Are you sure you want to delete ${name}`)
    ) {
      return;
    }
    await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: 'DELETE',
    })
    // console.log('delete', id);
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id))
  }

  //Edit Restaurant
  const editRestaurant = async ({ exitEditingMode, row, values }) => {
    //Do Form Validation
    //Change Database
    const res = await fetch(`http://localhost:5000/restaurants/${row.getValue('id')}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(values),
    })
    //Change State
    restaurants[row.index] = values;
    setRestaurants([...restaurants]);
    exitEditingMode();
  }


  return (
    <>
      <Head>
        <title>RU Halal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h2" className={styles.title}>
          RU Halal?!
        </Typography>
      {restaurants.length > 0 ? 
        ( <RestaurantsTable 
            data={restaurants} 
            onDelete={deleteRestaurant}
            onEdit={editRestaurant}/>
        ) : (
        'No Restaurants'
      )}
      

      </main>
    </>
  )
}
