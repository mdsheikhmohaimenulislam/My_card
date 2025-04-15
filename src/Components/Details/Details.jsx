import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const Details = () => {
  const use = useLoaderData();

  
//   use param hooks 
  const param = useParams()
  const {userId} = param
  console.log(userId);

  const { website, name,phone, id} = use;

  const navegaite = useNavigate()

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{website}</p>
      <p>{phone}</p>
      <button onClick={() => navegaite(-1)}>Go Back</button>
    </div>
  );
};

export default Details;
