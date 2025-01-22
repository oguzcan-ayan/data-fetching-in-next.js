import React from 'react';
import Test from './test';

/* export const getData = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // cache: 'no-store'
    // next: { revalidate: 10 }
  });
  return res.json();
} */

/* export const getData2 = async () => {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    // cache: 'no-store'
    // next: { revalidate: 10 }
  });
  return res.json();
} */

/* export const getData3 = async () => {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    // cache: 'no-store'
    // next: { revalidate: 10 }
  });
  return res.json();
} */

async function HomePage() {

  // const data = await getData();
  /*   const data2 = await getData2();
    const data3 = await getData3(); */

  // console.log(data);

  // const dataResult = await Promise.all([data, data2, data3]);
  // const [dataResult, dataResult2, dataResult3] = await Promise.all([data, data2, data3]);

  // console.log({dataResult, dataResult2, dataResult3});

  return (
    <>
{/*       <title>{data.title}</title>
      <h1>Data fetching: {data.title}</h1>
      <Test /> */}
      <div>HomePage</div>
    </>
  )
}

export default HomePage;