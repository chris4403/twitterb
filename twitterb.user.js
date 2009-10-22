// ==UserScript==
// @name        twitterb 
// @description auto fillin B!
// @namespace   http://dev.chrisryu.com/
// @include     http://twitter.com/*
(function() {
    unsafeWindow.jQuery('#status').keyup(function(){
        var v = this.value;
        if(v.match(/http(|s):\/\//) && !v.match(/B!/)) {
            this.value = '[] B! ' + v;
            this.setSelectionRange(1,1);
        }
    });
})();
