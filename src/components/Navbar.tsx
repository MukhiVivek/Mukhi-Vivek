function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-50">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold"></h1>
            </div>
            <ul className="flex gap-4 font-medium">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Story</li>
                <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;