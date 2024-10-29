import { useState } from "react";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Header />
        <Inputs handleChange={handleChange} inputs={inputs} />
        {!isInputValid && (
          <p className="text-red-500 text-center mt-4">
            Please enter a valid duration
          </p>
        )}
        {isInputValid && <Results inputs={inputs} />}
      </div>
    </div>
  );
}

export default App;
