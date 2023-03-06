import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const path = require('path');

// module.exports = 
export default (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
