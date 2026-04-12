const services = [
  {
    icon: "🤿",
    title: "Individualios pamokos",
    desc: "Asmeninis dėmesys, lankstus grafikas. Mokomės baseine arba atvirame vandenyje – kaip tau patogiau.",
    delay: "",
  },
  {
    icon: "🌊",
    title: "Atvirojo vandens nardymas",
    desc: "Nardymai Druskininkų ežeruose. Ramioje aplinkoje atrasi povandeninį pasaulį visu grožiu.",
    delay: "delay-1",
  },
  {
    icon: "🏊",
    title: "Grupiniai kursai",
    desc: "Nardymo kursai grupėmis – puiki proga kartu su draugais ar šeima įgyti naujų įgūdžių.",
    delay: "delay-2",
  },
  {
    icon: "🔍",
    title: "Paieška po vandeniu",
    desc: "Praradote vertingą daiktą vandenyje? Padedame surasti – žiedus, telefonus, raktus ir kt.",
    delay: "delay-3",
  },
  {
    icon: "📸",
    title: "Nuotykių nardymai",
    desc: "Teminiai nardymai su nuotraukomis ir įspūdžiais. Puiki dovana artimam žmogui.",
    delay: "delay-1",
  },
  {
    icon: "🎓",
    title: "Sertifikuoti kursai",
    desc: "Oficialūs sertifikatai, pripažįstami visame pasaulyje. Tavo nardymo kelionė prasideda čia.",
    delay: "delay-2",
  },
];

export default function Services() {
  return (
    <section id="paslaugos" className="section section-dark">
      <div className="bubbles bubbles-sm" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Paslaugos</span>
          <h2>Ką mes siūlome?</h2>
          <p>
            Nuo pirmojo nardymo iki atvirojo vandens – rasime tinkamą kursą
            kiekvienam
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card reveal ${s.delay}`}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#kontaktai" className="service-link">
                Sužinoti daugiau →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
