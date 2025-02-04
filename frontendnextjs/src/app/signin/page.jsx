'use client'

import { signin, userCheck } from "@/store/user/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Signin = () => {
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState({
        emailid: "",
        password: "",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignin = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (!data.emailid || !data.password) {
            toast.error("Please fill in all fields.");
            return;
        }

        await dispatch(signin(data))
            .then((action) => {
                console.log({ "signinAction": action });
                if (action.type === 'user/signin/fulfilled') {
                    if (action.payload.success) {
                        toast.success(action.payload.message);
                        dispatch(userCheck());
                        router.push("/");
                    } else {
                        toast.error(action.payload.message);
                    }
                }
            });
    };

    return (
        <div>
            {loading ? (
                <div>Loading user</div>
            ) : (
                <form onSubmit={handleSignin}>
                    <h1>Sign In</h1>
                    <div>
                        <label htmlFor="emailid">Email ID</label>
                        <input
                            type="email"
                            name="emailid"
                            id="emailid"
                            value={data.emailid}
                            onChange={handleOnChange}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={handleOnChange}
                            required
                            autoComplete="password"
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            )}
        </div>
    );
};

export default Signin;