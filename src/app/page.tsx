import Image from "next/image";

export default function Home() {
    return (
        <main className='container'>
            <section className="hero">
                <h1>Hi my name is <span>Vire Majoroh</span></h1>
                <h2 className="typewriter">I&apos;m a Software Engineer.</h2>
                <p>What is Research Methodology? Research methodology is the specific procedures or techniques used to identify, select, process, and analyze information about a topic. In a research paper, the methodology section allows the reader to critically evaluate a study&apos;s overall validity and reliability</p>
                <div className="hero-buttons">
                    <button>Download CV</button>
                </div>
            </section>
        </main>
    );
}
