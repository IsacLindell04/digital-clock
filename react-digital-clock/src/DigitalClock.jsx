import React, {useState, useEffect, useCallback} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;