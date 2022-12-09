import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

//previder 내부 요소들이 store을 사용할 수 있게 해준다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
    <App />
  </Provider>
);



