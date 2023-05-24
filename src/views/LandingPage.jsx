import rbphoto from "../assets/imgs/Subject.png"
import MyIcon from "../svg/simplesvg";
import RoseIcon from "../svg/roseSvg";
import LeafIcon from "../svg/leafSvg";
import rb2 from "../assets/imgs/rb2.jpeg"
import ClNavbar from "../components/ClNavbar";

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
                <LeafIcon/>
            </div>
        </div>
    )
}

export default LandingPage;