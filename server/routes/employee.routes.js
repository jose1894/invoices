const express = require('express')
const router = express.Router()

const EmplCtrl = require('../controllers/employee.controller')

router.get('/', EmplCtrl.getEmployees)
router.post('/', EmplCtrl.createEmployee)
router.get('/:id', EmplCtrl.getEmployee)
router.put('/:id', EmplCtrl.updateEmployee)
router.delete('/:id', EmplCtrl.deleteEmployee)

module.exports = router