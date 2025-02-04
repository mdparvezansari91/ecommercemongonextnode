'use client'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { useEffect } from "react";
import { signOut, userCheck } from "@/store/user/userSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const user = useSelector(state => state.user)
    console.log({"user on navbar":user})
    useEffect(() => {
        dispatch(userCheck())
    }, [dispatch])

    const handleLogout = async () => {
        await dispatch(signOut())
            .then((action) => {
                if (action.type === "user/signout/fulfilled") {
                    console.log({"user/signout/fulfilled":action})
                    toast.success(action?.payload?.message)
                    router.push("/")
                }
            })

    }
    return (
        <>
            <div className="flex">
                <h1 className="m-10">Brand Logo</h1>
                <div>{user.user ? (<><button className="m-10" onClick={handleLogout}>Signout</button></>) : (<><Link className="m-10" href={"/signin"}>Signin</Link></>)}
                </div>
            </div>
        </>
    )
}

export default Navbar;