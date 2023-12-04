import express from 'express';



// Import routes
import v1 from './routers/v1';

// Create express app instance
const app = express();

// Middlewares 
app.set("port", process.env.PORT || 3000);
app.use(express.json({
    limit: '10MB'
}))


app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'The server is running.'
    })
})

// include routes here
app.use('/api/v1', v1)


// 404 not found catcher
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // error message
    const response = req.app.get('env') === 'dev' ? {
        success: false,
        message: err.message,
        code: err.code ? err.code : "",
        stack: err.stack
    } : {
            success: false,
            message: err.message,
            status: err.status || 500,
            code: err.code ? err.code : ""
        };

    // send error message
    res.status(err.status || 500);
    res.send(response);
});


export default app;