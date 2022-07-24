import React from 'react'
import './selectUserDataComp.scss'
import {Types} from '../../utils/types'
import Select from 'react-select';

const SelectUserDataComp: React.FC<Types.SelectUserDataProps> = ({label, options, defaultValue, callback}) => {

    return <div className='select-user-data row'>
        <span>{label}</span>
        <Select defaultValue={defaultValue} onChange={callback} options={options}/>
    </div>
}

export default SelectUserDataComp;