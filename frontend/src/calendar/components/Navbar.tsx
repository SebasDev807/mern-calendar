import { FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";

export const Navbar = () => {
    return (


        <div className="bg-slate-800 px-4 mb-4 p-4 flex justify-between text-white ">
            <span className="flex items-center gap-2">
                <FaCalendarAlt size={30}/>
                <h1 className="font-medium text-xl">
                    Sebastián
                </h1>
            </span>

            <button className="flex items-center px-2 text-lg text-red-500 cursor-pointer border border-red-500 rounded-lg hover:bg-red-500 hover:text-gray-800">
                <FaSignOutAlt/>
                <span>Salir</span>
            </button>
        </div>
    )
}
