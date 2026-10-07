# SIMOBILE

SIMOBILE adalah aplikasi kasir sederhana berbasis Ionic Angular untuk membantu pengelolaan produk, keranjang belanja, stok, dan transaksi.

## Fitur Utama

- **Dashboard:** Menampilkan jumlah produk, ringkasan transaksi hari ini, dan produk terlaris hari ini.
- **Daftar produk:** Menampilkan produk beserta kategori, harga jual, dan stok yang tersedia.
- **Pencarian produk real-time:** Menampilkan hasil pencarian berdasarkan nama produk saat pengguna mengetik tanpa tombol submit.
- **Detail produk:** Menampilkan gambar, nama, kategori, stok, harga beli, dan harga jual produk.
- **Tambah dan edit produk:** Menyediakan form untuk menambahkan produk baru atau memperbarui data produk dengan validasi input.
- **Keranjang:** Menampilkan produk yang dipilih, jumlah, subtotal, dan total belanja serta menyediakan pilihan menghapus produk.
- **Checkout:** Mengonfirmasi transaksi, memeriksa stok, mengurangi stok produk, dan mengosongkan keranjang setelah transaksi berhasil.
- **Riwayat transaksi:** Menampilkan daftar transaksi yang dilakukan selama sesi aplikasi berjalan.
- **Detail transaksi:** Menampilkan tanggal transaksi, produk yang dibeli, jumlah, harga, dan total transaksi.
- **Tab navigation:** Memudahkan perpindahan antara halaman Dashboard, Produk, Transaksi, dan Profil melalui tab di bagian bawah.
- **Drawer navigation:** Menyediakan menu samping untuk membuka halaman Pengaturan, Tentang Aplikasi, dan Logout.
- **Custom theme:** Menggunakan warna dan gaya tampilan khusus pada komponen aplikasi.
- **Dark mode:** Menyediakan pilihan mode gelap dan terang melalui halaman Pengaturan.
- **Animasi:** Menampilkan efek pada halaman Tentang Aplikasi dan gambar produk saat produk berhasil ditambahkan ke keranjang.

## Teknologi

- Ionic
- Angular
- TypeScript
- HTML
- SCSS

## Persyaratan

- Node.js
- npm
- Ionic CLI

## Instalasi

```bash
git clone https://github.com/Jertig/simobile.git
cd simobile
npm install
```

## Menjalankan Aplikasi

```bash
ionic serve
```

Aplikasi biasanya dapat dibuka di `http://localhost:8100`.

## Build

```bash
ionic build
```

## Alur Penggunaan Singkat

1. Buka Dashboard.
2. Masuk ke Produk.
3. Cari atau pilih produk.
4. Buka detail produk.
5. Tambahkan produk ke keranjang.
6. Buka keranjang.
7. Konfirmasi transaksi.
8. Lihat riwayat transaksi.

## Struktur Project Singkat

```text
src/
├── app/       halaman, routing, dan services
├── assets/    gambar dan asset aplikasi
└── theme/     konfigurasi theme Ionic
```

## Catatan

SIMOBILE dibuat sebagai project mata kuliah Hybrid Mobile Programming menggunakan Ionic Angular.
