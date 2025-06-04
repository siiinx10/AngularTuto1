import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../Shared/models/wishlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass')
  ]

  newWishText = "";
  protected title = 'wishlist';

  addNewWish(){
    //todo : add wish to items array
    //clear the list
    this.items.push(new WishItem(this.newWishText));
    //this.newWishText = '';
    //dis
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
