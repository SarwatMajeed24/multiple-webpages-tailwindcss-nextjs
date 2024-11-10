import background from "../../../public/images/backgroundimage'.webp";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center h-screen">
            <Image
                src={background}
                alt="background image"
                layout="fill" // This makes the image cover the entire container
                objectFit="cover"
                className="w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-xl md:text-9xl font-semibold text-green-500 bg-black bg-opacity-50 px-4 py-2 rounded">
                    SAMSUNG World Best Phone in the World
                </h1>
            </div>
        </div>
    );
}
