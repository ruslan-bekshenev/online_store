const Router = require('express')
const router = new Router()
const TypeController = require('../controller/typeController')

router.post('/', TypeController.create)
router.get('/', TypeController.getAll)


module.exports = router