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
- Tahap berikut dalam pekerjaan Jeremiah: halaman utama, routing, empat tab, drawer, Product Service, 10 produk dummy, daftar produk dari service.

Belum mengimplementasikan pencarian real-time, detail produk, form tambah/edit, keranjang, checkout, transaksi/riwayat, dashboard ringkasan, dark mode toggle, atau animasi custom.

## Acuan kuliah

- Week 1-2: Ionic starter, TypeScript dasar, NgModules, generate page, routing, tab, drawer.
- Week 3-5: interpolation, property/event binding, *ngFor, komponen list.
- Week 6: Angular Service, constructor injection, assignment array service di ngOnInit.

Data produk akan disimpan dalam array service di aplikasi. Tidak menggunakan API, database, atau penyimpanan permanen.

PPT Week 6 mengajarkan form ngModel. Reactive Form yang diminta requirement belum ditemukan pada materi Week 1-7. Dark mode toggle juga belum dijelaskan di PPT. Keduanya memerlukan pembahasan/materi tambahan sebelum tahap implementasinya.

Versi dependency mengikuti starter resmi yang terpasang dan dikunci dalam package-lock.json. Starter versi ini mengimpor IonicModule dari @ionic/angular/lazy untuk NgModules. Kode aplikasi tetap menggunakan pola NgModule dan binding yang diajarkan.
