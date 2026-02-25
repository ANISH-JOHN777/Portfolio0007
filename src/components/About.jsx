import './About.css';

const About = ({ id }) => {
    return (
        <section id={id} className="about glass-panel scroll-reveal-scale">
            <h2 className="section-title text-glow">About Me</h2>
            <p className="about-text">
                Hey there! I'm Anish, and I genuinely love building things for the web. What started as curiosity 
                about "how websites work" turned into a real passion. I've spent countless hours learning HTML, CSS, 
                JavaScript, and React - not because I had to, but because I wanted to.
            </p>
            <p className="about-text" style={{marginTop: '1rem'}}>
                I'm not just writing code for the sake of it. I care about making websites that people actually 
                enjoy using. Whether it's a bike rental platform, a billing system for small businesses, or an 
                interview tool powered by AI, I try to think about the real person on the other side of the screen. 
                What would make their day easier? What would make them smile?
            </p>
            <p className="about-text" style={{marginTop: '1rem'}}>
                I won't pretend I know everything - I'm still learning every single day. But that's what I love 
                about this field. There's always something new to explore, a problem to solve, or a better way to 
                do things. If you're looking for someone who's enthusiastic, curious, and always willing to roll up 
                their sleeves to figure things out, let's talk!
            </p>
        </section>
    );
};

export default About;
