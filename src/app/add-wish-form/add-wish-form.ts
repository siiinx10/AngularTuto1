import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../Shared/models/wishlist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css'
})
export class AddWishForm {

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText  = '';

  addNewWish() {
    //this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
