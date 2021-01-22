const {
  PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
} = process.env;
// const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ojd12.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;
module.exports = {
  PORT: PORT || 3000,
  MONGO_URI,
};
