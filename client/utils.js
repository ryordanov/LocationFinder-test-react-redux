// const url = 'http://localhost';
// const port = 9090;

const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
};

export default {
    getGeocoderData: (params) => {
        // let currentUrl = `${url}:${port}/api/getGeocoder`;
        let currentUrl = '/api/getGeocoder';
        if (params) {
            const key = Object.keys(params)[0];
            const value = params[key];
            currentUrl += '?' + `${key}=${encodeURIComponent(value)}`;
        }

        return fetch(currentUrl, { headers })
            .then(res => res.json());
        // .then(result => result);
    }
};
