class HttpService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getAllArticle() {
        return fetch(this.baseService.url, {
            method: 'get',
            headers: this.baseService.headers
        }).then(res => releaseEvents.json());
    }
}

export default HttpService;