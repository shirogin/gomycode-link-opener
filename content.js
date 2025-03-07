// Function to inject an external script
function injectScript(file) {
	const script = document.createElement("script");
	script.src = chrome.runtime.getURL(file); // Get the script from the extension
	script.type = "module"; // Use module to avoid CSP issues
	document.documentElement.appendChild(script);
}

// Inject the external script into the page
injectScript("overrideClipboard.js");
