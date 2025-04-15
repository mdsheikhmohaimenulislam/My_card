import React from "react";
import { Link, useNavigate } from "react-router";

const DisplayData = ({ use }) => {
  const { name, email, username, id } = use;

  const navegaite = useNavigate();
  const handleNavegite = () => {
    // navegaite("/mobile");
    navegaite(`/user/${id}`)
  };

  return (
    <div className="border-amber-400 border-2">
      <p>{username}</p>
      <p>{name}</p>
      <p>{email}</p>
      <Link to={`/user/${id}`}>show details</Link>

      {/* button use link cas */}
      {/* <Link to={`/user/${id}`}><button>show details</button></Link> */}

      {/* button handle hooks use cas */}
      <button onClick={handleNavegite}>show details: {id}</button>
    </div>
  );
};

export default DisplayData;
