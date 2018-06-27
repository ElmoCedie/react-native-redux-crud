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
    console.log(JSON.stringify({...state, data}));
        return { ...state , data };
    default:
        return state;
  }
}
