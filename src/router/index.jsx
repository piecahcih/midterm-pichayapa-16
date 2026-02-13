import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ToDoListPage from "../pages/ToDoListPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <LoginPage/>,
            },
            {
                path:"register",
                element: <RegisterPage/>,
            },
            {
                path:"todolist/:userId",
                element: <ToDoListPage/>,
            },
        ]
    }
])

export default router;