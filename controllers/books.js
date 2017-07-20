// BOOKS CONTROLLER
const router = require('express').Router();

// db
const db = require('../db/connect_db');

// sql files
const sql = require('../models/queries').books;

// routes
router.get('/', (req, res) => {
  db.any(sql.index)
    .then(data => {
      res.status(200).json({ status: 'success', data: data, message: 'found all books' })
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).json({ status: 'failed', err: err.message, message: 'could not get all books' })
    }); 
});

router.get('/:id', (req, res) => {
  db.one(sql.show, req.params.id)
    .then(data => {
      res.status(201).json({ status: 'success', data: data, message: 'found a book' })
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).json({ status: 'failed', err: err.message, message: 'could not find book' })
    }); 
});

router.post('/', (req, res) => {
  db.one(sql.create, req.body)
    .then(data => {
      console.log('created book: ', data);
      res.status(201).json({ status: 'success', data: data, message: 'created book' })
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).json({ status: 'failed', err: err.message, message: 'could not create book' })
    }); 
});

router.put('/:id', (req, res) => {
  req.body.id = req.params.id;
  db.one(sql.update, req.body)
    .then(data => {
      console.log('updated book: ', data);
      res.status(200).json({ status: 'success', data: data, message: 'updated book' })
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(422).json({ status: 'failed', err: err.message, message: 'could not update book' })
    }); 
});

router.delete('/:id', (req, res) => {
  db.one(sql.delete, req.params.id)
    .then(data => {
      console.log('deleted book: ', data);
      res.status(200).json({ status: 'success', data: data, message: 'deleted book' })
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).json({ status: 'failed', err: err.message, message: 'could not delete book' })
    }); 
});

module.exports = router;
