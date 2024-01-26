import Header from "./components/header.jsx";
import Input from "./components/input.jsx";
import Result from "./components/result.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {

  const INITAL_INVESTMENT = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
    result: []
  }

  let [investment, setInvestment] = useState(INITAL_INVESTMENT);

  function updateInvestment(key, value) {

    let newInvestment = { ...investment };

    newInvestment[key] = Number(value);

    let result = calculateInvestmentResults(newInvestment);
    newInvestment.result = result;

    setInvestment(newInvestment);
  }

  return (
    <div>
      <Header />
      <Input investmentValue={investment}
        onUpdateInvestment={(key, newValue) => updateInvestment(key, newValue)}
      />
      <Result initialInvestment={investment.initialInvestment} results={investment.result} />
    </div>
  );
}

export default App;
