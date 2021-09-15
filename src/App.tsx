import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])
    useEffect(() => {
        setToLocalStorageHandler()
    }, [value])



    const setToLocalStorageHandler = () => {
        localStorage.setItem('_valueCounter', JSON.stringify(value))
        localStorage.setItem('_valueCounter + 1', JSON.stringify(value + 1))
    }
    const getFromLocalStorageHandler = () => {
        const valueAsString = localStorage.getItem('_valueCounter')
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
        }

    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('_valueCounter')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeLocalStorageHandler}>removeLocalStorage</button>
        </div>
    );
}

export default App;
