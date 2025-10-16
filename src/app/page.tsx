import Image from "next/image";
import Link from "next/link";
import { ArrowRightToLineIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitchIcon } from "lucide-react";

export default function Home() {
  return (
    <main className=" p-4  lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-3/4 xl:w-1/2">
        {/* Header Part */}
        <div className=" flex items-center justify-between ">
          <Image src={"/images/me.png"} alt="My Face" width={1000} height={1000} className=" w-40 dark:hidden md:w-64  " />
          <Image src={"/images/medark.png"} alt="My Face" width={1000} height={1000} className=" w-40 hidden dark:block md:w-64 " />
          <div>
            <h1 className="font-bold md:text-4xl ">Carl Andre R. Diomon</h1>
            <h2 className=" text-xs md:text-base ">Antique, Philippines</h2>
            <h3 className="text-gray-500 text-xs md:text-base ">Future Software Engineer</h3>
            {/* <h3 className="text-gray-500 text-xs md:text-base ">dcarlandrerafols@gmail.com</h3> */}

          </div>
        </div>

        {/* About - Body Part */}
        <div className=" w-full h-full border border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg ">
          <h1 className="font-bold text-lg md:text-xl">
            About
          </h1>

          <p className="text-sm md:text-base">
            I am an aspiring Software Engineer currently pursuing a Bachelor of Science in Information Technology at the University of Antique in Antique, Philippines.
            I am driven by a passion for solving problems and believe in the power of code to transform complex challenges into effective, working solutions.

            <br />
            <br />
            My primary focus is on modern web application development, prioritizing efficiency and creating positive user experiences.
            I am actively seeking out opportunities to apply and grow my technical knowledge and abilities, while eagerly exploring additional interests in
            mobile application development and Machine Learning.
          </p>
        </div>

        {/* Projects - Body Part */}
        <div className=" w-full h-full border  border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg ">

          <h1 className="font-bold text-lg md:text-xl flex justify-between p-2">
            <span> Projects </span> <Link href="projects "><ArrowRightToLineIcon /> </Link>
          </h1>



          <div className="grid gap-4 ">

            {/* Ilearn */}
            <div className="w-full h-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg">

              {/* App name */}
              <h1 className="font-bold md:text-lg pb-2">
                I-Learn | 2025
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base">
                An educational mobile application designed to support both offline and online learning.
                Teachers can upload modules, and students can download and store them locally. Features are
                Role-based authentication (students, teachers, admins), secure file handling,
                and periodic login validation for access control. I handle backend development.
                <br></br>
                <br></br>
              </p>

              {/* Technologies used */}
              <div className=" flex flex-wrap gap-2 mb-1">
                <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                  MongoDB
                </h1>

                <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                  Express.js
                </h1>

                <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                  React
                </h1>

                <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                  Node.js
                </h1>

              </div>

            </div>

            {/* Infot2 system */}
            <div className="w-full h-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg">

              {/* App name */}
              <h1 className="font-bold md:text-lg pb-2 flex justify-between">
                Filipino Heritage System | 2024 <Link href="https://filipinoheritagesystem.carlandrediomon.me"><ArrowRightToLineIcon /></Link>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base pb-1 mb-2">
                A Filipino Heritage System designed to promote traditional Filipino delicacies, particularly kakanin.
                This simple website features images, recipes, and step-by-step instructions for preparing various local
                treats. It was developed as part of a 2nd-year college project, where I was responsible for the development
                and deployment.
              </p>

              <br />

              {/* Technologies used */}
              <div className=" flex flex-wrap gap-2 mb-1">

                <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                  NextJS
                </h1>

              </div>

            </div>

          </div>
        </div>

        {/* Tech Stack */}
        <div className=" w-full h-full border  border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg " >
          <h1 className="font-bold text-lg md:text-xl">
            Tech Stack
          </h1>

          {/* Frontend */}
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              Frontend
            </h1>

            <div className=" flex flex-wrap gap-2 mb-1">
              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                HTML/CSS
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Tailwind CSS
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                JavaScript
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                React
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Next.js
              </h1>
            </div>
          </div>

          {/*  Backend */}
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              Backend
            </h1>

            <div className=" flex flex-wrap gap-2 mb-1">
              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Node.js
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Express.js
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                MongoDB
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                REST API
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                JWT
              </h1>
            </div>
          </div>

          {/*  DevOps, Cloud & Infrastructure */}
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              DevOps, Cloud & Infrastructure
            </h1>

            <div className=" flex flex-wrap gap-2 mb-1">
              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm ">
                Docker
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Firebase
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Linux (Ubuntu / WSL2)
              </h1>

            </div>
          </div>

          {/*  Developer Tools */}
          <div>
            <h1 className="font-semibold mb-1 md:text-lg">
              Developer Tools
            </h1>

            <div className=" flex flex-wrap gap-2 mb-1">
              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Git
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                Github
              </h1>

              <h1 className="text-xs border w-max p-1 rounded-sm md:text-sm">
                VS Code
              </h1>

            </div>
          </div>

        </div>

        {/* Engagement */}
        <div className="w-full h-full border border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg">

          <h1 className=" font-bold text-lg mb-2 md:text-xl flex justify-between p-2">
            <span> Engagement </span> <Link href="engagement" className=" text-2xl"> <ArrowRightToLineIcon /> </Link> </h1>

          <div className=" grid gap-4">
            <div>
              <h1 className=" font-semibold text-sm md:text-base">
                2025 Money Talks: Western Visayas Innovative Startup Fest & Tech Expo ( September 2025 - Iloilo, Philippines )
              </h1>
            </div>

            <div>
              <h1 className="font-semibold text-sm md:text-base">
                2025 Komsai Hack: Democratech Hackaton (April 2025 - Iloilo, Philippines)
              </h1>
              <p>
                •	Achieved 2nd place.
              </p>
            </div>

            <div>
              <h1 className=" font-semibold text-sm md:text-base">
                2024 Hack4Gov 3 (July, 2024 – Iloilo, Philippines)
              </h1>
              <p>
                •	Achieved 1st runner up
              </p>
            </div>

          </div>

        </div>

        {/*  Experience */}
        <div className="w-full h-full border border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg">
          <h1 className="font-bold text-lg mb-2 md:text-xl">Experience</h1>

          <div className="grid gap-4">
            {/* Each row */}

            <div className="grid grid-cols-[1fr_auto] items-start">
              <div>
                <h1 className="font-semibold md:text-lg">BS Information Technology</h1>
                <h2 className="text-xs md:text-base">University of Antique</h2>
              </div>
              <span className="ml-2 p-1 border rounded-lg text-xs font-normal md:text-base">2025</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-start">
              <div>
                <h1 className="font-semibold md:text-lg">print(&quot;Hello World!&quot;)</h1>
                <h2 className="text-xs md:text-base">Wrote my first line of code</h2>
              </div>
              <span className="ml-2 p-1 border rounded-lg text-xs font-normal md:text-base">2023</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-full h-full border border-gray-300 dark:border-gray-600 dark:shadow-gray-500 shadow-sm p-4 mt-4 rounded-lg">
          <h1 className="font-bold text-lg mb-2 md:text-xl">Let&apos;s Connect</h1>

          <div className="flex gap-5 ">
            <Link href="https://github.com/CarlAndreDiomon" ><GithubIcon /></Link>
            <Link href="https://linkedin.com/in/carl-andre-rafols-diomon-b21b17347" ><LinkedinIcon /></Link>
            <Link href="mailto:dcarlandrerafols@gmail.com" ><MailIcon /></Link>
            <Link href="https://twitter.com/@Diomon_SoftEn" ><TwitchIcon /></Link>
            <Link href="https://facebook.com/CarlAndreDiomon" ><FacebookIcon /></Link>
            <Link href="https://instagram.com/soft_en07" ><InstagramIcon /></Link>
          </div>
        </div>

        <footer className="flex justify-center items-center  bottom-0 w-full h-12 ">
          <h1>&copy; 2025 SoftEn. All Rights Reserved</h1>
        </footer>
      </div>
    </main >
  );
}
