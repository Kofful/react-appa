import {baseUrl} from "./baseUrl";
import axios from "axios";

export const getAllUsers = () => axios.get(baseUrl + "developer");
export const getUserById = (id) => axios.get(baseUrl + "developer/" + id);