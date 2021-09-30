import MeetupList from "../meetups/MeetupList";
import { useState, useEffect } from "react";
import axios from 'axios';


const AllMeetupsPage = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    async function fetchData(){
    const req = await axios.get('http://localhost:8001/products')
    console.log(req.data)
    setProducts(req.data)
  }
  fetchData();
  }, [])

  return (
    <section>
      <h1 >Products:</h1>
      <MeetupList meetups={products}/>
    </section>
  );
};

export default AllMeetupsPage;
