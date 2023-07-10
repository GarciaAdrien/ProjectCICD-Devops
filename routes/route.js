const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();
const tickets = require('../models/tickets');
router.get('/tickets',(req,res,next) => {
    res.status(200).json(tickets)
    next();
})
router.get('/tickets/:id', (req,res,next) => {
    res.send('id: ' + req.params.id);
    const id = parseInt(req.params.id)
    const tickets = tickets.find(tickets => ticket.id === id)
    res.status(200).json(tickets)
    console.log(tickets);
    //res.send('id: ' + req.params.id);

    next();
})

router.get('/tickets1',(req,res,next) => {
    //res.send("un seul ticket")
    res.send(tickets)
    next();
})
// GET /feed/posts
router.get('/routes', controller.getPosts);

// POST /feed/post
router.post('/route', controller.createPost);

module.exports = router;