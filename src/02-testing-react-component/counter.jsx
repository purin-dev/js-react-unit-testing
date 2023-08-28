import {useState} from "react";

// The ultimate contrived react component. Clicking a button increases the count by 1
export default function Counter() {

    const [count, setCount] = useState(0)


    return (
        <>
            <span id={"count"}>Count: {count}</span>
            <br/>
            <button type={"button"} onClick={(evt)=>{setCount(count + 1)}}>Increase</button>
            <button type={"button"} onClick={(evt)=>{setCount(count - 1)}}>Decrease</button>
        </>

    )

}