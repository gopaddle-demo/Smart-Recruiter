//init code
const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

//connection code
const mongoDBconnect = async (req, res) => {
    console.log('mongoDBconnect function call');
    await mongoose.connect(
        db_url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        },
        (err, resp) => {
            //check error
            //assert.equal(err, null, 'DB Connection Fail......');
            if(resp){
                console.log('DB Connection Successfull....' + resp);
                
            }else if(err){
                console.log('DB Connection Fail....' + err);
            }
        }
    );
}

mongoDBconnect();

