import Header from "./components/Header/Header.jsx"
import Results from "./components/Results/Results.jsx";
import UserInput from "./components/UserInput/UserInput.jsx"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue, // "+" force string value to number
        };
    });
  }

  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput}/>}
    </div>
  )
}

export default App
