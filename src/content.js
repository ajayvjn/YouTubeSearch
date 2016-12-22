console.log("hello");
searchYoutube = function(word){
  var query = (word.selectionText.trim()).replace(/\s/g, '+');
  chrome.tabs.create({url: "https://www.youtube.com/results?search_query=" + query});
};

chrome.contextMenus.create({
  title: "Search in Youtube",
  contexts:["selection"],
  onclick: searchYoutube
});