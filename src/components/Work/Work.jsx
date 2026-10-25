import styles from "./Work.module.scss";

const experiences = [
  {
    number: "01",
    type: "ENTERPRISE ENGINEERING",
    title: "Backend systems",
    company: "MindCraft Software Pvt. Ltd | ICICI Prudential AMC",
    description:
      "Engineered core AML (Anti-Money Laundering) alert rule generation and backend processing workflows using investor data, leveraging Python, FastAPI, and Oracle Database. Architected and developed backend services for I-Connect, an enterprise mobile application, integrating Python, FastAPI, Oracle Database, Microsoft Graph APIs, Microsoft Teams synchronization, and QR-based meeting and visitor management workflows.",
    skills: [
      "Python",
      "FastAPI",
      "Oracle",
      "Microsoft Graph",
      "Alembic",
      "AI Integration",
      "...",
    ],
    symbol: "↗",
  },
  {
    number: "02",
    type: "PRODUCT DEVELOPMENT",
    title: "Full-stack applications",
    company: "Skillmine Technology Consulting Pvt Ltd",
    description:
      "Delivered full-stack solutions across multiple enterprise SaaS products including AI-driven recruitment, sales automation, compliance, workforce management, and operations intelligence platforms. Implemented modular RESTful services and scalable backend architecture across multiple enterprise platforms, improving maintainability, performance, and interoperability of distributed application components. Products - LOQ, QuestLight, AI-Ops, Complyment, Spotlight, FaceAuth",
    skills: [
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Python",
      "Langchain",
      "Microservices",
      "...",
    ],
    symbol: "⌘",
  },
  {
    number: "03",
    type: "WEB ENGINEERING",
    title: "Interfaces & experiences",
    company: "Cloud Native Compliance Maven LLC",
    description:
      "Contributed to a compliance-focused web application, developing frontend interfaces and working with modern UI libraries and testing tools.",
    skills: [
      "React",
      "Angular",
      "JavaScript",
      "Material UI",
      "ShadCN",
      "Mantine UI",
      "...",
    ],
    symbol: "◫",
  },
  {
    number: "04",
    type: "INDEPENDENT COLLABORATIONS",
    title: "Software built for real needs",
    company: "GreyCats Tech LLP | Freelance & client projects",
    description:
      "Independent project work and client collaborations focused on turning requirements into useful digital experiences and working software.",
    skills: [
      "Custom development",
      "Integrations",
      "Web applications",
      "Mobile applications",
      "...",
    ],
    symbol: "✳",
  },
];

function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />A RECORD OF BUILDING
          </div>

          <div className={styles.headingLayout}>
            <h2 className={styles.heading}>
              Experience,
              <br />
              <span>put to work.</span>
            </h2>

            <p className={styles.intro}>
              From business-critical systems to independent projects, I bring
              practical engineering experience to products built around
              real-world problems.
            </p>
          </div>
        </header>

        <div className={styles.companyStrip}>
          <span className={styles.stripLabel}>EXPERIENCE ACROSS</span>
          <div className={styles.companyList}>
            <span>ICICI Prudential AMC</span>
            <span>Skillmine Technologies</span>
            <span>Cloud Native Compliance Maven</span>
            <span>Independent clients</span>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {experiences.map((item) => (
            <article className={styles.card} key={item.number}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{item.number}</span>
                <span className={styles.symbol} aria-hidden="true">
                  {item.symbol}
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.type}>{item.type}</p>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>

              <div className={styles.skillList}>
                {item.skills.map((skill) => (
                  <span className={styles.skill} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.companyLabel}>EXPERIENCE WITH</span>
                <span className={styles.company}>{item.company}</span>
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerMark} aria-hidden="true">
            +
          </span>
          <p>
            Different environments. Different challenges.
            <strong> One focus: building software that works.</strong>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Work;
