
import { useState } from 'react'
import {
  LayoutDashboard, Gamepad2, BookOpen, Users,
  Trophy, UserRound, Bell, Search, Zap,
  Grid2X2, Plus, ChevronRight, CheckCircle,
  Settings, Mail, School, LogOut, Menu
} from 'lucide-react'
import './App.css'

function App() {
  const [page, setPage] = useState('Beranda')
  const [sidebar, setSidebar] = useState(false)

  const menus = [
    { name: 'Beranda', icon: LayoutDashboard },
    { name: 'Bank Soal', icon: BookOpen },
    { name: 'Sesi Game', icon: Gamepad2 },
    { name: 'Kelas', icon: Users },
    { name: 'Hasil Kuis', icon: Trophy },
    { name: 'Akun', icon: UserRound }
  ]

  const navigate = (name) => {
    setPage(name)
    setSidebar(false)
  }

  return (
    <div className="app">

      <aside className={`sidebar ${sidebar ? 'open' : ''}`}>
        <div className="logo">
          <div className="logo-icon"><Gamepad2 /></div>
          <div>
            <h2>Quizora<span>.</span></h2>
            <small>Learn, Play & Grow</small>
          </div>
        </div>

        <p className="menu-label">MENU UTAMA</p>

        <nav>
          {menus.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`nav-item ${page === name ? 'active' : ''}`}
              onClick={() => navigate(name)}
            >
              <Icon size={20} />
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-profile"
          onClick={() => navigate('Akun')}>
          <div className="avatar">G</div>
          <div>
            <strong>Guru Quizora</strong>
            <small>Teacher Account</small>
          </div>
          <ChevronRight size={16} />
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu"
            onClick={() => setSidebar(!sidebar)}>
            <Menu />
          </button>

          <div>
            <h2>{page}</h2>
            <p>Teacher Dashboard / {page}</p>
          </div>

          <div className="header-right">
            <div className="search">
              <Search size={18} />
              <input placeholder="Cari sesuatu..." />
            </div>
            <button className="icon-button"><Bell /></button>
            <button className="avatar"
              onClick={() => navigate('Akun')}>G</button>
          </div>
        </header>

        {page === 'Beranda' ? (
          <>
            <section className="hero">
              <div>
                <span className="hero-label">
                  ✦ LEARN, PLAY & GROW
                </span>
                <h1>Make learning<br />more fun!</h1>
                <p>Selamat datang, Guru! Ciptakan pengalaman
                  belajar yang seru dan interaktif.</p>
                <button className="orange-button"
                  onClick={() => navigate('Bank Soal')}>
                  <Plus size={18} /> Buat kuis baru
                </button>
              </div>
              <div className="hero-art">
                <span className="star one">✦</span>
                <span className="star two">✧</span>
                <Gamepad2 size={160} strokeWidth={1.5} />
                <span className="xp">+100 XP</span>
              </div>
            </section>

            <div className="section-heading">
              <h2>Ringkasan aktivitas</h2>
              <span>Overview</span>
            </div>

            <section className="stats">
              <div className="stat-card">
                <div className="stat-icon purple">
                  <BookOpen />
                </div>
                <div>
                  <p>Total soal</p>
                  <h2>24</h2>
                  <small>Bank soal tersedia</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">
                  <CheckCircle />
                </div>
                <div>
                  <p>Sudah direview</p>
                  <h2>18</h2>
                  <small>Siap digunakan</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">
                  <Trophy />
                </div>
                <div>
                  <p>Sesi permainan</p>
                  <h2>5</h2>
                  <small>Total sesi game</small>
                </div>
              </div>
            </section>

            <div className="section-heading">
              <h2>Mode permainan</h2>
              <span>Pilih game favoritmu</span>
            </div>

            <section className="games">
              <article className="game-card">
                <div className="game-art speed">
                  <Zap size={76} fill="currentColor" />
                  <span>01 / SPEED</span>
                </div>
                <div className="game-content">
                  <small>INDIVIDUAL GAME</small>
                  <h2>Speed Clash</h2>
                  <p>Adu kecepatan menjawab soal dengan
                    benar dan kumpulkan poin tertinggi.</p>
                  <button onClick={() => navigate('Sesi Game')}>
                    Pilih game <ChevronRight size={17} />
                  </button>
                </div>
              </article>

              <article className="game-card">
                <div className="game-art territory">
                  <Grid2X2 size={76} />
                  <span>02 / STRATEGY</span>
                </div>
                <div className="game-content">
                  <small>TEAM GAME</small>
                  <h2>Territory Grid</h2>
                  <p>Susun strategi bersama tim dan
                    rebut petak untuk memenangkan permainan.</p>
                  <button onClick={() => navigate('Sesi Game')}>
                    Pilih game <ChevronRight size={17} />
                  </button>
                </div>
              </article>
            </section>

            <section className="questions">
              <div className="section-heading">
                <h2>Soal terbaru</h2>
                <button className="text-button"
                  onClick={() => navigate('Bank Soal')}>
                  + Tambah soal
                </button>
              </div>

              {[
                ['C2', 'Suku ke-5 barisan aritmetika 3, 7, 11, ...?', '20 detik'],
                ['C3', 'Jumlah 10 suku pertama deret 2 + 4 + 6 + ...?', '30 detik'],
                ['C4', 'Analisis pertumbuhan tabungan setiap minggu.', '45 detik']
              ].map(([level, question, time]) => (
                <div className="question-row" key={level}>
                  <span className="level">{level}</span>
                  <div>
                    <strong>{question}</strong>
                    <small>Matematika · Pilihan ganda</small>
                  </div>
                  <span className="time">{time}</span>
                </div>
              ))}
            </section>
          </>
        ) : page === 'Akun' ? (
          <>
            <section className="profile-banner">
              <h1>My Profile</h1>
              <p>Kelola informasi dan profil akunmu.</p>
            </section>

            <section className="profile-card">
              <div className="profile-top">
                <div className="big-avatar">G</div>
                <div>
                  <h2>Guru Quizora</h2>
                  <p>Guru Matematika</p>
                  <span className="status">● Akun aktif</span>
                </div>
              </div>

              <h3>Informasi pribadi</h3>

              <div className="profile-fields">
                <label><UserRound size={18} /> Nama lengkap
                  <input defaultValue="Guru Quizora" />
                </label>
                <label><Mail size={18} /> Email
                  <input type="email" defaultValue="guru@quizora.id" />
                </label>
                <label><School size={18} /> Asal sekolah
                  <input defaultValue="SMA Negeri 1" />
                </label>
                <label><BookOpen size={18} /> Mata pelajaran
                  <input defaultValue="Matematika" />
                </label>
              </div>

              <button className="primary-button"
                onClick={() => alert('Perubahan masih berupa simulasi frontend.')}>
                Simpan perubahan
              </button>
            </section>

            <section className="account-settings">
              <h3>Pengaturan akun</h3>
              <button onClick={() => alert('Fitur dalam pengembangan')}>
                <Settings size={20} /> Pengaturan
                <ChevronRight size={18} />
              </button>
              <button className="logout"
                onClick={() => alert('Login belum diimplementasikan.')}>
                <LogOut size={20} /> Keluar dari akun
              </button>
            </section>
          </>
        ) : (
          <section className="placeholder">
            <Gamepad2 size={65} />
            <h1>{page}</h1>
            <p>Fitur ini akan dikembangkan pada milestone berikutnya.</p>
            <button className="primary-button"
              onClick={() => navigate('Beranda')}>
              Kembali ke beranda
            </button>
          </section>
        )}

        <footer>© 2026 Quizora — Learn, Play & Grow.</footer>
      </main>
    </div>
  )
}

export default App
