import { Link } from 'react-router-dom';
import './LoginPage.css';
import { ErrorMessage } from '../../calendar/components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { LoginForm } from '../interfaces/Form';
import { PasswordInput } from '../components/PasswordInput';


const defaultValues: LoginForm = {
  email: '',
  password: ''
}


export const LoginPage = () => {


  const { register, formState: { errors }, handleSubmit } = useForm<LoginForm>({ defaultValues });

  const handleLogin = (data: LoginForm) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen grid place-items-center bg-slate-800">

      <div className="bg-white rounded-xl shadow-2xl w-100 p-4 text-gray-800">

        <img src="/logo.png" alt="logo" className='w-50 mx-auto' />

        <h3 className="text-center text-2xl mb-4 font-semibold">
          Ingreso
        </h3>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='space-y-5 animate__animated animate__fadeIn'>

          <div>

            <label htmlFor="correo" className="block text-gray-800 font-semibold">
              Correo:
            </label>

            <input
              type="text"
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

          <PasswordInput register={register} passwordError={errors.password?.message} />
          <div>
            <Link to="/auth/register" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Crear Cuenta</Link>
            <input
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-6 bg-blue-900 text-white font-bold w-full text-center rounded "
              value="Login"
            />
          </div>
        </form>
      </div>

    </div>
  )
}

