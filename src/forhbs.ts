const fs = require('fs');
const path = require('path');

function renameHtmlToHbs(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      renameHtmlToHbs(fullPath);
    } else if (path.extname(file) === '.html') {
      const newPath = path.join(dir, path.basename(file, '.html') + '.hbs');
      fs.renameSync(fullPath, newPath);
    }
  });
}

renameHtmlToHbs('./views'); // pasta onde estão os HTMLs
