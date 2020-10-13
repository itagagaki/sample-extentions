messenger.WindowListener.registerChromeUrl([ 
  ["content", "sample", "content/"],
]);

// For Thunderbird 78.0 and later
messenger.WindowListener.registerWindow(
  "chrome://messenger/content/messenger.xhtml",
  "chrome://sample/content/tutorial.js");

// For Thunderbird 68
messenger.WindowListener.registerWindow(
  "chrome://messenger/content/messenger.xul",
  "chrome://sample/content/tutorial.js");

messenger.WindowListener.startListening();
