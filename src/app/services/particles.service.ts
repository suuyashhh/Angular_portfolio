import { Injectable } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  initParticles(elementId: string): void {
    if (typeof particlesJS !== 'undefined') {
      particlesJS(elementId, {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#06b6d4" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6366f1",
            opacity: 0.1,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }
}