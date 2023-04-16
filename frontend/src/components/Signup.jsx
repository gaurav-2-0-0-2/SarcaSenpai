import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("clicked")
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            navigate('/signin')

        } catch (error) {
            console.error(error);
        }

    }



    return (
        <div>
            {/* Register Form */}

            <section className="grid grid-cols-2">
                {/* Register via info  */}
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-5 fixed top-[30%] left-[40%] shadow-xl ">
                        <input className="py-2 px-6 outline-none" type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                        <input className="py-2 px-6 outline-none" type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleChange} />
                        <input className="py-2 px-6 outline-none" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                        <input className="py-2 px-6 outline-none" type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
                        <button type="submit" className=" bg-orange-300 rounded-md py-2 px-6 ">Register</button>
                        <p>Already Registered ? <Link to="/signin"><span className="text-orange-500">signin</span></Link></p>
                    </form>
                </div>
            </section>

        </div>
    )
}