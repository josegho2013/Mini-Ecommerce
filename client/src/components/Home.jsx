import React, { useEffect, useState } from "react";
import axios from "axios";
import  Navbar  from "./Navbar";
import "../styles/home.css"
import Cards from "./Cards";


const dataUrl = "http://localhost:3000/turismo";

const Home = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    await axios.get(dataUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(async () => {
    await getApi();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cards">
        {data ? (
          data.map((po) => {
            return (
              <Cards
                key={po.id}
                id={po.id}
                name={po.name}
                img={po.img}
                description={po.description}
                date={po.date}
                amount={po.amount}
              
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>

  
    </div>
  );
};

export default Home;
