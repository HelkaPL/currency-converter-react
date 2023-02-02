import { useState, useEffect } from "react";
import TimeClock from "./TimeClock";
import { Button, Fieldset, Label, Legend, Select, StyledForm } from "./styled";

const Exchanger = () => {
    const exchangeData = {
        status: "success",
        date: "2023-01-30",
        ratios: [
            {
                currency: "Polski Złoty",
                code: "PLN",
                mid: 1
            },
            {
                currency: "Euro",
                code: "EUR",
                mid: 4.7160
            },
            {
                currency: "Dolar Amerykański",
                code: "USD",
                mid: 4.3258
            },
            {
                currency: "Kumkwat Miedzyzjadliwy",
                code: "KMZ",
                mid: 44.3258
            },
        ],
        
    }
    
    const [inCurrency, setInputCurrency] = useState("PLN");
    const [inAmount, setInAmount] = useState("0.00");
    const [outCurrency, setOutputCurrency] = useState("PLN");
    const [outValue, setOutValue] = useState("0.00");
    const [outCurrencyCode, setOutputCurrencyCode] = useState("PLN");

    
    
    const onSelectInputChange = ({ target }) => setInputCurrency(target.value);
    const onInAmountChange = ({ target }) => setInAmount(target.value);


    const onSelectOutputChange = ({ target }) => {
        setOutputCurrency(target.value);
        setOutputCurrencyCode(target.value);
        setOutValue("?");
    };




    const calculateValue = (inCurrency, inAmount, outCurrency) => {
        const inRatio = exchangeData.ratios.find(({ code }) => code === inCurrency)
        const outRatio = exchangeData.ratios.find(({ code }) => code === outCurrency)
        const newOutValue = inAmount * (inRatio.mid / outRatio.mid);
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
                    <Select value={inCurrency} onChange={onSelectInputChange}>
                        {exchangeData.ratios.map(({ currency, code }) => (
                            <option
                                key={code}
                                value={code}
                            >
                                {`${currency} (${code})`}
                            </option>
                        ))}
                    </Select>
                </Label>
                <Label>
                    w ilości:
                    {" "}
                    <input
                        type="number"
                        value={inAmount}
                        step="1"
                        min="0.00"
                        onChange={onInAmountChange}
                    />
                </Label>
                <Label>
                    Chcę otrzymać:
                    {" "}
                    <Select value={outCurrency} onChange={onSelectOutputChange}>
                    {exchangeData.ratios.map(({ currency, code }) => (
                            <option
                                key={code}
                                value={code}
                            >
                                {`${currency} (${code})`}
                            </option>
                        ))}
                    </Select>
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