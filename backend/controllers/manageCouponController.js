import Coupon from "../models/coupon.model.js";

export const getCoupon = async (req, res) => {
	try {
		const coupon = await Coupon.find({ isActive: true });
		res.json(coupon || null);
	} catch (error) {
		console.log("Error in controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


export const createCoupon = async(req,res) => {
    try{
        const couponData = req.body.couponData;
        const newCoupon = new Coupon({
            code:couponData.code,
            discountPercentage:couponData.discountPercentage,
            expirationDate:couponData.expirationDate,
            isActive:couponData.isActive,
            quantity:couponData.quantity
        })
        newCoupon.save()
        res.status(200).json({
            success:true,
            data:couponData
        })
    }catch(e){
        console.log("error occured",e)
        res.json({
            success:false,
            message:"Error occured at backend"
        })
    }
}

export const deleteCoupon = async(req,res) => {
    try{
        const couponData = req.body.couponData;
        await Coupon.findOneAndDelete({
            _id:couponData._id
        })
        res.status(200).json({
            success:true,
            message:"Deleted Successfully"
        })
    }catch(e){
        console.log("error occured",e)
        res.json({
            success:false,
            message:"Error occured at backend"
        })
    }
}

