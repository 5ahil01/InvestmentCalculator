import { useState } from "react";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import { Result } from "postcss";
import Results from "./Components/Results";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = inputs.duration >= 1;

  function handleChange(variable, value) {
    setInputs((prevObj) => {
      return { ...prevObj, [variable]: +value };
    });
  }

  return (
    <div className="px-32">
      <Header />
      <Inputs handleChange={handleChange} inputs={inputs} />
      {!isInputValid && <p>Please enter a valid duration </p>}
      {isInputValid && <Results inputs={inputs} />}
    </div>
  );
}

export default App;
