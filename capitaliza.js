(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"capitaliza_atlas_", frames: [[0,499,700,484],[0,0,703,497],[0,985,360,200]]}
];


// symbols:



(lib.copiaMapadebits11 = function() {
	this.spriteSheet = ss["capitaliza_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.inversion = function() {
	this.spriteSheet = ss["capitaliza_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.moneyloanremovebgpreview = function() {
	this.spriteSheet = ss["capitaliza_atlas_"];
	this.gotoAndStop(2);
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



(lib.QUINCENAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhYIAAgBIABAAIACAAIADAAIADAAIACAAIABAAIAAABIAABRIAhAAIABABIABABIAAACIAAACIAAACIAAACIgBABIgBAAg");
	this.shape.setTransform(75.4,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_1.setTransform(67.3,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_2.setTransform(58.1,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgUAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhUQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAsAAIAAAAIABABIAAABIAAADIAAADIAAABIgBABIAAAAIglAAIAAAeIAfAAIABAAIABABIABACIAAACIAAABIgBACIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAABIgBACIAAABIgBAAg");
	this.shape_3.setTransform(49.9,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgKAtQgIgCgEgHQgGgGgCgIQgDgJgBgMQABgKADgKQADgJAFgHQAGgFAHgEQAIgEAIABIAIABIAIABIAFADIAEADIABABIABABIAAACIAAACIAAADIAAACIgBAAIgBAAIgDAAIgFgEIgHgDQgEgBgGAAQgGAAgEACQgGADgDAEQgEAFgCAHQgCAIAAAHQAAAJACAHQACAHAEAFQADAFAGACQAEACAGAAQAGAAAEgBIAHgDIAGgDIADgCIABABIAAAAIAAADIAAACIAAACIAAABIAAACIgBABIgDADIgGACIgJACIgJACQgIgBgIgDg");
	this.shape_4.setTransform(42.1,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_5.setTransform(33.1,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhaIAAgBIABAAIACgBIACAAIADAAIACABIABAAIAAABIAABaIAAABIgBABIgCABIgDAAg");
	this.shape_6.setTransform(26.3,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgOAuQgHgCgEgFQgFgEgCgHQgDgHAAgIIAAg6IAAgBIACgBIABAAIAEAAIADAAIABAAIABABIABABIAAA4QAAAHABAFQACAFADADQADADAEACQAFABAEAAQAFAAAFgBQAEgCADgDIAFgIQABgFAAgGIAAg5IAAgBIABgBIACAAIADAAIADAAIACAAIABABIABABIAAA5QAAAIgDAHQgCAHgFAFQgFAEgHADQgGACgIAAQgIAAgGgCg");
	this.shape_7.setTransform(19.7,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAtA3IgEgBIgHgDIgJgHIgKgHIgJAEQgFACgHgBQgKAAgJgDQgHgDgFgGQgFgGgDgJQgCgJAAgLQAAgLADgJQACgJAGgHQAFgGAIgDQAIgEALAAQAJAAAIADQAHADAGAGQAFAGADAJQACAJAAAMIAAAKIgCAKIgEAJIgFAIIAJAHIAGADIAFACIACABIABACIAAAEIAAACIgBACIgBABIgBAAgAgSgoQgGADgDAFQgEAFgCAHQgBAHAAAHQAAAIABAGQACAHADAGQADAFAGADQAGADAIAAQAHAAAGgDQAGgDADgGQAEgFABgHIABgNIgBgPQgBgIgEgEQgDgGgGgCQgFgDgIgBQgIABgFADg");
	this.shape_8.setTransform(10.3,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_9.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


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


(lib.crece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.moneyloanremovebgpreview();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,200);


(lib.BTNTRIMESTRE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAhYIABgBIABAAIACAAIADAAIADAAIACAAIABAAIAAABIAABRIAhAAIABABIABABIAAACIAAACIAAACIAAACIgBABIgBAAg");
	this.shape.setTransform(77.2,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_1.setTransform(69.1,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAZAwIgDAAIgCgBIgBgBIgBgBIgJgXIgDgHIgEgFIgEgEQgDgBgFAAIgIAAIAAAoIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUAAIAGABIADAAIAKADIAHAFQADADACAFIABAIIgBAJIgEAHQgCADgEACIgHACIAEADIADAEIAEAFIACAGIAJAVIABAEIABABIgBABIgBABIgCABIgDAAgAgSgEIAMAAIAIgBIAGgEQACgCABgDQACgDAAgDQAAgGgDgEQgCgDgGgCIgDgBIgGAAIgLAAg");
	this.shape_2.setTransform(61,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIgBgBIAAhRIgaAAIgBAAIgBgBIAAgCIAAgCIAAgDIAAgBIABgBIABgBIBBAAIABABIABABIABABIAAADIAAACIgBACIgBABIgBAAIgaAAIAABRIgBABIgBABIgCABIgDAAg");
	this.shape_3.setTransform(53,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgLAwIgHgCIgFgDIgDgCIgCgCIAAgEIAAgCIABgCIAAgBIABAAIADABIAFADIAHADIAKABIAGgBIAGgDIAEgFQABgDAAgEQAAgEgCgDIgFgFIgGgEIgHgDIgIgEIgHgFIgFgHQgCgEAAgGQAAgGACgFQADgEADgDQAEgEAGgBQAFgCAFAAIAGABIAGABIAFACIADACIABABIABABIAAACIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgHgBIgGABIgFACIgDAFIgBAFQAAAEACADIAFAFIAGAEIAIADIAIAEIAHAFQADADABAEQACAEAAAGQAAAGgCAGQgDAFgEADQgEAEgGACQgGACgGAAIgJgBg");
	this.shape_4.setTransform(45.8,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhUQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIACAAIAAABIABABIAAADIAAADIgBABIAAABIgCAAIgkAAIAAAeIAfAAIABAAIABABIAAACIAAACIAAABIAAACIgBABIgBAAIgfAAIAAAiIAlAAIABAAIABABIAAACIABADIgBABIAAACIgBABIgBAAg");
	this.shape_5.setTransform(39,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAuAwIgDAAIgDgBIgBgBIAAgBIAAhRIgiBSIAAABIgCAAIgBABIgCAAIgDAAIgBgBIgBAAIgBgBIgfhSIgBAAIAABRIAAABIgBABIgCABIgDAAIgEAAIgBgBIgBgBIgBgBIAAhWQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAIAAIAEABIADABIACADIACADIAaBEIAdhEIABgDIACgDIADgBIADgBIAIAAIACABIACABIABACIABACIAABWIAAABIgCABIgCABIgCAAg");
	this.shape_6.setTransform(28.7,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhaIAAgBIABAAIACgBIACAAIADAAIACABIABAAIAAABIAABaIAAABIgBABIgCABIgDAAg");
	this.shape_7.setTransform(20.3,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AAZAwIgDAAIgCgBIgBgBIgBgBIgJgXIgDgHIgEgFIgEgEQgDgBgFAAIgIAAIAAAoIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUAAIAGABIADAAIAKADIAHAFQADADACAFIABAIIgBAJIgEAHQgCADgEACIgHACIAEADIADAEIAEAFIACAGIAJAVIABAEIABABIgBABIgBABIgCABIgDAAgAgSgEIAMAAIAIgBIAGgEQACgCABgDQACgDAAgDQAAgGgDgEQgCgDgGgCIgDgBIgGAAIgLAAg");
	this.shape_8.setTransform(14.7,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhRIgbAAIgBAAIAAgBIgBgCIgBgCIABgDIABgBIAAgBIABgBIBBAAIABABIABABIAAABIAAADIAAACIAAACIgBABIgBAAIgbAAIAABRIAAABIgBABIgCABIgDAAg");
	this.shape_9.setTransform(6.7,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_10.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


(lib.BTNSEMANAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhYIABgBIABAAIACAAIADAAIADAAIACAAIABAAIAAABIAABRIAhAAIACABIAAABIABACIAAACIAAACIgBACIAAABIgCAAg");
	this.shape.setTransform(69,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_1.setTransform(60.9,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_2.setTransform(51.7,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_3.setTransform(42.5,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAtAwIgCAAIgCgBIgBgBIgBgBIAAhRIghBSIgBABIgBAAIgCABIgCAAIgCAAIgCgBIgBAAIgBgBIgghSIAAAAIAABRIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIAAgBIAAhWQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAHAAIAFABIADABIACADIABADIAbBEIAchEIACgDIACgDIADgBIADgBIAIAAIADABIABABIABACIAAACIAABWIAAABIAAABIgCABIgEAAg");
	this.shape_4.setTransform(31.8,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhUQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIABAAIABABIAAABIAAADIAAADIAAABIgBABIgBAAIgkAAIAAAeIAfAAIABAAIABABIABACIAAACIAAABIgBACIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAABIgBACIAAABIgBAAg");
	this.shape_5.setTransform(22,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgLAwIgHgCIgFgDIgDgCIgCgCIAAgEIAAgCIABgCIAAgBIABAAIADABIAFADIAHADIAKABIAGgBIAGgDIAEgFQABgDAAgEQAAgEgCgDIgFgFIgGgEIgHgDIgIgEIgHgFIgFgHQgCgEAAgGQAAgGACgFQADgEADgDQAEgEAGgBQAFgCAFAAIAGABIAGABIAFACIADACIABABIABABIAAACIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgHgBIgGABIgFACIgDAFIgBAFQAAAEACADIAFAFIAGAEIAIADIAIAEIAHAFQADADABAEQACAEAAAGQAAAGgCAGQgDAFgEADQgEAEgGACQgGACgGAAIgJgBg");
	this.shape_6.setTransform(14.6,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_7.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


(lib.BTNMENSUAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhYIABgBIABAAIACAAIADAAIADAAIACAAIABAAIAAABIAABRIAhAAIACABIAAABIABACIAAACIAAACIgBACIAAABIgCAAg");
	this.shape.setTransform(69.5,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_1.setTransform(61.4,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgOAuQgHgCgEgFQgFgEgCgHQgDgHAAgIIAAg6IAAgBIACgBIABAAIAEAAIADAAIABAAIABABIABABIAAA4QAAAHABAFQACAFADADQADADAEACQAFABAEAAQAFAAAFgBQAEgCADgDIAFgIQABgFAAgGIAAg5IAAgBIABgBIACAAIADAAIADAAIACAAIABABIABABIAAA5QAAAIgDAHQgCAHgFAFQgFAEgHADQgGACgIAAQgIAAgGgCg");
	this.shape_2.setTransform(52.3,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgLAwIgHgCIgFgDIgDgCIgCgCIAAgEIAAgCIABgCIAAgBIABAAIADABIAFADIAHADIAKABIAGgBIAGgDIAEgFQABgDAAgEQAAgEgCgDIgFgFIgGgEIgHgDIgIgEIgHgFIgFgHQgCgEAAgGQAAgGACgFQADgEADgDQAEgEAGgBQAFgCAFAAIAGABIAGABIAFACIADACIABABIABABIAAACIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgHgBIgGABIgFACIgDAFIgBAFQAAAEACADIAFAFIAGAEIAIADIAIAEIAHAFQADADABAEQACAEAAAGQAAAGgCAGQgDAFgEADQgEAEgGACQgGACgGAAIgJgBg");
	this.shape_3.setTransform(44,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_4.setTransform(35.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgVAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhUQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAsAAIABAAIABABIAAABIAAADIAAADIAAABIgBABIgBAAIgkAAIAAAeIAfAAIABAAIABABIABACIAAACIAAABIgBACIgBABIgBAAIgfAAIAAAiIAlAAIABAAIAAABIABACIAAADIAAABIgBACIAAABIgBAAg");
	this.shape_5.setTransform(27.5,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAuAwIgEAAIgCgBIAAgBIgBgBIAAhRIgiBSIAAABIgBAAIgCABIgCAAIgDAAIgBgBIgBAAIgBgBIgghSIAAAAIAABRIAAABIgBABIgCABIgDAAIgEAAIgBgBIgBgBIAAgBIAAhWQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIAHAAIAFABIADABIACADIABADIAbBEIAdhEIABgDIACgDIADgBIADgBIAIAAIADABIABABIABACIAAACIAABWIAAABIgBABIgBABIgDAAg");
	this.shape_6.setTransform(17.1,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_7.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


(lib.BTNDIARIO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTAtQgHgDgFgGQgGgGgCgJQgCgJAAgMQAAgKACgJQADgJAFgHQAGgGAIgDQAIgEAKAAQAKAAAIADQAIADAFAGQAFAGADAJQACAJAAAMQAAAKgCAJQgDAKgGAGQgFAHgIADQgIAEgKAAQgLAAgIgEgAgNgiQgFADgEAFQgDAFgCAHQgBAHAAAHQAAAIABAHQACAHADAFQADAFAGADQAFADAIAAQAIAAAFgDQAGgDAEgGQADgFABgHQACgHAAgHIgBgOQgCgHgDgFQgEgFgFgDQgGgDgIAAQgHAAgGADg");
	this.shape.setTransform(64.2,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhaIAAgBIABAAIACgBIACAAIADAAIACABIABAAIAAABIAABaIAAABIgBABIgCABIgDAAg");
	this.shape_1.setTransform(57.3,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAZAwIgDAAIgCgBIgBgBIgBgBIgJgXIgDgHIgEgFIgEgEQgDgBgFAAIgIAAIAAAoIAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUAAIAGABIADAAIAKADIAHAFQADADACAFIABAIIgBAJIgEAHQgCADgEACIgHACIAEADIADAEIAEAFIACAGIAJAVIABAEIABABIgBABIgBABIgCABIgDAAgAgSgEIAMAAIAIgBIAGgEQACgCABgDQACgDAAgDQAAgGgDgEQgCgDgGgCIgDgBIgGAAIgLAAg");
	this.shape_2.setTransform(51.7,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_3.setTransform(42.9,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAAAwIgCAAIgCgBIgBgBIAAgBIAAhaIAAgBIABAAIACgBIACAAIADAAIACABIABAAIAAABIAABaIAAABIgBABIgCABIgDAAg");
	this.shape_4.setTransform(36.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgfAvIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhUQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAWAAQALAAAIADQAJADAGAGQAGAGADAJQADAIAAAKQAAAMgDAJQgEAKgGAFQgGAHgIACQgKADgKAAgAgXAlIANAAQAJAAAFgDQAHgBAEgGQAEgEACgHQACgHAAgJQAAgIgCgGQgCgGgDgGQgFgEgGgDQgFgDgKAAIgNAAg");
	this.shape_5.setTransform(30.5,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_6.setTransform(17.8,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_7.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


(lib.BTNANUAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgSAvIgEgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAhYIABgBIABAAIACAAIADAAIADAAIACAAIABAAIAAABIAABRIAhAAIACABIAAABIABACIAAACIAAACIgBACIAAABIgCAAg");
	this.shape.setTransform(60.3,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_1.setTransform(52.2,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgOAuQgHgCgEgFQgFgEgCgHQgDgHAAgIIAAg6IAAgBIACgBIABAAIAEAAIADAAIABAAIABABIABABIAAA4QAAAHABAFQACAFADADQADADAEACQAFABAEAAQAFAAAFgBQAEgCADgDIAFgIQABgFAAgGIAAg5IAAgBIABgBIACAAIADAAIADAAIACAAIABABIABABIAAA5QAAAIgDAHQgCAHgFAFQgFAEgHADQgGACgIAAQgIAAgGgCg");
	this.shape_2.setTransform(43.1,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgcAwIgDAAIgCgBIgBgBIgBgBIAAhWQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIAEABIACABIACACIADAEIAVApIAEAHIAEAHIADAHIAEAHIgBgMIAAgMIAAgyIABgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABWIgBADIgBABIgCABIgCAAIgEAAIgDAAIgDgBIgDgDIgCgFIgcg1IgFgJIgEgJIAAALIAAALIAAA4IAAABIgBABIgCABIgDAAg");
	this.shape_3.setTransform(33.4,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAjAwIgEAAIgCgBIgBAAIAAgCIgJgXIgmAAIgIAXIAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgCIABgCIAghXIABgCIABAAIACgBIADAAIAEAAIACABIACAAIABACIAfBXIABACIgBACIgCABIgDAAgAgQAMIAgAAIgQguIAAAAg");
	this.shape_4.setTransform(24.2,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E3451").s().p("Al7CMQgeAAAAgeIAAjbQAAgeAeAAIL3AAQAeAAAAAeIAADbQAAAegeAAg");
	this.shape_5.setTransform(41,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,28);


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
	this.shape_8.graphics.f("#9E3451").s().p("Ap6CCIAAkDIT1AAIAAEDg");
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
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "green",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
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
	this.boton.setTransform(-54.4,12);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("Ag0BJIAAiRIAmAAIAAB1IBDAAIAAAcg");
	this.shape_58.setTransform(66.7,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_59.setTransform(51.8,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AAZBJIgog2IgRAAIAAA2IglAAIAAiRIA/AAQAMAAAJACQAKABAHAFQAJAFAFAIQAEAIAAALQABAQgIALQgHAJgPAGIAxA/gAgggGIAMAAIAPgBQAFAAAEgEQAEgDACgDQACgEgBgGQAAgGgBgEQgDgDgGgDIgHgCIgMAAIgOAAg");
	this.shape_60.setTransform(37.2,-123.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("AgSBJIAAh1IgtAAIAAgcIB/AAIAAAcIgtAAIAAB1g");
	this.shape_61.setTransform(21.5,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AgkBIQgNgDgMgFIAAgjIAEAAQAMAKAOAFQAOAFAOAAIAIgBIAJgCQAEgCADgCQADgDAAgFQAAgFgEgDQgEgEgIgCIgRgDIgRgFQgSgGgIgJQgIgKAAgPQAAgVASgMQASgNAcAAQAOAAAOADQAOACAKAEIAAAiIgEAAQgIgHgNgFQgNgFgNAAIgIABIgJACQgEACgDADQgDADAAAEQAAAFAFAEQAEADAMACIAPADIAQAFQAQAFAIAJQAIAJAAAPQAAAWgSANQgSANgeAAQgTAAgNgDg");
	this.shape_62.setTransform(7.8,-123.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("Ag0BJIAAiRIBoAAIAAAcIhCAAIAAAaIA+AAIAAAbIg+AAIAAAkIBCAAIAAAcg");
	this.shape_63.setTransform(-6,-123.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AAnBJIAAhhIgbA/IgZAAIgbg/IAABhIgjAAIAAiRIArAAIAgBIIAhhIIArAAIAACRg");
	this.shape_64.setTransform(-22.6,-123.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AgpBJIAAgaIAXAAIAAhdIgXAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_65.setTransform(-37.5,-123.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AAZBJIgog2IgQAAIAAA2IgmAAIAAiRIA/AAQAMAAAJACQAJABAJAFQAHAFAFAIQAGAIAAALQAAAQgIALQgHAJgOAGIAwA/gAgfgGIALAAIAPgBQAFAAAEgEQAEgDACgDQABgEAAgGQAAgGgCgEQgCgDgGgDIgHgCIgMAAIgNAAg");
	this.shape_66.setTransform(-49.8,-123.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AgSBJIAAh1IgtAAIAAgcIB/AAIAAAcIgtAAIAAB1g");
	this.shape_67.setTransform(-65.5,-123.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_68.setTransform(133.2,-148.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_69.setTransform(119.1,-150.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_70.setTransform(108.8,-150.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_71.setTransform(99.7,-148.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_72.setTransform(86.7,-148.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_73.setTransform(74.4,-148.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_74.setTransform(65,-150.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_75.setTransform(58.1,-150.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_76.setTransform(47.7,-148.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_77.setTransform(36.8,-149.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_78.setTransform(28.8,-150.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_79.setTransform(18.8,-146.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_80.setTransform(4.4,-148.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_81.setTransform(-7.7,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_82.setTransform(-27.1,-148.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_83.setTransform(-41.2,-150);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_84.setTransform(-61.5,-148.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_85.setTransform(-75.8,-150);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_86.setTransform(-89.3,-148.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_87.setTransform(-99.6,-150.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_88.setTransform(-107.3,-148.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_89.setTransform(-119.6,-148.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_90.setTransform(-132.9,-146.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_91.setTransform(99.2,-174.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_92.setTransform(87.8,-175.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_93.setTransform(77.5,-174.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_94.setTransform(64.8,-174.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_95.setTransform(51,-174.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_96.setTransform(37.3,-172.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_97.setTransform(19.4,-174.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_98.setTransform(1.9,-174.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_99.setTransform(-10.7,-174.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_100.setTransform(-29.3,-174.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_101.setTransform(-42,-176.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_102.setTransform(-53,-174.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_103.setTransform(-65.2,-174.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_104.setTransform(-76.5,-175.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_105.setTransform(-88.1,-174.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_106.setTransform(-100.7,-176.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_107.setTransform(200.7,-14.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_108.setTransform(189.2,-14.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgoBRIgGAAIgDgBIgBgBIgBgBIAAhxQAAgFADgCQACgCAEgBIAOAAIAGABIAEACIAFAFIADAGIAYAtIAEAJIAEAIIADAHIAFAIIgBgOIAAgPIAAg5IABgDIACgBIADgBIAGAAIAGAAIADABIABABIABADIAABwIgBAEIgCADIgDABIgEABIgKAAIgHgBQgCAAgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABDIgBABIgBABIgEABIgGAAgAAEg3IgGgDIgGgEQgCgCgDAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQgBACAAAEIgBABIgBABIgCAAIgEAAIgFgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGACgEQABgEACgDQAEgDAEgCQAEgCAFAAQAFAAAEACIAGAEIAFADQADACADgBQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAFgBIAGABQABABAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAKgFAGQgGAHgKgBQgGABgEgCg");
	this.shape_109.setTransform(175.9,-16);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_110.setTransform(163.2,-14.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_111.setTransform(36.1,-47.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgDgCgGQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGAAgFABIgIADIgHADIgEACIgBgBIgCgCIgBgDIAAgFIAAgEIACgDIAFgEIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAIIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgDAFgFIAAgOIgKAAIgJABg");
	this.shape_112.setTransform(34,-12.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-15,1,1,0,0,0,50,11);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQAuQgIgCgGgHQgGgGgDgIQgDgKAAgMQAAgLAEgJQADgJAFgHQAGgGAIgEQAJgDAIAAQAMAAAHADQAIADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADgBIACABIABABIAAADIAAAEIAAADIAAADIgBACIgBABIgDACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_113.setTransform(16.4,-45.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_114.setTransform(5.7,-47.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_115.setTransform(-8.6,-47.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_116.setTransform(-18,-47.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgJIgEgGIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_117.setTransform(-28.3,-47.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_118.setTransform(-39,-47.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBXAAIACABIACACIAAADIABAFIgBAFIAAAEIgCABIgCABIgfAAIAABkIAAACIgDABIgEACIgGAAg");
	this.shape_119.setTransform(-49,-47.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgFgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_120.setTransform(-60.5,-47.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_121.setTransform(-69.8,-47.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_122.setTransform(-82.3,-45.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_123.setTransform(-93.1,-45.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_124.setTransform(-108.2,-45.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-46,1,1,0,0,0,50,11);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgIBWIgGAAIgDgBIgBgBIAAgCIACgUIgIgBIgHgDIgFgCIgEgCIgBgDIgBgHIAAgFIABgDIABgCIADAAIADABIAHADIAJADQAFACAHAAQAKAAAGgFQAGgDAAgIQAAgFgDgDQgCgCgEgDIgIgEIgKgDIgLgGIgJgGQgEgEgCgFQgDgGAAgIQAAgHADgGQACgGAFgFQAEgEAIgDQAGgDAIAAIADgUIAAgCIABgBIABAAIAFgBIAFABIADAAIABACIABACIgDATIAGABIAGABIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgBABIgBABIgFgCIgGgDIgHgDIgLAAIgIAAQgDABgCACIgEAEIgBAFQAAAFADADQACADAEADIAIADIALAFIALAEQAEADAFADQAEAEACAFQADAGAAAIQAAAJgEAGQgDAHgFAFQgGAFgHACQgIAEgKABIAAAUIgBABIgBABIgDABIgDAAg");
	this.shape_125.setTransform(39.1,-76.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQACgJAGgHQAGgGAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGADAHQACAJAAAIIAAAFQAAADgCACQgCADgEAAIg0AAQAAAFACAFQABAEADADQADADAEACQAEABAGAAIALAAIAJgCIAGgCIADgBIACAAIABACIABACIAAAEIAAADIAAADIgBACIgCACIgDABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_126.setTransform(17.5,-75.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_127.setTransform(6.8,-77.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgaBAQgDAAgCgDQgCgCAAgDIAAhzIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABABIAABlIAnAAIABABIABACIABADIAAAFIAAAEIgBAEIgBACIgBABg");
	this.shape_128.setTransform(-6.4,-77.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_129.setTransform(-17.3,-77.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAA/IgFAAIgEgBIgCgBIgBgBIAAhmIggAAIgBAAIgBgCIgBgDIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgfAAIAABmIgBABIgCABIgDABIgHAAg");
	this.shape_130.setTransform(-28.3,-77.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_131.setTransform(-35.9,-77.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgeA/IgGAAIgEgBIgCgBIAAgBIAAhxQAAgFACgCQACgCAEgBIAeAAIAIABIAJABQAGACAGADQAGACAEAGQAEAEACAGQACAGAAAIQAAAKgDAJQgEAHgGAFQgGAGgJADQgKADgLAAIgLAAIAAApIAAABIgDABIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgEgEgCQgDgCgEgBIgHgBIgLAAg");
	this.shape_132.setTransform(-43.5,-77.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_133.setTransform(-55.3,-77.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_134.setTransform(-66.5,-77.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_135.setTransform(-81.7,-75.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgBgHAAgKIAAg0IAAgCIACgBIADgBIAHAAIAGAAIADABIACABIABACIAAAwIAAAKQACAEACADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_136.setTransform(-92.5,-75.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_137.setTransform(-106.4,-75.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgPAuQgKgCgFgHQgGgFgDgKQgDgJAAgMQAAgKADgKQAEgJAFgHQAGgGAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFACAFQABAEADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIAAACIgBACIgEABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgEgFgKgBQgDAAgEACg");
	this.shape_138.setTransform(-115.4,-75.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAAA6QgFgCgDgEQgEgEgCgGQgCgFABgIIAAgsIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIAAADIABAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIADgBIABAAIACAAIAAACIAAACIABAFIgBAGIgBAEIgCABIgFACIgEAAIgGABQgIAAgEgCg");
	this.shape_139.setTransform(-124.1,-76.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgPAwIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIADAAIAEABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgCAAIgDgBIgDgBIgCAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_140.setTransform(-130.4,-75.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgQAuQgJgCgFgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQADgJAFgHQAGgGAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFABAFQACAEADADQADADAEACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIgBACIgBACIgDABIgHACIgKACIgMABQgLAAgJgDgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_141.setTransform(-139.5,-75.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_142.setTransform(-147,-77.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAAAvIgHAAIgGgBIgCgBIgCgCIgahOIgBgEIAAgDIAAgBIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABACIATA/IABADIAAgDIAUg/IABgCIACgBIAEgBIAGAAIAFAAIAEABIACABIAAABIAAABIAAACIAAACIgBADIgaBOIgBACIgDABIgFABIgJAAg");
	this.shape_143.setTransform(-154.2,-75.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_144.setTransform(-164.2,-75.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_145.setTransform(-172.1,-77.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_146.setTransform(-181.5,-77.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_147.setTransform(-187.9,-75.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-78,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inversion},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.INTERES},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.AÑOS},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_2
	this.instance = new lib.copiaMapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-242,-184,0.126,0.136);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_148},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icsemanal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "green",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
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
		  var  k = 52;
		
		
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
	this.boton.setTransform(-54.4,12);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("AgzBJIAAiRIAlAAIAAB1IBCAAIAAAcg");
	this.shape_58.setTransform(48.2,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_59.setTransform(33.3,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_60.setTransform(17,-123.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_61.setTransform(0.8,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AAnBJIAAhhIgbA/IgZAAIgbg/IAABhIgjAAIAAiRIArAAIAgBIIAhhIIArAAIAACRg");
	this.shape_62.setTransform(-16.5,-123.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("AgzBJIAAiRIBnAAIAAAcIhCAAIAAAaIA+AAIAAAbIg+AAIAAAkIBCAAIAAAcg");
	this.shape_63.setTransform(-32.5,-123.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AgkBIQgNgDgMgFIAAgjIAEAAQAMAKAOAFQAOAFAOAAIAIgBIAJgCQAEgCADgCQADgDAAgFQAAgFgEgDQgEgEgIgCIgRgDIgRgFQgSgGgIgJQgIgKAAgPQAAgVASgMQASgNAcAAQAOAAAOADQAOACAKAEIAAAiIgEAAQgIgHgNgFQgNgFgNAAIgIABIgJACQgEACgDADQgDADAAAEQAAAFAFAEQAEADAMACIAPADIAQAFQAQAFAIAJQAIAJAAAPQAAAWgSANQgSANgeAAQgTAAgNgDg");
	this.shape_64.setTransform(-46.5,-123.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_65.setTransform(133.2,-148.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_66.setTransform(119.1,-150.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_67.setTransform(108.8,-150.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_68.setTransform(99.7,-148.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_69.setTransform(86.7,-148.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_70.setTransform(74.4,-148.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_71.setTransform(65,-150.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_72.setTransform(58.1,-150.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_73.setTransform(47.7,-148.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_74.setTransform(36.8,-149.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_75.setTransform(28.8,-150.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_76.setTransform(18.8,-146.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_77.setTransform(4.4,-148.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_78.setTransform(-7.7,-148.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_79.setTransform(-27.1,-148.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_80.setTransform(-41.2,-150);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_81.setTransform(-61.5,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_82.setTransform(-75.8,-150);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_83.setTransform(-89.3,-148.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_84.setTransform(-99.6,-150.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_85.setTransform(-107.3,-148.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_86.setTransform(-119.6,-148.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_87.setTransform(-132.9,-146.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_88.setTransform(99.2,-174.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_89.setTransform(87.8,-175.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_90.setTransform(77.5,-174.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_91.setTransform(64.8,-174.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_92.setTransform(51,-174.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_93.setTransform(37.3,-172.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_94.setTransform(19.4,-174.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_95.setTransform(1.9,-174.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_96.setTransform(-10.7,-174.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_97.setTransform(-29.3,-174.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_98.setTransform(-42,-176.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_99.setTransform(-53,-174.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_100.setTransform(-65.2,-174.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_101.setTransform(-76.5,-175.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_102.setTransform(-88.1,-174.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_103.setTransform(-100.7,-176.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_104.setTransform(200.7,-14.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_105.setTransform(189.2,-14.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgoBRIgGAAIgDgBIgBgBIgBgBIAAhxQAAgFADgCQACgCAEgBIAOAAIAGABIAEACIAFAFIADAGIAYAtIAEAJIAEAIIADAHIAFAIIgBgOIAAgPIAAg5IABgDIACgBIADgBIAGAAIAGAAIADABIABABIABADIAABwIgBAEIgCADIgDABIgEABIgKAAIgHgBQgCAAgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABDIgBABIgBABIgEABIgGAAgAAEg3IgGgDIgGgEQgCgCgDAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQgBACAAAEIgBABIgBABIgCAAIgEAAIgFgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGACgEQABgEACgDQAEgDAEgCQAEgCAFAAQAFAAAEACIAGAEIAFADQADACADgBQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAFgBIAGABQABABAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAKgFAGQgGAHgKgBQgGABgEgCg");
	this.shape_106.setTransform(175.9,-16);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_107.setTransform(163.2,-14.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_108.setTransform(36.1,-47.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgDgCgGQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGAAgFABIgIADIgHADIgEACIgBgBIgCgCIgBgDIAAgFIAAgEIACgDIAFgEIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAIIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgDAFgFIAAgOIgKAAIgJABg");
	this.shape_109.setTransform(34,-12.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-15,1,1,0,0,0,50,11);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgQAuQgIgCgGgHQgGgGgDgIQgDgKAAgMQAAgLAEgJQADgJAFgHQAGgGAIgEQAJgDAIAAQAMAAAHADQAIADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADgBIACABIABABIAAADIAAAEIAAADIAAADIgBACIgBABIgDACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_110.setTransform(16.4,-45.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_111.setTransform(5.7,-47.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_112.setTransform(-8.6,-47.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_113.setTransform(-18,-47.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgJIgEgGIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_114.setTransform(-28.3,-47.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_115.setTransform(-39,-47.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBXAAIACABIACACIAAADIABAFIgBAFIAAAEIgCABIgCABIgfAAIAABkIAAACIgDABIgEACIgGAAg");
	this.shape_116.setTransform(-49,-47.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgFgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_117.setTransform(-60.5,-47.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_118.setTransform(-69.8,-47.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_119.setTransform(-82.3,-45.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_120.setTransform(-93.1,-45.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_121.setTransform(-108.2,-45.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-46,1,1,0,0,0,50,11);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgIBWIgGAAIgDgBIgBgBIAAgCIACgUIgIgBIgHgDIgFgCIgEgCIgBgDIgBgHIAAgFIABgDIABgCIADAAIADABIAHADIAJADQAFACAHAAQAKAAAGgFQAGgDAAgIQAAgFgDgDQgCgCgEgDIgIgEIgKgDIgLgGIgJgGQgEgEgCgFQgDgGAAgIQAAgHADgGQACgGAFgFQAEgEAIgDQAGgDAIAAIADgUIAAgCIABgBIABAAIAFgBIAFABIADAAIABACIABACIgDATIAGABIAGABIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgBABIgBABIgFgCIgGgDIgHgDIgLAAIgIAAQgDABgCACIgEAEIgBAFQAAAFADADQACADAEADIAIADIALAFIALAEQAEADAFADQAEAEACAFQADAGAAAIQAAAJgEAGQgDAHgFAFQgGAFgHACQgIAEgKABIAAAUIgBABIgBABIgDABIgDAAg");
	this.shape_122.setTransform(39.1,-76.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQACgJAGgHQAGgGAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGADAHQACAJAAAIIAAAFQAAADgCACQgCADgEAAIg0AAQAAAFACAFQABAEADADQADADAEACQAEABAGAAIALAAIAJgCIAGgCIADgBIACAAIABACIABACIAAAEIAAADIAAADIgBACIgCACIgDABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_123.setTransform(17.5,-75.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_124.setTransform(6.8,-77.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgaBAQgDAAgCgDQgCgCAAgDIAAhzIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABABIAABlIAnAAIABABIABACIABADIAAAFIAAAEIgBAEIgBACIgBABg");
	this.shape_125.setTransform(-6.4,-77.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_126.setTransform(-17.3,-77.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAAA/IgFAAIgEgBIgCgBIgBgBIAAhmIggAAIgBAAIgBgCIgBgDIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgfAAIAABmIgBABIgCABIgDABIgHAAg");
	this.shape_127.setTransform(-28.3,-77.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_128.setTransform(-35.9,-77.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgeA/IgGAAIgEgBIgCgBIAAgBIAAhxQAAgFACgCQACgCAEgBIAeAAIAIABIAJABQAGACAGADQAGACAEAGQAEAEACAGQACAGAAAIQAAAKgDAJQgEAHgGAFQgGAGgJADQgKADgLAAIgLAAIAAApIAAABIgDABIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgEgEgCQgDgCgEgBIgHgBIgLAAg");
	this.shape_129.setTransform(-43.5,-77.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_130.setTransform(-55.3,-77.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_131.setTransform(-66.5,-77.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_132.setTransform(-81.7,-75.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgBgHAAgKIAAg0IAAgCIACgBIADgBIAHAAIAGAAIADABIACABIABACIAAAwIAAAKQACAEACADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_133.setTransform(-92.5,-75.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_134.setTransform(-106.4,-75.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgPAuQgKgCgFgHQgGgFgDgKQgDgJAAgMQAAgKADgKQAEgJAFgHQAGgGAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFACAFQABAEADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIAAACIgBACIgEABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgEgFgKgBQgDAAgEACg");
	this.shape_135.setTransform(-115.4,-75.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAAA6QgFgCgDgEQgEgEgCgGQgCgFABgIIAAgsIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIAAADIABAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIADgBIABAAIACAAIAAACIAAACIABAFIgBAGIgBAEIgCABIgFACIgEAAIgGABQgIAAgEgCg");
	this.shape_136.setTransform(-124.1,-76.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgPAwIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIADAAIAEABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgCAAIgDgBIgDgBIgCAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_137.setTransform(-130.4,-75.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgQAuQgJgCgFgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQADgJAFgHQAGgGAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFABAFQACAEADADQADADAEACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIgBACIgBACIgDABIgHACIgKACIgMABQgLAAgJgDgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_138.setTransform(-139.5,-75.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_139.setTransform(-147,-77.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAAAvIgHAAIgGgBIgCgBIgCgCIgahOIgBgEIAAgDIAAgBIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABACIATA/IABADIAAgDIAUg/IABgCIACgBIAEgBIAGAAIAFAAIAEABIACABIAAABIAAABIAAACIAAACIgBADIgaBOIgBACIgDABIgFABIgJAAg");
	this.shape_140.setTransform(-154.2,-75.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_141.setTransform(-164.2,-75.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_142.setTransform(-172.1,-77.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_143.setTransform(-181.5,-77.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_144.setTransform(-187.9,-75.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-78,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inversion},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.INTERES},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.AÑOS},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_2
	this.instance = new lib.copiaMapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-242,-184,0.126,0.136);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_145},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icmensual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "green",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
		
		
		
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
	this.boton.setTransform(-54.4,12.9);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Capa_2
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("AgzBJIAAiRIAlAAIAAB1IBCAAIAAAcg");
	this.shape_58.setTransform(48.5,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_59.setTransform(33.6,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AgvA8QgRgOAAgbIAAhcIAmAAIAABaQAAAPAGAHQAHAIANAAQAOAAAHgIQAGgHAAgPIAAhaIAmAAIAABcQAAAbgRAOQgQAOggAAQgfAAgQgOg");
	this.shape_60.setTransform(17.7,-123.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("AgkBIQgNgDgMgFIAAgjIAEAAQAMAKAOAFQAOAFAOAAIAIgBIAJgCQAEgCADgCQADgDAAgFQAAgFgEgDQgEgEgIgCIgRgDIgRgFQgSgGgIgJQgIgKAAgPQAAgVASgMQASgNAcAAQAOAAAOADQAOACAKAEIAAAiIgEAAQgIgHgNgFQgNgFgNAAIgIABIgJACQgEACgDADQgDADAAAEQAAAFAFAEQAEADAMACIAPADIAQAFQAQAFAIAJQAIAJAAAPQAAAWgSANQgSANgeAAQgTAAgNgDg");
	this.shape_61.setTransform(2.7,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_62.setTransform(-13.1,-123.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("Ag0BJIAAiRIBoAAIAAAcIhCAAIAAAaIA+AAIAAAbIg+AAIAAAkIBCAAIAAAcg");
	this.shape_63.setTransform(-28.1,-123.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AAnBJIAAhhIgbA/IgZAAIgbg/IAABhIgjAAIAAiRIArAAIAgBIIAhhIIArAAIAACRg");
	this.shape_64.setTransform(-44.7,-123.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_65.setTransform(133.2,-148.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_66.setTransform(119.1,-150.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_67.setTransform(108.8,-150.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_68.setTransform(99.7,-148.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_69.setTransform(86.7,-148.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_70.setTransform(74.4,-148.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_71.setTransform(65,-150.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_72.setTransform(58.1,-150.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_73.setTransform(47.7,-148.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_74.setTransform(36.8,-149.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_75.setTransform(28.8,-150.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_76.setTransform(18.8,-146.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_77.setTransform(4.4,-148.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_78.setTransform(-7.7,-148.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_79.setTransform(-27.1,-148.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_80.setTransform(-41.2,-150);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_81.setTransform(-61.5,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_82.setTransform(-75.8,-150);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_83.setTransform(-89.3,-148.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_84.setTransform(-99.6,-150.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_85.setTransform(-107.3,-148.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_86.setTransform(-119.6,-148.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_87.setTransform(-132.9,-146.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_88.setTransform(99.2,-174.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_89.setTransform(87.8,-175.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_90.setTransform(77.5,-174.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_91.setTransform(64.8,-174.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_92.setTransform(51,-174.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_93.setTransform(37.3,-172.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_94.setTransform(19.4,-174.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_95.setTransform(1.9,-174.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_96.setTransform(-10.7,-174.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_97.setTransform(-29.3,-174.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_98.setTransform(-42,-176.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_99.setTransform(-53,-174.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_100.setTransform(-65.2,-174.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_101.setTransform(-76.5,-175.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_102.setTransform(-88.1,-174.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_103.setTransform(-100.7,-176.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgJAAgMQAAgLAEgJQADgJAFgGQAGgHAIgEQAJgDAIAAQALAAAJADQAHADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCADgEgBIg0AAQAAAGABAEQACAFADADQADADAEACQAEABAGABIALgBIAJgCIAGgDIADgBIACABIABABIABADIAAAEIAAAEIAAACIgCACIgBABIgDACIgHADIgKACIgMAAQgLAAgJgCgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgFQgEgHgKAAQgDABgEABg");
	this.shape_104.setTransform(34.9,-16.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_105.setTransform(24.3,-18.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgGgDgJQgDgKAAgLQAAgKADgKQADgIAGgHQAGgHAJgEQAJgDALAAQAMAAAIADQAJADAGAGQAFAGADAJQADAKAAALQAAALgDAJQgDAIgGAHQgGAHgJAEQgJADgLAAQgMAAgIgDgAgIgbQgFADgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEACAFAAQAFAAAEgCQAFgDACgDIAEgJIABgNIgBgLQgBgFgCgEQgDgEgEgDQgEgCgGAAQgEAAgEACg");
	this.shape_106.setTransform(9.3,-16.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AglBBIgDAAIgCgCIgBgBIAAh5IABgCIABgBIAEgBIAFAAIAEAAIAEABIABABIABACIAAAKIAHgHIAIgFIAHgDIAIgBQAKAAAHAEQAGAEAFAGQAEAHACAJQACAIAAAKQAAAMgDAIQgCAJgFAHQgFAGgHAEQgHADgJAAIgGAAIgGgCIgGgEIgGgGIAAAqIgBABIgCACIgEAAIgGABIgGgBgAgDgrIgFACIgFAFIgFAGIAAAdQAFAFAFAEQAEAEAEAAQAFAAADgDQAEgCACgEQACgDABgFIABgKIgBgLQAAgFgCgEQgCgEgEgCQgDgDgFAAIgEABg");
	this.shape_107.setTransform(-1.2,-15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_108.setTransform(-14.9,-16.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgJAAgMQAAgLADgJQAEgJAFgGQAGgHAIgEQAIgDAKAAQAKAAAIADQAIADAFAGQAFAGACAIQADAHAAAKIAAADQAAAEgCACQgCADgDgBIg1AAQAAAGACAEQABAFADADQACADAFACQAEABAGABIAMgBIAIgCIAFgDIAFgBIABABIABABIAAADIAAAEIAAAEIAAACIAAACIgBABIgEACIgHADIgKACIgMAAQgLAAgIgCgAgGgdIgGAFIgDAHIgCAIIAkAAQAAgKgEgFQgEgHgKAAQgDABgEABg");
	this.shape_109.setTransform(-28.1,-16.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAABDIgFAAIgEgBIgCgBIAAgDIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAADIgCABIgEABIgGAAgAgKgqQgDgEAAgHQAAgHADgDQADgDAHAAQAIABADACQADADAAAHQAAAHgDAEQgDACgIAAQgIAAgCgCg");
	this.shape_110.setTransform(-35.6,-18.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgCgFAAgIIAAgsIgKAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgIIABgFIAAgDIABgCIACAAIAKAAIAAgTIABgCIACgBIAEgBIAGgBIAFABIAEABIABABIABACIAAATIATAAIABAAIACACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgTAAIAAAoQAAAHACAEQACADAGAAIAEAAIADgBIABgBIACAAIABAAIABACIABACIAAAFIAAAGIgCAEIgDABIgDACIgGAAIgFABQgIAAgEgCg");
	this.shape_111.setTransform(-41.7,-17.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgDgDgCgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgBABIgFABIgFAAIgHAAIgDgBIgCgBIgBgCIAAhWIABgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAGADAEAFQADAFACAGQACAHAAAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_112.setTransform(-54.8,-16.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgCgHAAgKIAAg0IABgCIACgBIADgBIAHAAIAFAAIAFABIABABIABACIAAAwIAAAKQABAEADADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgCABIgDABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_113.setTransform(-65.6,-16.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgUAwQgGgCgEgEQgEgEgCgFQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGABgFABIgIADIgHADIgEABIgBAAIgCgCIgBgEIAAgEIAAgEIACgEIAFgCIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAGAAAKIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAEIgBAGQAAAFAEAEQADADAGAAQAEAAAFgDQAEgDAFgEIAAgQIgKAAIgJABg");
	this.shape_114.setTransform(-80.7,-16.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgGgDgIQgDgJAAgNQAAgLADgJQADgJAGgHQAGgGAIgEQAJgDAJAAQAKAAAJADQAHADAFAGQAFAGADAIQACAIAAAIIAAAFQAAADgCACQgCACgEABIg0AAQAAAFACAEQABAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADAAIACAAIABABIABADIAAAEIAAADIAAADIgBACIgCACIgDABIgHACIgKADIgMAAQgLAAgIgDgAgGgdIgGAFIgDAHIgCAIIAkAAQAAgKgEgGQgFgFgJAAQgEAAgDABg");
	this.shape_115.setTransform(36.4,-46.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_116.setTransform(25.7,-48.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_117.setTransform(11.4,-48.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_118.setTransform(2,-48.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAhA/IgHAAIgEgBIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgCIAAhyQAAgDACgCQACgDAEAAIAgAAIAIABIAFAAQAIACAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAFIAEAIIAKAZIACAGIABACIgBACIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_119.setTransform(-8.3,-48.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_120.setTransform(-19,-48.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAAA/IgFAAIgEgBIgCgBIgBgCIAAhkIgfAAIgCgBIgCgCIAAgDIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBADIgBACIgBABIggAAIAABkIgBACIgCABIgEABIgGAAg");
	this.shape_121.setTransform(-29,-48.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgMAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgDACIgDABIgGAAg");
	this.shape_122.setTransform(-40.5,-48.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_123.setTransform(-49.8,-48.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAdAwIgGAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgEAAQgDAAgFAEQgFADgFAHIAAA4IAAACIgCABIgFABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAGADAFAFQADAFACAGQABAHAAAKIAAA0IAAACIgCABIgDABIgHAAg");
	this.shape_124.setTransform(-62.3,-46.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgEgGgCgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAFABIABABIABACIAAAwIABAKQAAAEACADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIgBgCIAAgKQgHAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_125.setTransform(-73.1,-46.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgUAvQgGgBgEgEQgEgDgCgGQgDgFAAgHQAAgIADgGQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgEIAIgDIAKgCIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAHAAAJIAAA5IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgPIgKAAIgJAAg");
	this.shape_126.setTransform(-88.2,-46.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgJAAgMQAAgLADgJQAEgJAFgGQAGgHAIgEQAIgDAKAAQAKAAAIADQAIADAFAGQAFAGACAIQADAHAAAKIAAADQAAAEgCACQgCADgDgBIg1AAQAAAGACAEQABAFADADQACADAFACQAEABAGABIAMgBIAIgCIAFgDIAFgBIABABIABABIABADIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKACIgMAAQgLAAgIgCgAgGgdIgGAFIgDAHIgCAIIAkAAQAAgKgEgFQgEgHgKAAQgDABgEABg");
	this.shape_127.setTransform(22.3,-79.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_128.setTransform(11.6,-81.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgBgBAAgFIAAhxIAAgCIACgCIAEAAIAGgBIAGABIAEAAIADACIAAACIAABlIAnAAIABAAIABABIACAEIAAAFIAAAFIgCADIgBACIgBAAg");
	this.shape_129.setTransform(-1.6,-81.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_130.setTransform(-12.5,-81.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIABAAIBYAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_131.setTransform(-23.5,-81.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_132.setTransform(-31.1,-81.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgCAEAAIAeAAIAIAAIAJACQAGAAAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAGgJACQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgCQAEgBADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgCgEAAIgHAAIgLAAg");
	this.shape_133.setTransform(-38.7,-81.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_134.setTransform(-50.5,-81.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_135.setTransform(-61.7,-81.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_136.setTransform(-76.9,-79.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_137.setTransform(-87.7,-79.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_138.setTransform(-102.3,-81.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_139.setTransform(-111.7,-81.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_140.setTransform(-121.7,-81.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgBQACgCAEAAIAgAAIAIAAIAFABQAIAAAGADQAGADAFAEQAEAEACAGQACAGAAAIQAAAGgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAYIACAGIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_141.setTransform(-131.9,-81.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_142.setTransform(-142.6,-81.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_143.setTransform(-150.4,-81.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_144.setTransform(-158.9,-81.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_145.setTransform(-171.4,-81.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_146.setTransform(-180.7,-81.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAABDIgFAAIgEgBIgCgBIAAgDIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAADIgCABIgEABIgGAAgAgKgqQgDgEAAgHQAAgHADgDQADgDAHAAQAIABADACQADADAAAHQAAAHgDAEQgDACgIAAQgIAAgCgCg");
	this.shape_147.setTransform(-190.3,-81.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgNAxIgIgCIgFgDIgEgCIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEABAFAAIAFAAIAFgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEQAAgDgBgCIgFgDIgGgDIgIgEIgHgDQgEgDgDgCQgDgDgCgEQgCgEAAgHQAAgGADgFQACgFAFgEQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAACIABAEIgBAEIAAADIgBACIgBAAIgDgBIgFgDIgGgCIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGADIAIAEIAIADQAEACADADQADADACAEQABAEAAAGQAAAIgCAFQgDAGgFADQgFAEgHADQgHABgHAAIgKAAg");
	this.shape_148.setTransform(-196.7,-79.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_149.setTransform(200.7,-18.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_150.setTransform(189.2,-18.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgoBSIgGAAIgDgBIgBgCIgBgCIAAhwQAAgFADgCQACgCAEAAIAOAAIAGABIAEABIAFAEIADAHIAYAtIAEAIIAEAIIADAIIAFAIIgBgOIAAgOIAAg7IABgBIACgBIADgBIAGgBIAGABIADABIABABIABABIAABxIgBAEIgCADIgDACIgEAAIgKAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABCIgBACIgBACIgEABIgGAAgAAEg3IgGgEIgGgCQgCgCgDAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQgBACAAADIgBABIgBABIgCABIgEAAIgFgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgFACgEQABgEACgEQAEgDAEAAQAEgCAFAAQAFAAAEACIAGACIAFAEQADABADABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAFAAIAGABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAMgFAFQgGAGgKABQgGAAgEgCg");
	this.shape_151.setTransform(175.9,-20);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_152.setTransform(163.2,-18.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_153.setTransform(36.1,-48.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgUAwQgGgCgEgEQgEgEgCgFQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGABgFABIgIADIgHADIgEABIgBAAIgCgCIgBgEIAAgEIAAgEIACgEIAFgCIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAGAAAKIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAEIgBAGQAAAFAEAEQADADAGAAQAEAAAFgDQAEgDAFgEIAAgQIgKAAIgJABg");
	this.shape_154.setTransform(34,-16.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-19,1,1,0,0,0,50,11);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-50,1,1,0,0,0,50,11);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgIBWIgGAAIgDAAIgBgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIADgBIADACIAHADIAJADQAFACAHAAQAKAAAGgEQAGgFAAgHQAAgEgDgDQgCgEgEgCIgIgEIgKgEIgLgEIgJgGQgEgFgCgFQgDgGAAgIQAAgHADgGQACgGAFgEQAEgFAIgDQAGgDAIgBIADgUIAAgBIABAAIABgBIAFAAIAFAAIADABIABABIABACIgDASIAGABIAGADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgBACIgBAAIgFgBIgGgCIgHgDIgLgCIgIACQgDAAgCACIgEAEIgBAGQAAAEADAEQACACAEACIAIAFIALADIALAGQAEACAFADQAEAEACAGQADAFAAAIQAAAIgEAIQgDAGgFAFQgGAFgHADQgIACgKABIAAAWIgBABIgBABIgDAAIgDAAg");
	this.shape_155.setTransform(39.1,-80.2);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-82,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inversion},{t:this.shape_155},{t:this.INTERES},{t:this.AÑOS},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_3
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_156}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icdiariamente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "green",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
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
		  var  k = 365;
		
		
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
	this.boton.setTransform(-54.4,12);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("AgzBJIAAiRIBoAAIAAAcIhDAAIAAAaIA+AAIAAAbIg+AAIAAAkIBDAAIAAAcg");
	this.shape_58.setTransform(74.5,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AgSBJIAAh1IgtAAIAAgcIB/AAIAAAcIgtAAIAAB1g");
	this.shape_59.setTransform(60.5,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_60.setTransform(45.2,-123.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("Ag0BJIAAiRIBpAAIAAAcIhDAAIAAAaIA+AAIAAAbIg+AAIAAAkIBDAAIAAAcg");
	this.shape_61.setTransform(30.2,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AAnBJIAAhhIgbA/IgZAAIgbg/IAABhIgjAAIAAiRIArAAIAgBIIAhhIIArAAIAACRg");
	this.shape_62.setTransform(13.6,-123.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_63.setTransform(-3.6,-123.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AgpBJIAAgaIAXAAIAAhdIgXAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_64.setTransform(-16.8,-123.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AAZBJIgog2IgQAAIAAA2IgmAAIAAiRIA/AAQAMAAAJACQAJABAJAFQAHAFAFAIQAGAIAAALQAAAQgIALQgHAJgOAGIAwA/gAgfgGIALAAIAPgBQAFAAAEgEQAEgDACgDQABgEAAgGQAAgGgCgEQgCgDgGgDIgHgCIgMAAIgNAAg");
	this.shape_65.setTransform(-29.1,-123.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_66.setTransform(-45.7,-123.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AgpBJIAAgaIAXAAIAAhdIgXAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_67.setTransform(-58.9,-123.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AhEBJIAAiRIA1AAQARAAANADQANADAIAGQAPAJAJAQQAJAPAAAUQAAAVgKAQQgJAQgOAIQgLAHgMACQgNADgQAAgAgeAuIAJAAQAOAAAGgCQAFgBAGgDQAKgGAFgKQAFgKAAgOQAAgNgFgLQgGgKgLgGIgLgDQgGgCgMAAIgJAAg");
	this.shape_68.setTransform(-72.3,-123.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_69.setTransform(133.2,-148.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_70.setTransform(119.1,-150.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_71.setTransform(108.8,-150.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_72.setTransform(99.7,-148.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_73.setTransform(86.7,-148.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_74.setTransform(74.4,-148.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_75.setTransform(65,-150.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_76.setTransform(58.1,-150.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_77.setTransform(47.7,-148.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_78.setTransform(36.8,-149.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_79.setTransform(28.8,-150.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_80.setTransform(18.8,-146.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_81.setTransform(4.4,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_82.setTransform(-7.7,-148.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_83.setTransform(-27.1,-148.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_84.setTransform(-41.2,-150);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_85.setTransform(-61.5,-148.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_86.setTransform(-75.8,-150);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_87.setTransform(-89.3,-148.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_88.setTransform(-99.6,-150.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_89.setTransform(-107.3,-148.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_90.setTransform(-119.6,-148.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_91.setTransform(-132.9,-146.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_92.setTransform(99.2,-174.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_93.setTransform(87.8,-175.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_94.setTransform(77.5,-174.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_95.setTransform(64.8,-174.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_96.setTransform(51,-174.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_97.setTransform(37.3,-172.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_98.setTransform(19.4,-174.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_99.setTransform(1.9,-174.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_100.setTransform(-10.7,-174.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_101.setTransform(-29.3,-174.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_102.setTransform(-42,-176.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_103.setTransform(-53,-174.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_104.setTransform(-65.2,-174.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_105.setTransform(-76.5,-175.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_106.setTransform(-88.1,-174.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_107.setTransform(-100.7,-176.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_108.setTransform(200.7,-14.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_109.setTransform(189.2,-14.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgoBRIgGAAIgDgBIgBgBIgBgBIAAhxQAAgFADgCQACgCAEgBIAOAAIAGABIAEACIAFAFIADAGIAYAtIAEAJIAEAIIADAHIAFAIIgBgOIAAgPIAAg5IABgDIACgBIADgBIAGAAIAGAAIADABIABABIABADIAABwIgBAEIgCADIgDABIgEABIgKAAIgHgBQgCAAgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABDIgBABIgBABIgEABIgGAAgAAEg3IgGgDIgGgEQgCgCgDAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQgBACAAAEIgBABIgBABIgCAAIgEAAIgFgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGACgEQABgEACgDQAEgDAEgCQAEgCAFAAQAFAAAEACIAGAEIAFADQADACADgBQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAFgBIAGABQABABAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAKgFAGQgGAHgKgBQgGABgEgCg");
	this.shape_110.setTransform(175.9,-16);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_111.setTransform(163.2,-14.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_112.setTransform(36.1,-47.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgDgCgGQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGAAgFABIgIADIgHADIgEACIgBgBIgCgCIgBgDIAAgFIAAgEIACgDIAFgEIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAIIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgDAFgFIAAgOIgKAAIgJABg");
	this.shape_113.setTransform(34,-12.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-15,1,1,0,0,0,50,11);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQAuQgIgCgGgHQgGgGgDgIQgDgKAAgMQAAgLAEgJQADgJAFgHQAGgGAIgEQAJgDAIAAQAMAAAHADQAIADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADgBIACABIABABIAAADIAAAEIAAADIAAADIgBACIgBABIgDACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_114.setTransform(16.4,-45.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_115.setTransform(5.7,-47.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_116.setTransform(-8.6,-47.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_117.setTransform(-18,-47.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgJIgEgGIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_118.setTransform(-28.3,-47.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_119.setTransform(-39,-47.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBXAAIACABIACACIAAADIABAFIgBAFIAAAEIgCABIgCABIgfAAIAABkIAAACIgDABIgEACIgGAAg");
	this.shape_120.setTransform(-49,-47.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgFgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_121.setTransform(-60.5,-47.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_122.setTransform(-69.8,-47.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_123.setTransform(-82.3,-45.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_124.setTransform(-93.1,-45.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_125.setTransform(-108.2,-45.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-46,1,1,0,0,0,50,11);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgIBWIgGAAIgDgBIgBgBIAAgCIACgUIgIgBIgHgDIgFgCIgEgCIgBgDIgBgHIAAgFIABgDIABgCIADAAIADABIAHADIAJADQAFACAHAAQAKAAAGgFQAGgDAAgIQAAgFgDgDQgCgCgEgDIgIgEIgKgDIgLgGIgJgGQgEgEgCgFQgDgGAAgIQAAgHADgGQACgGAFgFQAEgEAIgDQAGgDAIAAIADgUIAAgCIABgBIABAAIAFgBIAFABIADAAIABACIABACIgDATIAGABIAGABIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgBABIgBABIgFgCIgGgDIgHgDIgLAAIgIAAQgDABgCACIgEAEIgBAFQAAAFADADQACADAEADIAIADIALAFIALAEQAEADAFADQAEAEACAFQADAGAAAIQAAAJgEAGQgDAHgFAFQgGAFgHACQgIAEgKABIAAAUIgBABIgBABIgDABIgDAAg");
	this.shape_126.setTransform(39.1,-76.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQACgJAGgHQAGgGAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGADAHQACAJAAAIIAAAFQAAADgCACQgCADgEAAIg0AAQAAAFACAFQABAEADADQADADAEACQAEABAGAAIALAAIAJgCIAGgCIADgBIACAAIABACIABACIAAAEIAAADIAAADIgBACIgCACIgDABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_127.setTransform(17.5,-75.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_128.setTransform(6.8,-77.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgaBAQgDAAgCgDQgCgCAAgDIAAhzIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABABIAABlIAnAAIABABIABACIABADIAAAFIAAAEIgBAEIgBACIgBABg");
	this.shape_129.setTransform(-6.4,-77.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_130.setTransform(-17.3,-77.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAAA/IgFAAIgEgBIgCgBIgBgBIAAhmIggAAIgBAAIgBgCIgBgDIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgfAAIAABmIgBABIgCABIgDABIgHAAg");
	this.shape_131.setTransform(-28.3,-77.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_132.setTransform(-35.9,-77.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgeA/IgGAAIgEgBIgCgBIAAgBIAAhxQAAgFACgCQACgCAEgBIAeAAIAIABIAJABQAGACAGADQAGACAEAGQAEAEACAGQACAGAAAIQAAAKgDAJQgEAHgGAFQgGAGgJADQgKADgLAAIgLAAIAAApIAAABIgDABIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgEgEgCQgDgCgEgBIgHgBIgLAAg");
	this.shape_133.setTransform(-43.5,-77.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_134.setTransform(-55.3,-77.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_135.setTransform(-66.5,-77.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_136.setTransform(-81.7,-75.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgBgHAAgKIAAg0IAAgCIACgBIADgBIAHAAIAGAAIADABIACABIABACIAAAwIAAAKQACAEACADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_137.setTransform(-92.5,-75.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_138.setTransform(-106.4,-75.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPAuQgKgCgFgHQgGgFgDgKQgDgJAAgMQAAgKADgKQAEgJAFgHQAGgGAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFACAFQABAEADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIAAACIgBACIgEABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgEgFgKgBQgDAAgEACg");
	this.shape_139.setTransform(-115.4,-75.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAAA6QgFgCgDgEQgEgEgCgGQgCgFABgIIAAgsIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIAAADIABAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIADgBIABAAIACAAIAAACIAAACIABAFIgBAGIgBAEIgCABIgFACIgEAAIgGABQgIAAgEgCg");
	this.shape_140.setTransform(-124.1,-76.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgPAwIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIADAAIAEABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgCAAIgDgBIgDgBIgCAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_141.setTransform(-130.4,-75.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgQAuQgJgCgFgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQADgJAFgHQAGgGAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFABAFQACAEADADQADADAEACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIgBACIgBACIgDABIgHACIgKACIgMABQgLAAgJgDgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_142.setTransform(-139.5,-75.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_143.setTransform(-147,-77.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAAAvIgHAAIgGgBIgCgBIgCgCIgahOIgBgEIAAgDIAAgBIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABACIATA/IABADIAAgDIAUg/IABgCIACgBIAEgBIAGAAIAFAAIAEABIACABIAAABIAAABIAAACIAAACIgBADIgaBOIgBACIgDABIgFABIgJAAg");
	this.shape_144.setTransform(-154.2,-75.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_145.setTransform(-164.2,-75.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_146.setTransform(-172.1,-77.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_147.setTransform(-181.5,-77.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_148.setTransform(-187.9,-75.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-78,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inversion},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.INTERES},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.AÑOS},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_2
	this.instance = new lib.copiaMapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-242,-184,0.126,0.136);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_149},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.icanual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{icanual:0});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		
		
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "black",
				"font-size": 15,
				"text-align": "left",
				"height": 25,
				"width":100,
			"font-family": "Calibri", 
			"font-family": "Impact", 
			});	
			
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 15,
				"text-align": "left",
				"height": 25,
				"width":100,
			"font-family": "Calibri", 
			"font-family": "Impact", 
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 15,
			"font-family": "Calibri", 
				"text-align": "left",
				"height": 25,
				"width":100,
			"font-family": "Impact", 
			});	
			
			
			
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
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("AgzBJIAAiRIAlAAIAAB1IBCAAIAAAcg");
	this.shape_58.setTransform(32.9,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_59.setTransform(18,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AgvA8QgRgOAAgbIAAhcIAmAAIAABaQAAAPAGAHQAHAIANAAQAOAAAHgIQAGgHAAgPIAAhaIAmAAIAABcQAAAbgRAOQgQAOggAAQgfAAgQgOg");
	this.shape_60.setTransform(2.1,-123.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_61.setTransform(-14.5,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_62.setTransform(-30.8,-123.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_63.setTransform(133.2,-148.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_64.setTransform(119.1,-150.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_65.setTransform(108.8,-150.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_66.setTransform(99.7,-148.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_67.setTransform(86.7,-148.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_68.setTransform(74.4,-148.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_69.setTransform(65,-150.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_70.setTransform(58.1,-150.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_71.setTransform(47.7,-148.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_72.setTransform(36.8,-149.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_73.setTransform(28.8,-150.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_74.setTransform(18.8,-146.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_75.setTransform(4.4,-148.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_76.setTransform(-7.7,-148.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_77.setTransform(-27.1,-148.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_78.setTransform(-41.2,-150);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_79.setTransform(-61.5,-148.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_80.setTransform(-75.8,-150);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_81.setTransform(-89.3,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_82.setTransform(-99.6,-150.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_83.setTransform(-107.3,-148.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_84.setTransform(-119.6,-148.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_85.setTransform(-132.9,-146.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_86.setTransform(99.2,-174.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_87.setTransform(87.8,-175.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_88.setTransform(77.5,-174.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_89.setTransform(64.8,-174.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_90.setTransform(51,-174.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_91.setTransform(37.3,-172.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_92.setTransform(19.4,-174.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_93.setTransform(1.9,-174.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_94.setTransform(-10.7,-174.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_95.setTransform(-29.3,-174.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_96.setTransform(-42,-176.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_97.setTransform(-53,-174.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_98.setTransform(-65.2,-174.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_99.setTransform(-76.5,-175.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_100.setTransform(-88.1,-174.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_101.setTransform(-100.7,-176.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_102.setTransform(200.7,-17.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_103.setTransform(189.2,-17.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgoBSIgGAAIgDgBIgBgCIgBgCIAAhwQAAgFADgCQACgDAEABIAOAAIAGABIAEABIAFAFIADAGIAYAtIAEAIIAEAIIADAIIAFAIIgBgOIAAgOIAAg7IABgCIACAAIADgBIAGgBIAGABIADABIABAAIABACIAABxIgBAEIgCADIgDACIgEAAIgKAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABCIgBACIgBACIgEABIgGAAgAAEg3IgGgEIgGgCQgCgCgDAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQgBACAAADIgBABIgBABIgCABIgEAAIgFgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgFACgEQABgFACgDQAEgDAEgBQAEgBAFAAQAFAAAEABIAGADIAFAEQADABADABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAFAAIAGABQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAMgFAFQgGAHgKAAQgGgBgEgBg");
	this.shape_104.setTransform(175.9,-19);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_105.setTransform(163.2,-17.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_106.setTransform(162.1,-47.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQAvQgIgDgGgGQgGgHgDgJQgDgJAAgMQAAgKAEgKQADgJAFgGQAGgHAIgDQAJgEAIAAQALAAAJADQAHAEAFAFQAFAGADAHQACAJAAAJIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADADAEACQAEABAGAAIALAAIAJgCIAGgDIADgBIACABIABACIABACIAAAEIAAAEIAAACIgCACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgEgHgKAAQgDABgEABg");
	this.shape_107.setTransform(34.9,-15.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_108.setTransform(24.3,-17.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgKQADgIAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAKAAALQAAAKgDAKQgDAIgGAIQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEACAFAAQAFAAAEgCQAFgCACgEIAEgKIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgDgGAAQgEAAgEADg");
	this.shape_109.setTransform(9.3,-15.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AglBBIgDAAIgCgCIgBgBIAAh5IABgCIABgBIAEgBIAFAAIAEAAIAEABIABABIABACIAAAKIAHgHIAIgFIAHgDIAIgBQAKAAAHAEQAGAEAFAGQAEAHACAJQACAIAAAKQAAAMgDAIQgCAJgFAHQgFAGgHAEQgHADgJAAIgGAAIgGgCIgGgEIgGgGIAAAqIgBABIgCACIgEAAIgGABIgGgBgAgDgrIgFACIgFAFIgFAGIAAAdQAFAFAFAEQAEAEAEAAQAFAAADgDQAEgCACgEQACgDABgFIABgKIgBgLQAAgFgCgEQgCgEgEgCQgDgDgFAAIgEABg");
	this.shape_110.setTransform(-1.2,-14);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_111.setTransform(-14.9,-15.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgPAvQgKgDgFgGQgGgHgDgJQgDgJAAgMQAAgKADgKQAEgJAFgGQAGgHAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAJIAAADQAAAEgCACQgCACgDAAIg1AAQAAAGACAEQABAFADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgDIAFgBIABABIABACIAAACIAAAEIAAAEIAAACIAAACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgEgHgKAAQgDABgEABg");
	this.shape_112.setTransform(-28.1,-15.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAABDIgFAAIgEgBIgCgBIAAgDIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAADIgCABIgEABIgGAAgAgKgqQgDgEAAgGQAAgIADgDQADgDAHAAQAIABADACQADADAAAHQAAAHgDAEQgDACgIAAQgIAAgCgCg");
	this.shape_113.setTransform(-35.6,-17.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgCgFAAgIIAAgsIgKAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIABgFIAAgDIABgCIACAAIAKAAIAAgTIABgCIACgBIAEgBIAGgBIAFABIAEABIABABIABACIAAATIATAAIABAAIACACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAIgTAAIAAAoQAAAHACAEQACADAGAAIAEAAIADgBIABgBIACAAIABAAIABACIABACIAAAFIAAAGIgCAEIgDABIgDACIgGAAIgFABQgIAAgEgCg");
	this.shape_114.setTransform(-41.7,-16.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgDgDgCgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgBABIgFABIgFAAIgHAAIgDgBIgCgBIgBgCIAAhWIABgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAGADAEAFQADAFACAGQACAHAAAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_115.setTransform(-54.8,-15.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgCgHAAgKIAAg0IABgCIACgBIADgBIAHAAIAFAAIAFABIABABIABACIAAAwIAAAKQABAEADADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgCABIgDABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_116.setTransform(-65.6,-15.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgUAwQgGgCgEgEQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGABgFABIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgCIAIgDIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJABg");
	this.shape_117.setTransform(-80.7,-15.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-18,1,1,0,0,0,50,11);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgGgDgIQgDgKAAgMQAAgLADgJQADgJAGgHQAGgGAIgEQAJgDAJAAQAKAAAJADQAHADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGACAEQABAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADgBIACABIABABIABADIAAAEIAAADIAAADIgBACIgCABIgDACIgHACIgKADIgMAAQgLAAgIgDgAgGgdIgGAFIgDAHIgCAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_118.setTransform(36.4,-45.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_119.setTransform(25.7,-47.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_120.setTransform(11.4,-47.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_121.setTransform(2,-47.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgJIgEgGIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_122.setTransform(-8.3,-47.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_123.setTransform(-19,-47.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_124.setTransform(-29,-47.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgMAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgDACIgDABIgGAAg");
	this.shape_125.setTransform(-40.5,-47.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_126.setTransform(-49.8,-47.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAdAwIgGAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgEAAQgDAAgFAEQgFADgFAHIAAA4IAAACIgCABIgFABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAGADAFAFQADAFACAGQABAHAAAKIAAA0IAAACIgCABIgDABIgHAAg");
	this.shape_127.setTransform(-62.3,-45.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgEgGgCgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAFABIABABIABACIAAAwIABAKQAAAEACADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIgBgCIAAgKQgHAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_128.setTransform(-73.1,-45.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_129.setTransform(-88.2,-45.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-49,1,1,0,0,0,50,11);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgIBWIgGAAIgDgBIgBgBIAAgCIACgUIgIgCIgHgCIgFgBIgEgDIgBgDIgBgHIAAgFIABgEIABgBIADgBIADACIAHADIAJADQAFACAHAAQAKAAAGgEQAGgFAAgHQAAgEgDgDQgCgEgEgCIgIgEIgKgEIgLgEIgJgGQgEgEgCgGQgDgGAAgIQAAgHADgGQACgGAFgEQAEgFAIgDQAGgCAIgCIADgUIAAgBIABgBIABAAIAFAAIAFAAIADAAIABACIABACIgDASIAGACIAGACIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgBACIgBAAIgFgBIgGgDIgHgCIgLgBIgIABQgDAAgCACIgEAEIgBAFQAAAFADAEQACACAEACIAIAFIALADIALAGQAEACAFADQAEAEACAGQADAFAAAIQAAAIgEAIQgDAGgFAFQgGAFgHACQgIADgKABIAAAWIgBABIgBAAIgDABIgDAAg");
	this.shape_130.setTransform(39.1,-79.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPAvQgKgDgFgGQgGgHgDgJQgDgJAAgMQAAgKADgKQAEgJAFgGQAGgHAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAJIAAADQAAAEgCACQgCACgDAAIg1AAQAAAGACAEQABAFADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgDIAFgBIABABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgEgHgKAAQgDABgEABg");
	this.shape_131.setTransform(22.3,-78.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_132.setTransform(11.6,-80.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgBgBAAgFIAAhxIAAgCIACgCIAEAAIAGgBIAGABIAEAAIADACIAAACIAABkIAnAAIABABIABABIACAEIAAAFIAAAFIgCADIgBACIgBAAg");
	this.shape_133.setTransform(-1.6,-80.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_134.setTransform(-12.5,-80.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIABAAIBYAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_135.setTransform(-23.5,-80.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_136.setTransform(-31.1,-80.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHgBIgLAAg");
	this.shape_137.setTransform(-38.7,-80.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_138.setTransform(-50.5,-80.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_139.setTransform(-61.7,-80.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_140.setTransform(-76.9,-78.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_141.setTransform(-87.7,-78.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_142.setTransform(-102.3,-80.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_143.setTransform(-111.7,-80.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_144.setTransform(-121.7,-80.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEgBIgHAAIgLAAg");
	this.shape_145.setTransform(-131.9,-80.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_146.setTransform(-142.6,-80.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_147.setTransform(-150.4,-80.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_148.setTransform(-158.9,-80.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_149.setTransform(-171.4,-80.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_150.setTransform(-180.7,-80.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAABDIgFAAIgEgBIgCgBIAAgDIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAADIgCABIgEABIgGAAgAgKgqQgDgEAAgGQAAgIADgDQADgDAHAAQAIABADACQADADAAAHQAAAHgDAEQgDACgIAAQgIAAgCgCg");
	this.shape_151.setTransform(-190.3,-80.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEQAAgDgBgCIgFgEIgGgCIgIgEIgHgDQgEgCgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAACIABAEIgBAEIAAADIgBACIgBAAIgDgBIgFgDIgGgCIgJgBIgEABIgEACIgDADIAAADQAAAEABACIAFADIAGADIAIAEIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHACQgHABgHAAIgKgBg");
	this.shape_152.setTransform(-196.7,-78.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-81,1,1,0,0,0,50,11);

	this.boton = new lib.Boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(-63.5,14.9);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boton},{t:this.inversion},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.INTERES},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.AÑOS},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_2
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

	this.cuenta8 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta8.name = "cuenta8";
	this.cuenta8.lineHeight = 17;
	this.cuenta8.lineWidth = 78;
	this.cuenta8.parent = this;
	this.cuenta8.setTransform(158.1,-70);

	this.cuenta6 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta6.name = "cuenta6";
	this.cuenta6.lineHeight = 17;
	this.cuenta6.lineWidth = 78;
	this.cuenta6.parent = this;
	this.cuenta6.setTransform(158.1,-7);

	this.cuenta5 = new cjs.Text("", "13px 'Broadway'");
	this.cuenta5.name = "cuenta5";
	this.cuenta5.lineHeight = 17;
	this.cuenta5.lineWidth = 78;
	this.cuenta5.parent = this;
	this.cuenta5.setTransform(158.1,-39.7);

	this.cuenta10 = new cjs.Text("", "20px 'Broadway'", "#FFFFFF");
	this.cuenta10.name = "cuenta10";
	this.cuenta10.lineHeight = 25;
	this.cuenta10.lineWidth = 78;
	this.cuenta10.parent = this;
	this.cuenta10.setTransform(59,98.4);

	this.parcialidad = new cjs.Text("", "20px 'Broadway'");
	this.parcialidad.name = "parcialidad";
	this.parcialidad.lineHeight = 25;
	this.parcialidad.lineWidth = 78;
	this.parcialidad.parent = this;
	this.parcialidad.setTransform(158.1,32.2);

	this.cuenta4 = new cjs.Text("", "20px 'Broadway'");
	this.cuenta4.name = "cuenta4";
	this.cuenta4.lineHeight = 25;
	this.cuenta4.lineWidth = 78;
	this.cuenta4.parent = this;
	this.cuenta4.setTransform(158.1,61.9);

	this.cuenta3 = new cjs.Text("", "13px 'Broadway'", "#FFFFFF");
	this.cuenta3.name = "cuenta3";
	this.cuenta3.lineHeight = 17;
	this.cuenta3.lineWidth = 78;
	this.cuenta3.parent = this;
	this.cuenta3.setTransform(145.1,115.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#0F302D").ss(1,1,1).p("A3RYdMAAAgusIAAiNMAujAAAIAACNMAAAAus");
	this.shape_154.setTransform(93.1,24.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("A3RYdIAAiOMAAAgurMAujAAAMAAAAurIAACOg");
	this.shape_155.setTransform(93.1,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_153}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.8,401.5);


(lib.crece2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.crece("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(180,74.1,1,1.01,0,0,0,180,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,202);


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


(lib.icquincenal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		dom_overlay_container.children["inversion"].maxLength = 13;
		$("#inversion").css({
				"color": "green",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});
		
		dom_overlay_container.children["INTERES"].maxLength = 13;
		$("#INTERES").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
			
			dom_overlay_container.children["AÑOS"].maxLength = 13;
		$("#AÑOS").css({
				"color": "black",
				"font-size": 18,
				"text-align": "left",
				"height": 25,
				"width":100,
			});	
			
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
		  var  k = 24;
		
		
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
	this.boton.setTransform(-54.4,12);
	this.boton._off = true;
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.GANANCIA = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.GANANCIA.name = "GANANCIA";
	this.GANANCIA.lineHeight = 24;
	this.GANANCIA.lineWidth = 90;
	this.GANANCIA.parent = this;
	this.GANANCIA.setTransform(95.7,78.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgCIgHgBIgFgCIgEgDIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgEQAGgFAAgHQAAgFgDgDQgCgDgEgBIgIgFIgLgEIgKgFIgJgFQgEgEgCgGQgCgFgBgJQABgHACgGQACgGAFgFQAEgEAIgDQAGgDAIgBIACgUIABAAIABgBIACgBIAEAAIAFAAIADABIABABIAAACIgCASIAHABIAFADIAFABIADACIABABIABADIAAADIAAADIAAAGIAAACIgCACIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACAEQACACAEACIAIAFIALADIAKAGQAGACADADQAEAEADAFQACAGAAAIQAAAIgDAIQgDAGgFAFQgGAFgHADQgIACgJABIgBAWIgBABIgBABIgDABIgDAAg");
	this.shape.setTransform(82.6,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_1.setTransform(63.9,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_2.setTransform(53.3,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_3.setTransform(37.6,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_4.setTransform(28.9,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_5.setTransform(21.1,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIAEAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgFgIIgeg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_6.setTransform(9.1,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_7.setTransform(-3.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAEAEIAEAGIAYAuIAEAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgGAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_8.setTransform(-16.1,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_9.setTransform(-28.8,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPA9QgNgEgIgIQgIgJgEgMQgFgMAAgPQAAgOAFgMQAFgNAIgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIACAEIABAIIAAAEIgBAEIgBABIgCABIgDgCIgIgEIgLgEQgHgBgIAAQgKAAgGADQgHADgFAGQgGAGgCAIQgEAIAAAJQAAALAEAIQACAIAGAGQAFAFAHADQAGADAJAAIAJgBIAIgDIAAgdIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCgIIABgDIABgDIABgCIACgBIAqAAIADABIACACIABACIABADIAAAyIgBAFQgBACgDABIgIADIgKACIgKACIgKAAQgPAAgLgEg");
	this.shape_10.setTransform(-41.5,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAvQgKgEgFgFQgGgHgDgJQgDgIAAgNQAAgLADgJQADgJAGgGQAGgHAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGACAHQADAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGACAFQABAEADADQADADAEACQAEACAGgBIALAAIAJgCIAFgCIAEgCIACABIABACIABACIAAAEIAAAEIAAACIgBACIgBABIgEACIgHADIgKABIgMABQgLAAgIgCgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_11.setTransform(-57.1,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_12.setTransform(-67.8,91.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_13.setTransform(-82.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgDABIgGAAg");
	this.shape_14.setTransform(-92.6,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAFAAIAGAAIAEABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgHAAQgJAAgHgCg");
	this.shape_15.setTransform(-103.4,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_16.setTransform(-117.2,93.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAJgEAIAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQADADAEACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_17.setTransform(-126.3,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(-136.6,93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAvQgIgEgGgFQgGgHgDgJQgDgIAAgNQAAgLAEgJQADgJAFgGQAGgHAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGADAHQACAJAAAIIAAAEQAAAEgCACQgCACgEAAIg0AAQAAAGABAFQACAEADADQACADAFACQAEACAGgBIALAAIAJgCIAGgCIADgCIACABIABACIAAACIAAAEIAAAEIAAACIgBACIgBABIgDACIgHADIgKABIgMABQgLAAgJgCgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgFQgFgHgJAAQgEABgDABg");
	this.shape_19.setTransform(-147.1,93.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABCIgFAAIgEAAIgCgBIAAgCIAAhWIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABWIAAACIgCABIgEAAIgGAAgAgKgqQgDgDAAgHQAAgIADgCQADgEAHAAQAIABADACQADADAAAHQAAAIgDADQgDACgIAAQgIAAgCgCg");
	this.shape_20.setTransform(-154.5,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_21.setTransform(-160.6,92.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBBEIgHgCIgHgFIgHgHIAAAKIAAACIgCABIgEAAIgEAAIgFAAIgEAAIgBgBIgBgCIAAiAIABgCIACgBIADAAIAGgBIAGABIAEAAIACABIABACIAAAxIAGgHIAHgDIAGgDIAHAAQAKAAAHAEQAGADAFAIQAEAGACAIQACAIAAAKQAAAMgDAJQgCAJgFAHQgFAGgHAEQgHADgJAAIgHgBgAgDgGIgFACIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEABQAFgBAEgCIAFgGIADgJIABgKIgBgLQAAgFgCgEQgCgDgEgCQgDgDgFAAIgEABg");
	this.shape_22.setTransform(-169.1,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_23.setTransform(-180.1,93.4);

	this.INVIERTES = new cjs.Text("", "18px 'Impact'");
	this.INVIERTES.name = "INVIERTES";
	this.INVIERTES.lineHeight = 24;
	this.INVIERTES.lineWidth = 91;
	this.INVIERTES.parent = this;
	this.INVIERTES.setTransform(94.7,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_24.setTransform(82.6,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_25.setTransform(66.9,132.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIggAAIgBgBIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIABAFIgBAFIgBAEIgBABIgCABIgfAAIAABkIAAACIgDABIgDACIgHAAg");
	this.shape_26.setTransform(56.9,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_27.setTransform(47.2,132.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_28.setTransform(39.8,132.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBYAAIABABIABACIABADIAAAFIAAAFIgBAEIgBABIgBABIggAAIAABkIgBACIgCABIgEACIgGAAg");
	this.shape_29.setTransform(32.2,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgIIgEgHIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_30.setTransform(22,132.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_31.setTransform(11.3,132.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_32.setTransform(0.3,132.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgBgCIgBgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAXAuIAFAIIAEAIIADAIIAFAHIgBgOIAAgOIAAg6IABgCIABgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgGAAQgCgBgCgCIgEgFIgEgIIgfg6IgFgLIgGgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_33.setTransform(-12.1,132.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_34.setTransform(-21.4,132.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBXIgGgBIgCAAIgCgCIAAgCIACgUIgIgBIgHgCIgFgDIgEgCIgBgDIgBgHIAAgFIABgEIABgBIACAAIAEABIAHADIAJAEQAFABAIAAQAKAAAFgFQAGgEAAgHQAAgFgDgDQgCgCgEgCIgIgFIgLgDIgKgGIgJgGQgEgEgCgFQgCgGgBgIQABgHACgGQACgGAFgFQAEgEAIgDQAGgCAIgCIACgTIABgBIABgBIACgBIAEgBIAFABIADABIABABIAAACIgCASIAHABIAFACIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgCABIgBAAIgDgBIgHgCIgIgEIgKgBIgIABQgDABgCACIgEAEIgBAGQABAEACADQACAEAEABIAIAEIALAFIAKAEQAGADADADQAEAEADAFQACAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgHADQgIADgJABIgBAUIgBABIgBACIgDABIgDAAg");
	this.shape_35.setTransform(82.6,177.8);

	this.TOTALGENERAL = new cjs.Text("", "18px 'Impact'", "#33CC00");
	this.TOTALGENERAL.name = "TOTALGENERAL";
	this.TOTALGENERAL.lineHeight = 24;
	this.TOTALGENERAL.lineWidth = 78;
	this.TOTALGENERAL.parent = this;
	this.TOTALGENERAL.setTransform(95.7,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_36.setTransform(68.1,177.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_37.setTransform(58.8,177.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_38.setTransform(48.9,177.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_39.setTransform(39.6,177.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAhBAIgHAAIgEgBIgCgBIgBgDIgLgcIgEgJIgEgFIgFgFIgHgBIgIAAIAAAwIgBACIgCACIgEABIgGAAIgGAAIgEgBIgCgCIgBgCIAAhxQAAgFACgCQACgBAEAAIAgAAIAIAAIAFABQAIABAGACQAGACAFAFQAEAEACAGQACAGAAAIQAAAFgBAGQgCAFgDAEQgDAFgFACQgEADgGABIAFAEIAFAEIAEAHIAEAIIAKAZIACAFIABACIgBADIgBABIgFABIgHAAgAgUgHIANAAIAIgBIAHgEIAEgFQACgEAAgEQAAgGgDgEQgDgFgGgCIgEAAIgHAAIgLAAg");
	this.shape_40.setTransform(29.3,177.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_41.setTransform(18.6,177.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_42.setTransform(8.5,177.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBAIgGAAIgDgBIgCgCIAAgBIAAhxQAAgFADgCQACgCAEAAIAOAAIAGABIAEACIAFAEIADAGIAYAuIAEAIIAEAIIADAIIAEAHIAAgOIAAgOIAAg6IAAgCIADgBIADgBIAGgBIAFABIAEABIACABIAAACIAABwIgBAEIgCADIgDACIgDAAIgLAAIgHAAQgCgBgCgCIgEgFIgEgIIgfg6IgGgLIgEgMIgBAAIABAOIAAAPIAABBIAAABIgCACIgEABIgGAAg");
	this.shape_43.setTransform(-3,177.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_44.setTransform(-12.3,177.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAvIgEAAIgDgBIgCgBIAAgCIAAghIgeAAIgCgBIgBgBIgBgDIgBgFIABgDIABgDIABgCIABgBIAfAAIAAghIAAgBIACgCIADgBIAEAAIAFAAIADABIACACIAAABIAAAhIAfAAIABABIACACIAAADIABADIgBAFIAAADIgCABIgBABIgfAAIAAAhIAAACIgCABIgDABIgFAAg");
	this.shape_45.setTransform(-24.4,177.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIABABIACABIABAEIAAAFIAAAFIgBADIgCACIgBAAg");
	this.shape_46.setTransform(-37.5,177.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_47.setTransform(-48.4,177.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBXAAIACAAIACACIAAADIABAFIgBAFIAAAEIgCABIgCAAIgfAAIAABlIAAACIgDACIgEABIgGAAg");
	this.shape_48.setTransform(-59.4,177.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_49.setTransform(-71.1,177.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIggAAIgBAAIgBgBIgBgEIAAgFIAAgFIABgDIABgCIABAAIBZAAIABAAIABACIABADIAAAFIAAAFIgBAEIgBABIgBAAIggAAIAABlIgBACIgCACIgDABIgHAAg");
	this.shape_50.setTransform(-82.8,177.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaA/QgEAAgCgCQgCgBAAgFIAAhxIABgCIACgCIAEAAIAGgBIAGABIAFAAIACACIAAACIAABkIAnAAIACABIABABIABAEIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_51.setTransform(-95.9,177.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_52.setTransform(-106.8,177.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgCIAAhlIgfAAIgCAAIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACAAIBYAAIABAAIACACIAAADIAAAFIAAAFIAAAEIgCABIgBAAIggAAIAABlIgBACIgCACIgEABIgGAAg");
	this.shape_53.setTransform(-117.8,177.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_54.setTransform(-125.4,177.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBAIgGAAIgEgBIgCgCIAAgCIAAhwQAAgFACgCQACgDAEABIAeAAIAIAAIAJABQAGABAGADQAGAEAEAEQAEAFACAGQACAGAAAIQAAAKgDAJQgEAHgGAGQgGAFgJADQgKADgLAAIgLAAIAAAoIAAACIgDACIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgFgEgCQgDgBgEgBIgHAAIgLAAg");
	this.shape_55.setTransform(-133,177.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_56.setTransform(-144.8,177.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_57.setTransform(-156,177.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#225B4C").s().p("AgzBJIAAiRIAlAAIAAB1IBCAAIAAAcg");
	this.shape_58.setTransform(61.6,-123.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#225B4C").s().p("AAkBJIgKgeIg0AAIgLAeIglAAIA1iRIAqAAIA2CRgAgRARIAiAAIgRgzg");
	this.shape_59.setTransform(46.7,-123.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_60.setTransform(30.4,-123.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#225B4C").s().p("AgzBJIAAiRIBnAAIAAAcIhCAAIAAAaIA+AAIAAAbIg+AAIAAAkIBCAAIAAAcg");
	this.shape_61.setTransform(15.4,-123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#225B4C").s().p("AgRBHQgOgFgKgKQgKgJgFgPQgGgNAAgTQAAgRAFgOQAGgOAKgJQAJgKAOgFQAOgFAQgBIAQABIAOADIAMAEIAJAFIAAAjIgEAAIgHgGIgKgGQgFgDgGgCQgGgCgIgBQgIAAgHADQgGACgGAGQgGAGgDAJQgEAJAAAMQAAANAEAKQAEAJAGAFQAGAGAGACQAHACAIAAQAGAAAHgCQAHgCAFgEIAJgGIAHgFIAEAAIAAAjIgKAEIgLAEIgNADIgRABQgQAAgNgEg");
	this.shape_62.setTransform(1.1,-123.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#225B4C").s().p("AAeBJIg9hjIAABjIgiAAIAAiRIAtAAIA0BTIAAhTIAiAAIAACRg");
	this.shape_63.setTransform(-14.6,-123.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#225B4C").s().p("AgpBJIAAgaIAXAAIAAhdIgXAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_64.setTransform(-28.5,-123.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#225B4C").s().p("AgvA8QgRgOAAgbIAAhcIAmAAIAABaQAAAPAGAHQAHAIANAAQAOAAAHgIQAGgHAAgPIAAhaIAmAAIAABcQAAAbgRAOQgQAOggAAQgfAAgQgOg");
	this.shape_65.setTransform(-42.1,-123.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#225B4C").s().p("AAUBcQgJgDgFgFQgGgFgCgHQgCgIgBgIQgggCgTgTQgSgUAAghQAAgjAUgUQAUgVAiAAQAjAAAUAVQAUAUAAAjQAAAYgMAUQgLASgXAIQAAAJAGAEQAEAFAMAAIAJgCIAIgCIAEAAIAAAaIgMACIgUABQgLAAgJgDgAgNhAQgFACgGAHQgFAFgDAJQgDAKAAANQAAANADAIQADAJAFAGQAFAGAGADQAHACAGAAQAHAAAHgCQAGgDAGgGQAEgHADgJQADgIAAgMQAAgNgDgKQgDgIgFgGQgFgGgHgDQgGgDgHAAQgGAAgHADg");
	this.shape_66.setTransform(-58.7,-121.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_67.setTransform(133.2,-148.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#225B4C").s().p("AgrBEQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgbAAgQgPgAgIgGQgEABgEAEQgCADgDAGQgCAIAAAJQABAKABAGQACAHADAEQADADAFACQAEACAFAAIAJgBQAEgDADgDQADgEACgGQACgGAAgLQAAgKgCgGQgCgHgDgCQgDgFgEgBQgFgBgFgBQgEABgEABgAgXgtIAYglIAiAAIAAABIgiAkg");
	this.shape_68.setTransform(119.1,-150.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_69.setTransform(108.8,-150.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_70.setTransform(99.7,-148.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_71.setTransform(86.7,-148.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#225B4C").s().p("AgyA3IAAgXIA4g8Ig2AAIAAgaIBiAAIAAAWIg3A9IA4AAIAAAag");
	this.shape_72.setTransform(74.4,-148.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_73.setTransform(65,-150.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#225B4C").s().p("AgRBMIAAiXIAjAAIAACXg");
	this.shape_74.setTransform(58.1,-150.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_75.setTransform(47.7,-148.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgzIgOAAIAAgXIAOAAIAAgfIAjAAIAAAfIAgAAIAAAXIggAAIAAAmIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgCIAHgBIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_76.setTransform(36.8,-149.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_77.setTransform(28.8,-150.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_78.setTransform(18.8,-146.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#225B4C").s().p("AgrAwQgLgJAAgPQAAgNAGgHQAFgHAKgEQAKgFAOgCIAdgCIAAgBQAAgJgHgDQgIgDgNgBQgJAAgKAEIgOAEIgDAAIAAgbIASgCQAMgDANAAQAdAAANAKQAOAIAAAVIAABJIgjAAIAAgLIgHAEIgIAGIgKADIgMABQgQAAgKgKgAAEAFIgLADQgGABgCADQgDAEAAAEIAAAGIADAEIAGADIAJABQAFAAAFgCQAGgCAEgDIAAgYIgQACg");
	this.shape_79.setTransform(4.4,-148.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_80.setTransform(-7.7,-148.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAKAGAQAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgWAHQgLACgNAAQgfAAgTgPgAgOgeQgHAFgBAMIAtAAQAAgLgFgFQgGgGgLAAQgJAAgGAFg");
	this.shape_81.setTransform(-27.1,-148.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgLABQgTAAgMgQgAgNgDQgHAIAAAPQAAARAFAGQAGAIALAAQAFAAAFgCQAGgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_82.setTransform(-41.2,-150);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgDAEgDAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_83.setTransform(-61.5,-148.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#225B4C").s().p("AgsA+QgMgQAAgZQAAgOAEgKQAEgLAHgIQAHgHAJgEQAKgEAJAAQAJAAAGACIANAFIAAguIAjAAIAACXIgjAAIAAgMQgJAHgIAEQgHADgKABQgUAAgMgQgAgNgDQgHAIAAAPQAAARAGAGQAFAIAMAAQAEAAAGgCQAFgCAEgDIAAg1IgIgCIgIAAQgMAAgHAIg");
	this.shape_84.setTransform(-75.8,-150);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgbAAgQgPgAgIgfQgEABgEAEQgDAEgBAGQgCAHAAAJQAAAJABAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_85.setTransform(-89.3,-148.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#225B4C").s().p("AgRBMIAAhsIAjAAIAABsgAgSgxIAAgaIAlAAIAAAag");
	this.shape_86.setTransform(-99.6,-150.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAQQAKgLAJgDQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_87.setTransform(-107.3,-148.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgaARgQQARgQAbAAQAbAAAOANQANAOAAAZIAAAMIhQAAQACAMAIAIQAJAGARAAQALAAALgEQAKgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgFgFQgGgGgKAAQgJAAgHAFg");
	this.shape_88.setTransform(-119.6,-148.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_89.setTransform(-132.9,-146.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAQAPQAPAQAAAaQAAAbgPAQQgRAPgcAAQgcAAgPgPgAgIgfQgEABgDAEQgEAEgCAGQgCAHAAAJQABAJABAHQACAGADAEQADAEAFACQAEACAFAAIAJgCQAEgCADgDQADgFACgFQACgGAAgLQAAgJgCgGQgCgHgDgDQgDgFgEgBQgFgCgFAAQgEAAgEACg");
	this.shape_90.setTransform(99.2,-174.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_91.setTransform(87.8,-175.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_92.setTransform(77.5,-174.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#225B4C").s().p("AgnArQgSgPAAgbQAAgbARgPQARgQAcAAQAaAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgRgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_93.setTransform(64.8,-174.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#225B4C").s().p("AgsAuQgKgLAAgUIAAhGIAjAAIAAA2IABANQAAAFACAEQACAEAEABQAEACAGAAIAJgCQAGgBAFgEIAAhMIAjAAIAABsIgjAAIAAgMQgKAIgIADQgHAEgLAAQgSAAgKgKg");
	this.shape_94.setTransform(51,-174.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#225B4C").s().p("Ag4BMIAAiUIAjAAIAAALQAIgGAJgEQAHgEALAAQAVAAALAPQALAPAAAaQAAANgEALQgEALgHAHQgHAIgJADQgIAEgLAAQgIAAgHgCIgNgFIAAAtgAgLgvQgFABgFADIAAA2QAEACAEAAIAIAAQAMAAAHgIQAHgHAAgQQAAgQgFgIQgGgHgLAAIgKACg");
	this.shape_95.setTransform(37.3,-172.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#225B4C").s().p("AA3A4IAAg3IgBgMQAAgGgCgDQgBgEgEgBQgEgCgGAAQgFAAgEACIgLAFIAABMIghAAIAAg3IgBgMIgCgJQgCgEgDgBQgEgCgGAAQgFAAgGACIgIAFIAABMIgjAAIAAhsIAjAAIAAAMQAJgHAIgEQAJgEAJAAQALAAAIAEQAIAFAEAKQALgJAKgFQAKgFAJAAQASAAAJAKQAJALAAAUIAABGg");
	this.shape_96.setTransform(19.4,-174.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#225B4C").s().p("AgrArQgQgQAAgbQAAgaAQgQQAQgPAbAAQAdAAAPAPQAQAQAAAaQAAAbgQAQQgPAPgdAAQgcAAgPgPgAgIgfQgEABgEAEQgCAEgCAGQgCAHgBAJQAAAJACAHQACAGADAEQADAEAEACQAFACAEAAIAJgCQAFgCADgDQAEgFABgFQACgGAAgLQAAgJgCgGQgBgHgEgDQgDgFgFgBQgEgCgFAAQgEAAgEACg");
	this.shape_97.setTransform(1.9,-174.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#225B4C").s().p("AgLA2QgMgDgJgHQgJgHgEgLQgFgLAAgPQAAgOAFgLQAFgLAJgIQAJgGAMgEQAKgDANAAQALAAAKACQAJADAIAEIAAAeIgFAAIgFgEIgHgFQgEgCgEgBQgFgCgHAAQgOAAgGAJQgIAJAAAOQAAAQAIAIQAHAJAOAAQAHAAAFgCIAJgDIAGgFIAEgEIAFAAIAAAeQgIAEgJACQgJADgLAAQgOAAgLgEg");
	this.shape_98.setTransform(-10.7,-174.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#225B4C").s().p("AgfA3QgMgDgHgDIAAgdIADAAIAGAEIAKAFIAMAEQAHABAIAAQAJAAAFgCQAFgCAAgFQAAgEgDgCIgLgDIgJgCIgNgCQgPgEgHgIQgHgIAAgMQAAgQAPgKQAPgLAZAAQAMAAAMADIARAFIAAAcIgDAAQgIgGgKgDQgKgEgKAAQgHAAgGADQgGACAAAEQAAAEADACQACACAJADIAMACIAMACQAOAEAHAHQAGAHAAAMQAAARgPAKQgPALgaAAQgOAAgMgDg");
	this.shape_99.setTransform(-29.3,-174.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#225B4C").s().p("AgoBEQgRgPAAgbQAAgaARgQQAQgQAcAAQAbAAAOAOQANANAAAZIAAAMIhQAAQACANAIAHQAKAGAQAAQALAAALgEQAKgEAGgEIAEAAIAAAcIgWAHQgLACgNAAQgfAAgTgPgAgOgFQgHAFgBALIAtAAQAAgLgFgEQgGgGgLAAQgJAAgGAFgAgUgsIAXgmIAiAAIAAACIgiAkg");
	this.shape_100.setTransform(-42,-176.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#225B4C").s().p("AgnA3IAAhsIAkAAIAAAPQAKgJAJgEQAIgDAIAAIAEAAIAEABIAAAhIgDAAIgIgCIgIAAIgNABIgLAEIAABIg");
	this.shape_101.setTransform(-53,-174.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#225B4C").s().p("AgoArQgRgPAAgbQAAgbARgPQARgQAbAAQAbAAANAOQAOANAAAZIAAALIhQAAQABANAJAIQAJAGARAAQALAAAKgEQALgEAGgFIAEAAIAAAdIgXAHQgKACgMAAQghAAgSgPgAgOgeQgGAFgCAMIAtAAQAAgLgGgGQgFgFgKAAQgJAAgHAFg");
	this.shape_102.setTransform(-65.2,-174.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#225B4C").s().p("AgQBAQgKgJAAgUIAAgyIgOAAIAAgYIAOAAIAAgfIAjAAIAAAfIAgAAIAAAYIggAAIAAAlIAAAKQAAAFABADQACAEADACQAEACAGAAIAHgBIAHgCIACAAIAAAXIgMADIgPABQgUgBgKgHg");
	this.shape_103.setTransform(-76.5,-175.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#225B4C").s().p("AAUA4IAAg2IgBgMIgCgKQgCgEgEgBQgEgCgGAAQgEAAgFACQgFABgGAEIAABMIgjAAIAAhsIAjAAIAAAMQAJgIAJgEQAIgDAKAAQASAAAKAKQAKAKAAAVIAABGg");
	this.shape_104.setTransform(-88.1,-174.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#225B4C").s().p("AgpBJIAAgaIAYAAIAAhdIgYAAIAAgaIBTAAIAAAaIgXAAIAABdIAXAAIAAAag");
	this.shape_105.setTransform(-100.7,-176.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_106.setTransform(200.7,-14.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgaA+QgLgEgHgIQgIgIgDgMQgEgMAAgRQAAgOAEgNQAEgMAIgJQAHgIAMgFQALgEAOAAQAOAAALADQALAEAIAIQAHAIAEAMQAEAMAAARQAAAOgEANQgEAMgIAJQgIAIgLAFQgLAEgOAAQgPAAgLgDgAgPgoQgGAEgEAGQgEAGgBAIQgCAIAAAIQAAAKACAIQABAIAEAGQAEAGAGADQAGADAJAAQAJAAAGgDQAHgEAEgGQAEgGABgIQACgIAAgJQAAgJgCgIQgBgIgEgGQgEgGgGgDQgGgDgKAAQgIAAgHADg");
	this.shape_107.setTransform(189.2,-14.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgoBRIgGAAIgDgBIgBgBIgBgBIAAhxQAAgFADgCQACgCAEgBIAOAAIAGABIAEACIAFAFIADAGIAYAtIAEAJIAEAIIADAHIAFAIIgBgOIAAgPIAAg5IABgDIACgBIADgBIAGAAIAGAAIADABIABABIABADIAABwIgBAEIgCADIgDABIgEABIgKAAIgHgBQgCAAgCgCIgEgFIgEgIIgfg7IgFgKIgGgMIAAAAIAAAOIABANIAABDIgBABIgBABIgEABIgGAAgAAEg3IgGgDIgGgEQgCgCgDAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQgBACAAAEIgBABIgBABIgCAAIgEAAIgFgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGACgEQABgEACgDQAEgDAEgCQAEgCAFAAQAFAAAEACIAGAEIAFADQADACADgBQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAFgBIAGABQABABAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAKgFAGQgGAHgKgBQgGABgEgCg");
	this.shape_108.setTransform(175.9,-16);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_109.setTransform(163.2,-14.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("Ag0BCIgCgBIgBgCIABgCIBZh7IACgBIACgCIAEAAIAEgBIAGABIACABIABACIgBACIhZB7IgCACIgCABIgEAAIgFABIgFgBgAAYA+QgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgHACgGQABgHAEgEQADgFAGgCQAGgCAIAAQAIAAAGACQAGADADAEQADAFABAGIABAMQAAAIgBAGQgCAGgEAFQgDAEgGACQgFADgIAAQgJAAgFgDgAAiANIgDADIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBIADgDIACgGIAAgJIAAgJIgCgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgEABgAgzAAQgGgCgDgEQgDgFgCgGQgBgGAAgHQAAgIABgGQACgGAEgEQADgFAGgCQAFgDAIAAQAJAAAGADQAFACAEAFQADAEABAGIABANQAAAIgBAGQgCAGgEAEQgDAFgGACQgGACgHAAQgJAAgFgCgAgpgxQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCAGIgBAJIABAKIACAGIADADIAEABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgEIABgIIgBgJIgBgHIgDgDIgFgBIgEABg");
	this.shape_110.setTransform(36.1,-47.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAvQgGgCgEgDQgEgDgCgGQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGAAgFABIgIADIgHADIgEACIgBgBIgCgCIgBgDIAAgFIAAgEIACgDIAFgEIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAIIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgDAFgFIAAgOIgKAAIgJABg");
	this.shape_111.setTransform(34,-12.6);

	this.AÑOS = new lib.an_TextInput({'id': 'AÑOS', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.AÑOS.setTransform(99.2,-15,1,1,0,0,0,50,11);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgQAuQgIgCgGgHQgGgGgDgIQgDgKAAgMQAAgLAEgJQADgJAFgHQAGgGAIgEQAJgDAIAAQAMAAAHADQAIADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADgBIACABIABABIAAADIAAAEIAAADIAAADIgBACIgBABIgDACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_112.setTransform(16.4,-45.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_113.setTransform(5.7,-47.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQBAIgKgCIgIgDIgEgDIgCgEIAAgHIAAgFIABgDIABgCIACgBIAEACIAGAEIAJADQAGACAHAAIAHgBQAEgBACgDQADgCABgDQACgDAAgDQAAgFgDgDQgCgDgEgCIgHgFIgKgEIgKgFQgFgCgDgEQgEgFgDgFQgCgGAAgIQAAgJADgHQAEgHAGgEQAFgFAIgCQAIgCAHAAIAJAAIAJACIAHADIAEACIABACIABACIAAADIAAAEIAAAFIAAADIgBACIgCAAIgEgBIgFgDIgIgDQgFgBgFAAIgGABQgEABgCACIgDAEIgBAFQAAAEACAEIAHAFIAHAFIAKAEIAKAFQAFADAEADQAEAFACAFQACAGAAAHQAAAKgDAIQgEAHgGAFQgHAFgIADQgJACgIAAIgMgBg");
	this.shape_114.setTransform(-8.6,-47.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_115.setTransform(-18,-47.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAhBAIgHAAIgEgCIgCgBIgBgCIgLgcIgEgJIgEgGIgFgDIgHgBIgIAAIAAAvIgBACIgCABIgEACIgGAAIgGAAIgEgCIgCgBIgBgCIAAhyQAAgDACgCQACgCAEgBIAgAAIAIABIAFABQAIABAGACQAGADAFAEQAEAEACAGQACAGAAAHQAAAHgBAFQgCAFgDAEQgDAEgFADQgEADgGABIAFADIAFAGIAEAGIAEAHIAKAZIACAGIABACIgBACIgBABIgFACIgHAAgAgUgHIANAAIAIgBIAHgEIAEgGQACgDAAgEQAAgGgDgFQgDgEgGgBIgEgBIgHAAIgLAAg");
	this.shape_116.setTransform(-28.3,-47.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgdA/QgDAAgCgCQgCgCAAgEIAAhtQAAgEACgCQACgCADAAIA+AAIACAAIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgsAAIAAAfIAlAAIACAAIABACIABADIAAAFIAAADIgBADIgBACIgCAAIglAAIAAAkIAtAAIABABIABABIABAEIAAAEIAAAFIgBADIgBACIgBAAg");
	this.shape_117.setTransform(-39,-47.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAABAIgFAAIgEgCIgCgBIgBgCIAAhkIgfAAIgCgBIgCgBIAAgEIgBgFIABgFIAAgDIACgCIACgBIBXAAIACABIACACIAAADIABAFIgBAFIAAAEIgCABIgCABIgfAAIAABkIAAACIgDABIgEACIgGAAg");
	this.shape_118.setTransform(-49,-47.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgoBAIgFAAIgEgBIgCgCIAAgBIAAhxQAAgFACgCQADgCAEAAIAOAAIAGABIAFACIADAEIAEAGIAXAuIAFAIIAEAIIAEAIIADAHIAAgOIAAgOIAAg6IAAgCIACgBIAEgBIAFgBIAHABIADABIABABIABACIAABwIgBAEIgCADIgDACIgEAAIgLAAIgFAAQgDgBgCgCIgEgFIgFgIIgeg6IgGgLIgFgMIAAAAIAAAOIABAPIAABBIgBABIgCACIgDABIgGAAg");
	this.shape_119.setTransform(-60.5,-47.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_120.setTransform(-69.8,-47.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_121.setTransform(-82.3,-45.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgYAuQgGgDgDgFQgFgGgBgGQgCgHABgKIAAg0IAAgCIACgBIAEgBIAFAAIAHAAIADABIACABIABACIAAAwIABAKQABAEABADQACACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIADgBIADgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgBABIgEABIgFAAIgFAAIgEgBIgBgBIAAgCIAAgKQgIAIgHAEQgHADgIAAQgIAAgHgCg");
	this.shape_122.setTransform(-93.1,-45.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_123.setTransform(-108.2,-45.6);

	this.INTERES = new lib.an_TextInput({'id': 'INTERES', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.INTERES.setTransform(99.2,-46,1,1,0,0,0,50,11);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgIBWIgGAAIgDgBIgBgBIAAgCIACgUIgIgBIgHgDIgFgCIgEgCIgBgDIgBgHIAAgFIABgDIABgCIADAAIADABIAHADIAJADQAFACAHAAQAKAAAGgFQAGgDAAgIQAAgFgDgDQgCgCgEgDIgIgEIgKgDIgLgGIgJgGQgEgEgCgFQgDgGAAgIQAAgHADgGQACgGAFgFQAEgEAIgDQAGgDAIAAIADgUIAAgCIABgBIABAAIAFgBIAFABIADAAIABACIABACIgDATIAGABIAGABIAFACIADACIABACIABACIAAACIAAAFIAAAEIAAAEIgBABIgBABIgFgCIgGgDIgHgDIgLAAIgIAAQgDABgCACIgEAEIgBAFQAAAFADADQACADAEADIAIADIALAFIALAEQAEADAFADQAEAEACAFQADAGAAAIQAAAJgEAGQgDAHgFAFQgGAFgHACQgIAEgKABIAAAUIgBABIgBABIgDABIgDAAg");
	this.shape_124.setTransform(39.1,-76.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgPAuQgJgCgGgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQACgJAGgHQAGgGAIgDQAJgEAJAAQAKAAAJADQAHAEAFAFQAFAGADAHQACAJAAAIIAAAFQAAADgCACQgCADgEAAIg0AAQAAAFACAFQABAEADADQADADAEACQAEABAGAAIALAAIAJgCIAGgCIADgBIACAAIABACIABACIAAAEIAAADIAAADIgBACIgCACIgDABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_125.setTransform(17.5,-75.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgXBBQgHgEgFgGQgEgHgCgIQgCgJAAgKQAAgMADgJQACgIAFgHQAFgGAHgEQAHgDAJAAQAGAAAGADQAGADAGAFIAAgvIABgBIACgCIAEgBIAFAAIAGAAIAEABIACACIABABIAAB/IgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgJQgHAHgHAEQgIAEgIAAQgKAAgGgEgAgIgFQgEACgCADIgDAJIgBAKIABALIADAJQACAEADADQADACAGAAIAEAAIAEgDIAFgEIAGgHIAAgdIgKgJQgFgDgEAAQgFAAgDACg");
	this.shape_126.setTransform(6.8,-77.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgaBAQgDAAgCgDQgCgCAAgDIAAhzIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABABIAABlIAnAAIABABIABACIABADIAAAFIAAAEIgBAEIgBACIgBABg");
	this.shape_127.setTransform(-6.4,-77.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_128.setTransform(-17.3,-77.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAAA/IgFAAIgEgBIgCgBIgBgBIAAhmIggAAIgBAAIgBgCIgBgDIAAgFIAAgFIABgDIABgCIABgBIBYAAIACABIABACIABADIAAAFIAAAFIgBADIgBACIgCAAIgfAAIAABmIgBABIgCABIgDABIgHAAg");
	this.shape_129.setTransform(-28.3,-77.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAABAIgFAAIgEgBIgCgCIgBgBIAAh3IABgBIACgCIAEAAIAFgBIAGABIAEAAIACACIABABIAAB3IgBABIgCACIgEABIgGAAg");
	this.shape_130.setTransform(-35.9,-77.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgeA/IgGAAIgEgBIgCgBIAAgBIAAhxQAAgFACgCQACgCAEgBIAeAAIAIABIAJABQAGACAGADQAGACAEAGQAEAEACAGQACAGAAAIQAAAKgDAJQgEAHgGAFQgGAGgJADQgKADgLAAIgLAAIAAApIAAABIgDABIgDABIgHAAgAgRAAIAMAAQAFAAAEgBQAEgCADgDIAEgHQABgEAAgFQAAgHgCgEQgCgEgEgCQgDgCgEgBIgHgBIgLAAg");
	this.shape_131.setTransform(-43.5,-77.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_132.setTransform(-55.3,-77.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_133.setTransform(-66.5,-77.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAdAwIgFAAIgFgBIgCgBIAAgCIAAgwIgBgKIgCgGQgCgDgDgBQgDgCgEAAQgEAAgEAEQgFADgFAHIAAA4IgBACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAGgHAIgEQAHgEAHAAQAJAAAHADQAFADAEAFQAEAFACAGQABAHABAKIAAA0IgBACIgCABIgEABIgGAAg");
	this.shape_134.setTransform(-81.7,-75.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgBgHAAgKIAAg0IAAgCIACgBIADgBIAHAAIAGAAIADABIACABIABACIAAAwIAAAKQACAEACADQABACADACQADABAEAAQADAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIgBgCIAAgKQgHAIgHAEQgGADgJAAQgJAAgGgCg");
	this.shape_135.setTransform(-92.5,-75.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_136.setTransform(-106.4,-75.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgPAuQgKgCgFgHQgGgFgDgKQgDgJAAgMQAAgKADgKQAEgJAFgHQAGgGAIgDQAIgEAKAAQAKAAAIADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFACAFQABAEADADQACADAFACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIAAACIgBACIgEABIgHACIgKACIgMABQgLAAgIgDgAgGgdIgGAFIgDAHIgCAJIAkAAQAAgLgEgGQgEgFgKgBQgDAAgEACg");
	this.shape_137.setTransform(-115.4,-75.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAAA6QgFgCgDgEQgEgEgCgGQgCgFABgIIAAgsIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAFgBIAGABIADABIACABIABACIAAATIATAAIACAAIABACIAAADIABAFIgBAIQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIADgBIABAAIACAAIAAACIAAACIABAFIgBAGIgBAEIgCABIgFACIgEAAIgGABQgIAAgEgCg");
	this.shape_138.setTransform(-124.1,-76.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPAwIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIADAAIAEABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgCAAIgDgBIgDgBIgCAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_139.setTransform(-130.4,-75.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQAuQgJgCgFgHQgGgFgDgKQgDgJAAgMQAAgKAEgKQADgJAFgHQAGgGAIgDQAIgEAJAAQAMAAAHADQAIAEAFAFQAFAGACAHQADAJAAAIIAAAFQAAADgCACQgCADgDAAIg1AAQAAAFABAFQACAEADADQADADAEACQAEABAGAAIAMAAIAIgCIAFgCIAFgBIABAAIABACIAAACIAAAEIAAADIAAADIgBACIgBACIgDABIgHACIgKACIgMABQgLAAgJgDgAgGgdIgGAFIgEAHIgBAJIAkAAQAAgLgEgGQgFgFgJgBQgEAAgDACg");
	this.shape_140.setTransform(-139.5,-75.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_141.setTransform(-147,-77.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAAAvIgHAAIgGgBIgCgBIgCgCIgahOIgBgEIAAgDIAAgBIAAgBIACgBIAEgBIAGAAIAHAAIADABIACABIABACIATA/IABADIAAgDIAUg/IABgCIACgBIAEgBIAGAAIAFAAIAEABIACABIAAABIAAABIAAACIAAACIgBADIgaBOIgBACIgDABIgFABIgJAAg");
	this.shape_142.setTransform(-154.2,-75.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_143.setTransform(-164.2,-75.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_144.setTransform(-172.1,-77.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAABCIgFAAIgEgBIgCgBIAAgBIAAhWIAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAABWIAAABIgCABIgEABIgGAAgAgKgrQgDgDAAgGQAAgIADgCQADgDAHgBQAIAAADADQADADAAAHQAAAIgDACQgDADgIAAQgIAAgCgDg");
	this.shape_145.setTransform(-181.5,-77.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgNAwIgIgCIgFgBIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFAAIAFgBIAFgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgDIgIgCIgHgFQgEgCgDgBQgDgEgCgEQgCgEAAgHQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAADIABADIgBAFIAAACIgBABIgBABIgDgBIgFgCIgGgCIgJgCIgEABIgEACIgDADIAAADQAAAEABABIAFAEIAGAEIAIACIAIAEQAEACADACQADADACAFQABAEAAAGQAAAIgCAFQgDAGgFAEQgFADgHACQgHACgHAAIgKgBg");
	this.shape_146.setTransform(-187.9,-75.6);

	this.inversion = new lib.an_TextInput({'id': 'inversion', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inversion.setTransform(99.2,-78,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inversion},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.INTERES},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.AÑOS},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.TOTALGENERAL},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.INVIERTES},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.GANANCIA}]}).wait(2));

	// Capa_2
	this.instance = new lib.copiaMapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-242,-184,0.126,0.136);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("Egq8AfYMAAAg+vMBV5AAAMAAAA+vg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuenta3},{t:this.cuenta4},{t:this.parcialidad},{t:this.cuenta10},{t:this.cuenta5},{t:this.cuenta6},{t:this.cuenta8},{t:this.shape_147},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-200.7,549.9,401.5);


(lib.crecedinero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Capa_1
	this.instance = new lib.crece2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(180,197.3,1,0.06,0,0,0,180,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:72.9,scaleY:0.83,y:98.3},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,193,360,12);


// stage content:
(lib.capitaliza = function(mode,startPosition,loop) {
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
		
		
		this.INICIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_INICIO.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_INICIO()
		{
			this.gotoAndStop(0);
		}
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
	this.frame_4 = function() {
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
	this.frame_5 = function() {
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
	this.frame_6 = function() {
		//this.addChild (new lib.icanual());
		
		this.stop();
		
		this.BTNQUINCENAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(4);
		}
		
		
		this.BTNDIARIO.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(6);
		}
		
		this.BTNSEMANAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		this.BTNANUAL.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		this.BTNTRIMESTRE.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Actions
	this.INICIO = new lib.INICIO();
	this.INICIO.name = "INICIO";
	this.INICIO.parent = this;
	this.INICIO.setTransform(276.3,424.8,0.636,0.5,0,0,0,38.1,28.5);
	this.INICIO.alpha = 0.238;
	new cjs.ButtonHelper(this.INICIO, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACNCAQAAgUg7gMQgZgFhTgKQg6gHAAgHQAAgMBIgHIgvAAQhIAFAAAPQAAAOAqAIIBNAOQAoAKAAAOIjKAAIAAiAIBHAAIAAgfIgKAGIgTgWICEhQIAoAYIAAgYIAkAAIAAAuIA4AiIgTAWIgKgGIAAAfIBIAAIAACAgAgMgbIAABKIBsAAIAAhbIAPAKIALgMIgzggIAAgtIgaAAIAAAeIgtgcIh6BLIAMAMIAOgKIAABbIAlAAIAAhKgAAOARIAAgsIA8AAIAAAsg");
	this.shape.setTransform(277.3,423.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E6E88").ss(1,1,1).p("ADyAAQAABPhHA3QhHA4hkAAQhjAAhHg4QhHg3AAhPQAAhOBHg3QBHg4BjAAQBkAABHA4QBHA3AABOg");
	this.shape_1.setTransform(276.9,424.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiqCGQhHg3AAhPQAAhNBHg5QBHg3BjAAQBlAABGA3QBHA5AABNQAABPhHA3QhGA4hlAAQhjAAhHg4g");
	this.shape_2.setTransform(276.9,424.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.INICIO}]}).wait(7));

	// Capa_1
	this.BTNTRIMESTRE = new lib.BTNTRIMESTRE();
	this.BTNTRIMESTRE.name = "BTNTRIMESTRE";
	this.BTNTRIMESTRE.parent = this;
	this.BTNTRIMESTRE.setTransform(229.8,463.4,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNTRIMESTRE, 0, 1, 1);

	this.BTNMENSUAL = new lib.BTNMENSUAL();
	this.BTNMENSUAL.name = "BTNMENSUAL";
	this.BTNMENSUAL.parent = this;
	this.BTNMENSUAL.setTransform(145.8,463.4,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNMENSUAL, 0, 1, 1);

	this.BTNANUAL = new lib.BTNANUAL();
	this.BTNANUAL.name = "BTNANUAL";
	this.BTNANUAL.parent = this;
	this.BTNANUAL.setTransform(61.8,463.6,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNANUAL, 0, 1, 1);

	this.BTNDIARIO = new lib.BTNDIARIO();
	this.BTNDIARIO.name = "BTNDIARIO";
	this.BTNDIARIO.parent = this;
	this.BTNDIARIO.setTransform(482.3,462.8,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNDIARIO, 0, 1, 1);

	this.BTNSEMANAL = new lib.BTNSEMANAL();
	this.BTNSEMANAL.name = "BTNSEMANAL";
	this.BTNSEMANAL.parent = this;
	this.BTNSEMANAL.setTransform(397.8,462.8,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNSEMANAL, 0, 1, 1);

	this.BTNQUINCENAL = new lib.QUINCENAL();
	this.BTNQUINCENAL.name = "BTNQUINCENAL";
	this.BTNQUINCENAL.parent = this;
	this.BTNQUINCENAL.setTransform(313.8,463.4,1,1,0,0,0,41,14);
	new cjs.ButtonHelper(this.BTNQUINCENAL, 0, 1, 1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0F302D").ss(1,1,1).p("EgoigATMBRFAAAEgoiAAUMBRFAAA");
	this.shape_3.setTransform(278.5,435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9E3451").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_4.setTransform(278.5,429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_5.setTransform(275.5,487.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_6.setTransform(275.5,483.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_7.setTransform(275.5,479.5);

	this.instance = new lib.crecedinero();
	this.instance.parent = this;
	this.instance.setTransform(276,321,1,1,0,0,0,180,100);

	this.instance_1 = new lib.copiaMapadebits11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,46,0.571,0.38);

	this.instance_2 = new lib.banner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,28.1,1,1,0,0,0,219.4,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_8.setTransform(278.5,499);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_9.setTransform(278.5,495);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(1,1,1).p("EgoiAAAMBRFAAA");
	this.shape_10.setTransform(278.5,491);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0F302D").ss(1,1,1).p("EgoigATMBRFAAAEgoiAAUMBRFAAA");
	this.shape_11.setTransform(275.5,441.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["capitaliza_atlas_"],1), null, new cjs.Matrix2D(0.75,0,0,0.75,-131.5,-181.5)).s().p("AgEINIAAwZIAJAAIAAQZg");
	this.shape_12.setTransform(-3.4,82.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0F302D").ss(1,1,1).p("EghbgZEMBC4AAAQFkAAAAGMMAAAAlxQAAGMlkAAMhC4AAAQllAAAAmMMAAAglxQAAmMFlAAg");
	this.shape_13.setTransform(275.5,257.5);

	this.instance_3 = new lib.icanual();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,202.5);

	this.icmensual = new lib.icmensual();
	this.icmensual.name = "icmensual";
	this.icmensual.parent = this;
	this.icmensual.setTransform(275,202.5);

	this.instance_4 = new lib.ictrimestral();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,202.5);

	this.instance_5 = new lib.icquincenal();
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,202.5);

	this.instance_6 = new lib.icsemanal();
	this.instance_6.parent = this;
	this.instance_6.setTransform(275,202.5);

	this.icdiariamente = new lib.icdiariamente();
	this.icdiariamente.name = "icdiariamente";
	this.icdiariamente.parent = this;
	this.icdiariamente.setTransform(275,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE}]}).to({state:[{t:this.instance_3},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).to({state:[{t:this.icmensual},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).to({state:[{t:this.instance_4},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).to({state:[{t:this.instance_5},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).to({state:[{t:this.instance_6},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).to({state:[{t:this.icdiariamente},{t:this.BTNQUINCENAL},{t:this.BTNSEMANAL},{t:this.BTNDIARIO},{t:this.BTNANUAL},{t:this.BTNMENSUAL},{t:this.BTNTRIMESTRE},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.1,260.3,543,492.2);
// library properties:
lib.properties = {
	id: '858D956FBD12074B8CFF87E75C15A0EB',
	width: 550,
	height: 505,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/capitaliza_atlas_.png?1655136918991", id:"capitaliza_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1655136919378", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1655136919378", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1655136919378", id:"an.TextInput"}
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