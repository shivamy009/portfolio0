import { Code2, ComputerIcon, Database, Terminal, Wrench, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Languages",
    icon: Terminal,
    items: ["Python", "Java", "C", "C++","JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Machine Learning",
    icon: Lightbulb,
    items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Hugging Face"],
  },
  {
    title: "Core Subjects",
    icon: ComputerIcon,
    items: ["Oops", "DBMS", "Compilter Design", "Computer Network", "Operating System"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-3xl p-8 border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <cat.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((it) => (
                  <div
                    key={it}
                    className="flex items-center justify-center py-3 px-4 rounded-full border border-border bg-surface text-sm font-medium"
                  >
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
