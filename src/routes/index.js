import express from 'express';
import config from '../config';
import middleware from '../middleware';

// calling it 'initializeDb' because when
// it's used it will create the DB connection
import initializeDb from '../db';

// specifying the file this time since we'll have
// multiple controllers in the folder
import foodtruck from '../controller/foodtruck';

import account from '../controller/account';

let router  = express();

// connect to db
initializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));
    // anything we have in the middleware will
    // get added in here

    // api routes v1 (/v1)
    router.use('/foodtruck', foodtruck({ config, db })); 
    router.use('/account', account({ config, db }));

});

export default router;
