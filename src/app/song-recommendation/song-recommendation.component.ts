import { Component } from '@angular/core';

@Component({
  selector: 'app-song-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './song-recommendation.component.html',
  styleUrl: './song-recommendation.component.css'
})
export class SongRecommendationComponent {
  closePopup(): void {
    document.getElementById('songPopup')?.classList.remove('visible');
    document.getElementById('backdrop')?.classList.remove('visible');
  }

  openPopup(): void {
    document.getElementById('songPopup')?.classList.add('visible');
    document.getElementById('backdrop')?.classList.add('visible');
  }
  
}
