const Gun = require('gun/gun');
require('gun/sea')

export const gun = Gun();

export const user = gun.user();