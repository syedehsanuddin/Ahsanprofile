import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

// const skills = [
//   "JavaScript", "TypeScript", "React", "Next.js",
//   "Node.js", "Tailwind", "Express", "PostgreSQL", "MongoDB",
//   "Mongoose", "Prisma", "Git", "GitHub", "Postman",
//   "Docker", "Redis", "Golang",
// ];

const skills = [
  { name: "Playwright", icon: "playwright", useIconify: true },
  { name: "Selenium", icon: "selenium" },
  { name: "Cucumber", icon: "cucumber" },
  { name: "TypeScript", icon: "typescript" },
  { name: "C#", icon: "csharp", useIconify: true },
  { name: "Swagger", icon: "swagger" },
  { name: "Postman", icon: "postman" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Jira", icon: "jira" },
  { name: "Azure DevOps", icon: "azuredevops", useIconify: true },
  { name: "Confluence", icon: "confluence" },
  { name: "Miro", icon: "miro" },
  { name: "Figma", icon: "figma" },
  { name: "GitHub", icon: "github" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Octopus Deploy", icon: "octopusdeploy" },
];

const Skills = () => (
  <section className="py-10 px-6 max-w-2xl mx-auto">
    <FadeIn>
      <SectionHeading>Skills</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.1}>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-md border border-dashed border-border text-foreground/90 hover:border-foreground/40 transition-colors group"
          >
            <img 
              src={
                skill.useIconify
                  ? `https://api.iconify.design/simple-icons:${skill.icon}.svg`
                  : `https://cdn.simpleicons.org/${skill.icon}`
              }
              alt={skill.name}
              className="h-4 w-4 opacity-80 group-hover:opacity-100" 
              loading="lazy"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default Skills;
