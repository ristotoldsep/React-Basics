import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  /* USING API */
  const [andmed, muudaAndmeid] = useState(null)

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((tulemused) => muudaAndmeid(tulemused));
    }, [])

  /* TIMER with calculation */
  const [timer, setTimer] = useState(0);

  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []); //Remove parentheses to render more than once = start timer

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]);


/* Inputs handling */
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const data = event.target.value;
    const valik = event.target.value;
    setInputs((previousState) => ({
      ...previousState,
      [name]: value,
      data,
      valik,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const nupuStiil = {
    color: "white",
    background: "black",
    padding: "12px 24px",
    borderRadius: "25px",
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "1200px",
        margin: "auto auto",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
      }}
    >

      {
        andmed && andmed.slice(0,3).map((item) => {
        return <p key={item.id}>id: {item.id} {item.title}</p>
    }) 
      }

  
      <hr></hr>
      Counter: {counter}&nbsp;
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <br></br>
      Calculation: {calculation}
      <br></br>
      <br></br>

      <hr></hr>
      <p>Lambine taimer: {timer}</p>
      <hr></hr>

      <form onSubmit={handleSubmit}>
        <label>
          Sisesta enda nimi:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Sisesta vanus:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <textarea
          name="data"
          value={inputs.data || ""}
          onChange={handleChange}
        />
        <br></br>

        <select name="valik" value={inputs.valik || ""} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>

        <br></br>
        <br></br>

        <input style={nupuStiil} type="submit" />
      </form>
    </div>
  );
};

export default App;
