import { combineReducers } from 'redux';
import * as actionID from './action-list';

const emptyPost = {
  id: 0,
  text: '',
  imageName: '',
};

const max = (a, b) => (a > b ? a : b);
const getNewID = list => list.reduce((maxID, x) => max(maxID, x.id), 0) + 1;

const postInput = (state = emptyPost, action) => {
  switch (action.type) {
    case actionID.INPUT_TEXT_CHANGE: {
      console.log(action.argument);
      return Object.assign({}, state, {text: action.argument});
    }

    case actionID.INPUT_IMAGE_CHANGE: {
      console.log("cargando archivo: ", action.argument);
      return Object.assign({}, state, {imageName: action.argument});
    }

    case actionID.INPUT_SUBMIT:
      return emptyPost;

    default:
      return state;
  }
};

const postList = (state = {list: []}, action) => {
  switch (action.type) {
    case actionID.INPUT_SUBMIT:
      return {list: [
          Object.assign({}, action.argument, {
            id: getNewID(state.list)
          }),
          ...state.list,
        ]};
                
    case actionID.ITEM_DELETE:
      return { list: state.list.filter( x => x.id !== action.argument )} ;
      
   case "REQUEST_POST_SUCCEED":
    return { list:action.data}

    default:
      return state;
  }
};

const mainReducer = combineReducers({ postInput, postList });

export default mainReducer;
