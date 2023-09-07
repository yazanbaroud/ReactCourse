import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
	public email: string
    public password: string

    public static emailValidation : RegisterOptions<CredentialsModel, "email"> ={
        required: {value: true, message: "email Requires" },
    }
    public static passwordValidation : RegisterOptions<CredentialsModel, "password"> ={
        required: {value: true, message: "password Requires" },
    }
}

export default CredentialsModel;
