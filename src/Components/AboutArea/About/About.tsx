import { SyntheticEvent, useEffect, useState } from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./About.css";
import { useNavigate } from "react-router-dom";
import RandomImage from "../RandomImage/RandomImage";
import Tune from "../Tune/Tune";
import useTitle from "../../../Utils/UseTitle";
import Greeting from "../../SharedArea/Greeting/Greeting";
import notification from "../../../Utils/Notification";
import LinkedIn from "../LinkedIn/LinkedIn";

function About(): JSX.Element {
    useTitle("About")
    const now = new Date()
    const [currentDate, setCurrentDate] = useState<string>("---")
    function showDate() {

        setCurrentDate(now.toLocaleDateString())
    }


    // SyntheticEvent 
    const [currentTime, setCurrentTime] = useState<string>("---")

    //call a function when component when its ready to use
    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date()
            setCurrentTime(now.toLocaleTimeString())
            console.log(now.toLocaleTimeString());
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    function showTime(args: SyntheticEvent) {
        setCurrentTime((args.target as HTMLButtonElement).innerHTML = now.toLocaleTimeString())
    }

    function showNow() {
        notification.success(now.toLocaleTimeString() + now.toLocaleDateString())
        // alert(now.toLocaleTimeString() + now.toLocaleDateString())
    }

    const navigate = useNavigate()

    function navigateHome() {
        navigate("/home")
    }

    const arr = useState<string>("---")
    const topProduct = arr[0]
    const setTopProduct = arr[1]
    function displayTopProduct() {
        setTopProduct("Ice Coffee")
    }


    const [topSeller, setTopSeller] = useState<string>("---")
    function displayTopSeller() {
        setTopSeller("Smitcho")
    }



    return (
        <div className="About">

            
            <Greeting hour={new Date().getHours()} />
            <hr />
            <WhoWeAre />
            <hr />
            <button onClick={showDate}>Show Current Date</button>
            <span>{currentDate}</span>
            <hr />
            <button onClick={showTime}>Show Current Time</button>
            <hr />
            <button onClick={showNow}>Show Current Date and Time</button>
            <hr />
            <button onClick={navigateHome}>Navigate to home</button>
            <hr />
            <button onClick={displayTopProduct}>Display Top Product</button>
            <span>{topProduct}</span>
            <button onClick={displayTopSeller}>Display Top Seller</button>
            <span>{topSeller}</span>
            <hr />
            <span>{currentTime}</span>
            <RandomImage />


            <hr />

            <Tune/>
            <hr />
            <LinkedIn />
        </div>
    );
}

export default About;
