import React from 'react'
import './userDataComp.scss'
import {Types} from '../../utils/types'
import {connect} from "react-redux";
import {setAmountOfSteps, setHeightSize, setWidthSize, resetPoints} from "../../utils/store/actionCreators";
import SelectUserDataComp from "../selectUserDataComp/selectUserDataComp";

const UserDataComp: React.FC<Types.UserDataCompProps> = ({setAmountOfSteps, setHeightSize, setWidthSize, resetPoints}) => {

    const onChangeAmountOfStepsHandler = (element: Types.elementType) => {
        setAmountOfSteps(element.value);
        resetPoints();
    };
    const onChangeHeightSizeHandler = (element: Types.elementType) => {
        setHeightSize(element.value);
        resetPoints();
    };
    const onChangeWidthSizeHandler = (element: Types.elementType) => {
        setWidthSize(element.value);
        resetPoints();
    };

    const heightSizeOptions = [
        {label: '3', value: 3},
        {label: '5', value: 5},
        {label: '10', value: 10}
    ];
    const widthSizeOptions = [
        {label: '3', value: 3},
        {label: '5', value: 5},
        {label: '10', value: 10}
    ];

    const amountOfStepsOptions = [
        {label: '2', value: 2},
        {label: '5', value: 5},
        {label: '10', value: 10},
        {label: '15', value: 15},
        {label: '20', value: 20}
    ];

    return <div className='user-data col m3 s6'>
        <a className="waves-effect waves-light btn" onClick={resetPoints}>Начать заново</a>
        <SelectUserDataComp label={'Полей в ширину'} defaultValue={{label: '3', value:3}} callback={onChangeWidthSizeHandler} options={widthSizeOptions}/>
        <SelectUserDataComp label={'Полей в высоту'} defaultValue={{label: '3', value:3}} callback={onChangeHeightSizeHandler} options={heightSizeOptions}/>
        <SelectUserDataComp label={'Количество шагов'} defaultValue={{label: '5', value:5}} callback={onChangeAmountOfStepsHandler} options={amountOfStepsOptions}/>

    </div>
};

const mapDispatchToProps = {setAmountOfSteps, setHeightSize, setWidthSize, resetPoints};

export default connect(null, mapDispatchToProps)(UserDataComp);