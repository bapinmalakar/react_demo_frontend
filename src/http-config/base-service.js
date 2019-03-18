class HttpConfigure {
    constructor() {
        this.url = 'http://api/v1/';
        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json');
    }
}

export default BaseService = new HttpConfigure();