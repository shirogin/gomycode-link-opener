(() => {
	const originalWriteText = navigator.clipboard.writeText;

	navigator.clipboard.writeText = async function (text) {
		console.log("Intercepted copy:", text);

		if (text.startsWith("http")) {
			window.open(text, "_blank"); // Open URL in new tab
			console.log("Blocked copying and opened:", text);
			return; // Prevent further execution
		}

		// If not a URL, allow normal copying
		return originalWriteText.call(navigator.clipboard, text);
	};

	console.info("🟢 Go My Code Extension: Clipboard Interception Active.");
})();
