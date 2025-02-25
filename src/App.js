// import { useContext } from "react";
// import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import { useTheme } from "./contexts/theme";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
// import { useContext } from "react";

const App = () => {
  const { themeName } = useTheme();
  // const [{ themeName }] = useContext(ThemeContext);
  const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: "./",
    title: "AG.",
  };

  const about = {
    // all the properties are optional - can be left empty or deleted
    name: "Agwaze Great",
    role: "Front End Developer",
    description:
      "I'm a frontend developer with 1 year of experience building clean, responsive, and user-friendly web applications. I specialize in React, JavaScript, and Tailwind CSS, and I’ve worked with Firebase, Supabase, and low-code tools like FlutterFlow and WordPress to bring projects to life. I love turning ideas into functional, visually appealing interfaces that enhance user experience.",
    resume:
      "https://drive.google.com/file/d/17ia5jyjBKw2Pxq9OFgG_YZ2CTmZrtSTM/view?usp=sharing",
    social: {
      linkedin: "https://www.linkedin.com/in/greatosa/",
      github: "https://github.com/GreatOsa",
    },
  };
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: "Newsletter Sign up",
      description:
        "A sleek React app that allows users to subscribe to a newsletter with real-time email validation and success/error messages.",
      stack: ["HTML", "CSS", "React"],
      sourceCode: "https://github.com/GreatOsa/Newsletter-sign-up",
      livePreview: "https://greatosa.github.io/Newsletter-sign-up/",
    },
    {
      name: "Advice Generator",
      description:
        "A simple React app that fetches and displays random advice from the Advice Slip API. Users can generate new advice with a click. Built with React and Fetch API for seamless interaction. 🚀",
      stack: ["HTML", "CSS", "React", "API"],
      sourceCode: "https://github.com/GreatOsa/Advice-Generator",
      livePreview: "https://greatosa.github.io/Advice-Generator/",
    },
    {
      name: "Product List with a functioning Cart",
      description:
        "A React-based e-commerce app featuring a dynamic product list and a fully functional shopping cart. Users can  add/remove items from the cart and view the total price in real time. Built with React ",
      stack: ["HTML", "CSS", "React", "Json"],
      sourceCode: "https://github.com/GreatOsa/product-list-with-cart",
      livePreview: "https://greatosa.github.io/product-list-with-cart",
    },
  ];
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Flutterflow",
  ];
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: "agwazegreat@gmail.com",
  };

  return (
    <div id="top" className={`${themeName} app`}>
      <Header
        header={header}
        projects={projects}
        skills={skills}
        contact={contact}
      />

      <main>
        <About about={about} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact contact={contact} />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
