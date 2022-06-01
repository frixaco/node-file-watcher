const fs = require('fs');
const path = require('node:path');

fs.watch('./', (eventType, fileName) => {
    console.log({ eventType, fileName });
});


