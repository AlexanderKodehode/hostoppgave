import React from "react";

const LandingPage = () => {
    const {count} = useContext(CounterText);

    return (
        <>
            <h1>Welcome to my page</h1>
            <p>{count}</p>
        </>
    )
}

export default LandingPage