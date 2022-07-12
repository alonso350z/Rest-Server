const {response} = require('express');

const usersGet = (req, res = response) => {
  const params = req.params;
  res.json({
    msg: 'GET Api -- Controller',
    params,
  });
}

const userPost = (req, res = response) => {
  const {name, age} = req.body;

  res.json({
    msg: 'Post Api -- Controller',
    name,
    age,
  });
}

const userPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'PUT Api -- Controller',
    id: id
  });
}

const userDelete = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'DELETE Api -- Controller',
    id: id,
  });
}


module.exports = {
  usersGet,
  userPost,
  userPut,
  userDelete

};