const mongoose = require('mongoose')
const mongoURI = "mongodb://spyder0503:manasc05@ac-y51tjjq-shard-00-00.krbhhxu.mongodb.net:27017,ac-y51tjjq-shard-00-01.krbhhxu.mongodb.net:27017,ac-y51tjjq-shard-00-02.krbhhxu.mongodb.net:27017/Food?ssl=true&replicaSet=atlas-vbinw7-shard-0&authSource=admin&retryWrites=true&w=majority"
// "mongodb+srv://spyder0503:manasc05@cluster0.krbhhxu.mongodb.net/Food?retryWrites=true&w=majority"

const mongoDB = async ()=>{
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetchedDataCursor = mongoose.connection.db.collection("Sample").find({});
    const fetchedData = await fetchedDataCursor.toArray();

    console.log("Data fetched successfully");
    global.food_items = fetchedData;
     // console.log(global.food_items);

     const fetchedCategoryCursor = mongoose.connection.db.collection("Category").find({});
    const fetchedCategory = await fetchedCategoryCursor.toArray();
    global.food_category = fetchedCategory;
    console.log("Category fetched successfully");
    // console.log(global.food_category);

} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle the error
}

    //     ,(err,result)=>{
    //    if(err)console.log("---",err)
    //    else{
    //        console.log("connected database");
    // }
    // });
}

module.exports=mongoDB;