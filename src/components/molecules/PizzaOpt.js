import React from 'react';
import {Field} from "react-final-form";

const PizzaOpt = ({value, validate, parse}) => {
    return (
        <>
            <div className="form__row">
                <label>Number of slices</label>
                <Field name="no_of_slices" validate={validate} parse={parse}>
                    {({ input, meta }) => (
                        <div>
                            <input {...input} type="number" placeholder="Enter number of slices"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
            </div>
            <div className="form__row">
                <label>Diameter{value ? <span>{value}</span> : ""}</label>
                <Field name="diameter" validate={validate} parse={parse}>
                    {({ input, meta }) => (
                        <div>
                            <input {...input} type="range" step="0.1" min="20" max="60"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
            </div>
        </>
    );
};

export default PizzaOpt;