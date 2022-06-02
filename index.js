'use strict';

import http from 'http'
import getGreeting from './getGreeting.js'
import postUser from './postUser.js'

const router = {
    'GET': {
        '/greeting': getGreeting,
    },
    'POST': {
        '/user': postUser,
    }
}

const server = http.createServer((req, res) => {
    const { method, url, headers } = req;
    console.log(method, url)

    const response = router[method][url] 

    if (!response) {
        res.write(JSON.stringify("404 NOT FOUND"))
        res.end()
    } else {
        console.log('response', response)
        let result;
        if (response.then) {
            console.log('async')
            // TODO: How to add async support???
            result = response.then(d => d)
        } else {
            result = response()
        }

        res.write(JSON.stringify(result))
        res.end()
    }
});

server.listen(3000, () => console.log('Server is up'))

