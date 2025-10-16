import Image from "next/image"

export default function Projects() {
    return (
        <main className=" flex justify-center items-center p-2">
            <div className="w-4/5">
                <h1 className="text-3xl font-bold text-center  p-2 border-b-2">Engagement</h1>

                {/* AI Fest images */}
                <div>

                    <h1 className="text-center font-semibold p-4"> AI Fest | 2025 </h1>

                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <Image src={"/images/engagement/aifest 3.jpeg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/aifest 2.jpeg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                    </div>

                </div>

                {/* Komsai Hack images */}
                <div>

                    <h1 className="text-center font-semibold p-4"> Komsai Hack | 2025 </h1>

                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <Image src={"/images/engagement/komsaiweek 10.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/komsaiweek 9.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/komsaiweek 1.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                    </div>

                </div>

                {/* Hack4Gov 3 images */}
                <div>

                    <h1 className="text-center font-semibold p-4"> Hack4Gov 3 | 2024 </h1>

                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <Image src={"/images/engagement/h4g 4.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/h4g 2.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/h4g 9.jpg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/engagement/h4g 11.jpeg"} alt="My Face" width={2000} height={1000} className=" w-72 h-44 rounded-lg " />
                    </div>

                </div>
            </div>
        </main>
    )
}