const express = require("express");
const app = express();

app.use(express.static('./dist/http-client-demo'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/http-client-demo/'});
});

app.listen(process.env.PORT || 8080);
