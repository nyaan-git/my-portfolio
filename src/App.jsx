import { useState } from 'react'
import './App.css'

// プロフィール情報
const profile = {
  name: '宮川大地',
  nameEn: 'Daichi Miyakawa',
  title: 'システムエンジニア（実務経験2年）',
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
  { category: 'フレームワーク', items: ['Django', 'React'] },
  { category: 'DB', items: ['MySQL', 'PostgreSQL', 'SQLServer', 'OracleDB', 'TeraData'] },
  { category: 'インフラ/運用', items: ['JP1', 'HULFT', 'DataMagic', 'SAS'] },
  { category: 'セキュリティ', items: ['DeepSecurity', 'ServerProtect'] },
  { category: 'Microsoft/ローコード', items: ['SharePoint', 'PowerApps', 'PowerAutomate', 'Kintone'] },
]

// 連絡先情報
const contacts = [
  { name: 'GitHub', url: 'https://github.com/nyaan-git' },
  { name: 'Email', url: 'mailto:gnyaanpi@gmail.com' },
]

// アプリ一覧データ（後で追加していく）
const apps = [
  { id: 1, name: 'アプリ1', description: 'アプリ1の説明文がここに入ります', url: '#' },
  { id: 2, name: 'アプリ2', description: 'アプリ2の説明文がここに入ります', url: '#' },
  { id: 3, name: 'アプリ3', description: 'アプリ3の説明文がここに入ります', url: '#' },
]

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleSelect = (url) => {
    if (url !== '#') {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="portfolio">
      {/* 自己紹介セクション */}
      <section className="menu-container profile-section">
        <h1 className="menu-title">PROFILE</h1>
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

      {/* 作品一覧セクション */}
      <section className="menu-container works-section">
        <h2 className="menu-title">WORKS</h2>
        <ul className="menu-list">
          {apps.map((app, index) => (
            <li
              key={app.id}
              className={`menu-item ${index === selectedIndex ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => handleSelect(app.url)}
            >
              {app.name}
            </li>
          ))}
        </ul>
        <p className="menu-description">
          {apps[selectedIndex]?.description}
        </p>
      </section>

      {/* スキルセクション */}
      <section className="menu-container skills-section">
        <h2 className="menu-title">SKILLS</h2>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <span className="skill-label">{skill.category}</span>
              <span className="skill-items">{skill.items.join(' / ')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 連絡先セクション */}
      <section className="menu-container contact-section">
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
      </section>
    </div>
  )
}

export default App
