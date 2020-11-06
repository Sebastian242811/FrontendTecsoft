import http from "./http-common"

class CitiesService {
    getAll(){
        return http.get('/cities')
    }
    get(id){
        return http.get(`/cities/${id}`)
    }
    create(data){
        return http.post("/cities",data);
    }
}

export default new CitiesService();
