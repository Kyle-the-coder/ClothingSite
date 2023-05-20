import logo from "../assets/imgs/rblogo.jpeg"


let navLinks = [
    { title: "Home", link: "link" },
    { title: "Merch", link: "link" },
    { title: "Contact", link: "link" },
]

const ClNavbar = () => {
    return (
        <div className="w-full">
            <div className="w-[400px]  h-full bg-black flex flex-col items-center ">
                <div className="w-full items-center flex flex-col h-1/2 ">
                    <div className="w-[200px] h-[200px] mb-10 mt-10">
                        <img src={logo} className="rounded cursor-pointer" />
                    </div>
                    <div className="flex flex-col  w-[300px] ">
                        {navLinks.map((link, i) => {
                            return (
                                <div className="mb-10" key={i}>
                                    <h1 className="text-green-600 cursor-pointer text-2xl">{link.title}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClNavbar;