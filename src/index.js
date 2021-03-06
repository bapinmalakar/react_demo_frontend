import React from 'react';
import ReactDOM from 'react-dom';

import App from './index.jsx'
import { Provider } from "react-redux";
import ReduxStore from './app/redux-config/store';
import 'antd/dist/antd.css'


ReactDOM.render(
    <Provider store={ReduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'));