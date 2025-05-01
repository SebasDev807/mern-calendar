import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: state => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: state => {
            state.isDateModalOpen = false;
        }
    }
});

// Exporta las acciones ya corregidas
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
