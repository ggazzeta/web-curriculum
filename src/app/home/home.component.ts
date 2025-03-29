import { Component, AfterViewInit, HostListener } from '@angular/core';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.handleScrollAnimation();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.handleScrollAnimation();
  }

  handleScrollAnimation() {
    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach((el: Element) => {
      const elementTop = el.getBoundingClientRect().top;
      const isVisible = elementTop <= window.innerHeight - 150;
      if (isVisible) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
}
