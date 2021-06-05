import React from 'react';
import {Field} from "react-final-form";

const SoupOpt = ({value, validate, parse}) => {
    return (
        <>
            <div className="form__row">
                <label>Spiciness{value ? <span>{value}</span> : ""}</label>
                <Field name="spiciness_scale" validate={validate} parse={parse}>
                    {({ input, meta }) => (
                        <div>
                            <input {...input} type="range" step="1" min="1" max="10" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
            </div>
        </>
    );
}

export default SoupOpt;