const Footer = e => {
    return (
        <div
            className="py-8 md:py-5 w-full bg-base-300 text-base-content flex flex-col md:flex-row justify-between px-5 lg:px-20 items-center gap-3 lg:gap-0">
            <p className="text-sm">
                MegaSystems - ETS © 2022
            </p>
            <div className="text-sm flex items-center gap-5">
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}

export default Footer