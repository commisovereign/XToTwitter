window.onload = function() {
    console.log("abcdef")
    replaceHeader();
}
function waitForLoad() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(document.getElementsByTagName("h1"));
         },2000);
    });
}

async function replaceHeader(){
    //replace X with twitter logo
    let headers = await waitForLoad();
    let imgReplace = headers[0].getElementsByTagName("svg");
    imgReplace[0].outerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" width="38" height="35"></img>'
}

//replace shortcut icon
let links = document.getElementsByTagName("link");
for(let i in links){
    if(links[i].rel && links[i].rel == "shortcut icon"){
        links[i].href = "https://abs.twimg.com/favicons/twitter.2.ico";
    }
}

setTimeout(() => { 
    //replace 'Post' with 'Tweet' on button
    let tweetButtons = document.getElementsByTagName("button");
    //used to find the index of the post button
    /*for(let i = 0; i< tweetButtons.length; i++){
        let tweetButton = tweetButtons[i].getElementsByClassName("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3");
        console.log(tweetButton[0]);
        console.log(i);
    }*/
    let tweetButton = tweetButtons[17].getElementsByClassName("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3");
    tweetButton[0].innerHTML = tweetButton[0].innerHTML.replace("Post", "Tweet");
    
    //replace home button
    let classBar = document.getElementsByClassName("css-175oi2r r-sdzlij r-dnmrzs r-1awozwy r-18u37iz r-1777fci r-xyw6el r-o7ynqc r-6416eg");
    let homeButton = classBar[0].getElementsByTagName("svg")[0];
    homeButton.outerHTML = '<svg height="30" viewBox="0 0 24 24" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home_5_fill</title> <g id="Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Building" transform="translate(-48.000000, -144.000000)"> <g  transform="translate(48.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M13.2279,2.68814 C12.5057,2.12641 11.4944,2.12641 10.7722,2.68814 L2.38841,9.20884 C1.63605,9.79401 2.04989,11 3.00297,11 L4.09506,11 L4.91497,19.199 C5.01721,20.2214 5.87754,21 6.90504,21 L17.0951,21 C18.1226,21 18.9829,20.2214 19.0851,19.199 L19.905,11 L20.9971,11 C21.9492,11 22.3648,9.79463 21.6117,9.20884 L13.2279,2.68814 Z M12.0001,16 C13.6569,16 15.0001,14.6569 15.0001,13 C15.0001,11.3431 13.6569,10 12.0001,10 C10.3432,10 9.00006,11.3431 9.00006,13 C9.00006,14.6569 10.3432,16 12.0001,16 Z"  fill="white"> </path> </g> </g> </g> </g></svg>';
    

  }, 3000);