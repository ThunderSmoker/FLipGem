import express from  'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';
import { getAmount , setRewardRulesForAction ,getRewardRulesForAction, getCoupenAmount, setCoupenAmount, transferReward,decayReward,deductCoupen  } from '../controller/flipgem-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);
router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

//flipgem
router.post('/getflipgem',getAmount);
router.post('/setreward',setRewardRulesForAction);
router.post('/getreward',getRewardRulesForAction);
router.post('/setcoupen',setCoupenAmount);
router.post('/getcoupen',getCoupenAmount);
router.post('/transferreward',transferReward);
router.post('/decayreward',decayReward);
router.post('/deductcoupen',deductCoupen);
export default router;