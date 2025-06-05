import { Component, Input } from '@angular/core';
import { WishItem } from '../../Shared/models/wishlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css'
})
export class WishList {

  @Input() wishes : WishItem[] = [];

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
