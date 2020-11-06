import http from "./http-common"

class CompaniesService {
    getAll() {
        return http.get('/Company');
    }
    get(id) {
        return http.get(`/Company/${id}`)
    }

}

export default new CompaniesService();
