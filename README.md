# Christian Wijaya

Situs katalog fashion statis untuk menampilkan koleksi tas, kemeja, dan koleksi musiman. Proyek ini dibuat menggunakan HTML dan CSS, tanpa framework maupun proses build.

## Halaman

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

Halaman detail produk tersedia sebagai file HTML terpisah di direktori utama.

## Menjalankan secara lokal

Tidak ada dependency yang perlu dipasang. Buka `home.html` di browser, atau jalankan server statis lokal dari direktori proyek. Jika menggunakan VS Code, ekstensi Live Server dapat digunakan untuk melihat perubahan selama pengembangan.

## Deploy ke Vercel

1. Impor repository ini melalui [Vercel](https://vercel.com/new), atau jalankan Vercel CLI dari direktori proyek.
2. Pilih **Other** sebagai framework preset.
3. Biarkan **Build Command** dan **Install Command** kosong.
4. Atur **Output Directory** ke `.`. Nilai ini juga telah ditetapkan di `vercel.json`.
5. Deploy. Rute `/` akan diarahkan ke `home.html`.

Konfigurasi di `vercel.json` juga meneruskan permintaan dari `/css/` ke file CSS yang saat ini berada di direktori utama proyek.

## Catatan

Nama file HTML mengandung spasi dan beberapa tautan menggunakan kapitalisasi tertentu. Pertahankan nama file dan kapitalisasinya agar tautan antarhalaman tetap sesuai. Pastikan direktori aset gambar dan JavaScript yang dirujuk oleh halaman disertakan di repository sebelum deploy; file-file tersebut tidak tersedia di salinan proyek saat ini.
