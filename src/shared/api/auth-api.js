import instance from "./instance";
import { store } from "../../store/store";



export const register = async payload => {
    const { data } = await instance.post("/auth/register", payload);  // ? перед auth
    return data;
}

export const login = async payload => {
    const state = store.getState();
    console.log(state);
    const { data } = await instance.post("/auth/login", payload);
    instance.defaults.headers["Authorization"] = `Bearer ${payload.accessToken}`;
    return data;
}

export const logout = async () => {
    await instance.post("/logout");
    instance.defaults.headers["Authorization"] = "";
}