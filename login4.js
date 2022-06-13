(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"login4_atlas_", frames: [[0,0,703,497],[0,499,233,150]]}
];


// symbols:



(lib.inversion = function() {
	this.spriteSheet = ss["login4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["login4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.LEON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LEON, new cjs.Rectangle(0,0,233,150), null);


(lib.junto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EgqaAAAMBU1AAA");
	this.shape.setTransform(271.5,297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-431,-190.5)).s().p("AqnXNIAAurIEOAAIAAjHIAPAAIAAjDIAbAAIAAifIgqAAIAA3FILjAAIAAJ3IFeAAMAAAAkig");
	this.shape_1.setTransform(338,148.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-305.5,-205)).s().p("Ao+UyIAA/ZIAUAAIAAhQIC0AAIAAo6IO1AAMAAAApjg");
	this.shape_2.setTransform(481.5,162.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-193,-238.5)).s().p("AolP2IAA/rIRLAAIAAfrg");
	this.shape_3.setTransform(77,197.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-75,-288.5)).s().p("AoHIXIAAwtIQPAAIAAQtg");
	this.shape_4.setTransform(199,246.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.junto, new cjs.Rectangle(-1,0,545,299.9), null);


(lib.INICIO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AF8AAQAAB2hwBUQhuBTieAAQidAAhvhTQhvhUAAh2QAAh1BvhUQBvhTCdAAQCeAABuBTQBwBUAAB1g");
	this.shape.setTransform(38,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AkMDKQhvhUAAh2QAAh1BvhTQBwhUCcAAQCdAABwBUQBvBTAAB1QAAB2hvBUQhwBTidAAQicAAhwhTg");
	this.shape_1.setTransform(38,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,78,59);


(lib.btn_Bienvenido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-134.4,0,134.5,0).s().p("A1AD6IAAnzMAqBAAAIAAHzg");
	this.shape.setTransform(134.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,50);


(lib.Boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgDAAIgBgCIgBgCIgMgdIgEgJQgCgFgDgDQgDgDgDgCQgFgCgFAAIgMAAIAAA2IAAACIgBABIgCAAIgFAAIgEAAIgCAAIgCgBIAAgCIAAh0QAAgDACgCIAEgCIAbAAIAIABIAFAAQAHACAFADQAGACAEAFQAEAEACAFQACAGAAAGQgBAGgBAFQgCAGgDADIgIAHIgKAEIAGADIAEAFIAFAHIADAIIAMAcIACAGIAAABIAAACIgBABIgDAAIgFAAgAgZgGIARAAQAGAAAEgCQAGgBACgDQAEgDACgEQABgEAAgFQAAgGgDgGQgEgFgIgCIgEgBIgIAAIgPAAg");
	this.shape.setTransform(103.6,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_1.setTransform(91.9,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBAIgEgCQgCgCAAgEIAAh0IAAAAIACgBIACgBIAEAAIAFAAIACABIABABIABAAIAABtIAsAAIACAAIABABIAAADIABADIgBADIAAADIgBABIgCABg");
	this.shape_2.setTransform(82.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA+QgJgDgGgGQgGgHgDgJQgEgJAAgLIAAhOIABAAIABgBIADgBIAEAAIAEAAIACABIACABIAAAAIAABMQAAAJACAGQACAHAEAFQAEAEAGACQAGACAGAAQAHAAAGgCQAGgCAEgEQAEgFACgGQACgHAAgIIAAhNIAAAAIACgBIACgBIAEAAIAEAAIADABIABABIABAAIAABNQAAALgEAJQgDAJgGAHQgHAGgJADQgJADgKAAQgLAAgIgCg");
	this.shape_3.setTransform(71.3,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_4.setTransform(59.7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBAIgEgCQgCgCAAgEIAAh0IAAAAIACgBIACgBIAEAAIAFAAIACABIABABIABAAIAABtIAsAAIACAAIABABIAAADIABADIgBADIAAADIgBABIgCABg");
	this.shape_5.setTransform(50.8,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAFAAIADABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_6.setTransform(40.1,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_7.setTransform(29.1,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ap6CCIAAkDIT1AAIAAEDg");
	this.shape_8.setTransform(63.5,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,28.4);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag+BKQgagagBgsQABgvAbgcQAcgcAjAAQAjAAAaAaQAaAaAAAsQAAAvgbAcQgcAcgjAAQgjAAgagagAgsg5QgTAWAAAjQABAmATAVQAVAVAYAAQAYAAATgXQASgVAAgkQABglgUgVQgUgVgZAAQgYAAgTAWg");
	this.shape.setTransform(292.1,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgMBfQACgyAAgxIgBhHIg9ABIABgUICQAAIAAAUQgdgBgfAAIgBBHIACBjg");
	this.shape_1.setTransform(274,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag9BdIAFgXQAYAIAXAAQAwAAAAgcQAAgOgMgKQgJgHgYgLQgbgLgLgKQgPgOAAgVQAAgVAPgOQARgPAeAAQAjAAANAEIgEAYQgWgHgZAAQglAAAAAZQAAAMALAIQAHAFAXALQAcAMAMAJQASAQAAAYQAAA2hKAAQgcAAgVgGg");
	this.shape_2.setTransform(258.7,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag6BfQACgtAAg2QAAg0gCgmIBuAAIgCAVQgogBgtAAIABA9QAmAAAfgCIAAAVQghgBgkAAQAAAlACAhQAwAAAsgCIgBAWg");
	this.shape_3.setTransform(244.2,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgiBbQgPgFgJgMQgKgMgDgSQgFgTAAgYIgBgtIAAg0IAbAAIgBBXQAAAYACARQADAQAGAKQAHALAKAEQAJAFAOAAQAPAAALgFQAJgEAGgKQAHgLACgQQADgQAAgZIAAglIgDgyIAcAAIgBAzIAAAtQAABhhNAAQgUAAgOgGg");
	this.shape_4.setTransform(225.2,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag/BgQACgqAAg5QAAgzgCgoIAVAAIATAAIAagBQAcAAARANQAQANAAAWQAAAigZAPQgZARgqAAIgJAAQAAAfACAugAgnhKIABBKIANAAQBBAAAAgmQAAgmgyAAQgNAAgQACg");
	this.shape_5.setTransform(207.5,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABOBfQAAgggFg+IgEhJIgCAAQgPAvgWA3QgXA4AAAJIgSAAQAAgKgVg4QgVg3gGgTIgHgbIgCAAQAAAUgGA8QgFA9AAAaIgZAAIAKhQQAKhPAAgeIAmAAQAAAQAYBAQAWBAAAANIACAAQAAgNAahAQAahBAAgPIAmAAQAAAeAHBOIAGBRg");
	this.shape_6.setTransform(185.4,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag+BKQgbgaAAgsQAAgvAcgcQAcgcAjAAQAjAAAaAaQAaAaAAAsQAAAvgbAcQgcAcgjAAQgjAAgagagAgsg5QgSAWgBAjQAAAmAVAVQATAVAZAAQAYAAATgXQASgVAAgkQAAglgTgVQgUgVgZAAQgYAAgTAWg");
	this.shape_7.setTransform(162.4,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgtBHQgZgcAAgnQAAgpAdgeQAcgfAuAAQAOAAAOAEIgEAYQgRgGgNAAQgjAAgSAWQgSAWAAAgQAAAfAVAYQAVAXAkAAQAOAAAXgHIgCAWQgRAGgWAAQgxAAgagcg");
	this.shape_8.setTransform(144,21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhEBfIgGgBIgCgDIgBgCIAAipQAAgHAEgDQAEgEAGAAIAUAAIAKABIAHADQADACACAEIAGAKIAkBFIAGAMIAGALIAGAMIAFAMIAAgVIgBgVIAAhZIABgCIADgCIAGgBIAIgBIAJABIAFABIACACIABACIAACqIgBAGIgDAEIgFADIgFABIgRAAIgIgBIgHgEQgEgDgDgEIgGgMIguhYIgJgRIgHgSIgBAAIABAVIABAWIAABiIgBACIgDADIgFABIgJABIgIgBg");
	this.shape_9.setTransform(278.7,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgnBcQgRgFgLgMQgLgMgFgSQgGgTAAgZQAAgWAGgSQAGgTAMgNQALgMARgHQARgHAWAAQAWAAAQAGQARAFALAMQALAMAFASQAGASAAAZQAAAWgGATQgGATgLANQgMAMgRAHQgRAHgVAAQgXAAgQgGgAgWg8QgKAFgFAJQgGAJgDAMQgCAMAAANQAAAPACAMQADANAFAIQAGAJAJAFQAJAEAOAAQAOAAAJgFQAKgFAGgJQAGgJACgMQACgNAAgNQAAgOgCgMQgCgNgGgIQgFgJgKgFQgJgFgOAAQgOAAgJAGg");
	this.shape_10.setTransform(258.7,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgIBfIgGgBIgDgCIgBgDIAAiyIABgCIADgCIAGgBIAIgBIAKABIAFABIAEACIABACIAACyIgBADIgEACIgFABIgKABIgIgBg");
	this.shape_11.setTransform(244.6,21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgaBhIgOgEIgLgFIgGgFIgDgFIgBgKIABgIIABgFIACgDIACAAQACAAAEACIAJAFIAOAGQAJACAKAAQAHAAAFgCQAFgBAEgDQAEgDACgFQACgFAAgFQAAgHgEgEQgDgFgGgDIgMgHIgPgHIgOgIQgHgDgGgGQgGgHgDgIQgDgJAAgMQAAgNAEgKQAGgLAIgHQAIgGAMgEQAMgDAMAAIANABIANADIAKAEIAHADIACADIABADIAAAEIAAAGIAAAHIgBAFIgBADIgDABIgFgCIgJgFIgLgEQgHgCgIAAQgGAAgEABQgFACgDADQgEACgBAEQgBAEgBAEQABAHADAEQADAFAHADIALAHIAQAHIAOAIQAHAEAHAFQAFAHAEAIQADAIAAAMQAAAPgFALQgGALgKAIQgJAIgNADQgNAEgNAAQgKAAgJgBg");
	this.shape_12.setTransform(233.5,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAnBfIgFgBIgEgCIgBgDIgRgrIgGgMIgGgKQgEgDgEgCQgEgCgHAAIgMAAIAABIIgBADIgDACIgGABIgJAAIgKAAIgGgBIgDgCIgBgDIAAirQABgHADgCQADgDAFAAIAxAAIALAAIAJABQALABAKAEQAJAEAGAHQAGAGAEAJQAEAIAAAMQAAAJgDAIQgDAIgEAGQgEAGgIAFQgGADgKADIAJAFIAHAHIAGAKIAFAMIAQAlIAEAIIABAEIgBADIgDACIgGABIgMAAIgKAAgAgfgLIAUAAQAIAAAFgCQAGgCAEgEQAFgDACgFQABgFAAgGQAAgKgDgGQgFgHgKgCIgFgBIgLgBIgRAAg");
	this.shape_13.setTransform(218.6,21.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgsBfQgFAAgDgDQgDgDAAgGIAAilQAAgGADgDQADgDAFAAIBeAAIACABIACADIABAEIABAHIgBAHIgBAFIgCADIgCAAIhDAAIAAAvIA5AAIACABIACACIABAFIAAAGIAAAGIgBAFIgCACIgCABIg5AAIAAA2IBEAAIACAAIACADIABAFIAAAHIAAAHIgBAEIgCADIgCABg");
	this.shape_14.setTransform(202.5,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgHBgIgIgBIgEgBIgDgBIgCgCIgCgDIg4inIgCgJQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCAFAAIAMgBIAKABIAGABIADACIACADIAtCSIAtiRIACgEIADgCIAGgBIALgBIAKABQAEAAABACQACACgBADIgCAIIg5CnIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgIABIgMABIgIAAg");
	this.shape_15.setTransform(186,21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhEBfIgGgBIgCgDIgBgCIAAipQAAgHAEgDQAEgEAGAAIAUAAIAKABIAHADQADACACAEIAGAKIAkBFIAGAMIAGALIAGAMIAFAMIAAgVIgBgVIAAhZIABgCIADgCIAGgBIAIgBIAJABIAFABIACACIABACIAACqIgBAGIgDAEIgFADIgFABIgRAAIgIgBIgHgEQgEgDgDgEIgGgMIguhYIgJgRIgHgSIgBAAIABAVIABAWIAABiIgBACIgDADIgFABIgJABIgIgBg");
	this.shape_16.setTransform(167.2,21.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgIBfIgGgBIgEgCIgBgDIAAiyIABgCIAEgCIAGgBIAIgBIAJABIAGABIADACIACACIAACyIgCADIgDACIgGABIgJABIgIgBg");
	this.shape_17.setTransform(153.4,21.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ag+BKQgbgaABgsQAAgvAbgcQAcgcAjAAQAjAAAaAaQAbAaAAAsQgBAvgbAcQgcAcgjAAQgjAAgagagAgsg5QgSAWAAAjQAAAmATAVQAVAVAYAAQAYAAATgXQATgVgBgkQABglgUgVQgUgVgZAAQgYAAgTAWg");
	this.shape_18.setTransform(361.3,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgiBbQgPgFgJgMQgKgMgDgSQgFgTAAgYIgBgtIAAg0IAcAAIgCBXQAAAYACARQADAQAGAKQAHALAKAEQAJAFAOAAQAQAAAJgFQAKgEAGgKQAGgLADgQQADgQAAgZIgBglIgCgyIAcAAIgBAzIAAAtQAABhhNAAQgUAAgOgGg");
	this.shape_19.setTransform(294.4,21.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ag+BKQgbgaAAgsQAAgvAcgcQAcgcAjAAQAjAAAaAaQAaAaAAAsQABAvgcAcQgcAcgjAAQgjAAgagagAgsg5QgTAWAAAjQABAmATAVQAVAVAYAAQAYAAATgXQASgVAAgkQAAglgTgVQgUgVgZAAQgYAAgTAWg");
	this.shape_20.setTransform(231.6,21.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgtBHQgZgcAAgnQAAgpAdgeQAcgfAuAAQAOAAAOAEIgEAYQgRgGgNAAQgjAAgSAWQgSAWAAAgQAAAfAVAYQAVAXAkAAQAOAAAXgHIgCAWQgRAGgWAAQgyAAgZgcg");
	this.shape_21.setTransform(213.2,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ag9BdIAFgXQAYAIAXAAQAwAAAAgcQAAgOgMgKQgJgHgYgLQgbgLgLgKQgPgOAAgVQAAgVAPgOQARgPAeAAQAjAAANAEIgEAYQgWgHgZAAQglAAAAAZQAAAMALAIQAHAFAXALQAcAMAMAJQASAQAAAYQAAA2hKAAQgcAAgVgGg");
	this.shape_22.setTransform(190.5,21.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("Ag7BfQACgtABg2QgBg0gCgmIBvAAIgCAVQgogBgtAAIABA9QAnAAAegCIAAAVQgggBglAAQABAlABAhQAvAAAtgCIgCAWg");
	this.shape_23.setTransform(175.9,21);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAsBgQgOgqgHgOQgIgRgKgFQgHgEgWAAIgWAAQAAAwACAiIgbAAQACguAAg1QAAg0gCgnIAUAAIARAAIAXgBQA/AAAAAsQAAAlgkAOIAAACQARAEAJASQAJAPAVA5gAgvhKIABBGIARAAQA4AAAAglQAAgjguAAQgRAAgLACg");
	this.shape_24.setTransform(159,21);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ag7BfQACgtABg2QgBg0gCgmIBvAAIgCAVQgogBgtAAIABA9QAnAAAegCIAAAVQgggBglAAQABAlABAhQAvAAAtgCIgCAWg");
	this.shape_25.setTransform(142.2,21);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgMBfQACgyAAgxIgBhHIg9ABIABgUICQAAIAAAUQgdgBgfAAIgBBHIACBjg");
	this.shape_26.setTransform(125.8,21);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AA1BfQAAgCgwhEQgxhGgHgTIgCAAQADAkAAAZQAAAwACAyIgYAAQACgvAAg0QAAg0gCgmIAbAAQAAAEAtA+QAtBBAHAUIABAAQgCgkAAgXQAAg3gDglIAZAAQgCAmAAA0QAAA0ACAvg");
	this.shape_27.setTransform(108.1,21);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgNBfQACgvAAg0QAAg0gCgmIAbAAQgCAoAAAyQAAA0ACAvg");
	this.shape_28.setTransform(93.8,21);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgIBfIgGgBIgDgCIgBgDIAAiyIABgCIADgCIAGgBIAIgBIAJABIAGABIADACIABACIAACyIgBADIgDACIgGABIgJABIgIgBg");
	this.shape_29.setTransform(159.3,21.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgZBhIgPgEIgLgFIgHgFIgCgFIgBgKIABgIIABgFIABgDIADAAQACAAADACIAKAFIAOAGQAIACALAAQAHAAAEgCQAGgBAEgDQAEgDACgFQACgFAAgFQAAgHgDgEQgEgFgFgDIgNgHIgOgHIgPgIQgHgDgGgGQgFgHgEgIQgDgJgBgMQAAgNAGgKQAEgLAJgHQAJgGALgEQAMgDAMAAIAOABIAMADIAKAEIAHADIABADIABADIABAEIAAAGIAAAHIgBAFIgBADIgDABIgFgCIgJgFIgLgEQgIgCgIAAQgFAAgFABQgEACgDADQgEACgBAEQgCAEAAAEQAAAHAEAEQAEAFAGADIALAHIAQAHIAOAIQAIAEAFAFQAGAHADAIQAEAIAAAMQAAAPgFALQgGALgKAIQgJAIgNADQgNAEgNAAQgKAAgIgBg");
	this.shape_30.setTransform(148.2,21.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAnBfIgFgBIgEgCIgBgDIgRgrIgGgMIgGgKQgDgDgFgCQgFgCgGAAIgMAAIAABIIgBADIgDACIgGABIgJAAIgKAAIgFgBIgEgCIgBgDIAAirQABgHADgCQADgDAFAAIAxAAIALAAIAJABQALABAKAEQAJAEAGAHQAHAGADAJQADAIABAMQgBAJgCAIQgCAIgFAGQgEAGgIAFQgHADgIADIAIAFIAHAHIAGAKIAGAMIAPAlIAEAIIABAEIgBADIgDACIgGABIgMAAIgKAAgAgfgLIAUAAQAIAAAFgCQAGgCAEgEQAFgDABgFQACgFAAgGQAAgKgDgGQgFgHgKgCIgFgBIgLgBIgRAAg");
	this.shape_31.setTransform(133.3,21.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgIBfIgGgBIgDgCIgCgDIAAiyIACgCIADgCIAGgBIAIgBIAKABIAFABIAEACIABACIAACyIgBADIgEACIgFABIgKABIgIgBg");
	this.shape_32.setTransform(68.1,21.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("Ag0A9QgWgVAAglQAAgnAXgXQAXgYAeAAQAdAAAWAWQAWAWAAAlQAAAmgXAXQgYAZgdAAQgdAAgWgXgAgkgvQgQARAAAeQAAAfARASQAQASAVAAQAUAAAPgTQAQgSAAgeQAAgfgRgRQgQgRgVAAQgUAAgPASg");
	this.shape_33.setTransform(466.5,22);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgKBPQACgpAAgpIgBg8IgzACIABgSIB4AAIgBASQgXgBgagBIAAA8IABBSg");
	this.shape_34.setTransform(451.5,21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgzBNIAFgTQAUAHATAAQAoAAAAgXQAAgMgLgIQgHgGgUgKQgWgJgJgIQgMgLAAgRQAAgSAMgMQAOgNAZAAQAdABALADIgDAUQgTgHgVAAQgeABAAAUQAAALAJAGQAGAFATAJQAXAKAKAIQAPANAAAUQAAAtg+AAQgXgBgSgFg");
	this.shape_35.setTransform(438.7,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgxBPQACglAAgtQAAgrgCghIBcAAIgBATQgigCgkAAIABAzQAfAAAZgBIAAARIg4gBIABA7QAnAAAkgCIAAASg");
	this.shape_36.setTransform(426.6,21.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgcBMQgMgFgIgJQgIgKgEgQQgDgPAAgUIAAgmIgBgrIAXAAIgCBJQAAAUACANQACAOAGAJQAFAIAJAEQAIAEALAAQANAAAIgEQAIgEAGgIQAEgJADgNQACgOAAgVIAAgeIgCgqIAXAAIgBArIAAAlQAABRhAAAQgQAAgMgFg");
	this.shape_37.setTransform(410.8,22);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("Ag0BQQACgjAAgwQAAgqgCghIARAAIAQgBIAWAAQAXAAAOALQAOAKAAATQAAAcgWANQgUAOgjAAIgIgBQAAAbACAmgAggg9IABA9IAKAAQA2AAAAggQAAgfgpAAQgLAAgNACg");
	this.shape_38.setTransform(396.1,21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("ABBBPQAAgagEg0IgEg9IgBAAQgMAngTAuQgTAvAAAHIgPAAQAAgIgSgvQgRgugFgQIgGgWIgBAAIgFBCQgFAzAAAWIgVAAIAJhCQAIhCAAgaIAgAAQAAAOAUA2QASA1AAALIABAAQAAgLAWg1QAWg3AAgNIAgAAQAAAaAFBBIAGBDg");
	this.shape_39.setTransform(377.6,21.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("Ag0A9QgWgVAAglQAAgnAXgXQAXgYAeAAQAdAAAWAWQAWAWAAAlQAAAmgXAXQgYAZgdAAQgdAAgWgXgAgkgvQgQARAAAeQAAAfARASQAQASAVAAQAUAAAPgTQAQgSAAgeQAAgfgRgRQgQgRgVAAQgUAAgPASg");
	this.shape_40.setTransform(358.4,22);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AglA7QgVgXAAghQAAgiAXgZQAYgZAnAAQALAAAMADIgDATQgPgEgKAAQgdAAgPASQgQATAAAaQAAAaASATQASAUAeAAQALAAATgGIgBATQgPAEgSAAQgpAAgVgXg");
	this.shape_41.setTransform(343.1,21.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgzBNIAFgTQAUAHATAAQAoAAAAgXQAAgMgLgIQgHgGgUgKQgWgJgJgIQgMgLAAgRQAAgSAMgMQAOgNAZAAQAdABALADIgDAUQgTgHgVAAQgeABAAAUQAAALAJAGQAGAFATAJQAXAKAKAIQAPANAAAUQAAAtg+AAQgXgBgSgFg");
	this.shape_42.setTransform(324.2,22);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgxBPQACglAAgtQAAgrgCghIBbAAIAAATQgigCglAAIACAzQAfAAAZgBIAAARIg4gBIABA7QAnAAAkgCIAAASg");
	this.shape_43.setTransform(312.1,21.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAlBQQgMgjgGgMQgGgOgJgEQgGgDgSAAIgSAAQAAAnABAdIgWAAQACgmAAgtQAAgrgCggIARAAIAOgBIATAAQA1AAAAAlQAAAfgeALIAAABQANAEAIAPQAHAMASAwgAgng9IABA6IAOAAQAvAAAAgfQAAgdgnAAQgOAAgJACg");
	this.shape_44.setTransform(298,21.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgxBPQACglAAgtQAAgrgCghIBcAAIgBATQgigCgkAAIABAzQAfAAAZgBIAAARIg4gBIABA7QAnAAAkgCIAAASg");
	this.shape_45.setTransform(283.9,21.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgKBPQACgpgBgpIAAg8IgzACIABgSIB4AAIgBASQgYgBgagBIAAA8IACBSg");
	this.shape_46.setTransform(270.3,21.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAsBPQAAgCgog4Qgpg6gGgQIgBAAQACAdAAAWQAAAoACApIgUAAQACgnAAgrQAAgrgCghIAXAAQAAAEAlA0QAmA2AFARIABAAQgCgeAAgUQAAgtgCggIAVAAQgCAhAAArQAAArACAng");
	this.shape_47.setTransform(255.5,21.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgKBPQABgnAAgrQAAgrgBghIAVAAQgBAiAAAqQAAArABAng");
	this.shape_48.setTransform(243.6,21.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgaBhIgOgEIgLgFIgGgFIgDgFIgBgKIABgIIABgFIACgDIACAAQACAAAEACIAJAFIAOAGQAJACAKAAQAHAAAFgCQAFgBAEgDQAEgDACgFQACgFAAgFQAAgHgEgEQgDgFgGgDIgMgHIgPgHIgOgIQgHgDgGgGQgGgHgDgIQgDgJAAgMQAAgNAEgKQAGgLAIgHQAIgGAMgEQAMgDAMAAIANABIANADIAKAEIAHADIACADIAAADIABAEIAAAGIAAAHIgBAFIgBADIgDABIgFgCIgJgFIgLgEQgHgCgJAAQgFAAgEABQgFACgDADQgEACgBAEQgBAEgBAEQABAHADAEQADAFAHADIALAHIAQAHIAOAIQAHAEAHAFQAFAHAEAIQADAIAAAMQAAAPgFALQgGALgKAIQgJAIgNADQgNAEgNAAQgKAAgJgBg");
	this.shape_49.setTransform(171.4,21.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgnBcQgRgFgLgMQgLgMgFgSQgGgTAAgZQAAgWAGgSQAGgTAMgNQALgMARgHQARgHAWAAQAWAAAQAGQARAFALAMQALAMAFASQAGASAAAZQAAAWgGATQgGATgLANQgMAMgRAHQgRAHgVAAQgXAAgQgGgAgWg8QgKAFgFAJQgGAJgDAMQgCAMAAANQAAAPACAMQADANAFAIQAGAJAJAFQAJAEAOAAQAOAAAJgFQAKgFAGgJQAGgJACgMQACgNAAgNQAAgOgCgMQgCgNgGgIQgFgJgKgFQgJgFgOAAQgOAAgJAGg");
	this.shape_50.setTransform(70.3,21.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAnBfIgFgBIgDgCIgCgDIgRgrIgGgMIgGgKQgDgDgFgCQgFgCgGAAIgMAAIAABIIAAADIgEACIgGABIgJAAIgKAAIgFgBIgEgCIgBgDIAAirQAAgHAEgCQADgDAFAAIAxAAIALAAIAJABQAMABAJAEQAJAEAGAHQAHAGADAJQADAIABAMQgBAJgCAIQgCAIgFAGQgFAGgGAFQgIADgIADIAIAFIAHAHIAGAKIAGAMIAQAlIADAIIAAAEIAAADIgDACIgGABIgMAAIgKAAgAgfgLIAUAAQAIAAAFgCQAGgCAFgEQAEgDABgFQACgFAAgGQAAgKgDgGQgFgHgKgCIgFgBIgKgBIgSAAg");
	this.shape_51.setTransform(52.4,21.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AAnBfIgGgBIgCgCIgCgDIgRgrIgGgMIgGgKQgEgDgEgCQgEgCgHAAIgMAAIAABIIAAADIgEACIgGABIgJAAIgJAAIgHgBIgCgCIgBgDIAAirQAAgHADgCQADgDAFAAIAxAAIAMAAIAIABQAMABAJAEQAJAEAHAHQAFAGAEAJQADAIAAAMQABAJgDAIQgDAIgEAGQgFAGgGAFQgIADgJADIAJAFIAHAHIAGAKIAFAMIARAlIACAIIABAEIgBADIgCACIgHABIgLAAIgKAAgAgfgLIAUAAQAIAAAFgCQAGgCAFgEQADgDACgFQADgFAAgGQAAgKgFgGQgEgHgJgCIgGgBIgKgBIgSAAg");
	this.shape_52.setTransform(35.5,21.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgnBcQgRgFgLgMQgLgMgFgSQgGgTAAgZQAAgWAGgSQAGgTAMgNQALgMARgHQARgHAWAAQAWAAAQAGQARAFALAMQALAMAFASQAGASAAAZQAAAWgGATQgGATgLANQgMAMgRAHQgRAHgVAAQgXAAgQgGgAgWg8QgKAFgFAJQgGAJgDAMQgCAMAAANQAAAPACAMQADANAFAIQAGAJAJAFQAJAEAOAAQAOAAAJgFQAKgFAGgJQAGgJACgMQACgNAAgNQAAgOgCgMQgCgNgGgIQgFgJgKgFQgJgFgOAAQgOAAgJAGg");
	this.shape_53.setTransform(16.2,21.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAtBfIgFgBIgEgCIgBgDIAAhMIhGAAIAABMIAAADIgDACIgGABIgKABIgJgBIgGgBIgDgCIgBgDIAAiyIABgCIADgCIAGgBIAJgBIAKABIAGABIADACIAAACIAABGIBGAAIAAhGIABgCIAEgCIAFgBIAKgBIAJABIAGABIADACIABACIAACyIgBADIgDACIgGABIgJABIgKgBg");
	this.shape_54.setTransform(-3.4,21.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AA5BfIgGAAIgDgCIgCgDIgMgmIhGAAIgMAlIgCADIgDACIgGABIgLABIgKgBQgEAAgBgCQgBgCAAgDIACgIIA6inIACgEQABgBAAAAQAAAAABgBQABAAAAAAQABAAABAAIAHgBIAMgBIAMABIAIABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIABAEIA7CnIACAJQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBACgFAAIgLABIgMgBgAgcAWIA1AAIgahQg");
	this.shape_55.setTransform(-22,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17,p:{x:153.4}},{t:this.shape_16,p:{x:167.2}},{t:this.shape_15,p:{x:186}},{t:this.shape_14,p:{x:202.5}},{t:this.shape_13,p:{x:218.6}},{t:this.shape_12},{t:this.shape_11,p:{x:244.6}},{t:this.shape_10,p:{x:258.7}},{t:this.shape_9,p:{x:278.7}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:185.4}},{t:this.shape_5,p:{x:207.5}},{t:this.shape_4},{t:this.shape_3,p:{x:244.2}},{t:this.shape_2,p:{x:258.7}},{t:this.shape_1,p:{x:274}},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_16,p:{x:81.9}},{t:this.shape_15,p:{x:100.7}},{t:this.shape_14,p:{x:117.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_10,p:{x:173.4}},{t:this.shape_9,p:{x:193.4}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_6,p:{x:254.6}},{t:this.shape_5,p:{x:276.7}},{t:this.shape_19},{t:this.shape_3,p:{x:313.4}},{t:this.shape_2,p:{x:327.9}},{t:this.shape_1,p:{x:343.2}},{t:this.shape_18}]},8).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_17,p:{x:91.3}},{t:this.shape_16,p:{x:105.1}},{t:this.shape_15,p:{x:123.9}},{t:this.shape_14,p:{x:140.4}},{t:this.shape_13,p:{x:156.5}},{t:this.shape_49},{t:this.shape_11,p:{x:182.5}},{t:this.shape_10,p:{x:196.6}},{t:this.shape_9,p:{x:216.6}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.4,0,171.2,40.6);


(lib.ANUALBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AF8AAQAAB2hwBUQhuBTieAAQidAAhvhTQhvhUAAh2QAAh1BvhUQBvhTCdAAQCeAABuBTQBwBUAAB1g");
	this.shape.setTransform(38,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AkMDKQhvhUAAh2QAAh1BvhTQBwhUCcAAQCdAABwBUQBvBTAAB1QAAB2hvBUQhwBTidAAQicAAhwhTg");
	this.shape_1.setTransform(38,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,78,59);


(lib.mc_login = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var txt_user = document.getElementById("txt_user");
		txt_pass.setAttribute("type", "password");
		this.boton.on("click", onLogin.bind(this));
		
		
		function onLogin(e){
			var txt_user = document.getElementById("txt_user").value;
			var txt_pass = document.getElementById("txt_pass").value;
			
			if (txt_user == "sergio" && txt_pass == "123")
			{
				this.parent.addChild(new lib.bienve());
				this.parent.removeChild(this);
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape.setTransform(298.7,182.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjBQIgFAAIgEgCIgDgEIgEgHIgmhGIgGgMIgFgMIgBAAIABAOIAAAOIAABMIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIABABIAAB0IgBADIgCACIgCACIgDAAgAAFg5IgGgEIgGgEQgDgCgDAAQgEAAgCADQgBACAAAEIgBABIgBABIgCAAIgDAAIgEAAIgBgDQAAgFABgEIAEgGIAGgEQAEgBAEAAQAFAAAEACIAGAEIAGADQADACADAAQADAAACgCQACgCAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAJgFAFQgFAFgJAAQgFAAgEgBg");
	this.shape_1.setTransform(286.4,181.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIABAEIgBACIgBACIgBABIgBAAIgqAAIAAAtIAxAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_2.setTransform(275.4,182.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgCIABgCIABAAIAEACIAHADIAJAEQAGACAHAAQAEAAAFgCIAIgEIAFgHQABgDAAgGQAAgFgCgEIgHgGIgJgGIgJgFIgLgEQgFgDgEgEQgEgEgCgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIABIAHADIAEADIABABIAAACIABABIAAAEIAAADIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgCgGAAQgEAAgEACIgHAEQgCADgBADQgCADAAADQAAAGADADIAGAHIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAJgDAIQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_3.setTransform(265.6,182.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_4.setTransform(255.3,182.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhA/IgEAAIgDAAIgBgBIgBgCIgLgeIgFgKQgCgEgDgDQgDgDgDgCQgEgBgGAAIgMAAIAAA2IAAABIgBABIgCAAIgFAAIgEAAIgCAAIgCgBIAAgBIAAh0QAAgFACgBIAEgCIAbAAIAIABIAFAAQAHABAFAEQAGACAEAEQAEAEACAGQABAFAAAHQAAAHgBAEQgCAFgDAEIgIAHIgKADIAGAEIAEAFIAFAHIADAJIAMAbIACAGIAAACIAAABIgBABIgDAAIgFAAgAgZgGIARAAQAGAAAEgCQAGgBACgDQAEgDACgEQABgEAAgEQAAgIgDgFQgEgFgIgCIgEgBIgIAAIgPAAg");
	this.shape_5.setTransform(244.5,182.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBAAIgBgCIgBgCIAAgDIAAgEIABgCIABgBIABgBIBXAAIABABIABABIABACIAAAEIAAADIgBACIgBACIgBAAIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_6.setTransform(233.7,182.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIABABIAAB0IgBAEIgCACIgCABIgDAAg");
	this.shape_7.setTransform(222.4,182.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA9QgKgFgHgIQgHgIgDgMQgEgMABgQQAAgNADgNQAEgMAHgIQAHgJALgFQALgEANAAQAPAAAKAEQAKAEAHAJQAHAHADAMQADAMAAAQQABAOgEAMQgEAMgGAJQgIAIgLAGQgKAEgOAAQgPAAgKgEgAgRguQgHAFgFAGQgEAHgDAJQgBAJAAAKQAAALABAJQACAJAFAHQAEAHAHADQAIAFAKAAQALAAAHgFQAIgEAEgHQAFgHACgJQACgJAAgKQAAgKgCgJQgCgJgFgIQgEgGgHgEQgIgEgLAAQgKAAgHAEg");
	this.shape_8.setTransform(209.3,182.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_9.setTransform(197.6,182.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZA8QgKgEgHgHQgHgJgDgMQgDgMAAgQQAAgOADgMQAEgMAHgJQAIgIAKgEQALgFANAAQAOAAALAEQAKAEAHAIQAHAJADALQADAMAAAPQAAAOgDANQgEAMgGAJQgIAJgLAEQgKAFgOAAQgPAAgKgFgAgRguQgHAEgFAHQgFAHgCAJQgBAKAAAJQAAAKABAKQACAJAFAHQAEAHAHAEQAIADAKABQALgBAHgEQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgKQgCgJgEgHQgFgGgHgEQgIgEgLAAQgKAAgHAEg");
	this.shape_10.setTransform(299.4,140.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_11.setTransform(290.3,140.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAhA/IgEAAIgCAAIgCgCIgBgCIgMgdIgEgJQgCgFgDgDQgDgDgEgCQgEgCgFAAIgLAAIAAA2IgBACIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgCIAAh0QAAgDACgCIAEgCIAbAAIAIABIAEAAQAIACAGADQAFACAEAFQADAEACAFQACAGABAGQAAAGgCAFQgCAGgDADIgIAHIgKAEIAGADIAFAFIADAHIAFAIIALAcIABAGIABABIAAACIgCABIgCAAIgFAAgAgYgGIAQAAQAHAAADgCQAFgBAEgDQADgDABgEQACgEAAgFQAAgGgEgGQgDgFgIgCIgEgBIgIAAIgOAAg");
	this.shape_12.setTransform(282.8,140.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuBAIgEAAIgDgBIgCgBIgBgBIgLgfIgzAAIgLAeIAAACIgBABIgDABIgFAAIgEAAIgDgBIgBgCIABgEIArh0IABgCIABgBIAEgBIAEAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_13.setTransform(271.2,140.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTA+QgJgDgGgGQgGgHgDgJQgEgJAAgLIAAhOIABAAIABgBIADgBIAEAAIAEAAIACABIACABIAAAAIAABMQAAAJACAGQACAHAEAFQAEAEAGACQAGACAGAAQAHAAAGgCQAGgCAEgEQAEgFACgGQACgHAAgIIAAhNIAAAAIACgBIACgBIAEAAIAEAAIADABIABABIABAAIAABNQAAALgEAJQgDAJgGAHQgHAGgJADQgJADgKAAQgLAAgIgCg");
	this.shape_14.setTransform(258.9,140.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEACIABACIAAABIABADIAAADIAAACIgBADIgBACIgBAAIgDgBIgGgEIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_15.setTransform(247.9,140.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA+QgJgDgGgGQgGgHgDgJQgEgJAAgLIAAhOIABAAIABgBIADgBIAEAAIAEAAIACABIACABIAAAAIAABMQAAAJACAGQACAHAEAFQAEAEAGACQAGACAGAAQAHAAAGgCQAGgCAEgEQAEgFACgGQACgHAAgIIAAhNIAAAAIACgBIACgBIAEAAIAEAAIADABIABABIABAAIAABNQAAALgEAJQgDAJgGAHQgHAGgJADQgJADgKAAQgLAAgIgCg");
	this.shape_16.setTransform(236.9,140.8);

	this.txt_pass = new lib.an_TextInput({'id': 'txt_pass', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txt_pass.setTransform(362.2,182,1,1,0,0,0,50,11);

	this.txt_user = new lib.an_TextInput({'id': 'txt_user', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txt_user.setTransform(362.2,140,1,1,0,0,0,50,11);

	this.boton = new lib.Boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(301.1,242.1,1,1,0,0,0,63.5,14.2);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boton},{t:this.txt_user},{t:this.txt_pass},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190,126,222.7,130.3);


(lib.ictrimestral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var pagoinicial = 0;
		
		var TAZARECARGOS = 0;
		
		var cuenta4 = parseInt("0");
		
		var parcialidad = 0;
		
		var importeparcializar = 0;
		
		var cuenta3 = 0;
		
		//var cuenta4 = 0;
		
		
		var INTERES = 0;
		
		var TAZARECARGOS = 0;
		
		var TOTALGENERAL = 0;
		var inversion = 0;
		
		var AÑOS = 0;
		  var  k = 4;
		
		
		var inversion = document.getElementById("inversion");
		
		var INTERES = document.getElementById("INTERES");
		
		var AÑOS = document.getElementById("AÑOS");
		
		
		
		this.boton.on("click", onLogin.bind(this));
		
		//this.boton.on("click", onLogin2.bind(this));
		
		function onLogin(e) {
		
			//this.parcialidad.text = INTERES ;
		
		
		
			
		//var TAZARECARGOS = TAZARECARGOS.text ;
		
			
		
		
		
			//CF=C(1+i)n   Cf = Ci · (1 + r/k)k·t
		
		var inversion = document.getElementById("inversion").value;
			
		var INTERES = document.getElementById("INTERES").value;
			
		var AÑOS = document.getElementById("AÑOS").value;
			
			
			this.parcialidad.text = document.getElementById("INTERES").value/100;
			//this.cuenta4.text = document.getElementById("INTERES").value;
			//this.cuenta4.text =  Math.pow(1 + this.parcialidad.text, -AÑOS);
				//this.cuenta4.text = Math.pow(this.parcialidad.text,-AÑOS) ;
				
				//Cf = Ci · (1 + r/k)k·t
			
			this.cuenta4.text =  Math.pow(1 + this.parcialidad.text/k, AÑOS*k);
			this.TOTALGENERAL.text =  Math.round(this.cuenta4.text*inversion);
		
			this.INVIERTES.text = document.getElementById("inversion").value ;
			this.GANANCIA.text = this.TOTALGENERAL.text-this.INVIERTES.text ;
			
			
		//CF=C(1+i)n,
		//this.cuenta3.text= this.cuenta2.text*this.cuenta4.text; 
			
		
		//this.cuenta3.text = this.cuenta2.text / document.getElementById("INTERES").value;
		
			// formulaexcel  (importe parcializar*tazarecargos)/(1-POTENCIA((1+tazarecargos),-1))
		
		this.cuenta5.text =  Math.pow(1 + this.TAZARECARGOS.text, -INTERES);
		
			this.cuenta6.text = 1-this.cuenta5.text;
			
			this.cuenta8.text = this.importeparcializar.text*this.TAZARECARGOS.text;
			this.PARCIALIDADESDE.text = this.cuenta8.text/this.cuenta6.text;
			
		//this.cuenta3.text= cuenta2.text/INTERES;
		
		this.PARCIALIDADESDE.text = Math.round(this.PARCIALIDADESDE.text);
		
		this.TOTALGENERAL.text = this.parcialidad.text*this.PARCIALIDADESDE.text;
			
		//Math.round(IMPORTEAPARCIALIZAR*TAZARECARGOS/(1-Math.pow(1+TAZARECARGOS,-INTERES)) )
		
			
		
		//var txt_pass = this.cuenta.text= document.getElementById("txt_user").value*0.20;
		
		
			//this.parent.addChild(new lib.bienve());
			
		//this.parent.removeChild(this);
		
		
		
			
		//this.gotoAndPlay(2);
		
		
			
		//this.gotoAndStop(2);
		
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Capa_1
	this.boton = new lib.Boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(-54.4,165.9);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape.setTransform(195.9,-140.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_1.setTransform(185.5,-138.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgnA3IAAhtIAkAAIAAARQAKgKAJgEQAIgDAIAAIAEAAIAEAAIAAAiIgDAAIgIgBIgIAAIgNAAIgLADIAABJg");
	this.shape_2.setTransform(174.8,-138.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgQA/QgKgIAAgUIAAgzIgOAAIAAgXIAOAAIAAggIAjAAIAAAgIAgAAIAAAXIggAAIAAAmIAAALQAAAEABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAYIgMACIgPABQgUAAgKgJg");
	this.shape_3.setTransform(164.6,-139.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_4.setTransform(154.4,-138.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQARgQAcAAQAaAAANANQAOAOAAAZIAAAMIhPAAQAAAMAJAHQAKAHAQAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAGgBALIAsAAQAAgLgGgFQgFgGgKAAQgJAAgHAFg");
	this.shape_5.setTransform(141.7,-138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AA2A4IAAg3IAAgMQAAgGgCgDQgCgEgEgBQgDgCgHAAQgEAAgEACIgLAFIAABMIgiAAIAAg3IAAgMIgCgJQgCgEgEgBQgDgCgHAAQgEAAgGACIgIAFIAABMIgkAAIAAhsIAkAAIAAAMQAJgHAIgEQAIgEAKAAQALAAAHAEQAJAFAFAKQAKgJAKgFQAKgFAJAAQASAAAJAKQAKALgBAUIAABGg");
	this.shape_6.setTransform(124.5,-138.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_7.setTransform(110.4,-140.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgnA3IAAhtIAkAAIAAARQAKgKAJgEQAIgDAIAAIAEAAIAEAAIAAAiIgDAAIgIgBIgIAAIgNAAIgLADIAABJg");
	this.shape_8.setTransform(102.7,-138.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgQA/QgKgIAAgUIAAgzIgOAAIAAgXIAOAAIAAggIAjAAIAAAgIAgAAIAAAXIggAAIAAAmIAAALQAAAEABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAYIgMACIgPABQgUAAgKgJg");
	this.shape_9.setTransform(92.5,-139.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_10.setTransform(74,-138.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgrBEQgQgPAAgcQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAcgPAPQgRAPgcABQgcgBgPgPgAgIgGQgEABgDAEQgDADgDAGQgCAHAAAKQABAKABAGQACAHADADQADAEAFACQAEACAFAAIAJgBQAEgCADgEQADgFACgFQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgCgFAAQgEAAgEACgAgXgtIAYgmIAhAAIAAACIghAkg");
	this.shape_11.setTransform(60,-140.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_12.setTransform(49.7,-140.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_13.setTransform(40.5,-138.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_14.setTransform(27.5,-138.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_15.setTransform(15.2,-138.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_16.setTransform(5.8,-140.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_17.setTransform(-1,-140.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_18.setTransform(-11.5,-138.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgQA/QgKgIAAgUIAAgzIgOAAIAAgXIAOAAIAAggIAjAAIAAAgIAgAAIAAAXIggAAIAAAmIAAALQAAAEABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAYIgMACIgPABQgUAAgKgJg");
	this.shape_19.setTransform(-22.4,-139.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_20.setTransform(-30.3,-140.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_21.setTransform(-40.4,-136.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_22.setTransform(-54.8,-138.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_23.setTransform(-66.8,-138.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAHQAJAHARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAGgCALIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_24.setTransform(-86.3,-138.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAKgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLAAQgTAAgMgPgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgBAEgEIAAg1IgIgCIgIgBQgMABgHAIg");
	this.shape_25.setTransform(-100.3,-140);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgQAPgcAAQgbAAgQgPgAgIgfQgEABgDAEQgEAEgCAGQgBAHAAAJQgBAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_26.setTransform(-120.7,-138.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAKgEQAJgEAKAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKAAQgUAAgMgPgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgBAEgEIAAg1IgIgCIgHgBQgNABgHAIg");
	this.shape_27.setTransform(-134.9,-140);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_28.setTransform(-148.4,-138.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_29.setTransform(-158.7,-140.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgnA3IAAhtIAkAAIAAARQAKgKAJgEQAIgDAIAAIAEAAIAEAAIAAAiIgDAAIgIgBIgIAAIgNAAIgLADIAABJg");
	this.shape_30.setTransform(-166.5,-138.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQARgQAcAAQAaAAANANQAOAOAAAZIAAAMIhPAAQAAAMAJAHQAKAHAQAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAGgBALIAsAAQAAgLgGgFQgFgGgKAAQgJAAgHAFg");
	this.shape_31.setTransform(-178.7,-138.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_32.setTransform(-192,-136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_33.setTransform(99.2,-164.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_34.setTransform(87.8,-165.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_35.setTransform(77.5,-164.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_36.setTransform(64.8,-164.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_37.setTransform(51,-164.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAQgFAAgFACg");
	this.shape_38.setTransform(37.3,-162.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_39.setTransform(19.4,-164.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_40.setTransform(1.9,-164.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_41.setTransform(-10.7,-164.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_42.setTransform(-29.3,-164.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_43.setTransform(-42,-166.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_44.setTransform(-53,-164.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_45.setTransform(-65.2,-164.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_46.setTransform(-76.5,-165.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_47.setTransform(-88.1,-164.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_48.setTransform(-100.7,-166.2);

	this.GANANCIA = new cjs.Text("", "20px 'Calibri'", "#00CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 26;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(52.3,-4.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_49.setTransform(39.1,8.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJgBgMQABgKACgJQAEgJAFgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAHADAEAGQAFAFADAIQACAIgBAIIAAADQABADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIAAANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgCAFABAFIAuAAQABgMgGgIQgHgHgLAAQgFAAgFACg");
	this.shape_50.setTransform(13.5,12.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_51.setTransform(3.1,10.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAEAAIAEABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_52.setTransform(-12.1,10.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_53.setTransform(-20.5,10.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_54.setTransform(-28.1,10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_55.setTransform(-40.1,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIgBgBIgLgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIABgEIAqh0IACgCIABgBIAEgBIAEAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_56.setTransform(-52.3,10.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_57.setTransform(-64.5,10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_58.setTransform(-76.7,10.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgPA9QgLgGgIgIQgIgIgEgMQgEgLAAgPQAAgOAEgNQAFgLAIgJQAIgIAMgGQALgEANAAIAOABIALADIAJAEIAEADIACADIAAAFIAAADIAAACIgBACIgCAAIgDgCIgIgEIgLgEQgGgCgJAAQgKAAgIAEQgIAEgGAHQgGAGgDAKQgDAJAAAKQAAAMAEAJQADAJAGAHQAGAGAIAEQAHADAKAAIAMgCQAGgBAFgCIAAglIgdAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgFIAAgCIABgDIABgBIABAAIAoAAIACAAIACABIACADIAAACIAAAwIgBAEIgDADIgIAEIgJADIgKABIgJABQgOAAgMgEg");
	this.shape_59.setTransform(-89.1,10.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgPAtQgIgDgFgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAFgHAIgDQAIgDAJAAQAKAAAIADQAGADAFAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAGgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgMABQgJAAgJgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_60.setTransform(-104.6,12.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_61.setTransform(-115.1,10.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgDgDQgEgDgDgFQgCgFAAgHQAAgHADgGQADgFAFgDQAHgDAIgCQAIgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgEABIgJADIgGADIgDACIgCgBIgBgBIgBgCIAAgDIAAgDIADgDIAEgDIAHgDIAJgCIAJgBQAKAAAHACQAGACAEAEQAEAEADAGQABAGAAAJIAAA6IAAACIgDABIgEAAIgEAAIgCgBIgBgCIAAgJQgFAGgIAEQgHADgHAAQgGAAgGgCgAgEAFIgJADQgCACgCAEQgCADABAEQgBAGAFAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgNAAIgLABg");
	this.shape_62.setTransform(-129.6,12.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_63.setTransform(-139.3,12.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_64.setTransform(-149.8,12.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgFgDIgEgCIgCgDIAAgFIAAgDIAAgCIABgBIABAAIAEABIAFADIAHADQAEABAGAAIAHgBIAFgCQACgCACgDIABgGQAAgEgBgCIgGgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAGACIAGACIACABIABACIABABIAAACIAAACIAAADIAAACIgBABIgBABIgCgBIgFgDIgGgCIgIgBIgGABQgEABgCACIgDAEIAAAFQAAAEABACIAGAFIAFADIAJADIAIAEIAHAEQAEADACAEQABAEAAAGQAAAHgCAFQgDAFgEAEQgFADgGACQgGACgIAAIgIgBg");
	this.shape_65.setTransform(-163.4,12.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgDgJAAgMQAAgKADgJQAEgJAFgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAHADAEAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIAAANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgCAFABAFIAuAAQABgMgGgIQgHgHgLAAQgFAAgFACg");
	this.shape_66.setTransform(-172.3,12.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_67.setTransform(-182.5,12.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgJACIgNABQgKAAgIgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_68.setTransform(-192.7,12.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgCgBIgCgBIAAgBIAAhXIAAgBIACgBIACgBIADAAIAEAAIACABIABABIABABIAABXIgBABIgBABIgCABIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_69.setTransform(-200,10.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_70.setTransform(-205.8,11.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgEBEIgHgCIgHgGIgHgGIAAALIAAABIgCABIgCABIgEAAIgDAAIgCgBIgCgBIAAgBIAAiCIABgCIABAAIADgBIADAAIAFAAIACABIABAAIAAACIAAA1IAIgHIAIgEIAHgDIAGgBQAKAAAGAEQAHAEAEAHQAEAFACAJQACAIAAAKQAAALgCAJQgDAJgFAHQgFAGgGAEQgIADgJAAIgGgBgAgEgMIgFADIgHAFIgIAIIAAAjQAHAHAHAFQAGAEAFAAQAGAAAEgDQAFgDADgFIADgLIABgLIgBgOQAAgGgDgEQgDgFgEgDQgEgDgHAAIgFABg");
	this.shape_71.setTransform(-213.9,10.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgTAtQgIgDgFgGQgGgHgCgIQgDgJAAgLQAAgKADgJQADgJAFgHQAGgGAIgEQAJgDAKAAQALAAAIADQAIADAFAGQAGAGACAJQADAJAAALQAAAKgDAJQgDAJgFAGQgGAHgIADQgJAEgKAAQgLAAgIgDgAgLgfQgFACgEAFQgDAEgCAHQgBAGAAAHQAAAHABAGQABAGAEAFQADAFAFADQAFADAHAAQAHAAAFgDQAFgDAEgEQADgFACgGQABgGAAgIQAAgGgBgHQgBgGgEgFQgDgEgFgDQgFgDgIAAQgGAAgFADg");
	this.shape_72.setTransform(-224.7,12.4);

	this.INVIERTES = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 26;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(51.2,39);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_73.setTransform(39.1,51.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgwAAIAAAnIApAAIACABIABABIAAACIAAAEIAAACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_74.setTransform(22.5,51.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_75.setTransform(12.4,51.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgDIABgBIABAAIAEABIAHAEIAJAEQAGACAHgBQAEABAFgCIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgHIgJgFIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgGAFgFQAFgEAHgCQAHgCAIAAIAIAAIAIADIAHACIAEACIABACIAAABIABADIAAACIAAADIgBADIgBACIgBAAIgDgBIgGgEIgIgDQgEgCgGABQgEgBgEACIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAIgDAHQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_76.setTransform(2.9,51.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_77.setTransform(-4.2,51.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_78.setTransform(-11.6,51.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgCIgBgCIgLgdIgFgJQgCgFgDgDQgDgDgDgCQgEgCgGAAIgMAAIAAA2IAAACIgBABIgCABIgFAAIgEAAIgCgBIgCgBIAAgCIAAh0QAAgEACgBIAEgCIAbAAIAIABIAFABQAHABAFACQAGADAEAFQAEAEACAFQABAGAAAGQAAAGgBAFQgCAGgDADIgIAHIgKAEIAGADIAEAFIAFAHIADAIIAMAcIACAFIAAACIAAACIgBABIgDABIgFAAgAgZgGIARAAQAGAAAEgBQAGgCACgDQAEgDACgEQABgDAAgGQAAgGgDgGQgEgFgIgCIgEgBIgIgBIgPAAg");
	this.shape_79.setTransform(-21.4,51.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgxAAIAAAnIAqAAIACABIAAABIABACIAAAEIAAACIgBACIAAABIgCAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_80.setTransform(-31.9,51.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAABAIgCAAIgDAAIgCgBIgCgBIgBAAIAAgCIgqh0IAAgEIAAgCIADgBIAGAAIAEAAIACABIACABIABACIAjBpIAjhpIABgCIABgBIADgBIAFAAIAEABIADAAIAAADIgBADIgpB0IgBACIgCABIgDABIgFAAg");
	this.shape_81.setTransform(-42.8,51.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABLIgBACIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgCIAAhzQAAgEACgBQACgCADgBIAIAAIAFABIAEACIADADIADAFIAdA3IAFAKIAFAJIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACgBIAEAAIAEAAIADABIABABIABACIAABzIgBADIgCACIgCACIgDABg");
	this.shape_82.setTransform(-54.9,51.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_83.setTransform(-63.9,51.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAHADIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEADIABABIAAABIABACIAAAEIAAACIgBADIgBACIgBAAIgDgCIgGgDIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_84.setTransform(200.1,-31.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgYA8QgLgEgHgHQgGgJgEgMQgDgMgBgQQAAgOAFgMQADgMAHgJQAHgIALgEQALgFAOAAQAOAAAKAEQAKAEAHAJQAHAHADAMQAEAMAAAPQAAAOgEANQgDAMgIAJQgHAJgLAEQgKAFgOAAQgPAAgJgFgAgRguQgIAEgEAHQgFAHgCAJQgCAJAAAKQAAAKACAKQACAJAEAHQAFAHAHADQAIAFAKAAQALgBAHgEQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgKQgCgJgEgHQgFgGgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_85.setTransform(188.9,-31.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAjBQIgFAAIgEgCIgDgEIgEgHIgmhGIgGgMIgFgMIgBAAIABAOIAAAOIAABMIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIABABIAAB0IgBADIgCACIgCACIgDAAgAAFg5IgGgEIgGgEQgDgCgDAAQgEAAgCADQgBACAAAEIgBABIgBABIgCAAIgDAAIgEAAIgBgDQAAgFABgEIAEgGIAGgEQAEgBAEAAQAFAAAEACIAGAEIAGADQADACADAAQADAAACgCQACgCAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAJgFAFQgFAFgJAAQgFAAgEgBg");
	this.shape_86.setTransform(175.9,-32.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_87.setTransform(163.7,-31.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgtBDIgDgBIgDgBIAAgBIABgCIBXh9IABgBIACgBIACgBIADAAIAEAAIACABIABACIgBACIhYB9IgBABIgBABIgDABIgDAAgAAZA+QgFgCgEgEQgDgEgCgGQgBgGAAgIQAAgHABgGQADgHACgEQAEgEAFgDQAGgBAGAAQAIAAAGABQAEADAEAEQADAFABAGQABAGAAAGQAAAIgBAGQgCAGgDAFQgDAEgGACQgFADgHAAQgIAAgEgDgAAfALIgEAEIgCAHIgBAJIABALQAAAFACACQACADADABIAFABQAEAAADgCIAEgEIACgHIABgJIgBgKIgDgHQgBgDgCgBQgDgCgEAAQgDAAgDACgAgxAAQgFgCgDgEQgDgEgCgHQgBgGgBgHQABgIABgGQACgGADgEQADgFAGgCQAFgDAHAAQAIAAAFADQAFADADAEQAEAFABAGQABAFAAAHQAAAIgBAGQgCAGgEAEQgDAFgGACQgEACgIAAQgHAAgFgCgAgrgzQgCABgBADIgDAGIAAAKIABALQAAAEACADQACADACABIAGABQAEAAADgCQACgBABgDQACgDAAgEIACgJIgCgKIgCgHQgCgDgCgBQgDgCgEAAQgDAAgDACg");
	this.shape_88.setTransform(36.2,-64.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_89.setTransform(39.1,96.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgRAuQgFgCgFgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgGgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEABAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_90.setTransform(34,-29.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-32,1,1,0,0,0,50,11);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAHADQAHADAGAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQAAgMgGgIQgFgHgMAAQgFAAgFACg");
	this.shape_91.setTransform(15.1,-62.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_92.setTransform(4.7,-64.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgDIABgBIABAAIAEABIAHAEIAJAEQAGACAHgBQAEABAFgCIAIgEIAFgGQABgEAAgFQAAgGgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgFAAgIQAAgIADgGQADgGAFgFQAFgEAHgCQAHgCAIAAIAIAAIAIADIAHACIAEACIABACIAAACIABACIAAACIAAADIgBADIgBACIgBAAIgDgBIgGgEIgIgDQgEgCgGABQgEgBgEACIgHAEQgCACgBADQgCAEAAAEQAAAFADAEIAGAGIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAIgDAHQgEAIgFAEQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_93.setTransform(-9.4,-64.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_94.setTransform(-18.5,-64.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgCgBIgCgCIgBgCIgMgdIgEgJQgCgFgDgDQgDgDgEgBQgDgDgGAAIgLAAIAAA2IgBACIgBABIgDABIgEAAIgEAAIgDgBIgBgBIAAgCIAAh0QAAgEACgBIAEgBIAbAAIAIAAIAEABQAIABAGACQAFADAEAFQADADACAGQACAFAAAHQAAAGgBAGQgCAFgDADIgIAHIgKAEIAGADIAFAFIADAHIAFAIIALAdIABAEIABACIAAACIgCABIgCABIgFAAgAgYgGIAQAAQAHAAAEgBQAFgCADgDQADgDABgEQACgDAAgGQAAgGgEgGQgDgFgHgCIgFgBIgIgBIgOAAg");
	this.shape_95.setTransform(-28.7,-64.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIABAEIgBACIgBACIgBABIgBAAIgqAAIAAAtIAxAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_96.setTransform(-39.1,-64.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgBIABgCIABAAIBXAAIABAAIABACIABABIAAAEIAAADIgBACIgBABIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_97.setTransform(-49.2,-64.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABLIgBACIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgCIAAhzQAAgEACgBQACgCADAAIAIAAIAFAAIAEACIADADIADAFIAdA3IAFAJIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACAAIAEAAIAEAAIADAAIABABIABACIAABzIgBADIgCACIgCACIgDABg");
	this.shape_98.setTransform(-60.5,-64.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_99.setTransform(-69.5,-64.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgCIAAgyIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA8IAAACIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgCIAAhWIAAgCIACgBIACAAIAEgBIADABIACAAIABABIABACIAAAMQAHgJAIgEQAHgDAGgBQAJAAAGADQAGADAEAFQAEAFABAHQACAHAAAJIAAA0IgBACIgBABIgCABIgEAAg");
	this.shape_100.setTransform(-81.7,-62.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_101.setTransform(-92.2,-62.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgEgDQgDgDgDgFQgCgFAAgHQAAgHADgGQADgFAFgDQAGgDAJgCQAIgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgEABIgJADIgGADIgDACIgCgBIgBgBIAAgCIAAgDIAAgDIACgDIAEgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEACAGQABAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgGAGgIAEQgGADgIAAQgGAAgGgCgAgEAFIgIADQgEACgBAEQgCADABAEQAAAGAEAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgNAAIgLABg");
	this.shape_102.setTransform(-107,-62.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-63,1,1,0,0,0,50,11);

	this.TOTALGENERAL = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 26;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(52.3,83.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_103.setTransform(39.1,-93.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgDgJgBgMQABgKADgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAFACQAGACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgNABQgJAAgJgDgAgIghQgFADgDADIgFAJQgCAFAAAFIAvAAQAAgMgGgIQgGgHgLAAQgFAAgEACg");
	this.shape_104.setTransform(14.8,-92.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_105.setTransform(4.4,-94.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgaBAIgEgCQgCgCAAgEIAAh0IAAAAIACgBIACgBIAEAAIAFAAIACABIABABIABAAIAABtIAsAAIACAAIABABIAAADIABADIgBADIAAADIgBABIgCABg");
	this.shape_106.setTransform(-8.5,-94.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_107.setTransform(-19.2,-94.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgCIAAhsIgkAAIgBAAIgBgBIgBgDIAAgDIAAgDIABgDIABgBIABgBIBXAAIABABIABABIABADIAAADIAAADIgBADIgBABIgBAAIgkAAIAABsIAAACIgBABIgDAAIgEAAg");
	this.shape_108.setTransform(-29.9,-94.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_109.setTransform(-37.3,-94.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgeA/IgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAIAbAAIAHABIAJABQAFACAFADQAFADAEAEQAEAFACAGQACAFAAAHQAAAKgDAHQgEAIgFAFQgGAFgJADQgIADgLAAIgOAAIAAAtIgBACIgBABIgCAAIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgDACgFQACgGAAgFQAAgIgDgFQgDgFgEgDIgJgDIgIAAIgPAAg");
	this.shape_110.setTransform(-44.6,-94.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_111.setTransform(-55.9,-94.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_112.setTransform(-66.9,-94.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgCIAAgyIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA8IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgCIAAhXIAAgBIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAANQAHgJAIgEQAHgEAGABQAJAAAGACQAGADAEAFQAEAFABAHQACAGAAAKIAAA0IgBACIgBABIgCAAIgEAAg");
	this.shape_113.setTransform(-82.1,-92.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_114.setTransform(-92.6,-92.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgFgDIgEgCIgCgDIAAgFIAAgDIAAgCIABgBIABAAIAEABIAFADIAHADQAEABAGAAIAGgBIAGgCQACgCACgDIABgGQAAgEgCgCIgFgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAGACIAGACIACABIABACIABABIAAACIAAACIAAADIAAACIgBABIgBABIgCgBIgFgDIgGgCIgIgBIgHABQgCABgDACIgDAEIgBAFQAAAEACACIAGAFIAGADIAIADIAIAEIAHAEQAEADACAEQABAEAAAGQAAAHgCAFQgDAFgEAEQgFADgGACQgHACgHAAIgIgBg");
	this.shape_115.setTransform(-106.2,-92.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgDgJAAgMQAAgKADgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAGADAFAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAGgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgMABQgKAAgHgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_116.setTransform(-115.1,-92.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_117.setTransform(-123.6,-93.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgRAvIgEAAIgCAAIgBgBIgBgCIAAhXIAAgBIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAAOQADgGAEgDIAFgGQACgCADAAIAGAAIADAAIADAAIADABIACABIABABIAAABIABACIAAAEIgBADIAAADIgBABIgBAAIgCAAIgCgBIgDgBIgEgBIgFACIgFADIgEAGIgHAJIAAA4IAAACIgBABIgDAAIgEAAg");
	this.shape_118.setTransform(-129.6,-92.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAHADAFAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgCAFABAFIAuAAQABgMgHgIQgFgHgMAAQgFAAgFACg");
	this.shape_119.setTransform(-138.7,-92.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDAAIgBgBIAAgCIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIABABIAAABIAABXIAAACIgBABIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQADgCAEAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_120.setTransform(-145.9,-94.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAAAvIgEAAIgDAAIgCgCIgBgCIgehSIgBgCIAAgBIAAgBIAAgBIACgCIACAAIAEAAIAFAAIACABIACABIAAACIAYBHIABABIAAgBIAYhHIABgCIACgBIACgBIAEAAIAEAAIACAAIABACIABABIAAABIAAABIgBABIAAABIgeBSIgBADIgCABIgDAAIgFAAg");
	this.shape_121.setTransform(-152.8,-92.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgCIAAgyIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA8IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgCIAAhXIAAgBIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAANQAHgJAIgEQAHgEAGABQAJAAAGACQAGADAEAFQAEAFABAHQACAGAAAKIAAA0IgBACIgBABIgCAAIgEAAg");
	this.shape_122.setTransform(-162.5,-92.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDAAIgBgBIAAgCIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIABABIAAABIAABXIAAACIgBABIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_123.setTransform(-170,-94.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDAAIgBgBIAAgCIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIABABIAAABIAABXIAAACIgBABIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQADgCAEAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_124.setTransform(-179.1,-94.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgGgDIgDgCIgBgDIgBgFIAAgDIABgCIABgBIABAAIADABIAFADIAIADQAEABAFAAIAHgBIAFgCQADgCABgDIABgGQAAgEgBgCIgGgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAHACIAEACIAEABIABACIAAABIAAACIAAACIAAADIAAACIgBABIgBABIgDgBIgEgDIgGgCIgIgBIgGABQgEABgCACIgCAEIgBAFQAAAEACACIAEAFIAGADIAJADIAIAEIAHAEQADADACAEQACAEAAAGQAAAHgDAFQgCAFgFAEQgEADgHACQgGACgGAAIgJgBg");
	this.shape_125.setTransform(-185.3,-92.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-95,1,1,0,0,0,50,11);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_126.setTransform(20.5,96.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgwAAIAAAnIApAAIABABIACABIAAACIABAEIgBACIAAACIgCABIgBAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_127.setTransform(11.4,96.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_128.setTransform(1.5,96.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgxAAIAAAnIAqAAIACABIAAABIABACIAAAEIAAACIgBACIAAABIgCAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_129.setTransform(-7.6,96.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgBIgBgDIgLgdIgFgKQgCgEgDgDQgDgDgDgBQgFgCgFAAIgMAAIAAA2IAAABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCIAEgBIAbAAIAIAAIAFABQAHAAAFADQAGADAEAEQAEAEACAGQABAGAAAGQABAGgCAGQgCAEgDAEIgIAHIgKADIAGAEIAFAFIADAHIAEAJIAMAcIACAEIAAADIAAABIgBABIgDABIgFAAgAgZgGIARAAQAGAAAFgBQAEgCADgDQAEgDABgEQACgDAAgFQAAgIgDgFQgEgFgHgCIgFgBIgIgBIgPAAg");
	this.shape_130.setTransform(-17.7,96.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIAAADIAAADIAAACIgBABIgCABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_131.setTransform(-28.2,96.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_132.setTransform(-38.3,96.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBADIgCADIgCABIgDABg");
	this.shape_133.setTransform(-49.6,96.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_134.setTransform(-58.6,96.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAAAuIgDAAIgCgBIgBgBIAAgBIAAgkIghAAIgBAAIgBgCIgBgCIAAgDIAAgCIABgCIABgCIABAAIAhAAIAAgjIAAgCIABgBIACgBIADAAIADAAIACABIABABIABACIAAAjIAgAAIABAAIACACIAAACIABACIgBADIgBACIgBACIgBAAIggAAIAAAkIgBABIgBABIgCABIgDAAg");
	this.shape_135.setTransform(-70.5,96.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_136.setTransform(-83.5,96.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_137.setTransform(-94.2,96.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_138.setTransform(-104.9,96.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_139.setTransform(-112.3,96.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgeBAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAbAAIAHAAIAJABQAFABAFADQAFADAEAFQAEAEACAGQACAGAAAIQAAAJgDAIQgEAHgFAEQgGAGgJADQgIADgLAAIgOAAIAAAuIgBABIgBABIgCABIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgEACgFQACgEAAgGQAAgHgDgGQgDgFgEgCIgJgEIgIgBIgPAAg");
	this.shape_140.setTransform(-119.6,96.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_141.setTransform(-130.9,96.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_142.setTransform(-141.8,96.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_143.setTransform(-155.3,96.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_144.setTransform(-166,96.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_145.setTransform(-176.7,96.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgDgMgBgPQAAgOAFgMQADgNAHgIQAHgJALgFQALgEAOAAQAOAAAKAEQAKAEAHAIQAHAIADAMQAEAMAAAQQAAANgEANQgDAMgIAJQgHAIgLAGQgKAEgOAAQgPAAgJgEgAgRguQgIAEgEAHQgFAHgCAJQgCAKAAAJQAAALACAJQACAJAEAHQAFAHAHADQAIAEAKAAQALABAHgFQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgJQgCgKgEgGQgFgHgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_146.setTransform(-188.2,96.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_147.setTransform(-199.7,96.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#003366").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

	this.cuenta8 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta8.name = "cuenta8";
	this.cuenta8.lineHeight = 17;
	this.cuenta8.lineWidth = 78;
	this.cuenta8.parent = this;
	this.cuenta8.setTransform(195,-27.2);

	this.cuenta6 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta6.name = "cuenta6";
	this.cuenta6.lineHeight = 17;
	this.cuenta6.lineWidth = 78;
	this.cuenta6.parent = this;
	this.cuenta6.setTransform(195,35.8);

	this.cuenta5 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta5.name = "cuenta5";
	this.cuenta5.lineHeight = 17;
	this.cuenta5.lineWidth = 78;
	this.cuenta5.parent = this;
	this.cuenta5.setTransform(195,3.1);

	this.cuenta10 = new cjs.Text("", "20px 'Broadway'", "#FFFFFF");
	this.cuenta10.name = "cuenta10";
	this.cuenta10.lineHeight = 25;
	this.cuenta10.lineWidth = 78;
	this.cuenta10.parent = this;
	this.cuenta10.setTransform(96,141.2);

	this.parcialidad = new cjs.Text("", "20px 'Broadway'");
	this.parcialidad.name = "parcialidad";
	this.parcialidad.lineHeight = 25;
	this.parcialidad.lineWidth = 78;
	this.parcialidad.parent = this;
	this.parcialidad.setTransform(195,75);

	this.cuenta4 = new cjs.Text("", "20px 'Broadway'");
	this.cuenta4.name = "cuenta4";
	this.cuenta4.lineHeight = 25;
	this.cuenta4.lineWidth = 78;
	this.cuenta4.parent = this;
	this.cuenta4.setTransform(195,104.7);

	this.cuenta3 = new cjs.Text("", "13px 'Broadway'", "#FFFFFF");
	this.cuenta3.name = "cuenta3";
	this.cuenta3.lineHeight = 17;
	this.cuenta3.lineWidth = 78;
	this.cuenta3.parent = this;
	this.cuenta3.setTransform(182,158.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.inversion},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.TOTALGENERAL},{t:this.INTERES},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.AÑOS},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.INVIERTES},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.GANANCIA},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icmensual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var pagoinicial = 0;
		
		var TAZARECARGOS = 0;
		
		var cuenta4 = parseInt("0");
		
		var parcialidad = 0;
		
		var importeparcializar = 0;
		
		var cuenta3 = 0;
		
		//var cuenta4 = 0;
		
		
		var INTERES = 0;
		
		var TAZARECARGOS = 0;
		
		var TOTALGENERAL = 0;
		var inversion = 0;
		
		var AÑOS = 0;
		  var  k = 12;
		
		
		var inversion = document.getElementById("inversion");
		
		var INTERES = document.getElementById("INTERES");
		
		var AÑOS = document.getElementById("AÑOS");
		
		
		
		this.boton.on("click", onLogin.bind(this));
		
		//this.boton.on("click", onLogin2.bind(this));
		
		function onLogin(e) {
		
			//this.parcialidad.text = INTERES ;
		
		
		
			
		//var TAZARECARGOS = TAZARECARGOS.text ;
		
			
		
		
		
			//CF=C(1+i)n   Cf = Ci · (1 + r/k)k·t
		
		var inversion = document.getElementById("inversion").value;
			
		var INTERES = document.getElementById("INTERES").value;
			
		var AÑOS = document.getElementById("AÑOS").value;
			
			
			this.parcialidad.text = document.getElementById("INTERES").value/100;
			//this.cuenta4.text = document.getElementById("INTERES").value;
			//this.cuenta4.text =  Math.pow(1 + this.parcialidad.text, -AÑOS);
				//this.cuenta4.text = Math.pow(this.parcialidad.text,-AÑOS) ;
				
				//Cf = Ci · (1 + r/k)k·t
			
			this.cuenta4.text =  Math.pow(1 + this.parcialidad.text/k, AÑOS*k);
			this.TOTALGENERAL.text =  Math.round(this.cuenta4.text*inversion);
		
			this.INVIERTES.text = document.getElementById("inversion").value ;
			this.GANANCIA.text = this.TOTALGENERAL.text-this.INVIERTES.text ;
			
			
		//CF=C(1+i)n,
		//this.cuenta3.text= this.cuenta2.text*this.cuenta4.text; 
			
		
		//this.cuenta3.text = this.cuenta2.text / document.getElementById("INTERES").value;
		
			// formulaexcel  (importe parcializar*tazarecargos)/(1-POTENCIA((1+tazarecargos),-1))
		
		this.cuenta5.text =  Math.pow(1 + this.TAZARECARGOS.text, -INTERES);
		
			this.cuenta6.text = 1-this.cuenta5.text;
			
			this.cuenta8.text = this.importeparcializar.text*this.TAZARECARGOS.text;
			this.PARCIALIDADESDE.text = this.cuenta8.text/this.cuenta6.text;
			
		//this.cuenta3.text= cuenta2.text/INTERES;
		
		this.PARCIALIDADESDE.text = Math.round(this.PARCIALIDADESDE.text);
		
		this.TOTALGENERAL.text = this.parcialidad.text*this.PARCIALIDADESDE.text;
			
		//Math.round(IMPORTEAPARCIALIZAR*TAZARECARGOS/(1-Math.pow(1+TAZARECARGOS,-INTERES)) )
		
			
		
		//var txt_pass = this.cuenta.text= document.getElementById("txt_user").value*0.20;
		
		
			//this.parent.addChild(new lib.bienve());
			
		//this.parent.removeChild(this);
		
		
		
			
		//this.gotoAndPlay(2);
		
		
			
		//this.gotoAndStop(2);
		
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Capa_1
	this.boton = new lib.Boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(-54.4,165.9);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape.setTransform(187.7,-140.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_1.setTransform(177.3,-138.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_2.setTransform(163.8,-137.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_3.setTransform(151,-138.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_4.setTransform(137.8,-138.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQAQgQAdAAQAaAAANANQAOAOAAAZIAAAMIhPAAQAAAMAKAHQAJAHAQAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgNAAQggAAgRgPgAgOgeQgGAGgBALIAsAAQAAgLgGgFQgEgGgMAAQgIAAgHAFg");
	this.shape_5.setTransform(124,-138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AA2A4IAAg3IAAgMQAAgGgCgDQgBgEgFgBQgDgCgHAAQgEAAgEACIgLAFIAABMIgiAAIAAg3IAAgMIgCgJQgCgEgEgBQgDgCgHAAQgFAAgFACIgIAFIAABMIgkAAIAAhsIAkAAIAAAMQAJgHAIgEQAIgEAKAAQALAAAHAEQAJAFAFAKQAKgJAKgFQAKgFAJAAQASAAAJAKQAKALgBAUIAABGg");
	this.shape_6.setTransform(106.8,-138.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_7.setTransform(82.3,-138.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgrBEQgQgPAAgcQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAcgQAPQgPAPgdABQgbgBgQgPgAgIgGQgEABgEAEQgDADgBAGQgCAHAAAKQAAAKABAGQACAHADADQADAEAEACQAFACAEAAIAJgBQAFgCADgEQADgFACgFQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgFgBQgEgCgFAAQgEAAgEACgAgWgtIAWgmIAiAAIAAACIgiAkg");
	this.shape_8.setTransform(68.2,-140.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_9.setTransform(57.9,-140.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_10.setTransform(48.8,-138.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_11.setTransform(35.8,-138.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgzA3IAAgXIA6g8Ig3AAIAAgaIBjAAIAAAWIg4A9IA5AAIAAAag");
	this.shape_12.setTransform(23.5,-138.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_13.setTransform(14.1,-140.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_14.setTransform(7.2,-140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_15.setTransform(-3.2,-138.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgQA/QgKgIAAgUIAAgzIgOAAIAAgXIAOAAIAAggIAjAAIAAAgIAgAAIAAAXIggAAIAAAmIAAALQAAAEABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAYIgMACIgPABQgUAAgKgJg");
	this.shape_16.setTransform(-14.1,-139.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_17.setTransform(-22.1,-140.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_18.setTransform(-32.1,-136.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_19.setTransform(-46.5,-138.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_20.setTransform(-58.6,-138.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQAQgQAdAAQAaAAANANQAOAOAAAZIAAAMIhPAAQAAAMAKAHQAJAHAQAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgNAAQggAAgRgPgAgOgeQgGAGgBALIAsAAQAAgLgGgFQgEgGgMAAQgIAAgHAFg");
	this.shape_21.setTransform(-78,-138.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAKgEQAJgEAKAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKAAQgUAAgMgPgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAGgCQAFgBAEgEIAAg1IgIgCIgHgBQgNABgHAIg");
	this.shape_22.setTransform(-92.1,-140);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_23.setTransform(-112.4,-138.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLAAQgTAAgMgPgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgBAEgEIAAg1IgIgCIgIgBQgMABgHAIg");
	this.shape_24.setTransform(-126.7,-140);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_25.setTransform(-140.2,-138.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_26.setTransform(-150.5,-140.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgnA3IAAhtIAkAAIAAARQAKgKAJgEQAIgDAIAAIAEAAIAEAAIAAAiIgDAAIgIgBIgIAAIgNAAIgLADIAABJg");
	this.shape_27.setTransform(-158.2,-138.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQAQgQAdAAQAaAAANANQAOAOAAAZIAAAMIhPAAQABAMAJAHQAIAHARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgSgPgAgOgeQgHAGAAALIAsAAQAAgLgGgFQgEgGgMAAQgJAAgGAFg");
	this.shape_28.setTransform(-170.5,-138.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_29.setTransform(-183.8,-136.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_30.setTransform(99.2,-164.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_31.setTransform(87.8,-165.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_32.setTransform(77.5,-164.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_33.setTransform(64.8,-164.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_34.setTransform(51,-164.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAQgFAAgFACg");
	this.shape_35.setTransform(37.3,-162.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_36.setTransform(19.4,-164.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_37.setTransform(1.9,-164.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_38.setTransform(-10.7,-164.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_39.setTransform(-29.3,-164.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_40.setTransform(-42,-166.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_41.setTransform(-53,-164.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_42.setTransform(-65.2,-164.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_43.setTransform(-76.5,-165.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_44.setTransform(-88.1,-164.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_45.setTransform(-100.7,-166.2);

	this.GANANCIA = new cjs.Text("", "20px 'Calibri'", "#00CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 26;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(52.3,-2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_46.setTransform(39.1,8.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgDgJAAgMQAAgKADgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAGADAFAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAGgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgMABQgKAAgHgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_47.setTransform(14.5,12.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_48.setTransform(4.1,10.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_49.setTransform(-11.1,10.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_50.setTransform(-19.5,10.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_51.setTransform(-27.1,10.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_52.setTransform(-39.1,10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAEAAIAEABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_53.setTransform(-51.3,10.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_54.setTransform(-63.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_55.setTransform(-75.7,10.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgPA9QgLgGgIgIQgIgIgEgMQgEgLAAgPQAAgOAEgNQAFgLAIgJQAIgIAMgGQALgEANAAIAOABIALADIAJAEIAEADIACADIAAAFIAAADIAAACIgBACIgCAAIgDgCIgIgEIgLgEQgGgCgJAAQgKAAgIAEQgIAEgGAHQgGAGgDAKQgDAJAAAKQAAAMAEAJQADAJAGAHQAGAGAIAEQAHADAKAAIAMgCQAGgBAFgCIAAglIgdAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgFIAAgCIABgDIABgBIABAAIAoAAIACAAIACABIACADIAAACIAAAwIgBAEIgDADIgIAEIgJADIgKABIgJABQgOAAgMgEg");
	this.shape_56.setTransform(-88.1,10.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgJACIgNABQgKAAgIgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_57.setTransform(-103.6,12.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_58.setTransform(-114.1,10.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgEgDQgDgDgDgFQgCgFAAgHQAAgHADgGQADgFAFgDQAGgDAJgCQAIgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgEABIgJADIgGADIgDACIgCgBIgBgBIAAgCIAAgDIAAgDIACgDIAEgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEACAGQABAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgGAGgIAEQgGADgIAAQgGAAgGgCgAgEAFIgIADQgEACgBAEQgCADABAEQAAAGAEAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgNAAIgLABg");
	this.shape_59.setTransform(-128.6,12.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_60.setTransform(-138.3,12.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_61.setTransform(-148.8,12.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgFgDIgEgCIgCgDIAAgFIAAgDIAAgCIABgBIABAAIAEABIAFADIAHADQAEABAGAAIAGgBIAGgCQACgCACgDIABgGQAAgEgCgCIgFgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAGACIAGACIACABIABACIABABIAAACIAAACIAAADIAAACIgBABIgBABIgCgBIgFgDIgGgCIgIgBIgHABQgCABgDACIgDAEIgBAFQAAAEACACIAGAFIAGADIAIADIAIAEIAHAEQAEADACAEQABAEAAAGQAAAHgCAFQgDAFgEAEQgFADgGACQgHACgHAAIgIgBg");
	this.shape_62.setTransform(-162.4,12.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgDgJAAgMQAAgKADgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAGADAFAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAGgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgMABQgKAAgHgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_63.setTransform(-171.3,12.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_64.setTransform(-181.5,12.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgDgJgBgMQABgKADgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGADAEQAEAFAFACQAGACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgNABQgJAAgJgDgAgIghQgFADgDADIgFAJQgCAFAAAFIAvAAQAAgMgGgIQgGgHgLAAQgFAAgEACg");
	this.shape_65.setTransform(-191.7,12.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgCgBIgBgBIgBgBIAAhXIABgBIABgBIACgBIADAAIAEAAIACABIABABIABABIAABXIgBABIgBABIgCABIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_66.setTransform(-199,10.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_67.setTransform(-204.8,11.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgEBEIgHgCIgHgGIgIgGIAAALIAAABIgBABIgCABIgEAAIgDAAIgCgBIgCgBIAAgBIAAiCIABgCIABAAIADgBIADAAIAFAAIACABIABAAIAAACIAAA1IAIgHIAIgEIAHgDIAGgBQAJAAAHAEQAHAEAEAHQAEAFACAJQACAIAAAKQAAALgCAJQgDAJgFAHQgEAGgIAEQgHADgJAAIgGgBgAgEgMIgFADIgHAFIgIAIIAAAjQAHAHAHAFQAFAEAGAAQAGAAAEgDQAFgDACgFIAEgLIACgLIgCgOQgBgGgCgEQgDgFgEgDQgEgDgHAAIgFABg");
	this.shape_68.setTransform(-212.9,10.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgTAtQgIgDgFgGQgGgHgCgIQgDgJAAgLQAAgKADgJQADgJAFgHQAGgGAIgEQAJgDAKAAQALAAAIADQAIADAFAGQAGAGACAJQADAJAAALQAAAKgDAJQgDAJgFAGQgGAHgIADQgJAEgKAAQgLAAgIgDgAgLgfQgFACgEAFQgDAEgCAHQgBAGAAAHQAAAHABAGQABAGAEAFQADAFAFADQAFADAHAAQAHAAAFgDQAFgDAEgEQADgFACgGQABgGAAgIQAAgGgBgHQgBgGgEgFQgDgEgFgDQgFgDgIAAQgGAAgFADg");
	this.shape_69.setTransform(-223.7,12.4);

	this.INVIERTES = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 26;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(51.2,41);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_70.setTransform(39.1,51.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgwAAIAAAnIApAAIACABIABABIAAACIAAAEIAAACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_71.setTransform(22.5,51.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_72.setTransform(12.4,51.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgDIABgBIABAAIAEABIAHAEIAJAEQAGACAHgBQAEABAFgCIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgHIgJgFIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgGAFgFQAFgEAHgCQAHgCAIAAIAIAAIAIADIAHACIAEACIABACIAAABIABADIAAACIAAADIgBADIgBACIgBAAIgDgBIgGgEIgIgDQgEgCgGABQgEgBgEACIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAIgDAHQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_73.setTransform(2.9,51.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_74.setTransform(-4.2,51.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_75.setTransform(-11.6,51.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgCIgBgCIgLgdIgFgJQgCgFgDgDQgDgDgDgCQgEgCgGAAIgMAAIAAA2IAAACIgBABIgCABIgFAAIgEAAIgCgBIgCgBIAAgCIAAh0QAAgEACgBIAEgCIAbAAIAIABIAFABQAHABAFACQAGADAEAFQAEAEACAFQABAGAAAGQAAAGgBAFQgCAGgDADIgIAHIgKAEIAGADIAEAFIAFAHIADAIIAMAcIACAFIAAACIAAACIgBABIgDABIgFAAgAgZgGIARAAQAGAAAEgBQAGgCACgDQAEgDACgEQABgDAAgGQAAgGgDgGQgEgFgIgCIgEgBIgIgBIgPAAg");
	this.shape_76.setTransform(-21.4,51.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgxAAIAAAnIAqAAIACABIAAABIABACIAAAEIAAACIgBACIAAABIgCAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_77.setTransform(-31.9,51.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAABAIgCAAIgDAAIgCgBIgCgBIgBAAIAAgCIgqh0IAAgEIAAgCIADgBIAGAAIAEAAIACABIACABIABACIAjBpIAjhpIABgCIABgBIADgBIAFAAIAEABIADAAIAAADIgBADIgpB0IgBACIgCABIgDABIgFAAg");
	this.shape_78.setTransform(-42.8,51.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABLIgBACIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgCIAAhzQAAgEACgBQACgCADgBIAIAAIAFABIAEACIADADIADAFIAdA3IAFAKIAFAJIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACgBIAEAAIAEAAIADABIABABIABACIAABzIgBADIgCACIgCACIgDABg");
	this.shape_79.setTransform(-54.9,51.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_80.setTransform(-63.9,51.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAHADIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEADIABABIAAABIABACIAAAEIAAACIgBADIgBACIgBAAIgDgCIgGgDIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_81.setTransform(200.1,-31.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYA8QgLgEgHgHQgGgJgEgMQgDgMgBgQQAAgOAFgMQADgMAHgJQAHgIALgEQALgFAOAAQAOAAAKAEQAKAEAHAJQAHAHADAMQAEAMAAAPQAAAOgEANQgDAMgIAJQgHAJgLAEQgKAFgOAAQgPAAgJgFgAgRguQgIAEgEAHQgFAHgCAJQgCAJAAAKQAAAKACAKQACAJAEAHQAFAHAHADQAIAFAKAAQALgBAHgEQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgKQgCgJgEgHQgFgGgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_82.setTransform(188.9,-31.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAjBQIgFAAIgEgCIgDgEIgEgHIgmhGIgGgMIgFgMIgBAAIABAOIAAAOIAABMIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIABABIAAB0IgBADIgCACIgCACIgDAAgAAFg5IgGgEIgGgEQgDgCgDAAQgEAAgCADQgBACAAAEIgBABIgBABIgCAAIgDAAIgEAAIgBgDQAAgFABgEIAEgGIAGgEQAEgBAEAAQAFAAAEACIAGAEIAGADQADACADAAQADAAACgCQACgCAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAJgFAFQgFAFgJAAQgFAAgEgBg");
	this.shape_83.setTransform(175.9,-32.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_84.setTransform(163.7,-31.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgtBDIgDgBIgDgBIAAgBIABgCIBXh9IABgBIACgBIACgBIADAAIAEAAIACABIABACIgBACIhYB9IgBABIgBABIgDABIgDAAgAAZA+QgFgCgEgEQgDgEgCgGQgBgGAAgIQAAgHABgGQADgHACgEQAEgEAFgDQAGgBAGAAQAIAAAGABQAEADAEAEQADAFABAGQABAGAAAGQAAAIgBAGQgCAGgDAFQgDAEgGACQgFADgHAAQgIAAgEgDgAAfALIgEAEIgCAHIgBAJIABALQAAAFACACQACADADABIAFABQAEAAADgCIAEgEIACgHIABgJIgBgKIgDgHQgBgDgCgBQgDgCgEAAQgDAAgDACgAgxAAQgFgCgDgEQgDgEgCgHQgBgGgBgHQABgIABgGQACgGADgEQADgFAGgCQAFgDAHAAQAIAAAFADQAFADADAEQAEAFABAGQABAFAAAHQAAAIgBAGQgCAGgEAEQgDAFgGACQgEACgIAAQgHAAgFgCgAgrgzQgCABgBADIgDAGIAAAKIABALQAAAEACADQACADACABIAGABQAEAAADgCQACgBABgDQACgDAAgEIACgJIgCgKIgCgHQgCgDgCgBQgDgCgEAAQgDAAgDACg");
	this.shape_85.setTransform(36.2,-61.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_86.setTransform(39.1,96.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgRAuQgFgCgFgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgGgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEABAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_87.setTransform(34,-29.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-32,1,1,0,0,0,50,11);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAHADQAHADAGAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQAAgMgGgIQgFgHgMAAQgFAAgFACg");
	this.shape_88.setTransform(15.1,-59.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_89.setTransform(4.7,-61.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgCIABgCIABAAIAEACIAHADIAJAEQAGACAHAAQAEAAAFgCIAIgEIAFgHQABgDAAgGQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgEgCgGQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIABIAHADIAEADIABABIAAACIABABIAAADIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCADgBACQgCAEAAADQAAAGADADIAGAHIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAJgDAIQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_90.setTransform(-9.4,-61.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_91.setTransform(-18.5,-61.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgCAAIgCgBIgBgCIgMgeIgEgKQgCgEgDgDQgDgDgEgBQgDgCgGAAIgLAAIAAA2IgBABIgBABIgDAAIgEAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAGADQAFADAEAEQADAFACAFQACAGAAAGQAAAHgBAFQgCAEgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAEIABADIAAABIgCABIgCAAIgFAAgAgYgGIAQAAQAHAAAEgCQAFgBADgDQADgDABgEQACgEAAgEQAAgIgEgFQgDgFgHgCIgFgBIgIgBIgOAAg");
	this.shape_92.setTransform(-28.7,-61.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIABAEIgBACIgBACIgBABIgBAAIgqAAIAAAtIAxAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_93.setTransform(-39.1,-61.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_94.setTransform(-49.2,-61.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDAAg");
	this.shape_95.setTransform(-60.5,-61.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_96.setTransform(-69.5,-61.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCAAIgEAAg");
	this.shape_97.setTransform(-81.7,-59.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_98.setTransform(-92.2,-59.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgEgDQgDgDgDgFQgCgFAAgHQAAgHADgGQADgFAFgDQAGgDAJgCQAIgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgEABIgJADIgGADIgDACIgCgBIgBgBIAAgCIAAgDIAAgDIACgDIAEgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEACAGQABAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgGAGgIAEQgGADgIAAQgGAAgGgCgAgEAFIgIADQgEACgBAEQgCADABAEQAAAGAEAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgNAAIgLABg");
	this.shape_99.setTransform(-107,-59.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-63,1,1,0,0,0,50,11);

	this.TOTALGENERAL = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 26;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(52.3,85.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_100.setTransform(39.1,-93.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgEgJAAgMQAAgKAEgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgJACIgNABQgJAAgJgDgAgIghQgFADgDADIgFAJQgBAFgBAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_101.setTransform(15.6,-92.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_102.setTransform(5.2,-94.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaBAIgEgCQgCgCAAgEIAAh0IAAAAIACgBIACgBIAEAAIAFAAIACABIABABIABAAIAABtIAsAAIACAAIABABIAAADIABADIgBADIAAADIgBABIgCABg");
	this.shape_103.setTransform(-7.7,-94.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAEAAIAEABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_104.setTransform(-18.4,-94.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgCIAAhsIgkAAIgBAAIgBgBIgBgDIAAgDIAAgDIABgDIABgBIABgBIBXAAIABABIABABIABADIAAADIAAADIgBADIgBABIgBAAIgkAAIAABsIAAACIgBABIgDAAIgEAAg");
	this.shape_105.setTransform(-29.1,-94.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_106.setTransform(-36.5,-94.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgeA/IgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAIAbAAIAHABIAJABQAFACAFADQAFADAEAEQAEAFACAGQACAFAAAHQAAAKgDAHQgEAIgFAFQgGAFgJADQgIADgLAAIgOAAIAAAtIgBACIgBABIgCAAIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgDACgFQACgGAAgFQAAgIgDgFQgDgFgEgDIgJgDIgIAAIgPAAg");
	this.shape_107.setTransform(-43.8,-94.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_108.setTransform(-55.1,-94.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_109.setTransform(-66.1,-94.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgCIAAgyIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA8IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgCIAAhXIAAgBIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAANQAHgJAIgEQAHgEAGABQAJAAAGACQAGADAEAFQAEAFABAHQACAGAAAKIAAA0IgBACIgBABIgCAAIgEAAg");
	this.shape_110.setTransform(-81.3,-92.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_111.setTransform(-91.8,-92.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAHADIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEADIABABIAAABIABACIAAAEIAAACIgBADIgBACIgBAAIgDgCIgGgDIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_112.setTransform(-106.1,-94.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgwAAIAAAnIApAAIACABIABABIAAACIAAAEIAAACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_113.setTransform(-115.2,-94.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgCIAAhsIgkAAIgBAAIgBgBIgBgDIAAgDIAAgDIABgDIABgBIABgBIBXAAIABABIABABIABADIAAADIAAADIgBADIgBABIgBAAIgkAAIAABsIAAACIgBABIgDAAIgEAAg");
	this.shape_114.setTransform(-125.3,-94.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgCAAIgCgCIgBgBIgMgeIgEgJQgCgFgDgDQgDgDgEgCQgEgCgFAAIgMAAIAAA2IAAACIgBABIgCAAIgFAAIgEAAIgDAAIgBgBIAAgCIAAh0QAAgDACgCIAEgCIAbAAIAIABIAEAAQAIACAGADQAFACAEAFQAEAEABAFQADAGAAAGQAAAHgCAEQgCAFgDAEIgIAHIgKADIAGAEIAEAFIAFAHIADAIIAMAcIABAGIABABIAAACIgCABIgCAAIgFAAgAgZgGIARAAQAHAAADgCQAFgBADgDQAEgDACgEQABgEAAgFQAAgGgEgGQgDgFgIgCIgEgBIgIAAIgPAAg");
	this.shape_115.setTransform(-135.1,-94.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIABADIgBADIgBACIgBABIgBABIgwAAIAAAnIApAAIACABIABABIAAACIABAEIgBACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_116.setTransform(-145.6,-94.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_117.setTransform(-153.3,-94.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAABAIgCAAIgDAAIgCgBIgCgBIgBAAIAAgCIgqh0IAAgEIAAgCIADgBIAGAAIAEAAIACABIACABIABACIAjBpIAjhpIABgCIABgBIADgBIAFAAIAEABIADAAIAAADIgBADIgpB0IgBACIgCABIgDABIgFAAg");
	this.shape_118.setTransform(-161.5,-94.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABLIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA3IAFAKIAFAJIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACgBIAEAAIAEAAIADABIABABIABACIAABzIgBAEIgCABIgCACIgDAAg");
	this.shape_119.setTransform(-173.6,-94.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_120.setTransform(-182.6,-94.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDAAIAAgBIgBgCIAAhXIABgBIAAgBIADgBIADAAIAEAAIACABIACABIAAABIAABXIAAACIgCABIgCAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQADgCAEAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_121.setTransform(-191.9,-94.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgGgDIgDgCIgCgDIAAgFIAAgDIAAgCIACgBIABAAIADABIAFADIAHADQAFABAFAAIAGgBIAGgCQADgCABgDIABgGQAAgEgCgCIgEgFIgIgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAHACIAEACIAEABIABACIAAABIABACIAAACIAAADIgBACIgBABIgBABIgDgBIgDgDIgHgCIgIgBIgHABQgDABgBACIgEAEIgBAFQAAAEADACIAEAFIAHADIAIADIAIAEIAHAEQADADACAEQACAEAAAGQAAAHgDAFQgCAFgFAEQgEADgHACQgFACgIAAIgIgBg");
	this.shape_122.setTransform(-198.1,-92.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-95,1,1,0,0,0,50,11);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_123.setTransform(22.5,96.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIACACIAAACIABADIgBADIAAACIgCABIgBABIgwAAIAAAnIApAAIACABIABABIAAACIABAEIgBACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_124.setTransform(13.4,96.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_125.setTransform(3.5,96.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIAAACIABACIAAADIAAADIgBACIAAABIgCABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_126.setTransform(-5.6,96.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgBIgBgDIgLgdIgFgKQgCgEgDgDQgDgDgEgBQgDgCgGAAIgLAAIAAA2IgBABIgBABIgDABIgEAAIgEAAIgDgBIgBgBIAAgBIAAh0QAAgEACgCIAEgBIAbAAIAIAAIAEABQAIAAAFADQAGADAEAEQADAEACAGQACAGAAAGQAAAGgBAGQgCAEgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAEIABADIAAABIgCABIgCABIgFAAgAgYgGIAQAAQAGAAAFgBQAEgCAEgDQADgDABgEQACgDAAgFQAAgIgEgFQgDgFgHgCIgFgBIgIgBIgOAAg");
	this.shape_127.setTransform(-15.7,96.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_128.setTransform(-26.2,96.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_129.setTransform(-36.3,96.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBADIgCADIgCABIgDABg");
	this.shape_130.setTransform(-47.6,96.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_131.setTransform(-56.6,96.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAAAuIgDAAIgCgBIgBgBIgBgBIAAgkIggAAIgBAAIgBgCIgBgCIAAgDIAAgCIABgCIABgCIABAAIAgAAIAAgjIABgCIABgBIACgBIADAAIADAAIACABIACABIAAACIAAAjIAgAAIABAAIACACIABACIAAACIAAADIgCACIgBACIgBAAIggAAIAAAkIAAABIgCABIgCABIgDAAg");
	this.shape_132.setTransform(-68.5,96.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_133.setTransform(-81.5,96.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_134.setTransform(-92.2,96.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_135.setTransform(-102.9,96.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgDgMgBgPQAAgOAFgMQADgNAHgIQAHgJALgFQALgEAOAAQAOAAAKAEQAKAEAHAIQAHAIADAMQAEAMAAAQQAAANgEANQgDAMgIAJQgHAIgLAGQgKAEgOAAQgPAAgJgEgAgRguQgIAEgEAHQgFAHgCAJQgCAKAAAJQAAALACAJQACAJAEAHQAFAHAHADQAIAEAKAAQALABAHgFQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgJQgCgKgEgGQgFgHgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_136.setTransform(-114.4,96.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_137.setTransform(-125.9,96.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_138.setTransform(-138.7,96.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAEAAIAEABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_139.setTransform(-149.4,96.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_140.setTransform(-160.1,96.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_141.setTransform(-167.5,96.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgeBAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAbAAIAHAAIAJABQAFABAFADQAFADAEAFQAEAEACAGQACAGAAAIQAAAJgDAIQgEAHgFAEQgGAGgJADQgIADgLAAIgOAAIAAAuIgBABIgBABIgCABIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgEACgFQACgEAAgGQAAgHgDgGQgDgFgEgCIgJgEIgIgBIgPAAg");
	this.shape_142.setTransform(-174.8,96.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_143.setTransform(-186.1,96.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_144.setTransform(-197,96.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#003366").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

	this.cuenta8 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta8.name = "cuenta8";
	this.cuenta8.lineHeight = 17;
	this.cuenta8.lineWidth = 78;
	this.cuenta8.parent = this;
	this.cuenta8.setTransform(195,-27.2);

	this.cuenta6 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta6.name = "cuenta6";
	this.cuenta6.lineHeight = 17;
	this.cuenta6.lineWidth = 78;
	this.cuenta6.parent = this;
	this.cuenta6.setTransform(195,35.8);

	this.cuenta5 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta5.name = "cuenta5";
	this.cuenta5.lineHeight = 17;
	this.cuenta5.lineWidth = 78;
	this.cuenta5.parent = this;
	this.cuenta5.setTransform(195,3.1);

	this.cuenta10 = new cjs.Text("", "20px 'Broadway'", "#FFFFFF");
	this.cuenta10.name = "cuenta10";
	this.cuenta10.lineHeight = 25;
	this.cuenta10.lineWidth = 78;
	this.cuenta10.parent = this;
	this.cuenta10.setTransform(96,141.2);

	this.parcialidad = new cjs.Text("", "20px 'Broadway'");
	this.parcialidad.name = "parcialidad";
	this.parcialidad.lineHeight = 25;
	this.parcialidad.lineWidth = 78;
	this.parcialidad.parent = this;
	this.parcialidad.setTransform(195,75);

	this.cuenta4 = new cjs.Text("", "20px 'Broadway'");
	this.cuenta4.name = "cuenta4";
	this.cuenta4.lineHeight = 25;
	this.cuenta4.lineWidth = 78;
	this.cuenta4.parent = this;
	this.cuenta4.setTransform(195,104.7);

	this.cuenta3 = new cjs.Text("", "13px 'Broadway'", "#FFFFFF");
	this.cuenta3.name = "cuenta3";
	this.cuenta3.lineHeight = 17;
	this.cuenta3.lineWidth = 78;
	this.cuenta3.parent = this;
	this.cuenta3.setTransform(182,158.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.inversion},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.TOTALGENERAL},{t:this.INTERES},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.AÑOS},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.INVIERTES},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.GANANCIA},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icanual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{icanual:0});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var pagoinicial = 0;
		
		var TAZARECARGOS = 0;
		
		var cuenta4 = parseInt("0");
		
		var parcialidad = 0;
		
		var importeparcializar = 0;
		
		var cuenta3 = 0;
		
		//var cuenta4 = 0;
		
		
		var INTERES = 0;
		
		var TAZARECARGOS = 0;
		
		var TOTALGENERAL = 0;
		var inversion = 0;
		
		var AÑOS = 0;
		
		
		var inversion = document.getElementById("inversion");
		
		var INTERES = document.getElementById("INTERES");
		
		var AÑOS = document.getElementById("AÑOS");
		
		
		
		this.boton.on("click", onLogin.bind(this));
		
		//this.boton.on("click", onLogin2.bind(this));
		
		function onLogin(e) {
		
			//this.parcialidad.text = INTERES ;
		
		
		
			
		//var TAZARECARGOS = TAZARECARGOS.text ;
		
			
		
		
		
			//CF=C(1+i)n
		
		var inversion = document.getElementById("inversion").value;
			
		var INTERES = document.getElementById("INTERES").value;
			
		var AÑOS = document.getElementById("AÑOS").value;
			
			
			this.parcialidad.text = document.getElementById("INTERES").value/100;
			//this.cuenta4.text = document.getElementById("INTERES").value;
			//this.cuenta4.text =  Math.pow(1 + this.parcialidad.text, -AÑOS);
				//this.cuenta4.text = Math.pow(this.parcialidad.text,-AÑOS) ;
			
			this.cuenta4.text =  Math.pow(1 + this.parcialidad.text, AÑOS);
			this.TOTALGENERAL.text =  Math.round(this.cuenta4.text*inversion);
		
			this.INVIERTES.text = document.getElementById("inversion").value ;
			this.GANANCIA.text = this.TOTALGENERAL.text-this.INVIERTES.text ;
			
			
		//CF=C(1+i)n,
		//this.cuenta3.text= this.cuenta2.text*this.cuenta4.text; 
			
		
		//this.cuenta3.text = this.cuenta2.text / document.getElementById("INTERES").value;
		
			// formulaexcel  (importe parcializar*tazarecargos)/(1-POTENCIA((1+tazarecargos),-1))
		
		this.cuenta5.text =  Math.pow(1 + this.TAZARECARGOS.text, -INTERES);
		
			this.cuenta6.text = 1-this.cuenta5.text;
			
			this.cuenta8.text = this.importeparcializar.text*this.TAZARECARGOS.text;
			this.PARCIALIDADESDE.text = this.cuenta8.text/this.cuenta6.text;
			
		//this.cuenta3.text= cuenta2.text/INTERES;
		
		this.PARCIALIDADESDE.text = Math.round(this.PARCIALIDADESDE.text);
		
		this.TOTALGENERAL.text = this.parcialidad.text*this.PARCIALIDADESDE.text;
			
		//Math.round(IMPORTEAPARCIALIZAR*TAZARECARGOS/(1-Math.pow(1+TAZARECARGOS,-INTERES)) )
		
			
		
		//var txt_pass = this.cuenta.text= document.getElementById("txt_user").value*0.20;
		
		
			//this.parent.addChild(new lib.bienve());
			
		//this.parent.removeChild(this);
		
		
		
			
		//this.gotoAndPlay(2);
		
		
			
		//this.gotoAndStop(2);
		
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Actions
	this.GANANCIA = new cjs.Text("", "20px 'Calibri'", "#00CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 26;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(52.3,-2.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape.setTransform(39.1,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgDgJgBgMQABgKADgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGADAEQAEAFAFACQAGACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgNABQgJAAgJgDgAgIghQgFADgDADIgFAJQgCAFAAAFIAvAAQAAgMgFgIQgHgHgLAAQgFAAgEACg");
	this.shape_1.setTransform(17.5,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_2.setTransform(7.1,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIAAgCIAAgEIArh0IABgCIABgBIADgBIAFAAIAEAAIAEABIACABIABACIArB0IAAAEIAAACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_3.setTransform(-8.1,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_4.setTransform(-16.5,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_5.setTransform(-24.1,10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_6.setTransform(-36.1,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_7.setTransform(-48.3,10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDABg");
	this.shape_8.setTransform(-60.5,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgLgfIgzAAIgLAeIAAACIgBABIgDABIgFAAIgFAAIgCgBIgBgCIABgEIArh0IABgCIABgBIAEgBIAEAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_9.setTransform(-72.7,10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA9QgLgGgIgIQgIgIgEgMQgEgLAAgPQAAgOAEgNQAFgLAIgJQAIgIAMgGQALgEANAAIAOABIALADIAJAEIAEADIACADIAAAFIAAADIAAACIgBACIgCAAIgDgCIgIgEIgLgEQgGgCgJAAQgKAAgIAEQgIAEgGAHQgGAGgDAKQgDAJAAAKQAAAMAEAJQADAJAGAHQAGAGAIAEQAHADAKAAIAMgCQAGgBAFgCIAAglIgdAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgFIAAgCIABgDIABgBIABAAIAoAAIACAAIACABIACADIAAACIAAAwIgBAEIgDADIgIAEIgJADIgKABIgJABQgOAAgMgEg");
	this.shape_10.setTransform(-85.1,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAHADAGAGQAEAFACAIQADAIAAAIIAAADQAAADgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgMABQgKAAgJgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQABgMgHgIQgFgHgMAAQgFAAgFACg");
	this.shape_11.setTransform(-100.6,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_12.setTransform(-111.1,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgEgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgGgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAJgCIAKgBQAJAAAGACQAHACAFAEQADAEACAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_13.setTransform(-125.6,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_14.setTransform(-135.3,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_15.setTransform(-145.8,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgGgDIgDgCIgCgDIAAgFIAAgDIAAgCIACgBIABAAIADABIAFADIAHADQAFABAFAAIAGgBIAGgCQADgCABgDIABgGQAAgEgCgCIgEgFIgIgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAHACIAEACIAEABIABACIAAABIABACIAAACIAAADIgBACIgBABIgBABIgDgBIgDgDIgHgCIgIgBIgHABQgDABgBACIgEAEIgBAFQAAAEADACIAEAFIAHADIAIADIAIAEIAHAEQADADACAEQACAEAAAGQAAAHgDAFQgCAFgFAEQgEADgHACQgFACgIAAIgIgBg");
	this.shape_16.setTransform(-159.4,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAtQgHgDgGgGQgGgGgCgJQgDgJgBgMQABgKADgJQADgJAFgGQAGgHAHgDQAIgDAJAAQAKAAAHADQAIADAEAGQAFAFACAIQACAIAAAIIAAADQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg5AAIABANQACAGADAEQAEAFAFACQAGACAHAAIALgBIAJgCIAFgDIAEgBIACABIAAABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgJACIgNABQgJAAgJgDgAgIghQgFADgDADIgFAJQgCAFAAAFIAvAAQAAgMgGgIQgGgHgLAAQgFAAgEACg");
	this.shape_17.setTransform(-168.3,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeAwIgEAAIgDgBIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDABIgEAAIgEAAIgCgBIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCABIgEAAg");
	this.shape_18.setTransform(-178.5,12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAHADQAHADAGAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQAAgMgGgIQgFgHgMAAQgFAAgFACg");
	this.shape_19.setTransform(-188.7,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDgBIAAgBIgBgBIAAhXIABgBIAAgBIADgBIADAAIAEAAIACABIACABIAAABIAABXIAAABIgCABIgCABIgEAAgAgHgvQgCgCAAgGQAAgFACgCQADgCAEAAQAGAAACACQACACAAAFQAAAGgCACQgCACgGAAQgFAAgCgCg");
	this.shape_20.setTransform(-196,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANA7QgHAAgFgBQgEgCgDgEQgDgEgCgFIgBgNIAAgzIgMAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgFIABgEIAAgCIABgBIACAAIAMAAIAAgVIAAgBIACgBIACgBIAEAAIAEAAIABABIACABIAAABIAAAVIAXAAIABAAIABABIABACIAAAEIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgXAAIAAAwQAAAJADAFQACAFAHAAIAEgBIAEgBIACgBIACAAIABAAIAAABIABACIAAADIAAAEIgCADIgCABIgEABIgEABIgEAAg");
	this.shape_21.setTransform(-201.8,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEBEIgHgCIgHgGIgIgGIAAALIAAABIgBABIgCABIgDAAIgEAAIgCgBIgBgBIAAgBIAAiCIAAgCIABAAIACgBIAFAAIADAAIADABIABAAIABACIAAA1IAHgHIAHgEIAHgDIAHgBQAKAAAGAEQAHAEAEAHQAEAFADAJQACAIAAAKQgBALgCAJQgCAJgFAHQgGAGgHAEQgHADgIAAIgHgBgAgDgMIgHADIgGAFIgHAIIAAAjQAGAHAGAFQAGAEAGAAQAGAAAFgDQAEgDACgFIAFgLIABgLIgBgOQgBgGgDgEQgDgFgEgDQgEgDgHAAIgEABg");
	this.shape_22.setTransform(-209.9,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAtQgIgDgFgGQgGgHgCgIQgDgJAAgLQAAgKADgJQADgJAFgHQAGgGAIgEQAJgDAKAAQALAAAIADQAIADAFAGQAGAGACAJQADAJAAALQAAAKgDAJQgDAJgFAGQgGAHgIADQgJAEgKAAQgLAAgIgDgAgLgfQgFACgEAFQgDAEgCAHQgBAGAAAHQAAAHABAGQABAGAEAFQADAFAFADQAFADAHAAQAHAAAFgDQAFgDAEgEQADgFACgGQABgGAAgIQAAgGgBgHQgBgGgEgFQgDgEgFgDQgFgDgIAAQgGAAgFADg");
	this.shape_23.setTransform(-220.7,12.4);

	this.INVIERTES = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 26;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(51.2,41);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_24.setTransform(39.1,51.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgwAAIAAAnIApAAIACABIABABIAAACIAAAEIAAACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_25.setTransform(22.5,51.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_26.setTransform(12.4,51.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgDIABgBIABAAIAEABIAHAEIAJAEQAGACAHgBQAEABAFgCIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgHIgJgFIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgGAFgFQAFgEAHgCQAHgCAIAAIAIAAIAIADIAHACIAEACIABACIAAABIABADIAAACIAAADIgBADIgBACIgBAAIgDgBIgGgEIgIgDQgEgCgGABQgEgBgEACIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAIgDAHQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_27.setTransform(2.9,51.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_28.setTransform(-4.2,51.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgCIAAhsIgkAAIgBgBIgBAAIgBgDIAAgDIAAgDIABgCIABgCIABgBIBXAAIABABIABACIABACIAAADIAAADIgBADIgBAAIgBABIgkAAIAABsIAAACIgBABIgDABIgEAAg");
	this.shape_29.setTransform(-11.6,51.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgCIgBgCIgLgdIgFgJQgCgFgDgDQgDgDgDgCQgEgCgGAAIgMAAIAAA2IAAACIgBABIgCABIgFAAIgEAAIgCgBIgCgBIAAgCIAAh0QAAgEACgBIAEgCIAbAAIAIABIAFABQAHABAFACQAGADAEAFQAEAEACAFQABAGAAAGQAAAGgBAFQgCAGgDADIgIAHIgKAEIAGADIAEAFIAFAHIADAIIAMAcIACAFIAAACIAAACIgBABIgDABIgFAAgAgZgGIARAAQAGAAAEgBQAGgCACgDQAEgDACgEQABgDAAgGQAAgGgDgGQgEgFgIgCIgEgBIgIgBIgPAAg");
	this.shape_30.setTransform(-21.4,51.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIABADIgBADIAAACIgBABIgCABIgxAAIAAAnIAqAAIACABIAAABIABACIAAAEIAAACIgBACIAAABIgCAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_31.setTransform(-31.9,51.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAABAIgCAAIgDAAIgCgBIgCgBIgBAAIAAgCIgqh0IAAgEIAAgCIADgBIAGAAIAEAAIACABIACABIABACIAjBpIAjhpIABgCIABgBIADgBIAFAAIAEABIADAAIAAADIgBADIgpB0IgBACIgCABIgDABIgFAAg");
	this.shape_32.setTransform(-42.8,51.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABLIgBACIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgCIAAhzQAAgEACgBQACgCADgBIAIAAIAFABIAEACIADADIADAFIAdA3IAFAKIAFAJIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACgBIAEAAIAEAAIADABIABABIABACIAABzIgBADIgCACIgCACIgDABg");
	this.shape_33.setTransform(-54.9,51.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_34.setTransform(-63.9,51.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAHADIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEADIABABIAAABIABACIAAAEIAAACIgBADIgBACIgBAAIgDgCIgGgDIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_35.setTransform(200.1,-31.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYA8QgLgEgHgHQgGgJgEgMQgDgMgBgQQAAgOAFgMQADgMAHgJQAHgIALgEQALgFAOAAQAOAAAKAEQAKAEAHAJQAHAHADAMQAEAMAAAPQAAAOgEANQgDAMgIAJQgHAJgLAEQgKAFgOAAQgPAAgJgFgAgRguQgIAEgEAHQgFAHgCAJQgCAJAAAKQAAAKACAKQACAJAEAHQAFAHAHADQAIAFAKAAQALgBAHgEQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgKQgCgJgEgHQgFgGgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_36.setTransform(188.9,-31.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAjBQIgFAAIgEgCIgDgEIgEgHIgmhGIgGgMIgFgMIgBAAIABAOIAAAOIAABMIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIABABIAAB0IgBADIgCACIgCACIgDAAgAAFg5IgGgEIgGgEQgDgCgDAAQgEAAgCADQgBACAAAEIgBABIgBABIgCAAIgDAAIgEAAIgBgDQAAgFABgEIAEgGIAGgEQAEgBAEAAQAFAAAEACIAGAEIAGADQADACADAAQADAAACgCQACgCAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAJgFAFQgFAFgJAAQgFAAgEgBg");
	this.shape_37.setTransform(175.9,-32.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAqh0IABgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_38.setTransform(163.7,-31.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBDIgDgBIgCgBIgBgBIABgCIBXh9IABgBIACgBIACgBIAEAAIADAAIACABIAAACIgBACIhXB9IgBABIgCABIgCABIgDAAgAAYA+QgEgCgEgEQgDgEgBgGQgCgGAAgIQAAgHACgGQABgHADgEQAEgEAFgDQAFgBAIAAQAHAAAFABQAFADAEAEQADAFABAGQACAGAAAGQAAAIgCAGQgCAGgDAFQgDAEgGACQgFADgHAAQgHAAgGgDgAAfALIgEAEIgDAHIAAAJIABALQAAAFADACQABADACABIAHABQAEAAACgCIAEgEIACgHIABgJIgBgKIgCgHQgCgDgDgBQgDgCgDAAQgDAAgDACgAgxAAQgFgCgDgEQgEgEgBgHQgCgGAAgHQAAgIACgGQACgGADgEQAEgFAFgCQAFgDAHAAQAHAAAGADQAFADAEAEQACAFABAGQACAFAAAHQAAAIgCAGQgCAGgDAEQgDAFgFACQgGACgHAAQgHAAgFgCgAgqgzQgDABgCADIgCAGIAAAKIABALQAAAEACADQACADACABIAGABQAEAAACgCQADgBACgDQABgDABgEIABgJIgBgKIgDgHQgBgDgDgBQgDgCgEAAQgDAAgCACg");
	this.shape_39.setTransform(39.2,-61.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_40.setTransform(39.1,96.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgEgDQgDgDgDgFQgCgFAAgHQAAgHADgGQADgFAFgDQAGgDAJgCQAIgCAJAAIAMAAIAAgHIgBgJQgBgEgCgCIgHgEIgJgBQgFAAgEABIgJADIgGADIgDACIgCgBIgBgBIAAgCIAAgDIAAgDIACgDIAEgDIAHgDIAJgCIAJgBQAKAAAHACQAGACAEAEQAFAEACAGQABAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgGAGgIAEQgGADgIAAQgGAAgGgCgAgEAFIgIADQgEACgBAEQgCADABAEQAAAGAEAFQAEAEAIAAQAGAAAFgEQAFgDAGgHIAAgSIgNAAIgLABg");
	this.shape_41.setTransform(32,-29.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-32,1,1,0,0,0,50,11);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgDgJABgMQgBgKADgJQAEgJAFgGQAFgHAJgDQAHgDAJAAQAKAAAIADQAHADAEAGQAFAFADAIQABAIAAAIIAAADQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIAAANQACAGAEAEQADAFAGACQAFACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIABACIAAADIAAACIAAACIgBABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgCAFABAFIAuAAQABgMgGgIQgHgHgLAAQgFAAgFACg");
	this.shape_42.setTransform(17.1,-59.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_43.setTransform(6.7,-61.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgCIABgCIABAAIAEACIAHADIAJAEQAGACAHAAQAEAAAFgCIAIgEIAFgHQABgDAAgGQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgEgCgGQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIABIAHADIAEADIABABIAAACIABABIAAADIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCADgBACQgCAEAAADQAAAGADADIAGAHIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAJgDAIQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_44.setTransform(-7.4,-61.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgwAAIAAAnIApAAIABABIACABIAAACIABAEIgBACIAAACIgCABIgBAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_45.setTransform(-16.5,-61.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgCAAIgCgBIgBgCIgMgeIgEgKQgCgEgDgDQgDgDgEgBQgEgCgFAAIgMAAIAAA2IAAABIgBABIgCAAIgFAAIgEAAIgDAAIgBgBIAAgBIAAh0QAAgFACgBIAEgBIAbAAIAIAAIAEAAQAIABAGADQAFADAEAEQAEAFABAFQADAGAAAGQAAAHgCAFQgCAEgDAEIgIAHIgKADIAGAEIAEAFIAFAHIADAJIAMAcIABAEIABADIAAABIgCABIgCAAIgFAAgAgZgGIARAAQAHAAADgCQAFgBADgDQAEgDACgEQABgEAAgEQAAgIgEgFQgDgFgIgCIgEgBIgIgBIgPAAg");
	this.shape_46.setTransform(-26.7,-61.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIABADIgBADIgBACIgBABIgBABIgwAAIAAAnIApAAIACABIABABIAAACIABAEIgBACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_47.setTransform(-37.1,-61.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDAAIgEAAg");
	this.shape_48.setTransform(-47.2,-61.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABMIgBABIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBAEIgCACIgCABIgDAAg");
	this.shape_49.setTransform(-58.5,-61.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_50.setTransform(-67.5,-61.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgBIAAgzIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAEQgGAFgHAIIAAA9IAAABIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgBIAAhXIAAgBIACgBIACgBIAEAAIADAAIACABIABABIABABIAAALQAHgIAIgEQAHgEAGAAQAJABAGADQAGACAEAFQAEAFABAHQACAHAAAJIAAA1IgBABIgBABIgCAAIgEAAg");
	this.shape_51.setTransform(-79.7,-59.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_52.setTransform(-90.2,-59.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgRAuQgFgCgFgDQgEgDgCgFQgCgFAAgHQAAgHADgGQADgFAGgDQAGgDAHgCQAJgCAJAAIAMAAIAAgHIgBgJQgBgEgDgCIgGgEIgJgBQgFAAgFABIgIADIgGADIgEACIgBgBIgBgBIAAgCIAAgDIAAgDIABgDIAFgDIAHgDIAJgCIAJgBQAKAAAGACQAHACAEAEQAFAEABAGQACAGAAAJIAAA6IgBACIgCABIgEAAIgEAAIgCgBIAAgCIAAgJQgHAGgHAEQgHADgGAAQgIAAgFgCgAgEAFIgIADQgDACgCAEQgBADgBAEQABAGAEAFQAEAEAIAAQAFAAAGgEQAFgDAGgHIAAgSIgOAAIgKABg");
	this.shape_53.setTransform(-105,-59.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-63,1,1,0,0,0,50,11);

	this.TOTALGENERAL = new cjs.Text("", "20px 'Calibri'", "#FFFFFF");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 26;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(52.3,85.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNBWIgCgBIgBgBIAAgBIACgVIgIgCIgIgCIgFgCIgDgCIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAGADIAKADQAFABAIAAQANAAAHgFQAHgGAAgJQAAgGgCgEQgDgEgEgCIgKgFIgKgEIgMgEQgFgCgEgEQgFgEgCgGQgDgFAAgJQAAgGACgGQACgGAFgEQAEgEAHgDQAHgCAJgBIABgUIABgBIAAgBIACAAIADAAIAEAAIACAAIABABIAAACIgCATIAGABIAGACIAFACIADACIACABIAAACIAAACIABADIgBADIAAACIgBABIgBABIgDgCIgGgCIgJgDIgKgBIgKABIgIADQgDADgBADIgBAHQAAAGACAEQADAEAFACQAEADAFACIALAEIALAFQAGACAEADQAEAEADAGQADAFAAAJQAAAHgDAHQgDAGgGAFQgFAEgIADQgIADgJAAIgCAVIAAACIgBAAIgCABIgDAAIgEAAg");
	this.shape_54.setTransform(39.1,-93.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAtQgJgDgFgGQgGgGgDgJQgCgJAAgMQAAgKACgJQADgJAGgGQAFgHAJgDQAHgDAJAAQAKAAAHADQAHADAGAGQAEAFADAIQACAIAAAIIAAADQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIg4AAIABANQABAGADAEQAEAFAFACQAGACAHAAIALgBIAIgCIAHgDIADgBIABABIABABIAAACIAAADIAAACIAAACIAAABIgBABIgDACIgHACIgKACIgLABQgLAAgHgDgAgJghQgEADgDADIgFAJQgBAFAAAFIAuAAQAAgMgGgIQgFgHgMAAQgFAAgFACg");
	this.shape_55.setTransform(19.6,-92.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUBBQgHgEgEgGQgEgHgCgIQgCgJAAgKQAAgLACgJQADgIAEgHQAFgGAHgDQAHgEAKAAQAGAAAHADQAGAEAGAGIAAgzIABgBIABgBIACgBIAEAAIAEAAIADABIABABIAAABIAACBIAAACIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgCIAAgLQgHAHgHAEQgIAFgIAAQgJAAgHgEgAgLgKQgEADgCAFQgDADgBAGQgCAGAAAHIABANQABAGADAFQACAFAFADQAEADAGAAIAFgBIAHgDIAGgFIAHgIIAAgkQgGgHgGgEQgGgEgGAAQgGAAgFADg");
	this.shape_56.setTransform(9.2,-94.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgaBAIgEgCQgCgCAAgEIAAh0IAAAAIACgBIACgBIAEAAIAFAAIACABIABABIABAAIAABtIAsAAIACAAIABABIAAADIABADIgBADIAAADIgBABIgCABg");
	this.shape_57.setTransform(-3.7,-94.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIAAgCIAAgEIArh0IABgCIABgBIADgBIAFAAIAEAAIAEABIACABIABACIArB0IAAAEIAAACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_58.setTransform(-14.4,-94.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgCIAAhsIgkAAIgBAAIgBgBIgBgDIAAgDIAAgDIABgDIABgBIABgBIBXAAIABABIABABIABADIAAADIAAADIgBADIgBABIgBAAIgkAAIAABsIAAACIgBABIgDAAIgEAAg");
	this.shape_59.setTransform(-25.1,-94.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_60.setTransform(-32.5,-94.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeA/IgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAIAbAAIAHABIAJABQAFACAFADQAFADAEAEQAEAFACAGQACAFAAAHQAAAKgDAHQgEAIgFAFQgGAFgJADQgIADgLAAIgOAAIAAAtIgBACIgBABIgCAAIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgDACgFQACgGAAgFQAAgIgDgFQgDgFgEgDIgJgDIgIAAIgPAAg");
	this.shape_61.setTransform(-39.8,-94.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgLgfIgzAAIgLAeIAAACIgBABIgDABIgFAAIgFAAIgCgBIgBgCIABgEIArh0IABgCIABgBIAEgBIAEAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_62.setTransform(-51.1,-94.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_63.setTransform(-62.1,-94.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAeAvIgEAAIgDAAIgBgBIAAgCIAAgyIgBgMIgEgIIgGgFQgDgCgFAAQgFAAgGAFQgGAEgHAIIAAA8IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgBgBIgBgCIAAhXIAAgBIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAANQAHgJAIgEQAHgEAGABQAJAAAGACQAGADAEAFQAEAFABAHQACAGAAAKIAAA0IgBACIgBABIgCAAIgEAAg");
	this.shape_64.setTransform(-77.3,-92.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUAtQgGgDgEgFQgEgFgBgHQgCgHAAgJIAAg1IABgBIABgBIACAAIAEgBIAEABIADAAIABABIAAABIAAAzQAAAHACAFQABAFACADQACADAEACQADACAFAAQAFAAAGgFQAGgEAHgIIAAg9IAAgBIABgBIADAAIAEgBIAEABIACAAIACABIAAABIAABXIAAACIgCABIgCAAIgDAAIgEAAIgCAAIgBgBIgBgCIAAgLQgHAIgIAEQgHAEgGAAQgJAAgGgDg");
	this.shape_65.setTransform(-87.8,-92.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgEIAAgEIABgCIABgCIABAAIAEACIAHADIAJAEQAGABAHABQAEgBAFgBIAIgEIAFgGQABgFAAgEQAAgGgCgEIgHgGIgJgGIgJgEIgLgFQgFgDgEgFQgEgEgCgFQgDgGAAgHQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAIAAIAIAAIAIACIAHADIAEADIABABIAAABIABACIAAAEIAAACIgBADIgBACIgBAAIgDgCIgGgDIgIgDQgEgBgGAAQgEAAgEABIgHAEQgCADgBADQgCACAAAFQAAAEADAFIAGAGIAJAGIAKAEIALAGIAJAGQAEAEACAGQADAFAAAHQAAAKgDAGQgEAIgFAEQgGAFgIACQgIADgIAAIgMgBg");
	this.shape_66.setTransform(-102.1,-94.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_67.setTransform(-111.2,-94.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAAA/IgDAAIgDAAIgBgBIAAgCIAAhsIgkAAIgBAAIgBgBIgBgDIAAgDIAAgDIABgDIABgBIABgBIBXAAIABABIABABIABADIAAADIAAADIgBADIgBABIgBAAIgkAAIAABsIAAACIgBABIgDAAIgEAAg");
	this.shape_68.setTransform(-121.3,-94.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAhA/IgEAAIgDAAIgBgCIgBgBIgLgeIgFgJQgCgFgDgDQgDgDgDgCQgFgCgFAAIgMAAIAAA2IAAACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAh0QAAgDACgCIAEgCIAbAAIAIABIAFAAQAHACAFADQAGACAEAFQAEAEACAFQABAGAAAGQABAHgCAEQgCAFgDAEIgIAHIgKADIAGAEIAFAFIADAHIAEAIIAMAcIACAGIAAABIAAACIgBABIgDAAIgFAAgAgZgGIARAAQAGAAAFgCQAEgBADgDQAEgDABgEQACgEAAgFQAAgGgDgGQgEgFgHgCIgFgBIgIAAIgPAAg");
	this.shape_69.setTransform(-131.1,-94.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIABACIAAACIAAADIAAADIAAACIgBABIgCABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_70.setTransform(-141.6,-94.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_71.setTransform(-149.3,-94.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAABAIgCAAIgDAAIgCgBIgCgBIgBAAIAAgCIgqh0IAAgEIAAgCIADgBIAGAAIAEAAIACABIACABIABACIAjBpIAjhpIABgCIABgBIADgBIAFAAIAEABIADAAIAAADIgBADIgpB0IgBACIgCABIgDABIgFAAg");
	this.shape_72.setTransform(-157.5,-94.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAjA/IgFAAIgEgCIgDgEIgEgGIgmhHIgGgMIgFgMIgBAAIABAPIAAAOIAABLIgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhzQAAgEACgCQACgCADAAIAIAAIAFABIAEACIADADIADAFIAdA3IAFAKIAFAJIAEAJIAFAJIAAAAIAAgQIAAgQIAAhDIAAgCIACgBIACgBIAEAAIAEAAIADABIABABIABACIAABzIgBAEIgCABIgCACIgDAAg");
	this.shape_73.setTransform(-169.6,-94.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_74.setTransform(-178.6,-94.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAABBIgDAAIgDAAIgBgBIAAgCIAAhXIAAgBIABgBIADgBIADAAIAEAAIADABIAAABIABABIAABXIgBACIAAABIgDAAIgEAAgAgHgvQgCgCAAgGQAAgFACgCQACgCAFAAQAFAAADACQACACAAAFQAAAGgCACQgDACgFAAQgFAAgCgCg");
	this.shape_75.setTransform(-187.9,-94.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAvIgIgBIgGgDIgDgCIgBgDIgBgFIAAgDIABgCIAAgBIABAAIAEABIAFADIAIADQADABAGAAIAHgBIAFgCQACgCACgDIABgGQAAgEgBgCIgGgFIgHgDIgHgDIgIgEIgHgEIgFgHQgCgFAAgFQAAgGACgEQACgFAEgEQAEgDAGgCQAGgCAHAAIAHAAIAGACIAGACIACABIABACIABABIAAACIAAACIAAADIAAACIgBABIgBABIgCgBIgFgDIgGgCIgIgBIgGABQgDABgDACIgCAEIgBAFQAAAEABACIAGAFIAFADIAJADIAIAEIAHAEQADADADAEQABAEAAAGQAAAHgDAFQgCAFgEAEQgFADgHACQgGACgGAAIgJgBg");
	this.shape_76.setTransform(-194.1,-92.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-95,1,1,0,0,0,50,11);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_77.setTransform(22.5,96.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIACACIAAACIABADIgBADIAAACIgCABIgBABIgwAAIAAAnIApAAIACABIABABIAAACIABAEIgBACIAAACIgBABIgCAAIgpAAIAAAtIAwAAIACABIABABIABACIAAADIAAADIgBADIgBABIgCAAg");
	this.shape_78.setTransform(13.4,96.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgPBAIgJgDIgIgDIgEgDIgBgDIgBgFIAAgDIABgDIABgBIABAAIAEABIAHAEIAJAEQAGABAHAAQAEAAAFgBIAIgEIAFgHQABgEAAgFQAAgFgCgEIgHgHIgJgEIgJgGIgLgEQgFgDgEgEQgEgFgCgFQgDgGAAgHQAAgIADgGQADgGAFgEQAFgFAHgCQAHgCAIAAIAIABIAIACIAHACIAEACIABACIAAACIABACIAAACIAAAEIgBACIgBABIgBAAIgDgBIgGgCIgIgEQgEgBgGgBQgEABgEABIgHAEQgCACgBADQgCAEAAADQAAAFADAEIAGAHIAJAFIAKAGIALAFIAJAGQAEAEACAFQADAGAAAIQAAAJgDAHQgEAGgFAFQgGAFgIADQgIACgIAAIgMgBg");
	this.shape_79.setTransform(3.5,96.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIACAAIAAACIABACIAAADIAAADIgBACIAAABIgCABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_80.setTransform(-5.6,96.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAhBAIgEAAIgDgBIgBgBIgBgDIgLgdIgFgKQgCgEgDgDQgDgDgEgBQgDgCgGAAIgLAAIAAA2IgBABIgBABIgDABIgEAAIgEAAIgDgBIgBgBIAAgBIAAh0QAAgEACgCIAEgBIAbAAIAIAAIAEABQAIAAAFADQAGADAEAEQADAEACAGQACAGAAAGQAAAGgBAGQgCAEgDAEIgIAHIgKADIAGAEIAFAFIADAHIAFAJIALAcIABAEIABADIAAABIgCABIgCABIgFAAgAgYgGIAQAAQAGAAAFgBQAEgCAEgDQADgDABgEQACgDAAgFQAAgIgEgFQgDgFgHgCIgFgBIgIgBIgOAAg");
	this.shape_81.setTransform(-15.7,96.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgcA/IgEgBQgCgCAAgEIAAhvQAAgEACgCIAEgBIA7AAIABAAIABACIABACIAAADIAAADIgBACIgBABIgBABIgxAAIAAAnIAqAAIABABIABABIABACIAAAEIAAACIgBACIgBABIgBAAIgqAAIAAAtIAyAAIABABIABABIABACIAAADIAAADIgBADIgBABIgBAAg");
	this.shape_82.setTransform(-26.2,96.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_83.setTransform(-36.3,96.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAjBAIgFgBIgEgCIgDgEIgEgHIgmhGIgGgMIgFgLIgBAAIABANIAAAPIAABMIgBABIgBABIgDABIgEAAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQACgBADAAIAIAAIAFAAIAEACIADADIADAFIAdA2IAFAKIAFAKIAEAJIAFAJIAAAAIAAgQIAAgQIAAhEIAAgBIACgBIACAAIAEAAIAEAAIADAAIABABIABABIAAB0IgBADIgCADIgCABIgDABg");
	this.shape_84.setTransform(-47.6,96.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_85.setTransform(-56.6,96.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAAAuIgDAAIgCgBIgBgBIgBgBIAAgkIggAAIgBAAIgBgCIgBgCIAAgDIAAgCIABgCIABgCIABAAIAgAAIAAgjIABgCIABgBIACgBIADAAIADAAIACABIACABIAAACIAAAjIAgAAIABAAIACACIABACIAAACIAAADIgCACIgBACIgBAAIggAAIAAAkIAAABIgCABIgCABIgDAAg");
	this.shape_86.setTransform(-68.5,96.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_87.setTransform(-81.5,96.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAuBAIgEAAIgEgBIgBgBIgBgBIgKgfIg0AAIgKAeIgBACIgBABIgDABIgEAAIgGAAIgCgBIgBgCIABgEIArh0IABgCIABgBIADgBIAFAAIAFAAIADABIACABIABACIAqB0IABAEIgBACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_88.setTransform(-92.2,96.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_89.setTransform(-102.9,96.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgYA9QgLgFgHgIQgGgIgEgMQgDgMgBgPQAAgOAFgMQADgNAHgIQAHgJALgFQALgEAOAAQAOAAAKAEQAKAEAHAIQAHAIADAMQAEAMAAAQQAAANgEANQgDAMgIAJQgHAIgLAGQgKAEgOAAQgPAAgJgEgAgRguQgIAEgEAHQgFAHgCAJQgCAKAAAJQAAALACAJQACAJAEAHQAFAHAHADQAIAEAKAAQALABAHgFQAIgEAFgHQAEgHACgJQACgJAAgKQAAgKgCgJQgCgKgEgGQgFgHgHgEQgIgEgLAAQgJAAgIAEg");
	this.shape_90.setTransform(-114.4,96.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_91.setTransform(-125.9,96.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaA/IgEgBQgCgBAAgEIAAh0IAAgCIACgBIACAAIAEgBIAFABIACAAIABABIABACIAABsIAsAAIACABIABABIAAACIABADIgBAEIAAABIgBACIgCAAg");
	this.shape_92.setTransform(-138.7,96.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgCgBIgCgBIAAgBIgMgfIgzAAIgLAeIAAACIgCABIgCABIgFAAIgEAAIgDgBIgBgCIACgEIAph0IACgCIACgBIADgBIAEAAIAEAAIAEABIACABIABACIAqB0IACAEIgCACIgCABIgFAAgAgWARIArAAIgVg+g");
	this.shape_93.setTransform(-149.4,96.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAhtIgkAAIgBgBIgBgBIgBgCIAAgDIAAgEIABgCIABgBIABAAIBXAAIABAAIABABIABACIAAAEIAAADIgBACIgBABIgBABIgkAAIAABtIAAABIgBABIgDABIgEAAg");
	this.shape_94.setTransform(-160.1,96.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAABAIgDAAIgDgBIgBgBIAAgBIAAh5IAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIADgBIAEABIADAAIABABIAAABIAAB5IAAABIgBABIgDABIgEAAg");
	this.shape_95.setTransform(-167.5,96.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeBAIgEAAIgCgBIgCgBIAAgBIAAh0QAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAbAAIAHAAIAJABQAFABAFADQAFADAEAFQAEAEACAGQACAGAAAIQAAAJgDAIQgEAHgFAEQgGAGgJADQgIADgLAAIgOAAIAAAuIgBABIgBABIgCABIgFAAgAgVABIAPAAQAHAAAFgBQAFgCADgDQADgEACgFQACgEAAgGQAAgHgDgGQgDgFgEgCIgJgEIgIgBIgPAAg");
	this.shape_96.setTransform(-174.8,96.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAuBAIgFAAIgDgBIgBgBIAAgBIgLgfIg0AAIgKAeIgBACIgCABIgCABIgEAAIgGAAIgCgBIAAgCIABgEIAph0IACgCIACgBIACgBIAFAAIAEAAIAEABIACABIABACIArB0IABAEIgBACIgDABIgFAAgAgWARIArAAIgVg+g");
	this.shape_97.setTransform(-186.1,96.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgNA9QgKgEgHgIQgHgIgEgMQgEgMAAgPQAAgPAEgMQAEgNAIgIQAHgJAKgEQAKgFAMAAIAKABIAKADIAIAEIAFADIABACIABACIAAACIAAADIAAADIAAACIgBACIgCAAIgDgCIgHgEIgJgEQgGgCgIAAQgIAAgGADQgHAEgFAGQgFAHgCAJQgDAKAAALQAAAMADAJQACAJAFAGQAFAHAHADQAGADAJAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABADIAAADIAAADIAAACIgBACIgCABIgEADIgHAEIgLAEIgNABQgLAAgKgEg");
	this.shape_98.setTransform(-197,96.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_99.setTransform(171.3,-140.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_100.setTransform(160.8,-138.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF6600").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_101.setTransform(147.3,-137.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_102.setTransform(133.2,-138.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_103.setTransform(119,-138.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_104.setTransform(98.7,-138.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF6600").s().p("AgrBEQgQgPAAgcQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAcgQAPQgPAPgdABQgcgBgPgPgAgIgGQgEABgEAEQgCADgCAGQgCAHgBAKQAAAKACAGQACAHADADQADAEAEACQAFACAEAAIAJgBQAFgCADgEQAEgFABgFQACgGAAgLQAAgKgCgGQgBgHgEgCQgDgFgFgBQgEgCgFAAQgEAAgEACgAgXgtIAXgmIAjAAIAAACIgjAkg");
	this.shape_105.setTransform(84.7,-140.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_106.setTransform(74.4,-140.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_107.setTransform(65.2,-138.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_108.setTransform(52.2,-138.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF6600").s().p("AgzA3IAAgXIA6g8Ig3AAIAAgaIBiAAIAAAWIg3A9IA5AAIAAAag");
	this.shape_109.setTransform(39.9,-138.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_110.setTransform(30.5,-140.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF6600").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_111.setTransform(23.7,-140.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_112.setTransform(13.2,-138.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF6600").s().p("AgQA/QgKgIAAgUIAAgzIgOAAIAAgXIAOAAIAAggIAjAAIAAAgIAgAAIAAAXIggAAIAAAmIAAALQAAAEABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAYIgMACIgPABQgUAAgKgJg");
	this.shape_113.setTransform(2.3,-139.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_114.setTransform(-5.6,-140.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_115.setTransform(-15.7,-136.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF6600").s().p("AgrAwQgLgJAAgPQAAgMAGgIQAFgHAKgEQAKgEAOgDIAdgCIAAgBQAAgJgHgDQgIgEgNAAQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAFIgKAEIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgEIAAgXIgQACg");
	this.shape_116.setTransform(-30.1,-138.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_117.setTransform(-42.1,-138.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgaARgQQAQgQAdAAQAaAAANANQAOAOAAAZIAAAMIhPAAQABAMAJAHQAIAHARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgSgPgAgOgeQgHAGAAALIAsAAQAAgLgGgFQgEgGgMAAQgJAAgGAFg");
	this.shape_118.setTransform(-61.6,-138.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAKgEQAJgEAKAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLAAQgTAAgMgPgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgBAEgEIAAg1IgIgCIgHgBQgNABgHAIg");
	this.shape_119.setTransform(-75.6,-140);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgfQgEABgEAEQgCAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_120.setTransform(-96,-138.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF6600").s().p("AgsA+QgMgPAAgaQAAgOAEgKQAEgLAHgIQAGgHAKgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLAAQgTAAgMgPgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgBAEgEIAAg1IgIgCIgIgBQgMABgHAIg");
	this.shape_121.setTransform(-110.2,-140);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgQAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgBAHAAAJQgBAJACAHQACAGADAEQADAEAEACQAFACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_122.setTransform(-123.7,-138.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF6600").s().p("AgRBMIAAhtIAjAAIAABtgAgSgxIAAgaIAlAAIAAAag");
	this.shape_123.setTransform(-134,-140.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF6600").s().p("AgnA3IAAhtIAkAAIAAARQAKgKAJgEQAIgDAIAAIAEAAIAEAAIAAAiIgDAAIgIgBIgIAAIgNAAIgLADIAABJg");
	this.shape_124.setTransform(-141.8,-138.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF6600").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAHQAKAHAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAGgBALIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_125.setTransform(-154,-138.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_126.setTransform(-167.3,-136.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_127.setTransform(99.2,-164.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_128.setTransform(87.8,-165.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_129.setTransform(77.5,-164.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF6600").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_130.setTransform(64.8,-164.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF6600").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_131.setTransform(51,-164.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF6600").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAQgFAAgFACg");
	this.shape_132.setTransform(37.3,-162.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF6600").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_133.setTransform(19.4,-164.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF6600").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_134.setTransform(1.9,-164.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF6600").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_135.setTransform(-10.7,-164.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF6600").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_136.setTransform(-29.3,-164.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF6600").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_137.setTransform(-42,-166.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF6600").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_138.setTransform(-53,-164.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF6600").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAAMIhQAAQABAMAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_139.setTransform(-65.2,-164.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF6600").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_140.setTransform(-76.5,-165.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF6600").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_141.setTransform(-88.1,-164.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF6600").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_142.setTransform(-100.7,-166.2);

	this.boton = new lib.Boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(-63.5,165.9);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#003366").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

	this.cuenta8 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta8.name = "cuenta8";
	this.cuenta8.lineHeight = 17;
	this.cuenta8.lineWidth = 78;
	this.cuenta8.parent = this;
	this.cuenta8.setTransform(195,-27.2);

	this.cuenta6 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta6.name = "cuenta6";
	this.cuenta6.lineHeight = 17;
	this.cuenta6.lineWidth = 78;
	this.cuenta6.parent = this;
	this.cuenta6.setTransform(195,35.8);

	this.cuenta5 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta5.name = "cuenta5";
	this.cuenta5.lineHeight = 17;
	this.cuenta5.lineWidth = 78;
	this.cuenta5.parent = this;
	this.cuenta5.setTransform(195,3.1);

	this.cuenta10 = new cjs.Text("", "20px 'Broadway'", "#FFFFFF");
	this.cuenta10.name = "cuenta10";
	this.cuenta10.lineHeight = 25;
	this.cuenta10.lineWidth = 78;
	this.cuenta10.parent = this;
	this.cuenta10.setTransform(96,141.2);

	this.parcialidad = new cjs.Text("", "20px 'Broadway'");
	this.parcialidad.name = "parcialidad";
	this.parcialidad.lineHeight = 25;
	this.parcialidad.lineWidth = 78;
	this.parcialidad.parent = this;
	this.parcialidad.setTransform(195,75);

	this.cuenta4 = new cjs.Text("", "20px 'Broadway'");
	this.cuenta4.name = "cuenta4";
	this.cuenta4.lineHeight = 25;
	this.cuenta4.lineWidth = 78;
	this.cuenta4.parent = this;
	this.cuenta4.setTransform(195,104.7);

	this.cuenta3 = new cjs.Text("", "13px 'Broadway'", "#FFFFFF");
	this.cuenta3.name = "cuenta3";
	this.cuenta3.lineHeight = 17;
	this.cuenta3.lineWidth = 78;
	this.cuenta3.parent = this;
	this.cuenta3.setTransform(182,158.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_143},{t:this.boton},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.inversion},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.TOTALGENERAL},{t:this.INTERES},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.AÑOS},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.dinero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Capa_2
	this.instance = new lib.LEON();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,11,1,1,0,0,0,116.5,75);
	this.instance.alpha = 0.238;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrCAImIAAxLMBWFAAAIAARLg");
	this.shape.setTransform(-5,199.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:-6.5,y:11,alpha:0.238}}]}).to({state:[{t:this.shape},{t:this.instance,p:{x:-137.5,y:-85,alpha:0.57}}]},15).to({state:[{t:this.shape},{t:this.instance,p:{x:-142,y:-126.9,alpha:1}}]},8).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-431,-190.5)).s().p("AqnXMIAAuqIEOAAIAAjHIAPAAIAAjDIAbAAIAAifIgqAAIAA3FILjAAIAAJ2IFeAAMAAAAkig");
	this.shape_1.setTransform(47,136.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-305.5,-205)).s().p("Ao+UyIAA/ZIAUAAIAAhQIC0AAIAAo6IO1AAMAAAApjg");
	this.shape_2.setTransform(190.5,151);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-193,-238.5)).s().p("AolP3IAA/tIRLAAIAAftg");
	this.shape_3.setTransform(-204,115.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-75,-288.5)).s().p("AoHIXIAAwtIQPAAIAAQtg");
	this.shape_4.setTransform(-82,120.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("EgqaAAAMBU1AAA");
	this.shape_5.setTransform(-9.5,152.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-431,-190.5)).s().p("AqnXNIAAusIEOAAIAAjGIAPAAIAAjDIAbAAIAAifIgqAAIAA3EILjAAIAAJ2IFeAAMAAAAkig");
	this.shape_6.setTransform(47,113.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-193,-238.5)).s().p("AolP2IAA/rIRLAAIAAfrg");
	this.shape_7.setTransform(-204,101.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-431,-190.5)).s().p("AqnXMIAAuqIEOAAIAAjHIAOAAIAAjDIAcAAIAAifIgqAAIAA3FILjAAIAAJ2IFeAAMAAAAkig");
	this.shape_8.setTransform(60,11.5);

	this.instance_1 = new lib.junto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.1,1.1,1,1,0,0,0,271.4,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:120.5,x:-82}},{t:this.shape_3},{t:this.shape_2,p:{y:151,x:190.5}},{t:this.shape_1}]}).to({state:[{t:this.shape_4,p:{y:117.5,x:-82}},{t:this.shape_7,p:{y:101.5,x:-204}},{t:this.shape_2,p:{y:105,x:190.5}},{t:this.shape_6,p:{x:47,y:113.5}},{t:this.shape_5,p:{y:152.1,x:-9.5}}]},4).to({state:[{t:this.shape_4,p:{y:115.5,x:-82}},{t:this.shape_7,p:{y:86.5,x:-204}},{t:this.shape_2,p:{y:38,x:190.5}},{t:this.shape_6,p:{x:57,y:23.5}},{t:this.shape_5,p:{y:160.1,x:-9.5}}]},5).to({state:[{t:this.shape_4,p:{y:103.5,x:-79}},{t:this.shape_7,p:{y:74.5,x:-201}},{t:this.shape_2,p:{y:26,x:193.5}},{t:this.shape_8},{t:this.shape_5,p:{y:148.1,x:-6.5}}]},6).to({state:[{t:this.instance_1}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.5,-64,551,349);


(lib.bienve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_bienvenido.on("click", onBack.bind(this));
		
		
		function onBack(e){
			
			{
				this.parent.addChild(new lib.mc_login());
				this.parent.removeChild(this);
				window.open("http://www.adobe.com", "_blank");
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgfBHIgEgBIgCgBIgBgCIAAiDIABgCIABgCIAEAAIAFAAIAGAAIADAAIACACIAAACIAAATIALgNQAEgFAEgDQAEgCAEgBIAJgBIAEAAIAFABIAEABIADABIACABIAAACIABAEIAAAEIAAAGIgBADIgCADIgBAAIgDAAIgEgCIgEgBIgHgBIgGABIgIAGIgHAJIgJANIAABWIgBACIgCABIgEABIgGABIgFgBg");
	this.shape.setTransform(382.4,188.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgaBFQgJgCgFgFQgHgGgCgHQgEgIAAgJQAAgLAFgIQAEgIAIgFQAJgFAMgDQAMgDAPAAIASAAIAAgKQAAgIgCgFQgBgGgDgEQgEgEgGgCQgGgCgIAAQgIAAgHACIgMAFIgKAEIgFACIgCAAIgCgCIAAgCIAAgFIAAgFIACgFIAHgEIALgFQAHgCAHgBIAOgBQAOAAAKACQAKAEAHAGQAFAGAEAKQACAJAAAMIAABYIgBACIgDACIgGABIgGgBIgEgCIAAgCIAAgNQgJAJgLAFQgLAFgLABQgKAAgIgEgAgHAIQgHABgFADQgEAEgDAEQgDAFABAGQgBAKAIAHQAGAFAMABQAIgBAIgFQAIgEAJgKIAAgcIgVAAQgJAAgHACg");
	this.shape_1.setTransform(368.7,188.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgRBIIgMgEIgJgDIgEgDIgDgFIgBgHIAAgEIACgEIABgBIACgBIAEACIAIAFIALAEQAGACAIAAQAGAAAEgCQAGgBADgCQAEgDACgEQACgDAAgGQAAgFgDgFQgDgDgFgEIgKgEIgLgFIgNgGQgFgCgFgEQgFgFgDgGQgCgHAAgJQAAgHACgIQAEgHAFgFQAHgFAJgEQAIgCALAAIALABIAJABIAIADIAFADIACACIABACIAAADIAAAEIAAAEIgBADIgBACIgCABIgEgCIgGgEIgKgDQgFgCgHAAQgFAAgEACQgFABgDACQgDADgBAEQgDADAAAEQAAAGAEAEQACADAGAEIAJAFIAMAFIAMAFQAGACAGAFQAEAEADAGQACAHABAIQgBAKgDAIQgEAIgHAGQgGAEgKADQgKAEgKAAIgNgBg");
	this.shape_2.setTransform(356.1,188.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgWBDQgMgEgJgIQgIgKgEgNQgFgOAAgRQAAgQAFgOQAEgNAJgKQAIgJALgGQAMgEAOAAQAPAAALAEQALAGAHAIQAHAIADAMQAEALAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAALADAIQACAKAFAFQAFAHAIADQAJADAKABQAKAAAHgCIANgDIAJgDIAFgDIACACIABABIABADIAAAEIAAAEIAAACIgBACIgBACIgFACIgKADIgPAEQgIABgKABQgPAAgMgGgAgNgyQgHAEgFAFQgEAGgDAIQgCAHgBAIIBHAAQABgTgJgLQgJgKgSAAQgIAAgGACg");
	this.shape_3.setTransform(342.7,188.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AggBHIgDgBIgCgBIgBgCIAAiDIABgCIACgCIADAAIAGAAIAFAAIADAAIACACIAAACIAAATIALgNIAIgIQADgCAFgBIAJgBIADAAIAGABIAEABIAEABIABABIAAACIABAEIAAAEIAAAGIgBADIgBADIgCAAIgDAAIgEgCIgFgBIgFgBIgHABIgIAGIgHAJIgJANIAABWIgBACIgCABIgEABIgFABIgHgBg");
	this.shape_4.setTransform(331.3,188.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgdBfQgMgDgHgEQgHgFgDgHQgDgGAAgIIABgJQABgFACgEIAGgIIAJgHQgIgEgDgFQgEgGAAgGQAAgIAEgHQAEgHAFgGQgEgFgDgHQgDgHAAgJQAAgMAEgJQAEgJAHgGQAHgGAJgDQAJgEAMAAIAKABIAJACIAoAAQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAIABAIIgBAHQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgTAAQAGAGACAGQACAGAAAHQAAAMgEAJQgEAIgGAGQgHAGgKAEQgJADgKAAQgJAAgHgCQgHgCgEgEIgEAGQgCAEAAADQAAAFAFAEQAFADAHAAIAiACQAKAAAIADQAIACAGAFQAGAEADAHQAEAGAAAJQAAAJgEAIQgEAIgIAGQgHAHgNADQgMAEgPAAQgQAAgLgDgAgeAqIgFAGIgCAGIgBAGQAAAJAKAFQAKAFARAAQAKAAAHgCQAIgCAEgEQAFgDACgFQACgEAAgFQAAgJgHgEQgHgFgMAAIghgBIgIAHgAgPhMQgFADgEAEQgDAEgCAFQgCAFAAAGQAAANAIAIQAHAHAOAAQAGAAAFgCQAFgCAEgEQADgEACgGQACgFAAgGQAAgNgIgHQgHgIgNAAQgHAAgFACg");
	this.shape_5.setTransform(318.1,190.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgWBDQgMgEgJgIQgIgKgEgNQgFgOAAgRQAAgQAFgOQAEgNAJgKQAIgJALgGQAMgEAOAAQAPAAALAEQALAGAHAIQAHAIADAMQAEALAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAALADAIQACAKAFAFQAFAHAIADQAJADAKABQAKAAAHgCIANgDIAJgDIAFgDIACACIABABIABADIAAAEIAAAEIAAACIgBACIgBACIgFACIgKADIgPAEQgIABgKABQgPAAgMgGgAgNgyQgHAEgFAFQgEAGgDAIQgCAHgBAIIBHAAQABgTgJgLQgJgKgSAAQgIAAgGACg");
	this.shape_6.setTransform(303.6,188.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgfBHIgEgBIgCgBIAAgCIAAiDIAAgCIABgCIAEAAIAFAAIAGAAIADAAIACACIAAACIAAATIAKgNIAIgIQAFgCAEgBIAIgBIAFAAIAEABIAGABIACABIABABIABACIAAAEIAAAEIAAAGIgBADIgBADIgBAAIgDAAIgEgCIgEgBIgHgBIgHABIgHAGIgHAJIgJANIAABWIgBACIgCABIgDABIgHABIgFgBg");
	this.shape_7.setTransform(292.2,188.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgmBbQgPgGgLgMQgKgNgFgSQgFgSAAgXQAAgVAGgTQAFgSALgNQALgNAQgHQAQgHAVAAQAVAAAPAHQAQAGAKAMQALAMAFASQAFASAAAXQAAAWgGASQgFATgLANQgLANgQAHQgQAHgVAAQgVAAgQgHgAgahFQgLAGgHALQgHAKgDAOQgDANAAAPQAAAQADAOQACAOAHAKQAHAKALAGQALAGAQAAQAQAAALgGQALgHAHgKQAHgLADgNQADgOAAgPQAAgQgDgNQgDgOgGgKQgHgLgLgFQgLgGgQAAQgQAAgLAGg");
	this.shape_8.setTransform(338.4,132.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("Ag+BfQgEAAgDgCQgDgDAAgGIAAioQAAgFADgCQADgDAEAAIArAAQAXAAARAHQARAGALAMQAMAMAGARQAGARAAAVQAAAYgHASQgFATgNAMQgMAMgRAGQgSAGgYAAgAguBKIAZAAQATAAALgFQANgEAHgKQAJgJAFgOQADgOAAgTQAAgPgDgNQgEgOgIgJQgJgKgMgFQgLgGgUAAIgZAAg");
	this.shape_9.setTransform(319.8,132.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgFBfIgEgBIgCgBIgBgCIAAi1IABgCIACgBIAEgBIAFgBIAGABIAEABIACABIABACIAAC1IgBACIgCABIgEABIgGABIgFgBg");
	this.shape_10.setTransform(306.2,132.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AhABfIgEgBIgCgBIgBgDIAAitQAAgGAEgDQADgCAEAAIAMAAIAIABIAFACIAFAFIAEAHIAsBTIAIAOIAHAPIAHANIAHAOIAAgYIAAgYIAAhmIAAgCIACgBIAEgBIAGAAIAGAAIAEABIACABIABACIAACuIgBAFIgDAEIgDACIgEAAIgJAAIgHgBQgDAAgCgDIgFgFIgGgKIg5hrIgJgRIgJgSIAAAVIABAXIAABwIgBADIgCABIgEABIgGABIgGgBg");
	this.shape_11.setTransform(292.8,132.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgqBfQgEAAgCgCQgEgDAAgGIAAioQAAgFAEgCQACgDAEAAIBZAAIACABIABACIABADIABAFIgBAFIgBADIgBACIgCAAIhJAAIAAA8IA+AAIACAAIACACIABADIAAAFIAAAEIgBADIgCACIgCAAIg+AAIAABEIBKAAIACAAIACACIABAEIAAAEIAAAFIgBADIgCACIgCABg");
	this.shape_12.setTransform(276.2,132.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AgEBgIgEgBIgDAAIgDgBIgBgCIgBgCIg+ivIgBgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAFgBIAHgBIAHABIAEAAIACACIABACIA2CfIA1ieIABgDIABgCIAFAAIAGgBIAHABIAFABIAAADIgBAFIg+CvIgCADIgDACIgEAAIgHABIgFAAg");
	this.shape_13.setTransform(260,132.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AhABfIgEgBIgCgBIgBgDIAAitQAAgGAEgDQADgCAEAAIAMAAIAIABIAFACIAFAFIAEAHIAsBTIAIAOIAHAPIAHANIAHAOIAAgYIAAgYIAAhmIAAgCIACgBIAEgBIAGAAIAGAAIAEABIACABIABACIAACuIgBAFIgDAEIgDACIgEAAIgJAAIgHgBQgDAAgCgDIgFgFIgGgKIg5hrIgJgRIgJgSIAAAVIABAXIAABwIgBADIgCABIgEABIgGABIgGgBg");
	this.shape_14.setTransform(241.8,132.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgqBfQgEAAgCgCQgEgDAAgGIAAioQAAgFAEgCQACgDAEAAIBZAAIACABIABACIABADIABAFIgBAFIgBADIgBACIgCAAIhJAAIAAA8IA+AAIACAAIACACIABADIAAAFIAAAEIgBADIgCACIgCAAIg+AAIAABEIBKAAIACAAIACACIABAEIAAAEIAAAFIgBADIgCACIgCABg");
	this.shape_15.setTransform(225.2,132.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgFBfIgEgBIgCgBIgBgCIAAi1IABgCIACgBIAEgBIAFgBIAGABIAEABIACABIABACIAAC1IgBACIgCABIgEABIgGABIgFgBg");
	this.shape_16.setTransform(213.7,132.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("Ag0BfQgEAAgCgCQgDgDAAgGIAAioQAAgFADgCQACgDAEAAIArAAQAQAAALADQALAEAHAGQAHAGAEAJQADAJAAALQAAAHgBAGQgBAGgDAFQgEAGgEAEQgFAEgGACQAHACAHAEQAGADAGAGQAFAGACAIQAEAIAAAJQAAAJgCAIQgDAHgEAGQgEAGgGAFQgGAFgHADQgHADgIABQgJACgKAAgAgkBKIAkAAQAIAAAGgCQAHgCAFgEQAEgEAEgGQACgGAAgIQAAgJgCgGQgEgHgEgEQgGgEgIgDQgIgCgKAAIgeAAgAgkgMIAdAAQAIAAAGgCQAGgDAEgEQAEgFACgFIACgMQAAgHgCgGQgCgFgEgEQgFgEgGgCQgGgCgKAAIgaAAg");
	this.shape_17.setTransform(202.4,132.1);

	this.btn_bienvenido = new lib.btn_Bienvenido();
	this.btn_bienvenido.name = "btn_bienvenido";
	this.btn_bienvenido.parent = this;
	this.btn_bienvenido.setTransform(262.4,185.6,1,1,0,0,0,134.4,25);
	new cjs.ButtonHelper(this.btn_bienvenido, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_bienvenido},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bienve, new cjs.Rectangle(128,111,269,99.6), null);


// stage content:
(lib.login4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.TRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.BTNMENSUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_1 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.INICIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_INICIO.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_INICIO()
		{
			this.gotoAndStop(0);
		}
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.TRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.BTNMENSUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.TRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.BTNMENSUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_3 = function() {
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.TRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.BTNMENSUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Capa_1
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(275,28.1,1,1,0,0,0,219.4,20.3);

	this.TRIMESTRE = new lib.ANUALBTN();
	this.TRIMESTRE.name = "TRIMESTRE";
	this.TRIMESTRE.parent = this;
	this.TRIMESTRE.setTransform(367.5,449,1,1,0,0,0,38,28.5);
	this.TRIMESTRE.alpha = 0.051;
	new cjs.ButtonHelper(this.TRIMESTRE, 0, 1, 1);

	this.BTNMENSUAL = new lib.ANUALBTN();
	this.BTNMENSUAL.name = "BTNMENSUAL";
	this.BTNMENSUAL.parent = this;
	this.BTNMENSUAL.setTransform(274.5,449,1,1,0,0,0,38,28.5);
	this.BTNMENSUAL.alpha = 0.051;
	new cjs.ButtonHelper(this.BTNMENSUAL, 0, 1, 1);

	this.BTNANUAL = new lib.ANUALBTN();
	this.BTNANUAL.name = "BTNANUAL";
	this.BTNANUAL.parent = this;
	this.BTNANUAL.setTransform(182.5,449,1,1,0,0,0,38,28.5);
	this.BTNANUAL.alpha = 0.051;
	new cjs.ButtonHelper(this.BTNANUAL, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhUQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIABAAIABABIAAACIAAACIAAACIAAACIgBABIgBAAIgkAAIAAAeIAfAAIABAAIABABIABACIAAACIAAACIgBABIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIABADIgBACIgBABIAAABIgBAAg");
	this.shape.setTransform(397,449.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAZAwIgDAAIgCgBIgBgBIgBgBIgJgXIgDgHIgEgFIgEgEQgDgBgFAAIgIAAIAAAoIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUAAIAGABIADAAIAKADIAHAFQADADACAFIABAIIgBAJIgEAHQgCADgEACIgHACIAEADIADAEIAEAFIACAGIAJAVIABAEIABABIgBABIgBABIgCABIgDAAgAgSgEIAMAAIAIgBIAGgEQACgCABgDQACgDAAgDQAAgGgDgEQgCgDgGgCIgDgBIgGAAIgLAAg");
	this.shape_1.setTransform(389.4,449.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAAAwIgCAAIgCgBIgBgBIgBgBIAAhRIgaAAIgBAAIgBgBIAAgCIgBgCIABgDIAAgBIABgBIABgBIBBAAIABABIABABIAAABIAAADIAAACIAAACIgBABIgBAAIgaAAIAABRIgBABIgBABIgCABIgDAAg");
	this.shape_2.setTransform(381.3,449.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLAwIgHgCIgFgDIgDgCIgCgCIAAgEIAAgCIABgCIAAgBIABAAIADABIAFADIAHADIAKABIAGgBIAGgDIAEgFQABgDAAgEQAAgEgCgDIgFgFIgGgEIgHgDIgIgEIgHgFIgFgHQgCgEAAgGQAAgGACgFQADgEADgDQAEgEAGgBQAFgCAFAAIAGABIAGABIAFACIADACIABABIABABIAAACIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgHgBIgGABIgFACIgDAFIgBAFQAAAEACADIAFAFIAGAEIAIADIAIAEIAHAFQADADABAEQACAEAAAGQAAAGgCAGQgDAFgEADQgEAEgGACQgGACgGAAIgJgBg");
	this.shape_3.setTransform(374.2,449.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgUAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhUQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAsAAIABAAIAAABIAAACIAAACIAAACIAAACIAAABIgBAAIglAAIAAAeIAfAAIABAAIABABIAAACIAAACIAAACIAAABIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAACIgBABIAAABIgBAAg");
	this.shape_4.setTransform(367.4,449.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAtAwIgCAAIgCgBIgBgBIgBgBIAAhRIghBSIgBABIgBAAIgCABIgCAAIgCAAIgCgBIgBAAIgBgBIgfhSIgBAAIAABRIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAIAAIAEABIADABIACADIABADIAbBEIAchEIACgDIACgDIADgBIADgBIAIAAIADABIABABIABACIABACIAABWIAAABIgBABIgCABIgEAAg");
	this.shape_5.setTransform(357,449.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhaIAAgBIABAAIACgBIACAAIADAAIACABIABAAIAAABIAABaIAAABIgBABIgCABIgDAAg");
	this.shape_6.setTransform(348.7,449.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAZAwIgDAAIgCgBIgBgBIgBgBIgJgXIgDgHIgEgFIgEgEQgDgBgFAAIgIAAIAAAoIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUAAIAGABIADAAIAKADIAHAFQADADACAFIABAIIgBAJIgEAHQgCADgEACIgHACIAEADIADAEIAEAFIACAGIAJAVIABAEIABABIgBABIgBABIgCABIgDAAgAgSgEIAMAAIAIgBIAGgEQACgCABgDQACgDAAgDQAAgGgDgEQgCgDgGgCIgDgBIgGAAIgLAAg");
	this.shape_7.setTransform(343.1,449.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhRIgbAAIgBAAIAAgBIgBgCIAAgCIAAgDIABgBIAAgBIABgBIBBAAIABABIABABIABABIAAADIAAACIgBACIgBABIgBAAIgbAAIAABRIAAABIgBABIgCABIgDAAg");
	this.shape_8.setTransform(335,449.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgSAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhXIABgBIABgBIACAAIADAAIADAAIACAAIABABIAAABIAABRIAhAAIACAAIAAABIABABIAAADIAAADIgBABIAAABIgCAAg");
	this.shape_9.setTransform(302,449.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_10.setTransform(293.9,449.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgOAuQgHgCgEgFQgFgEgCgHQgDgHAAgIIAAg6IAAgBIACgBIABAAIAEAAIADAAIABAAIABABIABABIAAA4QAAAHABAFQACAFADADQADADAEACQAFABAEAAQAFAAAFgBQAEgCADgDIAFgIQABgFAAgGIAAg5IAAgBIABgBIACAAIADAAIADAAIACAAIABABIABABIAAA5QAAAIgDAHQgCAHgFAFQgFAEgHADQgGACgIAAQgIAAgGgCg");
	this.shape_11.setTransform(284.8,449.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgLAwIgHgCIgFgDIgDgCIgCgCIAAgEIAAgCIABgCIAAgBIABAAIADABIAFADIAHADIAKABIAGgBIAGgDIAEgFQABgDAAgEQAAgEgCgDIgFgFIgGgEIgHgDIgIgEIgHgFIgFgHQgCgEAAgGQAAgGACgFQADgEADgDQAEgEAGgBQAFgCAFAAIAGABIAGABIAFACIADACIABABIABABIAAACIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgHgBIgGABIgFACIgDAFIgBAFQAAAEACADIAFAFIAGAEIAIADIAIAEIAHAFQADADABAEQACAEAAAGQAAAGgCAGQgDAFgEADQgEAEgGACQgGACgGAAIgJgBg");
	this.shape_12.setTransform(276.5,449.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_13.setTransform(268.2,449.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgUAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhUQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAsAAIAAAAIABABIAAACIAAACIAAACIAAACIgBABIAAAAIglAAIAAAeIAfAAIABAAIABABIABACIAAACIAAACIgBABIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAACIgBABIAAABIgBAAg");
	this.shape_14.setTransform(260,449.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAtAwIgDAAIgBgBIgBgBIgBgBIAAhRIgiBSIAAABIgBAAIgCABIgCAAIgCAAIgCgBIgBAAIgBgBIgghSIAAAAIAABRIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIAAgBIAAhWQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAHAAIAFABIADABIACADIABADIAbBEIAdhEIABgDIACgDIADgBIADgBIAIAAIADABIABABIABACIAAACIAABWIAAABIgBABIgBABIgEAAg");
	this.shape_15.setTransform(249.7,449.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgSAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhXIABgBIABgBIACAAIADAAIADAAIACAAIABABIAAABIAABRIAhAAIABAAIABABIAAABIAAADIAAADIAAABIgBABIgBAAg");
	this.shape_16.setTransform(201.8,449.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_17.setTransform(193.7,449.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgOAuQgHgCgEgFQgFgEgCgHQgDgHAAgIIAAg6IAAgBIACgBIABAAIAEAAIADAAIABAAIABABIABABIAAA4QAAAHABAFQACAFADADQADADAEACQAFABAEAAQAFAAAFgBQAEgCADgDIAFgIQABgFAAgGIAAg5IAAgBIABgBIACAAIADAAIADAAIACAAIABABIABABIAAA5QAAAIgDAHQgCAHgFAFQgFAEgHADQgGACgIAAQgIAAgGgCg");
	this.shape_18.setTransform(184.6,449.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_19.setTransform(174.9,449.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_20.setTransform(165.7,449.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2E6E88").ss(1,1,1).p("AF8AAQAACehvBvQhvBvieAAQidAAhvhvQhvhvAAieQAAidBvhvQBvhvCdAAQCeAABvBvQBvBvAACdg");
	this.shape_21.setTransform(366.5,448);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkMEMQhvhvAAidQAAidBvhvQBwhvCcAAQCdAABwBvQBvBvAACdQAACdhvBvQhwBwidAAQicAAhwhwg");
	this.shape_22.setTransform(366.5,448);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2E6E88").ss(1,1,1).p("AF8AAQAACehvBvQhvBvieAAQidAAhvhvQhvhvAAieQAAidBvhvQBvhvCdAAQCeAABvBvQBvBvAACdg");
	this.shape_23.setTransform(274.5,448);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AkMEMQhvhvAAidQAAidBvhvQBvhvCdAAQCeAABuBvQBwBvAACdQAACdhwBvQhuBwieAAQidAAhvhwg");
	this.shape_24.setTransform(274.5,448);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2E6E88").ss(1,1,1).p("AF8AAQAACehwBvQhuBvieAAQidAAhvhvQhvhvAAieQAAidBvhvQBvhvCdAAQCeAABuBvQBwBvAACdg");
	this.shape_25.setTransform(182.5,448);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkMEMQhvhvAAidQAAidBvhvQBvhvCdAAQCdAABvBvQBwBvAACdQAACdhwBvQhvBwidAAQidAAhvhwg");
	this.shape_26.setTransform(182.5,448);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_27.setTransform(278.5,396);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_28.setTransform(278.5,499);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_29.setTransform(278.5,404);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_30.setTransform(278.5,495);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_31.setTransform(278.5,400);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_32.setTransform(278.5,491);

	this.instance_1 = new lib.dinero();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274,360.5,1,1,0,0,0,-6.5,110);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003366").s().p("Egq8AfXMAAAg+uMBV5AAAMAAAA+ug");
	this.shape_33.setTransform(275,252.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["login4_atlas_"],0), null, new cjs.Matrix2D(0.75,0,0,0.75,-131.5,-181.5)).s().p("AgEINIAAwZIAJAAIAAQZg");
	this.shape_34.setTransform(-3.4,82.6);

	this.INICIO = new lib.INICIO();
	this.INICIO.name = "INICIO";
	this.INICIO.parent = this;
	this.INICIO.setTransform(135.5,449,1,1,0,0,0,38,28.5);
	this.INICIO.alpha = 0.238;
	new cjs.ButtonHelper(this.INICIO, 0, 1, 1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ADdEAQABgohdgYQgngLiDgTQhcgOABgOQgBgYBygPIhKAAQhwAKAAAfQgBAbBBASIB5AcQBAASAAAdIk+AAIAAj/IBwAAIAAhAIgPALIgegrIDPihIA/AxIAAgxIA5AAIAABeIBYBDIgfArIgPgLIAABAIBxAAIAAD/gAgTg2IAACTICqAAIAAi1IAXATIARgZIhQhAIAAhaIgnAAIAAA9IhIg5IjACWIASAZIAXgTIAAC1IA6AAIAAiTgAAWAiIAAhYIBgAAIAABYg");
	this.shape_35.setTransform(137.1,447.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhUQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIACAAIAAABIABACIAAACIAAACIgBACIAAABIgCAAIgkAAIAAAeIAfAAIABAAIABABIAAACIAAACIAAACIAAABIgBABIgBAAIgfAAIAAAiIAlAAIABAAIABABIAAACIABADIgBACIAAABIgBABIgBAAg");
	this.shape_36.setTransform(444,449.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhRIgbAAIgBAAIAAgBIgBgCIgBgCIABgDIABgBIAAgBIABgBIBBAAIABABIABABIAAABIAAADIAAACIAAACIgBABIgBAAIgbAAIAABRIAAABIgBABIgCABIgDAAg");
	this.shape_37.setTransform(428.3,449.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhUQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIABAAIABABIAAACIAAACIAAACIAAACIgBABIgBAAIgkAAIAAAeIAfAAIABAAIABABIABACIAAACIAAACIgBABIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAACIgBABIAAABIgBAAg");
	this.shape_38.setTransform(414.4,449.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAtAwIgDAAIgBgBIgBgBIgBgBIAAhRIgiBSIAAABIgBAAIgCABIgCAAIgDAAIgBgBIgBAAIgBgBIgghSIAAAAIAABRIAAABIgBABIgCABIgDAAIgEAAIgBgBIgBgBIAAgBIAAhWQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAHAAIAFABIADABIACADIABADIAbBEIAdhEIABgDIACgDIADgBIADgBIAIAAIADABIABABIABACIAAACIAABWIAAABIgBABIgBABIgEAAg");
	this.shape_39.setTransform(404,449.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAAAwIgCAAIgCgBIgBgBIgBgBIAAhRIgaAAIgBAAIgBgBIAAgCIgBgCIABgDIAAgBIABgBIABgBIBBAAIABABIABABIABABIAAADIAAACIgBACIgBABIgBAAIgaAAIAABRIgBABIgBABIgCABIgDAAg");
	this.shape_40.setTransform(382,449.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgTAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhXIAAgBIABgBIACAAIADAAIADAAIACAAIABABIAAABIAABRIAhAAIACAAIAAABIAAABIAAADIAAADIAAABIAAABIgCAAg");
	this.shape_41.setTransform(349,449.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAuAwIgEAAIgCgBIAAgBIgBgBIAAhRIgiBSIAAABIgBAAIgCABIgCAAIgDAAIgBgBIgBAAIgBgBIgghSIAAAAIAABRIAAABIgBABIgCABIgDAAIgEAAIgBgBIgBgBIAAgBIAAhWQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAHAAIAFABIADABIACADIACADIAaBEIAdhEIABgDIACgDIADgBIADgBIAIAAIADABIABABIABACIAAACIAABWIAAABIgBABIgBABIgDAAg");
	this.shape_42.setTransform(296.7,449.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_43.setTransform(221.9,449.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AkMEMQhvhvAAidQAAidBvhvQBwhvCcAAQCeAABvBvQBvBvAACdQAACdhvBvQhvBwieAAQicAAhwhwg");
	this.shape_44.setTransform(413.5,448);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2E6E88").ss(1,1,1).p("AF8AAQAACehvBvQhvBvieAAQidAAhvhvQhvhvAAieQAAidBvhvQBvhvCdAAQCeAABvBvQBvBvAACdg");
	this.shape_45.setTransform(229.5,448);

	this.instance_2 = new lib.icanual();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,202.5);

	this.instance_3 = new lib.icmensual();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,202.5);

	this.instance_4 = new lib.ictrimestral();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:182.5}},{t:this.shape_25,p:{x:182.5}},{t:this.shape_24,p:{x:274.5}},{t:this.shape_23,p:{x:274.5}},{t:this.shape_22,p:{x:366.5}},{t:this.shape_21,p:{x:366.5}},{t:this.shape_20,p:{x:165.7}},{t:this.shape_19},{t:this.shape_18,p:{x:184.6}},{t:this.shape_17,p:{x:193.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:268.2}},{t:this.shape_12,p:{x:276.5}},{t:this.shape_11,p:{x:284.8}},{t:this.shape_10,p:{x:293.9}},{t:this.shape_9,p:{x:302}},{t:this.shape_8},{t:this.shape_7,p:{x:343.1}},{t:this.shape_6,p:{x:348.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:374.2}},{t:this.shape_2},{t:this.shape_1,p:{x:389.4}},{t:this.shape,p:{x:397}},{t:this.BTNANUAL,p:{x:182.5,alpha:0.051}},{t:this.BTNMENSUAL,p:{x:274.5}},{t:this.TRIMESTRE,p:{x:367.5}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.shape_24,p:{x:229.5}},{t:this.shape_45},{t:this.shape_22,p:{x:321.5}},{t:this.shape_23,p:{x:321.5}},{t:this.shape_44},{t:this.shape_21,p:{x:413.5}},{t:this.shape_20,p:{x:212.7}},{t:this.shape_43},{t:this.shape_18,p:{x:231.6}},{t:this.shape_17,p:{x:240.7}},{t:this.shape_9,p:{x:248.8}},{t:this.shape_42},{t:this.shape,p:{x:307}},{t:this.shape_13,p:{x:315.2}},{t:this.shape_12,p:{x:323.5}},{t:this.shape_11,p:{x:331.8}},{t:this.shape_10,p:{x:340.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_7,p:{x:390.1}},{t:this.shape_6,p:{x:395.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_3,p:{x:421.2}},{t:this.shape_37},{t:this.shape_1,p:{x:436.4}},{t:this.shape_36},{t:this.BTNANUAL,p:{x:229.5,alpha:0.238}},{t:this.BTNMENSUAL,p:{x:321.5}},{t:this.TRIMESTRE,p:{x:414.5}},{t:this.shape_26,p:{x:136.5}},{t:this.shape_25,p:{x:136.5}},{t:this.shape_35},{t:this.INICIO}]},1).to({state:[{t:this.instance_3},{t:this.shape_24,p:{x:229.5}},{t:this.shape_45},{t:this.shape_22,p:{x:321.5}},{t:this.shape_23,p:{x:321.5}},{t:this.shape_44},{t:this.shape_21,p:{x:413.5}},{t:this.shape_20,p:{x:212.7}},{t:this.shape_43},{t:this.shape_18,p:{x:231.6}},{t:this.shape_17,p:{x:240.7}},{t:this.shape_9,p:{x:248.8}},{t:this.shape_42},{t:this.shape,p:{x:307}},{t:this.shape_13,p:{x:315.2}},{t:this.shape_12,p:{x:323.5}},{t:this.shape_11,p:{x:331.8}},{t:this.shape_10,p:{x:340.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_7,p:{x:390.1}},{t:this.shape_6,p:{x:395.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_3,p:{x:421.2}},{t:this.shape_37},{t:this.shape_1,p:{x:436.4}},{t:this.shape_36},{t:this.BTNANUAL,p:{x:229.5,alpha:0.238}},{t:this.BTNMENSUAL,p:{x:321.5}},{t:this.TRIMESTRE,p:{x:414.5}},{t:this.shape_26,p:{x:136.5}},{t:this.shape_25,p:{x:136.5}},{t:this.shape_35},{t:this.INICIO}]},1).to({state:[{t:this.instance_4},{t:this.shape_24,p:{x:229.5}},{t:this.shape_45},{t:this.shape_22,p:{x:321.5}},{t:this.shape_23,p:{x:321.5}},{t:this.shape_44},{t:this.shape_21,p:{x:413.5}},{t:this.shape_20,p:{x:212.7}},{t:this.shape_43},{t:this.shape_18,p:{x:231.6}},{t:this.shape_17,p:{x:240.7}},{t:this.shape_9,p:{x:248.8}},{t:this.shape_42},{t:this.shape,p:{x:307}},{t:this.shape_13,p:{x:315.2}},{t:this.shape_12,p:{x:323.5}},{t:this.shape_11,p:{x:331.8}},{t:this.shape_10,p:{x:340.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_7,p:{x:390.1}},{t:this.shape_6,p:{x:395.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_3,p:{x:421.2}},{t:this.shape_37},{t:this.shape_1,p:{x:436.4}},{t:this.shape_36},{t:this.BTNANUAL,p:{x:229.5,alpha:0.238}},{t:this.BTNMENSUAL,p:{x:321.5}},{t:this.TRIMESTRE,p:{x:414.5}},{t:this.shape_26,p:{x:136.5}},{t:this.shape_25,p:{x:136.5}},{t:this.shape_35},{t:this.INICIO}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.1,260.3,554.9,527.7);
// library properties:
lib.properties = {
	id: '858D956FBD12074B8CFF87E75C15A0EB',
	width: 550,
	height: 505,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images3/login4_atlas_.png?1655138558442", id:"login4_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1655138558719", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1655138558719", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1655138558719", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['858D956FBD12074B8CFF87E75C15A0EB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;