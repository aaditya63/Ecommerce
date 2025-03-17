import React, { useState } from "react";
import { useCouponStore } from "../stores/useCouponStore";


const CreateCouponPage = ({fetchAllCoupons}) => {

    const {createNewCoupon} = useCouponStore()

    const [formData, setFormData] = useState({
        code: "",
        discountPercentage: "",
        isActive: false,
        expirationDate: "",
        quantity: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            expirationDate: new Date(formData.expirationDate).toISOString(), // Convert to ISODate
        };
        createNewCoupon(formattedData);
        fetchAllCoupons()
        setFormData({
            code: "",
            discountPercentage: "",
            isActive: false,
            expirationDate: "",
            quantity: ""
        })
    };

    return (
        <form className="max-w-lg mx-auto p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4 text-center">Create Coupon</h2>
            
            {/* Code */}
            <div className="mb-4">
                <label className="block  text-gray-700 font-medium mb-2" htmlFor="code">Code</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border bg-gray-500 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    placeholder="Enter code"
                    required
                />
            </div>

            {/* Discount Percentage */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="discountPercentage">Discount Percentage</label>
                <input
                    type="number"
                    id="discountPercentage"
                    name="discountPercentage"
                    value={formData.discountPercentage}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md  bg-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-green-800"
                    placeholder="Enter discount percentage"
                    required
                />
            </div>

            {/* Is Active */}
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                        className="rounded-full border-none w-5 h-5 "
                    />
                    <span className="ml-2 text-gray-700">Is Active</span>
                </label>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="expirationDate">Expiration Date</label>
                <input
                    type="date"
                    id="expirationDate"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md  bg-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-green-800"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md  bg-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-green-800"
                    placeholder="Enter quantity"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:ring-green-800"
            >
                Create Coupon
            </button>
        </form>
    );
};

export default CreateCouponPage;
