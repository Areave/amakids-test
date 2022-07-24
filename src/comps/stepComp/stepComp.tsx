import React from 'react'
import './stepComp.scss'
import {Types} from '../../utils/types'

const StepComp: React.FC<Types.StepCompProps> = ({direction}) => {

    let picture;

    switch (direction) {
        case 'up':
            picture = '↑';
            break;
        case 'down':
            picture = '↓';
            break;
        case 'left':
            picture = '←';
            break;
        case 'right':
            picture = '→';
            break;
    }
    return <a className="step col s1">{picture}</a>
};

export default StepComp;