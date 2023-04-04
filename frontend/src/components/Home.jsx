import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";


export default function Home() {
    return (
        <div>
            <div className="fixed p-16 top-[20%] left-[40%] shadow-lg">
              <h1 className="text-center font-bold mb-6">Let's Connect Folks</h1>
                <img className="w-[150px] h-[150px] mx-auto rounded-full shadow-xl" src="https://i.pinimg.com/originals/a3/c2/6c/a3c26c173f6a317431b2ddd586f8b10a.jpg" alt="image"/>
                <div className="mt-6 flex gap-5">
                <Link to={"Signup"} relative="path" >
                     <button className="text-white bg-orange-300 px-6 py-2 rounded-md hover:bg-cyan-500 transition-all ease-in">SIGNUP</button>
                </Link>  
                    <button className="text-white bg-blue-500 px-6 py-2 rounded-md">SIGNIN</button>
                </div>
                <p className="text-center mt-4">already a member? <a href="">SignIn...</a> </p>
            </div>
        </div>
    )
}