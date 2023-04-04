import React from "react";

export default function Signup() {

    return (
        <div>
            {/* Registe Form */}

            <section className="grid grid-cols-2">
               {/* Register via info  */}
                <div>
                    <form action="post" className="flex flex-col p-6 gap-5 fixed top-[30%] left-[40%] shadow-xl ">
                        <input className="py-2 px-6" type="text" placeholder="Name" />
                        <input className="py-2 px-6" type="text" placeholder="Email" />
                        <input className="py-2 px-6" type="text" placeholder="Password" />
                        <input className="py-2 px-6" type="text" placeholder="Confirm Password" />
                        <button type="submit" className=" bg-orange-300 rounded-md py-2 px-6 ">Register</button>
                    </form>
                </div>
            </section>

        </div>
    )
}