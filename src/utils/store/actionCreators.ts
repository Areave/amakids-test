import {Types} from '../types'

export const setAmountOfSteps = (amountOfSteps: number): Types.Action => {
    return {
        type: 'SET_AMOUNT_OF_STEPS',
        payload: amountOfSteps
    }
};
export const setHeightSize = (heightSize: number): Types.Action => {
    return {
        type: 'SET_HEIGHT_SIZE',
        payload: heightSize
    }
};
export const setWidthSize = (widthSize: number): Types.Action => {
    return {
        type: 'SET_WIDTH_SIZE',
        payload: widthSize
    }
};
export const setStartPoint = (startPoint: Types.Coordinates): Types.Action => {
    return {
        type: 'SET_START_POINT',
        payload: startPoint
    }
};
export const setEndPoint = (endPoint: Types.Coordinates): Types.Action  => {
    return {
        type: 'SET_END_POINT',
        payload: endPoint
    }
};
export const setPath = (path: Types.Path): Types.Action  => {
    return {
        type: 'SET_PATH',
        payload: path
    }
};
export const resetPoints = (): Types.Action  => {
    return {
        type: 'RESET_POINTS'
    }
};export const setUserWin = (isUserWin: boolean): Types.Action  => {
    return {
        type: 'SET_USER_WIN',
        payload: isUserWin
    }
};export const setUserLoose = (isUserLoose: boolean): Types.Action  => {
    return {
        type: 'SET_USER_LOOSE',
        payload: isUserLoose
    }
};