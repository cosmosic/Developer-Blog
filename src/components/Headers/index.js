import Link from "next/link";
import Logo from "./logo";


const Header = () => {
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
         <Logo/>
         <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 traslate-x-1/2 bg-light backdrop-blur-sm">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mr-2">About</Link>
            <Link href="/contact" className="mr-2">Contact</Link>
<button> T</button>
         </nav>
         <div>
            <a href="http://example.com">LinkedIn</a>
            <a href="http://example.com">Twitter</a>
            <a href="http://example.com">Github</a>
            <a href="http://example.com">Dribble</a>

         </div>
        </header>

    )

}

export default Header;