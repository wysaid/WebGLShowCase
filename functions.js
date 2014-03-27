/*
Author: wysaid
Date: 2014-3-26
Blog: http://blog.wysaid.org/
*/

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
	var codeArea = document.getElementById("codearea");
	var htmlArea = document.getElementById("htmlarea");

	codeWrapper.innerHTML = htmlarea.innerHTML;
	var scriptObj = document.createElement("script");
	scriptObj.innerHTML = codeArea.innerHTML;
	scriptObj.setAttribute("type", "text/javascript");
	codeWrapper.appendChild(scriptObj);
}

function runCodeInNewWindow()
{

}

function maximizeCodeArea()
{

}

