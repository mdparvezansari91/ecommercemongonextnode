'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCheck } from "@/store/user/userSlice"; // Make sure to import your userCheck action

const Account = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Account Profile</h1>
                {user? (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold">User  Information</h2>
                        <div className="mt-4">
                            <p><strong>Name:</strong> {""}</p>
                            <p><strong>Email:</strong> {user?.userId?.emailid}</p>
                            {/* Add more user fields as needed */}
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500">Loading user profile...</p>
                )}
            </div>
        </>
    );
}

export default Account;