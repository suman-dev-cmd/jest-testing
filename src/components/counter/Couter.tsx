import React from 'react'
import {useAppSelector} from '../../hooks/hook';
const Couter = () => {
    const {count} = useAppSelector((state)=>state.countDef);
    return (
        <div>
            <h1>Count Value <span>{count}</span></h1>
        </div>
    )
}

export default Couter;
