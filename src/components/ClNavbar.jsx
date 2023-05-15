import logo from "../assets/imgs/rblogo.jpeg"

let navLinks = [
    { title: "Home", link: "link" },
    { title: "Merch", link: "link" },
    { title: "Contact", link: "link" },
]

const ClNavbar = () => {
    return (
        <div className="w-full h-[200px] bg-black flex justify-center items-center justify-between">
            <div className="w-[200px] h-[200px] flex ml-[30px]">
                <img src={logo} className="rounded cursor-pointer" />
            </div>
            <div className="flex w-[300px] justify-between mr-[50px]">
                {navLinks.map((link, i) => {
                    return (
                        <div key={i}>
                            <h1 className="text-green-600 cursor-pointer">{link.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClNavbar;