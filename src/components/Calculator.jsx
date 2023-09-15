import { BanknotesIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { currencyOptions, formatCurrency, tipOptions } from "../utils";

const Calculator = () => {
  const [currency, setCurrency] = useState(currencyOptions.at(0));
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(tipOptions.at(2));
  const [peopleCount, setPeopleCount] = useState("");

  const canCalculate = bill > 0 && peopleCount > 0;
  const tipPerPerson = canCalculate ? (bill * (tip / 100)) / peopleCount : 0;
  const totalPerPerson = canCalculate ? bill / peopleCount + tipPerPerson : 0;

  const handleReset = () => {
    setCurrency(currencyOptions.at(0));
    setBill("");
    setTip(tipOptions.at(2));
    setPeopleCount("");
  };

  return (
    <div className="space-y-10">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="bill"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Bill
          </label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <BanknotesIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="bill"
              required
              min={0.01}
              step={0.01}
              value={bill}
              onChange={(event) => setBill(event.target.value)}
              onBlur={(event) => event.target.reportValidity()}
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                aria-label="Currency"
              >
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="block text-sm/6 font-medium text-gray-900">
            Select tip %
          </legend>
          <div className="mt-2 grid grid-cols-5 gap-3">
            {tipOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={option}
                  name="tip"
                  value={option}
                  onChange={(event) => setTip(event.target.value)}
                  defaultChecked={option === tip}
                  className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                />
                <label
                  htmlFor={option}
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                >
                  {option}%
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div>
          <label
            htmlFor="peopleCount"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Number of people
          </label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UserPlusIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="peopleCount"
              required
              min={1}
              value={peopleCount}
              onChange={(event) => setPeopleCount(event.target.value)}
              onBlur={(event) => event.target.reportValidity()}
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="0"
            />
          </div>
        </div>
      </form>
      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-sm/6 font-medium text-gray-900">
              Check your results
            </span>
          </div>
        </div>
        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-sm/6 font-medium text-gray-500">Tip amount</dt>
            <dd className="mt-2 flex items-baseline gap-x-2 text-4xl font-semibold tracking-tight text-green-600">
              {formatCurrency(tipPerPerson, currency)}
              <span className="text-sm font-normal text-gray-400">
                per person
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm/6 font-medium text-gray-500">Total</dt>
            <dd className="mt-2 flex items-baseline gap-x-2 text-4xl font-semibold tracking-tight text-green-600">
              {formatCurrency(totalPerPerson, currency)}
              <span className="text-sm font-normal text-gray-400">
                per person
              </span>
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col">
          <button
            onClick={handleReset}
            className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
