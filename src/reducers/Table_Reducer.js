export default (state = [], {type,  data}) => {
  switch (type) {
    case "STORE_DATA":
        return data;
    case "POST_DATA":
        return state;
    default:
        return state;
  }
}
