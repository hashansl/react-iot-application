export const ActionTypes = {
  FETCH_TODOLIST: "FETCH_TODOLIST",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

const API_URL = "https://v6ea7xgaal.execute-api.us-east-2.amazonaws.com/Dev";
// const API_KEY = "0j236i3CIl3lULyU98ZXK2zRpbQfN9Fc3Bu0kVn40PK";

function apiCall(apiEndpoint, apiMethod) {
  return fetch(`${API_URL}${apiEndpoint}`, {
    method: apiMethod,
    headers: {
      "Content-Type": "application/json",
      // ,
      // 'x-api-key': API_KEY
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("Error in API Call:", error));
}
export function fetchTodoList() {
  var request = apiCall("product", "GET");
  return {
    type: ActionTypes.FETCH_TODOLIST,
    payload: request,
  };
}
export function addTodo(item) {
  var request = apiCall(`product?desc=${item}`, "POST");
  return {
    type: ActionTypes.ADD_TODO,
    payload: request,
  };
}
export function deleteTodo(id) {
  var request = apiCall(`product?id=${id}`, "DELETE");
  return {
    type: ActionTypes.DELETE_TODO,
    payload: request,
  };
}
export function updateTodo(id) {
  var request = apiCall(`product?id=${id}`, "POST");
  return {
    type: ActionTypes.UPDATE_TODO,
    payload: request,
  };
}
