/*
Author: wysaid
Date: 2014-3-26
Blog: http://blog.wysaid.org/
*/

function appendLog(logString)
{
	var logArea = document.getElementById("logarea");
	logArea.value += logString + "\n";
	logArea.scrollTop = logArea.scrollHeight;
}

function clearLog()
{
	document.getElementById("logarea").value = "";
}

function checkEnv()
{
	var canvasObj = document.getElementById("showcase");
	var gl = canvasObj.getContext("experimental-webgl");
	if (!gl)
	{
		alert("wy: 你的浏览器不支持WebGL，请使用Chrome或者Firefox等支持WebGL的浏览器打开本页面!!");
		appendLog("wy: Your browser doesnot support WebGL! Try again with chrome or firefox!!");
		return;
	}
	appendLog("The max renderbuffer size your browser support: " + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
	appendLog("The max texture image units your browser support: " + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
	appendLog("The max texture size your browser support: " + gl.getParameter(gl.MAX_TEXTURE_SIZE));
	appendLog("The max cube map texture size your browser support: " + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
	appendLog("The max viewport dims your browser support: " + gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0]);
	appendLog("初始化完毕，如果不知道如何使用请点击右侧查看说明");
}

function bodyResize()
{
	var wrapperObj = document.getElementById("showcase-wrapper");
	var canvasObj = document.getElementById("showcase");
	canvasObj.width = wrapperObj.clientWidth;
	canvasObj.height = wrapperObj.clientHeight;
	wrapperObj.title = "viewport: " + wrapperObj.clientWidth + " x " + wrapperObj.clientHeight;
}

function runCode()
{
	var codeWrapper = document.getElementById("code-wrapper");

	var jscodeArea = document.getElementById("jscodearea");
	var vshcodeArea = document.getElementById("vshcodearea");
	var fshcodeArea = document.getElementById("fshcodearea");

	codeWrapper.innerHTML = "";

	var vshcriptObj = document.createElement("script");
	vshcriptObj.innerHTML = vshcodeArea.value;
	vshcriptObj.setAttribute("type", "x-shader/x-vertex");
	codeWrapper.appendChild(vshcriptObj);

	var fshcriptObj = document.createElement("script");
	fshcriptObj.innerHTML = fshcodeArea.value;
	fshcriptObj.setAttribute("type", "x-shader/x-fragment");
	codeWrapper.appendChild(fshcriptObj);

	var jsscriptObj = document.createElement("script");
	jsscriptObj.innerHTML = jscodeArea.value;
	jsscriptObj.setAttribute("type", "text/javascript");
	codeWrapper.appendChild(jsscriptObj);
}

function attachHTML()
{
	var htmlWrapper = document.getElementById("html-wrapper");
	htmlWrapper.innerHTML = "";

	var htmlArea = document.getElementById("htmlarea");
	var scriptWrapper = document.createElement("div");
	scriptWrapper.innerHTML = htmlArea.value;
	var scriptTags = scriptWrapper.getElementsByTagName("script");
	for(var index in scriptTags)
	{
		var scriptObj = document.createElement("script");
		scriptObj.setAttribute("type", "text/javascript");
		if(scriptTags[index].innerHTML)
			scriptObj.innerHTML = scriptTags[index].innerHTML;
		if(scriptTags[index].src)
			scriptObj.src = scriptTags[index].src;
		htmlWrapper.appendChild(scriptObj);
	}
}

function runCodeInNewWindow()
{
	alert("以后再实现～ Not Available Now!");
}

function howToUse()
{
	var logArea = document.getElementById("logarea");
	logArea.value += "\nAuthor: wysaid\n" + 
	 "请在右侧窗口内填写相应的代码，" +
	 "其中HTML代码窗口可以填写script标签以引入第三方javascript库如three.js或者jquery等\n" +
	 "HTML代码窗口中的代码通常需要提前附加，所以请在运行js代码之前点击附加HTML代码" + 
	 "写好代码以后点击运行代码可以查看结果，" + 
	 "如果是直接在这上面写的话请记得及时保存下来哦，否则浏览器一刷新可能就没有了。\n";
	 logArea.scrollTop = logArea.scrollHeight;
}




