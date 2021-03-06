'use strict';

/**!
 * [square]
 * @copyright (c) 2012 observe.it (observe.it) <opensource@observe.it>
 * MIT Licensed
 */

var fs = require('fs');

/**
 * Write the output of the file to a directory on disk
 *
 * @param {Square} square The reference to the square instance
 * @param {Object} collection The collection and file details
 * @param {Function} fn callback
 * @api public
 */
module.exports = function write(square, collection, fn) {
  square.logger.debug('Attempting to write %s to disk', collection.file.yellow);
  fs.writeFile(collection.file, collection.content, fn);

  square.emit('write', collection);
};
