import { Pipe, PipeTransform } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'courseCategory',
})
export class CourseCategoryPipe implements PipeTransform {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string, ...args: unknown[]): string {
    let iconName = '';

    switch (value) {
      case 'front-end':
        iconName = 'code';
        break;
      case 'back-end':
        iconName = 'computer';
        break;
      default:
        iconName = 'code';
        break;
    }

    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${iconName}.svg`)
    );

    return iconName;
  }
}
