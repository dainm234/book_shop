const router = require('express').Router();
const cartController = require('../../controllers/cartUserController/cartController')

router.post('/',cartController.addToCart);
router.get('/:id', cartController.getCartByUserId);
router.delete('/:id', cartController.deleteCartUser);

module.exports = router;