import { Button } from 'antd';
import { Link } from "react-router-dom";
import Bg from './Sketch';
import heroImage from '../assets/ff.png'


export default function Body() {
    return (
        <div>
            <div className="m-24">
                <div>
                    <Bg />
                </div>
                <div className='relative'>
                    <h1 className="text-6xl font-bold text-white">Sarca</h1>
                    <h1 className="text-6xl font-bold text-white">Senpai</h1>
                    <p className="max-w-[30rem] font-bold  text-white mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente debitis voluptas labore saepe incidunt culpa odit at illo blanditiis! Deleniti ipsam vitae ex debitis praesentium necessitatibus quo earum repellat eveniet.</p>
                    <div className='flex gap-10 mt-5'>
                        <Link to='/signup'><Button className='bg-yellow-500' type='text'>Signup</Button></Link>
                        <Link to='/signin'><Button className='bg-green-400' type='text'>Signin</Button></Link>
                    </div>
                    <div className="absolute right-2 top-4">
                        <img className='w-[40rem]' src={heroImage} alt="hero-img" />
                    </div>
                </div>


            </div>
        </div>
    )
}