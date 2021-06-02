import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from "@fortawesome/free-solid-svg-icons";

const TitleHeader = () => {
    return (
        <header>
            <h2>Recipe</h2>
            <FontAwesomeIcon icon={faPizzaSlice}/>
            <h2>Today</h2>
        </header>
    );
};

export default TitleHeader;