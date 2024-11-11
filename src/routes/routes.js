import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Results } from "../components/Results";
import { Register } from "../components/Register";
import { CreateBlog } from "../components/CreateBlog";
import { EditBlog } from "../components/EditBlog";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/results',
    Component: Results
  },
  {
    path: '/register',
    Component: Register
  },
  {
    path: '/create-blog',
    Component: CreateBlog
  },
  {
    path: '/edit-blog/:id',
    Component: EditBlog
  }

]);