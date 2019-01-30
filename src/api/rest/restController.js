import {baseUrl} from "./baseUrl";
import axios from "axios";

export const getAllUsers = () => axios.get(baseUrl + "developer");
export const getUserById = (id) => axios.get(baseUrl + "developer/" + id);
export const registration = (createAccountData) => axios.get(baseUrl + "developer", createAccountData);
export const deleteDeveloper = (id) => axios.delete(baseUrl + "developer/" + id);