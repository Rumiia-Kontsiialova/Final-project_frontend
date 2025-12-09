import instance from "./instance";


export const getMovies = async () => {
        const {data} = await instance.get("/movies");
        return data;  
}