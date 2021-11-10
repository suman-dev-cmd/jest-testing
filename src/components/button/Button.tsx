import React, { ReactNode } from 'react'
export interface Bprops{
    children:ReactNode
    incrementCount:()=>void
}
const Button = (props:Bprops) => {
    return (
        <button type="button" onClick={props.incrementCount}>{props.children}</button>
    )
}

export default Button;
