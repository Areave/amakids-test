import React from 'react'
import './fieldsWrapperComp.scss'
import {Types} from '../../utils/types'
import FieldComp from "../fieldComp/fieldComp";
import {connect} from "react-redux";
import {setStartPoint, setUserWin, setUserLoose} from "../../utils/store/actionCreators";

const FieldsWrapperComp: React.FC<Types.FieldsWrapperCompProps> = ({heightSize, widthSize, endPoint, startPoint, setStartPoint, setUserWin, setUserLoose}) => {


    function fieldClickHandler(coordinates: Types.Coordinates): void {
        if (endPoint.xDimension && endPoint.yDimension) {
            if (checkForEqualCoordinates(coordinates, endPoint)) {
                setUserWin(true);
                setUserLoose(false);
            } else {
                setUserLoose(true);
                setUserWin(false);
            }
        } else {
            setStartPoint(coordinates);
        }
    }

    function checkForEqualCoordinates(fieldCoordinates: Types.Coordinates, coordinates: Types.Coordinates): boolean {
        return fieldCoordinates.xDimension === coordinates.xDimension &&
            fieldCoordinates.yDimension === coordinates.yDimension;
    }

    function createFieldsArray() {
        const divStyle = {
          width: 100/widthSize + '%',
        };
        let fieldsArray = [];
        for (let i = 1; i <= heightSize; i++) {
            for (let j = 1; j <= widthSize; j++) {
                const coordinates = {xDimension: j, yDimension: i};
                const isStartPoint = checkForEqualCoordinates(coordinates, startPoint);
                fieldsArray.push(<FieldComp onClick={() =>
                                            fieldClickHandler(coordinates)}
                                            isStartPoint={isStartPoint}
                                            coordinates={coordinates}
                                            style={divStyle}
                                            key={JSON.stringify(coordinates)}/>)
            }
        }
        return fieldsArray;
    }

    return <div className={`fields-wrapper raw`}>
        {createFieldsArray()}
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {endPoint: state.endPoint, startPoint: state.startPoint}
};

const mapDispatchToProps = {setStartPoint, setUserWin, setUserLoose};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsWrapperComp);