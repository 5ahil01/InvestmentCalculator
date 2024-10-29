import React, { useState } from "react";

const Inputs = ({ handleChange, inputs }) => {
  const inputTagClass =
    "w-32 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200";
  const labelClass = "text-gray-700 font-medium";

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Initial Investment</label>
            <input
              type="number"
              value={inputs.initialInvestment}
              className={inputTagClass}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Expected Return (%)</label>
            <input
              type="number"
              value={inputs.expectedReturn}
              className={inputTagClass}
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Annual Investment</label>
            <input
              type="number"
              value={inputs.annualInvestment}
              className={inputTagClass}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Duration (Years)</label>
            <input
              type="number"
              value={inputs.duration}
              className={inputTagClass}
              onChange={(event) => handleChange("duration", event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
