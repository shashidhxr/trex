import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@shashidhxr/trex-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
// import { Signup } from "../pages/Signup";
// import { Signin } from "../pages/Signin";
// import { SigninInput } from "@shashidhxr/trex-common";

export const Auth = ({ type }: {type: "signup" | "signin"}) => {

    const navigate = useNavigate();
    
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup"? "signup": "signin"}`, postInputs)
            const jwt = response.data
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch(e) {
            alert("error while signinggggg up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold pb-1">
                        {type == "signin"? "Welcome!" : "Create an Account"}
                    </div>
                    <div className="text-slate-600 pb-4">
                        {type == "signin"? "Don't have an account?": "Already have an Account?"} 
                        <Link className="pl-2 underline " to={type == "signin"? "/signup" : "/signin"}>
                            {type == "signin"? "Create Account": "Login"}
                        </Link>
                    </div>
                </div>
                <div>
                    {type == "signup"? <LabelledInputBox label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}></LabelledInputBox>: null}

                    <LabelledInputBox type="username" label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }}></LabelledInputBox>
                    <LabelledInputBox type="password" label="Password" placeholder="Enter your password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}></LabelledInputBox>
                    <div className="pt-5">
                        <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup"? "Sign up": "Sign In"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputBoxType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInputBox({label, placeholder, onChange, type}: LabelledInputBoxType) {
    return <div className="pt-3">
        <label className="block mb-2 text-sm font-bold text-gray-600">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
} 