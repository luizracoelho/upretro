import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../features/home/pages";
import RegisterPage from "../features/register/pages";
import NotFoundPage from "../features/not-found/pages";
import DefaultLayout from "../layouts/default-layout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" Component={DefaultLayout}>
                    <Route path="" Component={HomePage} />
                    <Route path="register" Component={RegisterPage} />
                    <Route path="*" Component={NotFoundPage} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;