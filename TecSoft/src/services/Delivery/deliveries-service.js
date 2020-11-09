import http from '../http-common'

class DeliveriesService{
    getAll(){
        return http.get('/deliveries');
    }
}

export default new DeliveriesService();
