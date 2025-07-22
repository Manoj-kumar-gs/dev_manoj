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
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";
import AnimatedStack from "@/components/AnimatedStack";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { skills } from "@/skills";

export default function Home() {
  const [role] = useTypewriter({
    words: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: true,
    delaySpeed: 1500,
  });

  const [skillsanimation] = useTypewriter({
    words: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Node.js"],
    loop: true,
    delaySpeed: 1500,
  });

  const projectList = projects;

  type ContactFormData = {
    name: string,
    email: string,
    message: string,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await axios.post('/api/contact', data);
      toast.success(response.data.message);
      reset(); // Clears form
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message.");
    }
  };


  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#0f172a] px-4 py-12">
      <ToastContainer theme="dark" />
      <section className="mb-4 min-h-screen max-w-5xl w-full flex flex-col-reverse md:flex-row md:items-center md:justify-center items-center justify-around gap-5 md:gap-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left md:h-full h-[80%] flex flex-col items-center md:items-start justify-center gap-8"
        >
          <div className="h-[80%] md:h-full flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <div className="text-2xl sm:text-3xl w-75 sm:w-150 flex justify-start">Hi, I am</div> <div className="w-75 sm:w-150 flex justify-start"> Manoj Kumar G S </div>
            </h1>

            <h2 className="text-blue-600 dark:text-cyan-600 text-2xl sm:text-3xl mb-2 font-semibold">
              {role}
              <Cursor />
            </h2>

            <div className="text-gray-700 dark:text-gray-300 text-xl mb-6 flex items-center justify-center md:justify-start gap-2">
              <h3 className=" flex justify-end items-center">
                Skilled in :
              </h3>
              <div className=" flex items-center justify-start gap-1 text-blue-600 dark:text-cyan-600 font-semibold">
                <span>{skillsanimation}</span>
                <Cursor />
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-medium text-start">
              <span className="text-blue-600 dark:text-cyan-600 font-semibold">
                Let’s turn your ideas into reality.
              </span>{" "}
              I build fast, scalable, and modern full-stack web applications using industry best practices — always focused on quality and user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start mb-6">
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
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors cursor-pointer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors cursor-pointer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-600 transition-colors cursor-pointer"
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
          className="w-85 h-85 md:w-164 md:h-90 sm:h-68 sm:w-68 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-600 shadow-lg mt-4 md:mt-10"
        >
          <Image
            src="/images/Profile_pic.jpg"
            alt="Manoj Kumar G S"
            width={356}
            height={356}
            className="object-cover object-top w-full h-full"
          />
        </motion.div>
      </section>

      <Separator />

      <section id="about" className="min-h-screen flex justify-center items-center">
        <div className="py-10 px-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 w-full xl:w-[90%]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-cyan-600 mb-8">
              About Me
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 font-semibold">
              I build real projects, write clean code, and love creating full-stack apps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {/* Card 1: Dev Journey */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Learning by Building</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I’ve learned web development by building real projects with every tool I studied — Netflix UI with HTML/CSS, Spotify Clone with JavaScript, Todo App in React, APIs using Node & Express, X homepage with Tailwind, and full-stack apps in Next.js with MongoDB, auth, and payment integration.
                </p>
              </div>

              {/* Card 2: Full-Stack Dev */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Full-Stack Dev</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I build complete full-stack apps with great user experience using loaders, form validations, protected routes, and smooth UI. I follow clean code and backend practices like try/catch, MongoDB operators, optimized API routes, conditional DB connections, and secure payment flows for fast and reliable performance.
                </p>
              </div>

              {/* Card 3: Open to Work */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Lets Work Together</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I love exploring the tech field and building web apps. I am open to freelance projects, internships, and job roles. I can build fast, responsive, and custom websites for your business — focused on real-world needs and smooth user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section id="skills" className="min-h-screen flex justify-center items-center w-full">
        <div className="py-10 px-4 md:px-10 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 w-full xl:w-[90%]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-cyan-600 mb-8">
              My Skills
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 font-semibold">
              Here are some of the technologies and tools I work with:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className="
              w-full
              min-h-[154px] max-h-[190px]
              flex flex-col items-center justify-center
              bg-white dark:bg-gray-800
              border border-blue-100 dark:border-gray-600 rounded-xl
              shadow-md hover:shadow-blue-400 dark:hover:shadow-cyan-400
              transform hover:-translate-y-2 transition-all duration-200
              p-4
            "
                >
                  <div className="flex justify-center items-center h-16 w-16 mb-2">
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={64}
                      height={64}
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                  <span className="text-base font-semibold text-center text-gray-800 dark:text-gray-100 mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section
        id="projects"
        className="min-h-screen flex justify-center items-center w-full"
      >
        <div className="xl:py-10 xl:px-6 py-4 px-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 w-full md:w-[90%] h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-cyan-600 mb-8">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 font-semibold">
            I learn by building. Each of these projects gave me practical experience with modern web technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full md:w-[90%] justify-center items-center h-full">
            {projectList.map((project, index) => (
              <div
                key={index}
                className={`w-full md:w-[100%] h-full
                  relative group cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md lg:p-3 p-2 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200 flex flex-col items-center justify-center`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={200}
                  height={200}
                  className="object-contain rounded-lg w-full md:w-full h-[60%] sm:h-[50%]"
                />

                <div className="mt-2 lg:mt-4 h-[50%]">
                  <div className="h-[70%]">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">
                      {project.name}
                    </h2>
                    <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="h-[30%] flex items-center justify-between mb-2 sm:my-3 gap-2 w-full">
                    <AnimatedStack stacks={project.stacks} />
                    <div className="flex items-center justify-center gap-2">
                      {/* <a href={project.live} target="_blank">
                        <button className="px-1 md:px-2 py-1 font-medium rounded-lg shadow-sm cursor-pointer bg-blue-600 hover:shadow-blue-400 hover:bg-blue-600 text-white dark:bg-cyan-600 dark:hover:shadow-cyan-400 active:scale-95 transition-shadow duration-200 lg:text-[14px] text-[12px]">
                          Live Site
                        </button>
                      </a> */}
                      <a href={project.github} target="_blank">
                        <button className="px-1 md:px-2 py-1 text-[12px] lg:text-[14px] font-medium border rounded-lg shadow-sm cursor-pointer border-blue-600 text-blue-600 hover:shadow-blue-400 dark:border-cyan-600 dark:text-cyan-600 dark:hover:shadow-cyan-400 active:scale-95 transition-shadow duration-200">
                          GitHub
                        </button>
                      </a>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Separator />

      <section id="services"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="py-10 px-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 w-full xl:w-[90%]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-cyan-600 mb-8">
              Services
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 font-semibold">
              I offer complete web solutions
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Custom Website Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I build modern websites and web apps that load fast, work smoothly on all devices, and help your business grow — from simple pages to complete online platforms.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Responsive Frontend Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold ">
                  Responsive design with Next.js, Tailwind, and React — smooth interactions, mobile-friendly layout, and a great user experience with loaders and skeletons.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-600">Backend & API Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                  I make sure your website works well behind the scenes — safely sending and saving information, avoiding problems or slowdowns, and making sure everything runs smoothly without errors.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-400 dark:hover:shadow-cyan-400 transition-shadow duration-200">
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

      <section id="contact" className="min-h-screen flex justify-center items-center w-full">
        <div className="py-10 px-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 w-full xl:w-[90%]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-cyan-600 mb-8 cursor-pointer">
              Contact Me
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 font-semibold">
              I am open to freelance work, collaborations, or full-time roles. Feel free to reach out — I’ll get back to you soon!
            </p>

            <Card className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                          minLength: { value: 2, message: "Name must be at least 2 characters" },
                          maxLength: { value: 20, message: "Name must be at most 20 characters" },
                        })}
                        placeholder="Your Name"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          },
                        })}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...register("message", {
                          required: "Message is required",
                          minLength: { value: 10, message: "Message must be at least 10 characters" },
                          maxLength: { value: 300, message: "Message must be at most 300 characters" },
                        })}
                        placeholder="Write your message..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
