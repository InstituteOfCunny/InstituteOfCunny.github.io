function writeScene(scene) {
	slideShowCounter = 0;
	switch(scene) {
		case "start": {
			gamesAlreadyListed = "";
			document.getElementById('output').innerHTML +=`
				<div class="disclaimer">
					<p class = "centeredText" style="font-size: 150%;">Welcome to The Institute Of Cunny</p>
					<p class = "centeredText">Disclaimer:<br>This Website is a WIP and does not represent the final look of the Site</p>
					<p class = "centeredText">We have no official discord but you can contact me via Email. <b>alexander192@instituteofcunny.com</b></p>
					<p class = "centeredText">And if you're shy, you can leave some feedback anonymously via my <a href="https://docs.google.com/forms/d/e/1FAIpQLScOc9ORWtiFH41QP0ZZTxntuCle2O0tHSoq6qQvChbeVubkgw/viewform">Suggestion Box!</a></p>
					<p class = "centeredText"><b>Upcoming Release Schedule:</b></p>
					<p class = "centeredText">Curious as to why my pace has been slower than usual lately? I'm currently doing the odd job to pay rent, and am currently battling some financial issues. I love game development, but I've gotta keep a roof over my head. I go into more detail <a href="https://www.patreon.com/posts/59367003/">Here</a></p>
				</div>
				<div class="gridNotGames" id="NotGames">
					<div class="nonGameContainer" id="newsFeed">
						<p style="font-size: 120%">Latest News:</p>
					</div>
					<div class="nonGameContainer" id="patronList">
						<p style="font-size: 120%">Patrons:</p>
						<p>Swallows999</p>
						<p>O Xy Enkin</p>
						<p>Slacker Savior</p>
						<a style="cursor:pointer;"onclick="sceneTransition('patrons')">And many more, come see the whole list of supporters!</a>
					</div>
				</div>
				<hr>
				<div class="grid" id="noodleGames">
				</div>
				<p class = "centeredText">If you enjoy my work please consider supporting me on <a href="https://www.patreon.com/noodlejacuzzi">Patreon</a>. I do multiple releases but only charge once each month. Aside from supporting me financially you can review the games or recommend them to a friend, those help out a great deal as well!</p>
				<hr>
				<p class = "centeredText" style="font-size: 150%;">Other games by authors I like:</p>
				<div class="grid" id="otherGames">
					/*<div class="gameContainer" onclick="sceneTransition('STDR')">
						<img class="bigPicture" src="images/STDR.png">
						<div class="gameTitle">
					<div class="gameContainer" onclick="sceneTransition('RICO')">
						<img class="bigPicture" src="images/RICO.png">
						<div class="gameTitle">
							<p class="gameTitleText">Ricoche</p>
						</div>
					</div>
					<div class="gameContainer" onclick="sceneTransition('TTT')">
						<img class="bigPicture" src="images/TTT.png">
						<div class="gameTitle">
							<p class="gameTitleText">Tits, Tail, Tackle: The Triple Triad</p>
						</div>
					</div>*/
				</div>
			`;
			generateNews();
			break;
		}
		case "HAA": {
			slideShow = [
				"images/HAA.png",
				"images/HAA1.JPG",
				"images/HAA2.JPG",
				"images/HAA3.gif",
				"images/HAA4.JPG",
				"images/HAA5.JPG",
			];
			writeSlideshow("images/HAA.png");
			writeText("Human Alteration App v1.1");
			writeText("You find yourself with a phone app that can alter people's minds and bodies. Choose between one of two routes where either you're in control of the world or the app is stolen from you. There's a clear sense of progression throughout and no focus on grinding.");
			writeText("Dom route tags: Incest (optionally non blood-related), Mind Control, Sluttification, Degradation, Exhibitionism, Watersports (optional, not yet implemented)");
			writeText("Sub route tags: 2D Art, Incest (optionally non blood-related), Sissification, Female-to-Shemale Transformation, Cum Eating, Sounding, NTR (mild & optional), Smothering, Watersports");
			writeText("Status: On hiatus until Hentai University's main story is complete.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/LEGACY%20Human%20Alteration%20App.html">Play the legacy v1 version online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/LEGACY%20Human%20Alteration%20App%20Mobile.html">Play the legacy mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12458">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/human-alteration-app-v0-6-5-noodlejacuzzi.28823/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/50409048">Download the game</a>
				<a class="choiceGridText" href="https://forms.gle/ZrDFUzTu2f7pbVZe9">Anonymous Suggestion Box</a>
				
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "RDZ": {
			slideShow = [
				"images/RDZ.jpg",
				"images/RDZ1.JPG",
				"images/RDZ2.JPG",
				"images/RDZ3.gif",
			];
			writeSlideshow("images/RDZ.jpg");
			writeText("Rainy DayZ v4.5");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry dickgirls, you play as a young woman searching for supplies to survive.");
			writeText("Navigate a town and city deliberately working to sabotage yourself and throw yourself into the clutches of the zombie hordes, the goal of the game here is to be defeated and attacked to collect and unlock all of the game's scenes. Now features two additional campaigns as well!");
			writeText("Tags: Real Porn, Shemale, Female-to-Shemale Transformation, Rape, Corruption, Zombification, Rimming (can be disabled), Bestiality (can be disabled), Parasites (can be disabled), Watersports (can be disabled)");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2039">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/rainy-dayz-v3-0-noodlejacuzzi.42457/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.futanaripalace.com/showthread.php?67194-Rainy-DayZ-v3-5-HTML">View the Futanari Palace thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/72128003">Download the game</a>
				<a class="choiceGridText" href="https://forms.gle/ZrDFUzTu2f7pbVZe9">Anonymous Suggestion Box</a>
				
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "AV": {
			slideShow = [
				"images/AV.png",
				"images/AV1.JPG",
				"images/AV2.JPG",
				"images/AV3.JPG",
				"images/AV4.JPG",
				"images/AV5.JPG",
			];
			writeSlideshow("images/AV.png");
			writeText("Anomaly Vault v11");
			writeText("<b>Previously sponsored by Swallows999!</b>");
			writeText("You play as a researcher performing experiments on various reality warping artifacts, currently including a presence-erasing bracelet and a crate that converts anything inside into a hypersexualized version of itself.");
			writeText("The game uses real porn gifs, and is similar in tone to Human Alteration App's dom route. The themes and fetishes of the game are governed by what artifacts you interact with, hopefully as time passes you'll find and artifact you really connect with. Let me know if you have any artifact / scene ideas!");
			writeText("Nonoptional Tags: Unpercieved Sex, Ignored Sex, Dubious Consent, Seduction of Women in Committed Relationships. All the rest of the tags depend on what you interact with.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2110">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/anomaly-vault-v7-noodlejacuzzi.34746/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/54967417">Download the game</a>
				<a class="choiceGridText" href="https://forms.gle/ZrDFUzTu2f7pbVZe9">Anonymous Suggestion Box</a>
			</div>
				<a class="choiceGridText" href="https://www.patreon.com/posts/33013457">View the cheat and prisoner codes</a>
				<p class="choiceGridText" onclick="sceneTransition('artifactList')">View a roadmap of upcoming/inplemented artifacts</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "BM": {
			slideShow = [
				"images/BM.png",
				"images/BM1.JPG",
				"images/BM2.JPG",
				"images/BM3.JPG",
			];
			writeSlideshow("images/BM.png");
			writeText("Bitch Medicenter");
			writeText("In a near future where body and mind alteration are the latest fad, customers of Bitch Medicenter often have very specific needs. Liz the physician and a nameless technician are here to fulfill those needs in the most depraved way possible.");
			writeText("This game is standalone and complete, please feel free to offer suggestions for the sequel!");
			writeText("Tags are on a case-by-case basis. View each patient's file and avoid whatever you aren't into. The most common fetish is body / mind alteration, but also included are very extreme fetishes like aural sex and a female-to-male-centaur transformation.");
			writeText("Status: Collecting typos.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/42602906">Download the game</a>
				<a class="choiceGridText" href="https://tfgames.site/?module=viewgame&id=2362">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/bitch-medicenter-v1-complete-noodlejacuzzi.64009/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.reddit.com/r/lewdgames/comments/ja5rlp/bitch_medicenterhtmlcomplete/?">View the r/lewdgames thread</a>
				<a class="choiceGridText" href="https://www.reddit.com/r/AndroidNSFWgaming/comments/ja5up4/bitch_medicenterhtmlcomplete/">View the r/AndroidNSFWgaming thread</a>
				<a class="choiceGridText" href="https://www.futanaripalace.com/showthread.php?67159-Bitch-Medicenter&p=1323600#post1323600">View the Futanari Palace thread</a>
				<a class="choiceGridText" href="https://forms.gle/ZrDFUzTu2f7pbVZe9">Anonymous Suggestion Box</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "PQ": {
			slideShow = [
				"images/PrincessQuest.jpg",
				"images/PQ1.JPG",
				"images/PQ2.JPG",
				"images/PQ3.JPG",
			];
			writeSlideshow("images/princessQuest.jpg");
			writeText("Princess Quest");
			writeText("Play as Princess Elizabeth as she navigates caves and castle dungeons to rid her people of a demon's foul curse, unaware that she's playing right into the demon's hands.");
			writeText("Uses art done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("As a note, I really do not recommend playing this on mobile. There have also been a few issues with playing it online. As it's only 4 megs, downloading it is the reccomended way to play.");
			writeText("Tags: Moral Degradation, Corruption, Tentacles, Cum Inflation, Exhibitionism");
			writeText("Status: Totally complete!");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8">Download the game</a>
				<a class="choiceGridText" href="https://tfgames.site/phpbb3/viewtopic.php?f=60&t=12578">TFGames discussion thread</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "HU": {
			slideShow = [
				"images/HU.png",
				"images/newprev1.png",
				"images/newprev2.png",
				"images/newprev3.png",
				"images/newprev4.png",
				"images/newprev5.png",
			];
			writeSlideshow("images/HU.png");
			writeText("Hentai University v26");
			writeText("Formerly sponsored by: O Xy Enkin");
			writeText("A game made in cooperation with author Captain Cryptogreek, who works as the game's lead writer. You play as a young man with a strong grasp on hypnotic magic, and have embedded yourself as a counselor in a school with a fantastically attractive student body. The faculty and your neighbors in town look pretty good too.");
			writeText("The game features multiple male characters with a femboi/twink bodytype. These are entirely optional and you can enable a vegetarian mode to avoid encountering them. On the opposite end if you aren't interested in the girls none of the bois require you to engage with female characters to unlock all their content.");
			writeText("This game uses art by Enoshima Iki, Nagi Ichi, Oreteki18kin, Gujira 4 Gou, and Kinta no Mousou and is meant to be similar in feel to Hentai High School, but without the focus on school management, more emphasis on wandering / corruption, and a much higher quality body of images. The end goal here is a town packed with dozens of characters using a framework I can continually add more content to.");
			writeText("Tags: Hypnosis, features many other tags entirely avoidable tags based on characters such as incest, dubcon, and gay content");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/hentai-university">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/hentai-university/mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/hentai-university-v12-noodlejacuzzi.37312/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0">View the Hypnopics thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/75349576">Download the game</a>
				<a class="choiceGridText" href="https://forms.gle/ZrDFUzTu2f7pbVZe9">Anonymous Suggestion Box</a>
			</div>
			<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'">Interested in writing your own characters? Check out this modding tutorial!</p>
			<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/30871183'">View the list of cheat codes</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "CYOA": {
			slideShow = [
				"images/CYOA.png",
				"images/CYOA1.JPG",
				"images/CYOA2.JPG",
				"images/CYOA3.JPG",
				"images/CYOA4.JPG",
				"images/CYOA5.JPG",
			];
			writeSlideshow("images/CYOA.png");
			writeText("Noodle's Lewdles");
			writeText("Want the freedom that something like AI dungeon or NovelAI provides, without needing to baby a computer system who can't remember your pronouns? This is it! Hosted on the noodle's jacuzzi discord is your ticket to a grand old time!");
			writeText("Imagine being able to play one of my games but with the pure freedom of being able to choose any path! Or come on in and play with other authors like Evil Crucifix or HU Author SlackerSavior!");
			writeText("Currently (as of 6/14/2022) only one story is finished and archived, following Gou from HU exploring some strange underground dungeon and getting dom'd by fox girls.");
			writeText("Be sure to read the rules though! If there's interest in it I can archive the stories here too.");
			document.getElementById('output').innerHTML +=`
				<a class="choiceText" href="https://discord.gg/B3AszYM">Join the Discord Server</a>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "FORRAY": {
			writeBig("images/"+scene+".png");
			writeText("Noodle's Lewdles");
			writeText("Want the freedom that something like AI dungeon or NovelAI provides, without needing to baby a computer system who can't remember your pronouns? This is it! Hosted on the noodle's jacuzzi discord is your ticket to a grand old time!");
			writeText("Imagine being able to play one of my games but with the pure freedom of being able to choose any path! Or come on in and play with other authors like Evil Crucifix or HU Author SlackerSavior!");
			writeText("Be sure to read the rules though!");
			document.getElementById('output').innerHTML +=`
				<a class="choiceText" href="https://discord.gg/B3AszYM">Join the Discord Server</a>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "DTC": {
			writeBig("images/"+scene+".png");
			writeText("Dared to Change");
			writeText("A text-based game made by CryptoGreek, who wrote a bunch of scenes for Anomaly Vault and is the lead writer on Hentai University. It hasn't updated in a while but it's still good.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2189">TFgames</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "RAV": {
			writeBig("images/"+scene+".png");
			writeText("Ravager");
			writeText("A game made by 4MinuteWarning, it's a neato renpy visual novel game where you play as a dragon. It's got nice art, some animation, good writing, and even voice acting!");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://4minutewarning.itch.io/ravager">Itch.io</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "OBA": {
			writeBig("images/"+scene+".png");
			writeText("Oba-San's Saga");
			writeText("An rpg made by Enoshima Iki! I'm not a huge fan of the gameplay and the writing is a little wonky, but the art is fantastic! If you like Enoshima Iki's art from Hentai University I think this is worth checking out.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ291293.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/oba-sans-saga-v1-30-izakaya-yottyann.57721/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "SAL": {
			writeBig("images/"+scene+".png");
			writeText("Salvation");
			writeText("A good rpg that has a nice sense of flow. It does get grindy in the second half but by then you already know whether you like it or not. It's got themes of girls slowly learning to enjoy their inner sluttiness, which is a big + for me. They have a number of other pretty good games which I also recommend, this one's just my favorite.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ150632.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/salvation-clymenia.1154/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "ARI": {
			writeBig("images/"+scene+".png");
			writeText("Ariadne");
			writeText(`Probably the highest quality "generic rpgmaker" game I've played. That said, entry level is entry level for a reason! It pretty much follows every rpgmaker game trope you could imagine, but does it pretty well and doesn't waste too much time imo. Plus alternate outfits! The developers also have another game named Magica which hits pretty much the same notes.`);
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://f95zone.to/threads/ariadne-eclipse-works.668/">DLsite</a>
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ120635.html">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "FOBS": {
			writeBig("images/"+scene+".png");
			writeText("Forest of Blue Skin");
			writeText("No boring grinding, a good sense of progression, and practically no text. Really good monster girl reverse-rape game. You will probably need a guide though.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://f95zone.to/threads/forest-of-the-blue-skin-va1-20b-vb1-05-zell23.14195/">F95zone</a>
				<a class="choiceGridText" href="http://zell999.blog.fc2.com/">Dev's Japanese Blog</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "CONT": {
			writeBig("images/"+scene+".png");
			writeText("Contamination");
			writeText("Made by GFF. This game is pretty similar in tone to Princess Quest, so I only recommend it if the scenes in that game were interesting to you. The first half of this game is a kinda-crazy but mostly tame sluttification story but things escalate quickly and never stop until eventually scenes are more two eldritch horrors bumping up against a fertility goddess. I at least was never bored, as the game is quite well paced and not too badly written.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ292155.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/translated-rj292155-contamination-corrupting-princesss-body-and-soul-by-gff.74680/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "STDR": {
			writeBig("images/"+scene+".png");
			writeText("Setalia the Demon Realm");
			writeText("A 2d platformer, kinda like Forest of Blue Skin but you play as a girl with a dick and a minigun. It's got a vaguely horror vibe but isn't really scary.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ323773.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/setalia-the-demon-realm-updated-save-for-1-2.80545/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "TOA": {
			writeBig("images/"+scene+".png");
			writeText("Tales of Androgyny");
			writeText("Dickgirl on femboi, a game that really appeals to submissives who wanna get dommed. Both the writing and art feel pretty professional, but keep in mind the game can kind of feel like a one-trick pony. A pony with a HUGE DI-.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://majalis.itch.io/tales-of-androgyny">Itch.io</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "TTT": {
			writeBig("images/"+scene+".png");
			writeText("Tits, Tail, Tackle: The Triple Triad");
			writeText("A TF-focused twine game made by HoratioTheGreat, who helped me out with some of Hentai University's code! It can be a little tough to grok right away, and the play online link is several versions behind, but it's a porn version of Triple Triad where you modify or hypnotize your opponents!");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2409">TF Games Link</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "LINK": {
			writeBig("images/"+scene+".png");
			writeText("Link and the Temple of Lust");
			writeText("A very simple femboi CYOA game written by SexTheHex, who is an author I really like. Their work did a lot to inspire HAA's sub route and many of the male cast of hentai university.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://philome.la/SexTheHex/link-and-the-temple-of-lust-complete-v103/index.html">Online Link</a>
				<a class="choiceGridText" href="https://sexthehex.tumblr.com/post/151863410906/sexthehexs-story-index">More SexTheHex Stuff</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "OOZE": {
			writeBig("images/"+scene+".png");
			writeText("Oozehazard");
			writeText("A game made by the same person as Contamination, although this isn't nearly as well designed. It's a much smaller and shorter game which can be frustrating to play and navigate, but I still like his art enough that I had a good time until I used the built-in gallery unlocker. If you do play the game, definitely keep the map in the f95zone thread handy, the game's nearly impossible without it.");
			writeText("Theme and tag wise, the game's got dick growth to the point their dongers hang at like 3 feet long, although the game doesn't get as extreme as contamination. Play if you wish Princess Quest has more dicks.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ363298.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/oozehazard-final-gff.129329/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "RICO": {
			writeBig("images/"+scene+".png");
			writeText("Ricoche - A Weak JK's Climactic Battle With Orcs");
			writeText("A strange game. It doesn't have any story scenes like you'd expect from an RPGmaker game, instead it's all combat sex where you play a mega pervert fighting orcs. The game has an actual plot and ends up telling a pretty wholesome sex-positive story, although I found the gameplay got repetitive after a while and I was mostly playing to see where the story went.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ342911.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/ricoche-a-weak-jks-climactic-battle-with-orcs-final-yukikagero.132866/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "KANADES": {
			writeBig("images/"+scene+".png");
			writeText("RJ376981 - Mage Kanades Futanari Dungeon Quest");
			writeText("An incredible game with really nice sprite animation and a pacing fast enough that I never got bored. This is one of my new favorites even though it isn't translated (I really wish it was though!)");
			writeText("You play as a mage who's grown a dick and each room is filled with new enemies and traps, each of which have a unique sprite animation and losing leads to a bunch of regular scenes which use still images but are still pretty good.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ376981.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/mage-kanades-futanari-dungeon-quest-rj376981-dieselmine.130532/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "PARASITE": {
			writeBig("images/"+scene+".png");
			writeText("Parasite in City");
			writeText("Unironically a classic, it's hard to believe it's 8 years old now. Untranslated but you don't need a translation to enjoy it. I don't really have much to say, it's got really well-drawn animated sprites and doesn't drag to play, so it's definitely worth a try.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://f95zone.to/threads/parasite-in-city-pixel-factory.2426/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "ZETRIA": {
			writeBig("images/"+scene+".png");
			writeText("Zetria");
			writeText("A fun shooty platformer, not quite as good as Parasite in City, kinda vanilla for me, and I got stuck on a bunch of puzzles, but I like the art style enough to recommend this for a quick play.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://karnedraws.itch.io/zetria-demo">Itch.io</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/zetria-final-karnedraws.101000/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "ERIS": {
			writeBig("images/"+scene+".png");
			writeText("Eris Dysnomia");
			writeText("One of my favorites, I really love games with slow corruption, especially ones that show girls giving in and we get to see them developing new fetishes. Plus there's a lot of variety in the sprite animations.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ392643.html">DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/erisdysnomia-final-above-a-damage-tile.121557/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "AMAZON": {
			writeBig("images/"+scene+".png");
			writeText("Natyusyo's Works");
			writeText("The artist also goes by Amazon. One of my favorite artists, his artstyle sells his games for me, and the gameplay is usually fast-paced enough that I never get bored. I actually considered using his art for HU, but none of his sets at the time really worked in a school setting.");
			writeText("All three of his games focus on a very thicc female MC rapidly becoming more and more openly perverted, which is a big draw for me. Todoroki in particular manages to capture a gameplay loop that I think would work perfectly for a Rainy DayZ scenario.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ392704.html">Yuuka's Manor DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/yuukas-mansion-yuka-no-yakata-v1-02-nacchuushou.118366/">Yuuka's Manor F95zone</a>
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ289724.html">Yuuka - Scattered Shards of the Yokai DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/yuka-scattered-shards-of-the-yokai-v1-07-r1-nacchuushou.65021/">Yuuka - Scattered Shards of the Yokai F95zone</a>
				<a class="choiceGridText" href="https://www.dlsite.com/maniax/work/=/product_id/RJ362199.html">Shipwrecked spaceship Todoroki DLsite</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/the-wreck-of-the-spaceship-todoroki-v1-03-natyusyo.104874/">Shipwrecked spaceship Todoroki F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "MAX": {
			writeBig("images/"+scene+".png");
			writeText("Max the Elf");
			writeText("A gay animated sprite-based game that plays like some very old porn flash games. You watch a femboy elf get sexually assaulted by tentacles and cute fantasy races with dicks. It's short but absolutely worth a quick play.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://thoodie-draws.itch.io/max-the-elf">Itch.io</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/max-the-elf-v3-11-t-hoodie.54016/">F95zone</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "patrons": {
			document.getElementById('output').innerHTML +=`
				<p class = "centeredText" style="font-size: 150%;">An incredibly huge thank you to:</p>
				<p style="column-count:3;">Swallows999<br>SlackerSavior<br>Robbie<br>Daniel L Folkvord<br>O Xy Enkin<br>Badaxe<br>Iron Diana<br>Jinouga<br>Marco Wassmer<br>Colin E<br>jack spencer<br>J_C_L<br>Scal<br>林家豪<br>ChronosEdge<br>SpecsV88<br>HiCaTe<br>4MinuteWarning<br>Elias<br>ShadowHunter1394<br>Lasse B<br>that GUY<br>Hi There<br>RimuruTempest<br>Amzey<br>Dkells<br>yami<br>Daniel Folkvord<br>xdrake100<br>Drakcon<br>Dustin Leichsenring<br>ArtemisAisu<br>Taylor Trout<br>Jesse Greene<br>Dylan<br>Holden Martin<br>ryguy<br>Louts<br>Here Not<br>Joseph<br>Negativatron<br>G<br>Madgunner<br>brandon<br>maxime<br>andres mejia<br>Roy<br>Wild Bill<br>Sealon<br>Moony<br>murgatroid99<br>Ruinn<br>Ora494<br>Vikignir<br>Willy<br>Matthew Landin<br>XxrobothacksxX<br>Jane<br>Snaked<br>Carlos<br>Verillia tristari<br>ItsAllOgreNow<br>Phanes<br>Scumstango<br>Wei<br>Dugelle<br>Noah675<br>john smith<br>Your Husbando<br>Grim2011<br>Filament<br>Nils Maier<br>Joey Jacobs<br>Onii-sama<br>Leanerbike1363<br>Tanman<br>Aegil<br>Ariados<br>qwerty<br>ddkre<br>SmolFish<br>I'm a Mitch<br>Daniel Vivette<br>Markus Hansen<br>Stollwerk<br>Chaaaanon<br>e3<br>Christopher Bartz<br>Limitless<br>Geoff Heimos<br>Kieron Kow<br>Slomberg<br>michael patrick murphy<br>GirmusCz<br>Harry Brasch<br>mazterlith<br>Skyrim mod lvr<br>undead270<br>RatKnight<br>theoron<br>AnotherAccount333<br>Kaliden<br>Nutburger<br>Angel<br>Yugo KUGA<br>Te Tule<br>长平 鬣<br>thesingleguy<br>Anton Schmidt<br>david thompson<br>Jayesonn leleaux<br>Bleed1ngthunder<br>Eric Hslew<br>Vikteren<br>Danny Nguyen<br>Darrell Goodman<br>Bonelessunknown<br>DragonDust99<br>DarthMalak<br>Confused<br>Xazzafrazz<br>Brian Graham<br>Manny Coutlakis<br>Shinji Tori<br>notornis<br>Sera<br>Bradley Herbert<br>SomebodyElse<br>Peter H<br>greatred<br>Macarga<br>dragoon48<br>Kient Wong<br>Minerve1<br>Seamus Porter<br>BINKS<br>John Nixon<br>Biblicallyaccuratepitbull<br>Genxin<br>Greatsage56 .<br>sb2017<br>john sparks<br>dhccpmc<br>Drashin<br>ThatOtherGuy<br>Ashwinder<br>Richard Pryor<br>Kethis Immortalis<br>henry grobins<br>Aleanne<br>Selignite Verine<br>Panda<br>john<br>Hema Mania<br>NoSelect<br>Maven<br>Ryan German<br>sylvester mckay<br>Rafa Smith<br>pest<br>Zach allen<br>Carson Goodwin<br>Dragoon22<br>mitchellwolbert<br>Hello Darkness<br>Brandon<br>Me Notyou<br>ggboomsky<br>gabriel<br>KVBismarc<br>liam paterson<br>l1monat<br>Gunjin<br>Gwen Yurick<br>Blaise Fenn<br>ShadowDragon<br>BOK<br>Ash mash<br>Calla Smith<br>Bastl<br>XaiuX<br>John Lewis<br>Debarre Sonny<br>Harry Foster-major<br>EgoDraconis<br>Sean sullivan<br>D'andre<br>David Outram<br>Andrew<br>Regulus<br>Wysdom<br>Brandon Leary<br>Kudon<br>Emanuel  Garcia<br>Kaito121<br>Z<br>joe<br>Ben Dover<br>stratum<br>Kyle Michael<br>Simon van Eeden<br>Diederik Toxopeus<br>robert therrien<br>Manav<br>Andrew Corrigan<br>Traveler123<br>Dezyego<br>Zane Dura<br>Na707<br>Devon McKenzie<br>James Hobson<br>Robert<br>Noel<br>Todd Vogel<br>A Channel<br>joseph<br>dawson<br>Michael Graham<br>Petrichor<br>Justin<br>PIGDER<br>Stan Manson<br>Zane regel<br>Noh Bhodie<br>poyo<br>Ash D Cordero<br>Culton Niccum<br>colt<br>Tyler Ross<br>Keith<br>Muryu<br>Sumanth<br>Christopher Fox<br>Sublyminal337<br>Danny Surety<br>Black Dahlia Studios<br>Venomill<br>Zachary Schicker<br>J<br>Matthew Preston<br>Mr.Artrist<br>DigiReave<br>Johnathen Likens<br>Maxwell Dedmon<br>TeLoad<br>Ary Toussaint<br>Lyko90<br>HolyDurandal<br>Ethan Brian<br>ChubbiestThread<br>Charles Morris<br>William Richardson<br>Patrik LopariÄ‡<br>faaaa<br>Arkanian001<br>KIVA<br>Isaiah Sandoval<br>Neyafi<br>Cameron Farabee<br>GWQwQ<br>Romnomnom<br>omb<br>Donovan Korpa<br>Kayleb<br>l<br>waazzzup14<br>Marcel Weniger<br>Official HY<br>mitchell cross<br>Skygods<br>Antoine Panaye<br>sakkra83<br>zafoche<br>Braedon Jasper<br>Snow<br>致远 舒<br>KOOLAID<br>Richard Mah<br>Ripper<br>Loui<br>Snargle<br>Bob<br>Rictor86<br>Tyler Leka<br>The Baka King<br>dalvin lopez<br>Dumcanem<br>Henry Litten<br>Ouspinousse<br>Alex<br>Shivane<br>yjzyjz<br>Draconet547<br>kyle fenton<br>Silverstreak1410<br>qqss<br>Michael Robles<br>ASSIRTIVlizard<br>Tobias Bischoff<br>Callum Northedge<br>JulikBerlin<br>asdf123<br>Kyle Jones<br>Yongjie Zhao<br>mahdeennave<br>shadow goob82<br>K DA<br>Spartan 5398<br>Aaron Brown<br>Wells Wells<br>Bryan Pasternack<br>robert zeuke<br>Liam M<br>Chris Rucker<br>Dean<br>FrostyTB<br>Riven Drasek<br>ranchy sanchy<br>ShadowFalls<br>William Parker<br>StormSight<br>fireballcreations<br>Marc Maldon<br>FearlessViper26<br>Aminaros<br>Fallen Eevee<br>Andy Amundy<br>mora<br>david bradley<br>Forde Wellman<br>william lagier<br>Nobody<br>Tom Alan McGhie<br>Jamie<br>Asmo<br>Omar Flores<br>Tired_Sup<br>Jamarion Blair<br>tito<br>ReignVI<br>Shinikami<br>Jacob Higgs<br>jaron<br>Nathaniel Grams<br>Mr. L<br>Helazz<br>Freya Valentine<br>Juan Fernandez<br>Jeff<br>Plaaer<br>brybry<br>Boo3<br>Riku DreamEater<br>Mariusz<br>Sgt.Vodka<br>TheLazyCactus<br>Storyteller<br>Sean Morehead<br>Sergio Prichard<br>Keliwan<br>Reverberations<br>Magnus<br>Daekash<br>Trevor<br>KH dg<br>Taurus Travon Rashad Lemar Brackin<br>valdis<br>lm Carma<br>Omran khalifa<br>Sid Wolf<br>asulus diablo<br>Martin Koliwer<br>Debian Tur<br>Christopher Nevell<br>joel larsen<br>EniVanella<br>Dylan2019<br>Killer<br>sebastionLender<br>Youtube Account<br>Luis Orellana<br>Fangrove<br>dogsoneup<br>Michael Stone<br>Hyunsoo Lee<br>Big BNB<br>Jacob Damoiseaux<br>RidiculeCat<br>Damsolo14<br>Sean Corley<br>Hikari<br>Jaden Clark<br>MrBones<br>shane reid<br>A Really Nice Guy<br>Ryker<br>KÃµzan<br>Jd<br>Lukas Caspers<br>Cameron Geddes<br>randol javier<br>Andrew Lolzaror<br>Ezekiel Rojas<br>TheRawToast<br>Greg Torres<br>Alec8686<br>Erin Trippet<br>Prodigal211<br>Lily Evans<br>ThuurVdB<br>Bela Kovats<br>LostSand<br>Bokuden<br>Tagaron Zockt<br>The Soviet Tanker<br>Dylan van Hal<br>scott<br>Tayura<br>Luke Lange<br>buddy99<br>Lemme learn how to play piano<br>sindre Elshaug<br>Andy<br>Arthorias28<br>Stanley Cheong<br>Albin Stenlund<br>runge<br>Knut Joakim Ellingsen<br>Novalis Silveratum<br>Sam Rosenbaum<br>Damien Caffee<br>Clayton Lee<br>Shadez<br>Cameron<br>Squidy Cool Shoes<br>Austin<br>Divide<br>Cameron Chilton<br>Dallas Wright<br>German M Ruiz<br>goi<br>gabriel briones<br>Joel Humphrey<br>LIN ZY<br>Cdev57<br>Jesus millan Gonzalez<br>Trey Gould<br>Jazz<br>fuckboi13<br>studly787<br>Nickson Schenk<br>nija townsend<br>Chrys<br>Mark<br>michael moon<br>Gavin Moore<br>raun q<br>Jacob Puckett<br>DesertCamel<br>담배잎 먹어보니<br>Eric Simpkins<br>cursedfinger<br>Gregory Torres<br>hunter sipper<br>Juraijin1<br>Shrek<br>Hubert Rymarz<br>mike boehi<br>JuanDa295<br>Tobias Blake<br>NocteAngelus<br>Christopher R. Taylor<br>a1214672685<br>Emily Pajak<br>Justifiable Gaming<br>Sveny13<br>Lucas<br>Johnathan Thornburg<br>Alex<br>Tyberius Kirk<br>Ark555<br>NexusCron<br>AdmiralBreaker<br>Arthur the rogue<br>Wayne culbert<br>Monkey<br>Andy<br>Lunarghost<br>Simon Albeck<br>Marcus Gade<br>Mac<br>Sanguinius1701<br>Kade Sarten<br>Devi8<br>bigTone91<br>Tyron<br>tony5577<br>Marvis<br>xXSelenaXx<br>Nichole Cain<br>lincoln hull<br>lj-_-22<br>Konrad Tomanek<br>unfading89<br>dylan makings<br>Vault<br>ZuriKingz<br>Allan Keo<br>Logan<br>wtrexq<br>legacy fletcher<br>Tebachi<br>Dry_Garen<br>TCFish<br>Autobot BladeWing<br>Jackson<br>earlieman<br>Caleb Waters<br>Garrett Wade<br>tyler wyser<br>Tanner Likins<br>Jae Hoon Lee<br>Ryan Shack<br>DarkEonWolf<br>Dredd<br>Patrick Hastings<br>lemonarchistemoderne<br>Mason<br>JOOWHAN SHIN<br>Dominic<br>nathan Deglman<br>Indytronic<br>Oliver<br>Mango<br>AvgCupOJoe<br>Glenn Losey<br>Jack<br>Leandro Nakamura<br>nicholas chen<br>troll1023<br>Evan Gao<br>Random One<br>BlondieDread<br>Sam Schneck<br>iokknardnerus<br>Lost Files<br>commyboi<br>mpop<br>NZKiller_573<br>CoolFlames<br>cabbage<br>nathan<br>AxiosMIles<br>Joseph Gibbs<br>Guy68691<br>This Account Was used exclusively for porn until you guys came along.<br>andy<br>David Lange<br>joe mulhall<br>Karan Raj Gupta<br>Nisi<br>Oliver Jones<br>Double Dot<br>Murray Anderson<br>Marcus Zirfas<br>Bryn Lewis Jones<br>Jimboo<br>Revived Vulture<br>abuse toast<br>SInfullyWritten<br>Kyverdrade<br>Harlocco<br>J.J.J. P.<br>SpokeWife<br>Keiteu Gaming<br>Conor<br>Jisatsu<br>Leon<br>Bumblecock<br>arthur lacombe<br>Djdhhsnsjsi<br>ryan<br>Blain<br>Demonin Koloman<br>Sucoma Bruha<br>Maxolution<br>Ville<br>Anarion01<br>Blade<br>Feras<br>Kyle Lambert<br>Zachary Webb<br>dev<br>Thomas DeChon<br>Adrian Garza<br>Snyckerdoodle<br>Bryan<br>BeatDem Cheeks<br>ren hero<br>Christian Lee<br>Jacob Atkins<br>Rutger Newell<br>jacob g<br>meowy2<br>Ian Whitehead<br>anthony haas<br>Void Walker<br>Mullins JR 74<br>Navigatedjug<br>Malachi Townsley<br>Mark Laner<br>Allen DeMaris<br>Nicman488<br>Zachariah Bowling<br>Jim S<br>Wishmacht<br>Corvus Night<br>gold craft<br>TheGentleman<br>Alec Guillaume<br>Gregory<br>Mikey Nixon<br>PressAnyKeyToContinue<br>Chima549<br>Travis-Phoenix Williams-Wright<br>vkmn1<br>Roniesis Narvaez<br>leo lin<br>kfsdfeas<br>Faera<br>luke welsh<br>Matt Johnson<br>HanimeMann<br>craig akery<br>qu33n sissy<br>Joseph Meyers<br>Gabriel<br>joey knight<br>Merkarion<br>RedGoblin<br>Shadeshadow227<br>thiefwriter<br>NecroDark<br>Arctic Husk<br>Amy Mors<br>Madison<br>Blacklisted 756<br>OrionPax<br>spencer<br>Tsereth<br>John Greenwood<br>Gauthier Kreilmann<br>jimbob337<br>Nicola M<br>GRiiMM GAMiNG<br>Rock999<br>Steven Everitt<br>Ozinthesand<br>Victor Saganoff<br>Tsuki<br>Isaac Renaud<br>Maeuil<br>Epoch<br>Johnny Mind<br>Elijah Hansen<br>pablo perez<br>Royce<br>GoblinKing<br>dante schraeder<br>DutchJudgement<br>DifferoBiga<br>Geoffrey Munoz<br>nicholas guerra<br>Dravenmd114<br>Mars<br>PR0 x THUNDER<br>wolfboom<br>MagicMajestic<br>Shirofang<br>สิรวิชณ์ อาสว่าง<br>Bawornnan samart<br>ptw1985<br>zoobot5<br>Ed<br>surgEMP<br>Nha </p>
				<p class = "centeredText" style="font-size: 150%;">For supporting my work!</p>
				<p>This is a single massive list of all patrons who've ever supported me, I update this list just before each release. I wouldn't be making games today without their support.</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "start" : {
			document.getElementById('output').innerHTML +=`
				<p class = "centeredText">Lastest News 7/22/2020</p>
				<p class = "centeredText">Hentai University v12: https://www.patreon.com/posts/39683865</p>
				<p class = "centeredText">Hentai University v12 is complete, featuring the new character Nikki by Cryptogreek, and scenes for Ash in his crossdressing club!</p>
				<p class = "centeredText">Bonus News 7/26/2020</p>
				<p class = "centeredText">A hotfix for Hentai University titled v12a can be found in the patreon post, fixing bugs for the v12 release. Download it if you can, the online ver is already updated.</p>
				<p class = "centeredText">Thank you to: Swallows999, O Xy Enkin, Joshua Ingram, Robbie, Lasse B, MrManPerson, ChronosEdge, CaptainMontana, Madgunner, Scal, Badaxe, andres mejia, Colin E, Dkells, Jinouga, Marco Wassmer, XxrobothacksxX, Jesse Greene, Dustin Leichsenring, Filament, G, J_C_L, jack spencer, Ramsey Bisher, Taylor Trout, brandon, Skyrim mod lvr, Negativatron, Roy, Wild Bill, Ben Dover, Iron Diana, 长平 鬣, Carlos, Debarre Sonny, Drashin, Keith, Macarga, murgatroid99, Richard, Angel, Ariados, Blaise Fenn, Gwen Yurick, Jane, Muryu, Nils Maier, Snaked, stratum, Carlos, ItsAllOgreNow, Joshua Melzark, qwerty, Verillia tristari, 4MinuteWarning, Aegil, Aminaros, Andy Amundy, Anthony Munso, Bonelessunknown, Chaaaanon, Charles Morris, dhccpmc, dragoon48, Dugelle, FearlessViper26, Hi There, john smith, Marc Maldon, mazterlith, Nutburger, Phanes, ryguy, Scumstango, Simon Rencher, StormSight, Wei, Whynot, William Richardson, Your Husbando, Daniel Vivette, Danny Nguyen, Darrell Goodman, Grim2011, joe, John Lewis, KH dg, lm Carma, Trevor, yami, Z, Alec8686, DarthMalak, Louis Hayes, Prodigal211, sky, Tanman, Alex, Andy, Anthony Ewing, Ark555, Colin Valente, Daekash, ddkre, fireballcreations, GirmusCz, Harry Brasch, I'm a Mitch, Justifiable Gaming, Lunarghost, Markus Hansen, michael patrick murphy, Monkey, SmolFish, Tyberius Kirk, Wayne culbert, andy, AxiosMIles, ChubbiestThread, David Lange, Emanuel  Garcia, FrostyTB, Geoff Heimos, greatred, Greg Torres, Guy68691, henry grobins, joe mulhall, Joseph Gibbs, Kieron Kow, KVBismarc, l, l1monat, liam paterson, Limitless, Magnus, Nisi, Oliver Jones, ranchy sanchy, Reverberations, Riven Drasek, ShadowFalls, Slomberg, TheRawToast, Tyler Ross, William Parker, XaiuX, AnotherAccount333, Bawornnan samart, Dean, Dravenmd114, Ed, Erin Trippet, Gavin Davis, joel larsen, Kaliden, Karan Raj Gupta, Krose, Kudon, Lucas, MagicMajestic, Mars, Nha, PR0 x THUNDER, ptw1985, Shirofang, sluttyboi, Sveny13, theoron, waazzzup14, wolfboom, zoobot5, adyflorin, Alfonso, Andrew Lynn, Anton Schmidt, Arkhalis, Auckard, Bleed1ngthunder, Bobby Hamilton, bono, cabbage, Cameron S, colt, Culton Niccum, Curtis Vidulich, Damion Moore, Daniel Harris, david thompson, dennis trappen, Dewr, Don, Dr. Awesome, Профессор Преображенский, 林家豪, Elias Errati, Eric Hslew, Frederto, Geoffrey Munoz, GlockerSpaniel, Har Boi, Hunter XZ, iNoH8+, Jack Cummings, Jacob Cannon, Jayesonn leleaux, jdktjk205, joe, Johnathan Thornburg, Jordan Ballinger, Joshua Curtis, Judavarius, Julia Ferro, Kethis Immortalis, Kurosuki, LaCrazy, LordTenry, Lucas Molski, lucidwillow116, Luke, Martin Touralack, marvin diaz, Me You, N3on, nathan, Nathan Martin, nicholas guerra, paul silvis, Philipp, pipok, Q Q, Qrow, Ragoth, ryan, Ryan Linn, Shawn, Slipokk, Smiley Green, Sossedov, Steam Screw, Theodrian, thesingleguy, Ungy Bungy, Vikteren, and Yongdian Guo for supporting my work!</p>
			`;
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://discord.gg/B3AszYM'">Visit my discord server</p>
			`;
			//writeTransition("recommendations", "Recommendations");
			writeBig("images/AnomalyVault.png");
			writeText("Anomaly Vault v7");
			writeText("You play as a researcher performing experiments on various reality warping artifacts, currently including a presence-erasing bracelet and a crate that converts anything inside into a hypersexualized version of itself.");
			writeText("The game uses real porn gifs, and is similar in tone to Human Alteration App's dom route.");
			writeText("The themes and fetishes of the game are governed by what artifacts you interact with, hopefully as time passes you'll find and artifact you really connect with. Let me know if you have any artifact / scene ideas!");
			writeText("Nonoptional Tags: Unpercieved Sex, Ignored Sex, Dubious Consent, Seduction of Women in Committed Relationships");
			writeText("Optional Tags: Corruption, Mind Control, Deepfake, Genderbending (both M to F and F to M) among others. See the content list below.");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/37422705'">Download Links</p>
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/33013457'">Cheat Codes</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=75&t=12954'">TFgames Thread</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/anomaly-vault-v1-noodlejacuzzi.34746/'">F95Zone Thread</p>
			`;
			writeTransition("artifactList", "See a roadmap of current / planned content");
			writeBig("images/HentaiUniversity.png");
			writeText("Hentai University v12");
			writeText("A game made in cooperation with author Captain Cryptogreek, who works as the game's lead writer.");
			writeText("You play as a young man with a strong grasp on hypnotic magic, and have embedded yourself as a counselor in a school with a fantastically attractive student body. The faculty and your neighbors in town look pretty good too.");
			writeText("This game uses art by Enoshima Iki, Nagi Ichi, Oreteki18kin, Gujira 4 Gou, and Kinta no Mousou and is meant to be similar in feel to Hentai High School, but without the focus on school management, more emphasis on wandering / corruption, and a much higher quality body of images.");
			writeText("The end goal here is a town packed with dozens of characters using a framework I can continually add more content to.");
			writeText("Tags: Hypnosis, features many other tags entirely avoidable tags based on characters such as incest, dubcon, and gay content");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/39683865'">Download the game</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'">Modding Tutorial</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/hentai-university-v2-5-noodlejacuzzi.37312/'">F95Zone Thread</p>
				<p class="choiceText" onclick="window.location.href='https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0'">Hypnopics Thread</p>
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/30871183'">List of cheat codes</p>
			`;
			writeBig("images/RainyDayZ.jpg");
			writeText("Rainy DayZ v3");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Navigate a town and city deliberately working to sabotage yourself and throw yourself into the clutches of the zombie hordes, the goal of the game here is to be defeated and attacked to collect and unlock all of the game's scenes.");
			writeText("Tags: Shemale, Female-to-Shemale Transformation, Rape, Corruption, Zombification, Bestiality (can be disabled), Parasites (can be disabled), Watersports (can be disabled)");
			writeSpecial("Use the cheat code <b>Pool Noodle</b> for a guide on how to unlock each scene!");
			writeTransition("RainyDayZ", "Preview");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/39193031'">Download the game</p>
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12575'">TFGamesDiscussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/rainy-dayz-v1-4-noodlejacuzzi.42457/'">F95Zone Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ%20Mobile.html'">Play the mobile version</p>
			`;
			writeBig("images/bitchMedicenter.png");
			writeText("Bitch Medicenter Demo v2");
			writeText("You're a doctor / sexual therapist who prescribes special body and mind-altering products to help with failed marriages, self worth issue, and etc. Basically, you're modifying people's minds and bodies. Currently in a demo state with only one of the two minigames finished.");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter.html'">Play the demo online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='http://www.hentai-foundry.com/stories/user/NoodleJacuzzi/39001/Bitch-Medicenter---Jerk-off-Junkies-File'">Some related short stories</p>
			`;
			writeBig("images/logo.png");
			writeTransition("HAAD", "Dom Route Preview");
			writeTransition("HAAS", "Sub Route Preview");
			writeTransition("downloadHAA", "Download Human Alteration App");
			writeBig("images/PrincessQuest.jpg");
			writeText("Princess Quest v1.0");
			writeText("Play as Princess Elizabeth as she navigates caves and castle dungeons to rid her people of a demon's foul curse, unaware that she's playing right into the demon's hands.");
			writeText("Uses art done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("As a note, I really do not reccommend playing this on mobile. There have also been a few issues with playing it online. As it's only 4 megs, downloading it is the reccomended way to play.");
			writeText("Tags: Moral Degradation, Corruption, Tentacles, Cum Inflation, Exhibitionism");
			writeTransition("PrincessQuest", "Preview");
			writeTransition("downloadPrincessQuest", "Download Princess Quest");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=60&t=12578'">Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest.html'">Try the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest%20Mobile.html'">Try the mobile version (NON-FUNCTIONAL)</p>
			`;
			break;
		}
		case "news": {
			writeText("<b>10/25/2019</b> - Hentai University v3");
			writeText("The release of Hentai University v3, with some new scenes and the entire engine rebuilt for (hopefully) easy mod support!");
			writeText("<b>10/7/2019</b> - Discord Server");
			writeText("I now have a discord server. Feel free to drop in whenever!");
			writeText("https://discord.gg/B3AszYM");
			writeText("<b>10/7/2019</b> - Discord Server");
			writeText("I now have a discord server. Feel free to drop in whenever!");
			writeText("https://discord.gg/B3AszYM");
			writeText("<b>9/23/2019</b> - Bitch Medicenter Demo");
			writeText("I've added another scene to Bitch Medicenter, comissioned by MrManPerson. Find the game's section below underneath Anomaly Vault and Hentai University.");
			writeText("Have any ideas for more Human Alteration Content? I'm considering working on that game again to flesh out some areas like the clothing system. I'd love to hear your suggestions!");
			writeText("<b>9/20/2019</b> - Hentai University v2");
			writeText("Version 2 of Hentai University is available now, featuring more characters and framework for future plotlines");
			writeText("<b>9/6/2019</b> - Anomaly Vault v2");
			writeText("Version 2 of Anomaly Vault, featuring the Time-Stopwatch and the Antique Mirror which leads to alternate dimensions.");
			writeText("Head over to my patreon for more info (the post is visible to non-patrons), there's a list of cheats available there too.");
			writeText("<b>8/16/2019</b> - Bitch Medicenter Demo");
			writeText("Demo version of my game Bitch Medicenter is now available.");
			writeText("<b>8/7/2019</b> - Anomaly Vault V1");
			writeText("Sponsored game by Swallows999, similar in tone to Human Alteration App's dom route.");
			writeText("<b>7/31/2019</b> - Hentai University V1");
			writeText("Winner of the July Poll, Hentai University is now available. See more info below");
			writeText("<b>7/10/2019</b> - Hentai University Demo");
			writeText("Demo version of my latest game and the July poll winner, Hentai University is now available.");
			writeText("I'll have a dedicated section for it once version 1 is finished.");
			writeText("<b>6/30/2019</b> - Human Alteration App Typofix & July Poll");
			writeText("Several typos fixed, beauty ticket requirement removed");
			writeText("July content poll up on Patreon. Vote now!");
			writeText("<b>6/14/2019</b> - Human Alteration App v1.0");
			writeText("Dom Route Complete");
			writeText("15 short ending scenes");
			writeText("<b>6/14/2019</b> - Human Alteration App v0.9");
			writeText("Sub Route Complete");
			writeText("2 new sub route scenes, 3 endings");
			writeText("Thank you to Lasse Bannow, and Brandon, who've pledged their support!");
			writeText("<b>6/7/2019</b> - Human Alteration App v0.8");
			writeText("Dom Route Update");
			writeText("9 new dom route scenes");
			writeText("<b>5/31/2019</b> - Human Alteration App v0.7.5");
			writeText("Sub Route Update");
			writeText("11 new sub route scenes");
			writeText("<b>5/26/2019</b> - Rainy DayZ v1.0");
			writeText("Full game release");
			writeText("6 new scenes, 14 scenes in the game total");
			writeText("<b>5/24/2019</b> - Human Alteration App v0.7");
			writeText("Dom Route Update");
			writeText("7 new dom route scenes");
			writeText("<b>5/20/2019</b> - Princess Quest v1.0");
			writeText("Full game release");
			writeText("5 new scenes, 9 scenes in the game total");
			writeTransition("start", "Go Back");
			break;
		}
		case "artifactList": {
			writeText("Main Game Artifacts:");
			writeText("These are added to the game specifically to appeal to the game's sponsor, Swallows999. They have more scenes, and are planned to be implemented in this order:");
			writeText(`
				<b>Reprehensive Bracelet (IMPLEMENTED)</b>
				<br> A partially tarnished silver bracelet. When worn, the wearer can become imperceivable and erase memories of themselves & their actions.
				<br>Tags: Unpercieved Sex, Memory Alteration
			`);
			writeText(`
				<b>Erotibox (IMPLEMENTED)</b>
				<br>A wooden crate, anything put inside becomes a heavily sexualized version of itself.
				<br>Tags: Corruption, Mind Control, Deepfake
			`);
			writeText(`
				<b>Alternate Reality Mirror (IMPLEMENTED)</b>
				<br>An antique mirror, stepping through it leads to another dimension of earth depending on the engraving that changes each day. Current engravings include Public Fun Is Not Unusual, a world where public sex is common, and Little Men Are Fun Toys, a world where gender dynamics are reversed from our own.
				<br>Tags: Public Sex, Ignored Sex, Gender Dynamic Reversal, Reverse Rape
			`);
			writeText(`
				<b>Time Stopwatch (IMPLEMENTED)</b>
				<br>A broken bronze stopwatch. When the button on top is pressed, time stops for everyone except the user and anyone they're touching.
				<br>Tags: Time Stop, Rape
			`);
			writeText(`
				<b>Midas Coin (IMPLEMENTED)</b>
				<br>An old golden Greek coin. When held, the holder can bargain sexual acts as though they were bartering with money, the more depraved actions they commit, the larger the monetary value of those actions.
				<br>Tags: Public Sex, Sluttification, Reverse Rape
			`);
			writeText(`
				<b>Super Truth Serum (IMPLEMENTED)</b>
				<br>A mint-flavored drink contained in several small vials. Whatever the drinker says becomes seen as absolute truth by the people around them.
				<br>Tags: Mind Control, Dubious Consent
			`);
			writeText(`
				<b>Chaddicus Shades (IMPLEMENTED)</b>
				<br>A pair of aviator sunglasses which, when worn, increase the wearer's confidence by several dozen degrees. Women will feel compelled to argue with the wearer, at which point some mysterious process causes the argument to almost immediately devolve into sex, with the wearer as the dominant partner.
				<br>Tags: Instant-Loss, Sexual Assault, Dubious Consent
			`);
			writeText(`
				<b>'Free _____!' Sign (IMPLEMENTED)</b>
				<br>A cardboard rectangle with the text "Free _____" written on it. When a sexual act is written on it, it teleports out of the writer's possession and into the possession of someone the writer finds attractive. That person will then feel compelled to offer their services and provide sexual acts to the viewer in public.
				<br>Tags: Sluttification, Whoring, Public Sex, Rimjob, Group Sex,
			`);
			writeText(`
				<b>Appreciation Perfume</b>
				<br>A bottle of scentless purple perfume. When sprayed, whoever inhales the perfume will be 'appreciated' (ie groping, fondling, molestation, etc) by a phantom known as the Lovely Madame. The more often the perfume is inhaled, the more tangible the phantom is.
				<br>Tags: Molestation, Ghosts, Public Groping
			`);
			writeText(`
				<b>CEO Pass</b>
				<br>An ID card from a fictitious company, whoever holds it will be able to molest / assault women as they please, and the recipient's minds will rationalize it, or even cause them to enjoy the treatment.
				<br>Tags: Domination, Molestation, Sexual Assault, Dubious Consent
			`);
			writeText(`
				<b>Vintage Cloth</b>
				<br>A sheet of cloth. When used to cover a person, once the cloth is removed the subject will be wearing a completely different set of clothing, typically the clothing of a fictional character most commonly from the superhero genre (although exceptions have been found). Afterwards, subjects were convinced that they were the characters they are dressed as, although they act much more flirtatious and are more open to sex than their character would normally be.
				<br>Tags: Cosplay Sex, Sluttification, Mind Control
			`);
			writeText(`
				<b>Libitum Scripts</b>
				<br>A set of scripts meant to be acted out as a play on a stage. On the front of each script is a blank cast list, and each script contains a highly-eroticised situation in which the cast perform various roles, but ultimately each play devolves into sex between cast members. When someone fills out the cast list with people they know, they suddenly find themselves in an unknown location, and the events of the script unfold with the chosen cast appearing and playing their roles.
				<br>Subjects chosen to be members of the cast retain some of their personality, but are compelled to complete the scene even if they feel the acts are degrading or humiliating.
				<br>Tags: Mind Control, Heavily depends on the script being acted out (cheating, incest, and many other situational fetishes are possible)
			`);
			writeText("Dark Vault Artifacts:");
			writeText("These are more divisive in fetishes covered. They're locked away in the Dark Vault and generally have less scenes overall. There's no planned order to implement these, just whichever I feel like adding at any time. These can be upgraded to main game artifacts at the sponsor's request, so I'll also use this place to store random ideas.");
			writeText("These aren't in any order, but the ones on the bottom are less thought through than the ones on top. Let me know if any of these sound particularly interesting.");
			writeText(`
				<b>Exchange Gas (IMPLEMENTED)</b>
				<br>Several gas grenades containing a blue and pink mixture. Anyone who inhales the gas will quickly be altered biologically to become a member of the opposite gender, 'genderswapping' them. The length of time they spend genderswapped changes depending on how much gas was inhaled, and if they receive the DNA of someone of their original gender.
				<br>Tags: Genderswapping, (Someone Else's) Cock Worship
			`);
			writeText(`
				<b>Succubus Onahole (IMPLEMENTED)</b>
				<br>A soft plastic fleshlight, no abnormal qualities are shown until male genitalia is inserted into the artifact. Once inserted, men will feel intense euphoria, followed by panic as they claim that tentacles are probing them from inside the artifact. Long-term effects include extreme increases in semen production and mental derangement.
				<br>Tags: Body Modification, Urethral Penetration, Excessive Semen
			`);
			writeText(`
				<b>Punification Cage (IMPLEMENTED)</b>
				<br>A small plastic cage designed to contain flaccid male genitalia. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.
				<br>Tags: Shemale, Chastity, Size Theft
			`);
			writeText(`
				<b>Gummy Dicks (IMPLEMENTED)</b>
				<br>A box of assorted gummy candies, all individually shaped into the form of flaccid male genitalia. When eaten by a male subject, they cause erectile dysfunction and alter the minds of the eater to receive greater pleasure from anal stimulation, while also altering their bodies to become more feminine. 
				<br>Tags: Prostate Stimulation, Sissification, Flaccid Orgasm
			`);
			writeText(`
				<b>Bimbo Dust (IMPLEMENTED)</b>
				<br>A bag full of an off-white powder. It has been tested, and is not cocaine. When baked into confectionary and mixed with sugar, it has a powerful inteligence-draining, body-altering affect on anyone who consumes it.
				<br>Tags: Bimbofication
			`);
			writeText(`
				<b>Sissy's Tool Kit (IMPLEMENTED)</b>
				<br>A plastic makeup kit. When opened, objects will appear inside and in the room which are designed to encourage the opener to 'explore themselves'. These range from makeup to unknown body-modifying drugs and a 3-man group of naked men.
				<br>Tags: Sissification, Feminization, Gay(?) Sex
			`);
			writeText(`
				<b>Stiff Voodoo Doll</b>
				<br>A doll made from straw and twine. When a target's hair is wrapped around the doll, the hair will disintegrate and the target will become unable to move. People around the target will feel compelled to treat the target as a highly-realistic sex toy. The target remains conscious through the entire process, lasting exactly 24 hours before movement is once again possible.
				<br>Tags: Public Use, Dubious Consent, Mind Break
			`);
			writeText(`
				<b>Pineapple Juice!</b>
				<br>A container of pineapple juice, the logo on the front is of a woman drinking from an anthropomorphic pineapple who appears to be very happy to be drunk from. Drinking this permanently alters the bodily fluids (except for blood and other essential fluids) to become delicious and highly addictive. 
				<br>Tags: Semen Drinking, Watersports
			`);
			writeText(`
				<b>Charity's Cage</b>
				<br>A small metal cage designed to contain flaccid male genitalia. Wearers of the cage experience genital shrinkage, and whoever holds the key will suddenly grow male genetalia equal to the 'stolen' length.
				<br>Tags: Shemale, Chastity, Size Theft
			`);
			writeText(`
				<b>Ovorbs</b>
				<br>A pair of small bumpy metal orbs. When swallowed by female subjects the subjects experience a variety of bodily changes and feel compelled to become pregnant, and many of the body changes are to facilitate this.
				<br>Tags: Body Modification, Sluttification, Creampie
			`);
			writeText(`
				<b>Denial Pills</b>
				<br>A bottle of pills featuring a frustrated face on the front accompanied by Chinese text translating roughly to "STRUGGLE!". When taken subjects have shown to become completely incapable of orgasm, but develop an extreme sexual hunger and desire for relief. Research has shown that once the denial period is finished, subjects typically release far more sexual fluid than should be humanly possible.
				<br>Tags: Orgasm Denial, 
			`);
			writeText(`
				<b>Lovey Doves</b>
				<br>A pair of earing that increase the charisma of the wearer, causing them to be able to seduce anyone at will without restriction. Asexual and castrated individuals are not resistant to this effect. In addition, the user will also lose control of their sense of reason and attempt to cause as large an orgy as possible, sometimes displaying unusally high levels of problem solving ability to make this happen.
				<br>Tags: Threesome, Mind Control, Public Sex
			`);
			writeText(`
				<b>Kid Gloves Charm</b>
				<br>A silver pair of earings that, when worn, cause any physical  or emotional pain the wearer inflicts to be recieved as pleasure. Any injuries caused will also be surface level at worst. The longer the charm is on the wearer's person, the rougher they will treat members of the opposite sex.
				<br>Tags: Rough Sex (spanking, hair pulling), Rougher Sex (going even farther beyond)
			`);
			writeText(`
				<b>Destiny-Link Rings</b>
				<br>A pair of golden rings. When worn by a pair of people, sensations such as pleasure, happiness, guilt, etc experienced by one ring wearer will be transferred and felt by the other ring weaer.
				<br>Tags: Shared sensation, Long-distance sex
			`);
			writeText(`
				<b>Self-Fufilling Pills</b>
				<br>A small tin container with a single red piece of breath freshener inside. When eaten the subject will develope a sixth sense when looking at woman, showing visions in their mind of rejection and obscenely disgraceful behavior. Typically these fantasies involve the women eloping with men other than the subject.
				<br>Tags: Gangbang, sluttification, cuckholding
			`);
			//writeText(`
				//<b>Megavitamin of Youth</b>
				//<br>A gummy megavitamin, aquisition records show it was created by putting water from the fountain of youth into the erotibox. A subject who eats the megavitamin appears to look younger to the people around them. As a side-effect, it greatly increases the cruelty and reduces the ability for empathy of the subject.
				//<br>EXTRA NOTE: The player (male), would eat this. It'd make you look like a youthful teenager and the women of the cast would go full cougar over you.
				//<br>Tags: Ara Ara~, De-aging, Male Domination, Female Degradation
			//`);
			writeTransition("AV", "Go Back");
			break;
		}
		case "commissions": {
			writeText("There's nothing here yet, consider donating to my Patreon if you'd like to commission a scene!");
			writeTransition("start", "Go Back");
			break;
		}
		case "HAAD" : {
			route = "dom";
			writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
			writeBig("images/solo2.gif");
			writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
			writeSpeech("Lisa", "scripts/gamefiles/real/oldfile0.jpg", "God, oh god... What's happening to me? Got to get help... Got to...");
			writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
			writeBig("images/solo1.gif");
			writeText("Her rubbing reaches a crescendo and her body convulses, but even after hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you want to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
			writeText("...");
			writeText("You spend your free time studying the app and its nature.");
			writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you.");
			writeTransition("start", "Go Back");
			break;
		}
		case "HAAS" : {
			route = "sub";
			writeText("You lean against the entrance's wall patiently.");
			writeText("Meanwhile, just down the hall, Riley is hiding behind the corner.");
			writeSpeech("Riley", "riley", "<i>Okay, okay, calm down Riley.<br>Today is the day. Everything is going to go fine. Just calm down!</i>");
			writeText("Mentally, she berates herself and the half-chub lifting her skirt.");
			writeBig("images/friend1-1.jpg");
			writeText("Since her unusual growth spurt, she's had to forgo her normal tape this morning to keep her erections from poking out. Not only that, she had to forgo panties today as well. Still, despite how strange it was, she couldn't bring herself to find it weird for some reason.");
			writeSpeech("Riley", "riley", "<i>God, what is up with me today? I even accidentally flashed a guy on the way here. If it'd been Anon...</i>");
			writeSpeech("Riley", "riley", "<i>Ah! No! Come on, calm down. Don't think about him. Don't think about his face. About his lips around my...</i>");
			writeText("Mental images flood Riley's mind. Her newly enhanced libido barely able to keep up with her fantasies..");
			writeSpeech("Riley", "riley", "<i>I could pin him down. He's smaller than I am, I could just... No! I need to stop!</i>");
			writeBig("images/friend1-2.jpg");
			writeText("Riley pulls her hand away from her member.");
			writeSpeech("Riley", "riley", "<i>What the hell am I doing, jerking off in public? What would people think if they saw me? What would Riley think?<br>That I'm some pervert who can't control her dick?</i>");
			writeText("Despite not touching herself, she can't help but feel herself moving towards an edge.");
			writeSpeech("Riley", "riley", "<i>He might even try to run away, and I'd need to chase him... I'd catch him, and-</i>");
			writeBig("images/friend1-3.jpg");
			writeSpeech("Riley", "riley", "<i>Ah, no! Nooo! Cumming~!</i>");
			writeBig("images/friend1-4.jpg");
			writeSpeech("Riley", "riley", "<i>Hah... Hah... I came all over the floor... Shit! He's coming!</i>");
			writeText("It's been more than fifteen minutes already. You walked over to see if she was finished yet, only to find a puddle of white fluid on the floor, and no trace of Riley.");
			writeText("You wait for another five minutes, but there's no sign of her. Eventually, you decide to leave. You'll need to ask her what she wanted to tell you some other day.");
			writeTransition("start", "Go Back");
			break;
		}
		case "PrincessQuest" : {
			writeText("You are chastised quite a bit for having stolen a horse, but all the while your mind is on your divine mission. Ever since you've returned to the castle you've felt... Strange.");
			writeText("Your tutor's words are ignored as you can feel a growing heat inside you, and you stumble. Quickly you are ushered to your room, where you have a chance to rest.");
			writeText("Still, the heat persists. You strip free from your clothes, and the heat is no longer insufferable. The air is stagnant here, hardly thinking of anything you sneak free from your room, stark naked.");
			writeText("...");
			writeBig("images/1-1.jpg");
			writeSpeech("Elizabeth", "vr", "Oh my. I... I can't believe I'm doing this...");
			writeText("Soldiers patrol the hallways, but you've lived long enough to know their route by heart. As you passes by you dart into a corner, your hands barely able to cover your ample breasts and pussy.");
			writeText("As your hand brushes your nipples you tremble and the heat from your womb flares, begging for relief.");
			writeSpeech("Elizabeth", "vr", "Ah, to pleasure myself freely. Is that what I must do now? I am not some whore, but...");
			writeBig("images/1-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ah! Goodness. The heat... I want more... I can't stop!");
			writeText("Your hands go lower to soothe your aching lips. You feel as though you've gone into heat. Here, exposed, you are fingerfucking yourself to a messy orgasm.");
			writeBig("images/1-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ngh! Yes! More! Cumming!");
			writeBig("images/1-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Did you hear something?");
			writeSpeech("Elizabeth", "vr", "Hah... Hah... I must... Escape.");
			writeText("...");
			writeSpeech("Elizabeth", "vr", "That felt good. And even if it was wrong, to follow the order of God is just! Should I have another desire like that...");
			writeText("The heat from your womb ignites again as you run through the halls.");
			writeSpeech("Elizabeth", "vr", "Then I must surely accommodate them.");
			writeText("...");
			writeText("Among the castle's guard, a rumor began to spread of a banshee roaming the halls. The brave patrolmen were not daunted however, even when they would find puddles of ectoplasm on the ground.");
			writeTransition("start", "Go Back");
			break;
		}
		case "RainyDayZ" : {
			writeText("You're so exhausted you barely even register the feeling as the zombie pushes you down into a puddle of running rainwater. Try as you might, you don't have the strength to resist as she rips your pants off.");
			writeSpeech("You", "zombie", "No! Please, stop!");
			writeText("She either can't understand you or doesn't care, either way she doesn't stop as she rips off your panties. She tries to thrust right in but is stopped as her dick is just way too big to fit inside of you. You feel relieved for almost a second until she starts jacking herself off just inches away from the entrance to your pussy.");
			writeText("After a few seconds she spurts out a dollop of thick precum onto your labia and lets go of her dick. You try to squirm away, but she grabs you by the throat with one hand as she starts rubbing her jizz into your skin with the other.");
			writeText("Her fingers thrust inside of you, covering the entrance to your vagina with her infectious dickslime. Everywhere it touches you feel your skin grow puffy and sensitive. For as disgusting as you feel right now, her fingers feel really, really <b>good</b>.");
			writeText("But before you get the chance to start enjoying the sensations they've already stopped. She pulls the hand that was just fingerfucking you and puts it around your neck as she positions the head of her dick against your womanhood.");
			writeSpeech("You", "zombie", "No...");
			writeText("Your objections are a lot quieter now, but that's just because you're being choked. It's not like you wanted to become a mindless fuck machine, right?");
			writeText("But she doesn't care about any of that as she presses dick dick against you and pushes. Inch after inch sinks into you as you resist with all the might you can muster.");
			writeText("And it's enough to stop her. A few inches in and you're just too tight to take any more. The situation is hopeless, no one is coming to save you, but this last act of defiance is enough to keep you focused and in the moment.");
			writeText("Until she pumps another load of precum into you. The pain of your resistance starts to fade and firecrackers start going off in your brain as your body starts to relax against your will. She pushes deeper and deeper inside of you before she starts pulling out.");
			writeBig("images/basic1-1.gif");
			writeText("She's relentless in her thrusting, and with every few thrusts comes another load of precum that makes the situation feel even better. Every time you absorb her juice into your body, your infection grows more complete.");
			writeText("With one big thrust you can feel her dick impact the entrance to your womb, but instead of body-clenching pain you feel spine-melting pleasure. She starts cumming, real jizz instead of precum, and you <b>feel</b> it being pumped into your womb.");
			writeText("You can feel your body changing by the second. Your breasts start growing and you feel the entrance to your womb start to dilate in preparation for becoming a brand new dick.");
			writeText("But she isn't done with you yet. She starts thrusting again to prolong her orgasm and the tip of her dick kisses your womb's entrance over and over again until her dick's tip pushes through. She pushes her head in, pumping her jizz directly into you stuffing you full of her infected milk.");
			writeBig("images/basic1-2.gif");
			writeText("She tries to pull out but stops and just starts tugging. Your womb, desperate for more, is wrapped around the head of her dick and won't let go. She keeps getting more and more forceful and pushes back in before trying to pull out.");
			writeText("After an audible *POP* she pulls herself free, and you start squirting her infected load out of your body. With every squeeze you push out more, and the bulge of your overstuffed womb starts to flatten. After one last push you squirt the cum a good few inches out, but you feel something else getting pushed out as well.");
			writeText("You look down, and standing at full mast is a brand new dick. You can feel a heavy pair of balls below it large enough to rest in the puddle of water beneath you.");
			writeText("Your mind can't hold a complete thought anymore. This is your new life.");
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadAnomalyVault": {
			document.getElementById('output').innerHTML +=`
			Current version: V1<br><br>
			Most recent game files: https://mega.nz/#!Sr5ikIjK!mtDhSl0qL1ZuAaaXOr8xAgEQGwnugctW3rajdLO3Uus<br><br>
			Most recent image pack: https://mega.nz/#!LjpmACjJ!yANM5Mf-gElrSvSxFn_omIQu1Pjy8xI64kJZ14Iun9Q<br><br>
			If you're new to the game, all you need to do is download these two. Extract the game files to create the Anomaly Vault folder, then extract the images to create the images folder. Make sure the images folder is in the Anomaly Vault folder and you're good to go. The final layout should look like this:<br><br>
			images<br>
			scripts<br>
			Anomaly Vault.html<br>
			Anomaly Vault Mobile.html<br><br>
			If you're playing an older version, you can download individual upgrade packs here:<br>
			https://mega.nz/#F!rqhGnIwY!hzTrpPJOzhn3bNWEXNhToA<br>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadHentaiUniversity": {
			document.getElementById('output').innerHTML +=`
			Current version: v2.5<br><br>
			Most recent game files: https://mega.nz/#!TiJHUCLS!gdhSTXcC9fqGdG6ZPCl4lHRhcnod5n1Vzk3xRUW8PgE<br><br>
			I've switched to a one-download style for this game. Just extract and play!
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadHAA": {
			document.getElementById('output').innerHTML +=`
			Current version: 1.0<br><br>
			All-in-one download (273 megs): https://mega.nz/#!PhdXyITa!Sc2j54dPKwc2a5zO7zNTuC0h-IIvYx9-xmv-KSUWYo4<br><br>
			Dom route only (221 megs): https://mega.nz/#!v4NFgawY!5JbAsDvKVP1voR9sCuQ--YpHPExuXLb1HxOJGhEykBY<br><br>
			Sub route only (99 megs): https://mega.nz/#!npNnDY4L!Kcy-DxBbxgxD8dENyrWMxECZHHVglUOn9qmJlrByKqk<br><br>
			Most recent game files: https://mega.nz/#!Xgk3ESCL!ceY7R-jG3nTZ-6PguAcYtE0y-GNcymqs8svrPXHXFoA<br><br>
			Most recent image pack: https://mega.nz/#!e1FnDK4J!8tUkRruq4YN1qURHRUsG4CPQTI5iTi1z3Cvgo6CNcd4<br><br>
			If you're new to the game, all you need to do is download these two. Extract the game files to create the Human Alteration App folder, then extract the image pack directly into the Human Alteration App folder. You can find a picture of what the final layout should look like in the screenshot folder:<br><br>
			https://mega.nz/#F!zwsBnSoT!7wiL0wOWcml2wtX7M0fXiA<br><br>
			If you've already downloaded an image pack in the past, you can find all of the image upgrade packs here so that you don't need to download the whole thing again:<br><br>
			https://mega.nz/#F!j9UyWQhQ!TKUlk_gNQq1fFk779dMurw<br><br>
			If you'd like to see the game's overall progress and a list of what scenes have been completed, you can find the game's progress chart here:<br><br>
			https://mega.nz/#F!jk0yBYwI!DsOhPJl3qB5Ec8KTsIFNtA<br><br>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadRainyDayZ": {
			document.getElementById('output').innerHTML +=`
			Current Version: Complete v1.0<br><br>
			Most recent game files: https://mega.nz/#!7sMS0AAY!vO_5Kk9YPBT3B5xN4TgEuBIznj7ClPy0Zvchivqkg1A<br><br>
			All you need to do is download this. Extract the game files to create the Rainy DayZ folder, then run the Rainy DayZ.html file. If errors begin popping up, I might need to separate the game files from the images.<br><br>
			If you already have the beta version installed, don't download the whole thing all over again. Download this game files upgrade pack and overwrite the old Rainy DayZ folder to update your game: https://mega.nz/#!KlEW0ITZ!k4F9j99y9vfqrOkGcvYxRUjLbI3TA2B4SKXJTcCp0BU
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadPrincessQuest": {
			document.getElementById('output').innerHTML +=`
			Current version: v1.0 (5/20/2019)<br><br>
			Most recent game files: https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8<br><br>
			All you need to do is download this. Extract the game files to create the Princess Quest folder, then run the Princess Quest.html file. If errors begin popping up, I might need to separate the game files from the images.
			`;
			writeTransition("start", "Go Back");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeBig("images/butts.jpg");
			writeTransition("home", "Go back home.");
		}
	}
}