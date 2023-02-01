import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // const formatDate = (date) => {
    //     date.toLocaleString(undefined, {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long",
    //     year: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //     });
    // };

    return currentDate;
};