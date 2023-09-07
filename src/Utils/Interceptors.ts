import axios from "axios"
import jwtDecode from "jwt-decode"
import UserModel from "../Models/UserModel"

class Interceptors {
    public create(): void {
        axios.interceptors.request.use(request => {
            const token = localStorage.getItem("token") 
            // || sessionStorage.getItem("token")
            if(token){
                const decodedToken = jwtDecode<{user: UserModel}>(token).user
                if(decodedToken.role === "Admin")
                  request.headers.Authorization = "Bearer " + token
            }
            return request
        })
    }
}

const interceptors = new Interceptors()

export default interceptors