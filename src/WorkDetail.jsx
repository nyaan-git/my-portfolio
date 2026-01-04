import { useParams, Link } from 'react-router-dom'

// アプリ詳細データ
const workDetails = {
  'portfolio-site': {
    name: 'ポートフォリオサイト',
    description: 'React + Viteで作成。GitHub Actionsで自動デプロイ。',
    url: 'https://nyaan-git.github.io/my-portfolio/',
    tech: ['JavaScript', 'CSS', 'React', 'Vite', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'レスポンシブデザイン',
      'スムーズスクロール',
      'React Routerによるページ遷移',
    ],
    detail: 'このポートフォリオサイト自体です。React + Viteで構築し、GitHub Actionsで自動ビルド・デプロイを実現しています。',
  },
  'app2': {
    name: 'アプリ2',
    description: 'アプリ2の説明文がここに入ります',
    url: '#',
    tech: ['準備中'],
    features: ['準備中'],
    detail: '開発予定のアプリです。',
  },
  'app3': {
    name: 'アプリ3',
    description: 'アプリ3の説明文がここに入ります',
    url: '#',
    tech: ['準備中'],
    features: ['準備中'],
    detail: '開発予定のアプリです。',
  },
}

function WorkDetail() {
  const { workId } = useParams()
  const work = workDetails[workId]

  if (!work) {
    return (
      <div className="work-detail-page">
        <div className="work-detail-container">
          <h1>作品が見つかりません</h1>
          <Link to="/" className="back-link">← トップに戻る</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="work-detail-page">
      <div className="work-detail-container">
        <Link to="/" className="back-link">← トップに戻る</Link>

        <h1 className="work-detail-title">{work.name}</h1>
        <p className="work-detail-description">{work.detail}</p>

        <div className="work-detail-section">
          <h2>使用技術</h2>
          <div className="tech-tags">
            {work.tech.map((t, index) => (
              <span key={index} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="work-detail-section">
          <h2>機能</h2>
          <ul className="feature-list">
            {work.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>

        {work.url !== '#' && (
          <a href={work.url} target="_blank" rel="noopener noreferrer" className="app-link-button">
            アプリを開く →
          </a>
        )}
      </div>
    </div>
  )
}

export default WorkDetail
