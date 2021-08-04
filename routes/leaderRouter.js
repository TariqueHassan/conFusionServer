const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req,res,next) => {
    res.end('Will add all the leaders');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported for /leaders');
})
.delete((req,res,next) => {
    res.end('Will delete all the leaders');
})

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.end('POST operation not supported on leaders/' + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update leader: ' + req.params.leaderId + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;