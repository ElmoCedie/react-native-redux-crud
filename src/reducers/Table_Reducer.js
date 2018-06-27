import json from './db.json';

export default (state = json.users, {type,  data}) => {
  switch (type) {
    // case "STORE_DATA":
    //     return data;
    case "POST_DATA":
        if(data){
          return data;
        }
        return state;
    case "ADD_DATA":
        return [ ...state , data ];
    case "DELETE_DATA":
        return state.filter(function(event) { return event.id !== data; });
    default:
        return state;
  }
}
