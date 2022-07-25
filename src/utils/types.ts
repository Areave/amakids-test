import {MouseEventHandler} from "react";

export namespace Types {

    export interface State {
        readonly interfaceData: InterfaceData,
        readonly startPoint: Coordinates
        readonly endPoint: Coordinates,
        readonly isUserLoose: boolean,
        readonly isUserWin: boolean,
        path: Path
    }

    export interface Action {
        readonly type: string,
        readonly payload?: any
    }

    export interface Coordinates {
        xDimension: number,
        yDimension: number
    }

    export interface InterfaceData {
        heightSize: number,
        widthSize: number,
        amountOfSteps: number,
    }

    export interface PageTitleState {
        title: string
    }

    export interface UserDataCompProps {
        setAmountOfSteps: (value: number) => void,
        setHeightSize: (value: number) => void,
        setWidthSize: (value: number) => void,
        resetPoints:()=>void
    }

    export interface GameFieldCompProps {
        interfaceData: InterfaceData,
        startPoint: Coordinates,
        setEndPoint: setPointFunction,
        setPath: (path: Path) => void,
        path: Path
    }

    export interface SelectUserDataProps {
        options: selectOptions[],
        defaultValue: selectOptions
        callback: (args?: any) => void,
        label?: string
    }
    export interface StepsWrapperCompProps {
        path: Path
    }
    export interface StepCompProps {
        direction: string
    }
    export interface FieldsWrapperCompProps {
        heightSize: number,
        widthSize: number,
        endPoint: Coordinates,
        startPoint: Coordinates,
        setStartPoint: setPointFunction,
        setUserWin: (isUserWin: boolean) => void,
        setUserLoose: (isUserLoose: boolean) => void,
        isUserWin: boolean
    }
    export interface FieldCompProps {
        style: {
            width: string
        },
        onClick: MouseEventHandler,
        isStartPoint: boolean,
        isEndPoint: boolean,
        isUserWin: boolean
    }
    export interface HintCompProps {
        isUserWin: boolean,
        isUserLoose: boolean,
        startPoint: Coordinates
    }

    export interface selectOptions {
        label: string,
        value: number
    }
    export type Path = string[];

    export type elementType = {
        label?: string,
        value: number
    };

    type setPointFunction = (coordinates: Coordinates) => void;
}