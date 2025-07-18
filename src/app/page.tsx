"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ModeToggle } from "@/components/toggle-mode";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [role] = useTypewriter({
    words: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: true,
    delaySpeed: 1500,
  });

  const [stack] = useTypewriter({
    words: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Node.js"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] px-4 py-12">
      <div className="min-h-screen max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Manoj Kumar G S
          </h1>

          <h2 className="text-blue-600 dark:text-cyan-600 text-2xl sm:text-3xl mb-2 font-semibold">
            {role}
            <Cursor />
          </h2>

          <div className="text-gray-700 dark:text-gray-300 text-xl mb-6 flex items-center justify-center md:justify-start gap-2">
            <h3>
              Skilled in
            </h3>
            <div className="flex items-center gap-1 text-blue-600 dark:text-cyan-600 font-semibold">
              <span>{stack}</span>
              <Cursor />
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-medium">
            <span className="text-blue-600 dark:text-cyan-600 font-semibold">
              Let’s turn your ideas into reality.
            </span>{" "}
            I build fast, scalable, and modern full-stack web applications using industry best practices — always focused on quality and user experience.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <a href="#contact">
              <Button
                className="px-6 py-3 text-base font-medium  rounded-lg shadow-sm cursor-pointer
                bg-blue-600 hover:shadow-blue-400 hover:bg-blue-600
                dark:bg-cyan-600 dark:hover:shadow-cyan-400 active:scale-95 
               transition-shadow duration-200"
              >
                Hire Me
              </Button>
            </a>

            <a href="/Manoj-Kumar-GS-Resume.pdf" download className="ml-4">
              <Button
                variant="outline"
                className="px-6 py-3 text-base font-medium border rounded-lg shadow-sm cursor-pointer
              border-blue-600 text-blue-600 hover:shadow-blue-400
               dark:border-cyan-600 dark:text-cyan-600 dark:hover:shadow-cyan-400 active:scale-95 
               transition-shadow duration-200"
              >
                Download Resume
              </Button>
            </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-58 h-58 sm:w-84 sm:h-84 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-600 shadow-lg"
        >
          <Image
            src="/images/Profile_pic.jpg"
            alt="Manoj Kumar G S"
            width={356}
            height={356}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <Separator />

      <section id="services"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="py-20 px-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200" >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-400 dark:text-cyan-400 mb-12">
              What I Can Do For You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Custom Website Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I build modern websites and web apps that load fast, work smoothly on all devices, and help your business grow — from simple pages to complete online platforms.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Responsive Frontend Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold ">
                  Responsive design with Next.js, Tailwind, and React — smooth interactions, mobile-friendly layout, and a great user experience with loaders and skeletons.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Backend & API Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I make sure your website works well behind the scenes — safely sending and saving information, avoiding problems or slowdowns, and making sure everything runs smoothly without errors.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Authentication & Payments Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  Login with Email, Google, or GitHub. Keep pages secure with smart protection. Set up safe online payments using payments gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section id="about" className="min-h-screen flex justify-center items-center">
        <div className="py-20 px-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-400 dark:text-cyan-400 mb-12">
              About Me
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {/* Card 1: Dev Journey */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Learning by Building</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I’ve learned web development by building real projects with every tool I studied — Netflix UI with HTML/CSS, Spotify Clone with JavaScript, Todo App in React, APIs using Node & Express, X homepage with Tailwind, and full-stack apps in Next.js with MongoDB, auth, and payment integration.
                </p>
              </div>

              {/* Card 2: Full-Stack Dev */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Full-Stack Dev</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I build complete full-stack apps with great user experience using loaders, form validations, protected routes, and smooth UI. I follow clean code and backend practices like try/catch, MongoDB operators, optimized API routes, conditional DB connections, and secure payment flows for fast and reliable performance.
                </p>
              </div>

              {/* Card 3: Open to Work */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-300 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Let’s Work Together</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I love exploring the tech field and building web apps. I'm open to freelance projects, internships, and job roles. I can build fast, responsive, and custom websites for your business — focused on real-world needs and smooth user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />

    </main>
  );
}
