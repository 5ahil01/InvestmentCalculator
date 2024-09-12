import React, { useState } from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const Results = ({ inputs }) => {
  const resultsData = calculateInvestmentResults(inputs);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Investment</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              inputs.initialInvestment;

            const investedCapital = yearData.valueEndOfYear - totalIntrest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.annualInvestment)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
