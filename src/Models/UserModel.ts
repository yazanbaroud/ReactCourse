import { RegisterOptions } from "react-hook-form";

class UserModel {
	public id: number;
	public firstName: string;
	public lastName: string;
	public email: string;
	public password: string;
    public role: string; // user /Admin



    public static firstNameValidation : RegisterOptions<UserModel, "firstName"> ={
        required: {value: true, message: "firstName Requires" },
        minLength: {value: 2 , message: "firstName must be more than 2 characters"},
        maxLength: {value: 20 , message: "firstName must be fewer than 20 characters"}
    }
    public static lastNameValidation : RegisterOptions<UserModel, "lastName"> ={
        required: {value: true, message: "lastName Requires" },
        minLength: {value: 2 , message: "lastName must be more than 2 characters"},
        maxLength: {value: 20 , message: "lastName must be fewer than 20 characters"}
    }
    public static emailValidation : RegisterOptions<UserModel, "email"> ={
        required: {value: true, message: "lastName Requires" },
    }
    public static passwordValidation : RegisterOptions<UserModel, "password"> ={
        required: {value: true, message: "lastName Requires" },
    }
}

export default UserModel;
