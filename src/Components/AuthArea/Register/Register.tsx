import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import notification from "../../../Utils/Notification";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>()
    const navigate = useNavigate()

    async function send(user: UserModel) {
        try{
            await authService.register(user)
            // alert("welcome")
            notification.success("welcome")
            navigate("/home")
        }
        catch(err: any){
            // alert(err.message)
            notification.error(err)
        }
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <h2>Register</h2>

                <label>first name: </label>
                <input type="text" {...register("firstName" , UserModel.firstNameValidation) } />

                <label>last name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation) }/>

                <label>Email: </label>
                <input type="email" {...register("email", UserModel.emailValidation) }/>

                <label>password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation) }/>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
