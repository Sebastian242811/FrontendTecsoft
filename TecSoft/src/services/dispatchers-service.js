import http from './http-common'

class DispatchersService{
    getAll(){
        return http.get('/Dispatchers')
    }
}

export default new DispatchersService();
