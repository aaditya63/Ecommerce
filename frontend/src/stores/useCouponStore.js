import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCouponStore = create((set,get) => ({
    coupons: [],
    loading: false,


    fetchAllCoupons: async () => {
        set({ loading: true })
		try {
			const response = await axios.get("/managecoupon");     
            set({ coupons: response.data })
            set({ loading: false })
		} catch (error) {
            set({ loading: false })
			console.error("Error fetching coupon: ", error);
		}
	},

    createNewCoupon:async (couponData) => {
        set({ loading: true })
        try{
            const res = await axios.post("/managecoupon",{couponData});
            set((prevState)=>({
                coupons : [...prevState.coupons, couponData],
                loading : false
            }))
            toast.success("Coupon Created Successfully");
        }catch(error){
            set({loading:false})
            console.log(error)
        }
    },

    deleteCoupon:async (couponData) => {
        set({ loading: true })
        try{
            const res = await axios.put("/managecoupon",{couponData});
            toast.success("Coupon Deleted Successfully");

            set({loading:false})
        }catch(error){
            set({loading:false})
            console.log(error)

        }
    }
}));
