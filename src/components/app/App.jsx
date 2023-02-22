import AddUser from "../AddUser";
import { useEffect, useState } from "react";
import Profyle from "../Profyle";
import FemaleProfyle from "../FemaleProfyle";
import s from "./style.module.css";

function App() {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) ?? []
  );

  useEffect(() => localStorage.setItem("data", JSON.stringify(data)), [data]);

  const profileCreate = (name, link, gender) => {
    const newProfile = {
      name,
      link,
      gender,
      id: Date.now(),
    };
    setData([...data, newProfile]);
  };

  const deleteProfyle = (idEl) =>
    setData(data.filter((elem) => elem.id !== idEl));

  console.log(data);
  const femaleUser = data.filter((elem) => elem.gender === "Female");

  return (
    <div className={s.container}>
      <div>
        <AddUser profileCreate={profileCreate} />
      </div>
      <div>
        <Profyle data={data} deleteProfyle={deleteProfyle} />
        <FemaleProfyle data={data} deleteProfyle={deleteProfyle} />
      </div>

      {/* <div>
        {data.map((elem) => {
          return elem.gender === "Male" ? (
            <Profyle
              key={elem.id}
              {...elem}
              // data={data}
            
              deleteProfyle={deleteProfyle}
            />
          ) : (
            <FemaleProfyle
              key={elem.id}
              {...elem}
              // data={data}
              deleteProfyle={deleteProfyle}
              
              
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
