import { useCalendarStore } from "../../hooks/useCalendarStore"
import '../styles/FabAddNew.css';
import { FaTrashAlt } from "react-icons/fa";



export const FabDelete = () => {


    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {

        startDeletingEvent()
    }


    return (
        <button
            className="fabDeleteBtn"
            onClick={handleDelete}
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <FaTrashAlt size={25} />
        </button>
    )
}
