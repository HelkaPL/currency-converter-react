import "./style.css"

const Exchanger = () => {

    return (
        <form className="exchanger">
            <fieldset>
                <legend className="exchanger__legend">Oszacuj wartość swojej waluty</legend>
                <p>
                    <label className="exchanger__label">
                        Posiadam walutę: <select className="js-inputCurrency">
                            <option value="EUR" selected>Euro (EUR)</option>
                            <option value="PLN" >Polski Złoty (PLN)</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label className="exchanger__label">
                        w ilości: <input className="js-inputValue" type="number" step="0.01" value="0" />
                    </label>
                </p>
                <p>
                    <label className="exchanger__label">
                        Chcę otrzymać: <select className="js-outputCurrency">
                            <option value="EUR" >Euro (EUR)</option>
                            <option value="PLN" selected>Polski Złoty (PLN)</option>
                        </select>
                    </label>
                </p>
                <p>Po sprawdzeniu kursów NBP <span className="js-exchangeRatio"></span></p>
                <p>
                    <label className="exchanger__label">
                        wychodzi że otrzymasz: <span className="exchanger__label--bold js-outputValue">0.00</span> szt.
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