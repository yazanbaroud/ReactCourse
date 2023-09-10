import { useContext } from "react";
import "./LinkedIn.css";
import { ThemeContext } from "../../../Utils/Context";

function LinkedIn(): JSX.Element {

    const appTheme = useContext(ThemeContext)

    return (
        <div className="LinkedIn" style={appTheme}>
			<p>Our LinkedIn Page : https://Linkedin.com/northwind</p>
        </div>
    );
}

export default LinkedIn;
