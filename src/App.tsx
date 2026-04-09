import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Server, 
  Shield, 
  Cpu, 
  Globe, 
  Terminal, 
  Award, 
  Briefcase, 
  Code2,
  ChevronRight,
  X,
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare
} from 'lucide-react';

// Typing Animation Component
const TypingText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="typing-container">
      {currentText}
      {currentIndex < text.length && <span className="cursor"></span>}
    </span>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Scroll Reveal Logic
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const skills = [
    "Cisco Networking",
    "Advanced MikroTik",
    "Linux Server (Debian & Ubuntu)",
    "Web & Database Server",
    "Virtualization (VirtualBox) & Remote Access (PuTTY)"
  ];

  const certificates = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      meta: "[Diperoleh saat kelas 11]",
      desc: "Sertifikasi profesional dari Cisco yang memvalidasi kemampuan dalam instalasi, konfigurasi, dan pengoperasian jaringan skala menengah."
    },
    {
      title: "MikroTik Certified Network Associate (MTCNA)",
      meta: "[Sedang dalam tahap persiapan ujian]",
      desc: "Fokus pada manajemen trafik, routing, dan troubleshooting menggunakan RouterOS MikroTik."
    },
    {
      title: "Praktik Kerja Lapangan - Sekolah Alam Depok",
      meta: "Pengalaman Kerja",
      desc: "Tugas meliputi:",
      tasks: [
        "Perawatan komputer dan infrastruktur jaringan.",
        "Bertugas sebagai Operator ANBK bersama rekan dan pembimbing.",
        "Administrasi ATK dan pengelolaan arsip kepegawaian/kesiswaan.",
        "Rekapitulasi keuangan sekolah."
      ]
    }
  ];

  const projects = [
    {
      title: "Desain & Implementasi Topologi Jaringan Skala Sekolah",
      desc: "Merancang dan melakukan konfigurasi jaringan kompleks tingkat lanjut dengan menerapkan routing protocol, VLAN, trunking, dan EtherChannel.",
      icon: <Network className="project-icon" size={32} />,
      image: "https://picsum.photos/seed/network-topology/1200/800"
    },
    {
      title: "Konfigurasi & Manajemen Server Linux",
      desc: "Membangun infrastruktur server menggunakan sistem operasi Debian dan Ubuntu, mencakup instalasi Web Server, Database Server, serta WordPress Server.",
      icon: <Server className="project-icon" size={32} />,
      image: "https://picsum.photos/seed/linux-server/1200/800"
    },
    {
      title: "Perawatan Infrastruktur IT & Operator ANBK",
      desc: "Menjaga stabilitas infrastruktur jaringan dan hardware komputer, serta mengelola kelancaran teknis sebagai Operator pada pelaksanaan Asesmen Nasional Berbasis Komputer (ANBK).",
      icon: <Shield className="project-icon" size={32} />,
      image: "https://picsum.photos/seed/it-maintenance/1200/800"
    }
  ];

  return (
    <div className="app-wrapper">
      <header>
        <div className="container">
          <nav>
            <div className="logo">MBMA_ROOT</div>
            <div className="nav-links">
              <a href="#profil">Profil</a>
              <a href="#sertifikat">Sertifikat</a>
              <a href="#proyek">Proyek</a>
              <a href="#kontak">Kontak</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="profil" className="hero">
          <div className="container">
            <p className="hero-greeting">Halo, saya</p>
            <h1 className="hero-name">Muhammad Bagas Malik Albani</h1>
            <p className="hero-tagline">
              <TypingText text="Network Engineer | Server Administrator | IT Infrastructure" delay={50} />
            </p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Siswa kelas 12 jurusan Teknik Komputer dan Jaringan (TKJ) yang antusias dalam membangun topologi jaringan, mengonfigurasi perangkat, dan mengelola administrasi server.
            </motion.p>
            
            <motion.div 
              className="cta-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a href="#proyek" className="cta-button">[ ./lihat_proyek.sh ]</a>
              <a href="#kontak" className="cta-button">[ ./hubungi_saya.sh ]</a>
            </motion.div>
            
            <motion.div 
              className="skills-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="terminal-prompt">
                <span className="user-host">bagas@server:~$</span> cat ~/.skills<span className="blinking-cursor">_</span>
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="sertifikat">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Award size={28} /> Sertifikat & Pelatihan
            </motion.h2>
            <div className="cert-list">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-meta">{cert.meta}</div>
                  <div className="cert-desc">
                    {cert.desc}
                    {cert.tasks && (
                      <ul>
                        {cert.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyek">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Briefcase size={28} /> Proyek & Hasil Praktik
            </motion.h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  className="project-card" 
                  onClick={() => setSelectedProject(project)} 
                  style={{ cursor: 'pointer' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {project.icon}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-link">
                    Lihat detail <ChevronRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <MessageSquare size={28} /> Kontak Saya
            </motion.h2>
            
            <div className="contact-grid">
              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3>Mari Terhubung</h3>
                <p>
                  Saya terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berdiskusi tentang teknologi jaringan dan server. Silakan hubungi saya melalui formulir atau media sosial.
                </p>
                
                <div className="social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="mailto:muhammadbagasmalikalbani@gmail.com" className="social-icon" title="Email">
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.form 
                className="contact-form" 
                onSubmit={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="form-group">
                  <label htmlFor="name">$ whoami --name</label>
                  <input type="text" id="name" placeholder="Nama Lengkap" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">$ mail --to</label>
                  <input type="email" id="email" placeholder="Alamat Email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">$ cat --message</label>
                  <textarea id="message" rows={5} placeholder="Pesan Anda..." required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Send size={18} /> Kirim Pesan
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content" 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={20} /> Close [ESC]
              </button>
              <div className="modal-image-container">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  referrerPolicy="no-referrer"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
                />
              </div>
              <div className="modal-info">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Muhammad Bagas Malik Albani. Built with React & Terminal Aesthetics.</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Terminal size={18} />
            <Globe size={18} />
            <Code2 size={18} />
            <Cpu size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
}
