import React from "react";
import Items from "../Items/Items";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alingItems: "center",
        flexWrap: "wrap",
        marginTop: "30px",
      }}
    >
      {items.map((element) => {
        return (
          <div
            style={{
              border: "1px solid brown",
              borderRadius: "4px",
              margin: "20px 20px",
            }}
            key={element.id} >
            <Items element={element} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
