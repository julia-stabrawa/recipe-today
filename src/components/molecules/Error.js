import React from 'react';

const Error = () => {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="error__cnt">
            <h1>Something went wrong :(</h1>
            <button onClick={refreshPage}>Go back</button>
        </div>
    );
};

export default Error;