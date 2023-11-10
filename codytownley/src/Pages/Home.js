import React, { useEffect } from "react";
import Body from "../Components/Body";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    
    return (
    <Body />
    );
}

export default Home;
