const Gun = require('gun/gun');
require('gun/sea')

export const gun = Gun({
    peers: ['http://localhost:8000/gun']
});

export const user = gun.user();