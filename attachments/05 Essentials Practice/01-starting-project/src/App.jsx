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
    duration: 0,
    result: [],
  };
  
  const [investment, setInvestment] = useState(INITAL_INVESTMENT);
  const [isInputValid, setIsInputValid] = useState(false);

  function updateInvestment(key, value) {
    let newInvestment = { ...investment };

    newInvestment[key] = Number(value);

    setIsInputValid(newInvestment.duration >= 1);

    if (newInvestment.duration >= 1) {
      let result = calculateInvestmentResults(newInvestment);
      newInvestment.result = result;
    } else {
      newInvestment.result = [];
    }

    setInvestment(newInvestment);
  }

  return (
    <div>
      <Header />
      <Input
        investmentValue={investment}
        onUpdateInvestment={(key, newValue) => updateInvestment(key, newValue)}
      />
      {!isInputValid && <p className="center">Please fill in duration.</p>}
      {isInputValid && 
        <Result
          initialInvestment={investment.initialInvestment}
          results={investment.result}
        />
      }
    </div>
  );
}

export default App;
