import { motion } from "framer-motion";
import React, { useEffect } from 'react'
import CreateCouponPage from "./CreateCoupon";
import { useCouponStore } from "../stores/useCouponStore";
import CouponCard from "./couponCard";

export const CouponPage = () => {
    const {fetchAllCoupons,coupons,deleteCoupon} = useCouponStore()


    useEffect(()=>{
        fetchAllCoupons();
        console.log(coupons);
    },[])

  return (
    <div className="mx-16 lg:mx-52 ">
                    <motion.div
                        className='bg-gray-800/60 rounded-lg p-6 shadow-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <h1 className="font-bold text-lg lg:text-xl justify-center">Mangae Coupons</h1>
                        <CreateCouponPage fetchAllCoupons={fetchAllCoupons}/>
                        <div className="flex justify-between w-full bg-green-800 px-5 mt-10 py-3 rounded-full">
                            <div>
                                <p>Code</p>
                            </div>
                            <div>
                                <p>Discount</p>
                            </div>
                            <div>
                                <p>Quantity</p>
                            </div>
                            <div>
                                <p>Active?</p>
                            </div>
                            <div>
                                <p>Delete?</p>
                            </div>
                        </div>
                        {
                            coupons.map((coupon)=>(
                                <CouponCard key={coupon._id} coupon={coupon} fetchAllCoupons={fetchAllCoupons} deleteCoupon={deleteCoupon}/>
                            ))
                        }
                    </motion.div>
    </div>
  )
}
