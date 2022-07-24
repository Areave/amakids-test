import React from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
import TestSvg from '../../assets/svg/notification-ico.svg';
import UserDataComp from "../../comps/userDataComp/userDataComp";
import GameFieldComp from "../../comps/gameFieldComp/gameFieldComp";
import HintComp from "../../comps/hintComp/hintComp";



const MainPage: React.FC<any> = (props) => {
    return <div className="main-page container">
        <PageTitleComp title={'AmmaKids test'}/>
        <div className="game-contaner row">
           <UserDataComp/>
           <GameFieldComp/>
        </div>
        <HintComp/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {}
};

export default connect(mapStateToProps)(MainPage);