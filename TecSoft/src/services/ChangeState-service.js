import http from "./http-common"

class ChangeStateService{
    getall(){
        return http.get(`/changestates`);
    }
    getchangebypackage(id){
        return http.get(`/changestates/package/${id}`);
    }
}
export default new ChangeStateService();