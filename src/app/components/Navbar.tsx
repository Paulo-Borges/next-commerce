import Link from "next/link";


export default function Navbar() {
    return (
        <div>
            <Link
                href="/"
                className=" uppercase font-bold text-md h-12 flex items-center ">
                Next Store
            </Link>
        </div>

    )
}