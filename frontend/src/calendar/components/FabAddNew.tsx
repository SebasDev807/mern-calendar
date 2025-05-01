import { FaPlus } from "react-icons/fa";
import '../styles/FabAddNew.css';
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from "date-fns";


export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        openDateModal();
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'sebas'
            }
        })
    }

    return (
        <button
            className="fabBtn"
            onClick={handleClickNew}
        >
            <FaPlus size={25} />
        </button>
    )
}
