import React from 'react';
import Error from "../molecules/Error";
import Success from "../molecules/Success";

const Result = ({error}) => {
    return (
        <div>
            {error ? <Error/> : <Success/>}
        </div>
    );
};

export default Result;