const BASE_URL = "http://localhost:8888/api/v1";

export const AuthEndpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}


export const BookEndpoint = {
  GET_BOOKS: "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
}