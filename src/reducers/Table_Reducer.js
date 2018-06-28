import json from './db.json';

export default (state = json.users, {type,  data}) => {
  switch (type) {
    case "POST_DATA":
        return state;
    case "ADD_DATA":
        return [ ...state , data ];
    case "DELETE_DATA":
        console.log(state.filter(function(event) { return event.id !== data; }));
        return state.filter(function(event) { return event.id !== data; });
    case "UPDATE_DATA":
        const objIndex = state.findIndex( obj => obj.id === data.id );
        const newState = [
          ...state.slice(0, objIndex),
          data,
          ...state.slice(objIndex+1, state.length)
        ]
        return newState
    default:
        return state;
  }
}
