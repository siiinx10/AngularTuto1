import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../Shared/models/wishlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee'),
    new WishItem('FInd grass')
  ]
  protected title = 'wishlist';
}
