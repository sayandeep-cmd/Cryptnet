import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Rootreducer from '../Reducer/Rootreducer';

const Storage= createStore(Rootreducer,applyMiddleware(thunk));


export default Storage;