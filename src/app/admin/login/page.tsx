import AdminLoginPage from "@/src/components/Admin/Login/page";
import { Suspense } from "react";

const login = ()=>{
    return(
       <Suspense fallback={<div>Loading...</div>}>
        <AdminLoginPage/>
        </Suspense>
    )
}


export default login;