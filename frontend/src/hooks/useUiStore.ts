import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    
    const {
        isDateModalOpen
    } = useSelector((state: RootState) => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }

    return {
        // Propiedades
        isDateModalOpen,

        // Métodos
        openDateModal,
        closeDateModal
    }
}
