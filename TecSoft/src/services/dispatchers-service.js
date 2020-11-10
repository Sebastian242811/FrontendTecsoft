import http from './http-common'

class DispatchersService{
    getAll(){
        return http.get('/dispatchers')
    }
    get(id){
        return http.get(`/dispatchers/${id}`)
    }
}

export default new DispatchersService();
