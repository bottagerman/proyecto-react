import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { WidthFull } from "@mui/icons-material";

const ItemCount = ({ stock, initial = 1 , onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(()=>{
    setContador(initial)
  },[initial])

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Stack spacing={2} direction="row">
        <Button onClick={restar} color="error" variant="contained">
          -
        </Button>
        <h2
          style={{
            border: "1px solid black",
            borderRadius: " 5px",
            paddingRight: "25px",
            paddingLeft: "25px",
          }}
        >
          {contador}
        </h2>
        <Button onClick={sumar} color="success" variant="contained">
          +
        </Button>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <Button
            onClick={() => onAdd(contador)}
            color="success"
            variant="outlined"
            style={{justifyContent:"center",
            flexDirection:"center"}}>
            Agregar al carrito
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default ItemCount;
