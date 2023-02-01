import { useCurrentDate } from "./useCurrentDate";
import "./style.css";

const TimeClock = () => {

    const currentDate = useCurrentDate();
  
    return (
        <p className="timeClock">
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
        </p>
    );
};

export default TimeClock;