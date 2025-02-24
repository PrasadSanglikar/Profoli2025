import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProtfolioComponent } from "../protfolio/protfolio.component";
import { TestimonailComponent } from "../testimonail/testimonail.component";
import { ServicesComponent } from "../services/services.component";
import { FaqsComponent } from "../faqs/faqs.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutUsComponent, SkillsComponent, ProtfolioComponent, TestimonailComponent, ServicesComponent, FaqsComponent, ContactComponent, FooterComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imagePath = '/image/hero.webp';


    isVisible: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isVisible = scrollTop > 200; // Show button after 200px scroll
    const button = document.getElementById("backToTop");
    if (button) {
      button.style.display = this.isVisible ? "block" : "none";
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
