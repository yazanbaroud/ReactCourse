import axios from "axios"
import UserModel from "../Models/UserModel"
import appConfig from "../Utils/AppConfig"
import jwtDecode from "jwt-decode"
import { appStore } from "../Redux/AppState"
import { authActions } from "../Redux/AuthSlice"
import CredentialsModel from "../Models/CredentialsModel"

class AuthService {

    public async register(user: UserModel) : Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user)
        const token = response.data
        console.log(token);
        localStorage.setItem("token",token)
        sessionStorage.setItem("token",token)
        const registerUser = jwtDecode<{user: UserModel}>(token).user
        appStore.dispatch(authActions.register(registerUser))
    }

    public async login(credentials: CredentialsModel) : Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials)
        const token = response.data
        localStorage.setItem("token",token)
        sessionStorage.setItem("token",token)
        const loggedInUser = jwtDecode<{user: UserModel}>(token).user
        appStore.dispatch(authActions.login(loggedInUser))
    }

    public logout() {
        appStore.dispatch(authActions.logout())
        localStorage.removeItem("token")
        sessionStorage.removeItem("token")
    }


    public loadToken() : void {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        if(token){
            const loggedInUser = jwtDecode<{user: UserModel}>(token).user
            appStore.dispatch(authActions.login(loggedInUser))
        }
    }
}

const authService = new AuthService()
authService.loadToken()

export default authService