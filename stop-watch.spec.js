describe("Stopwatch",function(){

var watch = new StopWatch();

  /*describe("StopWatch HTML elements",function(){
    it("time display",function(){
      expect(document.getElementsByTagName("time")[0]).toBeDefined();
    });
    it("start button",function(){
      expect(document.getElementById("start")).toBeDefined();
    });
    it("stop button",function(){
      expect(document.getElementById("stop")).toBeDefined();
    });
    it("reset button",function(){
      expect(document.getElementById("reset")).toBeDefined();
    });
  });*/
  describe("Stopwatch functionality",function(){
    it("start counting time", function(){
      expect(watch).toBeDefined();
    });

    it("StopWatch should be zero before we start the Timer", function(){
      expect(watch.timeElapsed).toBe(0);
    });
    it("StopWatch shouldhave a startTime variable", function(){
      expect(watch.startTime).toBe(0);
    });

  });
});
