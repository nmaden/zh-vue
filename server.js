// const express = require('express');
// const serveStatic   = require('serve-static');
// const path = require('path');
// const app = express();

// app.use('/',serveStatic(path.join(__dirname,'/dist')));
 
// const port = process.env.PORT || 8080
// app.listen(port);

// console.log('Listening on port ' +port);

const express = require('express');
const path = require('path');
const serveStatic   = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();

app.use('/',serveStatic(path.join(__dirname,'/dist')));
 
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use('/',serveStatic(path.join(__dirname,'/dist')));
 
app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 8080
app.listen(port);

console.log('Listening on port ' +port);