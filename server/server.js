const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../')));


app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
