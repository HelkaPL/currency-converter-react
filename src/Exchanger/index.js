import { useState } from "react";
import TimeClock from "./TimeClock";
import { Button, Fieldset, Label, Legend, StyledForm } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Oszacuj wartość swojej waluty
                </Legend>
                <TimeClock />
                <Label>
                    Posiadam walutę:
                    {" "}
                    <select value={inCurrency} onChange={onSelectInputChange}>
                        {exchangeRates.map(({ id, ratio, currencyCode, currencyName }) => (
                            <option
                                key={id}
                                value={ratio}
                            >
                                {`${currencyName} (${currencyCode})`}
                            </option>
                        ))}
                    </select>
                </Label>
                <Label>
                    w ilości:
                    {" "}
                    <input
                        type="number"
                        value={inAmount}
                        step="0.01"
                        min="0"
                        onChange={onInAmountChange}
                    />
                </Label>
                <Label>
                    Chcę otrzymać:
                    {" "}
                    <select value={outCurrency} onChange={onSelectOutputChange}>
                        {exchangeRates.map(({ id, ratio, currencyCode, currencyName }) => (
                            <option
                                key={id}
                                value={ratio}
                            >
                                {`${currencyName} (${currencyCode})`}
                            </option>
                        ))}
                    </select>
                </Label>
                <Button>
                    Sprawdz wartość !
                </Button>
                <Label as="p">Po sprawdzeniu kursów NBP <span>na dzień 2023-01-30</span></Label>
                <Label>
                    wychodzi że otrzymasz:
                    <Label
                        as="span"
                        bold
                    >
                        {" "}
                        {outValue}
                    </Label>
                    {" "}
                    {outCurrencyCode}
                </Label>
            </Fieldset>
        </StyledForm>
    )
}

export default Exchanger;