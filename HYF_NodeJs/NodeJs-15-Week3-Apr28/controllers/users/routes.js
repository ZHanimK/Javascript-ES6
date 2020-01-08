const routes=require('express').Router()
const {getList, updateItem, createItem,delItem}=require('./handler')

routes.get('/', getList)
routes.put('/:id',updateItem)
routes.post('/',createItem)
routes.delete('/:id',delItem)

module.exports={routes:routes}
