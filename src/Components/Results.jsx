import React, { useState } from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const Results = ({ inputs }) => {
  const resultsData = calculateInvestmentResults(inputs);

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3 rounded-tl-lg">Year</th>
            <th className="px-6 py-3">Investment Value</th>
            <th className="px-6 py-3">Interest</th>
            <th className="px-6 py-3">Total Investment</th>
            <th className="px-6 py-3 rounded-tr-lg">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData, index) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              inputs.initialInvestment;

            const investedCapital = yearData.valueEndOfYear - totalInterest;

            return (
              <tr
                key={yearData.year}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 font-medium">{yearData.year}</td>
                <td className="px-6 py-4">
                  {formatter.format(yearData.valueEndOfYear)}
                </td>
                <td className="px-6 py-4">
                  {formatter.format(yearData.interest)}
                </td>
                <td className="px-6 py-4">
                  {formatter.format(yearData.annualInvestment)}
                </td>
                <td className="px-6 py-4">
                  {formatter.format(investedCapital)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Main App Component
const App = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = inputs.duration >= 1;

  function handleChange(variable, value) {
    setInputs((prevObj) => ({
      ...prevObj,
      [variable]: +value,
    }));
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
};

export default Results;
