import { AfterViewInit, Directive, ElementRef, Input, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[BaseForm]'
})
export class BaseFormDirective implements AfterViewInit, OnDestroy {

  @Input('BaseForm') form: FormGroup;
  private formChangerSubscriber: Subscription;
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  private getStarNode(): HTMLSpanElement {
    var span = this.renderer.createElement("span");
    this.renderer.appendChild(span,this.renderer.createText("●"));
    this.renderer.addClass(span,"form-asterisk");
    return span;
  }

  private insertAfter(newNode, referenceNode) {
    this.renderer.insertBefore(this.renderer.parentNode(referenceNode), newNode, this.renderer.nextSibling(referenceNode))
  }

  private translateError(errors : any) : HTMLElement {
    var ul = this.renderer.createElement("ul");
    var message : string = "";
    errors = JSON.parse(errors);
    Object.keys(errors).forEach(error=>{
      var li = this.renderer.createElement("li");
      li.innerHTML = errors[error];
      this.renderer.appendChild(ul,li);
    });
    return ul;
  }

  private attachRequiredProperties(elm: HTMLElement, control: string): void {
    //Mark required by Asterisk(*)
    var label = elm.previousElementSibling;
    var text = label.innerHTML;
    if (!label) {
      label = this.el.nativeElement.querySelector(elm.getAttribute(`[for=${control}]`));
    }
    label.innerHTML = "";
    label && this.renderer.appendChild(label, this.getStarNode());
    this.renderer.appendChild(label, (this.renderer.createText(text)));
    //Create error message div
    var span = this.renderer.createElement("div");
    this.renderer.addClass(span,"form-error-msg");
    this.renderer.setStyle(span,'display','none');
    this.formChangerSubscriber = this.form.statusChanges.subscribe(() => {
      const text = this.form.controls[control].errors ? JSON.stringify(this.form.controls[control].errors) : null;
      span.innerHTML = "";
      this.renderer.setStyle(span,'display',text ? 'block' : 'none' );
      text && this.renderer.appendChild(span, this.translateError(text));
    });
    this.insertAfter(span, elm);
  }

  public ngAfterViewInit(): void {
    var formControls = {};
    this.el.nativeElement.querySelectorAll("[formControlName]").forEach((elm: HTMLElement) => {
      var control = elm.getAttribute("formControlName");
      if ((<any>this.form.controls[control]).required) {
        this.attachRequiredProperties(elm, control);
      }
    });
  }

  ngOnDestroy(): void {
    this.formChangerSubscriber && this.formChangerSubscriber.unsubscribe();
  }

}
