const {Router} = require('express');
const {usersGet, userPut, userPost, userDelete}  = require('../Controllers/user');
const router = new Router();

router.get('/',usersGet );

router.put('/:id',userPut );

router.post('/', userPost);

router.delete('/:id',userDelete);

module.exports = router;
