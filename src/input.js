import React, { useState } from "react";

function Component() {
  const [inputValor, setInputValor] = useState("");

  const OnChangeInput = (event) => {
    setInputValor(event.target.value);
  };

  const ClickButton = () => {
    return <p>{inputValor === "54 cm2" ? "Correcta" : "Incorrecta"}</p>;
  };

  const handleClick = () => {
    const valueToUse = inputValor;
  };

  return (
    <>
      <input type="text" value={inputValor} onChange={OnChangeInput}></input>
      <button onClick={ClickButton}>COMPROBAR</button>
      <p>Tu respuesta es: </p>
      <ClickButton/>
    </>
  );
}
export default Component;
