import rbphoto from "../assets/imgs/Subject.png"
import MyIcon from "../svg/simplesvg";
import RoseIcon from "../svg/roseSvg";
import LeafIcon from "../svg/leafSvg";
import rb2 from "../assets/imgs/rb2.jpeg"
import ClNavbar from "../components/ClNavbar";
import rblogo from "../assets/imgs/rblogo.jpeg"
import TShirtIcon from "../svg/tshirtSvg";
import CircleCheckIcon from "../svg/newSvg";
import FlowerIcon from "../svg/flowerSvg";
import SquareIcon from "../svg/squareSvg";
import DiamondIcon from "../svg/diamondSvg";
const LandingPage = () => {
    return (
        <div className="w-full">
            <div className="w-full flex h-content bg-slate-200">
                <img src={rb2} className="w-[1050px]" />
                <ClNavbar />
            </div>

            <div className="w-full bg-slate-900 h-300px">
                <MyIcon/>
            </div>
            
            <div>
                <h1>Keep Going</h1>
            </div>

            <div>
                <RoseIcon/>
            </div>

            <div>
                <MyIcon/>
                <img src={rblogo}></img>
            </div>
            

            <div>
                <FlowerIcon/>
            </div>
            
            
        </div>
    )
}

export default LandingPage;