import http from './http-common'

class CustomersService{
    getAll(){
        return http.get('/Customer')
    }
}

export default new CustomersService();
