import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex space-around h-[8vh] w-full">
            <nav>
                <ul>
                    <li>
                    <Link href="/dashboard">Home</Link>
                    </li>
                    <li>
                    <Link href="/claim">About</Link>
                    </li>
                    <li>
                    <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;