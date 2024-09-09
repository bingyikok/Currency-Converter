import AppContext from '../AppContext'
import './CurrencyStyling.css'
import { useState, useEffect, useContext } from 'react'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0)
    const [output, setOutput] = useState(0)

    const { fromCurrency, toCurrency } = useContext(AppContext)

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/fa5f900352cf61665a188916/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .then(response => response.json())
        .then(data => {
            setOutput(data.conversion_result)
        })
    }, [amount, fromCurrency, toCurrency])

    const handleChange = (event) => {
        setAmount(event.target.value)
    }

    return(
        <div className='container'>
            <input
            value = {amount}
            placeHolder ="Enter Amount"
            id="currencyInput"
            onChange={handleChange}>
            </input>
            <p>{fromCurrency}</p>
            <p>=</p>
            <p id='currencyOutput'>{output}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter;