# Tryout OSN Matematika SD

Aplikasi web tryout **Olimpiade Sains Nasional (OSN)** bidang **Matematika** tingkat **SD** untuk persiapan seleksi tingkat Kabupaten/Kota tahun 2026.

## Fitur

- **200 soal** pilihan ganda mencakup 7 topik OSN Matematika SD
- **30 soal per sesi** dipilih secara acak (8 mudah + 14 sedang + 8 sulit)
- **Soal berbeda setiap percobaan** berkat randomisasi dari bank soal
- **3 mode latihan**: Tryout Lengkap, Latihan per Topik, Soal Ditandai
- **Timer fleksibel**: 60 / 90 / 120 menit, atau tanpa batas waktu
- **Navigasi soal** — bisa lompat ke soal mana saja
- **Tandai soal** — bookmark soal untuk diulang nanti
- **Ilustrasi SVG** pada soal-soal geometri
- **Sistem skor OSN-K**: Mudah ×1,00 · Sedang ×1,25 · Sulit ×1,50
- **Rincian skor per topik** setelah selesai
- **Pembahasan lengkap** bertahap (scaffolded) untuk setiap soal
- **Riwayat & grafik perkembangan** tersimpan di browser
- **Bagikan hasil** via WhatsApp, salin, atau cetak/PDF
- **Mode gelap** (dark mode)
- **Dwibahasa** Indonesia / English
- **PWA** — bisa di-install di HP dan digunakan offline
- **Single file HTML** — tidak perlu server atau instalasi

## Topik Soal

| Topik | Kode |
|---|---|
| Bilangan & Operasi | `bil` |
| Aljabar | `alj` |
| Geometri & Pengukuran | `geo` |
| Statistika & Data | `stat` |
| Kombinatorika & Peluang | `komb` |
| Pola & Barisan | `pola` |
| Logika & Penalaran | `log` |

## Cara Pakai

1. Buka `index.html` di browser (Chrome/Firefox/Edge)
2. Pilih mode latihan dan durasi timer
3. Masukkan nama peserta
4. Klik **Mulai Tryout**
5. Jawab soal, tandai yang ingin diulang
6. Lihat hasil, skor per topik, dan pembahasan
7. Cek riwayat perkembangan di halaman utama

Atau akses langsung via Netlify.

## Aturan Skor

| Tingkat Kesulitan | Bobot | Benar | Salah/Kosong |
|---|---|---|---|
| Mudah | ×1,00 | +1,00 poin | 0 |
| Sedang | ×1,25 | +1,25 poin | 0 |
| Sulit | ×1,50 | +1,50 poin | 0 |

**Skor maksimal:** 37,5 poin (8×1 + 14×1,25 + 8×1,5)

## Referensi Soal

Soal-soal disusun berdasarkan:
- Bank Soal OSN SD Matematika Tingkat Kabupaten/Kota 2023 & 2024
- Panduan OSN SD Sederajat Tahun 2026
- Silabus resmi OSN Matematika SD

## Teknologi

Single file HTML dengan CSS dan JavaScript inline. PWA-ready dengan service worker untuk penggunaan offline. Tidak memerlukan framework, build tool, atau dependensi eksternal.

## Lisensi

Dibuat untuk keperluan edukasi dan latihan persiapan OSN Matematika SD.
