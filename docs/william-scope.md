# Tahap William

Repository Jertig/simobile, branch main. Akun browser dan terminal WWgut3232, collaborator dengan akses write. Identitas commit William dengan email s160424056@student.ubaya.ac.id.

Sebelum coding: Josh logout, William login, identitas diperiksa, pull main dilakukan, HEAD tetap ff5de6e9d33591d3b796089a0f9082ef03293a76 dengan pesan 10 add product binding. Build awal berhasil dan 28 test lulus.

## Commit William

| Commit | Perubahan | Materi |
| --- | --- | --- |
| 11 add cart page | List, subtotal, total, hapus, navigasi ke keranjang | Week 1 loop/fungsi/array; Week 2 routing; Week 3 binding; Week 4 ngFor/ngIf; Week 5 list; Week 6 service |
| 12 add checkout | Validasi stok, salinan item transaksi, pengurangan stok, kosongkan cart | Week 1 object/loop/fungsi; Week 3 Date/click/disabled; Week 6 service/push |
| 13 add custom theme | Variabel warna hijau-kuning dan header/tab sederhana | Week 7 slide 4-9, 12 |
| 14 add animations | Fade Tentang dan scale gambar produk saat ditambahkan | Week 7 slide 16-20, AnimationController dan lifecycle |
| 15 add transaction detail | Lookup ID, tanggal, item, subtotal, total, pesan ID tidak ditemukan | Week 2/5 route params.subscribe; Week 3 Date/interpolation; Week 6 service |
| 16 update supporting pages | Informasi Profil dan tombol kembali dari Logout | Week 2 routerLink; Week 5 list |
| 17 add readme | Instalasi, menjalankan, status fitur, audit requirement | Ketentuan dokumentasi project |

## Audit requirement

| Requirement | Status | Bukti atau kendala |
| --- | --- | --- |
| 1 Navigasi empat tab dan drawer | Berfungsi | Dashboard, Produk, Transaksi, Profil; Pengaturan, Tentang, Logout; drawer menutup setelah dipilih |
| 2 Dashboard summary | Dibuat, integrasi lanjutan perlu perbaikan | Service menghitung transaksi hari ini dan bestseller. Uji checkout pertama menunjukkan total dan stok berubah. Pembaruan halaman yang sudah tersimpan perlu diselesaikan |
| 3 Pencarian realtime ngModel | Berfungsi | Fitur Josh dipertahankan, literal substring dan peka huruf besar/kecil, tanpa submit |
| 4 Detail produk via ID | Berfungsi | Lookup ID dari service, harga beli/jual dan stok, guard untuk ID tidak dikenal |
| 5 Property/event binding | Berfungsi pada alur awal | Gambar lokal default, disabled stok 0, click menambah cart, batas jumlah <= stok |
| 6 Form tambah/edit Reactive | Ditunda karena materi | PDF halaman 2 meminta Reactive Form; Week 6 slide 9-20 menggunakan ngModel. Tidak ada ReactiveFormsModule/FormGroup/FormControl/Validators dalam Week 1-7 |
| 7 Minimal tiga service | Dipenuhi | Product, Cart, Transaction; logika data terpisah dari halaman |
| 8 Custom theme + toggle dark | Palet selesai, toggle ditunda | Week 7 slide 4-9 mendukung warna; tidak mengajarkan toggle dark/light. Tema otomatis sistem bawaan starter dipertahankan |
| 9 Minimal dua animasi | Dipenuhi | Fade Tentang 500 ms, scale produk 350 ms; opacity dan transform berubah pada uji browser |
| 10 Cart dan checkout | Sebagian, transaksi berulang belum lolos | Item/total/hapus dan konfirmasi awal berhasil; stok berkurang; cart kosong; record tersimpan. Saat membuka kembali cart, tombol dapat tetap disabled walaupun ada item baru |
| 11 Riwayat clickable dan detail | Detail selesai, list belum dipublikasikan | Detail dari tombol checkout berhasil. Percobaan list pada tab yang dibuka sebelum checkout tetap kosong setelah kembali |
| Tambahan 10 dummy products | Dipenuhi | 10 produk asli tetap ada dengan variasi kategori, harga, dan stok |
| README | Dipenuhi dengan status aktual | Instalasi, menjalankan, fitur yang dibuat, kendala, batas data dalam memori |
| Integrasi seluruh fitur | Belum lengkap | Menunggu penyelesaian pembaruan halaman serta materi/izin untuk dua fitur di luar materi |

## Pemeriksaan

Build terakhir berhasil, 36 test dari 15 file lulus. Unit test mencakup cart total/hapus, batas stok, checkout hanya sekali, penolakan stok kurang tanpa perubahan parsial, salinan transaksi, ringkasan tanggal, dan detail transaksi dari ID.

Browser memverifikasi konfirmasi awal dua Gula: total Rp36000, stok 35 menjadi 33, Dashboard satu transaksi. Detail transaksi menampilkan tanggal, item, subtotal, total. Profil, Pengaturan, drawer, Logout, dan navigasi kembali diperiksa pada ukuran ponsel.

Uji browser juga dilakukan terhadap hasil build tanpa hot reload dan tetap menemukan masalah tampilan yang tersimpan. Percobaan ionViewDidEnter dan pembungkus HTML biasa belum menyelesaikannya. Perubahan list yang belum lolos pemeriksaan tidak dipush. Belum menggunakan ChangeDetectorRef; pengecualian teknik ini masih menunggu keputusan pengguna.

Commit 1-10 tidak diubah. Semua commit baru diperiksa sebelum push untuk memastikan Author dan Committer William, tanpa trailer tambahan.
