const apiKey = 'AIzaSyBmAKa1h-4YENpQiGO_9rJfsS9YIkg6yEY';
const googleMapsClient = require('@google/maps').createClient({
    key: apiKey,
    Promise: Promise
});

module.exports = {
    geocode: (req, res) => {
        if (req.query && typeof req.query === 'object') {
            const key = Object.keys(req.query)[0];
            const value = req.query[key];

            googleMapsClient.geocode({ address: value })
                .asPromise()
                .then((response) => {
                    // console.log(response.json.results);
                    response.json.apiKey = apiKey;
                    res.send(response.json);

                })
                .catch((err) => {
                    console.error(err);
                });

            // return new Promise((resolve) => {
            //     setTimeout(() => resolve(data), 1000 * Math.random());
            // });
        }
    }
};
