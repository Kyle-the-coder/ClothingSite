import rbphoto from "../assets/imgs/Subject.png"
import MyIcon from "../svg/simplesvg";
import RoseIcon from "../svg/roseSvg";
import LeafIcon from "../svg/leafSvg";
import rb2 from "../assets/imgs/rb2.jpeg"
import ClNavbar from "../components/ClNavbar";
import { useEffect } from "react";

import anime from 'animejs';

const LandingPage = () => {

    useEffect(() => {
        const element = document.getElementById("myElement");

        anime({
            targets: element,
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, []);

    return (
        <div className="w-full">
            <div className="w-full flex h-content bg-slate-200">
                <img src={rb2} className="w-[1050px]" />
                <ClNavbar />
            </div>

            <div className="w-full bg-slate-900 h-300px">
                <MyIcon />
            </div>

            <div>
                <h1>Keep Going</h1>

                <div id="myElement">Hello, Anime.js!</div>

            </div>

            <div>
                <RoseIcon id="ok" />
            </div>



        </div>
    )
}

export default LandingPage;