import "./Game.css";
import imageSource from "../Assets/Images/chess.jpg";

function Game(): JSX.Element {
    return (
        <div className="Game">
            <p>Cool Game:</p>
            <span>Chess</span>
            <br />
            <img src={imageSource} />
        </div>
    );
}

export default Game;
