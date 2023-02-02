import { useState, useEffect } from "react";

const API_URL = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json"

export const useExchangeData = () => {
    
    // Object with some basic data
    const sampleExchangeData = {
        status: "loading",
    }
    sessionStorage.setItem("exchangeData", JSON.stringify(sampleExchangeData));
    // checking if there are some data
    const sessionExchangeData = JSON.parse(sessionStorage.getItem("exchangeData"));
    
    const [exchangeData, setExchangeData] = useState({status: "loading"});

    useEffect(() => {
        sessionStorage.setItem("exchangeData", JSON.stringify(exchangeData));
      }, [exchangeData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if(!response.ok) {
                    throw new Error(response.statusText);
                }

                const nbp = await response.json();

                setExchangeData(
                    {
                        status: "success",
                        date: nbp[0].effectiveDate,
                        ratios: nbp[0].rates,
                    }
                );
            }
            catch {
                setExchangeData({
                    status: "error",
                });
            }
        };
        
            setTimeout(fetchData, 1000);
    }, []);
      
    return exchangeData;
}