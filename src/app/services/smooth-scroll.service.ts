import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(target: string): void {
    if (target === '#') return;
    
    const element = this.document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}