import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

@Component({
  selector: "app-testimonail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./testimonail.component.html",
  styleUrl: "./testimonail.component.scss",
})
export class TestimonailComponent implements AfterViewInit {
  @ViewChild("swiperContainer", { static: false }) swiperContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("swiperBtns", { static: false }) swiperBtns!: ElementRef;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Detect if the code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return; // Prevent running on the server

    if (!this.swiperContainer || !this.swiperContainer.nativeElement) {
      console.error("Swiper container is not found.");
      return;
    }

    setTimeout(() => {
      new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
      });
    }, 0);
  }

}
