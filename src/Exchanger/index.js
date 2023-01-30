import { useState } from "react";
import "./style.css"

const Exchanger = () => {
    const exchangeRates = [
        {
            id: 1,
            currencyName: "Polski Złoty",
            currencyCode: "PLN",
            ratio: 1
        },
        {
            id: 2,
            currencyName: "Euro",
            currencyCode: "EUR",
            ratio: 4.7160
        },
        {
            id: 3,
            currencyName: "Dolar Amerykański",
            currencyCode: "USD",
            ratio: 4.3258
        },
    ]

    const [inCurrency, setInputCurrency] = useState("1");

    const onSelectInputChange = ({ target }) => setInputCurrency(target.value);
    
    const [inAmount, setInAmount] = useState("0.00");
    
    const onInAmountChange = ({ target }) => setInAmount(target.value);

    const [outCurrency, setOutputCurrency] = useState("1");
    
    const onSelectOutputChange = ({ target }) => {
        setOutputCurrency(target.value);
        setOutputCurrencyCode(exchangeRates[target.options.selectedIndex].currencyCode);
        setOutValue("?");
    };
    
    const [outValue, setOutValue] = useState("?");

    const [outCurrencyCode, setOutputCurrencyCode] = useState("PLN");


    const calculateValue = (inRatio, inAmount, outRatio) => {
        const newOutValue = inAmount * (inRatio / outRatio);
        setOutValue(newOutValue.toFixed(2));

    };

    const onFormSubmit = (e) => {
       e.preventDefault();
       calculateValue(inCurrency, inAmount, outCurrency);

    }
    return (
        <form
            onSubmit={onFormSubmit}
            className="exchanger"
        >
            <fieldset>
                <legend className="exchanger__legend">Oszacuj wartość swojej waluty</legend>
                <p>
                    <label className="exchanger__label">
                        Posiadam walutę:
                        <select value={inCurrency} onChange={onSelectInputChange}>
                        {exchangeRates.map(({ id, ratio, currencyCode, currencyName}) => (
                            <option
                              key={id}
                              value={ratio}
                            >
                            {`${currencyName} (${currencyCode})`}
                            </option>        
                        ))}; 
                        </select>
                    </label>
                </p>
                <p>
                    <label className="exchanger__label">
                        w ilości: 
                        <input 
                          type="number"
                          value={inAmount}
                          step="0.01"
                          min="0"
                          onChange={onInAmountChange}
                        />
                    </label>
                </p>
                <p>
                    <label className="exchanger__label">
                        Chcę otrzymać: 
                        <select value={outCurrency} onChange={onSelectOutputChange}>
                        {exchangeRates.map(({ id, ratio, currencyCode, currencyName}) => (
                            <option
                              key={id}
                              value={ratio}
                            >
                            {`${currencyName} (${currencyCode})`}
                            </option>        
                        ))}; 
                        </select>
                    </label>
                </p>
                <p>
                <button className="exchanger__button">
                    Sprawdz wartość !
                </button>
            </p>
                <p>Po sprawdzeniu kursów NBP <span>na dzień 2023-01-30</span></p>
                <p>
                    <label className="exchanger__label">
                        wychodzi że otrzymasz: <span className="exchanger__label--bold">{`${outValue}`}</span> {outCurrencyCode}
                    </label>
                </p>
            </fieldset>
        </form>
    )
}

export default Exchanger;