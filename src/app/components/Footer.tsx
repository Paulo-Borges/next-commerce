import Link from "next/link";

export default function Footer() {
    return(
        <div>
            <Link 
            href="https://github.com/Paulo-Borges/next-commerce" target="_blank" 
            className=" font-bold text-md h-12 flex items-center ">
                 Borges 2024
            </Link>
        </div>
    )
}