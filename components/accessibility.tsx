import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "1 menit dari SMK Budi Utomo",
        "3 menit dari SMA N 3 Brebes",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "5 menit dari Yogya Mall Brebes",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "6 menit dari RSUD Brebes",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "3 menit dari GOR Sasana Adhi Karsa Brebes",
        "5 menit dari Stasiun Brebes",
        "9 menit dari Pusat Pemerintahan Kabupaten Brebes",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
