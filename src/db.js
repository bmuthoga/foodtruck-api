import mongoose from 'mongoose';
import config from './config';

export default callback => {
    // when this module is imported,
    // we connect to the db then pass 
    // the db back to whatever is importing it
    let db = mongoose.connect(config.mongoUrl);
    callback(db);
}
