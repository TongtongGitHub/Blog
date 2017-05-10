(function($){
	if (window.BlogUtil) {return;}
	var Util = {
		formatArticle: function(source){
			var paras = source.split(/\n/);
			var code = "start";
			for (var i = 0; i < paras.length; i++ ) {
				switch (paras[i].charAt(0)) {
					case '*':
						paras[i] = "<p class='list'>" + paras[i] +"</p>";
						break;
					case '-':
						paras[i] = "<p class='list'>" + paras[i] +"</p>";
						break;
					case '#':
						var length = [paras[i].indexOf(" ")];
						paras[i] = paras[i].slice(length);
						if ( length == 1)
							paras[i] = "<h1>" + paras[i] +"</h1>";
						else if (length == 2)
							paras[i] = "<h2>" + paras[i] +"</h2>";
						else if (length == 3)
							paras[i] = "<h3>" + paras[i] +"</h3>";
						else 
							paras[i] = "<h4>" + paras[i] +"</h4>";
						break;
					case '`':
						if (code == "start") {
							paras[i] = "<pre><code>";
							code = "end";
						} else {
							paras[i] = "</pre></code>";
							code = "start";
						}
						break;
					default:
						paras[i] = "<p>" + paras[i] +"</p>";
						break;
				}
			}
			return paras.join("");
		}
	}
	window.BlogUtil = Util;
})(jQuery)