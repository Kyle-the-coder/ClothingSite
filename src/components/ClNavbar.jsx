import logo from "../assets/imgs/rblogo.jpeg"

let navLinks = [
    { title: "Home", link: "link" },
    { title: "Merch", link: "link" },
    { title: "Contact", link: "link" },
]

const ClNavbar = () => {
    return (
        <div className="w-full h-[200px] bg-black flex justify-center items-center justify-between z-[11] absolute">
            <div className="w-[200px] h-[200px] flex ml-[30px] z-[10]">
                <img src={logo} className="rounded cursor-pointer" />
            </div>
            <div className="flex w-[300px] justify-between mr-[50px] z-[10]">
                {navLinks.map((link, i) => {
                    return (
                        <div className="z-[10]" key={i}>
                            <h1 className="text-green-600 cursor-pointer">{link.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClNavbar;