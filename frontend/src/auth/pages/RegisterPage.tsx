import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { RegisterForm } from "../interfaces/Form";
import { ErrorMessage } from "../../calendar/components/ErrorMessage";
import { PasswordInput } from "../components/PasswordInput";

const defaultValues: RegisterForm = {
    email: '',
    name: '',
    password: ''
}

export const RegisterPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<RegisterForm>({ defaultValues });

    const handleRegister = (formData: RegisterForm) => {
        console.log({ formData });
    }

    return (
        <div className="min-h-screen bg-slate-800 grid place-items-center ">

            <div className="bg-white rounded-xl shadow-2xl w-100 p-4 text-gray-800">

                <img src="/logo.png" alt="logo" className='w-50 mx-auto' />

                <h3 className="text-center text-2xl mb-4 font-semibold">
                    Registro
                </h3>
                <form
                    className='space-y-5 animate__animated animate__fadeIn'
                    onSubmit={handleSubmit(handleRegister)}>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-semibold">
                            Correo:
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            placeholder="Correo"
                            {...register('email', {
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Correo invalido'
                                },
                                required: 'El correo es obligatorio'
                            })}
                        />

                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-gray-800 font-semibold">
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            placeholder="Correo"
                            {...register('name', {
                                required: 'El nombre de usuario es obligatorio'
                            })}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </div>

                    <PasswordInput register={register} passwordError={errors.password?.message} />
                    <div>
                        <Link to="/auth/login" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">
                            Iniciar sesión
                        </Link>
                        <input
                            type="submit"
                            className="cursor-pointer py-2 px-4 block mt-6 bg-blue-900 text-white font-bold w-full text-center rounded "
                            value="Crear Cuenta"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}
