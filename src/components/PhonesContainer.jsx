import React from "react";
import { useLoaderData } from "react-router";
import PhoneCard from "./PhoneCard";
import MyButton from "./Shared/MyButton";

const PhonesContainer = () => {
  const phones = useLoaderData();
  //   console.log(phones);
  return (
    <div>
      <div
        className="grid grid-cols-1 gap-8 mb-8
     md:grid-cols-2 lg:grid-cols-3"
      >
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
      <div className="text-center">
        <MyButton> Show All</MyButton>
      </div>
    </div>
  );
};

export default PhonesContainer;
