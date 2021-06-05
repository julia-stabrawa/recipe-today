import React from 'react';

const ActionBtn = ({submit, reset, click}) => {
    return (
        <div className="buttons">
            <button type="submit" disabled={submit}>
                Submit
            </button>
            <button
                type="button"
                onClick={click}
                disabled={reset}
            >
                Reset
            </button>
        </div>
    );
};

export default ActionBtn;