import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createCoupon, deleteCoupon, getCoupon } from "../controllers/manageCouponController.js";

const router = express.Router();

router.get("/", protectRoute,getCoupon);
router.post("/", protectRoute,createCoupon);
router.put("/",protectRoute,deleteCoupon);

export default router;
