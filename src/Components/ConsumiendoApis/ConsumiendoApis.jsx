import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  return useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");
    getData
      .then((res) => res.json())
      .then((res) => console.log("then: ", res))
      .catch((err) => console.log("catch: ", err));
  }, []);
 
};

export default ConsumiendoApis;
