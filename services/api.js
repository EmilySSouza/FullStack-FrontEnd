import axios from "axios";

const api = axios.create({
    baseURL: "http://seuIp:3000/",
    //Estou colocando "seuIp" pois com o localhost não estava funcionando
})

export default api;