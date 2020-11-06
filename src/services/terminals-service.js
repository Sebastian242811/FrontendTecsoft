import http from "./http-common"

class TerminalsService{
    getAll(){
        return http.get('/terminals')
    }
    get(id){
        return http.get(`/terminals/${id}`)
    }
}

export default new TerminalsService();
