import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
function getApi() {
    return fetch('http://localhost:8001/api/products', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => { throw error })
}

function* fetchProducts(action) {
    try {
        const products = yield call(getApi)
        yield put({ type: 'GET_PRODUCTS_SUCCESSFUL', products: products })
    } catch (error) {
        yield put({type:'GET_PRODUCTS_FAILED',message : error.message})
    }
}

function* productsSaga() {
    yield takeLatest("GET_PRODUCTS_REQUESTED" , fetchProducts)
}
export default productsSaga;
