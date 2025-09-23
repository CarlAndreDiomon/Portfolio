import Image from "next/image";


export default function Home() {
  return (
    <main className=" p-4 ">
      <div className=" flex items-center justify-between ">
        <Image src={"/images/me.png"} alt="My Face" width={150} height={150} />
        <div>
          <h1 className="font-bold">Carl Andre R. Diomon</h1>
          <h2 className=" text-xs">Antique, Philippines</h2>
          <h3 className="text-gray-500 text-xs">Future Software Engineer</h3>
        </div>
      </div>
    </main>
  );
}
