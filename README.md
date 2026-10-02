# Christian Wijaya

Situs katalog fashion statis untuk menampilkan koleksi tas, kemeja, dan koleksi musiman. Situs dibuat dengan HTML, CSS, dan JavaScript tanpa framework maupun proses build.

## Halaman utama

| Halaman | File |
| --- | --- |
| Beranda | `home.html` |
| Tas pria | `men bag.html` |
| Tas wanita | `women bag.html` |
| Kemeja pria | `men shirts.html` |
| Kemeja wanita | `women shirts.html` |
| Koleksi musiman | `summer.html`, `summer 2.html`, `summer 3.html` |
| Acara | `events.html` |
| Tentang | `about.html` |

Halaman detail produk tersedia dalam file HTML terpisah di direktori utama.

## Menjalankan secara lokal

Tidak ada dependency yang perlu dipasang. Buka `home.html` di browser atau jalankan server statis dari direktori proyek. Di VS Code, ekstensi Live Server dapat digunakan untuk melihat situs selama pengembangan.

## Deploy ke Vercel

1. Impor repository melalui [Vercel](https://vercel.com/new), atau jalankan Vercel CLI dari direktori proyek.
2. Pilih **Other** sebagai framework preset.
3. Biarkan **Install Command** dan **Build Command** kosong.
4. Gunakan `.` sebagai **Output Directory**. Pengaturan ini tersedia di `vercel.json`.
5. Deploy. Rute `/` akan membuka `home.html`.

Proyek ini tidak membutuhkan build atau instalasi dependency.

## Catatan

- Pertahankan nama file dan kapitalisasi path sesuai repository karena URL di Vercel peka huruf besar-kecil.
- Gambar berada di `assets/`, stylesheet yang digunakan halaman berada di `css/`, dan skrip JavaScript berada di `js/`.
- Formulir profil dan keranjang hanya simulasi di sisi browser; proyek ini belum terhubung ke backend atau sistem pembayaran.
