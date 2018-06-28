export const POST_DATA = "POST_DATA";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const postData = (data) => {
  return  { type: POST_DATA, data: data }
}

export const addData = (data) => {
  return { type: ADD_DATA, data: data }
}

export const updateData = (data) => {
  return { type: UPDATE_DATA, data: data }
}

export const deleteData = (data) => {
  return { type: DELETE_DATA, data: data }
}
