# SIMOBILE: mapping tahap Jeremiah

Sumber: requirement `project hmp.pdf` (3 halaman) dan PPT Week 1-7 (221 slide). Seluruh teks dan gambar contoh telah diperiksa sebelum kode aplikasi dibuat.

## Batas pekerjaan

Tahap ini hanya foundation, generate halaman utama, routing, empat tab, drawer, Product Service, minimal 10 produk dummy, dan daftar produk dari service. Dashboard, transaksi, profil, pengaturan, tentang, dan logout disiapkan sebagai halaman kerangka. Tidak ada pencarian, detail produk, cart, transaksi, form, dark mode, atau animasi custom yang diimplementasikan pada tahap ini.

## Teknik yang digunakan

| Requirement tahap Jeremiah | Rujukan materi | Implementasi |
| --- | --- | --- |
| Ionic Angular dan NgModules | Week 1 slide 17-19; Week 2 slide 5, 10, 22 | Starter Ionic Angular blank; AppModule; page modules; standalone: false |
| Generate halaman utama | Week 2 slide 21-23, 35 | ionic generate page; file .page.ts/.html/.scss/.spec.ts, .module.ts dan -routing.module.ts |
| Routing utama | Week 2 slide 13, 25-30, 37 | RouterModule.forRoot/forChild, loadChildren, children, redirectTo, pathMatch |
| Empat tab | Week 2 slide 36-38 | ion-tabs, ion-tab-bar slot bottom, ion-tab-button, ion-icon, ion-label |
| Drawer tambahan | Week 2 slide 41-43 | ion-menu dengan contentId, ion-router-outlet, ion-menu-button, ion-menu-toggle dan routerLink |
| Product Service | Week 6 slide 4-7 | Service hasil generator, array produk disimpan di service, injection lewat constructor, products:any[]=[] di halaman, assignment di ngOnInit |
| Minimal 10 produk dummy | Week 1 slide 30, 38, 42; Week 4 slide 18 | Array object literal dengan id, nama, kategori, harga beli, harga jual, stok, dan url gambar |
| Daftar produk | Week 3 slide 5, 17-18; Week 4 slide 17-19; Week 5 slide 9-10 | ion-list/ion-item/ion-label dengan *ngFor dan interpolation |
| Styling sederhana jika diperlukan | Week 7 slide 12 | CSS dasar di SCSS halaman |

Tidak menggunakan standalone components, signals, inject(), control flow @for/@if, state management, database, API, storage, atau library UI tambahan.

## Mapping seluruh requirement

| Nomor | Requirement | Dukungan materi dan status tahap ini |
| --- | --- | --- |
| 1 | Tab dibungkus drawer | Week 2 slide 36-43; dikerjakan Jeremiah |
| 2 | Dashboard ringkasan dari service | Week 3 interpolation dan Week 6 service; kerangka halaman saja pada tahap Jeremiah |
| 3 | Pencarian real-time ngModel | Week 4 slide 3-8; ditunda sesuai instruksi pengguna |
| 4 | Detail via parameter | Week 2 slide 32; Week 5 slide 23-28; ditunda |
| 5 | Gambar default, disable stok kosong, aksi cart | Week 3 slide 9-15; Week 4 slide 9; ditunda bersama detail/cart |
| 6 | Reactive Form tambah/edit beserta validasi | BELUM didukung PPT yang diberikan. Week 6 slide 9-20 menggunakan ngModel, bukan ReactiveFormsModule/FormGroup/FormControl/Validators. Perlu materi tambahan atau keputusan pengguna sebelum implementasi tahap berikutnya |
| 7 | Minimal 3 service | Week 6 slide 4-7, 19; hanya Product Service pada tahap ini. Cart dan Transaction Service ditunda |
| 8 | Custom theme dan dark mode toggle | Custom palette didukung Week 7 slide 4-9; dark mode toggle tidak dijelaskan dalam PPT. Keduanya di luar tahap ini |
| 9 | Minimal 2 animasi | AnimationController didukung Week 7 slide 16-21; di luar tahap ini |
| 10 | Cart dan checkout | Array, fungsi dan service dasar didukung Week 1 dan 6; di luar tahap ini |
| 11 | Riwayat dan detail transaksi | *ngFor dan route parameter didukung Week 4-5; di luar tahap ini |

Contoh navigasi bergambar pada requirement berbeda penempatan dari kalimat ketentuannya. Implementasi mengikuti ketentuan tertulis: empat tab utama Dashboard/Produk/Transaksi/Profil dan drawer untuk Pengaturan/Tentang Aplikasi/Logout.

## Rencana commit

1. 1 initial project
2. 2 create main pages
3. 3 add tab navigation
4. 4 add drawer menu
5. 5 add product data
6. 6 show product list

Sebelum setiap commit: tinjau perubahan, jalankan build, verifikasi fungsi terkait. Setelah commit: push ke main. Tidak squash, amend, atau backdate.

## File dan halaman

- Root: package.json, package-lock.json, angular.json, ionic.config.json, tsconfig*.json, README.md.
- Shell: src/app/app.module.ts, app-routing.module.ts, app.component.ts, app.component.html, app.component.scss.
- Halaman: src/app/dashboard/, products/, transactions/, profile/, settings/, about/, logout/.
- Container tab: src/app/tabs/ dengan NgModule dan child routes untuk empat halaman utama.
- Data: src/app/product.service.ts beserta spec bawaan generator.
- Setiap halaman menggunakan NgModule dan routing module hasil generator Ionic.
