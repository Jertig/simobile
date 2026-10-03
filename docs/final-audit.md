# Audit final SIMOBILE

Final integration Jeremiah, 3 Oktober 2026. Repository Jertig/simobile, branch main.

Audit ini memeriksa requirement teknis pada project hmp.pdf, materi Week 1-7, dan pengecualian terbatas yang diberikan pengguna untuk menyelesaikan tiga blocker. Tidak mengubah commit 1-17.

## Requirement satu per satu

| No. | Requirement | Hasil | Implementasi dan bukti |
| --- | --- | --- | --- |
| 1 | Minimal empat tab dan drawer Pengaturan, Tentang, Logout | PASS | Tabs Dashboard/Produk/Transaksi/Profil, menu-toggle dan routing. Seluruh tab dan menu diuji di browser. |
| 2 | Dashboard summary melalui interpolation dan service | PASS | ProductService menghitung produk; TransactionService menghitung transaksi hari ini, total, bestseller. Dashboard setelah dua checkout menampilkan 2 transaksi, Rp104000, Gula Pasir 1 kg. |
| 3 | Real-time search menggunakan ngModel, tanpa submit | PASS | Input langsung memperbarui hasil: Kopi menghasilkan satu produk; teks tidak ada menghasilkan pesan kosong; clear mengembalikan daftar. |
| 4 | Detail produk berdasarkan route ID | PASS | ActivatedRoute.params.subscribe dan lookup service, nama/stok/harga beli/jual; guard ID tidak ditemukan. |
| 5 | Default image, disabled stok 0, click add-to-cart | PASS | Property/event binding; assets/no-image.jpg termuat dengan ukuran asli 547 px; Minyak stok 0 memiliki tombol disabled; produk berstok masuk cart. |
| 6 | Reactive Form tambah/edit dan validasi per field | PASS | ReactiveFormsModule, FormBuilder, FormGroup, Validators.required/pattern/min. Browser dan test menolak nama kosong, harga 0/negatif/huruf, stok negatif; field lain tetap tersimpan. Tambah valid dan edit nama/harga berhasil. |
| 7 | Minimal tiga service untuk logika data | PASS | ProductService, CartService, TransactionService. Komponen memanggil service; tidak ada arsitektur state tambahan. |
| 8 | Custom theme dan toggle dark/light | PASS | Palet hijau-kuning; ion-toggle mengubah kelas ion-palette-dark pada document.documentElement, sesuai selector CSS Ionic. ON menghasilkan latar #121212, OFF kembali terang; primary tetap #237644. Navigasi dan drawer tetap berfungsi. |
| 9 | Minimal dua animasi | PASS | AnimationController fade Tentang 500 ms dan scale gambar produk 350 ms, dari implementasi Week 7 yang sudah diverifikasi pada tahap William. Aksi add-to-cart dan halaman Tentang tetap berjalan pada regresi final. |
| 10 | Cart total dan simulasi checkout | PASS | Subtotal/total dari CartService; TransactionService menyalin item, memvalidasi stok sebelum mutasi, menyimpan record, mengurangi stok, mengosongkan cart. Dua checkout dan cart yang pertama dibuka kosong lulus uji. |
| 11 | Riwayat clickable dan detail transaksi lengkap | PASS | Tab Transaksi langsung menampilkan record 1 Rp68000 dan record 2 Rp36000 tanpa reload. Kedua ID dibuka dan menampilkan item, tanggal, subtotal, total masing-masing. |
| Tambahan | Minimal 10 produk bervariasi | PASS | Sepuluh data asli tetap ada, kategori Sembako/Makanan/Minuman/Perawatan, harga dan stok bervariasi termasuk stok 0. |
| Tambahan | Custom style Ionic, tanpa library UI instan | PASS | CSS variables dan SCSS sederhana; tidak menambahkan dependency. |
| Tambahan | Batas teknik yang diizinkan sesi | PASS | Materi Week 1-7 dipertahankan, dengan tiga pengecualian eksplisit pengguna yang dijelaskan di bawah. |
| Pengumpulan | Repository dengan riwayat progres | PASS | Commit 1-17 dipertahankan dengan hash yang sama; 18-21 berurutan, Author dan Committer Jertig memakai jeremiahtigres@gmail.com. |
| Pengumpulan | README instalasi, menjalankan, daftar fitur | PASS | README diperbarui dengan perintah npm ci, ionic serve/build, seluruh test, fitur final dan batas data. |

Ketentuan hadir, demo langsung, dan tes lisan individu merupakan pelaksanaan ujian oleh anggota kelompok, bukan fungsi aplikasi; belum dilaksanakan dan tidak dinyatakan PASS oleh audit teknis ini.

## Pengecualian yang dipakai

1. Form hanya memakai ReactiveFormsModule, FormBuilder, FormGroup, dan validator bawaan. Harga memakai pola angka dan minimum positif Number.MIN_VALUE, sehingga nol dan angka negatif ditolak. Tidak ada custom validator atau library tambahan.
2. Toggle hanya menyimpan boolean pada Settings dan mengubah satu kelas pada elemen utama halaman. Palet custom berlaku pada mode terang dan gelap. Pilihan tidak disimpan setelah reload.
3. Halaman mengambil data terbaru dari service dalam ionViewWillEnter. Percobaan lifecycle saja di build produksi masih meninggalkan riwayat kosong dan dashboard lama; test tambahan menemukan tombol cart kosong tetap disabled ketika diisi. detectChanges dipakai hanya pada Cart, Transactions, Dashboard. Product Detail dan Transaction Detail cukup mengambil ulang data dengan lifecycle; tidak menggunakan detectChanges.

Service tetap memakai array, object, loop, fungsi, dan constructor injection. Tidak memakai Subject, BehaviorSubject, NgRx, signals, atau library state.

## Pengujian

Build produksi: ionic build berhasil. Seluruh automated test: npm test -- --watch=false, 54 test dari 16 file lulus.

Test mencakup validasi form, tambah/edit/ID tidak dikenal, membuka kembali form tambah, event submit dengan error, toggle tema, search input event, cart subtotal/hapus/batas stok, checkout kosong/stok kurang, snapshot transaksi, refresh cart dan riwayat, ringkasan hari ini, serta detail ID.

Skenario browser pada hasil build produksi:

1. Buka dashboard, history kosong, dan cart kosong terlebih dahulu agar halaman tersimpan oleh Ionic.
2. Pilih Beras 5 kg, tambah satu, buka kembali cart: tombol konfirmasi aktif, total Rp68000.
3. Checkout pertama: cart kosong dan transaksi 1 langsung muncul di history.
4. Kembali Produk, tambah dua Gula, buka kembali cart: pesan checkout lama hilang, tombol aktif, total Rp36000.
5. Checkout kedua: transaksi 2 langsung muncul bersama transaksi 1, tanpa reload browser di antara checkout.
6. Buka detail 1 dan 2: Beras 1 x Rp68000 dan Gula 2 x Rp18000, tanggal dan total benar.
7. Dashboard yang dibuka ulang: 2 transaksi, total Rp104000, Gula terlaris; stok Beras 19 dan Gula 33 terlihat pada list.
8. Form: invalid field ditolak dengan input lain tetap; produk baru tampil pada list; edit tampil di detail; membuka tambah lagi menghasilkan form kosong.
9. Toggle ON/OFF, navigasi dan drawer, empat tab, search dengan/ tanpa hasil, default image dan stok 0 diperiksa.

Browser memerlukan waktu transisi Ionic selesai sebelum aksi berikutnya. Tidak memakai refresh manual untuk memperbaiki data di antara checkout.

## Commit final integration

| Commit | Perubahan utama |
| --- | --- |
| 18 add product form | Halaman tambah/edit, routing, validator, CRUD service sederhana, test form |
| 19 add dark mode | Toggle Pengaturan dan kelas palet Ionic, custom palette tetap |
| 20 fix transaction refresh | Lifecycle/refetch, riwayat clickable, refresh cart/dashboard, test cached pages |
| 21 final check | README final dan audit requirement |

Identitas browser dan terminal diverifikasi sebagai Jertig sebelum coding. Pull tidak mengubah HEAD 17 add readme. Build awal dan 36 test lulus. Setiap perubahan diperiksa, build dan seluruh test dijalankan sebelum commit, identitas Author/Committer diperiksa sebelum push.

## Batas prototype

Data hanya dalam memori selama sesi aplikasi. Reload mengembalikan 10 produk awal dan menghapus transaksi sesi. Tidak ada database atau API; gambar default offline. Logout hanya navigasi karena tidak ada sistem akun pengguna. Audit ini membuktikan fungsi web prototype melalui unit test dan browser; tidak mengklaim build APK atau pelaksanaan demo ujian.

Pemeriksaan akhir dijalankan bergiliran. Percobaan test bersamaan dengan build sempat kehabisan memori pada sebagian worker dan tidak dipakai sebagai hasil akhir. Pengulangan seluruh test secara terpisah selesai dengan 54 test lulus.
