import { Navigate, Route, Routes } from 'react-router-dom';
import { CalendarPage } from '../calendar';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {


  const authStatus = 'authenticated';

  return (
    <Routes>

      {/*  Proteger rutas */}

      {
        (authStatus === 'authenticated')
          ? <Route path="/*" element={<CalendarPage />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }



      <Route path='/*' element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
