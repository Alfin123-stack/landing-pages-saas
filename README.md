# 🏘️ KampungInfo — Platform Informasi Lingkungan Digital

> Landing page untuk platform SaaS fiktif yang membantu warga dan pengurus RT/RW dalam mengelola informasi lingkungan secara digital — menggantikan broadcast WhatsApp yang mudah tenggelam.

---

## 📌 Deskripsi Proyek

**KampungInfo** adalah solusi digital untuk masalah komunikasi di lingkungan perumahan. Platform ini menjawab tiga pertanyaan utama:

- **Produk apa?** → Platform informasi lingkungan berbasis web
- **Untuk siapa?** → Warga, Ketua RT, Ketua RW, dan pengurus lingkungan
- **Manfaatnya apa?** → Tidak ada pengumuman penting yang terlewat lagi

Proyek ini dibuat sebagai **Final Project** mata kuliah Web Development, dengan tema masalah nyata di lingkungan sekitar.

---

## 🗂️ Struktur File

```
kampunginfo/
├── index.html      # Struktur HTML utama (semantic, valid W3C)
├── style.css       # Custom CSS tambahan (blob, btn-cta, dll)
├── main.js         # JavaScript (menu mobile, form submission)
└── README.md       # Dokumentasi proyek ini
```

---

## 🔹 Sections Landing Page

| No | Section | Isi |
|----|---------|-----|
| 1 | **Hero** | Headline, subheadline, CTA utama, mock app card |
| 2 | **Stats Bar** | Angka statistik pengguna (social proof) |
| 3 | **Features** | 6 fitur unggulan dengan ikon Lucide |
| 4 | **Testimonial** | 3 kutipan warga dari berbagai kota |
| 5 | **Form/CTA** | Form pendaftaran + success state |
| 6 | **Footer** | Link navigasi, copyright |

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| HTML5 Semantic | Struktur halaman (`header`, `nav`, `main`, `section`, `footer`, `article`, `blockquote`) |
| Tailwind CSS (CDN) | Utility-first styling, layout flexbox & grid, responsif |
| CSS External (`style.css`) | Custom style: `.btn-cta`, `.blob-bg`, animasi card |
| Lucide Icons | Icon SVG ringan via CDN (`lucide.createIcons()`) |
| JavaScript (`main.js`) | Toggle mobile menu, validasi & submit form |
| Google Fonts | Playfair Display (display) + Plus Jakarta Sans (body) |

---

## 📱 Responsivitas

Layout menggunakan pendekatan **mobile-first**:

- **Mobile (< 768px)** — layout satu kolom, hero stack vertikal
- **Tablet (≥ 768px)** — hero dua kolom, grid 2 kolom untuk fitur
- **Desktop (≥ 1024px)** — grid 3 kolom untuk fitur, spacing lebih lega

---

## ✅ Checklist Teknis

- [x] HTML5 valid & semantic (tanpa `<div>` semua)
- [x] Hierarki heading benar (`h1` → `h2` → `h3`)
- [x] CSS di file external `style.css`
- [x] JavaScript di file external `main.js`
- [x] Minimal 4 section wajib terpenuhi
- [x] Responsif di mobile & desktop
- [x] CTA button dengan teks spesifik ("Mulai Gratis Sekarang")
- [x] Form dengan field: nama, email, peran, wilayah
- [x] Alt text & accessibility (`aria-label`, `<label for>`, `<cite>`)
- [x] Lucide Icons (menggantikan emoji sebagai icon)

---

## ⚙️ Cara Menjalankan

Tidak perlu instalasi apapun. Cukup:

1. Clone atau download repository ini
2. Buka file `index.html` langsung di browser

```bash
git clone https://github.com/Alfin123-stack/landing-pages-saas.git
cd landing-pages-saas
# Buka index.html di browser
```

Atau akses live demo via **GitHub Pages**:
🔗 `https://Alfin123-stack.github.io/landing-pages-saas`

---

## 📝 Catatan Pengembangan

**Kenapa `tailwind.config` tidak dipisah ke `main.js`?**

Konfigurasi Tailwind (warna & font custom) **harus dijalankan sebelum** Tailwind CDN memproses halaman. Jika dipindah ke file JS eksternal, class seperti `bg-primary` dan `font-display` tidak akan dikenali. Ini adalah batasan teknis Tailwind via CDN, bukan kesalahan struktur.

---

## 👤 Author

Dibuat oleh **Muhammad Alfin Alfarizi**
Tugas Final Project — Web Development
© 2025 KampungInfo. Dibuat dengan ❤️ untuk warga Indonesia.
