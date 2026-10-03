# Tahap Josh

Mulai dari commit 6 milik Jeremiah. Commit 1-6 tetap utuh. Commit baru memakai Author dan Committer Josh, akun GitHub Joshpangemanan.

| Commit | Perubahan | Materi |
| --- | --- | --- |
| 7 add dashboard summary | Jumlah produk, transaksi dan nilai penjualan hari ini, produk terlaris dari service | Week 1 array, loop dan fungsi; Week 3 Date dan interpolation; Week 6 service; Week 7 ionViewDidEnter |
| 8 add product search | Input ngModel dan list yang berubah saat mengetik | Week 1 loop, array, fungsi; Week 3 event; Week 4 ngModel dan ngFor |
| 9 add product detail | Route parameter ID, nama, stok, harga beli dan jual | Week 2/5 routing parameter; Week 6 data service |
| 10 add product binding | Gambar default, disabled stok kosong, click menyimpan produk ke Cart Service | Week 3 property/event binding; Week 4 ngIf; Week 6 array service dan push |

Transaction Service pada tahap ini hanya memiliki array kosong dan perhitungan ringkasan. Data uji transaksi hanya berada di unit test. Belum ada fitur membuat transaksi, riwayat, checkout, atau penyimpanan permanen. Format yang dibaca ringkasan adalah date berupa Date dan items berisi productId, quantity, price.

Cart Service hanya diperlukan untuk aksi tambah ke keranjang dari detail. Tidak membuat cart UI, checkout, form tambah/edit, theme/dark mode, animasi custom, atau README final. Tahap berikutnya menjadi pekerjaan William.

Pencarian menggunakan loop dasar, indexing teks, perbandingan, dan push. Pencarian mencocokkan potongan nama secara literal dan membedakan huruf besar/kecil. Tidak menggunakan filter/includes, pipe pencarian, atau library tambahan. Pemanggilan fungsi pada ngFor mengikuti contoh chunkArray Week 5; ngModel memperbarui list langsung tanpa tombol submit.
