import React from "react";
import "../App.css";

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          X
        </div>
        <label htmlFor="name">FullName : </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={rest.name}
        />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
          value={rest.email}
        />

        <label htmlFor="age">Age : </label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleOnChange}
          value={rest.age}
        />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Formtable;
