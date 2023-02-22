import React from "react";
import s from "./style.module.css";

export default function CardFemale({
  name,
  link,
  gender,
  id,
  deleteProfyle,
  data,
  femaleUser,
}) {
  return (
    <div className={s.container}>
      {/* <img src={link} alt="Profyle" width="125px" height="144px" />
      <p className={s.name}>{name[0].toUpperCase() + name.slice(1)}</p> */}
      {/* <p>{gender}</p> */}
      {/* <button onClick={() => deleteProfyle(id)}>DELETE</button> */}

      {femaleUser.map(({id, link, name, gender }) => (
        <div className={s.block} key={id}>
          <img src={link} alt="Profyle" width="125px" height="144px" />
          <p className={s.name}>{name[0].toUpperCase() + name.slice(1)}</p>
          <p>{gender}</p>
          <button onClick={() => deleteProfyle(id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}
