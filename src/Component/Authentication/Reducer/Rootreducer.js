import { combineReducers } from 'redux'
import Authreducer from './Authreducer'

const RootReducer = combineReducers({
    Authentication: Authreducer
})
export default RootReducer