
'use strict';
var StopWatch = (function() {
  var StopWatch = function() {
    this.lock = false;
    this.isStopped = true;
    this.timeElapsed = 0;
    this.startTime = 0;
    this.interval = 0;
    this.laps = [];
  };

  StopWatch.prototype.stop = function (time) {
    if (this.lock) {
      return false;
    } else {
      if(time) {
        this.timeElapsed = time - this.startTime;
      } else {
        this.timeElapsed = (this.startTime== 0 ? 0:new Date().getTime() - this.startTime);
      }
      this.lock = true;
      this.isStopped = true;
      clearInterval(this.interval);
      this.laps.push(this.render(this.timeElapsed));
      document.getElementsByClassName('laps')[0].innerHTML = this.laps.join("\n");
      this.lock = false;
      return this.timeElapsed;
    }
  }

  StopWatch.prototype.reset = function () {
    if(this.isStopped === false )
    this.stop();
    this.timeElapsed = 0;
    this.startTime = 0;
    this.isStopped = true
    this.laps = [];
    document.getElementsByClassName('laps')[0].innerHTML = "00:00:00:00";
    document.getElementsByTagName('time')[0].innerHTML = "00:00:00:00";
    return this.timeElapsed;
  }

  StopWatch.prototype.render = function(time){
    var hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    res;
    this.timeElapsed = (time ? time : new Date().getTime() - this.startTime);

    //1ms
    milliseconds = Math.floor((this.timeElapsed % 1000) / 10);
    if (milliseconds < 10) {
      milliseconds = '0' + milliseconds;
    }

    //1s 1000ms
    if (this.timeElapsed > 1000) {
      seconds = Math.floor(this.timeElapsed / 1000) % 60;
      if(seconds < 10) {
        seconds = '0' + seconds;
      }
    } else {
      seconds = '00';
    }

    //1m 60 000s
    if(this.timeElapsed > 60000) {
      minutes = Math.floor(this.timeElapsed / 60000) % 60;
      if(minutes < 10) {
        minutes = '0' + minutes;
      }
    } else {
      minutes = '00';
    }

    //1h = 3 600 000ms
    if(this.timeElapsed > 3600000){
      hours = Math.floor(this.timeElapsed / 3600000);
      if(hours < 10) {
        hours = '0' + hours;
      }
    } else {
      hours = '00';
    }
    res = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    return res;
  };

  StopWatch.prototype.start = function(start){
    if (this.lock || !this.isStopped) {
      return false;
    } else {
      if(start) {
        this.startTime = start;
      } else {
        this.startTime = ( this.startTime ? this.startTime : new Date().getTime());
      }
      this.lock = true;
      this.isStopped = false;
      var test = this;
      this.interval = setInterval(function(){
        document.getElementsByClassName("timer")[0].innerHTML = test.render();
      },50);
      this.lock = false;
      return this.startTime;
    }
  }
  return StopWatch;
})();
