import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import  createSagaMiddleware  from 'redux-saga'
import rootSaga from './Sagas'
const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,initialState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store 