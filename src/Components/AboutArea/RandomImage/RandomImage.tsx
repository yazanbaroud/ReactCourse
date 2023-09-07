import "./RandomImage.css";
import product1 from "../../../Assets/Images/product1.jpg";
import product2 from "../../../Assets/Images/product2.jpg";
import product3 from "../../../Assets/Images/product3.jpg";
import product4 from "../../../Assets/Images/product4.jpg";
import product5 from "../../../Assets/Images/product5.jpg";
import { useEffect, useState } from "react";


function RandomImage(): JSX.Element {

    const products: string[] = [product1,product2,product3,product4,product5]
    const [CurrentImage, setCurrentImage] = useState<string>(products[0])
    useEffect(() => {
        setInterval(() => {
            let i = Math.floor(Math.random() * 5) 
            console.log(i);
            
          setCurrentImage(products[i])
        }, 3000)
    } , [])

    return (
        <div className="RandomImage">
            <img src = {CurrentImage} alt="image"></img>
        </div>
    );
}

export default RandomImage;
