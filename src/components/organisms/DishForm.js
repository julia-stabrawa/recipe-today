import React from 'react';
import {Form, Field} from 'react-final-form';
import ActionBtn from "../atoms/ActionBtn";
import PizzaOpt from "../molecules/PizzaOpt";
import SoupOpt from "../molecules/SoupOpt";
import SandwichOpt from "../molecules/SandwichOpt";

const DishForm = ({setError, setResult}) => {

    const handleClick = (values) => {
        fetch('https://frosty-wood-6558.getsandbox.com/dishes', {
            method: 'POST',
            body: JSON.stringify(values, 0, 2),
            headers: {'Content-Type': 'application/json'},
        })
            .then(async response => {
                if (!response.ok) {
                    setError(true);
                    setResult(true);
                } else {
                    setError(false);
                    setResult(true);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));
    const required = value => (value ? undefined : 'Required')

    return (
        <Form
            onSubmit={handleClick}
            initialValues={{}}
            render={({handleSubmit, form, pristine, submitting, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="basic__form">
                        <div className="form__row">
                            <label>Dish Name</label>
                            <Field name="name" validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="Enter dish name"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form__row">
                            <label>Preparation time</label>
                            <Field name="preparation_time" validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="time" step="1"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form__row">
                            <label>Dish type</label>
                            <Field name="type" component="select" validate={required}>
                                <option></option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="sandwich">Sandwich</option>
                            </Field>
                        </div>
                    </div>
                    <div className="extended__form">
                        {JSON.stringify(values.type) === '"pizza"' ?
                            <PizzaOpt value={values.diameter} validate={required} parse={parse}/> : ""}
                        {JSON.stringify(values.type) === '"soup"' ?
                            <SoupOpt value={values.spiciness_scale} validate={required} parse={parse}/> : ""}
                        {JSON.stringify(values.type) === '"sandwich"' ?
                            <SandwichOpt validate={required} parse={parse}/> : ""}
                        <ActionBtn
                            submit={submitting}
                            reset={submitting || pristine}
                            click={form.reset}
                        />
                    </div>
                </form>
            )}
        />
    );
};

export default DishForm;