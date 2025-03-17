import { CircleX } from 'lucide-react'
import React from 'react'

export default function CouponCard({ key, coupon,fetchAllCoupons , deleteCoupon }) {
    function handleDelete(){
        deleteCoupon(coupon)
        fetchAllCoupons()
    }
    return (
        <div className="flex justify-between w-full bg-gray-500 px-5 mt-3 py-3 rounded-full">
            <div>
                <p>{coupon.code}</p>
            </div>
            <div>
                <p>{coupon.discountPercentage}</p>
            </div>
            <div>
                <p>{coupon.quantity}</p>
            </div>
            <div>
                <p>{coupon.isActive ? "YES" : "No"}</p>
            </div>
            <div className='cursor-pointer' onClick={()=>{handleDelete()}}>
                <CircleX className='text-red-500'/>
            </div>
        </div>
    )
}
