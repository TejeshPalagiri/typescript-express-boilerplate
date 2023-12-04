import express from "express";
const v1 = express.Router();
import * as UserController from '../controllers/user.controller';

// test endpoint
v1.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'Hello routing V1'
    })
})



v1.get('/user', UserController.simpleUserFetch);



export default v1;