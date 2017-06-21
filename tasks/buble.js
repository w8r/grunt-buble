const buble = require('buble');
const path  = require('path');
const fs    = require('fs');

module.exports = function(grunt) {
  grunt.registerMultiTask('buble', 'The blazing fast, batteries-included ES2015 compiler', function() {
    const options = this.options();

    this.files.forEach((el) => {
      const options = this.options();

      delete options.filename;
      delete options.filenameRelative;

      options.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);

      if (process.platform === 'win32') {
        options.sourceFileName = options.sourceFileName.replace(/\\/g, '/');
      }

      options.sourceMapTarget = path.basename(el.dest);

      const opts = Object.assign({
        file:   path.basename(el.dest),
        source: path.relative(path.dirname(el.dest), el.src[0])
      }, options);

      const res = buble.transform(fs.readFileSync(el.src[0], { encoding: 'utf-8' }), opts);
      let sourceMappingURL = '';

      if (res.map) {
        sourceMappingURL = '\n//# sourceMappingURL=' + path.basename(el.dest) + '.map';
      }

      grunt.file.write(el.dest, res.code + sourceMappingURL + '\n');

      if (res.map) {
        grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
      }
    });
  });
};
