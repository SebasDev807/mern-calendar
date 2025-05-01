import { Provider } from "react-redux"
import { AppRouter } from "./router"
import { store } from "./store"
import { BrowserRouter } from "react-router-dom"

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}