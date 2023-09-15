import Calculator from "./components/Calculator.jsx";

const App = () => {
  return (
    <div className="flex min-h-full flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Split bills with friends &amp; colleagues
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default App;
