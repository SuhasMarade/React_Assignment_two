import { useState } from "react";
import "./Counter.css"

function Counter() {
    const [x,setX] = useState(0);
    return (
        <div className="container">
            <div className="counter">{x}</div>
            <div className="btn-container">
                <button className="inc" onClick={() => setX(x+1)}>Inc</button>
                <button className="dec" onClick={() =>(x>0) && setX(x-1)}>Dec</button>
            </div>
        </div>

    )
}

export default Counter;