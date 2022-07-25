import React, {useEffect} from 'react'
import './stepsWrapperComp.scss'
import {Types} from '../../utils/types'
import StepComp from "../stepComp/stepComp";


const StepsWrapperComp: React.FC<Types.StepsWrapperCompProps> = ({path}) => {

    function createStepsArray (path: Types.Path): any[] {
        return path.map((step, index) => {
            return <StepComp key={step + index} direction={step}/>
        })
    }

    return <div className='steps-wrapper'>
        {!!path.length && createStepsArray(path)}
    </div>
};

export default StepsWrapperComp;