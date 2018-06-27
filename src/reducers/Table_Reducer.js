import json from './db.json';

export default (state = json.users, {type,  data}) => {
  switch (type) {
    case "POST_DATA":
        return state;
    case "ADD_DATA":
        return [ ...state , data ];
    case "DELETE_DATA":
        return state.filter(function(event) { return event.id !== data; });
    default:
        return state;
  }
}
