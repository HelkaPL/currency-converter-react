import { useCurrentDate } from "./useCurrentDate";
import { Clock } from "./styled";

const TimeClock = () => {

    const currentDate = useCurrentDate();
  
    return (
        <Clock>
            Dziś jest:
            {" "}
            {currentDate.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </Clock>
    );
};

export default TimeClock;