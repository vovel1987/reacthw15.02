import React from "react";
import s from  './style.module.css'
export default function AddUser({ profileCreate, profileMale }) {
  const submit = (e) => {
    e.preventDefault();
    const { name, link, gender } = e.target;
    console.log(gender.value);
    // if (gender.value === "Male") {
    //   return profileMale(name.value, link.value, gender.value);
    // } else {
    //   profileCreate(name.value, link.value, gender.value);
    // }
    // gender.value === "Male"
    //   ? profileMale(name.value, link.value, gender.value)
    //   : profileCreate(name.value, link.value, gender.value);
    profileCreate(name.value, link.value, gender.value);
    name.value = "";
    link.value = "";
    gender.value = "";
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={submit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="link" placeholder="Link" required />
        {/* <input type="text" name="gender" placeholder="Gender" list="listP" /> */}
        <select name="gender">
          <option value="">Welche gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <button>ADD</button>
      </form>
    </div>
  );
}
