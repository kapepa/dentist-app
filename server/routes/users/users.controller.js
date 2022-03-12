const express = require('express');
const router = express.Router();
const UsersService = require('./users.service.js');

router.get('/all', async function(req, res, next) {
  const all = await UsersService.findAll();
  res.status(200).json(all);
});

router.get('/one/:id?', async function(req, res, next) {
  const { id } = req.query;
  const user = await UsersService.findOne('id',id);
  res.status(200).json(user);
});

router.post('/create', async function(req, res, next) {
   console.log(req.body)

   res.status(200).json("true");
//  const create = await UsersService.create(req.body);
//  res.status(200).json(create);
});

router.put('/update', async function(req, res, next) {
  const { _id, field, value } = req.body;
  const update = await UsersService.update("_id", _id, {[field]: value});
  res.status(200).json(update);
});

router.delete('/delete/:id', async function(req, res, next) {
  const remove = await UsersService.remove(req.params.id);
  res.status(200).json(remove);
});

module.exports = router;