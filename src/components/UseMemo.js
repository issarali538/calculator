import {useState, useMemo, useEffect} from 'react';

export default function useMemoComp(){

    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(0);

    const addFun = function(){
        setAdd(add + 1);
    };

    const subFun = function(){
        setMinus(minus - 1);
    }

    useEffect(function(){
        console.log(`${add} ----`)
        console.log(`${minus} ----`)
    },[add,minus])

     return(
        <>
            <button onClick={addFun}>Add</button>
            <button onClick={subFun}>Subtract</button>
        </>
    )
}