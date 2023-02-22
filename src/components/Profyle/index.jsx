import React from "react";
import CardMale from "../CardMale";
import s from "./style.module.css";

export default function Profyle({
  name,
  gender,
  link,
  deleteProfyle,
  id,
  data,
}) {
  const maleUser = data.filter((elem) => elem.gender === "Male");

  return (
    <div className={s.container}>
      <h1>Male</h1>
      {/* <img src={link} alt="Profyle" width="125px" height="144px" />
      <p className={s.name}>{name[0].toUpperCase() + name.slice(1)}</p> */}
      {/* <p>{gender}</p> */}
      {/* <button onClick={() => deleteProfyle(id)}>DELETE</button> */}
      {maleUser.length > 0 ? (
        <CardMale maleUser={maleUser} deleteProfyle={deleteProfyle} />
      ) : (
        ""
      )}
      {/* <CardMale maleUser={maleUser} deleteProfyle={deleteProfyle} /> */}
      {/* <div className={s.block}>
        {maleUser.map((elem) => (
          <CardMale key={elem.id} {...elem} deleteProfyle={deleteProfyle} />
        ))}
      </div> */}
    </div>
  );
}
