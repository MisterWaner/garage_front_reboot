import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="flex items-center fixed top-0 left-0 z-50 bg-black h-32 w-full">
            <Image
                src="/logo.png"
                alt="Logo"
                width={128}
                height={32}
                className="ml-4"
            />
            <Navbar />
        </header>
    );
}
