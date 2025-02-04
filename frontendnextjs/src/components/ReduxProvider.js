'use client'
import store from "@/store/store";

const { Provider } = require("react-redux")

const ReduxProvider = ({children})=>{
    return (
    <Provider store={store}>
        {children}
    </Provider>)

}

export default ReduxProvider;