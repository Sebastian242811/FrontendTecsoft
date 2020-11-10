import http from './http-common'

class PackagesService{
    getAll(){
        return http.get('/packages');
    }
    getAllByState(id){
        return http.get(`/packages/state/${id}`)
    }
    updatePackageState(id,value){
        return http.put(`packages/updatestate/${id}?value=${value}`);
    }
    getAllStateCustomerPackage(id){
        return http.get(`/packages/packagestate/customer/${id}`);
    }
    getpackagebyId(id){
        return http.get(`/packages/${id}`);
    }
    getAllStateCustomer(id){
        return http.get(`/packages/package/customer/${id}`);
    }

}

export default new PackagesService();
