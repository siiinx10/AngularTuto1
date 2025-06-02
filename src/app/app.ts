import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../Shared/models/wishlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('FInd grass')
  ]
  protected title = 'wishlist';

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
