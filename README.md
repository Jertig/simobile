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

## Menjalankan dan memeriksa

```sh
ionic serve
```

Buka http://localhost:8100.

```sh
ionic build
npm test -- --watch=false
```

Build produksi tersedia dalam folder www. Pengujian terakhir: build berhasil dan 54 test dari 16 file lulus.

## Fitur

- Ionic Angular dengan NgModules dan standalone: false.
- Empat tab: Dashboard, Produk, Transaksi, Profil.
- Drawer: Pengaturan, Tentang Aplikasi, Logout.
- Dashboard: jumlah produk, jumlah dan total transaksi hari ini, serta produk terlaris dari service.
- Sepuluh produk dummy dengan variasi kategori, harga, dan stok.
- Pencarian nama langsung memakai ngModel tanpa tombol submit. Pencarian membedakan huruf besar dan kecil.
- Detail produk melalui ID route, menampilkan nama, stok, harga beli dan harga jual.
- Gambar default lokal jika URL gambar kosong; tombol tambah ke keranjang disabled saat stok nol.
- Form tambah/edit dengan Reactive Forms dan pesan error per field: nama wajib, harga berupa angka lebih dari nol, stok berupa angka tidak negatif. Input lain tetap ada saat validasi gagal.
- Cart menghitung jumlah, subtotal, total, membatasi jumlah sesuai stok, serta menyediakan tombol hapus.
- Konfirmasi transaksi menyimpan salinan item ke riwayat, mengurangi stok, dan mengosongkan cart.
- Riwayat menampilkan transaksi yang dapat diklik untuk membuka detail ID, tanggal, item, subtotal, dan total.
- Pembaruan cart, riwayat, detail, dan dashboard saat kembali ke halaman; checkout berulang tanpa reload browser.
- Custom theme hijau-kuning dan toggle mode gelap/terang di Pengaturan. Pilihan berlaku selama aplikasi berjalan dan tetap aktif saat navigasi.
- Dua animasi AnimationController: fade pada Tentang Aplikasi dan scale gambar saat produk ditambahkan ke keranjang.

Product Service mengelola produk dan stok, Cart Service mengelola keranjang, Transaction Service menyimpan transaksi dan menghitung ringkasan. Logika data berada di tiga service tersebut.

Data disimpan dalam array selama aplikasi berjalan. Reload browser atau menutup aplikasi mengembalikan data awal. Tidak memakai database, API, atau penyimpanan permanen. Gambar default tersedia lokal. URL gambar opsional memerlukan koneksi jika menggunakan gambar dari luar aplikasi. Logout merupakan halaman navigasi karena prototype belum memiliki akun pengguna.

## Materi dan final integration

- Week 1: variabel, array, object, loop, fungsi, class.
- Week 2: NgModules, generate page, routing, tab, drawer.
- Week 3: interpolation, property/event binding, Date.
- Week 4: ngModel, ngFor, ngIf, gambar default.
- Week 5: list dan route parameter.
- Week 6: service, constructor injection, array dan push.
- Week 7: CSS variables, SCSS, AnimationController, ionViewDidEnter.

Final integration menggunakan izin terbatas pengguna untuk ReactiveFormsModule, FormBuilder, FormGroup, Validators; toggle kelas palet Ionic; ionViewWillEnter dan ChangeDetectorRef.detectChanges pada cart, riwayat, dan dashboard setelah lifecycle saja terbukti belum cukup. Tidak menambah library atau arsitektur state baru.

Hasil audit requirement dan skenario pengujian ada di [Audit final](docs/final-audit.md). Catatan [Jeremiah](docs/jeremiah-scope.md), [Josh](docs/josh-scope.md), dan [William](docs/william-scope.md) mencatat hasil pada akhir tahap masing-masing, sebelum final integration.

Commit 1-17 tetap utuh. Final integration dilanjutkan oleh Jeremiah dengan commit 18-21 pada branch main.
