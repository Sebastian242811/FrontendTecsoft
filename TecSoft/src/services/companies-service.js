import http from "./http-common"

class CompaniesService {
    getAll() {
        return http.get('/companies');
    }
    get(id) {
        return http.get(`/companies/${id}`)
    }

}

export default new CompaniesService();
