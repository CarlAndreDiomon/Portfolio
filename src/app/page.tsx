import Image from "next/image";


export default function Home() {
  return (
    <main className=" p-4 ">
      {/* Header Part */}
      <div className=" flex items-center justify-between ">
        <Image src={"/images/me.png"} alt="My Face" width={900} height={900} className=" w-40 dark:hidden" />
        <Image src={"/images/medark.png"} alt="My Face" width={900} height={900} className=" w-40 hidden dark:block" />
        <div>
          <h1 className="font-bold">Carl Andre R. Diomon</h1>
          <h2 className=" text-xs">Antique, Philippines</h2>
          <h3 className="text-gray-500 text-xs">Future Software Engineer</h3>
        </div>
      </div>

      {/* About - Body Part */}
      <div className=" w-full h-full border border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg ">
        <h1 className="font-bold text-lg">
          About
        </h1>

        <p className="text-sm">
          I am a 20 year old aspiring software engineer from Antique, Philippines.
          I am currently studying at the University of Antique, pursuing a Bachelor
          of Science in Information Technology. I have a passion for coding and
          technology, and I am eager to learn and grow in the field of software engineering.

          <br />
          <br />
          I have experience in web development, particularly with Next.js and React.
          I enjoy building projects that solve real-world problems and improve user
          experiences. I am also interested in exploring other areas of software
          engineering, such as mobile app development and machine learning.
        </p>
      </div>

      {/* Projects - Body Part */}
      <div className=" w-full h-full border  border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg " >
        <h1 className="font-bold text-lg">
          Projects
        </h1>

        <div className="grid gap-4 ">
          <div className="w-full h-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
            <h1 className="font-bold ">
              Project 1
            </h1>
            <p className="text-sm">
              A simple web application offers a wide opportunity for testing and debugging purpose only.
              technology use is latest and perfect hahaha
            </p>
          </div>

          <div className="w-full h-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
            <h1 className="font-bold ">
              Project 1
            </h1>
            <p className="text-sm">
              A simple web application offers a wide opportunity for testing and debugging purpose only.
              technology use is latest and perfect hahaha
            </p>
          </div>

          <div className="w-full h-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
            <h1 className="font-bold ">
              Project 1
            </h1>
            <p className="text-sm">
              A simple web application offers a wide opportunity for testing and debugging purpose only.
              technology use is latest and perfect hahaha
            </p>
          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center  bottom-0 w-full h-12 ">
        <h1>&copy; 2025 SoftEn. All Rights Reserved</h1>
      </footer>
    </main>
  );
}
