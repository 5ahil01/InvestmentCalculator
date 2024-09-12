import React, { useState } from "react";

const Inputs = ({ handleChange, inputs }) => {
  //Classes
  const inputTagClass = "border-2 border-black";

  return (
    <div className="h-500px border-2 border-red-500 flex flex-col items-center justify-center">
      <div className="my-3 flex justify-between w-[700px] border-2 border-red-950">
        <div className="flex gap-2">
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name=""
            id=""
            value={inputs.initialInvestment}
            className={inputTagClass}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name=""
            id=""
            value={inputs.annualInvestment}
            className={inputTagClass}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      {/* 2 */}
      <div className="my-3 flex justify-between w-[700px] border-2 border-red-950">
        <div className="flex gap-2">
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            name=""
            id=""
            value={inputs.expectedReturn}
            className={inputTagClass}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name=""
            id=""
            value={inputs.duration}
            className={inputTagClass}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
