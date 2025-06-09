import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import light from '../src/images/sun.png';
import dark from '../src/images/dark.png';

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed z-50 w-full bg-white/10 dark:bg-white/20 backdrop-blur-md px-4 py-6 sm:px-12 flex flex-wrap justify-between items-center dark:bg-black dark:text-white transition-all duration-500">
      <div className="text-2xl sm:text-3xl font-bold">NK</div>
      <div className="space-x-2 sm:space-x-5 text-base sm:text-xl flex flex-wrap items-center mt-4 sm:mt-0">
        {['Home', 'About', 'Projects', 'Contact'].map((section) => (
          <Link key={section} to={section} smooth={true} duration={500} offset={-60} className="cursor-pointer hover:underline">
            {section}
          </Link>
        ))}
        <button onClick={toggleDarkMode}>
          {darkMode ? <img src={dark} width={30} alt="Dark" /> : <img src={light} width={30} alt="Light" />}
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <motion.section id="Home" className="bg-gray-200 text-gray-900 min-h-screen dark:bg-black dark:text-white transition-colors duration-300 flex flex-col justify-center items-center space-y-4 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl">Welcome to My Portfolio!</h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">I am a Front-End Developer</h2>
      <p className="w-full sm:w-[90%] md:w-[500px] text-base sm:text-lg md:text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque facilis sit perferendis autem eaque aliquid natus placeat perspiciatis blanditiis ducimus eligendi fugiat delectus, doloribus, accusamus tempore. Tenetur, magnam repellendus!</p>
      <Link to="Contact" duration={500} smooth={true} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md cursor-pointer">Contact Me</Link>
    </motion.section>
  );
};

const About = () => {
  return (
    <motion.section id="About" className="bg-gray-300 min-h-screen dark:bg-black dark:text-white transition-all duration-500 px-4 py-12">
      <div className="bg-white max-w-4xl p-5 sm:p-8 mx-auto rounded-md dark:bg-black dark:text-white dark:shadow-xl dark:shadow-gray-300">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">About Me</h1>
        <p className="text-base sm:text-lg md:text-xl mt-5 font-mono text-justify">Hi I'am Nancy Khundia a Front-End Developer based in Meerut, India. I specialize in building responsive and user friendly web interfaces using Html, Css, Javascript,React.js and Tailwindcss</p>

        <h2 className="text-xl sm:text-2xl font-bold mt-5">Personal Information</h2>
        <div className="text-base sm:text-lg mt-2">
          <p>Name: Nancy Khundia</p>
          <p>Date of Birth: March 11 2003</p>
          <p>Gender: Female</p>
          <p>Mother's Name: Mrs. Manju</p>
          <p>Nationality: Indian</p>
          <p>Language: Hindi, English</p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mt-5">Education</h2>
        <ul className="text-base sm:text-lg mt-2 list-disc list-inside">
          <li>Currently, Pursuing MCA from AKTU University, Meerut</li>
          <li>Completed, BCA from CCSU University, Meerut</li>
          <li>Completed 12th from UP Board (2020-2021)</li>
          <li>Completed 10th from UP Board (2018-2019)</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold mt-5">Key Skills</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Html', 'Css', 'Javascript', 'React.js', 'Tailwindcss', 'Communication', 'Bootstrap'].map((skill, index) => (
            <span key={index} className="bg-black text-white dark:bg-white dark:text-black p-2 rounded-md">{skill}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ title, desc, tags, live, github }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[450px] bg-black text-white rounded-xl p-5 text-center mx-auto mt-5 cursor-pointer dark:shadow-lg dark:shadow-gray-200 hover:shadow-xl hover:shadow-gray-200 transition-all duration-500 flex flex-col gap-5 items-center">
      <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
      <p className="text-sm sm:text-base">{desc}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-pink-600 px-2 py-1 rounded-md text-sm">{tag}</span>
        ))}
      </div>
      <div className="space-x-4 text-base">
        <a href={live} className="cursor-pointer hover:underline">Live</a>
        <a href={github} className="cursor-pointer hover:underline">Github</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <motion.section id="Projects" className="bg-gray-400 min-h-screen dark:bg-black dark:text-white transition-all duration-500 px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ProjectCard key={i} title="React Calculator" desc="A basic Calculator build using React" tags={['Html', 'Css', 'Javascript', 'Reactjs', 'Tailwindcss']} live="#" github="#" />
        ))}
      </div>
    </motion.section>
  );
};

const Contact = () => {
  return (
    <motion.section id="Contact" className="bg-gray-500 min-h-screen dark:bg-black dark:text-white transition-all duration-500 px-4 py-10">
      <div className="max-w-4xl p-5 sm:p-8 mx-auto bg-white rounded-md text-center dark:bg-black dark:text-white dark:shadow-xl dark:shadow-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-base sm:text-lg">Name: Nancy</p>
        <p className="text-base sm:text-lg">Address: Metro plaza, Meerut</p>
        <p className="text-base sm:text-lg">Mobile: +91 6398255135</p>
        <p className="text-base sm:text-lg">Email: nancysingh8864</p>
        <form className="mt-5 space-y-4">
          <input type="text" placeholder="Your name" className="w-full p-2 border border-gray-500" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-500" />
          <textarea placeholder="Your message" rows="4" className="w-full p-2 border border-gray-500"></textarea>
          <button type="submit" className="bg-black text-white p-2 rounded-md mt-4 transition-all duration-500 dark:bg-white dark:text-black">Submit</button>
        </form>
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="transition-all duration-500 bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
