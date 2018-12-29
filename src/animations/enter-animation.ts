import { Animation, PageTransition } from 'ionic-angular';

export class EnterAnimation extends PageTransition {
  public init() {
    super.init();
    const direction = `translateY(${this.opts.direction}px)`;
    const enteringView = this.enteringView.pageRef();
    const enteringViewAnimation = new Animation(
      this.plt,
      enteringView.nativeElement
    );
    enteringViewAnimation
      .afterStyles({})
      .fromTo('position', 'relative', 'relative')
      .fromTo('width', '80%', '100%')
      .fromTo('margin', '0rem 4rem', '0rem 0rem')
      .fromTo('border-radius', '1.5rem', '0')
      .fromTo('height', `${this.opts.ev}px`, '100vh')
      .fromTo('transform', direction, 'scale(1)')
      .fromTo('opacity', 0.99, 1);

    this.duration(400)
      .easing('ease-in-out')
      .add(enteringViewAnimation);
  }
}
