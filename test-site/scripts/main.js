
const data = [
	{
		name : "Basic 1",
		vocabulary: [
			{
				word : "こんにちは ",
				meaning : "hello",
				examples: [
					{
						sentence : "こんにちは、トム。",
						translation : "Hello, Tom."
					},
					{
						sentence : "こんにちは、スーザン。お元気ですか。",
						translation : "Hi, Susan. How are you?"
					},
				]
			},
			{
				word : "父／お父さん",
				meaning : "dad",
				examples: [
					{
						sentence : "こんにちは、お父さん",
						translation : "Hello, dad"
					},
					{
						sentence : "私は父です",
						translation : "I am a dad"
					},
				]
			},
			{
				word : "息子",
				meaning : "son",
				examples : [
					{
						sentence : "私は息子です。",
						translation : "I am a son"
					},
				]
			},
			{
				word : "さようなら",
				meaning : "goodbye",
				examples : [
					{
						sentence : "彼女はさようならと言った。",
						translation : "She said goodbye."
					},
					{
						sentence : "さようなら。また会いましょう。",
						translation : "I'll be seeing you."
					}
				]
			},
			{
				word : "私",
				meaning : "I",
				examples : [
					{
						sentence : "私は息子です。",
						translation : "I am a son."
					},
				]
			},
			{
				word : "彼",
				meaning : "he",
				examples : [
					{
						sentence : "彼は父です。",
						translation : "He is a dad."
					},
				]
			},
			{
				word : "母／お母さん",
				meaning : "mom",
				examples : [
					{
						sentence : "私は母です。",
						translation : "I am a mom."
					},
				]
			},
			{
				word : "娘",
				meaning : "daughter",
				examples : [
					{
						sentence : "私は娘です。",
						translation : "I am a daughter."
					},
				]
			},
			{
				word : "彼女",
				meaning : "she",
				examples : [
					{
						sentence : "彼女は母です。",
						translation : "She is a mom."
					},
				]
			},
			{
				word : "貴方",
				meaning : "you",
				examples : [
					{
						sentence : "貴方は娘です。",
						translation : "You are a daughter"
					},
				]
			},
		],
		grammer: [
			{
				word : "は",
				meaning : "It indicates that the noun before it is the topic.",
				examples: [
					{
						sentence : "彼は父です。",
						translation : "He is a dad."
					},
				]
			},
			{
				word : "です",
				meaning : "です is placed after thecomplement noun to indicatejudgement or assertion; です shows the politeness ofthe speaker to the listener; です changes its form innegative sentence.",
				examples: [
					{
						sentence : "私は父です。",
						translation : "I am a dad."
					},
				]
			}
		],
		expressions: [
			{
				word : "noun1 は noun2 です",
				meaning : "noun1 is noun2",
				examples: [
					{
						sentence : "彼は父です。",
						translation : "He is a dad."
					},
				]
			},
		],
		test: [
			{
				sentence : "私は父です",
				translation : "I am a dad"
			},
			{
				sentence : "私は息子です",
				translation : "I am a son"
			},
			{
				sentence : "私は母です",
				translation : "I am a mom"
			},
			{
				sentence : "彼女は母です",
				translation : "She is a mom"
			},
			{
				sentence : "彼は父です",
				translation : "He is a dad"
			},
		]
	},
	{
		name : "Basic 2",
		vocabulary: [
			{
				word : "日本",
				meaning : "Japan",
				examples : [
					{
						sentence : "彼女は日本人じゃありません",
						translation : "彼女は日本人じゃありません"
					},
				]
			},
			{
				word : "アメリカ",
				meaning : "America",
				examples : [
					{
						sentence : "私達はアメリカ人じゃありません",
						translation : "We are not American"
					},
				]
			},
			{
				word : "猫",
				meaning : "cat",
				examples : [
					{
						sentence : "私達は猫が好きです",
						translation : "We like cat too"
					},
				]
			},
			{
				word : "犬",
				meaning : "dog",
				examples : [
					{
						sentence : "彼らは犬が好きです",
						translation : "They like dogs"
					},
				]
			},
			{
				word : "好き",
				meaning : "like",
				examples : [
					{
						sentence : "私達も貴方が好きです",
						translation : "We like you too"
					},
				]
			},
		],
		grammer: [
			{
				word : "人",
				meaning : "country name + 人  means the person of that country",
				examples : [
					{
						sentence : "日本人",
						translation : "Japanese"
					},
					{
						sentence : "アメリカ人",
						translation : "American"
					}
				]
			},
			{
				word : "じゃありません",
				meaning : "It's a negative form of です",
				examples : [
					{
						sentence : "彼女らはあなたが好きじゃありません",
						translation : "They don't like you"
					},
				]
			},
			{
				word : "達",
				meaning : "私達",
				examples : [
					{
						sentence : "私達",
						translation : "we"
					},
					{
						sentence : "貴方達",
						translation : "you guys"
					}
				]
			},
			{
				word : "も",
				meaning : "も",
				examples : [
					{
						sentence : "私達も貴方が好きです",
						translation : "We like you too"
					},
				]
			},
			{
				word : "ら",
				meaning : "plural pronouns",
				examples : [
					{
						sentence : "彼ら",
						translation : "they ( boys )"
					},
					{
						sentence : "they ( boys )",
						translation : "they ( girls )"
					}
				]
			},
		],
		expressions: [
			{
				word : "sb. は something が好きです",
				meaning : "sb. like(s) something",
				examples : [
					{
						sentence : "私はが好きです",
						translation : "I like you"
					},
				]
			},
		],
		test: [
			{
				sentence : "彼女は日本人じゃありません",
				translation : "She isn't Japanese"
			},
			{
				sentence : "私達はアメリカ人じゃありません",
				translation : "We are not American"
			},
			{
				sentence : "私達は猫が好きです",
				translation : "We like cat too"
			},
			{
				sentence : "彼らは犬が好きです",
				translation : "They like dogs"
			},
			{
				sentence : "彼女らはあなたが好きじゃありません",
				translation : "They don't like you"
			},
			{
				sentence : "私達も貴方が好きです",
				translation : "We like you too"
			},
		]
	},
	{
		name : "Family",
		vocabulary: [
			{
				word : "お兄さん",
				meaning : "older bro",
				examples : [
					{
						sentence : "私達はお兄さんがいません",
						translation : "We have a older brother"
					},
				]
			},
			{
				word : "お姉さん",
				meaning : "older sister",
				examples : [
					{
						sentence : "彼女は私のお姉さんじゃありません",
						translation : "She isn't my older sister"
					},
					{
						sentence : "彼らも貴方のお姉さんが好きです",
						translation : "They like your older sister too"
					},
				]
			},

			{
				word : "弟",
				meaning : "younger bro",
				examples : [
					{
						sentence : "彼は私の弟です",
						translation : "He is my younger brother"
					},
				]
			},

			{
				word : "妹",
				meaning : "younger sister",
				examples : [
					{
						sentence : "貴方の妹は犬がいます",
						translation : "Your younger sister has a dog"
					},
				]
			},

		],
		grammer: [
			{
				word : "の",
				meaning : "It's used to indicate possession",
				examples : [
					{
						sentence : "私の猫",
						translation : "My cat"
					},
				]
			},
			{
				word : "がいます",
				meaning : "It's used to describe the palce, the existence of an object ( moving ), or the person.",
				examples : [
					{
						sentence : "犬がいます",
						translation : "犬がいます"
					},
				]
			},
			{
				word : "があります",
				meaning : "It's used to describe the palce, the existence of an object ( non-moving ), or the plant.",
				examples : [
					{
						sentence : "鉛筆があります",
						translation : "There are pencils"
					},
				]
			},

			{
				word : "がいません",
				meaning : "It's a negative form of がいます",
				examples : [
					{
						sentence : "犬がいません",
						translation : "There is no dog"
					},
				]
			},

			{
				word : "がありません",
				meaning : "It's a negative form of があります",
				examples : [
					{
						sentence : "がありません",
						translation : "There are no pencils"
					},
				]
			},

		],
		expressions: [
			{
				word : "It's a negative form of です",
				meaning : "sb. have/has something",
				examples : [
					{
						sentence : "私は猫がいます",
						translation : "私は猫がいます"
					},
					{
						sentence : "私は鉛筆があります",
						translation : "私は鉛筆があります"
					}
				]
			},
			{
				word : "sb. は something がいません/ がありません",
				meaning : "sb. don't/dosen't have something",
				examples : [
					{
						sentence : "私は猫がいません",
						translation : "I don't have a cat"
					},
					{
						sentence : "私は鉛筆がありません",
						translation : "I don't have a pencil"
					}
				]
			},
		],
		test: [
					{
						sentence : "私達はお兄さんがいません",
						translation : "We have a older brother"
					},
					{
						sentence : "彼女は私のお姉さんじゃありません",
						translation : "She isn't my older sister"
					},
					{
						sentence : "彼らも貴方のお姉さんが好きです",
						translation : "They like your older sister too"
					},
					{
						sentence : "彼は私の弟です",
						translation : "He is my younger brother"
					},
					{
						sentence : "貴方の妹は犬がいます",
						translation : "Your younger sister has a dog"
					},
					{
						sentence : "私は猫がいます",
						translation : "私は猫がいます"
					},
					{
						sentence : "私は鉛筆があります",
						translation : "私は鉛筆があります"
					},
					{
						sentence : "私は猫がいません",
						translation : "I don't have a cat"
					},
					{
						sentence : "私は鉛筆がありません",
						translation : "I don't have a pencil"
					},
		]
	},
	{
		name: "Animals",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Dish",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Complemen",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Ask & Answer",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Place",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Numbers",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Time",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Time 2",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Directions",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Traffic",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Week & Month",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
	{
		name: "Daily life 1",
		vocabulary: [

		],
		grammer: [

		],
		expressions: [

		],
		test: [

		]
	},
]

let currentLessonId = 0;
let currentQuestionId = 0;
let menu = document.getElementById("menu");
let lesson = document.getElementById("lesson");
let lessonName = document.getElementById("lessonName");
let vocabulary = document.getElementById("vocabulary");
let grammer = document.getElementById("grammer");
let expressions = document.getElementById("expressions");
let test = document.getElementById("test"); 
let testSentence = document.getElementById("testSentence"); 
let testarea = document.getElementById("testarea");
let check = document.getElementById("check");
let answer = document.getElementById("answer");


for ( let i = 0; i < data.length; i++ ) {
	let div = document.createElement("div");
	div.setAttribute("onclick", "showLesson(" + i +")");
	div.appendChild(document.createTextNode(data[i].name));
	menu.appendChild(div);
}

function playSound( src ) {
    let sound = document.createElement('audio');
    sound.src = src;
    sound.play(); 
}

function showLesson(lessonId) {
	if ( lessonId > 2 ) {
		alert("目前只有前三节课有内容");
		return;
	}
	lessonName.innerHTML = data[lessonId].name;
	currentLessonId = lessonId;
	while ( vocabulary.hasChildNodes() ) {  
		vocabulary.removeChild(vocabulary.firstChild);
	}
	while ( grammer.hasChildNodes() ) {  
		grammer.removeChild(grammer.firstChild);
	}
	while ( expressions.hasChildNodes() ) {  
		expressions.removeChild(expressions.firstChild);
	}
	for ( let i = 0; i < data[lessonId].vocabulary.length ; i++ ) {
		let theWord = data[lessonId].vocabulary[i];
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		box.setAttribute("onclick", "showExamples(this)");
		let word = document.createElement("div");
		word.innerHTML = '<div>'+theWord.word+'&nbsp;&nbsp; <div class="meaning">'+theWord.meaning+'</div></div>';
		let examples = document.createElement("div");
		examples.setAttribute("class", "examples");
		examples.appendChild(document.createElement("hr"));
		for ( let j = 0; j < theWord.examples.length; j++ ) {
			let sentence = document.createElement("p");
			let translation = document.createElement("p");
			sentence.setAttribute("class", "sentence");
			translation.setAttribute("class", "translation");
			sentence.innerHTML = theWord.examples[j].sentence;
			translation.innerHTML = theWord.examples[j].translation;
			examples.appendChild(sentence);
			examples.appendChild(translation);
		}
		box.appendChild(word);
		box.appendChild(examples);
		vocabulary.appendChild(box);
	}
	for ( let i = 0; i < data[lessonId].grammer.length ; i++ ) {
		let theWord = data[lessonId].grammer[i];
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		box.setAttribute("onclick", "showExamples(this)");
		let word = document.createElement("div");
		word.innerHTML = '<div>'+theWord.word+'</div>';
		let examples = document.createElement("div");
		examples.setAttribute("class", "examples");
		examples.appendChild(document.createElement("hr"));
		let meaning = document.createElement("p");
		meaning.setAttribute("class", "sentence");
		meaning.innerHTML = theWord.meaning;
		examples.appendChild(meaning);
		examples.appendChild(document.createElement("hr"));
		for ( let j = 0; j < theWord.examples.length; j++ ) {
			let sentence = document.createElement("p");
			let translation = document.createElement("p");
			sentence.setAttribute("class", "sentence");
			translation.setAttribute("class", "translation");
			sentence.innerHTML = theWord.examples[j].sentence;
			translation.innerHTML = theWord.examples[j].translation;
			examples.appendChild(sentence);
			examples.appendChild(translation);
		}
		box.appendChild(word);
		box.appendChild(examples);
		grammer.appendChild(box);
	}
	for ( let i = 0; i < data[lessonId].expressions.length ; i++ ) {
		let theWord = data[lessonId].expressions[i];
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		box.setAttribute("onclick", "showExamples(this)");
		let word = document.createElement("div");
		word.innerHTML = '<div>'+theWord.word+'&nbsp;&nbsp; <div class="meaning">'+theWord.meaning+'</div></div>';
		let examples = document.createElement("div");
		examples.setAttribute("class", "examples");
		examples.appendChild(document.createElement("hr"));
		for ( let j = 0; j < theWord.examples.length; j++ ) {
			let sentence = document.createElement("p");
			let translation = document.createElement("p");
			sentence.setAttribute("class", "sentence");
			translation.setAttribute("class", "translation");
			sentence.innerHTML = theWord.examples[j].sentence;
			translation.innerHTML = theWord.examples[j].translation;
			examples.appendChild(sentence);
			examples.appendChild(translation);
		}
		box.appendChild(word);
		box.appendChild(examples);
		expressions.appendChild(box);
	}
	menu.style.display = "none";
	lesson.style.display = "block";
}

function resetTest() {
	currentLessonId = 0;
	currentQuestionId = 0;
	answer.style.display = "none";
	check.style.backgroundColor = "#99e6ff";
	check.innerHTML = "Check";
	testarea.value = null;
}

function backToMenu() {
	lesson.style.display = "none";
	test.style.display = "none";
	menu.style.display = "block";
	resetTest();
}

function showExamples(element) {
	if ( element.lastChild.style.display === "none" ) {
		element.lastChild.style.display = "block";
		element.style.boxShadow = "0.3px 0.3px 6px skyblue";
	}
	else {
		element.lastChild.style.display = "none";
		element.style.boxShadow = "0.3px 0.3px 2px #bbb";
	}
}

function showTest() {
	testSentence.innerHTML = data[currentLessonId].test[0].translation;
	document.getElementById("testName").innerHTML = "1/" + data[currentLessonId].test.length;
	lesson.style.display = "none";
	test.style.display = "block";
}

function backToLesson() {
	test.style.display = "none";
	showLesson(currentLessonId);
	resetTest();
}

function checkAnswer() {
	if ( data[currentLessonId].test[currentQuestionId].sentence === testarea.value ) {
	    check.style.backgroundColor = "#80ff80";
	    check.innerHTML = "Correct!";
	    playSound("sound/correct1.mp3");
	} else {
		playSound("sound/wrong1.wav");
		check.style.backgroundColor = "#ff6666";
		check.innerHTML = "Wrong!";
		while ( answer.hasChildNodes() ) {  
			answer.removeChild(answer.firstChild);
		}
		let sentence = document.createElement("p");
		let translation = document.createElement("p");
		sentence.setAttribute("class", "sentence");
		translation.setAttribute("class", "translation");
		sentence.innerHTML = data[currentLessonId].test[currentQuestionId].sentence;
		translation.innerHTML = data[currentLessonId].test[currentQuestionId].translation;
		answer.appendChild(sentence);
		answer.appendChild(translation);
		answer.style.display = "block";
	}
}

function nextQuestion() {
	answer.style.display = "none";
	check.style.backgroundColor = "#99e6ff";
	check.innerHTML = "Check";
	testarea.value = null;
	if ( currentQuestionId >= data[currentLessonId].test.length-1 ) {
		currentQuestionId = 0;
	} else {
		currentQuestionId++;
	} 	
	document.getElementById("testName").innerHTML = currentQuestionId+1+"/"+data[currentLessonId].test.length;
	testSentence.innerHTML = data[currentLessonId].test[currentQuestionId].translation;
}


// console.log( testarea.innerHTML );
/*
				sentence : "私は父です",
				translation : "I am a dad"
			},
			{
				sentence : "私は息子です",
				translation : "I am a son"
			},
			{
				sentence : "私は母です",
				translation : "I am a mom"
			},
			{
				sentence : "彼女は母です",
				translation : "She is a mom"
			},
			{
				sentence : "彼は父です",
				translation : "He is a dad"
			},
*/