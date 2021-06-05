import React from 'react';
import {Field} from "react-final-form";

const SandwichOpt = ({validate, parse}) => {
    return (

        <div className="form__row">
            <label>Slices of bread</label>
            <Field name="slices_of_bread" validate={validate} parse={parse}>
                {({ input, meta }) => (
                    <div>
                        <input {...input} type="number" placeholder="Enter number of slices of bread"/>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
        </div>
    );
};

export default SandwichOpt;