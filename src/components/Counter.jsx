import React from "react";
import { useState } from "react";


const Counter = function () {
    const [count, setCount] = useState(0);

    function inkrement() {
        setCount(count + 1);
    }


    function dekrement() {
        setCount(count - 1);
    }
    return (

        <div>
            <h1>{count}</h1>
            <button onClick={inkrement}>
                Прибавить
            </button>

            <button onClick={dekrement}>
                Отнять
            </button>

        </div>

    );


};

export default Counter;