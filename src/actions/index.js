export const STORE_DATA = "STORE_DATA";
export const POST_DATA = "POST_DATA";

export const storeData = (data) => {
  return { type: STORE_DATA, data: data }
}

export const postData = (data) => {
  return  { type: POST_DATA, data: data }
}
