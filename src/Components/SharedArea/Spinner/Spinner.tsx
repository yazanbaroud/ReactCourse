import "./Spinner.css";
import spinnerLoading from "../../../Assets/Images/spinner-loading.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={spinnerLoading} />
        </div>
    );
}

export default Spinner;
