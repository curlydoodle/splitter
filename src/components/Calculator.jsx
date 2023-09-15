import { CurrencyDollarIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { formatCurrency, tipOptions } from "../utils";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(tipOptions.at(2));
  const [peopleCount, setPeopleCount] = useState("");

  const canCalculate = bill > 0 && peopleCount > 0;
  const tipPerPerson = canCalculate ? (bill * (tip / 100)) / peopleCount : 0;
  const totalPerPerson = canCalculate ? bill / peopleCount + tipPerPerson : 0;

  const handleReset = () => {
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
              <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
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
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="0.00"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="tip"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Select tip %
          </label>
          <div className="mt-2">
            <select
              id="tip"
              required
              value={tip}
              onChange={(event) => setTip(event.target.value)}
              onBlur={(event) => event.target.reportValidity()}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
            >
              {tipOptions.map((tip) => (
                <option key={tip} value={tip}>
                  {tip}%
                </option>
              ))}
            </select>
          </div>
        </div>
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
              {formatCurrency(tipPerPerson)}
              <span className="text-sm font-normal text-gray-400">
                per person
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm/6 font-medium text-gray-500">Total</dt>
            <dd className="mt-2 flex items-baseline gap-x-2 text-4xl font-semibold tracking-tight text-green-600">
              {formatCurrency(totalPerPerson)}
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
