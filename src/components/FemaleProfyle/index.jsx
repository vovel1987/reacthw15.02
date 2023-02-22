import React from "react";
import CardFemale from "../CardFemale";
import s from "./style.module.css";

export default function FemaleProfyle({
  name,
  link,
  gender,
  id,
  deleteProfyle,
  data,
}) {
  const femaleUser = data.filter((elem) => elem.gender === "Female");
  return (
    <div className={s.container}>
      <h1>Female</h1>
      {/* <img src={link} alt="Profyle" width="125px" height="144px" />
      <p className={s.name}>{name[0].toUpperCase() + name.slice(1)}</p>
       <p>{gender}</p> 
      <button onClick={() => deleteProfyle(id)}>DELETE</button>  */}
      {femaleUser.length > 0 ? (
        <CardFemale femaleUser={femaleUser} deleteProfyle={deleteProfyle} />
      ) : (
        ""
      )}
      {/* <CardFemale femaleUser={femaleUser} deleteProfyle={deleteProfyle} /> */}
      {/* <div className={s.block}>
        {femaleUser.map((elem) => (
          <CardFemale key={elem.id} {...elem} deleteProfyle={deleteProfyle} />
        ))}
      </div> */}
    </div>
  );
}
