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

      <div className={s.block}>
        {maleUser.map((elem) => (
          <CardMale key={elem.id} {...elem} deleteProfyle={deleteProfyle} />
        ))}
      </div>
    </div>
  );
}
