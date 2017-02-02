var TwitterPackage = require('twitter');
var em = require('node-emoji');

var secret = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
}
var Twitter = new TwitterPackage(secret);

funtion bot(){
	var rN = Math.floor(Math.random() * 13);
	var randPinta = Math.floor(Math.random() * 4);

	var pB = em.get("white_large_square");

	var pPic = em.get("spades");
	var pDia = em.get("diamonds");
	var pTre = em.get("clubs");
	var pCor = em.get("hearts");
	var pintas = [pPic, pDia, pTre, pCor];

	var nums = [em.get("a"),
				em.get("two"),
				em.get("three"),
				em.get("four"),
				em.get("five"),
				em.get("six"),
				em.get("seven"),
				em.get("eight"),
				em.get("nine"),
				em.get("keycap_ten"),
				em.get("boy"),
				em.get("woman"),
				em.get("man")];

	var ns = [	[1,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
				[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
				[1,1,1,0,0,1,0,1,1,0,0,1,1,1,1],
				[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
				[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
				[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
				[1,1,1,0,0,1,0,1,1,0,0,1,0,0,1],
				[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
				[1,1,1,1,0,1,1,1,1,0,0,1,1,1,1],
				[1,1,1,0,1,0,0,1,0,0,1,0,0,1,0],
				[1,1,1,0,1,0,0,1,0,0,1,0,1,1,0],
				[1,1,1,1,0,1,1,0,1,1,1,1,0,1,0],
				[1,0,1,1,0,1,1,1,0,1,0,1,1,0,1]
				];

	var strToPost = nums[rN] + pB + pB + pB + pB + pB + pB + "\n" +
					pintas[randPinta] + pB + pB + pB + pB + pB + pB + "\n" +
					pB + pB + fillLine(0) + pB + pB + "\n" +
					pB + pB + fillLine(1) + pB + pB + "\n" +
					pB + pB + fillLine(2) + pB + pB + "\n" +
					pB + pB + fillLine(3) + pB + pB + "\n" +
					pB + pB + fillLine(4) + pB + pB + "\n" +
					pB + pB + pB + pB + pB + pB + pintas[randPinta] + "\n" +
					pB + pB + pB + pB + pB + pB + nums[rN];

	function fillLine(i){
		var st = "";
		for (var j = 0; j < 3; j++){
			if (ns[rN][3 * i + j]){
				st += pintas[randPinta];
			} else {
				st += pB;
			}
		}
		return st;
	}

	Twitter.post('statuses/update', {status: strToPost},  function(error, tweet, response){
	  if(error){
		//console.log(error);
	  }
	  //console.log(tweet);  // Tweet body.
	  //console.log(response);  // Raw response object.
	});
}
	
setInterval(function() {
  try {
    run();
  }
  catch (e) {
    console.log(e);
  }
}, 600000);