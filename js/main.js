!function(){function t(i){var e=i.parentNode;if("svg"!==e.tagName)e=t(e);return e;}function i(t,i,e,n){return 1>(t/=n/2)?e/2*t*t*t*t+i:-e/2*((t-=2)*t*t*t-2)+i}function e(t,i,e,n){var a=1.70158,s=0,r=e;if(0==t)return i;if(1==(t/=n))return i+e;if(s||(s=.3*n),Math.abs(e)>r){r=e;a=s/4}else a=s/(2*Math.PI)*Math.asin(e/r);return r*Math.pow(2,-10*t)*Math.sin((t*n-a)*(2*Math.PI)/s)+e+i}function n(t,i,e){i.split(" ").forEach(function(i){t.addEventListener(i,e,!1)})}function a(t){this.element=t,this.radio=this.element.getElementsByTagName("circle")[3],this.background=this.element.getElementsByTagName("circle")[2],this.time={start:null,total:800},this.status={interacted:!1,animating:!1},this.reset=!1,this.init()}if(!window.requestAnimationFrame){var s=null;window.requestAnimationFrame=function(t,i){var e=(new Date).getTime();s||(s=e);var n=Math.max(0,16-(e-s)),a=window.setTimeout(function(){t(e+n)},n);return s=e+n,a}}a.prototype.init=function(){var t=this;n(this.element,"click animate",function(){t.status.animating||(t.status.animating=!0,t.status.interacted?t.resetAnimation():window.requestAnimationFrame(t.triggerAnimation.bind(t)))}),this.element.addEventListener("reset",function(){if(t.status.animating){t.reset = true;}else if(t.status.interacted){t.resetAnimation();}})},a.prototype.triggerAnimation=function(t){var i=this.getProgress(t);this.animateIcon(i),this.checkProgress(i)},a.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},a.prototype.checkProgress=function(t){var i=this;if(this.reset)return this.status={interacted:!0,animating:!1},this.time.start=null,void this.resetAnimation();if(this.time.total>t){window.requestAnimationFrame(i.triggerAnimation.bind(i))}else{this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null;if(this.reset)this.resetAnimation()}},a.prototype.animateIcon=function(t){if(t>this.time.total)(t=this.time.total);if(0>t)(t=0);var n=i(Math.min(t,.18*this.time.total),0,1,.18*this.time.total).toFixed(2),a=e(Math.max(t-.03*this.time.total,0),0,1,.97*this.time.total).toFixed(2);this.radio.setAttribute("transform","translate("+8*(1-a)+" "+8*(1-a)+") scale("+a+")"),this.background.setAttribute("transform","translate("+8*(1-n)+" "+8*(1-n)+") scale("+n+")")},a.prototype.resetAnimation=function(){this.radio.setAttribute("transform","translate(-8 -8) scale(0)"),this.background.setAttribute("transform","translate(-8 -8) scale(0)"),this.reset=!1,this.checkProgress(this.time.total)};var r=document.getElementsByClassName("nc-interact_input-radio-c-16");if(r)for(var o=0;r.length>o;o++)new a(t(r[o]))}();
!function(){function t(e){var i=e.parentNode;if("svg"!==i.tagName)i=t(i);return i;}function e(t,e,i,n){return 1>(t/=n/2)?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}function i(t,e,i){e.split(" ").forEach(function(e){t.addEventListener(e,i,!1)})}function n(t){this.element=t,this.check=this.element.getElementsByTagName("path")[0],this.checkLength=this.check.getTotalLength().toFixed(2),this.background=this.element.getElementsByTagName("circle")[0],this.time={start:null,total:300},this.status={interacted:!1,animating:!1},this.reset=!1,this.init()}if(!window.requestAnimationFrame){var s=null;window.requestAnimationFrame=function(t,e){var i=(new Date).getTime();s||(s=i);var n=Math.max(0,16-(i-s)),a=window.setTimeout(function(){t(i+n)},n);return s=i+n,a}}n.prototype.init=function(){var t=this;i(this.element,"click animate",function(){t.status.animating?t.reset=!0:(t.status.animating=!0,t.selectAnimation())})},n.prototype.selectAnimation=function(){this.status.interacted?this.resetAnimation():window.requestAnimationFrame(this.triggerAnimation.bind(this))},n.prototype.triggerAnimation=function(t){var e=this.getProgress(t);this.animateIcon(e),this.checkProgress(e)},n.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},n.prototype.checkProgress=function(t){if(this.reset)return this.reset=!1,this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null,void this.selectAnimation();this.time.total>t?window.requestAnimationFrame(this.triggerAnimation.bind(this)):(this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null)},n.prototype.animateIcon=function(t){if(t>this.time.total)(t=this.time.total);if(0>t)(t=0);var i=e(Math.min(t,.6*this.time.total),0,1,.6*this.time.total).toFixed(2),n=t>this.time.total/2?1:0;this.check.setAttribute("stroke-dashoffset",e(Math.max(t-.2*this.time.total,0),+this.checkLength,-this.checkLength,.8*this.time.total).toFixed(2)),this.check.setAttribute("opacity",n),this.background.setAttribute("transform","translate("+8*(1-i)+" "+8*(1-i)+") scale("+i+")")},n.prototype.resetAnimation=function(){this.check.setAttribute("stroke-dashoffset",this.checkLength),this.check.setAttribute("opacity",0),this.background.setAttribute("transform","translate(-8 -8) scale(0)"),this.checkProgress(this.time.total)};var a=document.getElementsByClassName("nc-interact_input-checkbox-c-16");if(a)for(var r=0;a.length>r;r++)new n(t(a[r]))}();
(function() {
	function ncCreateCustomEvent(eventName) {
		//this function is used to create custom events in Javascript
		//you can use your own if you already have one
		var customEvent;
		if (typeof window.Event == "function") {
			customEvent = new Event(eventName, {"bubbles":false, "cancelable":true});
		} else {
			//fallback for IE - initEvent is deprecated but this will run only for IE9/IE10
			customEvent = document.createEvent("Event");
			customEvent.initEvent(eventName, false, true);
		}
		return customEvent;
	}

	function ncCheckOption(event) {
		//an input has been selected/deselected -> we need to trigger the icon animation
		event.target.nextElementSibling.getElementsByTagName('svg')[0].dispatchEvent(ncCreateCustomEvent('animate'));
		//if the input is a radio input, we need to deselect all the siblings 
		if(event.target.type == 'radio') ncResetRadio(this, event);
	}

	function ncResetRadio(wrapper, input) {
		var radioInput = wrapper.querySelectorAll('input[type=radio]:not(:checked)'),
			resetEvent = ncCreateCustomEvent('reset');
		for( var i = 0; radioInput.length > i; i++ ) {
			radioInput[i].nextElementSibling.getElementsByTagName('svg')[0].dispatchEvent(resetEvent);
		}
	}

	//add a class to html if JavaScript is enabled - you don't need this if you are using a library like Modernizr
	document.getElementsByTagName("html")[0].className += " js";

	var formButtons = document.getElementsByClassName('js-nc-form-buttons');
	if( formButtons ) {
		for( var i = 0; formButtons.length > i; i++ ) {
			formButtons[i].addEventListener('change', ncCheckOption);
		}
	}
}());