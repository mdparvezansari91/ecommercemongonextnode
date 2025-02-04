import summaryApi from "@/api/api";
import axios from "axios";
import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




// Async thunk to check user profile
export const userCheck = createAsyncThunk('user/profile', async (_, { rejectWithValue }) => {
    try {
        const response = await axios(summaryApi.userProfile.url, {
            method: summaryApi.userProfile.method,
            withCredentials: true
        });
        console.log({ "usercheck/": response.data });
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return rejectWithValue(error.response?.data || { message: "from usercheck userslice:Something went wrong" });
    }
});

// Async thunk for user sign-in
export const signin = createAsyncThunk('user/signin', async (credential, { rejectWithValue }) => {
    try {
        const response = await axios(summaryApi.signIn.url, {
            method: summaryApi.signIn.method,
            data: credential,
            withCredentials: true,
            
        });
        console.log({ "user/signin": response.data });
        
        return response.data;
    } catch (error) {
        console.error("Error during sign-in:", error);
        return rejectWithValue(error.response?.data || { message: "from signin userslice:Something went wrong" });
    }
});

// Async thunk for user sign-out
export const signOut = createAsyncThunk("user/signout", async (_, { rejectWithValue }) => {
    try {
        const response = await axios(summaryApi.signOut.url, {
            method: summaryApi.signOut.method,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Error during sign-out:", error);
        return rejectWithValue(error.response?.data || { message: "from signout userslice:Something went wrong" });
    }
});

// User slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // Assuming the response contains user data
                state.error = null;
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                toast.error(state.error);
            })
            .addCase(userCheck.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userCheck.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.userProfile; // Assuming the response contains userProfile
                state.error = null;
            })
            .addCase(userCheck.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.error("User  check rejected:", action.payload);
            })
            .addCase(signOut.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signOut.fulfilled, (state) => {
                state.user = null;
                state.loading = false;
                state.error = null;
            })
            .addCase(signOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                toast.error(state.error);
            });
    }
});

export default userSlice.reducer;