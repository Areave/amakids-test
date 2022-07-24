import React from "react";
import 'materialize-css'
import './app.scss';
import {Provider} from 'react-redux'
import store from "../utils/store";
import MyRouter from "../utils/router";

const App: React.FC<any> = () => {
    return <React.StrictMode>
            <Provider store={store}>
                <MyRouter/>
            </Provider>
    </React.StrictMode>
};

export default App;