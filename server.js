const app = require('./app');
const mongoose = require('mongoose');

DB =
  'mongodb://127.0.0.1:27017/text_search?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6';

mongoose.connect(DB).then((_) => {
  console.log('DB connected');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
