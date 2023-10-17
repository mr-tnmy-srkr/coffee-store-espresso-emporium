import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const LoadedCoffees = useLoaderData();
  //no. 13 delete hobar por ui update
const [coffees,setCoffees]=useState(LoadedCoffees)


  return (
    <div className="m-20">
      <h1 className="text-6xl text-center my-20 text-purple-600">
        Hot cold coffees : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
