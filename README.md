# SIMOBILE

Prototype aplikasi kasir mobile Toko Makmur Jaya untuk mata kuliah Hybrid Mobile Programming.

Kelompok: Jeremiah, Josh, William. Pengerjaan saat ini hanya tahap Jeremiah.

## Instalasi dan menjalankan

Gunakan Node.js yang mendukung versi Angular pada package.json dan Ionic CLI.

```sh
npm install -g @ionic/cli
npm ci
ionic serve
```

Buka http://localhost:8100. Untuk memeriksa kompilasi:

```sh
ionic build
```

Untuk menjalankan unit test bawaan generator:

```sh
npm test -- --watch=false
```

## Status fitur

- Foundation Ionic Angular dengan NgModules dan standalone: false.
- Halaman Dashboard, Produk, Transaksi, Profil, Pengaturan, Tentang Aplikasi, Logout beserta routing utama.
- Empat tab utama: Dashboard, Produk, Transaksi, Profil melalui halaman tabs dan child routes.
- Drawer berisi Pengaturan, Tentang Aplikasi, Logout; menu otomatis menutup setelah dipilih.
- Tombol kembali dari halaman drawer ke tab sebelumnya, atau Dashboard saat halaman dibuka langsung.
- Product Service dengan 10 produk dummy, variasi kategori, harga beli/jual, dan stok termasuk stok kosong.
- Daftar produk mengambil array dari Product Service melalui constructor dan ngOnInit.
- List menampilkan nama, kategori, harga jual, stok, jumlah produk, dan penanda stok habis dengan *ngFor, *ngIf, interpolation.

Tahap Jeremiah selesai. Dashboard, Transaksi, Profil, Pengaturan, dan Logout masih berupa kerangka halaman untuk tahap anggota berikutnya.

Belum mengimplementasikan pencarian real-time, detail produk, form tambah/edit, keranjang, checkout, transaksi/riwayat, dashboard ringkasan, dark mode toggle, atau animasi custom.

## Acuan kuliah

- Week 1-2: Ionic starter, TypeScript dasar, NgModules, generate page, routing, tab, drawer.
- Week 3-5: interpolation, property/event binding, *ngFor, komponen list.
- Week 6: Angular Service, constructor injection, assignment array service di ngOnInit.

Data produk disimpan dalam array Product Service di aplikasi. Tidak menggunakan API, database, atau penyimpanan permanen. imageUrl masih kosong untuk produk yang belum memiliki foto; tampilan gambar dan fallback menjadi bagian tahap detail produk berikutnya.

PPT Week 6 mengajarkan form ngModel. Reactive Form yang diminta requirement belum ditemukan pada materi Week 1-7. Dark mode toggle juga belum dijelaskan di PPT. Keduanya memerlukan pembahasan/materi tambahan sebelum tahap implementasinya.

Versi dependency mengikuti starter resmi yang terpasang dan dikunci dalam package-lock.json. Starter versi ini mengimpor IonicModule dari @ionic/angular/lazy untuk NgModules. Kode aplikasi tetap menggunakan pola NgModule dan binding yang diajarkan.

Product Service dibuat dengan ionic generate service product --type=service --injectable agar nama file dan pola service tetap mengikuti contoh kuliah.
