import React from 'react';
import {Form, Field} from 'react-final-form';
import ActionBtn from "../atoms/ActionBtn";

const DishForm = () => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="basic__form">
                        <div className="form__row">
                            <label>Dish Name</label>
                            <Field
                                name="dishName"
                                component="input"
                                type="text"
                                placeholder="Enter dish name"
                            />
                        </div>
                        <div className="form__row">
                            <label>Preparation time</label>
                            <Field
                                name="prepTime"
                                component="input"
                                type="time"
                                step="1"
                            />
                        </div>
                        <div className="form__row">
                            <label>Dish type</label>
                            <Field name="dishType" component="select">
                                <option value="none"></option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="sandwich">Sandwich</option>
                            </Field>
                        </div>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    <ActionBtn disabled={submitting || pristine}/>
                </form>
            )}
        />
    );
};

export default DishForm;