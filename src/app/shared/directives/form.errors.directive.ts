import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[pmFormErrors]'
})
export class FormErrorsDirective implements AfterViewInit, OnDestroy {
  createdElement: any;
  input: HTMLInputElement;
  errorDiv: HTMLElement;
  ngUnsubscribe = new Subject();
  pristine = true;
  listener: any;
  form: FormGroup;

  @HostListener('blur')
  onEvent() {
    this.validate();
  }

  @HostListener('focus')
  onFocusEvent() {
    this.removeErrorSpan();
  }

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) {
    this.input = el.nativeElement;
  }

  ngAfterViewInit() {
    // monkey pathcing for pristine/dirty status changes
    const originalFunc = this.control.control.markAsDirty;
    const self = this;
    this.control.control.markAsDirty = function() {
      originalFunc.apply(this, arguments);
      self.validate();
    };

    const originalFuncPristine = this.control.control.markAsPristine;
    this.control.control.markAsPristine = function() {
      originalFuncPristine.apply(this, arguments);
      self.validate();
    };

    this.control.statusChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.validate();
    });

    // for custom form controls
    if (this.input.getElementsByTagName('input')) {
      const innerInputs = this.input.getElementsByTagName('input');
      const innerInputsArr = Array.from(innerInputs);
      innerInputsArr.forEach(item => {
        this.listener = this.renderer.listen(item, 'focus', () => {
          this.removeErrorSpan();
        });
      });
    }
  }

  removeErrorSpan() {
    if (this.createdElement != null) {
      this.renderer.removeChild(this.input, this.createdElement);
      this.createdElement = null;
    }
  }

  prepareErrorMessageLine(messageLine: string): string {
    return '<div>' + messageLine + '</div>';
  }

  validate(): void {
    let errorMesage = '';
    this.removeErrorSpan();

    if (this.isValidationError('required')) {
      errorMesage += this.prepareErrorMessageLine('This field is required');
    }

    if (this.isValidationError('email')) {
      errorMesage += this.prepareErrorMessageLine('Incorrect email address');
    }

    if (this.isValidationError('minlength')) {
      errorMesage += this.prepareErrorMessageLine(`Minimum ${this.control.getError('minlength').requiredLength} characters is required`);
    }

    if (this.isValidationError('min')) {
      errorMesage += this.prepareErrorMessageLine(`Minimum height is ${this.control.getError('min').min}`);
    }

    if (this.isValidationError('max')) {
      errorMesage += this.prepareErrorMessageLine(`Maximum height is ${this.control.getError('max').max}`);
    }

    if (errorMesage) {
      this.showError(errorMesage);
    }
  }

  showError(message: string): void {
    if (this.createdElement) {
      this.createdElement.innerHTML = message;
      return;
    }

    this.createdElement = this.renderer.createElement('div');
    (this.createdElement as HTMLDivElement).innerHTML = message;
    this.renderer.addClass(this.createdElement, 'help');
    this.renderer.addClass(this.createdElement, 'is-danger');
    this.renderer.appendChild(this.input, this.createdElement);
  }

  isValidationError(errorProperty: string): boolean {
    if (!this.control.pristine && this.control.hasError(errorProperty)) {
      return true;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    if (this.listener) {
      this.listener();
    }
  }
}
