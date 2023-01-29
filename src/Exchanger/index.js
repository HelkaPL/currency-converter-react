import { useState } from "react";
import "./style.css"

const Exchanger = () => {
    const ratioEUR = 4.71;
    const ratioPLN = 1;

    const [inCurrency, setInputCurrency] = useState("1");

    const onSelectInputChange = ({ target }) => setInputCurrency(target.value);
    
    const [inAmount, setInAmount] = useState("0.00");
    
    const onInAmountChange = ({ target }) => setInAmount(target.value);

    const [outCurrency, setOutputCurrency] = useState("1");
    
    const onSelectOutputChange = ({ target }) => setOutputCurrency(target.value);
    
    const [outValue, setOutValue] = useState("");

    const calculateValue = (inRatio, inAmount, outRatio) => {
        const newOutValue = inAmount * (inRatio / outRatio);
        setOutValue(newOutValue);

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
                            <option value={ratioEUR}>Euro (EUR)</option>
                            <option value={ratioPLN}>Polski Złoty (PLN)</option>
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
                            <option value={ratioEUR}>Euro (EUR)</option>
                            <option value={ratioPLN}>Polski Złoty (PLN)</option>
                        </select>
                    </label>
                </p>
                <p>Po sprawdzeniu kursów NBP <span className="js-exchangeRatio"></span></p>
                <p>
                    <label className="exchanger__label">
                        wychodzi że otrzymasz: <span className="exchanger__label--bold">{outValue.toFixed(2)}</span> szt.
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="exchanger__button">
                    Przelicz !
                </button>
            </p>
        </form>
    )
}

export default Exchanger;