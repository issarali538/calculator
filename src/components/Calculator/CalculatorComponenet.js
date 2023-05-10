import { useState } from 'react';
import '../../assets/style.css';
function CalculatorComp() {

    const [valA, setvalA] = useState('');
    const [valB, setvalB] = useState('');
    const [opera, setOpera] = useState('');

    function getVal(buttonDigit) {
        let clickBtnValue = '';
        if (opera === '') {
            clickBtnValue = valA + buttonDigit;
            if (valA === 0) { setvalA('') }
            setvalA(clickBtnValue);
        } else {
            clickBtnValue = valB + buttonDigit;
            if (valB === 0) { setvalB('') }
            setvalB(clickBtnValue);
        }
    }
    function operation(op) {
        setOpera(op);
    }


    function equalTo() {
        let result;
        console.log('eto');
        switch (opera) {
            case "+":
                result = parseInt(valA) + parseInt(valB);
                break;
            case "-":
                result = parseInt(valA) - parseInt(valB);
                break;
            case "x":
                result = parseInt(valA) * parseInt(valB);
                break;

            case "%":
                result = parseInt(valA) / parseInt(valB);
                break;
            default:
                result = valA;
                break;
        }
        setvalA(result.toString());
        document.querySelector(".calculator-value").html = valA;
        setvalB('');
        setOpera('');
    }

    function clear() {
        setvalA('');
        setvalB('');
        setOpera('');
    }

    return (
        <>
            <div className="calculator">
                <div className="input-wrapper">
                    <div>
                        <span className='operation'>{opera}</span>
                        <div className='calculator-value'>
                            {(opera === '') ? valA : valB}
                        </div>
                    </div>
                </div>
                <div className="calculator-body">
                    <div className="button-wrapper">
                        <button onClick={() => getVal(1)} dat={1} className="calculator-button">1</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(2)} className="calculator-button">2</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(3)} className="calculator-button">3</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(4)} className="calculator-button">4</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(5)} className="calculator-button">5</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(6)} className="calculator-button">6</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(7)} className="calculator-button">7</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(8)} className="calculator-button">8</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(9)} className="calculator-button">9</button>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => getVal(0)} className="calculator-button">0</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="add_btn" onClick={() => operation('+')} className="calculator-button">+</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="sub_btn" onClick={() => operation('-')} className="calculator-button add-btn">-</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="multi_bt" onClick={() => operation('%')} className="calculator-button sub-btn">%</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="div_btn" onClick={() => operation('x')} className="calculator-button multi-btn">x</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="div_btn" onClick={clear} className="calculator-button multi-btn">C</button>
                    </div>
                    <div className="button-wrapper">
                        <button data-text="div_btn" onClick={equalTo} className="calculator-button multi-btn">=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalculatorComp;