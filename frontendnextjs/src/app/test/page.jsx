'use client'
import summaryApi from "@/api/api";
import axios from "axios";
import { useEffect, useState } from "react";

const TestRoute = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(summaryApi.testApiget.url,{
                    method: "post",
                    withCredentials:true
                    
                
                })
                console.log(response);
                if (!response === 200) {
                    throw new Error('Error in getting response');
                }
                setData(response.data)
            } catch (error) {
                setError(error.message);

            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div>
                <h1>Test Route</h1>
                {error && <p>Error: {error}</p>}
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

            </div>
        </>
    )
}

export default TestRoute;