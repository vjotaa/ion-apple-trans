import { Animation, PageTransition } from 'ionic-angular';

export class LeaveAnimation extends PageTransition {
  public init() {
    super.init();
    const direction = `translateY(${this.opts.easing}px)`;
    const leavingView = this.leavingView.pageRef();
    const leavingViewAnimation = new Animation(
      this.plt,
      leavingView.nativeElement
    );
    leavingViewAnimation
      .beforeStyles({})
      .fromTo('width', '100%', '80%')
      .fromTo('margin', '0rem 0rem', '0rem 4rem')
      .fromTo('border-radius', '0', '1.5rem')
      .fromTo('height', '100vh', `${this.opts.ev}px`)
      .fromTo('transform', 'scale(1)', direction)
      .fromTo('opacity', 1, 0.99);

    this.duration(400)
      .easing('ease-out')
      .add(leavingViewAnimation);
  }
}
