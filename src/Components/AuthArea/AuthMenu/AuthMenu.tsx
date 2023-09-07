import { useSelector } from "react-redux";
import "./AuthMenu.css";
import { AppState } from "../../../Redux/AppState";
import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {

    function logMeOut() : void{
        authService.logout()
        alert("bye bye ...")
    }

    const user = useSelector((appState: AppState) => appState.user)
    return (
        <div className="AuthMenu">
            {user &&
                <div>
                    <span> Hello {user.firstName} {user.lastName}</span>
                    <span> | </span>
                    <NavLink to="/home" onClick={logMeOut}>logout</NavLink>
                </div>
            }

            {!user &&
                <div>
                    <span> Hello Guest</span>
                    <span> | </span>
                    <NavLink to="/login" >login</NavLink>
                    <span> | </span>
                    <NavLink to="/register">register</NavLink>
                </div>
            }

            
        </div>
    );
}

export default AuthMenu;
