import rbphoto from "../assets/imgs/Subject.png"
import MyIcon from "../svg/simplesvg";

const LandingPage = () => {
    return (
        <div className="overflow-hidden z-[999]">
            <div className="bg-green-600 w-screen h-[1160px] border-black border-b-[4px] flex justify-end relative">
                <div className="bg-white w-screen h-full rounded-bl-[1250px] top-[-15px] rounded-b-[10rem] absolute right-[100px] flex relative">
                    <div className="absolute top-[215px] left-[200px] z-[10] relative">

                        <img src={rbphoto} />
                        <div className="absolute z-[11] top w-full h-content p-3 bg-slate-200 top-[50px] rounded-[3.4rem] left-[580px] border-2 border-red-600">
                            <h1 className="underline py-2 text-lg">Rosa Buck History</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id. Sagittis orci a scelerisque purus semper. Lacus vestibulum sed arcu non odio euismod. Sed risus ultricies tristique nulla aliquet. Sapien eget mi proin sed. Leo integer malesuada nunc vel risus. Quis vel eros donec ac odio tempor. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.
                                Elementum pulvinar etiam non quam lacus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.
                                Lacinia at quis risus sed vulputate odio ut.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MyIcon/>
            </div>
        </div>
    )
}

export default LandingPage;