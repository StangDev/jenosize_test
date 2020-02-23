import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { getPlaceGoogleService ,getTestService} from '../service'
const initialPlace = {
  data: [],
  input:""
}

export const actionTypes = {
  SET_PLACE: 'SET_PLACE',
  CLEAR_PLACE: 'CLEAR_PLACE',
}

// REDUCERS
export const reducer = (state = initialPlace, action) => {
  switch (action.type) {
    case actionTypes.SET_PLACE:
      return Object.assign({}, state, { data: action.dataPlace,input:action.input })
    case actionTypes.CLEAR_PLACE:
        return Object.assign({}, state, { data: [] })
    default: return state
  }
}

// ACTIONS
export const setPlace = playload => dispatch => {
  getPlaceGoogleService(playload).then((data) => {
    console.log(data);
    
    return dispatch({ 
      type: actionTypes.SET_PLACE,
      dataPlace:data.results
    })
  });
}

export const clearPlace = () => dispatch => {
  return dispatch({ 
    type: actionTypes.CLEAR_PLACE,
  })
}

export const initStore = (initialState = initialPlace) => 
createStore(
    reducer, 
    initialState, 
    composeWithDevTools(
      applyMiddleware(
      thunkMiddleware,
    )))