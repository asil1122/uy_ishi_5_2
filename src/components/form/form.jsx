import React from "react";
import style from "./form.module.css";

export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [...pState, { userName: inputValue, id: Date.now() }];
    });

    setInputValue("");
  };

  return (
    <form className={style.form_block} onSubmit={submit}>
      <div className={style.form}>
      <input className={style.input}
        onChange={(e) => setInputValue(e.target.value)}
        name="userName"
        type="text"
        value={inputValue}
        placeholder="user name"
      />
      </div>
      <button className={style.btn} type="submit">send</button>
    </form>
  );
};
