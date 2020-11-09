import http from '../http-common'

class PackagesService{
    getAll(){
        return http.get('/packages');
    }
    getAllByState(id){
        return http.get(`/packages/state?state=${id}`)
    }
}

export default new PackagesService();
