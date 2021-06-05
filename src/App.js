import React, {useState} from 'react';
import TitleHeader from "./components/atoms/TitleHeader";
import DishForm from "./components/organisms/DishForm";
import Result from "./components/organisms/Result";


const App = () => {
    const [error, setError] = useState("");
    const [result, setResult] = useState("")

    return (
        <>
            <TitleHeader/>
            {result ? <Result error={error}/> :
                <div className="content__cnt">
                    <h1>Enter information below</h1>
                    <DishForm setError={setError} setResult={setResult}/>
                </div>
            }
        </>
    );
}

export default App;
