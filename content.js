/*window.onload = function() {
    let imgReplace = document.getElementsByClassName("r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk");
    console.log(imgReplace);
    console.log(imgReplace.item(0));
    imgReplace[0].outerHTML = '<svg viewBox="0 0 48 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>'
}*/


//replace shortcut icon
let links = document.getElementsByTagName("link");
for(let i in links){
    if(links[i].rel && links[i].rel == "shortcut icon"){
        links[i].href = "https://abs.twimg.com/favicons/twitter.2.ico";
    }
}

setTimeout(() => {
    //replace X with twitter logo
    let headers = document.getElementsByTagName("h1");
    let imgReplace = headers[0].getElementsByTagName("svg");
    imgReplace[0].outerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" width="40" height="36"</img>'

    //replace 'Post' with 'Tweet' on button
    let classBar = document.getElementsByClassName("css-175oi2r");
    let tweetButtons = classBar[0].getElementsByTagName("button");
    let tweetButton = tweetButtons[tweetButtons.length-1].getElementsByClassName("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3");
    tweetButton[1].innerHTML = tweetButton[1].innerHTML.replace("Post", "Tweet");
        
  }, 2000);