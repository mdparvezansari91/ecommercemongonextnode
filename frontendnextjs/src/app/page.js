'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
  //       if (!response.ok) {
  //         throw new Error('Error in getting response');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once on mount

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL)
        if (!response === 200) {
          throw new Error('Error in getting response');
          }
          console.log({"fetchedResponse from Home/page.tsx":response})
          setData(response.data)
      } catch (error) {
        setError(error.message);
                
      }
    }
    fetchData();
  },[])
  return (
    <>
      <div>
        
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  );
}