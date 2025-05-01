
import Modal from 'react-modal';
import { FaWindowClose } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import '../styles/CalendarModal.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es'

import { RiErrorWarningFill } from "react-icons/ri";
import { useCalendar } from '../hooks/useCalendar';
import { useUiStore } from '../../hooks';


registerLocale('es', es)

Modal.setAppElement('#root');

export const CalendarModal = () => {


  const { isDateModalOpen, closeDateModal } = useUiStore();

  const {
    formValues,
    onDateChange,
    onSubmit,
    onCloseModal,
    titleClass,
    formSubmitted,
    onInputChanged

  } = useCalendar('Titulo', 'blblablabla');



  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      overlayClassName="modal-fondo"
      className="mx-auto w-100 md:w-150  bg-slate-100 p-4 rounded-xl shadow-2xl focus:outline-none"
      closeTimeoutMS={300}

    >
      <div className='flex justify-between items-center mb-4'>

        <h1 className="text-2xl font-bold  text-gray-800">Nuevo evento</h1>
        <button
          className='text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer'
          onClick={closeDateModal}
        >

          <FaWindowClose size={25} />
        </button>
      </div>
      <hr className="mb-6 border-gray-300" />

      <form
        className="space-y-4"
        onSubmit={onSubmit}
      >

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha y hora inicio
          </label>
          <DatePicker
            minDate={formValues.start}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            selected={formValues.start}
            onChange={(event) => onDateChange(event as Date, 'start')}
            dateFormat={'Pp'}
            showTimeSelect
            locale="es"
            timeCaption="Hora"
            onClickOutside={onCloseModal}
            timeFormat="hh:mm aa"

          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y hora fin</label>
          <DatePicker
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            selected={formValues.end}
            onChange={(event) => onDateChange(event as Date, 'end')}
            dateFormat={'Pp'}
            showTimeSelect
            locale="es"
            timeCaption="Hora"
            timeFormat="hh:mm aa"
          />
        </div>

        <hr className="border-gray-300" />

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Titulo y notas</label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${titleClass}`}
              placeholder="Título del evento"
              name="title"
              onChange={onInputChanged}
              autoComplete="off"
              value={formValues.title}
            />
            {formSubmitted && formValues.title.length === 0 && (
              <RiErrorWarningFill className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={25} />
            )}
          </div>

        </div>

        <div className="mb-2">
          <small className="text-gray-500">Una descripción corta</small>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small className="text-gray-500">Información adicional</small>
        </div>

        <button
          type="submit"
          className="cursor-pointer flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-5 py-2 rounded-md transition-colors duration-200"
      >
          <FaRegSave size={25} />
          <span>Guardar</span>
        </button>

      </form>



    </Modal>
  )
}
