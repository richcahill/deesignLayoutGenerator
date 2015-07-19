var boxDims = new Array();

function setRandomPos(elements,x,dx){
  elements.each(function(){
    var conflict = true;
    while (conflict) {
        fixLeft=(Math.floor(Math.random()*x)*10) + dx;
        fixTop = (Math.floor(Math.random()*40)*10) + 180;
        $(this).offset({
            left: fixLeft,
            top: fixTop
        });
        var box = {
            top: parseInt(window.getComputedStyle($(this)[0]).top),
            left: parseInt(window.getComputedStyle($(this)[0]).left),
            width: parseInt(window.getComputedStyle($(this)[0]).width),
            height: parseInt(window.getComputedStyle($(this)[0]).height)
        }
        conflict = false;
        for (var i=0;i<boxDims.length;i++) {
            if (overlap(box,boxDims[i])) {
                conflict = true;
                break;
            } else {
                conflict = false;
            }                   
        }
    }
    boxDims.push(box)

  });
}

function overlap(box1,box2) {
  var x1 = box1.left
  var y1 = box2.top;
  var h1 = box1.height;
  var w1 = box1.width;
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = box1.left;
  var y2 = box1.top;
  var h2 = box1.height;
  var w2 = box1.width;
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  var buf = 24;

  if (b1 + buf < y2 || y1 > b2 + buf || r1 + buf < x2 || x1 > r2 + buf) return false;
  return true;
}

setRandomPos($(".boxes"),40,40);