import React from "react";
import './mainPage.scss';
import PageTitleComp from "../../comps/pageTitleComp/pageTitleComp";
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


export default MainPage;