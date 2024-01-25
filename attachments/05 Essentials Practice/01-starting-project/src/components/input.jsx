import { useState } from "react";

export default function Input() {

  let [investment, setInvestment] = useState([0,0,0,0]);

  function OnChangeInitalInvestment(event) {
    let currentInvestment = [...investment];

    currentInvestment[0] = event.value;

    setInvestment(currentInvestment);
  }

  function OnChangeAnnualInvestment(event) {
    let currentInvestment = [...investment];

    currentInvestment[1] = event.value;

    setInvestment(currentInvestment);
  }


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment:</label>
          <input value={investment[0]} onChange={(x) => OnChangeInitalInvestment(x)} />
        </p>
        <p>
          <label>Annual investment:</label>
          <input value={investment[1]} onChange={(x) => OnChangeAnnualInvestment(x)} />
        </p>
      </div>
      <div className="input-group">
        <p><label>Expected return:</label>
          <input />
        </p>
        <p> <label>Duration:</label>
          <input />
        </p>
      </div>
    </section>
  );
}