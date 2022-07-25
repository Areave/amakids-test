import React from 'react'
import './fieldsWrapperComp.scss'
import {Types} from '../../utils/types'
import FieldComp from "../fieldComp/fieldComp";
import {connect} from "react-redux";
import {setStartPoint, setUserWin, setUserLoose} from "../../utils/store/actionCreators";

const FieldsWrapperComp: React.FC<Types.FieldsWrapperCompProps> = ({heightSize, widthSize, endPoint,
                                                                       startPoint, setStartPoint, setUserWin, setUserLoose, isUserWin}) => {


    function fieldClickHandler(coordinates: Types.Coordinates): void {
        if (isUserWin) {
            return;
        }
        if (endPoint.xDimension && endPoint.yDimension) {
            if (checkForEqualCoordinates(coordinates, endPoint)) {
                setUserWin(true);
            } else {
                setUserLoose(true);
            }
        } else {
            setStartPoint(coordinates);
        }
    }

    function checkForEqualCoordinates(fieldCoordinates: Types.Coordinates, coordinates: Types.Coordinates): boolean {
        return fieldCoordinates.xDimension === coordinates.xDimension &&
            fieldCoordinates.yDimension === coordinates.yDimension;
    }

    function createFieldsArray(heightSize: number, widthSize: number) {
        const divStyle = {
          width: 100/widthSize + '%',
        };
        let fieldsArray = [];
        for (let i = 1; i <= heightSize; i++) {
            for (let j = 1; j <= widthSize; j++) {
                const coordinates = {xDimension: j, yDimension: i};
                fieldsArray.push(<FieldComp onClick={() =>
                                            fieldClickHandler(coordinates)}
                                            isStartPoint={checkForEqualCoordinates(coordinates, startPoint)}
                                            isEndPoint={checkForEqualCoordinates(coordinates, endPoint)}
                                            style={divStyle}
                                            isUserWin={isUserWin}
                                            key={j + '-' + i}/>)
            }
        }
        return fieldsArray;
    }

    return <div className={`fields-wrapper raw`}>
        {heightSize && widthSize && createFieldsArray(heightSize, widthSize)}
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {endPoint: state.endPoint, startPoint: state.startPoint, isUserWin: state.isUserWin}
};

const mapDispatchToProps = {setStartPoint, setUserWin, setUserLoose};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsWrapperComp);