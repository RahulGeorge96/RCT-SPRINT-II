import { Home } from "../components/home";
import { Product } from "../components/product";
import { About } from "../components/about";
import { Login } from "../components/login";
import { Signup } from "../components/signup";
import { NotFound } from "../components/notfound";
import { Posts } from "../components/posts";

export const RouteData = [,
    {
     path : "/" , 
     element : <Home/>
    }, 
    {
     path : "/about",
     element : <About/>
    } ,
    {
     path : "/login" , 
     element : <Login/>
    } , 
    {
     path : "/signup" , 
     element : <Signup/>
    } , 
    {
        path : "*" , 
        element : <NotFound/>
    } , 

    {
        path : "/posts/:id" , 
        element : <Posts/>
    }
 ]