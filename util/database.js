const { MongoClient, ServerApiVersion } = require('mongodb');

let _db;
const uri = "mongodb+srv://yadavgopinath93:Gopi1708@cluster0.bx266.mongodb.net/?retryWrites=true&w=majority&tls=true";

const Mongoconnect = (callback) => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Add this
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    client.connect()
        .then((client) => {
            console.log("Connected to MongoDB");
           
            _db=client.db();
            callback();
        })
        .catch(err => {
            console.error("MongoDB connection error:", err);
            throw err;
        });
};

const getDb = () =>{
  if(_db){
    return _db;
  }
  throw 'No database found';
};

exports.Mongoconnect=Mongoconnect;
exports.getDb=getDb;

