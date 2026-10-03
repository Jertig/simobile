import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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
}
