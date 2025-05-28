import { useEffect, useState } from "react";

export function Questions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./a.json")
      .then((response) => response.json())
      .then((jsondata) => {
        console.log("data", jsondata);
        setData(jsondata);
      })
      .catch((error) => {
        console.error("Error al cargar la data", error);
      });
  }, []);

  const dataActive = data.filter((item) => item.clase === "true");

  return (
    <div>
      {dataActive.length === 0 ? (
        <p>error</p>
      ) : (
        dataActive.map((item) => (
          <div key={item.id}>
            <h3>{item.question}</h3>
            <p>{item.a1}</p>
            <p>{item.a2}</p>
            <p>{item.a3}</p>
            <p>{item.a4}</p>
          </div>
        ))
      )}
    </div>
  );
}
