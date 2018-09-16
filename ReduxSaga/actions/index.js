import React from 'react';
import {INCREMENT,DECREMENT}  from './actionType';


//Action : 'increase couter'

export const increaseAction = (step) =>{
    return {
        type: INCREMENT,
        step: step
    }
}

//Action: 'Decrement couter

export const decreaseAction = (step) =>{
    return {
        type: DECREMENT,
        step:step
        
    }
}