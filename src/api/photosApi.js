import { useFetch } from "../helpers/fetchHelper";

export const usePhotos = () =>
  useFetch("https://jsonplaceholder.typicode.com/photos");
