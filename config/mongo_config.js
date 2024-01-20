const { MongoClient} = require('mongodb');
// const res = require('express/lib/response');

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// database name
const dbName = 'curd_opration'

async function main() {
    // use connrct method to connect to the server
    await client.connect();
    console.log('DB Connected Successfully')
    const db =client.db(dbName);
    return db;
}

module.exports = {
    
    main:main,
}

// exports.connect = () => {
//     client.connect(process.env.url, {
//         // useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//         console.error(error);
//     } )
// };