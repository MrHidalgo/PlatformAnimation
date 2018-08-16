// Create a timeline
// ====================
var tl = new TimelineMax();
//
// ====================

// variable
// ====================
var _text = document.getElementById("text");
  // _splitText = new SplitText(_text, {type:"chars"});

var _figure12 = document.getElementById("figureScheme-12"),
    _figure11 = document.getElementById("figureScheme-11"),
    _figure10 = document.getElementById("figureScheme-10"),
    _figure9 = document.getElementById("figureScheme-9"),
    _figure8 = document.getElementById("figureScheme-8"),
    _figure7 = document.getElementById("figureScheme-7"),
    _figure6 = document.getElementById("figureScheme-6"),
    _figure5 = document.getElementById("figureScheme-5"),
    _figure4 = document.getElementById("figureScheme-4"),
    _figure3 = document.getElementById("figureScheme-3"),
    _figure2 = document.getElementById("figureScheme-2"),
    _figure1 = document.getElementById("figureScheme-1"),
    _figure0 = document.getElementById("figureScheme-0");

var _lineBlue6 = document.getElementById("line-blue-6"),
  _lineBlue5 = document.getElementById("line-blue-5"),
  _lineBlue4 = document.getElementById("line-blue-4"),
  _lineBlue3 = document.getElementById("line-blue-3"),
  _lineBlue2 = document.getElementById("line-blue-2"),
  _lineBlue1 = document.getElementById("line-blue-1"),
  _lineBlue0 = document.getElementById("line-blue-0");

var _arrow6 = document.getElementById("arrow-6"),
  _arrow5 = document.getElementById("arrow-5"),
  _arrow4 = document.getElementById("arrow-4"),
  _arrow3 = document.getElementById("arrow-3"),
  _arrow2 = document.getElementById("arrow-2"),
  _arrow1 = document.getElementById("arrow-1"),
  _arrow0 = document.getElementById("arrow-0");

//
// ====================


// Main opt
// ====================
tl.set(
  [_figure0, _figure1, _figure2, _figure3, _figure4, _figure5, _figure6, _figure7, _figure8, _figure9, _figure10, _figure11, _figure12], {
    transformOrigin: 'center'
  }
);
tl.set(
  [_text, _figure10, _figure11, _figure12, _lineBlue6, _lineBlue5, _lineBlue4, _lineBlue3, _lineBlue2, _lineBlue1, _lineBlue0, _arrow6, _arrow5, _arrow4, _arrow3, _arrow2, _arrow1, _arrow0], {
    opacity: 0
  }
);
tl.set("#scheme-svg", {
  visibility: "visible"
});
//
// ================


// Animate
// ====================
tl

  .to(_figure0, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure0, 0.3, {scale: 1})

  .to(_arrow0, 0.2, {opacity:1})
  .fromTo(_lineBlue0, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow0, 1, {y: -120}, "-=1")

  .to(_figure1, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure1, 0.3, {scale: 1})

  .to(_arrow1, 0.2, {opacity:1})
  .fromTo(_lineBlue1, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow1, 1, {y: -45}, "-=1")

  .to(_figure2, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure2, 0.3, {scale: 1})

  .to(_arrow2, 0.2, {opacity:1})
  .fromTo(_lineBlue2, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow2, 1, {x: -65}, "-=1")

  .to([_figure3, _figure7], 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to([_figure3, _figure7], 0.3, {scale: 1})

  .to(_arrow3, 0.2, {opacity:1})
  .fromTo(_lineBlue3, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow3, 1, {y: 120}, "-=1")

  .to(_figure4, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure4, 0.3, {scale: 1})

  .to(_arrow4, 0.2, {opacity:1})
  .fromTo(_lineBlue4, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow4, 1, {x: -330}, "-=1")

  .to(_text, 1, {opacity: 1})

  .to(_figure5, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure5, 0.3, {scale: 1})

  .to(_arrow5, 0.2, {opacity:1})
  .fromTo(_lineBlue5, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow5, 1, {y: -90}, "-=1")

  .to([_figure6, _figure9], 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to([_figure6, _figure9], 0.3, {scale: 1})

  .to(_arrow6, 0.2, {opacity:1})
  .fromTo(_lineBlue6, 1, {opacity:1, drawSVG:"0%"}, {drawSVG:"100%"})
  .from(_arrow6, 1, {x: 330}, "-=1")

  .to(_figure12, 0.4, {opacity:1, ease: Power1.easeOut}, "+=0.1")

  .to(_figure11, 0.4, {opacity:1, ease: Power1.easeOut}, "+=0.2")

  .to(_figure8, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut}, "-=0.4")
  .to(_figure8, 0.3, {scale: 1})

  .to(_figure10, 0.4, {opacity:1, ease: Power1.easeOut}, "+=0.1")

  .to([_figure3, _figure7], 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to([_figure3, _figure7], 0.3, {scale: 1});

//
// ====================