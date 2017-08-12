const express = require('express');
const app = express();

const port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
