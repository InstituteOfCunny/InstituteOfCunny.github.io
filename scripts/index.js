//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var slideShowCounter = 0;
var slideShow = [];

localStorage.setItem("indexVisited","indexVisited");

var games =[
	{index: "AV", title: "Anomaly Vault", sponsor: ""},
	{index: "HU", title: "Hentai University", sponsor: ""},
	{index: "HAA", title: "Human Alteration App", sponsor: ""},
	{index: "RDZ", title: "Rainy DayZ", sponsor: ""},
	{index: "BM", title: "Bitch Medicenter", sponsor: ""},
	{index: "PQ", title: "Princess Quest", sponsor: ""},
	{index: "CYOA", title: "Noodle's Lewdles", sponsor: ""},
];

var news =[
	{date: "11/30/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/75349576", text: "Hentai University v27 is here, take a bath right now!"},
	{date: "9/17/22", game: "RDZ", headline: "Rainy DayZ", link: "https://www.patreon.com/posts/72128003", text: "Rainy DayZ v4.5 is released, Typhoid Mary is here!"},
	{date: "9/9/22", game: "RDZ", headline: "Rainy DayZ", link: "https://www.patreon.com/posts/71770970", text: "Rainy DayZ v4 is released, setting the stage for the upcoming Typhoid Mary and adding new content to the Scarlet Mansion!"},
	{date: "8/19/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/70764072", text: "Hentai University v26 is here! Corrupt Damien and Reese, obtain Anri's ending, a new girl by CryptoGreek and more!"},
	{date: "7/31/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/69848536", text: "Hentai University v25 is here! Corrupt and woo Bay and Saffron, measure Sasha's degeneracy, and play new content by Ace today!"},
	{date: "6/30/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/68494119", text: "Hentai University v24 is here! An expanded Victoria? Sure! A mom and her son? Heck yeah! Achievements? You know it!"},
	{date: "6/9/22", game: "CYOA", headline: "Noodle's Lewdles now available~!", link: "https://www.patreon.com/posts/", text: "Check out some radical CYOAs!"},
	{date: "4/30/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/65834599", text: "Hentai University v23 is here! More Kay! More Dan! New Girls! Woooo~!"},
	{date: "3/28/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/64400585", text: "Hentai University v22 is here! What do a trio of schoolgirls, a priest, a quiet girl, a sassy schoolboy, and a college dropout have in common? They're all here in v22!"},
	{date: "2/18/22", game: "HU", headline: "New Suggestion Box!", link: "https://www.patreon.com/posts/62756571", text: "My old terrible suggestion boxes have been retired. Click the link for the new one and for the 127 suggestions I answered today!"},
	{date: "2/10/22", game: "HU", headline: "Noodle Jacuzzi Subreddit", link: "https://www.reddit.com/r/noodlejacuzzi/", text: "I now have a subreddit? Yes I do!"},
	{date: "1/31/22", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/61929172", text: "Hentai University v21 is here! All about ghosts, is it an early halloween?"},
	{date: "12/31/21", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/60558147", text: "Hentai University v20 is here! Featuring new game modes, many engine tweaks, and content for boys and girls galore!"},
	{date: "10/31/21", game: "HU", headline: "Hentai University", link: "https://www.patreon.com/posts/58139493", text: "Hentai University v19 is here! Featuring new game modes, many engine tweaks, and content for boys and girls galore!"},
	{date: "8/16/21", game: "AV", headline: "Anomaly Vault v11", link: "https://www.patreon.com/posts/54967417", text: "Anomaly Vault v11 is here! Two new missions and artifacts for the dark vault!"},
	{date: "6/30/21", game: "AV", headline: "Anomaly Vault v10", link: "https://www.patreon.com/posts/53137375", text: "Anomaly Vault v10 is here! A brand new artifact: the appreciation perfume!"},
	{date: "5/14/21", game: "HU", headline: "Hentai University v18", link: "https://www.patreon.com/posts/51240808", text: "Hentai University v18 Arrives! Featuring a new camwhore boi, as well as content for Emily and Sienna!"},
	{date: "4/23/21", game: "HAA", headline: "Human Alteration App v1.2", link: "https://www.patreon.com/posts/50409048", text: "Human Alteration App v1.2, the sub route is back and bigger!"},
	{date: "3/30/21", game: "HAA", headline: "Human Alteration App v1.1", link: "https://www.patreon.com/posts/49418172", text: "Human Alteration App v1.1 is here! Only the dom route for now, this is a rebuild of the entire game in progress with new content to boot!"},
	{date: "3/26/21", game: "HU", headline: "Hentai University v17", link: "https://www.patreon.com/posts/49224093", text: "Hentai University v17 is here! Featuring content for Steph and Reese brought to you by Cryptogreek!"},
	{date: "1/28/21", game: "AV", headline: "Anomaly Vault v9", link: "https://www.patreon.com/posts/46799464", text: "Anomaly Vault v9 is here! Further explore the erotibox, the library, and the stiff voodoo doll!"},
	{date: "12/31/20", game: "HU", headline: "Hentai University v16", link: "https://www.patreon.com/posts/45656713", text: "Hentai University v16 is here! Featuring a boatload of content for this capstone release!"},
	{date: "11/27/20", game: "HU", headline: "Hentai University v15", link: "https://www.patreon.com/posts/44384083", text: "Hentai University v15 is here! Featuring three new characters, Anna & Lena, and Anri!"},
	{date: "11/13/20", game: "RDZ", headline: "Rainy DayZ v3.5", link: "https://www.patreon.com/posts/43881744", text: "Rainy DayZ v3.5 is here! Featuring the new scenario; Scarlet Mansion"},
	{date: "10/30/20", game: "HU", headline: "Hentai University v14", link: "https://www.patreon.com/posts/40445131", text: "Hentai University v14 has been released! Featuring Evelyn, Nikki, Naomi, and the Crossdressing Club!"},
	{date: "10/10/20", game: "BM", headline: "Bitch Medicenter", link: "https://www.patreon.com/posts/42602906", text: "Bitch Medicenter's full, standalone release!"},
	{date: "8/28/20", game: "AV", headline: "Anomaly Vault v8", link: "https://www.patreon.com/posts/40968054", text: "Anomaly Vault v8, featuring the new Reproachive Charm and Stiff Voodoo Doll, and more!"},
	{date: "8/14/20", game: "HU", headline: "Hentai University v13", link: "https://www.patreon.com/posts/40445131", text: "Hentai University v13 has been released! Featuring content for Sienna, Reese, and Emily! Happy birthday to HU!"},
	{date: "8/7/20", game: "", headline: "The Master Index Updated", link: "https://noodlejacuzzi.github.io/", text: "The master index has recieved a facelift! Lemme know what you think, or if anything's broken!<br>The discord now uses roles in the place of @here pings, so feel free to drop in and sign up!"},
	{date: "7/24/20", game: "HU", headline: "Hentai University v12", link: "https://www.patreon.com/posts/39683865", text: "Added Hentai University's latest release to the index"},
	{date: "7/10/20", game: "RDZ", headline: "Rainy DayZ v3", link: "https://www.patreon.com/posts/39193031", text: "Added Rainy DayZ's latest release to the index"},
	{date: "5/22/20", game: "AV", headline: "Anomaly Vault v7", link: "https://www.patreon.com/posts/37422705", text: "Added Anomaly Vault's latest release to the index"},
	{date: "7/16/19", game: "BM", headline: "Bitch Medicenter Demo v2", link: "https://www.patreon.com/posts/29222676", text: "Added Bitch Medicenter's latest release to the index"},
	{date: "6/28/19", game: "HAA", headline: "Human Alteration App v1.0", link: "https://www.patreon.com/posts/27965721", text: "Added Human Alteration App's latest release to the index"},
	{date: "5/20/19", game: "PQ", headline: "Princess Quest v1.0", link: "https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8", text: "Added Princess Quest's latest release to the index"},
];

var gamesAlreadyListed = "";

//Start & System Config Stuff
function startup() {
	sceneTransition("start");
}
function startupDesktop() {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/mobile.html'">Click here for the mobile version!</p>
	`;
	writeScene("start");
}

function openLink(n){
	var win = window.open(n, '_blank');
	win.focus();
}

function generateNews() {
	for (x = 0; x < news.length; x++) {
		document.getElementById('newsFeed').innerHTML += `
			`+news[x].date+` - <a href="`+news[x].link+`">`+news[x].headline+`</a>
			<br>
			`+news[x].text+`
			<hr>
		`;
		for (y = 0; y < games.length; y++) {
			console.log("Attempting to write news entry "+news[x].game+news[x].text);
			if (games[y].index == news[x].game && gamesAlreadyListed.includes(news[x].game) == false) {
				if (gamesAlreadyListed == "") {
					document.getElementById('wrapperBG').style.backgroundImage = "url(images/"+news[x].game+".png)";
				}
				gamesAlreadyListed += games[y].index;
				document.getElementById('noodleGames').innerHTML += `
					<div class="gameContainer" onclick="sceneTransition('`+games[y].index+`')">
						<img class="bigPicture" src="images/`+games[y].index+`.png">
						<div id = "game`+games[y].index+`" class="gameTitle">
							<p class="gameTitleText">`+games[y].title+`</p>
						</div>
					</div>
				`;
				if (games[y].sponsor != "") {
					document.getElementById('game'+games[y].index).innerHTML += `
						<img class="sponsor" src="images/greenCrown.png">
					`;
				}
			}
		}
	}
}

function generateGame() {
	document.getElementById('output').innerHTML += `
	`;
}

//Scene creation

function writeBig (img) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
}

function writeSlideshow(img){
	document.getElementById('output').innerHTML += `
	<div style="display: block;margin: auto;width:205.4px">
		<img src="images/leftArrow.png" onclick="slideshowLeft()">
		<img src="images/rightArrow.png" onclick="slideshowRight()">
	</div>
	<img id="slideshowImg" class="bigPicture" src="` + img + `">
	<br>
	`;
}

function slideshowLeft() {
	slideShowCounter -= 1;
	if (slideShowCounter < 0) {
		slideShowCounter = slideShow.length-1;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

function slideshowRight() {
	slideShowCounter += 1;
	if (slideShowCounter > slideShow.length-1) {
		slideShowCounter = 0;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

//Still need to do slideshow functionality and css

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + text + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + text + `</p>
	`;
}

function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
}