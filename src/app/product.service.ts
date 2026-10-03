import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  reduceStock(id: number, quantity: number) {
    const product = this.getProductById(id);
    if (product != null && quantity > 0 && quantity <= product.stock) {
      product.stock -= quantity;
    }
  }
  products = [
    {
      id: 1, name: 'Beras 5 kg', category: 'Sembako',
      purchasePrice: 62000, sellingPrice: 68000, stock: 20, imageUrl: ''
    },
    {
      id: 2, name: 'Gula Pasir 1 kg', category: 'Sembako',
      purchasePrice: 15000, sellingPrice: 18000, stock: 35, imageUrl: ''
    },
    {
      id: 3, name: 'Minyak Goreng 1 liter', category: 'Sembako',
      purchasePrice: 16000, sellingPrice: 19000, stock: 0, imageUrl: ''
    },
    {
      id: 4, name: 'Tepung Terigu 1 kg', category: 'Sembako',
      purchasePrice: 11000, sellingPrice: 14000, stock: 12, imageUrl: ''
    },
    {
      id: 5, name: 'Mie Instan Goreng', category: 'Makanan',
      purchasePrice: 2500, sellingPrice: 3500, stock: 80, imageUrl: ''
    },
    {
      id: 6, name: 'Air Mineral 600 ml', category: 'Minuman',
      purchasePrice: 2000, sellingPrice: 3500, stock: 48, imageUrl: ''
    },
    {
      id: 7, name: 'Teh Celup 25 kantong', category: 'Minuman',
      purchasePrice: 6500, sellingPrice: 8500, stock: 15, imageUrl: ''
    },
    {
      id: 8, name: 'Kopi Sachet', category: 'Minuman',
      purchasePrice: 1000, sellingPrice: 1500, stock: 60, imageUrl: ''
    },
    {
      id: 9, name: 'Sabun Mandi', category: 'Perawatan',
      purchasePrice: 3000, sellingPrice: 4500, stock: 5, imageUrl: ''
    },
    {
      id: 10, name: 'Pasta Gigi 120 g', category: 'Perawatan',
      purchasePrice: 8500, sellingPrice: 11000, stock: 0, imageUrl: ''
    }
  ];

  getProductCount(): number {
    return this.products.length;
  }

  getProductById(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) return this.products[i];
    }
    return null;
  }

  searchProducts(searchText: string) {
    if (searchText == '') return this.products;
    const result = [];

    for (let i = 0; i < this.products.length; i++) {
      const name = this.products[i].name;
      let matches = false;

      for (let j = 0; j <= name.length - searchText.length; j++) {
        let sameText = true;
        for (let k = 0; k < searchText.length; k++) {
          if (name[j + k] != searchText[k]) sameText = false;
        }
        if (sameText) matches = true;
      }

      if (matches) result.push(this.products[i]);
    }

    return result;
  }
}
