import { Router } from 'express'
import productsRoutes from './products.routes'
import registerRoutes from './register.routes'
import signinRoutes from './signin.routes'
import adminRoutes from './admin.routes'
import cartRoutes from './cart.routes'
import orderRoutes from './order.routes'
import userRoutes from './user.routes'
import wishlistRoutes from './wishlist.routes'

const router = Router()

router.use('/products', productsRoutes)
router.use('/register', registerRoutes)
router.use('/signin', signinRoutes)
router.use('/admin', adminRoutes)
router.use('/cart', cartRoutes)
router.use('/order', orderRoutes)
router.use('/user', userRoutes)
router.use('/wishlist', wishlistRoutes)



export default router