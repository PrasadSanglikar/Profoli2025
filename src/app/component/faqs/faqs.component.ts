import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  faqs = [
    {
      question: "Lorem ipsum, dolor sit amet consectetur adipisicing?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem maxime possimus.",
      isActive: false
    },
    {
      question: "Another FAQ question goes here?",
      answer: "This is another FAQ answer with more details.",
      isActive: false
    },
    {
      question: "Ac odio tempor orci dapibus.Aliquam eleifend mi in nulla",
      answer: "This is another FAQ answer with more details.",
      isActive: false
    },
    {
      question: "Tempus consectetur adipisicing elit",
      answer: "This is another FAQ answer with more details.",
      isActive: false
    },
    {
      question: "Recusandae enim optio non ullam fugiat vitae consequuntur eius voluptates?",
      answer: "This is another FAQ answer with more details.",
      isActive: false
    },
    {
      question: "voluptates ipsum nostrum mollitia veritatis impedit, voluptas quasi, perferendis nisi possimus unde debitis",
      answer: "This is another FAQ answer with more details.",
      isActive: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs.forEach((faq, i) => faq.isActive = i === index ? !faq.isActive : false);
  }
}
