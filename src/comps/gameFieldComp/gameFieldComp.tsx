import React, {useEffect} from 'react'
import './gameFieldComp.scss'
import {Types} from '../../utils/types'
import {connect} from "react-redux";
import FieldsWrapperComp from "../fieldsWrapperComp/fieldsWrapperComp";
import StepsWrapperComp from "../stepsWrapperComp/stepsWrapperComp";
import {setEndPoint, setPath} from "../../utils/store/actionCreators";

const GameFieldComp: React.FC<Types.GameFieldCompProps> = ({interfaceData, startPoint, setEndPoint, setPath, path}) => {

    const {amountOfSteps, widthSize, heightSize} = interfaceData;

    function createPath(amountOfSteps: number): {path: Types.Path, calculatingEndPoint: Types.Coordinates} {
        let path: Types.Path = [];
        let calculatingEndPoint = {
          xDimension: startPoint.xDimension,
          yDimension: startPoint.yDimension
        };
        const dimensionArray = ['up', 'down', 'left', 'right'];


        for (let i = 0; i < amountOfSteps; i++) {
            let dimension;
            const randomIndex = Math.floor(dimensionArray.length * Math.random());
            dimension = dimensionArray[randomIndex];

            let newValue;
            switch (dimension) {
                case 'up':
                    newValue = calculatingEndPoint.yDimension - 1;
                    if (newValue > 0) {
                        calculatingEndPoint.yDimension = newValue;
                    } else {
                        i--;
                        continue;
                    }
                    break;
                case 'down':
                    newValue = calculatingEndPoint.yDimension + 1;
                    if (newValue <= interfaceData.heightSize) {
                        calculatingEndPoint.yDimension = newValue;
                    } else {
                        i--;
                        continue;
                    }
                    break;
                case 'left':
                    newValue = calculatingEndPoint.xDimension - 1;
                    if (newValue > 0) {
                        calculatingEndPoint.xDimension = newValue;
                    } else {
                        i--;
                        continue;
                    }
                    break;
                case 'right':
                    newValue = calculatingEndPoint.xDimension + 1;
                    if (newValue <= interfaceData.widthSize) {
                        calculatingEndPoint.xDimension = newValue;
                    } else {
                        i--;
                        continue;
                    }
                    break;
            }
            path.push(dimension);
        }
        return {path, calculatingEndPoint}
    }

    useEffect(() => {
        if (startPoint.xDimension && startPoint.yDimension) {
            const {path, calculatingEndPoint} = createPath(amountOfSteps);
            setPath(path);
            setEndPoint(calculatingEndPoint);
        }
    }, [startPoint.xDimension && startPoint.yDimension]);

    return <div className='game-field col m9 s6'>
        <FieldsWrapperComp widthSize={widthSize} heightSize={heightSize}/>
        <StepsWrapperComp path={path}/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {interfaceData: state.interfaceData, startPoint: state.startPoint, path: state.path}
};
const mapDispatchToProps = {setEndPoint, setPath};

export default connect(mapStateToProps, mapDispatchToProps)(GameFieldComp);