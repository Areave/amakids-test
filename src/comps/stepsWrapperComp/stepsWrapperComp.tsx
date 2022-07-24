import React from 'react'
import './stepsWrapperComp.scss'
import {Types} from '../../utils/types'
import StepComp from "../stepComp/stepComp";

const StepsWrapperComp: React.FC<Types.StepsWrapperCompProps> = ({amountOfSteps, path, startPoint}) => {


    function createStepsArray (amountOfSteps:number): any[] {
        let stepsArray = [];
        for (let i = 0; i < amountOfSteps; i++) {
            stepsArray.push(<StepComp direction={path[i]}/>)
        }
        return stepsArray;
    }

    return <div className='steps-wrapper'>
        {startPoint.yDimension && startPoint.xDimension && createStepsArray(amountOfSteps)}
    </div>
}

export default StepsWrapperComp;