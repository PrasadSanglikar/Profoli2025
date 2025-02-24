import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.scss'
})
export class ProtfolioComponent {
  selectedCategory: string = 'all';
  cards = [
    { img: '/image/portfolio-1.jpg', category: 'web-design', title: 'Modern Dashboard Interface', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: '/image/portfolio-2.jpg', category: 'graphics', title: 'Creative Brand Identity', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: '/image/portfolio-3.jpg', category: 'motion', title: 'Product Animation Reel', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: '/image/portfolio-4.jpg', category: 'motion', title: 'Product Animation Reel', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: '/image/portfolio-5.jpg', category: 'branding', title: 'Product Animation Reel', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { img: '/image/portfolio-6.jpg', category: 'web-design', title: 'E-commerce Platform', description: 'Lorem ipsum dolor sit amet consectetur.' }
  ];
  filteredCards = [...this.cards];

  constructor() {}

  ngOnInit(): void {}

  filterCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(card => card.category === category);
    }
  }
}
