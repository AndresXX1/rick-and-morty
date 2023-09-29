import {createStore, applyMiddleware, compose} from "redux";
import reducer  from "./reducer";
import  thunkMiddleware  from "redux-thunk";


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COM || compose;

 const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware)) //esta linea nos permite hacer peticiones a un servidor
)

export default store