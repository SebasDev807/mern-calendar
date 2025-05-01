import { ErrorMessage } from "../../calendar/components/ErrorMessage"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { UseFormRegister } from 'react-hook-form'

import { useState } from "react";


interface PasswordInput {
    register: UseFormRegister<any>;
    passwordError?: string;
}

export const PasswordInput = ({ register, passwordError }: PasswordInput) => {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const alternatePasswordType = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <div>
            <label htmlFor="password" className='block text-gray-800 font-semibold'>
                Contraseña:
            </label>

            <div className="relative">

                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    placeholder="Contraseña"
                    {...register('password', {
                        required: 'La contraseña es obligatoria'
                    })}
                />
                <button
                    type="button"
                    onClick={alternatePasswordType}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-900 cursor-pointer"
                >
                    {isPasswordVisible
                        ? <FaRegEyeSlash size={25} />
                        : <FaRegEye size={25} />}

                </button>
            </div>
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </div>
    )
}
