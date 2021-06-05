import React from 'react';

const Success = () => {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="error__cnt">
            <h1>Recipe successfully added!</h1>
            <button onClick={refreshPage}>Add another one</button>
        </div>
    );
};

export default Success;