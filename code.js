var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyeRed = randomNumber(100, 255);
var eyeGreen = randomNumber(100, 255);
var eyeBlue = randomNumber(100, 255);
background("yellow");

//side and top spikes
strokeWeight(3);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(50, randomNumber(220, 340), 3, 25);
regularPolygon(350, randomNumber(220, 340), 3, 25);
regularPolygon(randomNumber(70, 200), 60, 3, 25);
regularPolygon(randomNumber(200, 325), 60, 3, 25);

//side rings
strokeWeight(8);
noFill();
arc(50, randomNumber(90, 180), randomNumber(40, 70), 50, 90, 270);
arc(350, randomNumber(90, 180), randomNumber(40, 70), 50, 270, 90);

//head
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
strokeWeight(3);
rect(50, 60, 300, 300);

//antenna
noFill();

arc(190, 23, 40, 80, 0, 80);
arc(210, 15, 15, 15, 0, 180);

arc(90, 23, 40, 80, 0, 80);
arc(110, 15, 15, 15, 0, 180);

arc(290, 23, 40, 80, 0, 80);
arc(310, 15, 15, 15, 0, 180);

//eyes / cameras
fill("white");
var eyeSize = randomNumber(50, 100);
ellipse(125, 150, eyeSize, eyeSize);
ellipse(275, 150, eyeSize, eyeSize);
ellipse(200, 100, eyeSize, eyeSize);
fill(rgb(eyeRed, eyeGreen, eyeBlue));
ellipse(200, 100, eyeSize-20, eyeSize-20);
ellipse(125, 150, eyeSize-20, eyeSize-20);
ellipse(275, 150, eyeSize-20, eyeSize-20);
point(200, 100);
point(125, 150);
point(275, 150);

//nose
strokeWeight(randomNumber(2, 10));
line(200, 175, 200, 225);

//mouth / speaker
strokeWeight(3);
var polySize = randomNumber(30, 75);
var polyNum = randomNumber(5, 8);
fill(rgb(randomNumber(100, 255), randomNumber(100, 255), randomNumber(100, 255)));
regularPolygon(200, 275, polyNum, polySize);
fill("white");
regularPolygon(200, 275, polyNum, polySize-20);

//corner rivets
ellipse(60, 70, 10, 10);
ellipse(340, 70, 10, 10);
ellipse(60, 350, 10, 10);
ellipse(340, 350, 10, 10);

//"cheek" lines
fill("black");
shape(50, 210, 150, 360, 100, 360, 50, 242, 50, 210);
shape(350, 210, 250, 360, 300, 360, 350, 242, 350, 210);


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
