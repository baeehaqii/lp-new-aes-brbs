"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762963299/Aes-brbs-studio-1_of6kfq.avif"
                alt="Sapphire Aesthetic Brebes"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Aesthetic Brebes</h2>
              <p className="about-description">
                Berada di lokasi paling strategis di Kota Brebes, Sapphire Aesthetic Brebes menghadirkan perumahan Brebes yang modern, estetik, dan fungsional. Terletak di Jl. Taman Siswa, Klp. Sawit, Padasugih, Kec. Brebes, hunian ini memudahkan akses ke pusat pendidikan, transportasi, dan area perbelanjaan, tanpa mengorbankan ketenangan lingkungan.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Lokasi Terbaik */}
            <div className="about-stat-card">
              <div className="about-stat-value">5</div>
              <div className="about-stat-label">Lokasi Terbaik di Jawa Bagian Utara</div>
            </div>

            {/* Statistik - Keluarga Sapphire */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Proyek Unggulan */}
            <div className="about-stat-card">
              <div className="about-stat-value">8</div>
              <div className="about-stat-label">Proyek Unggulan</div>
            </div>

            {/* Statistik - Tahun Pengalaman */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Aesthetic Brebes</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761375414/A_01_3_-_Photo_luyaoc.avif"
                  alt="Sapphire Aesthetic Brebes"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di lokasi paling strategis di Kota Brebes, Sapphire Aesthetic Brebes menghadirkan perumahan Brebes yang modern, estetik, dan fungsional. Terletak di Jl. Taman Siswa, Klp. Sawit, Padasugih, Kec. Brebes, hunian ini memudahkan akses ke pusat pendidikan, transportasi, dan area perbelanjaan, tanpa mengorbankan ketenangan lingkungan. Dengan desain minimalis dan tata ruang optimal, Sapphire Aesthetic Brebes menjadi pilihan ideal bagi keluarga maupun profesional muda yang mencari hunian prestisius dengan kualitas hidup tinggi.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>6 menit ke fasilitas kesehatan</li>
                  <li>1 menit ke fasilitas pendidikan</li>
                  <li>5 menit ke fasilitas perbelanjaan</li>
                  <li>9 menit ke pusat pemerintahan Kabupaten Brebes</li>
                  <li>Berada di jalur utama Slawi – Tegal</li>
                  <li>Lingkungan berkembang, cocok untuk hunian jangka panjang</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan one gate system</li>
                  <li>Taman bermain dan area rekreasi keluarga</li>
                  <li>Ruang terbuka hijau yang luas</li>
                  <li>Fasilitas pendukung yang lengkap di dalam area perumahan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
