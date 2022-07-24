import React from 'react'
import './fieldComp.scss'
import {Types} from '../../utils/types'
import {is} from "immutable";

const FieldComp: React.FC<Types.FieldCompProps> = ({style, onClick, isStartPoint}) => {

    let icon = isStartPoint ? 'home' : '';

    return <div style={style} className={'field col'}>
        <div onClick={onClick} className="waves-effect waves-light field-button"><i className={'medium material-icons'}>{icon}</i></div>
    </div>
};

export default FieldComp;