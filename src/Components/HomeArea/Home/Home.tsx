import "./Home.css";
import cameraImage from "../../../Assets/Images/camera.jpg"
import airPods from "../../../Assets/Images/cocacola.png"
import { log } from "console";
import product1 from "../../../Assets/Images/product1.jpg"
import product2 from "../../../Assets/Images/product2.jpg"
import product3 from "../../../Assets/Images/product3.jpg"
import product4 from "../../../Assets/Images/product4.jpg"
import product5 from "../../../Assets/Images/product5.jpg"
import css from "../../AboutArea/WhoWeAre/WhoWeAre.module.css"
import Search from "../Search/Search";
import useTitle from "../../../Utils/UseTitle";
import Orders from "../../SharedArea/Orders/Orders";
import Spinner from "../../SharedArea/Spinner/Spinner";
import Clock from "../../SharedArea/Clock/Clock";

interface foodType {
    id: number,
    name: string,
    price: number,
}


interface food {
    id: number,
    text: string,
    image: string,
} 




function Home(): JSX.Element {

    useTitle("Home")

    const imageNumber = Math.floor(Math.random() * 2) +1
    const Day = new Date().getDay()

    const Deserts: foodType[] = [
        {id: 1 , name: "ice cream", price: 2},
        {id: 2 , name: "ice", price: 24},
        {id: 3 , name: "coffee", price: 12},
        {id: 4 , name: "pizza", price: 6}
    ] //gets the data from the server

    const food: food[] = [
        {id: 1, text:"im1",image: product1},
        {id: 2, text:"im2",image: product2},
        {id: 3, text:"im3",image: product3},
        {id: 4, text:"im4",image: product4},
        {id: 5, text:"im5",image: product5},
    ]

     {/* last way */}
    // if(imageNumber === 1) {
    //     return (
    //         <div className="Home">
    //             <img src={cameraImage} />
    //         </div>
    //     )
    // } 

    return (
        <div className="Home">
            <Clock format="12h" />
            <Search />
            {/* conditional rendering */}
            

            {/* first way */}
            <img src={imageNumber === 1 ? cameraImage : airPods} />

            <p>{Day >= 0 && Day <= 4 ? "weekDay sale" : "weekEnd Sale"}</p>

            { Deserts.map(desert => <span key={desert.id}>{desert.name} {desert.price} 😊</span>) }


            <div>
            { food.map(food => 
            <div key={food.id} className={css.Food}>
                <img src={food.image}></img>
                <p>{food.text}</p>
            </div> 
            )}
            </div>


            {/* second way */}
            {/* { imageNumber === 1 ? <img src={cameraImage} /> : <img src={airPods} /> } */}

            {/* third way */}
            {/* { imageNumber === 1 && <img src={cameraImage} /> }
            { imageNumber === 2 && <img src={airPods} /> } */}

            {/* forth way */}
            {/* { imageNumber === 1 || <img src={cameraImage} /> }
            { imageNumber === 2 || <img src={airPods} /> } */}

            {/* last way */}
            {/* <img src={airPods} /> */}

            <Orders />
        </div>
    );
}

export default Home;
