import React from 'react'
import './hintComp.scss'
import {Types} from '../../utils/types'
import {connect} from "react-redux";

const HintComp: React.FC<Types.HintCompProps> = ({isUserWin, isUserLoose, startPoint}) => {

    let hint;


    if (!startPoint.xDimension) {
        hint = 'Выбери поле отсчета';
    } else if (!isUserWin && !isUserLoose) {
        hint = 'Рассчитай путь';
    } else if (!isUserWin) {
        hint = 'Попробуй еще!';
    } else {
        hint = 'Верно!';
    }


    return <div className='hint scale-transition'>
        {hint}
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {
        isUserWin: state.isUserWin,
        isUserLoose: state.isUserLoose,
        startPoint: state.startPoint
    }
};

export default connect(mapStateToProps)(HintComp);