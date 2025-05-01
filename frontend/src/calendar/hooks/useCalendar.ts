import { addHours, differenceInSeconds } from "date-fns";
import { useState, useMemo, useEffect } from 'react';
import Swal from "sweetalert2";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks";



export const useCalendar = (title: string, notes: string,) => {


    const { activeEvent, startSavingEvent } = useCalendarStore();
    const { closeDateModal } = useUiStore();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const difference = differenceInSeconds(formValues.end, formValues.start);

        setFormSubmitted(true);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
            return;
        }

        if (formValues.title.length <= 0) return;

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);
    }

    const [formValues, setFormValues] = useState({
        title,
        notes,
        start: new Date(),
        end: addHours(new Date(), 2),
    });

    const titleClass = useMemo(() => {

        if (!formSubmitted) return ''

        return (formValues.title.length > 0)
            ? ''
            : 'border-2 border-red-500'
    }, [formValues.title, formSubmitted]);

    useEffect(() => {

        if (activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }

    }, [activeEvent])



    const onInputChanged = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        setIsModalOpen(false)
    }

    const onDateChange = (event: Date, changing: 'start' | 'end') => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }



    return {
        isModalOpen,
        onCloseModal,
        onDateChange,
        titleClass,
        onInputChanged,
        onSubmit,
        notes,
        formValues,
        formSubmitted,
    }



}


