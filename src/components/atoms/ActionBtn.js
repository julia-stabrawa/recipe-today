import React from 'react';

const ActionBtn = ({disabled}) => {
    return (
        <>
            <button type="submit" disabled={disabled}>Add recipe</button>
        </>
    );
};

export default ActionBtn;