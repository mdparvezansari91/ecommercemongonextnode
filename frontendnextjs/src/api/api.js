const serverDomain = process.env.NEXT_PUBLIC_API_URL
// const serverDomain = "http://localhost:8000/api"


const summaryApi = {
    signUp:{
        url:`${serverDomain}/signup`,
        method:"post"
    },
    signIn:{
        url:`${serverDomain}/signin`,
        method:"post",
    },
    userProfile:{
        url:`${serverDomain}/userprofile`,
        method:"post"
    },
    signOut:{
        url:`${serverDomain}/signout`,
        method:"post"
    },
    testApi:{
        url:`${serverDomain}/test`,
        method:"get"
    }
}



export default summaryApi;

