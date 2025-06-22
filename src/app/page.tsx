import { Button } from "@/components";

export default function Home() {
    return (
        <main className='container'>
            <section className="hero">
                <h1>Hi my name is <span>Vire Majoroh.</span></h1>
                <h2 className="typewriter">I&apos;m a Software Engineer. Welcome to my portfolio.</h2>
                <p>
                    I am an innovative and versatile Full Stack Software Engineer with 5+ years of experience
                    delivering end-to-end solutions across diverse industries and teams of
                    varying sizes from lean startups to large tech-driven organizations.
                    I specialize in building scalable web and mobile applications with a strong command of
                    both frontend and backend technologies, including
                    <span className="skill-text">
                        {' '}React, Next.js, Angular, TypeScript, Node.js, NestJS, Express, Python, C#, and Java.{' '}
                    </span>
                    My backend expertise spans
                    <span className="skill-text">
                        {' '}RESTful API design, GraphQL, microservices, database architecture (SQL and NoSQL), and real-time systems (sockets, websockets, and webRTC/FMC).{' '}
                    </span>
                    I am also proficient in DevOps practices such as CI/CD automation, containerization with <span className="skill-text">Docker</span>, and deploying to cloud platforms like <span className="skill-text">AWS, Azure, and GCP.{' '}</span>
                    I bring a strong understanding of system architecture, performance optimization, and agile methodologies. Passionate about innovation and problem-solving,
                    I combine technical depth with product intuition to lead and deliver impactful, production-ready solutions.
                </p>
                <Button width="9.875rem" blue>View CV</Button>
            </section>
            <section className="home-projects">

            </section>
        </main>
    );
}
