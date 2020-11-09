import http from '../http-common'

class DealersService{
    getAll(){
        return http.get('/Dealer')
    }
}

export default new DealersService();
