import React from "react";
import style from "./card.module.css"

export const Card = ({ name, setData, id }) => {
  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
  };

  const editItem = () => {
    let newName = prompt("new userName");
    setData((p) => p.map((item) => item.id == id ? {...item, userName: newName}: item))};

  return (
    <div className={style.card_block}>
      <h1>
        {name}
      </h1>
      <div className={style.block}>
        <button className={style.del} onClick={deleteItem}>delete</button>
        <button className={style.edit} onClick={editItem}>edit</button>
      </div>
    </div>
  );
};
