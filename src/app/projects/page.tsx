import Image from "next/image"

export default function projects() {
    return (
        <main className=" flex justify-center items-center p-2">
            <div className="w-4/5">
                <h1 className="text-3xl font-bold text-center  p-2 border-b-2"> Projects </h1>

                {/* ILearn */}
                <div>

                    <h1 className="text-center font-semibold p-4"> ILearn | 2025 </h1>

                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <Image src={"/images/projects/ilearn1.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/ilearn2.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/ilearn3.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/ilearn4.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/ilearn5.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/ilearn6.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                    </div>

                </div>

                {/* Filipino Heritage */}
                <div>

                    <h1 className="text-center font-semibold p-4"> Filipino Heritage | 2024 </h1>

                    <div className="flex flex-wrap gap-4 justify-center items-center">

                        <Image src={"/images/projects/fhs 1.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                        <Image src={"/images/projects/fhs 2.png"} alt="My Face" width={2000} height={2000} className=" w-72 h-44 rounded-lg " />
                    </div>

                </div>

            </div>
        </main>
    )
}