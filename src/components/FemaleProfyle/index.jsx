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
      <div className={s.block}>
        {femaleUser.map((elem) => (
          <CardFemale key={elem.id} {...elem} deleteProfyle={deleteProfyle} />
        ))}
      </div>
    </div>
  );
}
