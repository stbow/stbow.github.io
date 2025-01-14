const text = document.getElementById("text");
const choices = document.getElementById("choices");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choiceHeader = document.getElementById("choice-header")

const story = [
	{
		sceneID: "A",
		sceneText: "You take a deep breath, puff out your chest, and stride forward with all the confidence of a knight who has definitely watched too many heroic tales. \"Fear not, fair people of this fair kingdom!\" you bellow, your voice echoing off the stone walls. \"For I, Sir Cedric, have come to rescue the princess and bring justice to all who dare defy the crown!\" A small bird flutters past, and you swear it looks at you with a mixture of disdain and pity. You ignore this, raising your sword high for emphasis. \"I shall not rest until the evil sorcerer who has trapped her in his tower is vanquished, or at least mildly inconvenienced!\" There's a pause, and then one of the guards clears his throat.<br><br>\"Uh, Sir Cedric?\" he says, looking at you with an eyebrow raised. \"The princess...is not in the tower.\"",
		btnText: ["Continue with your speech, pretending the information was part of your brilliant plan all along?", "Drop your sword dramatically and ask where the princess actually is?"],
		btnFunctions: [A1, A2]
	},
	{
		sceneID: "B",
		sceneText: "You decide to take a moment to catch your breath, because, well, there's no rush in saving the princess when your helmet is about to slide off your head. As you fumble with the chin strap, you hear the guards chuckling. One of them, a tall fellow with a mustache that looks like it has its own zip code, steps forward. \"You know, sir knight,\" he says with a grin, \"there’s no need to hurry. The princess is <em>probably</em> still waiting in the tower...or she could be napping by now. We don't really know her schedule.\"<br><br>You adjust the strap one more time, muttering to yourself about how this is <em>not</em> the day for helmet-related issues. Finally, after what feels like an eternity, it stays put.<br><br>The guards exchange amused glances. You can almost hear them thinking, <em>We could be the heroes of this story instead</em>.",
		btnText: ["Give a dramatic wave and announce your intent to save the princess, despite your armor's disarray?", "Humbly acknowledge your mishaps and ask for help with your quest?"],
		btnFunctions: [B1, B2]
	},
	{
		sceneID: "A1",
		sceneText: "You straighten up, your hand gripping the hilt of your sword with newfound conviction. \"Ah, of course!\" you declare, your voice booming even louder than before. \"A cunning ruse, no doubt, set in place by the sorcerer to test my resolve!\" You wave your sword dramatically, nearly taking out a few nearby flowerpots in the process. \"But fear not, I shall not be swayed! Whether the princess is in the tower, the dungeon, or even...<em>gasp</em>...the royal kitchen, I will find her!\" The guards exchange uncomfortable glances, one of them trying to stifle a snicker. You press on, determined to make this moment legendary. \"Prepare yourselves, for Sir Cedric’s legendary search begins now!\"<br><br>As you march boldly forward, one of the guards steps in your path. \"Sir, we’re going to need you to sign in at the front desk first.\"",
		btnText: ["Nod with royal authority and stride past them as if this is all part of your plan?", "Stop and ask what kind of paperwork is required for a “legendary” rescue mission?"],
		btnFunctions: [A11, A12]
	},
	{
		sceneID: "A2",
		sceneText: "You drop your sword with an exaggerated flourish, the clattering sound reverberating through the courtyard like a clumsy cow falling down a flight of stairs. \"Wait...what?\" you ask, your voice cracking slightly as you glance around at the guards, who are now exchanging bemused glances. \"She's <em>not</em> in the tower? Then...where in the kingdom is she?!\" You stand there for a moment, eyes wide, desperately trying to salvage some shred of dignity. One of the guards shrugs. \"She's actually at the bakery, sir. Princess Lila’s been helping bake bread for the villagers all week.\"<br><br>Your face flushes red, but you quickly recover. \"Ah! Of course!\" you exclaim, straightening up. \"A <em>most</em> noble pursuit&#8212rescuing bread from the clutches of hunger! I was just...testing the gates for weaknesses!\" You gesture dramatically at the iron bars.",
		btnText: ["Make a swift exit to the bakery, hoping the princess hasn’t noticed your complete lack of planning?", "Challenge the guards to a duel to prove your worthiness, just in case they don't believe you’re as heroic as you claim?"],
		btnFunctions: [A21, A22]
	},
	{
		sceneID: "B1",
		sceneText: "oops i didn't write this lol",
		btnText: ["start over", "start over"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2",
		sceneText: "You lower your head, feeling a bit sheepish. \"Maybe you're right,\" you admit, adjusting your sword belt. \"But I <em>have</em> taken the quest, and it would be...dishonorable to pass this task to others.\" You glance up, and the tall guard with the mustache gives you an amused nod. \"Do you...have any tips?\"<br><br>The guards exchange glances, and the mustachioed one shrugs. \"Don’t trip on the way up the tower, and if you see any dragons...run.\"<br><br>With your dignity mostly intact, you stride ahead. The gates creak open, and you head up the winding path toward the castle entrance. As you approach the tower, you notice a small window with a flickering light. That must be where the princess is. You glance back to the guards, who are now chatting casually as if they’re discussing the weather, and let out a breath. You’ve got this.",
		btnText: ["Knock on the door to the tower with all the force and ceremony a knight can muster?", "Quietly slip into the tower, hoping to avoid any embarrassing moments in front of the princess?"],
		btnFunctions: [B21, B22]
	},
	{
		sceneID: "A11",
		sceneText: "You give a regal nod, brushing past the guard with an air of superiority that you hope conveys how thoroughly unbothered you are by bureaucracy. \"I do not have time for such trivialities!\" you declare, waving your hand dismissively. \"The princess awaits my heroism!\" The guard stands there, blinking in confusion, but you’re already striding toward the castle’s grand hallway. Unfortunately, the moment your foot hits the first step, your helmet&#8212now thoroughly unhinged by your earlier theatrics&#8212slips down over your eyes, blinding you. You take two more steps before tripping over a stray rug and landing flat on your face. The sound echoes through the castle, and the guards behind you exchange concerned looks.<br><br>\"Uh, sir?\" one guard calls, though it’s unclear if it’s a question or a statement.",
		btnText: ["Leap to your feet dramatically, shouting, \"This was all part of my plan to confuse the enemy!\"", "Stay down for a moment and reconsider your life choices, especially the ones involving poorly fitting armor?"],
		btnFunctions: [A111, A112]
	},
	{
		sceneID: "A12",
		sceneText: "You stop in your tracks, your sword still raised in mid-air, and turn to face the guard. \"Paperwork?\" you ask, a hint of disbelief in your voice. \"For a <em>legendary</em> rescue mission?\"<br><br>The guard, unfazed, holds up a clipboard with a piece of parchment and a quill. \"Yes, Sir Cedric. Kingdom policy. You can't just charge into a rescue without filling out the proper forms.\"<br><br>You glance at the form, which is already pre-filled with your name and knightly title&#8212someone must’ve anticipated this&#8212but the questions are...unexpected. \"Purpose of visit: To rescue the princess? (Please specify if you are rescuing, infiltrating, or offering unsolicited advice).\" You blink, a wave of confusion washing over you. \"I didn’t think being a hero would involve... forms.\"<br><br>The guard smiles politely. \"Oh, it's very standard. You'll also need to sign the liability waiver in case of accidental dragon encounters. Last month’s knight didn't read it, and now he's missing a hand. He tried to sue and got laughed out of court, of course.\"",
		btnText: ["Sign the paperwork without another word, assuming it’s just part of the \“hero’s journey?\"", "Ask the guard if there's a 'No Paperwork' option for those on a quest of epic proportions?"],
		btnFunctions: [A121, A122]
	},
	{
		sceneID: "A21",
		sceneText: "You nod solemnly, pretending as if your entire plan has been a carefully crafted series of tactical moves. Without missing a beat, you turn on your heel and stride off toward the bakery, trying to maintain the air of dignity you so clearly deserve. As you pass the bakery’s large window, you spot Princess Lila inside, rolling dough with a concentrated look that could only be described as “seriously intense.” Her hair is flour-dusted, and she’s humming a tune as she works. You knock on the door with all the grace of a man who’s never truly knocked on a door in his life, your fist connecting with it so hard that you almost knock it off the hinges.<br><br>The princess looks up, blinking in surprise. \"Oh! Sir Cedric,\" she says, clearly not expecting a knight in shining&#8212albeit slightly smelly&#8212armor to be standing in her bakery. \"What brings you to my humble flour haven?\"",
		btnText: ["Declare your noble intention to rescue her from the perilous task of baking bread, and demand she return to the castle immediately?", "Drop to one knee, dramatically proclaim that you have come to assist her in her noble mission, even if it means kneading dough with your own hands?"],
		btnFunctions: [A211E, A212E]
	},
	{
		sceneID: "A22",
		sceneText: "You throw your gauntlet to the ground with as much dignity as you can muster. \"A duel!\" you declare. \"For my honor! And...for <em>bread!</em>\"<br><br>The guards exchange confused looks. One shrugs and pulls out a practice sword, clearly uninterested in a fight. \"Sir Cedric, it’s just a Tuesday. Can we skip the duel?\"<br><br>You blink, realizing your grand idea may not be as impressive as you thought.",
		btnText: ["Rush forward with a dramatic charge, hoping to at least get a laugh?", "Go to the bakery instead?"],
		btnFunctions: [A221, A21]
	},
	{
		sceneID: "B21",
		sceneText: "You take a deep breath, puff out your chest, and approach the tower door with all the swagger you can muster&#8212after all, you’re a knight! With a dramatic flourish, you raise your fist and knock three times, each strike echoing through the silence. The sound is so loud, it’s almost as if you’re announcing your arrival to the entire kingdom. For a moment, there’s nothing but the faint rustling of wind. Then, from behind the door, you hear a voice: \"Are you...knocking? Is this some sort of...door-knight tradition?\" You freeze. It’s the princess, and she sounds <em>amused</em>&#8212definitely not the reaction you were hoping for.",
		btnText: ["Continue your dramatic entrance, making sure your voice is as regal as possible?", "Blush and stammer something about how knights usually knock before heroic deeds?"],
		btnFunctions: [B211, B212]
	},
	{
		sceneID: "B22",
		sceneText: "You decide to sneak in quietly, reasoning that a grand entrance might not be the best idea when you're already on shaky footing&#8212literally and figuratively. The door creaks as you push it open, and you wince, pausing to make sure no one heard. Inside, the tower is dimly lit, the air thick with the smell of damp stone and something vaguely herbal&#8212perhaps dragon breath? You tiptoe across the uneven floor, your armor clinking softly despite your best efforts to stay silent. Somewhere above, you hear a faint humming. The princess? Or something worse? Either way, your stomach tightens as you approach the winding staircase, every creak of the wood making your nerves hum louder than the mysterious sound.",
		btnText: ["Continue sneaking up the stairs, trusting your stealth will hold?", "Call out softly to see if the princess...or anything else...is up there?"],
		btnFunctions: [B221, B222E]
	},
	{
		sceneID: "A111",
		sceneText: "You spring to your feet with the grace of a cat&#8212if that cat had just woken up from a nap and had a bit too much to drink. \"Ha!\" you shout, raising your sword high as if the ground had been a mere stepping stone in your masterful strategy. \"This was but a feint! The enemy will never expect such cunning trickery!\"<br><br>The guards stare at you, utterly bewildered. One of them coughs awkwardly, while another mutters something about needing a break. You, however, are undeterred. You stride forward again, this time with exaggerated steps, trying to look as though you’re on a mission of utmost importance. The only problem is that your helmet is now stuck halfway down your nose, and you're pretty sure you just walked into a tapestry.<br><br>\"Uh, Sir Cedric?\" a guard asks, this time a little more hesitantly. \"That’s not the way to the princess's room...\"",
		btnText: ["Boldly declare that you’ve just “found the secret passage” and continue down the wrong hallway?", "Sheepishly ask for directions, pretending you know exactly where you’re going?"],
		btnFunctions: [A1111, A1112]
	},
	{
		sceneID: "A112",
		sceneText: "You stay on the floor for a long moment, the weight of your armor pressing uncomfortably into your ribs. Maybe, just maybe, this knight business isn’t as glamorous as it looks in the stories. You roll your head to the side, peering at the polished floor beneath you. It’s smooth, probably perfect for tripping a clumsy hero, and you're now considering how many of these floors you’ve seen in your life. The sharp pain in your shoulder reminds you that you should probably get up, but it’s so cozy down here. Maybe if you just lie here long enough, someone will come along, realize you’re the hero they’ve been waiting for, and offer you a proper nap break.<br><br>\"You...okay there, Sir Cedric?\" the same guard asks, now sounding more sympathetic than concerned.",
		btnText: ["Sit up, dust yourself off, and proudly announce, \"I am simply meditating before my grand conquest!\"", "Stay down a little longer and let someone else make the heroic decisions for a change?"],
		btnFunctions: [A1121, A1122E]
	},
	{
		sceneID: "A121",
		sceneText: "You take the quill from the guard with a dramatic flourish, as if signing a legendary document that will be passed down through the ages. \"Very well,\" you say with a heroic sigh, \"I shall comply with these...formalities, for the greater good!\" With a flourish, you sign your name at the bottom of the form, nearly knocking over the guard’s clipboard in the process.<br><br>He scribbles a quick note, then hands you a stamp of approval. \"All set, Sir Cedric,\" he says, his tone almost too cheerful for the moment. You nod, ready to resume your quest, but before you can take another step, the guard raises a finger. \"Ah, one last thing,\" he says. \"We’ll need you to fill out the survey on how your rescue mission went afterward. You know, for customer feedback.\"",
		btnText: ["Nod solemnly and accept the fact that even epic quests come with surveys?", "Suggest that the survey can wait until after you’ve actually rescued the princess?"],
		btnFunctions: [A1211, A1212E]
	},
	{
		sceneID: "A122",
		sceneText: "You tilt your head and give the guard a look that can only be described as <em>royally confused.</em> \"Is there a...'No Paperwork' option for, you know, someone embarking on a <em>quest of epic proportions?\"</em> you ask, your voice dripping with the kind of gravitas reserved for ancient heroes.<br><br>The guard blinks, then scratches his chin thoughtfully. \"Well, technically, you could forgo the forms,\" he begins, \"but then you’d be on what we call 'heroic probation.' No kingdom benefits, no free armor repairs, and&#8212\" he leans in closer, dropping his voice to a conspiratorial whisper, \"&#8212you can't use the royal throne room for battle strategy meetings.\"",
		btnText: ["Fill out the paperwork, begrudgingly accepting the process to maintain your knightly privileges?", "Ignore the paperwork entirely and march straight to the castle, fully prepared to face whatever comes, forms be damned?"],
		btnFunctions: [A1221E, A1222E]
	},
	{
		sceneID: "A211E",
		sceneText: "You stand tall, puff your chest out once more, and declare, \"Princess Lila, you have been held captive in this bakery long enough! The kingdom needs you at the castle, not slaving away over flour and yeast. Your destiny is far grander than...bread.\" You gesture grandly at the kitchen, as if it’s a dungeon rather than a warm, inviting place of delicious smells.<br><br>The princess raises an eyebrow, sets down the rolling pin, and crosses her arms. \"Cedric, I love how you’ve come all this way to rescue me from...my <em>choice</em> of work.\" Her tone is dry, and you can feel the weight of your words hang awkwardly in the air. \"I’m <me>voluntarily</em> baking bread, Cedric. This is a far more productive way of helping the kingdom than fighting imaginary dragons.\"<br><br>Your shoulders sag as the realization hits: you've made a fool of yourself in front of the princess. \"But, the...the castle needs you! I think.\"<br><br>She rolls her eyes, but smiles. \"No, they really don't. Cedric, how about you join me for a loaf of bread? Maybe that'll help you come to terms with this heroic mix-up.\"<br><br>You sit, abandoning your knightly plans for the day. It’s a long, humbling afternoon of bread making, but, much to your surprise, it’s rather peaceful.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A212E",
		sceneText: "You drop to one knee. \"Fear not, Princess Lila!\" you declare, raising a hand in dramatic flourish. \"I, Sir Cedric, have come to assist you in your most noble of endeavors. I shall knead this dough with the might of a thousand knights! No bread shall rise without my help!\"<br><br>The princess refuses to let you anywhere near the dough until she's trained you, working you like a taskmaster until you're covered in a fine layer of flour. By the end of the day, you’ve mastered the art of kneading (somewhat), though you're still covered in flour. But as you both share a loaf of warm bread, you realize that maybe the <em>real</em> noble quest was the bread you made along the way.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B211",
		sceneText: "You clear your throat and stand as tall as possible, trying to sound as noble as the knights in the stories you’ve heard. \"Princess, I have come to rescue you from your tower, for I am Sir Cedric, the bravest of knights!\" Your voice echoes in the silence, and you can practically hear the <em>wind</em> applauding your heroic speech.<br><br>The door creaks open slowly, and the princess peeks her head out. She looks at you for a moment, then raises an eyebrow. \"Is this...is this your full introduction? Because I was expecting something a bit more...refined.\"<br><br>You blink, momentarily thrown off by the bluntness. \"Refined?\" you repeat, feeling your confidence waver slightly. \"I...I’m just getting started!\"",
		btnText: ["Stick with your dramatic flair and announce that you’re ready for anything, especially heroic monologues?", "Quickly pivot, trying to sound more composed, and ask if she needs help with anything else?"],
		btnFunctions: [B2111E, B2112E]
	},
	{
		sceneID: "B212",
		sceneText: "Your face heats up instantly, and you clear your throat awkwardly. \"Uh, well, you see,\" you stammer, \"knights...often knock before, um, heroic deeds. It’s tradition. Very noble. Very knightly.\"<br><br>The door creaks open slightly, revealing a young woman with a raised eyebrow and a smirk. \"I see,\" she says, leaning casually against the frame. \"I suppose you also slipped on the way here as part of this grand tradition?\"<br><br>You glance down at the muddy smudge on your armor and try not to shrink under her gaze. \"Absolutely,\" you reply with forced confidence. \"It’s all part of the hero’s...journey.\"<br><br>She laughs, and you realize she’s not mocking you&#8212well, not entirely.",
		btnText: ["Attempt to steer the conversation toward your noble intentions, emphasizing the rescue?", "Double down on your awkward charm, cracking a joke about the perils of slippery stones?"],
		btnFunctions: [B2121, B2122E]
	},
	{
		sceneID: "B221",
		sceneText: "You take a deep breath and continue creeping up the stairs, each step a delicate balancing act between stealth and the clinking rebellion of your armor. The spiral staircase seems to go on forever, every creak under your boots echoing in the silence. Halfway up, you freeze as a faint growl rumbles from above. Your heart pounds, but you press on, clutching your sword tightly. At last, you reach a wooden door at the top. It’s slightly ajar, and through the crack, you catch a glimpse of soft candlelight&#8212and a shadow moving across the room. You brace yourself, trying to decide your next move, when the growl sounds again, louder this time.",
		btnText: ["Burst through the door with your sword drawn, ready to fight whatever’s inside?", "Peek through the crack to assess the situation before making a move?"],
		btnFunctions: [B2211E, B2212E]
	},
	{
		sceneID: "B222E",
		sceneText: "You decide to call out softly, figuring it’s better to let the princess&#8212or whatever's up there&#8212know you're coming. \"Hello?\" you murmur, trying to sound confident despite your nervousness. There's a long pause, and then the humming stops. You hear the rustling of fabric, and before you can react, a small figure appears at the top of the stairs. It’s not the princess&#8212it's an elderly woman with a mischievous grin, wearing a robe made entirely of what appears to be mismatched curtains.<br><br>\"Well, well, well,\" she says, her voice dripping with amusement. \"A knight, sneaking around my tower in such an unknightly way. Did you lose your way, young hero?\"<br><br>You blink, taken aback. \"I...I’m here to rescue the princess.\"<br><br>The woman raises an eyebrow. \"Ah. She's already saved herself, dear. But thank you for the gesture.\"<br><br>You stand there, stunned, as she pats you on the shoulder. \"I’m sure the guards will have a good laugh about this later.\"<br><br>With that, she turns and walks back into the tower, leaving you to contemplate your very <em>non-heroic</em> rescue mission.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A1111",
		sceneText: "You puff out your chest once more and give the guard a look of intense, fabricated wisdom. \"Ah, you see, this <em>is</em> the secret passage,\" you declare with such confidence that even you almost believe it. \"It is known only to the bravest knights and the most daring adventurers. Most would not be able to navigate it, but I&#8212Sir Cedric&#8212am no ordinary knight.\" You pause dramatically, ensuring that the guard is thoroughly captivated by your 'expert' knowledge of the castle’s layout, and then make a swift turn down a narrow corridor. The only problem is, the passage you’ve chosen appears to lead directly into the castle's broom closet. You stop short, eyeing the dusting supplies warily, but refuse to acknowledge the error.<br><br>\"Indeed,\" you murmur to yourself. \"The secret passage...leads to...a most <em>unexpected</em> location.\"<br><br>The guard behind you sighs deeply. \"Sir Cedric, that’s the supply closet.\"",
		btnText: ["Vow to personally investigate every broom closet in the kingdom until you find the princess?", "Admit defeat, take a deep breath, and ask for a map...quietly, this time?"],
		btnFunctions: [A11111E, A11112E]
	},
	{
		sceneID: "A1112",
		sceneText: "You pause, adjusting your helmet with a slight wince as it slips over your eyes again. \"Right, well, you see, I was...um...just testing the castle’s defenses,\" you say, trying to sound confident. \"A good knight always prepares for the unexpected!\" You clear your throat, and in a quieter voice, you add, \"But, ah, perhaps you could direct me to the princess's room? Just to, uh, confirm my route for the next heroic charge.\"<br><br>The guards exchange glances, clearly trying not to laugh. One of them finally steps forward, pointing down a hallway to your left. \"The princess is in the royal suite,\" he says, his voice barely concealing his amusement. \"If you follow this hall and take a right at the stained glass window, you can’t miss it.\"<br><br>\"Ah, yes!\" you exclaim, nodding enthusiastically. \"Of course, the stained glass window!\"",
		btnText: ["March confidently down the hallway, pretending you knew exactly where it was all along?", "Thank the guard profusely and add an awkward bow before you leave?"],
		btnFunctions: [A11121, A11122E]
	},
	{
		sceneID: "A1121",
		sceneText: "You sit up slowly, brushing off imaginary dust from your armor with as much dignity as you can muster. \"Ah yes,\" you say, nodding sagely as if you’ve been struck by a sudden moment of clarity. \"I was simply meditating, preparing myself for the tremendous trials ahead!\" You look around, eyes wide with feigned wisdom, though your helmet is still askew and your sword is slightly bent from the fall. The guards stare at you, clearly unconvinced but too polite to say anything. You rise to your feet with exaggerated grace, making sure to lift your sword high, even though it’s practically useless at this point. \"Now, on to the princess!\" you announce triumphantly, only to trip again, this time over your own shoelaces. You manage to catch yourself against a wall, but the guards, unable to contain themselves any longer, burst into laughter.<br><br>\"Ah, yes, very meditative,\" one guard chuckles. \"Shall we take you to the princess now?\"",
		btnText: ["Laugh along and announce that you planned the entire thing to bring joy to the kingdom?", "Grumble under your breath, pick up your sword, and ask them to show you to the princess before you reconsider your heroic commitment?"],
		btnFunctions: [A11211E, A11212E]
	},
	{
		sceneID: "A1122E",
		sceneText: "You decide that maybe it’s best to let someone else take the reins for a bit. You close your eyes, letting the hum of the castle’s quiet activity lull you into a state of mild resignation. It’s not so bad here on the floor. The cold stone feels nice against your face, almost like it’s consoling you. Plus, there’s no one around to see your shame. After a few moments of peace, you hear footsteps approach, but you don’t open your eyes&#8212you’re too busy contemplating the complexity of your current life choices.<br><br>\"Uh...sir?\" the voice comes again, much closer this time. \"You’re still on the floor.\"<br><br>You sigh and roll over, blinking up at the concerned-looking guard. \"I...I think I’m just going to stay here for a while,\" you say. \"I've decided to start a new quest&#8212a quest for self-discovery and naps.\"",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A1211",
		sceneText: "You nod with a deep, understanding sigh, already anticipating the future tales of this moment where even the mightiest of knights must submit to bureaucracy. \"Of course, my good man. After all, a well-rescued princess deserves nothing less than a thorough review.\" You take the survey form, which has suspiciously detailed questions like, \"On a scale of 1 to 5, how would you rate the princess's overall rescueability?\" and \"Did you encounter any unexpected obstacles? (Please circle all that apply: *dragon, *troll, *disgruntled jester).\"<br><br>As you skim through it, the guard hands you a tiny scroll. \"This is your official 'Quest Completed' certificate,\" he says with a wink. \"We just have to mark the 'pending rescue' box until you finish.\"<br><br>You stare at the certificate. \"Right. Well then, off I go!\" You give a half-hearted salute and march off toward the castle, still clutching your new paperwork and survey form, wondering if you’ve entered a quest or an office job.",
		btnText: ["Find the princess immediately, ignoring the mountain of paperwork waiting for later?", "Ask the guard if there’s a 'rush' option to get the paperwork stamped faster?"],
		btnFunctions: [A12111E, A12112E]
	},
	{
		sceneID: "A1212E",
		sceneText: "You raise an eyebrow, clearly unimpressed. \"A survey? I’m on a <em>quest</em> to rescue the princess, not fill out feedback forms for the kingdom’s bureaucracy!\"<br><br>The guard’s smile doesn’t waver. \"It’s policy, Sir Cedric. But you can do the survey after your heroic deeds, of course.\"<br><br>You glance around, realizing no one seems concerned about your quest’s urgency. With a dramatic sigh, you nod. \"Fine. I'll do the survey after I save the princess. But it better not be all 'strongly agree' or 'strongly disagree,' you hear me?\"<br><br>You march toward the tower, only to pause at a nearby tavern. \"Maybe one drink first,\" you mutter to yourself, \"for courage.\"<br><br>The guard watches you leave, a smirk tugging at the corner of his mouth. \"Good luck with that, Sir Cedric. And don't forget the survey!\"<br><br>You may never make it to the princess, but at least you’ll be able to say you gave your feedback on the process.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A1221E",
		sceneText: "You take the quill in hand and scribble through the form as quickly as possible, trying to maintain the air of dignity you’ve worked so hard to build. \"Rescue mission, no special requests, no complaints about the royal throne room,\" you mutter to yourself as you hastily check boxes. You hand the clipboard back to the guard, who nods approvingly. \"All set, Sir Cedric. You’re good to go.\"<br><br>With a deep sigh, you march toward the castle, paperwork complete. But as you reach the grand entrance, the castle doors swing open, revealing a giant feast laid out in the courtyard. The princess stands at the center, laughing with a group of fellow adventurers. \"Oh, Cedric!\" she calls out, waving enthusiastically. \"I thought you were still filling out your forms! We’ve been waiting for you!\"<br><br>Turns out, the princess didn’t need rescuing at all&#8212she had been enjoying a perfectly fine day. The quest was, in fact, a royal <em>prank</em> orchestrated to test your willingness to follow bureaucratic protocol. You stand there, defeated, as the guards laugh and offer you a plate of roasted boar. At least you have your forms&#8212and your free armor repair benefits&#8212for the next adventure.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A1222E",
		sceneText: "With a defiant glare, you toss the clipboard aside and march straight to the castle gates, sword held high. \"I am Sir Cedric!\" you bellow. \"And I shall not be delayed by trivial matters!\" The guards look on in stunned silence as you bypass the paperwork and stride toward your destiny.<br><br>But as you reach the gates, they slam shut right in front of you, the thud echoing through the courtyard. \"Sorry, Sir Cedric,\" one of the guards calls through the bars. \"No entry without proper documentation. Kingdom policy.\"<br><br>You try to reason with them, your knightly dignity all but gone. \"But I was told that there was a <em>heroic probation</em> option for those who didn't complete the paperwork...?\"<br><br>\"Oh yeah,\" the guard nods, and hope sparks in your chest. \"Sorry, no, that policy was discontinued a few weeks ago.\"<br><br>Defeated, you wander off to the nearest tavern, muttering about how no <em>true hero</em> should ever have to deal with paperwork. At least the tavern serves a fine ale, even if it's not the epic battle you had envisioned. The princess, you later hear, was having a great time at the royal kitchen.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2111E",
		sceneText: "You stand tall, ignoring the nagging voice in your head that tells you this might be going horribly wrong. \"Indeed, Princess!\" you announce, raising your voice for maximum effect. \"I, Sir Cedric, am not just here to rescue you, but to embark on a daring quest, filled with danger, intrigue, and&#8212\"<br><br>\"Yeah, yeah, I get it,\" she interrupts, stepping out of the doorway with a smirk. \"Rescue, danger, <em>daring quests</em>&#8212but here's the thing.\" She gestures to the stone walls, the lack of any visible threat, and then to your helmet, which is still precariously perched on your head. \"I’ve been in this tower for weeks, and you're the third 'knight' to knock on my door today. All you had to do was open it.\"<br><br>Your jaw drops. \"What?\"<br><br>\"Yep,\" she shrugs. \"The door was never locked. Just didn’t want to do it myself.\"<br><br>You stand there, your dramatic monologue hanging in the air like a balloon that’s just been popped. You glance at the guards, who are peeking around the corner and laughing quietly. The princess steps past you, heading down the stairs without a care in the world.<br><br>\"Thanks for the dramatic flair, though. Made my afternoon.\" She waves as she walks away, leaving you standing there, alone with your helmet and a newfound respect for door handles.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2112E",
		sceneText: "You take a deep breath and dial back the theatrics. \"Forgive me, Princess,\" you say, your tone softening. \"I may not be the most refined knight, but I’m here to help however I can. Do you need assistance escaping the tower? A...rope, perhaps?\"<br><br>She tilts her head, studying you like a particularly puzzling riddle. Then, with a small, exasperated sigh, she steps fully into view. \"I don’t need a rope,\" she says, pointing to a perfectly functional staircase behind her. \"I’ve been waiting for a knight to come rescue me for days, but honestly, I think I could’ve just walked out if someone had bothered to open the gates.\"<br><br>You stare at her, blinking. \"Wait... you mean you could’ve left at any time?\"<br><br>She gives a half-smile. \"More or less. But now you’re here, so I guess we can make it official.\" She gestures grandly. \"Shall we go? You can call it a successful rescue.\"<br><br>Feeling equal parts relieved and embarrassed, you offer your arm, and she takes it with a grin. As you escort her down the winding path to the gates, the guards applaud sarcastically. The mustachioed one calls out, \"A true hero! Don’t forget to write this one down in the history books!\"<br><br>You groan inwardly but smile at the princess. \"So, uh, do you do this sort of thing often?\"<br><br>She chuckles. \"Not anymore. Next time, I’ll just send a letter.\"",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2121",
		sceneText: "You straighten up, trying to regain some semblance of dignity. \"I am here,\" you announce, attempting to make your voice as deep and heroic as possible, \"to rescue you, Princess. Your safety is my utmost priority, and no slippery stone or muddy armor will stand in my way.\"<br><br>She tilts her head, clearly fighting back another grin. \"My hero,\" she says dryly, gesturing toward the dark, winding staircase behind her. \"Feel free to proceed. There are only about a hundred steps, most of them broken, and I think I heard something hissing up there earlier. But don’t let that stop you.\" Her words are teasing, but her eyes hold a flicker of curiosity. It’s clear she’s waiting to see what you’ll do next.",
		btnText: ["Charge up the staircase with gusto, determined to prove your bravery?", "Pause and ask her what kind of “hissing” she heard...just in case?"],
		btnFunctions: [B21211E, B21212E]
	},
	{
		sceneID: "B2122E",
		sceneText: "You grin, deciding that if you’re going down, you’re going down with humor. \"Oh, absolutely. Slippery stones are the true nemesis of knights everywhere,\" you say, brushing off your armor theatrically. \"Forget dragons&#8212it’s uneven terrain that gets us every time.\"<br><br>The princess lets out a genuine laugh, the kind that fills the quiet tower with warmth. \"Well, Sir Knight, I think you’ve managed to charm me more than any dramatic rescue could,\" she says, stepping aside to let you in. \"Come on, let’s get you cleaned up before you trip over something else.\"<br><br>As you follow her inside, mud-splattered but smiling, you realize that maybe you don’t need grand speeches or perfect armor to be a hero&#8212sometimes, a little humility and humor are enough.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2211E",
		sceneText: "With a shout that’s equal parts bravery and panic, you burst through the door, sword raised high. \"Unhand the princess, foul beast!\" you bellow. Inside, the candlelight flickers, revealing a modestly furnished room&#8212and a very startled young woman sitting at a small table, halfway through a bowl of soup. She blinks at you, a spoon frozen in midair.<br><br>\"You’re… not a dragon,\" you mutter, lowering your sword.<br><br>\"No, but you <em>are</em> an idiot,\" she replies, setting the spoon down. \"I’m the princess, and I’m perfectly fine. The dragon? Gone ages ago. He got bored of kidnapping people and opened a bakery in the next kingdom.\"<br><br>You stand there, slack-jawed, as the princess sighs and gestures toward a chair. \"Well, since you’re here, sit down. You might as well tell me how you got past the guards without them laughing you off the property.\"<br><br>And so, instead of a heroic rescue, your adventure ends with soup, sarcasm, and a princess far more capable than you ever expected. At least she doesn’t seem to mind your squeaky armor too much.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B2212E",
		sceneText: "You lean forward, carefully peering through the crack in the door. Inside, you see a grand chamber lit by dozens of candles. In the center sits the princess, humming softly as she sips tea from a delicate porcelain cup. At her feet lies the source of the growl&#8212a massive, scaly dragon curled up like an overgrown lapdog. It opens one lazy eye, spots you, and lets out a deep huff before closing it again.<br><br>The princess glances toward the door, her brow arching in mild curiosity. \"You can come in, you know,\" she says, setting her teacup down. \"Clinking and creaking doesn’t exactly make for stealthy rescues.\"<br><br>You step inside, your sword still half-drawn, unsure of what to do next. The dragon snorts again, clearly unimpressed. \"Oh, don’t mind Sizzle,\" the princess says with a wave of her hand. \"He’s harmless&#8212well, mostly. Did the guards send you? They always do this. I <em>told</em> them I don’t need rescuing.\"<br><br>Stammering, you try to explain yourself, but the princess cuts you off with a laugh. \"Tell you what, Sir...?\"<br><br>\"Uh, Cedric,\" you manage.<br><br>\"Sir Cedric,\" she says, \"how about you escort me to the kitchens? I could use someone brave to carry the tea tray.\"<br><br>And just like that, your grand rescue turns into an errand run, but at least you survived. Sizzle gives a low rumble that might be a laugh as you sheepishly follow the princess out of the tower.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A11111E",
		sceneText: "You stand tall, your hands on your hips, and declare with unwavering confidence, \"I shall not be deterred! This is but the first of many broom closets I shall investigate in my search for the princess. No corner of this kingdom will remain unexplored!\" The guard stares at you, clearly torn between admiration and concern. Without waiting for a response, you march past the cleaning supplies and into a nearby hallway, eyes scanning every corner as though the princess might be hiding behind a mop bucket.<br><br>As you round the corner, you hear the guard mutter something about \"perhaps a few more knights\" and \"maybe a map,\" but it’s too late. You’re already on your next grand adventure&#8212one broom closet at a time.<br><br>And thus, the legend of Sir Cedric the <em>Not-So-Lucky</em> Knight was born&#8212not in the halls of victory, but in the dusty corners of the kingdom's forgotten storage rooms.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A11112E",
		sceneText: "You let out a long, dramatic sigh, feeling the weight of your quest finally settle on your shoulders. \"You’re right,\" you mutter, your pride a little bruised. \"A map. Yes, a map would be most helpful.\" The guard looks slightly relieved and, after a brief pause, hands you a neatly rolled parchment with a simple, yet effective, map of the castle. You glance at it, then back at the broom closet, which now seems oddly familiar. Maybe it's the dust, or maybe it’s the sense of humble realization that washes over you.<br><br>\"Well,\" you say, trying to regain some of your earlier grandeur. \"Next time, I’ll rescue the princess <em>properly.\"</em> You give the broom a final, stern look, as if it had somehow conspired against you. \"But for now, I’ll take a break. I’m sure this <em>legendary knight</em> deserves a snack.\"<br><br>And with that, you head for the castle kitchen. The princess? Well, she can wait.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A11121",
		sceneText: "You nod like you’ve just uncovered a grand secret and stride down the hallway with as much dignity as you can muster, your helmet slipping even lower on your face. The sound of your boots echo off the walls, and you feel the eyes of the guards on your back, no doubt in awe of your confidence. As you pass the first few doorways, you catch glimpses of tapestries depicting various heroic deeds&#8212none of which, you note, involve a knight tripping over his own feet. You round a corner, and there it is: a grand, beautiful stained glass window. You walk past it confidently, then glance back at it, realizing, a bit too late, that you’ve just missed the right turn by a solid twenty feet.<br><br>\"Wait a moment,\" you mutter to yourself, stopping dead in your tracks. The hallway stretches on, offering nothing but more corridors and...is that a broom closet?",
		btnText: ["Keep walking forward as if you meant to go this way all along?", "Turn around and ask the nearest servant for a map?"],
		btnFunctions: [A111211E, A111212E]
	},
	{
		sceneID: "A11122E",
		sceneText: "You nod at the guard with newfound dignity and awkwardly bow. \"Thank you, good sir,\" you say, trying to sound noble. The guard blinks but says nothing as you rise, clear your throat, and straighten your back. \"I shall perform my noble duty now!\" you declare, though you're still struggling with your helmet.<br><br>You march confidently down the hallway, finally reaching the princess’s room. Bursting through the door, you’re ready for your grand moment&#8212only to find the princess calmly sipping tea by the window. She looks up. \"Oh, hello. Didn’t know I was expecting a knight today.\"<br><br>\"Yes, I&#8212uh&#8212am here to rescue you!\" you announce, though you’re not quite sure what from. \"Or...to escort you, I guess.\"<br><br>She smiles, setting down her cup. \"Well, that's a start.\"",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A11211E",
		sceneText: "You adjust your armor and mutter, \"Let’s get this over with.\" The guards lead you to the princess, who’s sipping tea calmly.<br><br>\"Ah, my hero,\" she says, eyes twinkling. \"I didn’t need rescuing.\"<br><br>You blink. \"Oh...well then, I&#8212\"<br><br>She smiles, \"But you can stay for tea. That’s heroic enough.\"<br><br>You sit, realizing maybe the ‘rescue’ was the quiet afternoon with royalty we found along the way.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A11212E",
		sceneText: "You adjust your armor, muttering, \"Let’s get this over with.\" The guards lead you to the princess’s chambers, where she’s seated, arms crossed, glaring at you.<br><br>\"So, you’re my hero?\" she asks, voice icy. \"I don’t need rescuing.\"<br><br>You straighten up, confused. \"But I&#8212\"<br><br>She stands, cutting you off. \"I don’t have time for this. Take your incompetence elsewhere.\"<br><br>With a swift motion, she gestures toward the door. \"Leave.\"<br><br>The guards escort you from the room and the door closes firmly behind you.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A12111E",
		sceneText: "You march toward the castle, paperwork tucked under your arm, determined to be heroic. As you approach the entrance, you’re greeted by an unexpected sight: there’s a royal feast underway. Guards are milling about, some nibbling on pastries, others arguing over the best way to carve a roast boar. \"The princess?\" you ask, trying to remain composed despite the delicious aroma in the air.<br><br>\"Princess?\" The guard looks up, puzzled. \"Oh, she's in there&#8212sitting at the head table. I think she’s enjoying the roast.\"<br><br>As expected, you find the princess, seated at the head table, sipping wine. She looks up and smiles. \"Ah, Sir Cedric! Glad you could join me. The rescue’s been lovely, though I’d say I’m more in need of a dessert than a knight right now.\"<br><br>You blink. \"But...the rescue?\"<br><br>She shrugs, gesturing toward the feast. \"I’ve been here for hours. It’s quite pleasant. I’m still deciding whether to leave or not.\"<br><br>And well, you <em>are</em> hungry, and the food <em>does</em> look delicious...so the paperwork can wait.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A12112E",
		sceneText: "You ask the guard for a 'rush' on the paperwork, and after a hefty fee, he gets it stamped and hands you a form. \"You're all set, Sir Cedric,\" he says. \"Now go get your princess.\"<br><br>You march toward the castle, paperwork in hand, ready for adventure. But as you step through the gate, you are immediately stopped by another guard. \"Ah, yes, Sir Cedric. I see you have the stamp. However,\" he says, \"the princess is on a break. She won’t be available for another hour.\"<br><br>And so, you wait. And wait. And wait. You never do see the princess. You’re stuck in the castle lobby with your survey form, trying to figure out how to fill it out while sipping cold tea.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B21211E",
		sceneText: "You nod resolutely, ignoring the tightening knot in your stomach. \"Hissing or not, no obstacle shall deter me!\" you declare, stepping boldly onto the first creaky stair. It groans ominously under your weight, but you press onward, each step more wobbly than the last. The hissing sound grows louder as you climb, and you clutch your sword tighter, imagining a fearsome beast waiting at the top.<br><br>Finally, you reach the final step, bursting into the small tower room with a dramatic flourish. There, on the floor, lies the source of the noise: a small, annoyed cat, its tail flicking as it glares at you. You lower your sword, utterly deflated. The princess steps in behind you, barely containing her laughter. \"Ah, yes, Sir Cedric, the great dragon slayer,\" she says, scooping up the cat. \"Truly, you’ve saved me from...Mr. Whiskers.\"<br><br>You sigh, rubbing the back of your neck. \"Well,\" you mumble, \"he looked dangerous from the stairs.\" She laughs, and for a moment, your embarrassment fades.<br><br>Perhaps being the butt of a joke isn’t so bad if it means you get to hear her laugh again.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "B21212E",
		sceneText: "You hesitate, glancing at the staircase. \"Hissing, you say?\" you ask, trying to sound casual but fully aware your voice cracks slightly. The princess leans against the doorframe, clearly enjoying this. \"Oh, yes. Definitely hissing. Could be a snake. Could be a dragon. Could be...\" she pauses for dramatic effect, \"...the wind.\"<br><br>You nod sagely, as if this is vital information for your strategy. \"Well, as a knight, it is my duty to assess the danger thoroughly. Tell me, did the hissing sound more...snake-like or dragon-like?\"<br><br>She laughs, a sound that's surprisingly warm. \"Definitely more...wind-like. But if it’s a dragon, I’m sure it’s a very small one.\"<br><br>You grin despite yourself, and she steps aside, holding the door open. \"Come on, Sir Assessment, let’s go check it out together. I could use the company after being cooped up in here all day.\"And just like that, the princess strides confidently into the tower, leaving you standing there, slightly baffled. As you follow her up the stairs, you can’t help but think that maybe rescuing the princess wasn’t about slaying dragons after all. Sometimes, it’s about finding someone who makes the whole journey worth the stumbles.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A111211E",
		sceneText: "You puff out your chest and continue forward, pretending that every step is part of your brilliant master plan. The hallway seems to stretch on forever, but you’re determined to act like this is all intentional. Eventually, you find yourself standing in front of a large, ornate door, covered in intricate carvings that, to your very untrained eye, look like they belong to a grand library&#8212or possibly a dragon’s lair. You pause for a moment, considering your options. Then, without hesitation, you kick the door open with a dramatic flourish, fully expecting to find the princess surrounded by riches and adoring subjects.<br><br>Instead, you walk straight into what appears to be a rather mundane storage room. The room is filled with dusty old crates and rolled-up carpets, none of which scream \"royal suite.\" You blink in confusion. \"Princess?\" you call out weakly, as though expecting her to leap out of a crate with a grateful look on her face. But there’s no answer, only the faint rustling of something large and furry. A curious cat emerges from behind a crate and stares at you with disdain, clearly judging your every move.<br><br>Realizing your mistake, you stand there, awkwardly holding your sword. The door shuts behind you, leaving you trapped in the kingdom’s most neglected storage room, alone with your own misguided sense of heroism.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A111212E",
		sceneText: "You stop and turn back down the hallway, finding a servant with a tray of food. You clear your throat and ask, \"Excuse me, could you point me to the princess's room? I seem to have lost my way.\"<br><br>The servant glances at your shiny armor, your sword, and your general confusion, stifling a smile. \"Just down the hall, past the tapestry with the dragon,\" she says politely.<br><br>\"Right, of course. Tapestry with the dragon,\" you repeat, trying to sound confident. She leads you to a door and nods before leaving you to enter.<br><br>You push open the door and find the princess reading a book at a table, completely unaware of your heroic entrance. \"Ah, princess!\" you declare, raising your sword. \"I have come to rescue you!\"<br><br>She looks up, then dryly asks, \"Are you sure you're not here for tea? It’s almost snack time.\"<br><br>You freeze, sword still in hand, wondering if you’ve missed a step in this rescue business.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	},
	{
		sceneID: "A221",
		sceneText: "You charge forward with all the grace of a drunken bear, your armor clanking loudly as you stumble toward the guard. \"Prepare yourself!\" you shout, trying to sound fierce, though your legs are already wobbling under the weight of your armor.<br><br>The guard sighs, sidestepping effortlessly as you flail past him. \"Really?\" he asks, shaking his head. \"This is what I get for guarding the gate today?\" You crash into a nearby barrel, sending a cat flying into the air, and immediately feel the full embarrassment of your situation. The guard raises an eyebrow. \"Maybe...just head to the bakery before you hurt yourself?\"",
		btnText: ["Stand up, dust yourself off, and make a dignified exit to the bakery, pretending that was your plan all along?", "Challenge the cat to a duel instead, just to save face?"],
		btnFunctions: [A21, A2212E]
	},
	{
		sceneID: "A2212E",
		sceneText: "You straighten up, your pride slightly bruised but not broken. \"Aha! You think you can best me, feline? Then prepare to face the wrath of Sir Cedric!\" you shout at the now-hissing cat, who has landed gracefully and is glaring at you with a look of pure disdain. You raise your sword dramatically, but before you can even make a move, the cat leaps at you with a ferocity that would put any dragon to shame. In a flash, you’re on the ground, clutching your face as your cheek stings from a deep scratch.<br><br>The guard watches in silence, shaking his head. \"You know, I think the bakery might be safer for everyone,\" he suggests.<br><br>With a defeated sigh, you stand up, wiping away the blood and your last shred of dignity. \"Perhaps...it's time to retreat for now,\" you mutter, turning and heading toward the exit. You shuffle off, your dreams of heroism dashed, and decide that maybe your true calling is just...taking a nap at home.",
		btnText: ["Start Over?", "Start Over?"],
		btnFunctions: [startOver, startOver]
	}
];

//initialize buttons
choice1.onclick = sceneA;
choice2.onclick = sceneB;

function update(scene) {
	text.innerHTML = scene.sceneText;
	choice1.innerText = scene.btnText[0];
	choice2.innerText = scene.btnText[1];
	choice1.onclick = scene.btnFunctions[0];
	choice2.onclick = scene.btnFunctions[1];
}

function sceneA() {
	update(story[0]);
}

function sceneB() {
	update(story[1]);
}

function A1() {
	update(story[2]);
}

function A2() {
	update(story[3]);
}

function B1() {
	update(story[4]);
}

function B2() {
	update(story[5]);
}

function A11() {
	update(story[6]);
}

function A12() {
	update(story[7]);
}

function A21() {
	update(story[8]);
}

function A22() {
	update(story[9]);
}

function B21() {
	update(story[10]);
}

function B22() {
	update(story[11]);
}

function A111() {
	update(story[12]);
}

function A112() {
	update(story[13]);
}

function A121() {
	update(story[14]);
}

function A122() {
	update(story[15]);
}

function A211E() {
	update(story[16]);
}

function A212E() {
	update(story[17]);
}

function B211() {
	update(story[18]);
}

function B212() {
	update(story[19]);
}

function B221() {
	update(story[20]);
}

function B222E() {
	update(story[21]);
}

function A1111() {
	update(story[22]);
}

function A1112() {
	update(story[23]);
}

function A1121() {
	update(story[24]);
}

function A1122E() {
	update(story[25]);
}

function A1211() {
	update(story[26]);
}

function A1212E() {
	update(story[27]);
}

function A1221E() {
	update(story[28]);
}

function A1222E() {
	update(story[29]);
}

function B2111E() {
	update(story[30]);
}

function B2112E() {
	update(story[31]);
}

function B2121() {
	update(story[32]);
}

function B2122E() {
	update(story[33]);
}

function B2211E() {
	update(story[34]);
}

function B2212E() {
	update(story[35]);
}

function A11111E() {
	update(story[36]);
}

function A11112E() {
	update(story[37]);
}

function A11121() {
	update(story[38]);
}

function A11122E() {
	update(story[39]);
}

function A11211E() {
	update(story[40]);
}

function A11212E() {
	update(story[41]);
}

function A12111E() {
	update(story[42]);
}

function A12112E() {
	update(story[43]);
}

function B21211E() {
	update(story[44]);
}

function B21212E() {
	update(story[45]);
}

function A111211E() {
	update(story[46]);
}

function A111212E() {
	update(story[47]);
}

function A221() {
	update(story[48]);
}

function A2212E() {
	update(story[49]);
}

function startOver() {
	window.location.reload();
}
