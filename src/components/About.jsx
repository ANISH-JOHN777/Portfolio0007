import './About.css';

const About = ({ id }) => {
    return (
        <section id={id} className="about glass-panel scroll-reveal">
            <h2 className="section-title text-glow">MISSION OBJECTIVE</h2>
            <p className="about-text">
                A passionate Web Developer with hands-on experience building dynamic and user-friendly
                websites using HTML, CSS, JavaScript, and React. I am adept at problem-solving and UI
                design, with a proven track record of creating real-world applications like bike rentals
                and billing systems. I am eager to innovate and tackle new tech challenges with a creative mindset.
            </p>
        </section>
    );
};

export default About;
