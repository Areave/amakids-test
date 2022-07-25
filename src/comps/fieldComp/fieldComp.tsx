import React from 'react'
import './fieldComp.scss'
import {Types} from '../../utils/types'

const FieldComp: React.FC<Types.FieldCompProps> = ({style, onClick, isStartPoint, isUserWin, isEndPoint}) => {

    let icon = isUserWin && isEndPoint ? 'check' : isStartPoint ? 'home' : '';

    return <div style={style} className={'field col'}>
        <div onClick={onClick} className={'field-button' + (isUserWin ? '' : ' waves-effect waves-light')}><i className={'medium material-icons'}>{icon}</i></div>
    </div>
};

export default FieldComp;