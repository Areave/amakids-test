import {Types} from '../types'

const initialState: Types.State = {
    interfaceData: {
        heightSize: 3,
        widthSize: 3,
        amountOfSteps: 5,
    },
    startPoint: {
        xDimension: null,
        yDimension: null
    },
    endPoint: {
        xDimension: null,
        yDimension: null
    },
    isUserLoose: false,
    isUserWin: false,
    path: []
};

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'SET_AMOUNT_OF_STEPS':
            console.log({...state, interfaceData: {...state.interfaceData, amountOfSteps: action.payload}});
            return {...state, interfaceData: {...state.interfaceData, amountOfSteps: action.payload}};
        case 'SET_WIDTH_SIZE':
            return {...state, interfaceData: {...state.interfaceData, widthSize: action.payload}};
        case 'SET_HEIGHT_SIZE':
            return {...state, interfaceData: {...state.interfaceData, heightSize: action.payload}};
        case 'SET_START_POINT':
            return {...state, startPoint: action.payload};
        case 'SET_END_POINT':
            return {...state, endPoint: action.payload};
        case 'SET_PATH':
            return {...state, path: action.payload};
        case 'SET_USER_WIN':
            return {...state, isUserWin: action.payload};
        case 'SET_USER_LOOSE':
            return {...state, isUserLoose: action.payload};
        case 'RESET_POINTS':
            return {
                ...state, startPoint: {
                    xDimension: null,
                    yDimension: null
                }, endPoint: {
                    xDimension: null,
                    yDimension: null
                }, isUserLoose: false,
                isUserWin: false,
                path: []
            };
    }
    return initialState;
};

export default reducer