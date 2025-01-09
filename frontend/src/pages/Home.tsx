import { Blogs } from "../components/Blogs"
import { Discussion } from "../components/Discussion"
import { Appbar } from "../components/Appbar"
import { useAuth0 } from "@auth0/auth0-react"
import { useState, useEffect } from "react"
import axios from 'axios';
import { BACKEND_URL } from "../config"

export const Home = () => {
    const { isAuthenticated, user } = useAuth0()
    const [hasSentRequest, setHasSentRequest] = useState(false);

    const generateUsername = (email: string) => {
        const emailPrefix = email.split('@')[0]
        return emailPrefix.toLowerCase()
    }

    useEffect(() => {
        console.log("use effect triggered")
        console.log(user)
        console.log(isAuthenticated)
        if (isAuthenticated && user && !hasSentRequest) {
            const sendSignupRequest = async () => {
                const username = generateUsername(user.email)
                try {
                    await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                        name: user.name,
                        email: user.email,
                        picture: user.picture,
                        username: username
                    });
                    console.log("User data sent to server successfully");
                    setHasSentRequest(true);
                } catch (error) {
                    console.error("Error sending user data to server:", error);
                }
            };

            sendSignupRequest();
        }
    }, [isAuthenticated, user, hasSentRequest]);

    return (
        <div className="">
            <Appbar></Appbar>
            <div className="max-w-7xl mx-auto grid grid-cols-7">
                <div className="max-w-3xl col-span-4">
                    <Blogs></Blogs>
                </div>
                <div className="max-w-xl col-span-3 my-10 ml-10 mr-8">
                    <Discussion></Discussion>
                </div>
            </div>
        </div>
    )
}