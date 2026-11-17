import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Github,
  Globe2,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Send,
  Server,
  Sparkles,
  Star,
  Twitter,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    title: "Loan Default Risk Analytics",
    category: "Data Science",
    description:
      "Exploratory data analysis and predictive analytics workflow to identify borrower risk patterns and support data-driven lending decisions.",
    metric: "Risk",
    metricLabel: "focused analytics",
    tags: ["Python", "Pandas", "EDA", "Machine Learning"],
    icon: BarChart3,
  },
  {
    title: "RSVP Movies — Global Audience Analysis",
    category: "Data Science",
    description:
      "Analysis of global movie audiences using the previous three years of data to uncover trends, audience patterns and business insights.",
    metric: "3 yrs",
    metricLabel: "historical data",
    tags: ["Python", "SQL", "EDA", "Visualization"],
    icon: Database,
  },
  {
    title: "BoomBikes Demand Prediction",
    category: "Data Science",
    description:
      "Demand prediction project designed to understand the factors behind a revenue decline and forecast bike-sharing demand using machine learning.",
    metric: "ML",
    metricLabel: "demand prediction",
    tags: ["Python", "Regression", "Feature Engineering", "Analytics"],
    icon: BarChart3,
  },
  {
    title: "Static Voltage Stability of Large Bus Power System",
    category: "Engineering",
    description:
      "Electrical engineering research focused on static voltage stability analysis of large bus power systems and voltage stability indices.",
    metric: "2019",
    metricLabel: "research publication",
    tags: ["Power Systems", "Voltage Stability", "Research"],
    icon: Zap,
  },
];

const skills = [
  { name: "Python", level: 92, type: "Advanced" },
  { name: "SQL", level: 88, type: "Advanced" },
  { name: "Machine Learning", level: 86, type: "Advanced" },
  { name: "Generative AI / RAG", level: 82, type: "Developing" },
  { name: "Power BI", level: 84, type: "Advanced" },
  { name: "React / Frontend", level: 76, type: "Developing" },
];

const testimonials = [
  {
    quote:
      "The project turned a messy data problem into a clear, usable product. Communication was excellent and the final result felt production-ready.",
    name: "Priya Sharma",
    role: "Product Manager",
    initials: "PS",
    rating: 5,
  },
  {
    quote:
      "Strong technical thinking and a rare ability to explain complex AI concepts in simple business language.",
    name: "Rahul Mehta",
    role: "Engineering Lead",
    initials: "RM",
    rating: 5,
  },
  {
    quote:
      "Fast, thoughtful and detail-oriented. The dashboard gave our team exactly the visibility we were missing.",
    name: "Ananya Rao",
    role: "Data Analyst",
    initials: "AR",
    rating: 5,
  },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Services", "Publications", "Contact"];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-2xl shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
            <Code2 size={19} />
          </span>
          <span className="hidden sm:block">Alex<span className="text-violet-400">.</span>dev</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-violet-100"
          >
            Let's talk
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="glass rounded-xl p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-gray-200 hover:bg-white/10"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="section-container relative grid min-h-[82vh] items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new opportunities
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build <span className="text-gradient">intelligent</span>
            <br />
            digital experiences.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            AI Engineer & Data Science professional focused on turning data,
            machine learning and modern web technologies into useful products.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-semibold shadow-xl shadow-violet-900/30 transition hover:-translate-y-1"
            >
              View my work
              <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Get in touch
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["1.5+", "Years teaching & building"],
              ["3+", "Data projects"],
              ["12+", "Technologies"],
            ].map(([number, label]) => (
              <div key={label} className="border-l border-white/10 pl-4">
                <div className="text-2xl font-bold text-white">{number}</div>
                <div className="mt-1 text-xs leading-5 text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md" style={{ transitionDelay: "120ms" }}>
          <div className="absolute -inset-5 animate-pulse rounded-[2.5rem] bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[1px]">
            <div className="glass-strong rounded-[2rem] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">developer.card</span>
                <Sparkles className="text-violet-300" size={18} />
              </div>

              <div className="mx-auto mt-10 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 ring-1 ring-white/10">
                <div className="grid h-28 w-28 place-items-center rounded-full bg-[#0a0d1d] text-5xl shadow-2xl">
                  👨‍💻
                </div>
              </div>

              <div className="mt-7 text-center">
                <h2 className="text-2xl font-bold">Swati Shukla</h2>
                <p className="mt-1 text-gray-400">AI Engineer · Data Science</p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-xs text-gray-500">Focus</div>
                  <div className="mt-1 font-semibold">AI + Data</div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="mt-1 font-semibold">India 🇮🇳</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-5 -top-6 animate-float rounded-2xl border border-white/10 bg-[#11152a]/90 p-3 shadow-xl backdrop-blur-xl">
            <BrainCircuit className="text-cyan-300" />
          </div>
          <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-white/10 bg-[#11152a]/90 p-3 shadow-xl backdrop-blur-xl [animation-delay:1s]">
            <Database className="text-violet-300" />
          </div>
        </div>
      </div>

      <a href="#about" className="mx-auto mt-10 flex w-fit animate-bounce flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}

function About() {
  const cards = [
    { icon: BrainCircuit, title: "AI & ML", text: "Building practical predictive and generative AI solutions." },
    { icon: BarChart3, title: "Data Analytics", text: "Turning raw data into decisions, dashboards and insights." },
    { icon: Code2, title: "Development", text: "Creating clean, responsive and maintainable applications." },
  ];

  return (
    <section id="about" className="section-container py-28">
      <div className="reveal grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">About me</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering meets <span className="text-gradient">intelligence.</span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-400">
            I enjoy solving problems where software, data and engineering intersect.
            My work spans machine learning, generative AI, analytics and modern
            frontend development, with a focus on solutions that are useful—not
            just technically impressive.
          </p>
          <p className="mt-5 leading-7 text-gray-500">
            With a background in Electrical Engineering and postgraduate training
            in Data Science, I bring structured problem solving, curiosity and
            strong analytical thinking to every project.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {cards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                <Icon className="text-violet-300 transition group-hover:scale-110" size={24} />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.015] py-28">
      <div className="section-container">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Skills</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Tools I use to build.</h2>
          <p className="mt-5 leading-7 text-gray-500">
            A balanced stack across AI, data, engineering and frontend development.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass reveal rounded-2xl p-5" style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="mt-1 inline-block text-xs text-gray-500">{skill.type}</span>
                </div>
                <span className="text-sm font-semibold text-gray-300">{skill.level}%</span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "LangChain", "Hugging Face", "Generative AI", "RAG", "Power BI", "React", "Tailwind CSS", "Git"].map(
            (tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-400 transition hover:border-violet-400/30 hover:text-white">
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const categories = ["All", "AI / GenAI", "Data Science", "Engineering"];

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  useEffect(() => setIndex(0), [category]);

  const project = filtered[index % filtered.length];
  const Icon = project.icon;

  const next = () => setIndex((i) => (i + 1) % filtered.length);
  const prev = () => setIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <section id="projects" className="section-container py-28">
      <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">Selected work</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Projects that solve problems.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                category === item
                  ? "bg-white text-gray-950"
                  : "border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="reveal mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-400/10 p-[1px]">
        <div className="glass-strong rounded-[2rem] p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div className="relative grid min-h-[280px] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/50 to-cyan-900/30">
              <div className="absolute h-56 w-56 animate-pulse rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative grid h-28 w-28 place-items-center rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                <Icon size={58} className="text-violet-200" />
              </div>
              <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                {project.category}
              </span>
            </div>

            <div>
              <div className="text-sm text-violet-300">Featured project</div>
              <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-gray-400">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-white">{project.metric}</div>
                  <div className="mt-1 text-xs text-gray-500">{project.metricLabel}</div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="mt-1 text-xs text-gray-500">customizable</div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-white hover:text-violet-300">
                  Discuss a similar project <ArrowUpRight size={18} />
                </a>
                <div className="flex items-center gap-2">
                  <button onClick={prev} className="rounded-full border border-white/10 p-2 transition hover:bg-white/10" aria-label="Previous project">
                    <ArrowLeft size={18} />
                  </button>
                  <button onClick={next} className="rounded-full border border-white/10 p-2 transition hover:bg-white/10" aria-label="Next project">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {filtered.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`h-1.5 rounded-full transition-all ${dotIndex === index ? "w-8 bg-violet-400" : "w-2 bg-white/20"}`}
                aria-label={`Go to project ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: BrainCircuit,
      title: "AI & Generative AI",
      text: "LLM applications, prompt engineering, RAG pipelines and intelligent AI solutions.",
      large: true,
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      text: "EDA, predictive analytics, machine learning and business-focused insights.",
    },
    {
      icon: Database,
      title: "SQL & Data",
      text: "Data cleaning, transformation, querying and analysis for reliable decision-making.",
    },
    {
      icon: Monitor,
      title: "Power BI & Visualization",
      text: "Interactive dashboards and clear visual storytelling from complex datasets.",
    },
  ];

  return (
    <section id="services" className="border-y border-white/5 bg-white/[0.015] py-28">
      <div className="section-container">
        <div className="reveal mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Services</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">From idea to useful product.</h2>
        </div>

        <div className="grid auto-rows-[minmax(210px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, large }, i) => (
            <div
              key={title}
              className={`glass group reveal relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:border-violet-400/20 ${
                large ? "lg:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />
              <Icon size={30} className="relative text-violet-300 transition group-hover:scale-110" />
              <div className={`${large ? "mt-20" : "mt-10"} relative`}>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-gray-500">{text}</p>
              </div>
              <ArrowUpRight className="absolute bottom-7 right-7 text-gray-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="section-container py-28">
      <div className="reveal mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">Testimonials</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Good work speaks loudly.</h2>

        <div className="glass-strong mt-10 rounded-[2rem] p-8 sm:p-12">
          <div className="flex justify-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" className="text-amber-300" />
            ))}
          </div>

          <blockquote className="mt-7 text-xl leading-9 text-gray-200 sm:text-2xl">
            “{item.quote}”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">
              {item.initials}
            </div>
            <div className="text-left">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          </div>

          <div className="mt-9 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-violet-400" : "w-2 bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Publications() {
  return (
    <section id="publications" className="section-container py-20">
      <div className="reveal mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Research</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Publications & research.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Static Voltage Stability of Large Bus Power System",
            venue: "ICCMC 2019",
            text: "Research on static voltage stability analysis of large bus power systems.",
          },
          {
            title: "Voltage Stability Indices Calculation of Large Bus Power System",
            venue: "IJIREEICE 2019",
            text: "Research focused on calculation and analysis of voltage stability indices.",
          },
        ].map((paper) => (
          <article key={paper.title} className="glass reveal rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]">
            <Award className="text-violet-300" size={28} />
            <h3 className="mt-5 text-xl font-bold leading-7">{paper.title}</h3>
            <p className="mt-2 text-sm font-medium text-violet-300">{paper.venue}</p>
            <p className="mt-3 leading-7 text-gray-500">{paper.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 10) {
      setStatus({ type: "error", text: "Please enter a valid name, email and message (12+ characters)." });
      return;
    }

    setStatus({ type: "success", text: "Message validated successfully. Connect this form to your backend/email service to send it." });
  };

  return (
    <section id="contact" className="border-t border-white/5 py-28">
      <div className="section-container">
        <div className="reveal grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Contact</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">meaningful.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-gray-500">
              Have a project, role or idea in mind? Send a message and let's start a conversation.
            </p>

            <div className="mt-9 space-y-3">
              <a href="mailto:your-email@example.com" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300">
                  <Mail size={20} />
                </span>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">your-email@example.com</div>
                </div>
              </a>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-medium">India</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass rounded-xl p-3 text-gray-400 transition hover:scale-110 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="glass-strong rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm text-gray-400">Name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-700 focus:border-violet-400/50"
                  placeholder="Your name"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm text-gray-400">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-700 focus:border-violet-400/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm text-gray-400">Message</span>
              <textarea
                rows="7"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-700 focus:border-violet-400/50"
                placeholder="Tell me about your project..."
              />
            </label>

            {status && (
              <div
                className={`mt-5 flex items-start gap-2 rounded-xl border p-4 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/20 bg-red-400/10 text-red-300"
                }`}
              >
                {status.type === "success" ? <CheckCircle2 size={18} /> : <X size={18} />}
                <span>{status.text}</span>
              </div>
            )}

            <button
              type="submit"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-semibold shadow-lg shadow-violet-900/20 transition hover:-translate-y-0.5"
            >
              Send message
              <Send size={18} className="transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/10">
      <div className="section-container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
              <Code2 size={18} />
            </span>
            Swati.dev
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
            AI, data and software solutions combining Electrical Engineering, Data Science and Generative AI.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-500">
            {["About", "Skills", "Projects", "Services", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Let's connect</h3>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Open to AI Engineer, Data Science and data-driven software opportunities.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Swati Shukla. All rights reserved.</span>
          <span className="inline-flex items-center gap-1">
            Built with <Heart size={13} className="animate-pulse fill-current text-rose-400" /> React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}