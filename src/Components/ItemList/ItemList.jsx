import React from "react";
import Items from "../Items/Items";

const ItemList = ({ items }) => {
  return (
    <div style={ {
        display: "flex",
        justifyContent: "space-evenly",
        alingItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
    }

    }>
      {items.map((element) => {
        return (
          <div>
            <Items key={element.id} element={element} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
