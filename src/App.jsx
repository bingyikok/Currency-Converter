import './App.css'
import CurrencyDropdown from './components/CurrencyDropdown';
import CurrencyConverter from './components/CurrencyConverter';
import AppContext from './AppContext';
import { useState } from 'react';

function App() {
  const [fromCurrency, setFromCurrency] = useState("SGD")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <>
      <AppContext.Provider value={{
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency
      }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
      <CurrencyConverter />
      </AppContext.Provider>
    </>
  )
}

export default App;
