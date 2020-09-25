import React, {useState, useEffect} from 'react'
import logoImg from "../img1.jpeg";
import Mobile from "../MobileLog.png";
import { Link } from 'react-router-dom';
//import { fb } from "./firebase" 

/*const App = () =>{
    const [user, setUSer] = useState("");
    const [email, setEMail] = useState("") ;
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    
    const clearInputs=()=>{
        setEmail("");
        setPassword("");
    }
    
    constclearErrors=()=>{
        setEmailError("");
        setPasswordError("");
    }
     

}*/ 


function LogIn() {
    return (
        <body className="h-screen bg-gray-300">
            <div className="flex items-center justify-center h-full ">
                <div className="flex max-w-sm md:max-w-3xl shadow-2xl border-0">
                    <div className="hidden md:block w-1/2 relative">
                    <img src={logoImg}  className="w-full h-full  object-cover" />
                    </div>
                    <div className="bg-white md:w-1/2 p-8"> 
                   
                    <p className=" sm: invisible md:visible lg:visible xl:visible  text-gray-900 text-3xl text-left font-bold">LogIn</p>
                         <p className=" sm:invisible  md:invisible lg:invisible xl:invisible text-gray-900 text-3xl text-center font-bold">Santos Motors</p>
                         <p className=" sm:invisible  md:invisible lg:invisible xl:invisible text-gray-900 text-xl text-center font-bold -p-8">Group</p>
                        
                         <p className="text-gray-600 text-sm  my-4 font-sans text-center">Bienvenido, inicie sesión por favor</p>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-600">
                            <div className="my-3">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre de usuario" />
                            </div>
                            <div class="my-3">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
                            </div>
                            <div class="flex items-center justify-between my-3">
                                <Link to="/">
                                    <button class="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Iniciar sesión
                                    </button>
                                </Link>
                            </div>
                        </form>
                        <div class= "sm:block w-full justify-right mx-8">
                        <picture>
                            <source 
                                media="(min-width: 650px)"
                                srcset="">
                                </source>
                                <source 
                                    media="(min-width: 465px)"
                                    srcset="images/img2.png">
                                </source>
                                <img src={Mobile} 
                                    alt="">
                                </img>
                        </picture>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default LogIn
/*<div className="w-full max-w-xs flex content-start">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
</div>*/