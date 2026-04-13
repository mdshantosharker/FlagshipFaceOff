import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(phones);
  const [phones, setPhones] = useState(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.input.value;
    const searchedPhones = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase()),
    );
    setPhones(searchedPhones);
    e.target.reset();
    if (text === "") {
      setPhones(data);
    }
    // console.log(searchedPhones);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </div>
  );
};

export default Home;
