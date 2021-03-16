import { useFetch } from "../helpers/fetchHelper";

export const useUsers = () =>
  useFetch("https://jsonplaceholder.typicode.com/users");
