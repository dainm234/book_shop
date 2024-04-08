const Cart = require('../../models/cart/cartModel');
const Product = require('../../models/book/BookModel'); // Import Product model vào controller

const CartController = {
    addToCart: async (req, res) => {
        try {
            const { userId, productId, quantity } = req.body;
            let cart = await Cart.findOne({ userId });
            if (!cart) {
                cart = new Cart(
                    {
                        userId,
                        items: [{
                            productId: [], 
                        }
                        ]
                    }
                )
            } else {
                const index = cart.items.findIndex(item => item.productId.toString() === productId);
                if (index !== -1) {
                    cart.items[index].quantity += quantity;
                } else {
                    cart.items.push({ productId, quantity })
                }
            }
            const totalPrice = await calculateTotalPrice(cart.items); 
            cart.totalPrice = totalPrice; 
            const productCart =  await cart.save();
            res.status(200).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng.' ,productCart });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng.' });
        }
    },

    getCartByUserId: async (req, res) => {
        try {
            const { id } = req.params;
            const cart = await Cart.findOne({ userId: id })
            if (!cart) {
                return res.status(404).json({ message: 'Không tìm thấy giỏ hàng cho người dùng này.' });
            }
            res.status(200).json(cart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy thông tin giỏ hàng.' });
        }
    },

    deleteCartUser:async (req, res) =>{
        try {
            const {id} = req.params;
            const deleteCart = await Cart.findByIdAndDelete(id);
            if(!deleteCart){
                return res.status(404).json({ message:"Không có id"})
            }
            res.status(200).json({message:"Xóa thành công"})
        } catch (error) {
            res.status(500).json({message:"Lỗi server"})
        }
    }

}

const calculateTotalPrice = async (items) => { 
    let totalPrice = 0;
    for (const item of items) {
        try {
            const product = await Product.findById(item.productId); 
            if (product && product.price) {
                totalPrice += item.quantity * product.price;
            } else {
                totalPrice = 0; 
                break; 
            }
        } catch (error) {
            console.error(`Đã xảy ra lỗi khi tìm kiếm sản phẩm với id ${item.productId}:`, error);
            totalPrice = 0; 
            break; 
        }
    }

    return totalPrice;
};

module.exports = CartController;
