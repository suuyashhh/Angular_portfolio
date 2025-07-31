import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  activeSection: string = 'home';
  mobileMenuOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // Initialize any necessary functionality
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Carousel functionality
  imageIndex: { [key: string]: number } = {
    chatverse: 1,
    pictoria: 1,
    dairy: 1
  };

  showImage(project: string, index: number): void {
    const images = document.querySelectorAll(`#${project}-img-1, #${project}-img-2, #${project}-img-3, #${project}-img-4`);
    images.forEach((img: any, i: number) => {
      img.style.opacity = (i + 1 === index) ? "1" : "0";
    });
  }

  nextImage(project: string): void {
    this.imageIndex[project]++;
    if (this.imageIndex[project] > 4) this.imageIndex[project] = 1;
    this.showImage(project, this.imageIndex[project]);
  }

  prevImage(project: string): void {
    this.imageIndex[project]--;
    if (this.imageIndex[project] < 1) this.imageIndex[project] = 4;
    this.showImage(project, this.imageIndex[project]);
  }

  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = '../../../assets/img/SuyashPatilResume.pdf';
    link.download = 'SuyashPatilResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openInNewTab(): void {
    window.open('../../../assets/img/SuyashPatilResume.pdf', '_blank');
  }
}
