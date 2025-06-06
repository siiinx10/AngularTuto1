import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../Shared/models/wishlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from "./add-wish-form/add-wish-form";


const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishList, AddWishForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items : WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass')
  ]

  listFilter : any = '0';

  

  title = 'wishlist';

  get visibleItems() : WishItem[]{
    
    return this.items.filter(filters[this.listFilter])
  }

  
}
