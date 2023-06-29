import Form from "./components/UserInput/form";
import Header from "./components/Header/header";
import ResultTable from "./components/ResultsTable/results";

function App() {
  const calculateHandler = (userInput) => {

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable />
    </div>
  );
}

export default App;
