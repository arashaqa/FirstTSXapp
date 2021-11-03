import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import  createSagaMiddleware  from 'redux-saga'
import rootSaga from './Sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store