"use client";
import { useEffect, useRef, useState } from "react";

export function Name() {
    const [name, setName] = useState("");
    const previousName = useRef("");

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
            <div>My name previous name is: {previousName.current}</div>
        </div>
    );
}

//use ref never causes our component to re-render
