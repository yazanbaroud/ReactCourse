import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>()
    const navigate = useNavigate()

    async function send(credentials: CredentialsModel) {
        try{
            await authService.login(credentials)
            alert("welcome back")
            navigate("/home")
        }
        catch(err: any){
            alert(err.message)
        }
    }


    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>
                <h2>Login</h2>

                <label>Email: </label>
                <input type="email" {...register("email", CredentialsModel.emailValidation) }/>

                <label>password: </label>
                <input type="password" {...register("password", CredentialsModel.passwordValidation) }/>

                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
