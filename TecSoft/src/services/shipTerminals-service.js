import http from './http-common'

class ShipTerminalsService{
    getAll(){
        return http.get('/ShipTerminal');
    }
    get(id){
        return http.get(`/ShipTerminal/${id}`);
    }
    getAllShipTerminalByCompanyId(id){
        return http.get(`/ShipTerminal/companies/id?company=${id}`)
    }
}

export default new ShipTerminalsService();
