import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Navbar from "../components/Navbar"
import Body from "../components/Body";

export default function Home() {
    return (
        <div>
          <Navbar/>
          <Body/>
        </div>
    )
}