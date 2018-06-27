export const STORE_DATA = "STORE_DATA";
export const POST_DATA = "POST_DATA";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const storeData = (data) => {
  return { type: STORE_DATA, data: data }
}

export const postData = (data) => {
  return  { type: POST_DATA, data: data }
}

export const addData = (data) => {
  return { type: ADD_DATA, data: data }
}

export const deleteData = (data) => {
  console.log(data);
  return { type: DELETE_DATA, data: data }
}
