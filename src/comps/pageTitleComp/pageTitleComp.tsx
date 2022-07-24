import React from 'react'
import './pageTitleComp.scss'
import {Types} from '../../utils/types'

const PageTitleComp: React.FC<Types.PageTitleState> = (props: any) => {
    const {title} = props;
    return <h1 className="title s12 center-align">{title}</h1>
};

export default PageTitleComp;