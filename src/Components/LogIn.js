import React, { useCallback } from 'react'
import logoImg from "../Imágenes/img1.jpeg";
import Mobile from "../Imágenes/MobileLog.png";
import { auth } from "../firebase"

const LogIn = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await auth.signInWithEmailAndPassword(email.value, password.value);
                history.push("/home");
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    return (
        <div className="h-screen bg-gray-300">
            <div className="flex items-center justify-center h-full ">
                <div className="flex max-w-sm md:max-w-3xl shadow-2xl border-0">
                    <div className="hidden md:block w-1/2 relative">
                        <img src={logoImg} className="w-full h-full  object-cover" alt="logo" />
                    </div>
                    <div className="bg-white md:w-1/2 p-8">

                        <p className=" sm:invisible md:visible lg:visible xl:visible  text-gray-900 text-3xl text-left font-bold">LogIn</p>
                        <p className=" sm:invisible  md:invisible lg:invisible xl:invisible text-gray-900 text-3xl text-center font-bold">Santos Motors</p>
                        <p className=" sm:invisible  md:invisible lg:invisible xl:invisible text-gray-900 text-xl text-center font-bold -p-8">Group</p>

                        <p className="text-gray-600 text-sm  my-4 font-sans text-center">Bienvenido, inicie sesión por favor</p>
                        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-600">
                            <div className="my-3">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" name="email" type="email" autoFocus placeholder="Nombre de usuario" />
                                {/*<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="username" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nombre de usuario" />*/}
                                <p className="errorMsg text-red-600 font-bold"></p>
                            </div>
                            <div className="my-3">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring" name="password" type="password" placeholder="Contraseña" />
                                {/*<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring" id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />*/}
                                <p className="errorMsg text-red-600 font-bold"></p>
                            </div>
                            <div className="flex items-center justify-between my-3">
                                <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:rings">
                                    Iniciar sesión
                                    </button>
                            </div>
                        </form>
                        <div className="sm:block w-full justify-right mx-8">
                            <picture>
                                <source
                                    media="(min-width: 650px)"
                                    srcSet="">
                                </source>
                                <source
                                    media="(min-width: 465px)"
                                    srcSet="images/img2.png">
                                </source>
                                <img src={Mobile}
                                    alt="">
                                </img>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogIn

