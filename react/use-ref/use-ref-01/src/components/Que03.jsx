import React, { useRef, useState } from 'react';

const Que03 = () => {

    let [time, setTime] = useState(0);
    let timerIdRef = useRef(null);

    function start(){

        if(timerIdRef.current !== null) return

       timerIdRef.current =  setInterval(()=>{
            setTime(time=> time+1);
        },1000)

    }

    function stop(){

        clearInterval(timerIdRef.current);
        timerIdRef.current = null;

    }

    function reset(){

        setTime(0);
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;

    }

    return(
        <>

        <h1>Timer: {time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>

            
        </>
    )
}
export default Que03;