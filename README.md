# Pintu Kos

Formulir login interaktif bertema kehidupan sehari-hari anak kos, dibuat dengan React untuk Tugas Project 1 mata kuliah Pengembangan Web Modern.

**Demo online:** https://yaspresso.github.io/pintu-kos/

## Konsep

Form login berada di papan nama pada pintu kamar kos. Login hanya bisa dipakai setelah lampu teras dinyalakan, seperti suasana pulang ke kos malam hari: gelap dulu, nyalakan lampu, baru bisa buka pintu.

## Fitur

- Lampu teras bisa dinyalakan atau dimatikan. Saat lampu mati, form terkunci dan papan meredup.
- Gembok dan pintu beranimasi: gembok terbuka, lalu pintu terayun terbuka.
- Pesan error ala ibu kos, dipilih acak, plus pesan khusus untuk form kosong dan lampu mati.
- Sapaan menyesuaikan jam perangkat (pagi, siang, sore, malam).
- Nama penghuni otomatis dikapitalkan.
- Setelah pukul 22.00 sampai subuh, muncul pesan "Sudah larut, jangan begadang ya."
- Mendukung `prefers-reduced-motion` dan label aksesibilitas pada tombol dan pesan.

## Cara mencoba

- Nyalakan lampu dengan mengklik bohlam di atas pintu.
- Isi nama penghuni bebas.
- Kata sandi demo: `kos123`.

> Kata sandi ditulis di kode hanya untuk keperluan demo tugas dan bukan contoh keamanan yang sebenarnya.

## Teknologi

- React 19
- Vite
- CSS biasa (tanpa library tambahan)
- Deploy: GitHub Pages (`gh-pages`)

## Struktur komponen

| Komponen | Fungsi |
|---|---|
| `App` | Menyimpan seluruh state dan logika, merakit komponen lain |
| `Lampu` | Tombol lampu teras |
| `Pintu` | Rangka pintu, plakat nomor kamar, dan gagang |
| `PapanLogin` | Form login pada papan nama |
| `Ruangan` | Tampilan di balik pintu setelah login berhasil |
| `Padlock` | Ikon gembok beranimasi |

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173/pintu-kos/`.

## Deploy

```bash
npm run deploy
```

## Pembuat

Tia Risky Yasmin Saketang
4243550014
PSIK 24-A