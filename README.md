# SIMOBILE

Prototype aplikasi kasir Toko Makmur Jaya untuk mata kuliah Hybrid Mobile Programming.

Kelompok: Jeremiah, Josh, William.

## Instalasi

Lingkungan pengerjaan menggunakan Node.js 24 dan Ionic CLI 7. Dependency aplikasi dikunci dalam package-lock.json.

```sh
git clone https://github.com/Jertig/simobile.git
cd simobile
npm install -g @ionic/cli
npm ci
```

Repository bersifat private, jadi akun GitHub perlu memiliki akses ke repository.

## Menjalankan

```sh
ionic serve
```

Buka http://localhost:8100.

```sh
ionic build
npm test -- --watch=false
```

## Fitur yang sudah dibuat

- Ionic Angular menggunakan NgModules, dengan standalone: false.
- Empat tab: Dashboard, Produk, Transaksi, Profil.
- Drawer Pengaturan, Tentang Aplikasi, dan Logout.
- Sepuluh produk dummy dengan kategori, harga beli, harga jual, dan stok yang berbeda.
- Pencarian nama langsung melalui ngModel. Pencarian membedakan huruf besar dan kecil.
- Detail produk berdasarkan ID pada route, dengan gambar default lokal.
- Tombol tambah ke keranjang disabled saat stok nol.
- Cart Service menggabungkan produk yang sama dan membatasi jumlah sesuai stok.
- Halaman keranjang menampilkan jumlah, subtotal, total, dan tombol hapus.
- Konfirmasi pertama menyimpan transaksi, mengurangi stok, dan mengosongkan keranjang.
- Detail transaksi berdasarkan ID, dapat dibuka melalui tombol setelah konfirmasi.
- Dashboard menghitung jumlah produk, transaksi dan penjualan hari ini, serta produk terlaris dari service.
- Palet hijau-kuning, informasi Profil dan Pengaturan.
- Dua animasi AnimationController: fade pada Tentang Aplikasi dan scale gambar saat produk ditambahkan.

Product Service mengelola produk dan stok, Cart Service mengelola keranjang, Transaction Service menyimpan transaksi dan menghitung ringkasan.

Data disimpan dalam array selama aplikasi berjalan. Reload browser atau menutup aplikasi mengembalikan data awal. Tidak memakai database, API, atau penyimpanan permanen. Logout merupakan halaman navigasi karena prototype belum memiliki akun pengguna.

## Bagian yang belum selesai

- Form tambah/edit belum dibuat. Requirement meminta Reactive Form, sedangkan Week 6 hanya mengajarkan form ngModel. ReactiveFormsModule, FormGroup, FormControl, dan Validators tidak ditemukan dalam Week 1-7. Teknik pengganti belum diizinkan.
- Toggle light/dark belum dibuat. Week 7 mengajarkan palet SCSS dan animasi, tetapi tidak mengajarkan toggle tema gelap. Import tema otomatis mengikuti sistem dari starter masih ada; ini tidak memenuhi requirement toggle manual.
- Daftar riwayat pada tab Transaksi belum dipublikasikan. Percobaan tampilannya tetap menunjukkan data lama jika tab sudah dibuka sebelum checkout, meskipun transaksi sudah tersimpan di service.
- Integrasi transaksi berulang belum lolos uji browser. Saat kembali ke keranjang setelah transaksi pertama, item baru dapat tampil tetapi tombol konfirmasi masih disabled. Pembaruan halaman yang tersimpan oleh Ionic perlu diselesaikan sebelum demo seluruh fitur.

Permintaan pengecualian terbatas untuk pembaruan tampilan masih menunggu keputusan. Belum menggunakan ChangeDetectorRef atau teknik tambahan di luar materi.

## Materi yang dipakai

- Week 1: variabel, array, object, loop, fungsi, class.
- Week 2: NgModules, generate page, routing, tab, drawer.
- Week 3: interpolation, property/event binding, Date.
- Week 4: ngModel, ngFor, ngIf, gambar default.
- Week 5: list dan route parameter.
- Week 6: service, constructor injection, array dan push.
- Week 7: CSS variables, SCSS, AnimationController, ionViewDidEnter.

Detail mapping dan hasil pemeriksaan ada di [Tahap William](docs/william-scope.md). Commit 1-10 milik Jeremiah dan Josh tetap dipertahankan.

Pemeriksaan terakhir: build berhasil dan 36 unit test lulus. Uji browser menemukan kendala pembaruan halaman di atas, sehingga seluruh requirement project belum selesai.
