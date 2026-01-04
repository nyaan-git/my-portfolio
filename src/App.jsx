import { useState, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import WorkDetail from './WorkDetail'

// プロフィール情報
const profile = {
  name: '宮川大地',
  nameEn: 'Daichi Miyakawa',
  title: 'システムエンジニア（実務経験5年）',
  subtitle: 'フルスタックエンジニアを目指して挑戦中',
  highlights: [
    '約3,000万人が利用する通販システムの運用経験',
    'SharePoint・Kintoneなど社内システムの開発実績',
    'インフラからアプリ開発まで幅広く対応',
  ],
  vision: '上流工程から開発まで一貫して携わり、最新技術で生産性とユーザー体験を向上させるサービスを作りたい。将来はスタートアップで挑戦したいと考えています。',
  strength: '運用保守で培った「安定稼働を意識した設計」の視点と、新しい環境への適応力が強みです。',
}

// スキル情報
const skills = [
  { category: '言語', items: ['C#', 'JavaScript', 'Python', 'Java'] },
  { category: 'フレームワーク', items: ['Django'] },
  { category: 'ライブラリ', items: ['React'] },
  { category: 'DB', items: ['MySQL', 'PostgreSQL', 'SQLServer', 'OracleDB', 'TeraData'] },
  { category: 'インフラ/運用', items: ['JP1', 'HULFT', 'DataMagic', 'SAS'] },
  { category: 'セキュリティ', items: ['DeepSecurity', 'ServerProtect'] },
  { category: 'ローコード/SaaS', items: ['SharePoint', 'PowerApps', 'PowerAutomate', 'Kintone'] },
]

// 連絡先情報
const contacts = [
  { name: 'GitHub', url: 'https://github.com/nyaan-git' },
  { name: 'Email', url: 'mailto:gnyaanpi@gmail.com' },
]

// アプリ一覧データ（後で追加していく）
const apps = [
  {
    id: 1,
    name: 'ポートフォリオサイト',
    description: '自己紹介と作品を掲載したWebサイト',
    workId: 'portfolio-site'
  },
  { id: 2, name: 'アプリ2', description: '準備中', workId: 'app2' },
  { id: 3, name: 'アプリ3', description: '準備中', workId: 'app3' },
]

function HomePage() {
  const [selectedAppIndex, setSelectedAppIndex] = useState(0)
  const [activePopup, setActivePopup] = useState(null) // 'works' or 'contact' or null
  const navigate = useNavigate()

  // セクションへの参照
  const profileRef = useRef(null)
  const skillsRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerHeight = 70 // ヘッダーの高さ分オフセット
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleMenuClick = (menu) => {
    if (menu === 'profile') {
      scrollToSection(profileRef)
    } else if (menu === 'skills') {
      scrollToSection(skillsRef)
    } else if (menu === 'works' || menu === 'contact') {
      setActivePopup(menu)
    }
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  const handleSelectWork = (workId) => {
    setActivePopup(null)
    navigate(`/works/${workId}`)
  }

  return (
    <div className="portfolio">
      {/* 固定ヘッダーメニュー */}
      <nav className="nav-header">
        <ul className="nav-menu">
          <li className="nav-item" onClick={() => handleMenuClick('profile')}>
            PROFILE
          </li>
          <li className="nav-item" onClick={() => handleMenuClick('skills')}>
            SKILLS
          </li>
          <li className="nav-item" onClick={() => handleMenuClick('works')}>
            WORKS
          </li>
          <li className="nav-item" onClick={() => handleMenuClick('contact')}>
            CONTACT
          </li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <div className="main-content">
        {/* PROFILE */}
        <section ref={profileRef} className="light-section profile-section">
          <h1 className="light-title">PROFILE</h1>
          <div className="profile-content">
            <p className="profile-name">{profile.name}</p>
            <p className="profile-name-en">{profile.nameEn}</p>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-subtitle">{profile.subtitle}</p>

            <div className="profile-highlights">
              {profile.highlights.map((item, index) => (
                <p key={index} className="highlight-item">✦ {item}</p>
              ))}
            </div>

            <div className="profile-detail">
              <p className="profile-strength">{profile.strength}</p>
              <p className="profile-vision">{profile.vision}</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section ref={skillsRef} className="light-section skills-section">
          <h2 className="light-title">SKILLS</h2>
          <div className="skills-content">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <span className="skill-label">{skill.category}</span>
                <span className="skill-items">{skill.items.join(' / ')}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ポップアップ */}
      {activePopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content menu-container" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✕</button>

            {activePopup === 'works' && (
              <>
                <h2 className="menu-title">WORKS</h2>
                <ul className="menu-list">
                  {apps.map((app, index) => (
                    <li
                      key={app.id}
                      className={`menu-item ${index === selectedAppIndex ? 'selected' : ''}`}
                      onMouseEnter={() => setSelectedAppIndex(index)}
                      onClick={() => handleSelectWork(app.workId)}
                    >
                      {app.name}
                    </li>
                  ))}
                </ul>
                <p className="menu-description">
                  {apps[selectedAppIndex]?.description}
                </p>
              </>
            )}

            {activePopup === 'contact' && (
              <>
                <h2 className="menu-title">CONTACT</h2>
                <ul className="menu-list">
                  {contacts.map((contact, index) => (
                    <li
                      key={index}
                      className="menu-item"
                      onClick={() => window.open(contact.url, '_blank')}
                    >
                      {contact.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/works/:workId" element={<WorkDetail />} />
    </Routes>
  )
}

export default App
