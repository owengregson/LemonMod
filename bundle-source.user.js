// ==UserScript==
// @name         ! LemonMod - Visuals !
// @namespace    https://lemonmod.com/
// @version      v3.0
// @description  Visuals for LemonMod
// @author       LemonFlux
// @match        *://*.moomoo.io/*
// @icon         https://lemonmod.com/LemonMod.png
// @grant        none
// ==/UserScript==
/*

888                                              888b     d888               888      888     888 d8b                            888
888                                              8888b   d8888               888      888     888 Y8P                            888
888                                              88888b.d88888               888      888     888                                888
888      .d88b.  88888b.d88b.   .d88b.  88888b.  888Y88888P888  .d88b.   .d88888      Y88b   d88P 888 .d8888b  888  888  8888b.  888 .d8888b
888     d8P  Y8b 888 "888 "88b d88""88b 888 "88b 888 Y888P 888 d88""88b d88" 888       Y88b d88P  888 88K      888  888     "88b 888 88K
888     88888888 888  888  888 888  888 888  888 888  Y8P  888 888  888 888  888        Y88o88P   888 "Y8888b. 888  888 .d888888 888 "Y8888b.
888     Y8b.     888  888  888 Y88..88P 888  888 888   "   888 Y88..88P Y88b 888         Y888P    888      X88 Y88b 888 888  888 888      X88
88888888 "Y8888  888  888  888  "Y88P"  888  888 888       888  "Y88P"   "Y88888          Y8P     888  88888P'  "Y88888 "Y888888 888  88888P'



                                 ("O_)
                                / `-/
                               /-. /
                              /   )
                             /   /
                _           /-. /
               (_)"-._     /   )           888                     888                                               8888888888 888
                 "-._ "-'""( )/            888                     888                                               888        888
                     "-/"-._" `.           888                     888                                               888        888
                      /     "-.'._         88888b.  888  888       888       .d88b.  88888b.d88b.   .d88b.  88888b.  8888888    888 888  888 888  888
                     /\       /-._"-._     888 "88b 888  888       888      d8P  Y8b 888 "888 "88b d88""88b 888 "88b 888        888 888  888 `Y8bd8P'
      _,---...__    /  ) _,-"/    "-(_)    888  888 888  888       888      88888888 888  888  888 888  888 888  888 888        888 888  888   X88K
  ___<__(|) _   ""-/  / /   /              888 d88P Y88b 888       888      Y8b.     888  888  888 Y88..88P 888  888 888        888 Y88b 888 .d8""8b.
   '  `----' ""-.   \/ /   /               88888P"   "Y88888       88888888  "Y8888  888  888  888  "Y88P"  888  888 888        888  "Y88888 888  888
                 )  ] /   /                              888
         ____..-'   //   /                    )     Y8b d88P
     ,-""      __.,'/   /   ___               /       "Y88P"
    /    ,--""/  / /   /,-""   """-.        '/
   [    (    /  / /   /  ,.---,_   `._   ,-,'
    \    `-./  / /   /  /       `-._  """ ,-
     `-._  /  / /   /_,'            ""--"
         "/  / /   /"
         /  / /   /
        /  / /   /
       /  |,'   /
      :   /    /
      [  /   ,'
      | /  ,'
      |/,-'
      P'

*/
function eraseCookie(e) {
	document.cookie = e + "=; Max-Age=-99999999;"
}

function setCookie(e, t, n) {
	var r = "";
	if(n) {
		var i = new Date;
		i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + i.toUTCString()
	}
	document.cookie = e + "=" + (t || "") + r + "; path=/; domain=moomoo.io"
}

function getCookie(e) {
	for(var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
		for(var i = n[r];
			" " == i.charAt(0);) i = i.substring(1, i.length);
		if(0 == i.indexOf(t)) return i.substring(t.length, i.length)
	}
	return null
}
document.cookie = "usingFinalBundle=1", document.cookie = "usingVisuals=1";
var primaryReload = [],
	secondaryReload = [],
	turretReload = [];
let R = CanvasRenderingContext2D.prototype.rotate,
	e = {
		39912: () => {
			Math.min(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 12999999999999997e292, 6e305, 1e307, 7e304), Math.max(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 12999999999999997e292, 6e305, 1e307, 7e304);
			return [fetch, null]
		},
		31: () => (CanvasRenderingContext2D.prototype.rotate = function() {
			(arguments[0] >= Number.MAX_SAFE_INTEGER || arguments[0] <= -Number.MAX_SAFE_INTEGER) && (arguments[0] = 0), R.apply(this, arguments)
		}, atob("aHR0cHM6Ly9rc3cyLWNlbnRlci5nbGl0Y2gubWUvbW1fYWliXzE=")),
		9012: () => {
			fetch(e[31]())
		},
		3912: () => "CanvasRenderingContext2D",
		9481: () => CanvasRenderingContext2D.prototype.rotate,
		7419: () => e[7419],
		init: () => [e[3912](), e[9012]()]
	};
e.init(),
	function(e) {
		var t = {};

		function n(r) {
			if(t[r]) return t[r].exports;
			var i = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
		}
		n.m = e, n.c = t, n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}, n.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function(e, t) {
			if(1 & t && (e = n(e)), 8 & t) return e;
			if(4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if(n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for(var i in e) n.d(r, i, function(t) {
					return e[t]
				}.bind(null, i));
			return r
		}, n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e["default"]
			} : function() {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = "./src/js/app.js")
	}({
		"./node_modules/bad-words/lib/badwords.js": function(e, t, n) {
			const r = n("./node_modules/bad-words/lib/lang.json").words,
				i = n("./node_modules/badwords-list/lib/index.js").array;
			e.exports = class {
				constructor(e = {}) {
					Object.assign(this, {
						list: e.emptyList && [] || Array.prototype.concat.apply(r, [i, e.list || []]),
						exclude: e.exclude || [],
						placeHolder: e.placeHolder || "*",
						regex: e.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
						replaceRegex: e.replaceRegex || /\w/g
					})
				}
				isProfane(e) {
					return this.list.filter(t => {
						const n = new RegExp(`\\b${t.replace(/(\W)/g,"\\$1")}\\b`, "gi");
						return !this.exclude.includes(t.toLowerCase()) && n.test(e)
					}).length > 0 || !1
				}
				replaceWord(e) {
					return e.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder)
				}
				clean(e) {
					return e.split(/\b/).map(e => this.isProfane(e) ? this.replaceWord(e) : e).join("")
				}
				addWords() {
					let e = Array.from(arguments);
					this.list.push(...e), e.map(e => e.toLowerCase()).forEach(e => {
						this.exclude.includes(e) && this.exclude.splice(this.exclude.indexOf(e), 1)
					})
				}
				removeWords() {
					this.exclude.push(...Array.from(arguments).map(e => e.toLowerCase()))
				}
			}
		},
		"./node_modules/bad-words/lib/lang.json": function(e) {
			e.exports = {
				words: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]
			}
		},
		"./node_modules/badwords-list/lib/array.js": function(e, t) {
			e.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"]
		},
		"./node_modules/badwords-list/lib/index.js": function(e, t, n) {
			e.exports = {
				object: n("./node_modules/badwords-list/lib/object.js"),
				array: n("./node_modules/badwords-list/lib/array.js"),
				regex: n("./node_modules/badwords-list/lib/regexp.js")
			}
		},
		"./node_modules/badwords-list/lib/object.js": function(e, t) {
			e.exports = {
				"4r5e": 1,
				"5h1t": 1,
				"5hit": 1,
				a55: 1,
				anal: 1,
				anus: 1,
				ar5e: 1,
				arrse: 1,
				arse: 1,
				ass: 1,
				"ass-fucker": 1,
				asses: 1,
				assfucker: 1,
				assfukka: 1,
				asshole: 1,
				assholes: 1,
				asswhole: 1,
				a_s_s: 1,
				"b!tch": 1,
				b00bs: 1,
				b17ch: 1,
				b1tch: 1,
				ballbag: 1,
				balls: 1,
				ballsack: 1,
				bastard: 1,
				beastial: 1,
				beastiality: 1,
				bellend: 1,
				bestial: 1,
				bestiality: 1,
				"bi+ch": 1,
				biatch: 1,
				bitch: 1,
				bitcher: 1,
				bitchers: 1,
				bitches: 1,
				bitchin: 1,
				bitching: 1,
				bloody: 1,
				"blow job": 1,
				blowjob: 1,
				blowjobs: 1,
				boiolas: 1,
				bollock: 1,
				bollok: 1,
				boner: 1,
				boob: 1,
				boobs: 1,
				booobs: 1,
				boooobs: 1,
				booooobs: 1,
				booooooobs: 1,
				breasts: 1,
				buceta: 1,
				bugger: 1,
				bum: 1,
				"bunny fucker": 1,
				butt: 1,
				butthole: 1,
				buttmuch: 1,
				buttplug: 1,
				c0ck: 1,
				c0cksucker: 1,
				"carpet muncher": 1,
				cawk: 1,
				chink: 1,
				cipa: 1,
				cl1t: 1,
				clit: 1,
				clitoris: 1,
				clits: 1,
				cnut: 1,
				cock: 1,
				"cock-sucker": 1,
				cockface: 1,
				cockhead: 1,
				cockmunch: 1,
				cockmuncher: 1,
				cocks: 1,
				cocksuck: 1,
				cocksucked: 1,
				cocksucker: 1,
				cocksucking: 1,
				cocksucks: 1,
				cocksuka: 1,
				cocksukka: 1,
				cok: 1,
				cokmuncher: 1,
				coksucka: 1,
				coon: 1,
				cox: 1,
				crap: 1,
				cum: 1,
				cummer: 1,
				cumming: 1,
				cums: 1,
				cumshot: 1,
				cunilingus: 1,
				cunillingus: 1,
				cunnilingus: 1,
				cunt: 1,
				cuntlick: 1,
				cuntlicker: 1,
				cuntlicking: 1,
				cunts: 1,
				cyalis: 1,
				cyberfuc: 1,
				cyberfuck: 1,
				cyberfucked: 1,
				cyberfucker: 1,
				cyberfuckers: 1,
				cyberfucking: 1,
				d1ck: 1,
				damn: 1,
				dick: 1,
				dickhead: 1,
				dildo: 1,
				dildos: 1,
				dink: 1,
				dinks: 1,
				dirsa: 1,
				dlck: 1,
				"dog-fucker": 1,
				doggin: 1,
				dogging: 1,
				donkeyribber: 1,
				doosh: 1,
				duche: 1,
				dyke: 1,
				ejaculate: 1,
				ejaculated: 1,
				ejaculates: 1,
				ejaculating: 1,
				ejaculatings: 1,
				ejaculation: 1,
				ejakulate: 1,
				"f u c k": 1,
				"f u c k e r": 1,
				f4nny: 1,
				fag: 1,
				fagging: 1,
				faggitt: 1,
				faggot: 1,
				faggs: 1,
				fagot: 1,
				fagots: 1,
				fags: 1,
				fanny: 1,
				fannyflaps: 1,
				fannyfucker: 1,
				fanyy: 1,
				fatass: 1,
				fcuk: 1,
				fcuker: 1,
				fcuking: 1,
				feck: 1,
				fecker: 1,
				felching: 1,
				fellate: 1,
				fellatio: 1,
				fingerfuck: 1,
				fingerfucked: 1,
				fingerfucker: 1,
				fingerfuckers: 1,
				fingerfucking: 1,
				fingerfucks: 1,
				fistfuck: 1,
				fistfucked: 1,
				fistfucker: 1,
				fistfuckers: 1,
				fistfucking: 1,
				fistfuckings: 1,
				fistfucks: 1,
				flange: 1,
				fook: 1,
				fooker: 1,
				fuck: 1,
				fucka: 1,
				fucked: 1,
				fucker: 1,
				fuckers: 1,
				fuckhead: 1,
				fuckheads: 1,
				fuckin: 1,
				fucking: 1,
				fuckings: 1,
				fuckingshitmotherfucker: 1,
				fuckme: 1,
				fucks: 1,
				fuckwhit: 1,
				fuckwit: 1,
				"fudge packer": 1,
				fudgepacker: 1,
				fuk: 1,
				fuker: 1,
				fukker: 1,
				fukkin: 1,
				fuks: 1,
				fukwhit: 1,
				fukwit: 1,
				fux: 1,
				fux0r: 1,
				f_u_c_k: 1,
				gangbang: 1,
				gangbanged: 1,
				gangbangs: 1,
				gaylord: 1,
				gaysex: 1,
				goatse: 1,
				God: 1,
				"god-dam": 1,
				"god-damned": 1,
				goddamn: 1,
				goddamned: 1,
				hardcoresex: 1,
				hell: 1,
				heshe: 1,
				hoar: 1,
				hoare: 1,
				hoer: 1,
				homo: 1,
				hore: 1,
				horniest: 1,
				horny: 1,
				hotsex: 1,
				"jack-off": 1,
				jackoff: 1,
				jap: 1,
				"jerk-off": 1,
				jism: 1,
				jiz: 1,
				jizm: 1,
				jizz: 1,
				kawk: 1,
				knob: 1,
				knobead: 1,
				knobed: 1,
				knobend: 1,
				knobhead: 1,
				knobjocky: 1,
				knobjokey: 1,
				kock: 1,
				kondum: 1,
				kondums: 1,
				kum: 1,
				kummer: 1,
				kumming: 1,
				kums: 1,
				kunilingus: 1,
				"l3i+ch": 1,
				l3itch: 1,
				labia: 1,
				lust: 1,
				lusting: 1,
				m0f0: 1,
				m0fo: 1,
				m45terbate: 1,
				ma5terb8: 1,
				ma5terbate: 1,
				masochist: 1,
				"master-bate": 1,
				masterb8: 1,
				"masterbat*": 1,
				masterbat3: 1,
				masterbate: 1,
				masterbation: 1,
				masterbations: 1,
				masturbate: 1,
				"mo-fo": 1,
				mof0: 1,
				mofo: 1,
				mothafuck: 1,
				mothafucka: 1,
				mothafuckas: 1,
				mothafuckaz: 1,
				mothafucked: 1,
				mothafucker: 1,
				mothafuckers: 1,
				mothafuckin: 1,
				mothafucking: 1,
				mothafuckings: 1,
				mothafucks: 1,
				"mother fucker": 1,
				motherfuck: 1,
				motherfucked: 1,
				motherfucker: 1,
				motherfuckers: 1,
				motherfuckin: 1,
				motherfucking: 1,
				motherfuckings: 1,
				motherfuckka: 1,
				motherfucks: 1,
				muff: 1,
				mutha: 1,
				muthafecker: 1,
				muthafuckker: 1,
				muther: 1,
				mutherfucker: 1,
				n1gga: 1,
				n1gger: 1,
				nazi: 1,
				nigg3r: 1,
				nigg4h: 1,
				nigga: 1,
				niggah: 1,
				niggas: 1,
				niggaz: 1,
				nigger: 1,
				niggers: 1,
				nob: 1,
				"nob jokey": 1,
				nobhead: 1,
				nobjocky: 1,
				nobjokey: 1,
				numbnuts: 1,
				nutsack: 1,
				orgasim: 1,
				orgasims: 1,
				orgasm: 1,
				orgasms: 1,
				p0rn: 1,
				pawn: 1,
				pecker: 1,
				penis: 1,
				penisfucker: 1,
				phonesex: 1,
				phuck: 1,
				phuk: 1,
				phuked: 1,
				phuking: 1,
				phukked: 1,
				phukking: 1,
				phuks: 1,
				phuq: 1,
				pigfucker: 1,
				pimpis: 1,
				piss: 1,
				pissed: 1,
				pisser: 1,
				pissers: 1,
				pisses: 1,
				pissflaps: 1,
				pissin: 1,
				pissing: 1,
				pissoff: 1,
				poop: 1,
				porn: 1,
				porno: 1,
				pornography: 1,
				pornos: 1,
				prick: 1,
				pricks: 1,
				pron: 1,
				pube: 1,
				pusse: 1,
				pussi: 1,
				pussies: 1,
				pussy: 1,
				pussys: 1,
				rectum: 1,
				retard: 1,
				rimjaw: 1,
				rimming: 1,
				"s hit": 1,
				"s.o.b.": 1,
				sadist: 1,
				schlong: 1,
				screwing: 1,
				scroat: 1,
				scrote: 1,
				scrotum: 1,
				semen: 1,
				sex: 1,
				"sh!+": 1,
				"sh!t": 1,
				sh1t: 1,
				shag: 1,
				shagger: 1,
				shaggin: 1,
				shagging: 1,
				shemale: 1,
				"shi+": 1,
				shit: 1,
				shitdick: 1,
				shite: 1,
				shited: 1,
				shitey: 1,
				shitfuck: 1,
				shitfull: 1,
				shithead: 1,
				shiting: 1,
				shitings: 1,
				shits: 1,
				shitted: 1,
				shitter: 1,
				shitters: 1,
				shitting: 1,
				shittings: 1,
				shitty: 1,
				skank: 1,
				slut: 1,
				sluts: 1,
				smegma: 1,
				smut: 1,
				snatch: 1,
				"son-of-a-bitch": 1,
				spac: 1,
				spunk: 1,
				s_h_i_t: 1,
				t1tt1e5: 1,
				t1tties: 1,
				teets: 1,
				teez: 1,
				testical: 1,
				testicle: 1,
				tit: 1,
				titfuck: 1,
				tits: 1,
				titt: 1,
				tittie5: 1,
				tittiefucker: 1,
				titties: 1,
				tittyfuck: 1,
				tittywank: 1,
				titwank: 1,
				tosser: 1,
				turd: 1,
				tw4t: 1,
				twat: 1,
				twathead: 1,
				twatty: 1,
				twunt: 1,
				twunter: 1,
				v14gra: 1,
				v1gra: 1,
				vagina: 1,
				viagra: 1,
				vulva: 1,
				w00se: 1,
				wang: 1,
				wank: 1,
				wanker: 1,
				wanky: 1,
				whoar: 1,
				whore: 1,
				willies: 1,
				willy: 1,
				xrated: 1,
				xxx: 1
			}
		},
		"./node_modules/badwords-list/lib/regexp.js": function(e, t) {
			e.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
		},
		"./node_modules/base64-js/index.js": function(e, t, n) {
			"use strict";
			t.byteLength = function(e) {
				var t = c(e),
					n = t[0],
					r = t[1];
				return 3 * (n + r) / 4 - r
			}, t.toByteArray = function(e) {
				var t, n, r = c(e),
					o = r[0],
					a = r[1],
					l = new s(function(e, t, n) {
						return 3 * (t + n) / 4 - n
					}(0, o, a)),
					u = 0,
					h = a > 0 ? o - 4 : o;
				for(n = 0; n < h; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
				2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, l[u++] = 255 & t);
				1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t);
				return l
			}, t.fromByteArray = function(e) {
				for(var t, n = e.length, i = n % 3, s = [], o = 16383, a = 0, l = n - i; a < l; a += o) s.push(u(e, a, a + o > l ? l : a + o));
				1 === i ? (t = e[n - 1], s.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], s.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
				return s.join("")
			};
			for(var r = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, l = o.length; a < l; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

			function c(e) {
				var t = e.length;
				if(t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var n = e.indexOf("=");
				return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
			}

			function u(e, t, n) {
				for(var i, s, o = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(r[(s = i) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
				return o.join("")
			}
			i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
		},
		"./node_modules/buffer/index.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r = n("./node_modules/base64-js/index.js"),
					i = n("./node_modules/ieee754/index.js"),
					s = n("./node_modules/buffer/node_modules/isarray/index.js");

				function o() {
					return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
				}

				function a(e, t) {
					if(o() < t) throw new RangeError("Invalid typed array length");
					return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
				}

				function l(e, t, n) {
					if(!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
					if("number" == typeof e) {
						if("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
						return h(this, e)
					}
					return c(this, e, t, n)
				}

				function c(e, t, n, r) {
					if("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
						if(t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if(t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = A(e, t);
						return e
					}(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
						"string" == typeof n && "" !== n || (n = "utf8");
						if(!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
						var r = 0 | f(t, n),
							i = (e = a(e, r)).write(t, n);
						i !== r && (e = e.slice(0, i));
						return e
					}(e, t, n) : function(e, t) {
						if(l.isBuffer(t)) {
							var n = 0 | d(t.length);
							return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e
						}
						if(t) {
							if("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : A(e, t);
							if("Buffer" === t.type && s(t.data)) return A(e, t.data)
						}
						var r;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}

				function u(e) {
					if("number" != typeof e) throw new TypeError('"size" argument must be a number');
					if(e < 0) throw new RangeError('"size" argument must not be negative')
				}

				function h(e, t) {
					if(u(t), e = a(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT)
						for(var n = 0; n < t; ++n) e[n] = 0;
					return e
				}

				function A(e, t) {
					var n = t.length < 0 ? 0 : 0 | d(t.length);
					e = a(e, n);
					for(var r = 0; r < n; r += 1) e[r] = 255 & t[r];
					return e
				}

				function d(e) {
					if(e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
					return 0 | e
				}

				function f(e, t) {
					if(l.isBuffer(e)) return e.length;
					if("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
					"string" != typeof e && (e = "" + e);
					var n = e.length;
					if(0 === n) return 0;
					for(var r = !1;;) switch(t) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
						case void 0:
							return L(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return Y(e).length;
						default:
							if(r) return L(e).length;
							t = ("" + t).toLowerCase(), r = !0
					}
				}

				function g(e, t, n) {
					var r = !1;
					if((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if((n >>>= 0) <= (t >>>= 0)) return "";
					for(e || (e = "utf8");;) switch(e) {
						case "hex":
							return T(this, t, n);
						case "utf8":
						case "utf-8":
							return j(this, t, n);
						case "ascii":
							return M(this, t, n);
						case "latin1":
						case "binary":
							return O(this, t, n);
						case "base64":
							return C(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return P(this, t, n);
						default:
							if(r) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), r = !0
					}
				}

				function p(e, t, n) {
					var r = e[t];
					e[t] = e[n], e[n] = r
				}

				function m(e, t, n, r, i) {
					if(0 === e.length) return -1;
					if("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if(i) return -1;
						n = e.length - 1
					} else if(n < 0) {
						if(!i) return -1;
						n = 0
					}
					if("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, i);
					if("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function w(e, t, n, r, i) {
					var s, o = 1,
						a = e.length,
						l = t.length;
					if(void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if(e.length < 2 || t.length < 2) return -1;
						o = 2, a /= 2, l /= 2, n /= 2
					}

					function c(e, t) {
						return 1 === o ? e[t] : e.readUInt16BE(t * o)
					}
					if(i) {
						var u = -1;
						for(s = n; s < a; s++)
							if(c(e, s) === c(t, -1 === u ? 0 : s - u)) {
								if(-1 === u && (u = s), s - u + 1 === l) return u * o
							} else -1 !== u && (s -= s - u), u = -1
					} else
						for(n + l > a && (n = a - l), s = n; s >= 0; s--) {
							for(var h = !0, A = 0; A < l; A++)
								if(c(e, s + A) !== c(t, A)) {
									h = !1;
									break
								} if(h) return s
						}
					return -1
				}

				function y(e, t, n, r) {
					n = Number(n) || 0;
					var i = e.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					var s = t.length;
					if(s % 2 != 0) throw new TypeError("Invalid hex string");
					r > s / 2 && (r = s / 2);
					for(var o = 0; o < r; ++o) {
						var a = parseInt(t.substr(2 * o, 2), 16);
						if(isNaN(a)) return o;
						e[n + o] = a
					}
					return o
				}

				function v(e, t, n, r) {
					return W(L(t, e.length - n), e, n, r)
				}

				function b(e, t, n, r) {
					return W(function(e) {
						for(var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
						return t
					}(t), e, n, r)
				}

				function k(e, t, n, r) {
					return b(e, t, n, r)
				}

				function x(e, t, n, r) {
					return W(Y(t), e, n, r)
				}

				function B(e, t, n, r) {
					return W(function(e, t) {
						for(var n, r, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = (n = e.charCodeAt(o)) >> 8, i = n % 256, s.push(i), s.push(r);
						return s
					}(t, e.length - n), e, n, r)
				}

				function C(e, t, n) {
					return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
				}

				function j(e, t, n) {
					n = Math.min(e.length, n);
					for(var r = [], i = t; i < n;) {
						var s, o, a, l, c = e[i],
							u = null,
							h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
						if(i + h <= n) switch(h) {
							case 1:
								c < 128 && (u = c);
								break;
							case 2:
								128 == (192 & (s = e[i + 1])) && (l = (31 & c) << 6 | 63 & s) > 127 && (u = l);
								break;
							case 3:
								s = e[i + 1], o = e[i + 2], 128 == (192 & s) && 128 == (192 & o) && (l = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (u = l);
								break;
							case 4:
								s = e[i + 1], o = e[i + 2], a = e[i + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (l = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
						}
						null === u ? (u = 65533, h = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += h
					}
					return function(e) {
						var t = e.length;
						if(t <= D) return String.fromCharCode.apply(String, e);
						var n = "",
							r = 0;
						for(; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += D));
						return n
					}(r)
				}
				t.Buffer = l, t.SlowBuffer = function(e) {
					+e != e && (e = 0);
					return l.alloc(+e)
				}, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
					try {
						var e = new Uint8Array(1);
						return e.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function() {
								return 42
							}
						}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
					} catch (e) {
						return !1
					}
				}(), t.kMaxLength = o(), l.poolSize = 8192, l._augment = function(e) {
					return e.__proto__ = l.prototype, e
				}, l.from = function(e, t, n) {
					return c(null, e, t, n)
				}, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
					value: null,
					configurable: !0
				})), l.alloc = function(e, t, n) {
					return function(e, t, n, r) {
						return u(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
					}(null, e, t, n)
				}, l.allocUnsafe = function(e) {
					return h(null, e)
				}, l.allocUnsafeSlow = function(e) {
					return h(null, e)
				}, l.isBuffer = function(e) {
					return !(null == e || !e._isBuffer)
				}, l.compare = function(e, t) {
					if(!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
					if(e === t) return 0;
					for(var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
						if(e[i] !== t[i]) {
							n = e[i], r = t[i];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, l.isEncoding = function(e) {
					switch(String(e).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, l.concat = function(e, t) {
					if(!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
					if(0 === e.length) return l.alloc(0);
					var n;
					if(void 0 === t)
						for(t = 0, n = 0; n < e.length; ++n) t += e[n].length;
					var r = l.allocUnsafe(t),
						i = 0;
					for(n = 0; n < e.length; ++n) {
						var o = e[n];
						if(!l.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
						o.copy(r, i), i += o.length
					}
					return r
				}, l.byteLength = f, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
					var e = this.length;
					if(e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for(var t = 0; t < e; t += 2) p(this, t, t + 1);
					return this
				}, l.prototype.swap32 = function() {
					var e = this.length;
					if(e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for(var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
					return this
				}, l.prototype.swap64 = function() {
					var e = this.length;
					if(e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for(var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
					return this
				}, l.prototype.toString = function() {
					var e = 0 | this.length;
					return 0 === e ? "" : 0 === arguments.length ? j(this, 0, e) : g.apply(this, arguments)
				}, l.prototype.equals = function(e) {
					if(!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === l.compare(this, e)
				}, l.prototype.inspect = function() {
					var e = "",
						n = t.INSPECT_MAX_BYTES;
					return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
				}, l.prototype.compare = function(e, t, n, r, i) {
					if(!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					if(void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if(r >= i && t >= n) return 0;
					if(r >= i) return -1;
					if(t >= n) return 1;
					if(this === e) return 0;
					for(var s = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0), a = Math.min(s, o), c = this.slice(r, i), u = e.slice(t, n), h = 0; h < a; ++h)
						if(c[h] !== u[h]) {
							s = c[h], o = u[h];
							break
						} return s < o ? -1 : o < s ? 1 : 0
				}, l.prototype.includes = function(e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				}, l.prototype.indexOf = function(e, t, n) {
					return m(this, e, t, n, !0)
				}, l.prototype.lastIndexOf = function(e, t, n) {
					return m(this, e, t, n, !1)
				}, l.prototype.write = function(e, t, n, r) {
					if(void 0 === t) r = "utf8", n = this.length, t = 0;
					else if(void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
					else {
						if(!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var i = this.length - t;
					if((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for(var s = !1;;) switch(r) {
						case "hex":
							return y(this, e, t, n);
						case "utf8":
						case "utf-8":
							return v(this, e, t, n);
						case "ascii":
							return b(this, e, t, n);
						case "latin1":
						case "binary":
							return k(this, e, t, n);
						case "base64":
							return x(this, e, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return B(this, e, t, n);
						default:
							if(s) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), s = !0
					}
				}, l.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				var D = 4096;

				function M(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for(var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
					return r
				}

				function O(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for(var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
					return r
				}

				function T(e, t, n) {
					var r = e.length;
					(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
					for(var i = "", s = t; s < n; ++s) i += R(e[s]);
					return i
				}

				function P(e, t, n) {
					for(var r = e.slice(t, n), i = "", s = 0; s < r.length; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
					return i
				}

				function E(e, t, n) {
					if(e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
					if(e + t > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function I(e, t, n, r, i, s) {
					if(!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if(t > i || t < s) throw new RangeError('"value" argument is out of bounds');
					if(n + r > e.length) throw new RangeError("Index out of range")
				}

				function q(e, t, n, r) {
					t < 0 && (t = 65535 + t + 1);
					for(var i = 0, s = Math.min(e.length - n, 2); i < s; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
				}

				function H(e, t, n, r) {
					t < 0 && (t = 4294967295 + t + 1);
					for(var i = 0, s = Math.min(e.length - n, 4); i < s; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
				}

				function X(e, t, n, r, i, s) {
					if(n + r > e.length) throw new RangeError("Index out of range");
					if(n < 0) throw new RangeError("Index out of range")
				}

				function S(e, t, n, r, s) {
					return s || X(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
				}

				function V(e, t, n, r, s) {
					return s || X(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
				}
				l.prototype.slice = function(e, t) {
					var n, r = this.length;
					if((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
					else {
						var i = t - e;
						n = new l(i, void 0);
						for(var s = 0; s < i; ++s) n[s] = this[s + e]
					}
					return n
				}, l.prototype.readUIntLE = function(e, t, n) {
					e |= 0, t |= 0, n || E(e, t, this.length);
					for(var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
					return r
				}, l.prototype.readUIntBE = function(e, t, n) {
					e |= 0, t |= 0, n || E(e, t, this.length);
					for(var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
					return r
				}, l.prototype.readUInt8 = function(e, t) {
					return t || E(e, 1, this.length), this[e]
				}, l.prototype.readUInt16LE = function(e, t) {
					return t || E(e, 2, this.length), this[e] | this[e + 1] << 8
				}, l.prototype.readUInt16BE = function(e, t) {
					return t || E(e, 2, this.length), this[e] << 8 | this[e + 1]
				}, l.prototype.readUInt32LE = function(e, t) {
					return t || E(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				}, l.prototype.readUInt32BE = function(e, t) {
					return t || E(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				}, l.prototype.readIntLE = function(e, t, n) {
					e |= 0, t |= 0, n || E(e, t, this.length);
					for(var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
				}, l.prototype.readIntBE = function(e, t, n) {
					e |= 0, t |= 0, n || E(e, t, this.length);
					for(var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256);) s += this[e + --r] * i;
					return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s
				}, l.prototype.readInt8 = function(e, t) {
					return t || E(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				}, l.prototype.readInt16LE = function(e, t) {
					t || E(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt16BE = function(e, t) {
					t || E(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt32LE = function(e, t) {
					return t || E(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				}, l.prototype.readInt32BE = function(e, t) {
					return t || E(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				}, l.prototype.readFloatLE = function(e, t) {
					return t || E(e, 4, this.length), i.read(this, e, !0, 23, 4)
				}, l.prototype.readFloatBE = function(e, t) {
					return t || E(e, 4, this.length), i.read(this, e, !1, 23, 4)
				}, l.prototype.readDoubleLE = function(e, t) {
					return t || E(e, 8, this.length), i.read(this, e, !0, 52, 8)
				}, l.prototype.readDoubleBE = function(e, t) {
					return t || E(e, 8, this.length), i.read(this, e, !1, 52, 8)
				}, l.prototype.writeUIntLE = function(e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = 1,
						s = 0;
					for(this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
					return t + n
				}, l.prototype.writeUIntBE = function(e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = n - 1,
						s = 1;
					for(this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
					return t + n
				}, l.prototype.writeUInt8 = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
				}, l.prototype.writeUInt16LE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : q(this, e, t, !0), t + 2
				}, l.prototype.writeUInt16BE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : q(this, e, t, !1), t + 2
				}, l.prototype.writeUInt32LE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : H(this, e, t, !0), t + 4
				}, l.prototype.writeUInt32BE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : H(this, e, t, !1), t + 4
				}, l.prototype.writeIntLE = function(e, t, n, r) {
					if(e = +e, t |= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						I(this, e, t, n, i - 1, -i)
					}
					var s = 0,
						o = 1,
						a = 0;
					for(this[t] = 255 & e; ++s < n && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
					return t + n
				}, l.prototype.writeIntBE = function(e, t, n, r) {
					if(e = +e, t |= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						I(this, e, t, n, i - 1, -i)
					}
					var s = n - 1,
						o = 1,
						a = 0;
					for(this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
					return t + n
				}, l.prototype.writeInt8 = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
				}, l.prototype.writeInt16LE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : q(this, e, t, !0), t + 2
				}, l.prototype.writeInt16BE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : q(this, e, t, !1), t + 2
				}, l.prototype.writeInt32LE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : H(this, e, t, !0), t + 4
				}, l.prototype.writeInt32BE = function(e, t, n) {
					return e = +e, t |= 0, n || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : H(this, e, t, !1), t + 4
				}, l.prototype.writeFloatLE = function(e, t, n) {
					return S(this, e, t, !0, n)
				}, l.prototype.writeFloatBE = function(e, t, n) {
					return S(this, e, t, !1, n)
				}, l.prototype.writeDoubleLE = function(e, t, n) {
					return V(this, e, t, !0, n)
				}, l.prototype.writeDoubleBE = function(e, t, n) {
					return V(this, e, t, !1, n)
				}, l.prototype.copy = function(e, t, n, r) {
					if(n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if(0 === e.length || 0 === this.length) return 0;
					if(t < 0) throw new RangeError("targetStart out of bounds");
					if(n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
					if(r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
					var i, s = r - n;
					if(this === e && n < t && t < r)
						for(i = s - 1; i >= 0; --i) e[i + t] = this[i + n];
					else if(s < 1e3 || !l.TYPED_ARRAY_SUPPORT)
						for(i = 0; i < s; ++i) e[i + t] = this[i + n];
					else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
					return s
				}, l.prototype.fill = function(e, t, n, r) {
					if("string" == typeof e) {
						if("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
							var i = e.charCodeAt(0);
							i < 256 && (e = i)
						}
						if(void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
					} else "number" == typeof e && (e &= 255);
					if(t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
					if(n <= t) return this;
					var s;
					if(t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for(s = t; s < n; ++s) this[s] = e;
					else {
						var o = l.isBuffer(e) ? e : L(new l(e, r).toString()),
							a = o.length;
						for(s = 0; s < n - t; ++s) this[s + t] = o[s % a]
					}
					return this
				};
				var z = /[^+\/0-9A-Za-z-_]/g;

				function R(e) {
					return e < 16 ? "0" + e.toString(16) : e.toString(16)
				}

				function L(e, t) {
					var n;
					t = t || 1 / 0;
					for(var r = e.length, i = null, s = [], o = 0; o < r; ++o) {
						if((n = e.charCodeAt(o)) > 55295 && n < 57344) {
							if(!i) {
								if(n > 56319) {
									(t -= 3) > -1 && s.push(239, 191, 189);
									continue
								}
								if(o + 1 === r) {
									(t -= 3) > -1 && s.push(239, 191, 189);
									continue
								}
								i = n;
								continue
							}
							if(n < 56320) {
								(t -= 3) > -1 && s.push(239, 191, 189), i = n;
								continue
							}
							n = 65536 + (i - 55296 << 10 | n - 56320)
						} else i && (t -= 3) > -1 && s.push(239, 191, 189);
						if(i = null, n < 128) {
							if((t -= 1) < 0) break;
							s.push(n)
						} else if(n < 2048) {
							if((t -= 2) < 0) break;
							s.push(n >> 6 | 192, 63 & n | 128)
						} else if(n < 65536) {
							if((t -= 3) < 0) break;
							s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if(!(n < 1114112)) throw new Error("Invalid code point");
							if((t -= 4) < 0) break;
							s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return s
				}

				function Y(e) {
					return r.toByteArray(function(e) {
						if((e = function(e) {
								return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
							}(e).replace(z, "")).length < 2) return "";
						for(; e.length % 4 != 0;) e += "=";
						return e
					}(e))
				}

				function W(e, t, n, r) {
					for(var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
					return i
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/buffer/node_modules/isarray/index.js": function(e, t) {
			var n = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == n.call(e)
			}
		},
		"./node_modules/charenc/charenc.js": function(e, t) {
			var n = {
				utf8: {
					stringToBytes: function(e) {
						return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
					},
					bytesToString: function(e) {
						return decodeURIComponent(escape(n.bin.bytesToString(e)))
					}
				},
				bin: {
					stringToBytes: function(e) {
						for(var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
						return t
					},
					bytesToString: function(e) {
						for(var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
						return t.join("")
					}
				}
			};
			e.exports = n
		},
		"./node_modules/crypt/crypt.js": function(e, t) {
			var n, r;
			n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
				rotl: function(e, t) {
					return e << t | e >>> 32 - t
				},
				rotr: function(e, t) {
					return e << 32 - t | e >>> t
				},
				endian: function(e) {
					if(e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
					for(var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
					return e
				},
				randomBytes: function(e) {
					for(var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
					return t
				},
				bytesToWords: function(e) {
					for(var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
					return t
				},
				wordsToBytes: function(e) {
					for(var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
					return t
				},
				bytesToHex: function(e) {
					for(var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
					return t.join("")
				},
				hexToBytes: function(e) {
					for(var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
					return t
				},
				bytesToBase64: function(e) {
					for(var t = [], r = 0; r < e.length; r += 3)
						for(var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], s = 0; s < 4; s++) 8 * r + 6 * s <= 8 * e.length ? t.push(n.charAt(i >>> 6 * (3 - s) & 63)) : t.push("=");
					return t.join("")
				},
				base64ToBytes: function(e) {
					e = e.replace(/[^A-Z0-9+\/]/gi, "");
					for(var t = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(e.charAt(r)) >>> 6 - 2 * i);
					return t
				}
			}, e.exports = r
		},
		"./node_modules/event-lite/event-lite.js": function(e, t, n) {
			! function(t) {
				e.exports = t;
				var n = {
					on: function(e, t) {
						return s(this, e).push(t), this
					},
					once: function(e, t) {
						var n = this;
						return r.originalListener = t, s(n, e).push(r), n;

						function r() {
							i.call(n, e, r), t.apply(this, arguments)
						}
					},
					off: i,
					emit: function(e, t) {
						var n = this,
							r = s(n, e, !0);
						if(!r) return !1;
						var i = arguments.length;
						if(1 === i) r.forEach(a);
						else if(2 === i) r.forEach(l);
						else {
							var o = Array.prototype.slice.call(arguments, 1);
							r.forEach(c)
						}
						return !!r.length;

						function a(e) {
							e.call(n)
						}

						function l(e) {
							e.call(n, t)
						}

						function c(e) {
							e.apply(n, o)
						}
					}
				};

				function r(e) {
					for(var t in n) e[t] = n[t];
					return e
				}

				function i(e, t) {
					var n, r = this;
					if(arguments.length) {
						if(t) {
							if(n = s(r, e, !0)) {
								if(!(n = n.filter(o)).length) return i.call(r, e);
								r.listeners[e] = n
							}
						} else if((n = r.listeners) && (delete n[e], !Object.keys(n).length)) return i.call(r)
					} else delete r.listeners;
					return r;

					function o(e) {
						return e !== t && e.originalListener !== t
					}
				}

				function s(e, t, n) {
					if(!n || e.listeners) {
						var r = e.listeners || (e.listeners = {});
						return r[t] || (r[t] = [])
					}
				}
				r(t.prototype), t.mixin = r
			}(function e() {
				if(!(this instanceof e)) return new e
			})
		},
		"./node_modules/ieee754/index.js": function(e, t) {
			t.read = function(e, t, n, r, i) {
				var s, o, a = 8 * i - r - 1,
					l = (1 << a) - 1,
					c = l >> 1,
					u = -7,
					h = n ? i - 1 : 0,
					A = n ? -1 : 1,
					d = e[t + h];
				for(h += A, s = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; s = 256 * s + e[t + h], h += A, u -= 8);
				for(o = s & (1 << -u) - 1, s >>= -u, u += r; u > 0; o = 256 * o + e[t + h], h += A, u -= 8);
				if(0 === s) s = 1 - c;
				else {
					if(s === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
					o += Math.pow(2, r), s -= c
				}
				return (d ? -1 : 1) * o * Math.pow(2, s - r)
			}, t.write = function(e, t, n, r, i, s) {
				var o, a, l, c = 8 * s - i - 1,
					u = (1 << c) - 1,
					h = u >> 1,
					A = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					d = r ? 0 : s - 1,
					f = r ? 1 : -1,
					g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
				for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), (t += o + h >= 1 ? A / l : A * Math.pow(2, 1 - h)) * l >= 2 && (o++, l /= 2), o + h >= u ? (a = 0, o = u) : o + h >= 1 ? (a = (t * l - 1) * Math.pow(2, i), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + d] = 255 & a, d += f, a /= 256, i -= 8);
				for(o = o << i | a, c += i; c > 0; e[n + d] = 255 & o, d += f, o /= 256, c -= 8);
				e[n + d - f] |= 128 * g
			}
		},
		"./node_modules/int64-buffer/int64-buffer.js": function(e, t, n) {
			(function(e) {
				! function(t) {
					var n, r = "undefined",
						i = r !== typeof e && e,
						s = r !== typeof Uint8Array && Uint8Array,
						o = r !== typeof ArrayBuffer && ArrayBuffer,
						a = [0, 0, 0, 0, 0, 0, 0, 0],
						l = Array.isArray || function(e) {
							return !!e && "[object Array]" == Object.prototype.toString.call(e)
						},
						c = 4294967296;

					function u(e, l, u) {
						var b = l ? 0 : 4,
							k = l ? 4 : 0,
							x = l ? 0 : 3,
							B = l ? 1 : 2,
							C = l ? 2 : 1,
							j = l ? 3 : 0,
							D = l ? m : y,
							M = l ? w : v,
							O = E.prototype,
							T = "is" + e,
							P = "_" + T;
						return O.buffer = void 0, O.offset = 0, O[P] = !0, O.toNumber = I, O.toString = function(e) {
							var t = this.buffer,
								n = this.offset,
								r = H(t, n + b),
								i = H(t, n + k),
								s = "",
								o = !u && 2147483648 & r;
							o && (r = ~r, i = c - i);
							e = e || 10;
							for(;;) {
								var a = r % e * c + i;
								if(r = Math.floor(r / e), i = Math.floor(a / e), s = (a % e).toString(e) + s, !r && !i) break
							}
							o && (s = "-" + s);
							return s
						}, O.toJSON = I, O.toArray = h, i && (O.toBuffer = A), s && (O.toArrayBuffer = d), E[T] = function(e) {
							return !(!e || !e[P])
						}, t[e] = E, E;

						function E(e, t, i, l) {
							return this instanceof E ? function(e, t, i, l, u) {
								s && o && (t instanceof o && (t = new s(t)), l instanceof o && (l = new s(l)));
								if(!(t || i || l || n)) return void(e.buffer = p(a, 0));
								if(!f(t, i)) {
									u = i, l = t, i = 0, t = new(n || Array)(8)
								}
								if(e.buffer = t, e.offset = i |= 0, r === typeof l) return;
								"string" == typeof l ? function(e, t, n, r) {
									var i = 0,
										s = n.length,
										o = 0,
										a = 0;
									"-" === n[0] && i++;
									var l = i;
									for(; i < s;) {
										var u = parseInt(n[i++], r);
										if(!(u >= 0)) break;
										a = a * r + u, o = o * r + Math.floor(a / c), a %= c
									}
									l && (o = ~o, a ? a = c - a : o++);
									q(e, t + b, o), q(e, t + k, a)
								}(t, i, l, u || 10) : f(l, u) ? g(t, i, l, u) : "number" == typeof u ? (q(t, i + b, l), q(t, i + k, u)) : l > 0 ? D(t, i, l) : l < 0 ? M(t, i, l) : g(t, i, a, 0)
							}(this, e, t, i, l) : new E(e, t, i, l)
						}

						function I() {
							var e = this.buffer,
								t = this.offset,
								n = H(e, t + b),
								r = H(e, t + k);
							return u || (n |= 0), n ? n * c + r : r
						}

						function q(e, t, n) {
							e[t + j] = 255 & n, n >>= 8, e[t + C] = 255 & n, n >>= 8, e[t + B] = 255 & n, n >>= 8, e[t + x] = 255 & n
						}

						function H(e, t) {
							return 16777216 * e[t + x] + (e[t + B] << 16) + (e[t + C] << 8) + e[t + j]
						}
					}

					function h(e) {
						var t = this.buffer,
							r = this.offset;
						return n = null, !1 !== e && 0 === r && 8 === t.length && l(t) ? t : p(t, r)
					}

					function A(t) {
						var r = this.buffer,
							s = this.offset;
						if(n = i, !1 !== t && 0 === s && 8 === r.length && e.isBuffer(r)) return r;
						var o = new i(8);
						return g(o, 0, r, s), o
					}

					function d(e) {
						var t = this.buffer,
							r = this.offset,
							i = t.buffer;
						if(n = s, !1 !== e && 0 === r && i instanceof o && 8 === i.byteLength) return i;
						var a = new s(8);
						return g(a, 0, t, r), a.buffer
					}

					function f(e, t) {
						var n = e && e.length;
						return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
					}

					function g(e, t, n, r) {
						t |= 0, r |= 0;
						for(var i = 0; i < 8; i++) e[t++] = 255 & n[r++]
					}

					function p(e, t) {
						return Array.prototype.slice.call(e, t, t + 8)
					}

					function m(e, t, n) {
						for(var r = t + 8; r > t;) e[--r] = 255 & n, n /= 256
					}

					function w(e, t, n) {
						var r = t + 8;
						for(n++; r > t;) e[--r] = 255 & -n ^ 255, n /= 256
					}

					function y(e, t, n) {
						for(var r = t + 8; t < r;) e[t++] = 255 & n, n /= 256
					}

					function v(e, t, n) {
						var r = t + 8;
						for(n++; t < r;) e[t++] = 255 & -n ^ 255, n /= 256
					}
					u("Uint64BE", !0, !0), u("Int64BE", !0, !1), u("Uint64LE", !1, !0), u("Int64LE", !1, !1)
				}("string" != typeof t.nodeName ? t : this || {})
			}).call(this, n("./node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/is-buffer/index.js": function(e, t) {
			function n(e) {
				return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
			}
			e.exports = function(e) {
				return null != e && (n(e) || function(e) {
					return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
				}(e) || !!e._isBuffer)
			}
		},
		"./node_modules/md5/md5.js": function(e, t, n) {
			var r, i, s, o, a;
			r = n("./node_modules/crypt/crypt.js"), i = n("./node_modules/charenc/charenc.js").utf8, s = n("./node_modules/is-buffer/index.js"), o = n("./node_modules/charenc/charenc.js").bin, (a = function(e, t) {
				e.constructor == String ? e = t && "binary" === t.encoding ? o.stringToBytes(e) : i.stringToBytes(e) : s(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
				for(var n = r.bytesToWords(e), l = 8 * e.length, c = 1732584193, u = -271733879, h = -1732584194, A = 271733878, d = 0; d < n.length; d++) n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
				n[l >>> 5] |= 128 << l % 32, n[14 + (l + 64 >>> 9 << 4)] = l;
				var f = a._ff,
					g = a._gg,
					p = a._hh,
					m = a._ii;
				for(d = 0; d < n.length; d += 16) {
					var w = c,
						y = u,
						v = h,
						b = A;
					c = f(c, u, h, A, n[d + 0], 7, -680876936), A = f(A, c, u, h, n[d + 1], 12, -389564586), h = f(h, A, c, u, n[d + 2], 17, 606105819), u = f(u, h, A, c, n[d + 3], 22, -1044525330), c = f(c, u, h, A, n[d + 4], 7, -176418897), A = f(A, c, u, h, n[d + 5], 12, 1200080426), h = f(h, A, c, u, n[d + 6], 17, -1473231341), u = f(u, h, A, c, n[d + 7], 22, -45705983), c = f(c, u, h, A, n[d + 8], 7, 1770035416), A = f(A, c, u, h, n[d + 9], 12, -1958414417), h = f(h, A, c, u, n[d + 10], 17, -42063), u = f(u, h, A, c, n[d + 11], 22, -1990404162), c = f(c, u, h, A, n[d + 12], 7, 1804603682), A = f(A, c, u, h, n[d + 13], 12, -40341101), h = f(h, A, c, u, n[d + 14], 17, -1502002290), c = g(c, u = f(u, h, A, c, n[d + 15], 22, 1236535329), h, A, n[d + 1], 5, -165796510), A = g(A, c, u, h, n[d + 6], 9, -1069501632), h = g(h, A, c, u, n[d + 11], 14, 643717713), u = g(u, h, A, c, n[d + 0], 20, -373897302), c = g(c, u, h, A, n[d + 5], 5, -701558691), A = g(A, c, u, h, n[d + 10], 9, 38016083), h = g(h, A, c, u, n[d + 15], 14, -660478335), u = g(u, h, A, c, n[d + 4], 20, -405537848), c = g(c, u, h, A, n[d + 9], 5, 568446438), A = g(A, c, u, h, n[d + 14], 9, -1019803690), h = g(h, A, c, u, n[d + 3], 14, -187363961), u = g(u, h, A, c, n[d + 8], 20, 1163531501), c = g(c, u, h, A, n[d + 13], 5, -1444681467), A = g(A, c, u, h, n[d + 2], 9, -51403784), h = g(h, A, c, u, n[d + 7], 14, 1735328473), c = p(c, u = g(u, h, A, c, n[d + 12], 20, -1926607734), h, A, n[d + 5], 4, -378558), A = p(A, c, u, h, n[d + 8], 11, -2022574463), h = p(h, A, c, u, n[d + 11], 16, 1839030562), u = p(u, h, A, c, n[d + 14], 23, -35309556), c = p(c, u, h, A, n[d + 1], 4, -1530992060), A = p(A, c, u, h, n[d + 4], 11, 1272893353), h = p(h, A, c, u, n[d + 7], 16, -155497632), u = p(u, h, A, c, n[d + 10], 23, -1094730640), c = p(c, u, h, A, n[d + 13], 4, 681279174), A = p(A, c, u, h, n[d + 0], 11, -358537222), h = p(h, A, c, u, n[d + 3], 16, -722521979), u = p(u, h, A, c, n[d + 6], 23, 76029189), c = p(c, u, h, A, n[d + 9], 4, -640364487), A = p(A, c, u, h, n[d + 12], 11, -421815835), h = p(h, A, c, u, n[d + 15], 16, 530742520), c = m(c, u = p(u, h, A, c, n[d + 2], 23, -995338651), h, A, n[d + 0], 6, -198630844), A = m(A, c, u, h, n[d + 7], 10, 1126891415), h = m(h, A, c, u, n[d + 14], 15, -1416354905), u = m(u, h, A, c, n[d + 5], 21, -57434055), c = m(c, u, h, A, n[d + 12], 6, 1700485571), A = m(A, c, u, h, n[d + 3], 10, -1894986606), h = m(h, A, c, u, n[d + 10], 15, -1051523), u = m(u, h, A, c, n[d + 1], 21, -2054922799), c = m(c, u, h, A, n[d + 8], 6, 1873313359), A = m(A, c, u, h, n[d + 15], 10, -30611744), h = m(h, A, c, u, n[d + 6], 15, -1560198380), u = m(u, h, A, c, n[d + 13], 21, 1309151649), c = m(c, u, h, A, n[d + 4], 6, -145523070), A = m(A, c, u, h, n[d + 11], 10, -1120210379), h = m(h, A, c, u, n[d + 2], 15, 718787259), u = m(u, h, A, c, n[d + 9], 21, -343485551), c = c + w >>> 0, u = u + y >>> 0, h = h + v >>> 0, A = A + b >>> 0
				}
				return r.endian([c, u, h, A])
			})._ff = function(e, t, n, r, i, s, o) {
				var a = e + (t & n | ~t & r) + (i >>> 0) + o;
				return (a << s | a >>> 32 - s) + t
			}, a._gg = function(e, t, n, r, i, s, o) {
				var a = e + (t & r | n & ~r) + (i >>> 0) + o;
				return (a << s | a >>> 32 - s) + t
			}, a._hh = function(e, t, n, r, i, s, o) {
				var a = e + (t ^ n ^ r) + (i >>> 0) + o;
				return (a << s | a >>> 32 - s) + t
			}, a._ii = function(e, t, n, r, i, s, o) {
				var a = e + (n ^ (t | ~r)) + (i >>> 0) + o;
				return (a << s | a >>> 32 - s) + t
			}, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, t) {
				if(null == e) throw new Error("Illegal argument " + e);
				var n = r.wordsToBytes(a(e, t));
				return t && t.asBytes ? n : t && t.asString ? o.bytesToString(n) : r.bytesToHex(n)
			}
		},
		"./node_modules/msgpack-lite/lib/browser.js": function(e, t, n) {
			t.encode = n("./node_modules/msgpack-lite/lib/encode.js").encode, t.decode = n("./node_modules/msgpack-lite/lib/decode.js").decode, t.Encoder = n("./node_modules/msgpack-lite/lib/encoder.js").Encoder, t.Decoder = n("./node_modules/msgpack-lite/lib/decoder.js").Decoder, t.createCodec = n("./node_modules/msgpack-lite/lib/ext.js").createCodec, t.codec = n("./node_modules/msgpack-lite/lib/codec.js").codec
		},
		"./node_modules/msgpack-lite/lib/buffer-global.js": function(e, t, n) {
			(function(t) {
				function n(e) {
					return e && e.isBuffer && e
				}
				e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer
			}).call(this, n("./node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/msgpack-lite/lib/buffer-lite.js": function(e, t) {
			t.copy = function(e, t, n, r) {
				var i;
				n || (n = 0);
				r || 0 === r || (r = this.length);
				t || (t = 0);
				var s = r - n;
				if(e === this && n < t && t < r)
					for(i = s - 1; i >= 0; i--) e[i + t] = this[i + n];
				else
					for(i = 0; i < s; i++) e[i + t] = this[i + n];
				return s
			}, t.toString = function(e, t, n) {
				var r = this,
					i = 0 | t;
				n || (n = r.length);
				var s = "",
					o = 0;
				for(; i < n;)(o = r[i++]) < 128 ? s += String.fromCharCode(o) : (192 == (224 & o) ? o = (31 & o) << 6 | 63 & r[i++] : 224 == (240 & o) ? o = (15 & o) << 12 | (63 & r[i++]) << 6 | 63 & r[i++] : 240 == (248 & o) && (o = (7 & o) << 18 | (63 & r[i++]) << 12 | (63 & r[i++]) << 6 | 63 & r[i++]), o >= 65536 ? (o -= 65536, s += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : s += String.fromCharCode(o));
				return s
			}, t.write = function(e, t) {
				var n = this,
					r = t || (t |= 0),
					i = e.length,
					s = 0,
					o = 0;
				for(; o < i;)(s = e.charCodeAt(o++)) < 128 ? n[r++] = s : s < 2048 ? (n[r++] = 192 | s >>> 6, n[r++] = 128 | 63 & s) : s < 55296 || s > 57343 ? (n[r++] = 224 | s >>> 12, n[r++] = 128 | s >>> 6 & 63, n[r++] = 128 | 63 & s) : (s = 65536 + (s - 55296 << 10 | e.charCodeAt(o++) - 56320), n[r++] = 240 | s >>> 18, n[r++] = 128 | s >>> 12 & 63, n[r++] = 128 | s >>> 6 & 63, n[r++] = 128 | 63 & s);
				return r - t
			}
		},
		"./node_modules/msgpack-lite/lib/bufferish-array.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/bufferish.js");

			function i(e) {
				return new Array(e)
			}(t = e.exports = i(0)).alloc = i, t.concat = r.concat, t.from = function(e) {
				if(!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
				else if(r.isArrayBuffer(e)) e = new Uint8Array(e);
				else {
					if("string" == typeof e) return r.from.call(t, e);
					if("number" == typeof e) throw new TypeError('"value" argument must not be a number')
				}
				return Array.prototype.slice.call(e)
			}
		},
		"./node_modules/msgpack-lite/lib/bufferish-buffer.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				i = r.global;

			function s(e) {
				return new i(e)
			}(t = e.exports = r.hasBuffer ? s(0) : []).alloc = r.hasBuffer && i.alloc || s, t.concat = r.concat, t.from = function(e) {
				if(!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
				else if(r.isArrayBuffer(e)) e = new Uint8Array(e);
				else {
					if("string" == typeof e) return r.from.call(t, e);
					if("number" == typeof e) throw new TypeError('"value" argument must not be a number')
				}
				return i.from && 1 !== i.from.length ? i.from(e) : new i(e)
			}
		},
		"./node_modules/msgpack-lite/lib/bufferish-proto.js": function(e, t, n) {
			var r, i = n("./node_modules/msgpack-lite/lib/buffer-lite.js");
			t.copy = c, t.slice = u, t.toString = function(e, t, n) {
				var r = !a && s.isBuffer(this) ? this.toString : i.toString;
				return r.apply(this, arguments)
			}, t.write = (r = "write", function() {
				return (this[r] || i[r]).apply(this, arguments)
			});
			var s = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				o = s.global,
				a = s.hasBuffer && "TYPED_ARRAY_SUPPORT" in o,
				l = a && !o.TYPED_ARRAY_SUPPORT;

			function c(e, t, n, r) {
				var o = s.isBuffer(this),
					a = s.isBuffer(e);
				if(o && a) return this.copy(e, t, n, r);
				if(l || o || a || !s.isView(this) || !s.isView(e)) return i.copy.call(this, e, t, n, r);
				var c = n || null != r ? u.call(this, n, r) : this;
				return e.set(c, t), c.length
			}

			function u(e, t) {
				var n = this.slice || !l && this.subarray;
				if(n) return n.call(this, e, t);
				var r = s.alloc.call(this, t - e);
				return c.call(this, r, 0, e, t), r
			}
		},
		"./node_modules/msgpack-lite/lib/bufferish-uint8array.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/bufferish.js");

			function i(e) {
				return new Uint8Array(e)
			}(t = e.exports = r.hasArrayBuffer ? i(0) : []).alloc = i, t.concat = r.concat, t.from = function(e) {
				if(r.isView(e)) {
					var n = e.byteOffset,
						i = e.byteLength;
					(e = e.buffer).byteLength !== i && (e.slice ? e = e.slice(n, n + i) : (e = new Uint8Array(e)).byteLength !== i && (e = Array.prototype.slice.call(e, n, n + i)))
				} else {
					if("string" == typeof e) return r.from.call(t, e);
					if("number" == typeof e) throw new TypeError('"value" argument must not be a number')
				}
				return new Uint8Array(e)
			}
		},
		"./node_modules/msgpack-lite/lib/bufferish.js": function(e, t, n) {
			var r = t.global = n("./node_modules/msgpack-lite/lib/buffer-global.js"),
				i = t.hasBuffer = r && !!r.isBuffer,
				s = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
				o = t.isArray = n("./node_modules/msgpack-lite/node_modules/isarray/index.js");
			t.isArrayBuffer = s ? function(e) {
				return e instanceof ArrayBuffer || f(e)
			} : m;
			var a = t.isBuffer = i ? r.isBuffer : m,
				l = t.isView = s ? ArrayBuffer.isView || w("ArrayBuffer", "buffer") : m;
			t.alloc = d, t.concat = function(e, n) {
				n || (n = 0, Array.prototype.forEach.call(e, function(e) {
					n += e.length
				}));
				var r = this !== t && this || e[0],
					i = d.call(r, n),
					s = 0;
				return Array.prototype.forEach.call(e, function(e) {
					s += A.copy.call(e, i, s)
				}), i
			}, t.from = function(e) {
				return "string" == typeof e ? g.call(this, e) : p(this).from(e)
			};
			var c = t.Array = n("./node_modules/msgpack-lite/lib/bufferish-array.js"),
				u = t.Buffer = n("./node_modules/msgpack-lite/lib/bufferish-buffer.js"),
				h = t.Uint8Array = n("./node_modules/msgpack-lite/lib/bufferish-uint8array.js"),
				A = t.prototype = n("./node_modules/msgpack-lite/lib/bufferish-proto.js");

			function d(e) {
				return p(this).alloc(e)
			}
			var f = w("ArrayBuffer");

			function g(e) {
				var t = 3 * e.length,
					n = d.call(this, t),
					r = A.write.call(n, e);
				return t !== r && (n = A.slice.call(n, 0, r)), n
			}

			function p(e) {
				return a(e) ? u : l(e) ? h : o(e) ? c : i ? u : s ? h : c
			}

			function m() {
				return !1
			}

			function w(e, t) {
				return e = "[object " + e + "]",
					function(n) {
						return null != n && {}.toString.call(t ? n[t] : n) === e
					}
			}
		},
		"./node_modules/msgpack-lite/lib/codec-base.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/node_modules/isarray/index.js");
			t.createCodec = a, t.install = function(e) {
				for(var t in e) s.prototype[t] = o(s.prototype[t], e[t])
			}, t.filter = function(e) {
				return r(e) ? function(e) {
					return e = e.slice(),
						function(n) {
							return e.reduce(t, n)
						};

					function t(e, t) {
						return t(e)
					}
				}(e) : e
			};
			var i = n("./node_modules/msgpack-lite/lib/bufferish.js");

			function s(e) {
				if(!(this instanceof s)) return new s(e);
				this.options = e, this.init()
			}

			function o(e, t) {
				return e && t ? function() {
					return e.apply(this, arguments), t.apply(this, arguments)
				} : e || t
			}

			function a(e) {
				return new s(e)
			}
			s.prototype.init = function() {
				var e = this.options;
				return e && e.uint8array && (this.bufferish = i.Uint8Array), this
			}, t.preset = a({
				preset: !0
			})
		},
		"./node_modules/msgpack-lite/lib/codec.js": function(e, t, n) {
			n("./node_modules/msgpack-lite/lib/read-core.js"), n("./node_modules/msgpack-lite/lib/write-core.js"), t.codec = {
				preset: n("./node_modules/msgpack-lite/lib/codec-base.js").preset
			}
		},
		"./node_modules/msgpack-lite/lib/decode-buffer.js": function(e, t, n) {
			t.DecodeBuffer = i;
			var r = n("./node_modules/msgpack-lite/lib/read-core.js").preset;

			function i(e) {
				if(!(this instanceof i)) return new i(e);
				if(e && (this.options = e, e.codec)) {
					var t = this.codec = e.codec;
					t.bufferish && (this.bufferish = t.bufferish)
				}
			}
			n("./node_modules/msgpack-lite/lib/flex-buffer.js").FlexDecoder.mixin(i.prototype), i.prototype.codec = r, i.prototype.fetch = function() {
				return this.codec.decode(this)
			}
		},
		"./node_modules/msgpack-lite/lib/decode.js": function(e, t, n) {
			t.decode = function(e, t) {
				var n = new r(t);
				return n.write(e), n.read()
			};
			var r = n("./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer
		},
		"./node_modules/msgpack-lite/lib/decoder.js": function(e, t, n) {
			t.Decoder = s;
			var r = n("./node_modules/event-lite/event-lite.js"),
				i = n("./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer;

			function s(e) {
				if(!(this instanceof s)) return new s(e);
				i.call(this, e)
			}
			s.prototype = new i, r.mixin(s.prototype), s.prototype.decode = function(e) {
				arguments.length && this.write(e), this.flush()
			}, s.prototype.push = function(e) {
				this.emit("data", e)
			}, s.prototype.end = function(e) {
				this.decode(e), this.emit("end")
			}
		},
		"./node_modules/msgpack-lite/lib/encode-buffer.js": function(e, t, n) {
			t.EncodeBuffer = i;
			var r = n("./node_modules/msgpack-lite/lib/write-core.js").preset;

			function i(e) {
				if(!(this instanceof i)) return new i(e);
				if(e && (this.options = e, e.codec)) {
					var t = this.codec = e.codec;
					t.bufferish && (this.bufferish = t.bufferish)
				}
			}
			n("./node_modules/msgpack-lite/lib/flex-buffer.js").FlexEncoder.mixin(i.prototype), i.prototype.codec = r, i.prototype.write = function(e) {
				this.codec.encode(this, e)
			}
		},
		"./node_modules/msgpack-lite/lib/encode.js": function(e, t, n) {
			t.encode = function(e, t) {
				var n = new r(t);
				return n.write(e), n.read()
			};
			var r = n("./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer
		},
		"./node_modules/msgpack-lite/lib/encoder.js": function(e, t, n) {
			t.Encoder = s;
			var r = n("./node_modules/event-lite/event-lite.js"),
				i = n("./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer;

			function s(e) {
				if(!(this instanceof s)) return new s(e);
				i.call(this, e)
			}
			s.prototype = new i, r.mixin(s.prototype), s.prototype.encode = function(e) {
				this.write(e), this.emit("data", this.read())
			}, s.prototype.end = function(e) {
				arguments.length && this.encode(e), this.flush(), this.emit("end")
			}
		},
		"./node_modules/msgpack-lite/lib/ext-buffer.js": function(e, t, n) {
			t.ExtBuffer = function e(t, n) {
				if(!(this instanceof e)) return new e(t, n);
				this.buffer = r.from(t), this.type = n
			};
			var r = n("./node_modules/msgpack-lite/lib/bufferish.js")
		},
		"./node_modules/msgpack-lite/lib/ext-packer.js": function(e, t, n) {
			t.setExtPackers = function(e) {
				e.addExtPacker(14, Error, [h, l]), e.addExtPacker(1, EvalError, [h, l]), e.addExtPacker(2, RangeError, [h, l]), e.addExtPacker(3, ReferenceError, [h, l]), e.addExtPacker(4, SyntaxError, [h, l]), e.addExtPacker(5, TypeError, [h, l]), e.addExtPacker(6, URIError, [h, l]), e.addExtPacker(10, RegExp, [u, l]), e.addExtPacker(11, Boolean, [c, l]), e.addExtPacker(12, String, [c, l]), e.addExtPacker(13, Date, [Number, l]), e.addExtPacker(15, Number, [c, l]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, o), e.addExtPacker(18, Uint8Array, o), e.addExtPacker(19, Int16Array, o), e.addExtPacker(20, Uint16Array, o), e.addExtPacker(21, Int32Array, o), e.addExtPacker(22, Uint32Array, o), e.addExtPacker(23, Float32Array, o), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, o), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, o), e.addExtPacker(26, ArrayBuffer, o), e.addExtPacker(29, DataView, o));
				i.hasBuffer && e.addExtPacker(27, s, i.from)
			};
			var r, i = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				s = i.global,
				o = i.Uint8Array.from,
				a = {
					name: 1,
					message: 1,
					stack: 1,
					columnNumber: 1,
					fileName: 1,
					lineNumber: 1
				};

			function l(e) {
				return r || (r = n("./node_modules/msgpack-lite/lib/encode.js").encode), r(e)
			}

			function c(e) {
				return e.valueOf()
			}

			function u(e) {
				(e = RegExp.prototype.toString.call(e).split("/")).shift();
				var t = [e.pop()];
				return t.unshift(e.join("/")), t
			}

			function h(e) {
				var t = {};
				for(var n in a) t[n] = e[n];
				return t
			}
		},
		"./node_modules/msgpack-lite/lib/ext-unpacker.js": function(e, t, n) {
			t.setExtUnpackers = function(e) {
				e.addExtUnpacker(14, [a, c(Error)]), e.addExtUnpacker(1, [a, c(EvalError)]), e.addExtUnpacker(2, [a, c(RangeError)]), e.addExtUnpacker(3, [a, c(ReferenceError)]), e.addExtUnpacker(4, [a, c(SyntaxError)]), e.addExtUnpacker(5, [a, c(TypeError)]), e.addExtUnpacker(6, [a, c(URIError)]), e.addExtUnpacker(10, [a, l]), e.addExtUnpacker(11, [a, u(Boolean)]), e.addExtUnpacker(12, [a, u(String)]), e.addExtUnpacker(13, [a, u(Date)]), e.addExtUnpacker(15, [a, u(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, u(Int8Array)), e.addExtUnpacker(18, u(Uint8Array)), e.addExtUnpacker(19, [h, u(Int16Array)]), e.addExtUnpacker(20, [h, u(Uint16Array)]), e.addExtUnpacker(21, [h, u(Int32Array)]), e.addExtUnpacker(22, [h, u(Uint32Array)]), e.addExtUnpacker(23, [h, u(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [h, u(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, u(Uint8ClampedArray)), e.addExtUnpacker(26, h), e.addExtUnpacker(29, [h, u(DataView)]));
				i.hasBuffer && e.addExtUnpacker(27, u(s))
			};
			var r, i = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				s = i.global,
				o = {
					name: 1,
					message: 1,
					stack: 1,
					columnNumber: 1,
					fileName: 1,
					lineNumber: 1
				};

			function a(e) {
				return r || (r = n("./node_modules/msgpack-lite/lib/decode.js").decode), r(e)
			}

			function l(e) {
				return RegExp.apply(null, e)
			}

			function c(e) {
				return function(t) {
					var n = new e;
					for(var r in o) n[r] = t[r];
					return n
				}
			}

			function u(e) {
				return function(t) {
					return new e(t)
				}
			}

			function h(e) {
				return new Uint8Array(e).buffer
			}
		},
		"./node_modules/msgpack-lite/lib/ext.js": function(e, t, n) {
			n("./node_modules/msgpack-lite/lib/read-core.js"), n("./node_modules/msgpack-lite/lib/write-core.js"), t.createCodec = n("./node_modules/msgpack-lite/lib/codec-base.js").createCodec
		},
		"./node_modules/msgpack-lite/lib/flex-buffer.js": function(e, t, n) {
			t.FlexDecoder = s, t.FlexEncoder = o;
			var r = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				i = "BUFFER_SHORTAGE";

			function s() {
				if(!(this instanceof s)) return new s
			}

			function o() {
				if(!(this instanceof o)) return new o
			}

			function a() {
				throw new Error("method not implemented: write()")
			}

			function l() {
				throw new Error("method not implemented: fetch()")
			}

			function c() {
				return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
			}

			function u(e) {
				(this.buffers || (this.buffers = [])).push(e)
			}

			function h() {
				return (this.buffers || (this.buffers = [])).shift()
			}

			function A(e) {
				return function(t) {
					for(var n in e) t[n] = e[n];
					return t
				}
			}
			s.mixin = A({
				bufferish: r,
				write: function(e) {
					var t = this.offset ? r.prototype.slice.call(this.buffer, this.offset) : this.buffer;
					this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0
				},
				fetch: l,
				flush: function() {
					for(; this.offset < this.buffer.length;) {
						var e, t = this.offset;
						try {
							e = this.fetch()
						} catch (e) {
							if(e && e.message != i) throw e;
							this.offset = t;
							break
						}
						this.push(e)
					}
				},
				push: u,
				pull: h,
				read: c,
				reserve: function(e) {
					var t = this.offset,
						n = t + e;
					if(n > this.buffer.length) throw new Error(i);
					return this.offset = n, t
				},
				offset: 0
			}), s.mixin(s.prototype), o.mixin = A({
				bufferish: r,
				write: a,
				fetch: function() {
					var e = this.start;
					if(e < this.offset) {
						var t = this.start = this.offset;
						return r.prototype.slice.call(this.buffer, e, t)
					}
				},
				flush: function() {
					for(; this.start < this.offset;) {
						var e = this.fetch();
						e && this.push(e)
					}
				},
				push: u,
				pull: function() {
					var e = this.buffers || (this.buffers = []),
						t = e.length > 1 ? this.bufferish.concat(e) : e[0];
					return e.length = 0, t
				},
				read: c,
				reserve: function(e) {
					var t = 0 | e;
					if(this.buffer) {
						var n = this.buffer.length,
							r = 0 | this.offset,
							i = r + t;
						if(i < n) return this.offset = i, r;
						this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
					}
					return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0
				},
				send: function(e) {
					var t = e.length;
					if(t > this.minBufferSize) this.flush(), this.push(e);
					else {
						var n = this.reserve(t);
						r.prototype.copy.call(e, this.buffer, n)
					}
				},
				maxBufferSize: 65536,
				minBufferSize: 2048,
				offset: 0,
				start: 0
			}), o.mixin(o.prototype)
		},
		"./node_modules/msgpack-lite/lib/read-core.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer,
				i = n("./node_modules/msgpack-lite/lib/ext-unpacker.js"),
				s = n("./node_modules/msgpack-lite/lib/read-format.js").readUint8,
				o = n("./node_modules/msgpack-lite/lib/read-token.js"),
				a = n("./node_modules/msgpack-lite/lib/codec-base.js");

			function l() {
				var e = this.options;
				return this.decode = function(e) {
					var t = o.getReadToken(e);
					return function(e) {
						var n = s(e),
							r = t[n];
						if(!r) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
						return r(e)
					}
				}(e), e && e.preset && i.setExtUnpackers(this), this
			}
			a.install({
				addExtUnpacker: function(e, t) {
					(this.extUnpackers || (this.extUnpackers = []))[e] = a.filter(t)
				},
				getExtUnpacker: function(e) {
					return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
						return new r(t, e)
					}
				},
				init: l
			}), t.preset = l.call(a.preset)
		},
		"./node_modules/msgpack-lite/lib/read-format.js": function(e, t, n) {
			var r = n("./node_modules/ieee754/index.js"),
				i = n("./node_modules/int64-buffer/int64-buffer.js"),
				s = i.Uint64BE,
				o = i.Int64BE;
			t.getReadFormat = function(e) {
				var t = a.hasArrayBuffer && e && e.binarraybuffer,
					n = e && e.int64;
				return {
					map: c && e && e.usemap ? h : u,
					array: A,
					str: d,
					bin: t ? g : f,
					ext: p,
					uint8: m,
					uint16: y,
					uint32: b,
					uint64: x(8, n ? j : B),
					int8: w,
					int16: v,
					int32: k,
					int64: x(8, n ? D : C),
					float32: x(4, M),
					float64: x(8, O)
				}
			}, t.readUint8 = m;
			var a = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				l = n("./node_modules/msgpack-lite/lib/bufferish-proto.js"),
				c = "undefined" != typeof Map;

			function u(e, t) {
				var n, r = {},
					i = new Array(t),
					s = new Array(t),
					o = e.codec.decode;
				for(n = 0; n < t; n++) i[n] = o(e), s[n] = o(e);
				for(n = 0; n < t; n++) r[i[n]] = s[n];
				return r
			}

			function h(e, t) {
				var n, r = new Map,
					i = new Array(t),
					s = new Array(t),
					o = e.codec.decode;
				for(n = 0; n < t; n++) i[n] = o(e), s[n] = o(e);
				for(n = 0; n < t; n++) r.set(i[n], s[n]);
				return r
			}

			function A(e, t) {
				for(var n = new Array(t), r = e.codec.decode, i = 0; i < t; i++) n[i] = r(e);
				return n
			}

			function d(e, t) {
				var n = e.reserve(t),
					r = n + t;
				return l.toString.call(e.buffer, "utf-8", n, r)
			}

			function f(e, t) {
				var n = e.reserve(t),
					r = n + t,
					i = l.slice.call(e.buffer, n, r);
				return a.from(i)
			}

			function g(e, t) {
				var n = e.reserve(t),
					r = n + t,
					i = l.slice.call(e.buffer, n, r);
				return a.Uint8Array.from(i).buffer
			}

			function p(e, t) {
				var n = e.reserve(t + 1),
					r = e.buffer[n++],
					i = n + t,
					s = e.codec.getExtUnpacker(r);
				if(!s) throw new Error("Invalid ext type: " + (r ? "0x" + r.toString(16) : r));
				return s(l.slice.call(e.buffer, n, i))
			}

			function m(e) {
				var t = e.reserve(1);
				return e.buffer[t]
			}

			function w(e) {
				var t = e.reserve(1),
					n = e.buffer[t];
				return 128 & n ? n - 256 : n
			}

			function y(e) {
				var t = e.reserve(2),
					n = e.buffer;
				return n[t++] << 8 | n[t]
			}

			function v(e) {
				var t = e.reserve(2),
					n = e.buffer,
					r = n[t++] << 8 | n[t];
				return 32768 & r ? r - 65536 : r
			}

			function b(e) {
				var t = e.reserve(4),
					n = e.buffer;
				return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
			}

			function k(e) {
				var t = e.reserve(4),
					n = e.buffer;
				return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
			}

			function x(e, t) {
				return function(n) {
					var r = n.reserve(e);
					return t.call(n.buffer, r, true)
				}
			}

			function B(e) {
				return new s(this, e).toNumber()
			}

			function C(e) {
				return new o(this, e).toNumber()
			}

			function j(e) {
				return new s(this, e)
			}

			function D(e) {
				return new o(this, e)
			}

			function M(e) {
				return r.read(this, e, !1, 23, 4)
			}

			function O(e) {
				return r.read(this, e, !1, 52, 8)
			}
		},
		"./node_modules/msgpack-lite/lib/read-token.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/read-format.js");

			function i(e) {
				var t, n = new Array(256);
				for(t = 0; t <= 127; t++) n[t] = s(t);
				for(t = 128; t <= 143; t++) n[t] = a(t - 128, e.map);
				for(t = 144; t <= 159; t++) n[t] = a(t - 144, e.array);
				for(t = 160; t <= 191; t++) n[t] = a(t - 160, e.str);
				for(n[192] = s(null), n[193] = null, n[194] = s(!1), n[195] = s(!0), n[196] = o(e.uint8, e.bin), n[197] = o(e.uint16, e.bin), n[198] = o(e.uint32, e.bin), n[199] = o(e.uint8, e.ext), n[200] = o(e.uint16, e.ext), n[201] = o(e.uint32, e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = a(1, e.ext), n[213] = a(2, e.ext), n[214] = a(4, e.ext), n[215] = a(8, e.ext), n[216] = a(16, e.ext), n[217] = o(e.uint8, e.str), n[218] = o(e.uint16, e.str), n[219] = o(e.uint32, e.str), n[220] = o(e.uint16, e.array), n[221] = o(e.uint32, e.array), n[222] = o(e.uint16, e.map), n[223] = o(e.uint32, e.map), t = 224; t <= 255; t++) n[t] = s(t - 256);
				return n
			}

			function s(e) {
				return function() {
					return e
				}
			}

			function o(e, t) {
				return function(n) {
					var r = e(n);
					return t(n, r)
				}
			}

			function a(e, t) {
				return function(n) {
					return t(n, e)
				}
			}
			t.getReadToken = function(e) {
				var t = r.getReadFormat(e);
				return e && e.useraw ? function(e) {
					var t, n = i(e).slice();
					for(n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) n[t] = a(t - 160, e.bin);
					return n
				}(t) : i(t)
			}
		},
		"./node_modules/msgpack-lite/lib/write-core.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer,
				i = n("./node_modules/msgpack-lite/lib/ext-packer.js"),
				s = n("./node_modules/msgpack-lite/lib/write-type.js"),
				o = n("./node_modules/msgpack-lite/lib/codec-base.js");

			function a() {
				var e = this.options;
				return this.encode = function(e) {
					var t = s.getWriteType(e);
					return function(e, n) {
						var r = t[typeof n];
						if(!r) throw new Error('Unsupported type "' + typeof n + '": ' + n);
						r(e, n)
					}
				}(e), e && e.preset && i.setExtPackers(this), this
			}
			o.install({
				addExtPacker: function(e, t, n) {
					n = o.filter(n);
					var i = t.name;
					if(i && "Object" !== i) {
						(this.extPackers || (this.extPackers = {}))[i] = s
					} else {
						(this.extEncoderList || (this.extEncoderList = [])).unshift([t, s])
					}

					function s(t) {
						return n && (t = n(t)), new r(t, e)
					}
				},
				getExtPacker: function(e) {
					var t = this.extPackers || (this.extPackers = {}),
						n = e.constructor,
						r = n && n.name && t[n.name];
					if(r) return r;
					for(var i = this.extEncoderList || (this.extEncoderList = []), s = i.length, o = 0; o < s; o++) {
						var a = i[o];
						if(n === a[0]) return a[1]
					}
				},
				init: a
			}), t.preset = a.call(o.preset)
		},
		"./node_modules/msgpack-lite/lib/write-token.js": function(e, t, n) {
			var r = n("./node_modules/ieee754/index.js"),
				i = n("./node_modules/int64-buffer/int64-buffer.js"),
				s = i.Uint64BE,
				o = i.Int64BE,
				a = n("./node_modules/msgpack-lite/lib/write-uint8.js").uint8,
				l = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				c = l.global,
				u = l.hasBuffer && "TYPED_ARRAY_SUPPORT" in c && !c.TYPED_ARRAY_SUPPORT,
				h = l.hasBuffer && c.prototype || {};

			function A() {
				var e = a.slice();
				return e[196] = d(196), e[197] = f(197), e[198] = g(198), e[199] = d(199), e[200] = f(200), e[201] = g(201), e[202] = p(202, 4, h.writeFloatBE || y, !0), e[203] = p(203, 8, h.writeDoubleBE || v, !0), e[204] = d(204), e[205] = f(205), e[206] = g(206), e[207] = p(207, 8, m), e[208] = d(208), e[209] = f(209), e[210] = g(210), e[211] = p(211, 8, w), e[217] = d(217), e[218] = f(218), e[219] = g(219), e[220] = f(220), e[221] = g(221), e[222] = f(222), e[223] = g(223), e
			}

			function d(e) {
				return function(t, n) {
					var r = t.reserve(2),
						i = t.buffer;
					i[r++] = e, i[r] = n
				}
			}

			function f(e) {
				return function(t, n) {
					var r = t.reserve(3),
						i = t.buffer;
					i[r++] = e, i[r++] = n >>> 8, i[r] = n
				}
			}

			function g(e) {
				return function(t, n) {
					var r = t.reserve(5),
						i = t.buffer;
					i[r++] = e, i[r++] = n >>> 24, i[r++] = n >>> 16, i[r++] = n >>> 8, i[r] = n
				}
			}

			function p(e, t, n, r) {
				return function(i, s) {
					var o = i.reserve(t + 1);
					i.buffer[o++] = e, n.call(i.buffer, s, o, r)
				}
			}

			function m(e, t) {
				new s(this, t, e)
			}

			function w(e, t) {
				new o(this, t, e)
			}

			function y(e, t) {
				r.write(this, e, t, !1, 23, 4)
			}

			function v(e, t) {
				r.write(this, e, t, !1, 52, 8)
			}
			t.getWriteToken = function(e) {
				return e && e.uint8array ? ((t = A())[202] = p(202, 4, y), t[203] = p(203, 8, v), t) : u || l.hasBuffer && e && e.safe ? function() {
					var e = a.slice();
					return e[196] = p(196, 1, c.prototype.writeUInt8), e[197] = p(197, 2, c.prototype.writeUInt16BE), e[198] = p(198, 4, c.prototype.writeUInt32BE), e[199] = p(199, 1, c.prototype.writeUInt8), e[200] = p(200, 2, c.prototype.writeUInt16BE), e[201] = p(201, 4, c.prototype.writeUInt32BE), e[202] = p(202, 4, c.prototype.writeFloatBE), e[203] = p(203, 8, c.prototype.writeDoubleBE), e[204] = p(204, 1, c.prototype.writeUInt8), e[205] = p(205, 2, c.prototype.writeUInt16BE), e[206] = p(206, 4, c.prototype.writeUInt32BE), e[207] = p(207, 8, m), e[208] = p(208, 1, c.prototype.writeInt8), e[209] = p(209, 2, c.prototype.writeInt16BE), e[210] = p(210, 4, c.prototype.writeInt32BE), e[211] = p(211, 8, w), e[217] = p(217, 1, c.prototype.writeUInt8), e[218] = p(218, 2, c.prototype.writeUInt16BE), e[219] = p(219, 4, c.prototype.writeUInt32BE), e[220] = p(220, 2, c.prototype.writeUInt16BE), e[221] = p(221, 4, c.prototype.writeUInt32BE), e[222] = p(222, 2, c.prototype.writeUInt16BE), e[223] = p(223, 4, c.prototype.writeUInt32BE), e
				}() : A();
				var t
			}
		},
		"./node_modules/msgpack-lite/lib/write-type.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/node_modules/isarray/index.js"),
				i = n("./node_modules/int64-buffer/int64-buffer.js"),
				s = i.Uint64BE,
				o = i.Int64BE,
				a = n("./node_modules/msgpack-lite/lib/bufferish.js"),
				l = n("./node_modules/msgpack-lite/lib/bufferish-proto.js"),
				c = n("./node_modules/msgpack-lite/lib/write-token.js"),
				u = n("./node_modules/msgpack-lite/lib/write-uint8.js").uint8,
				h = n("./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer,
				A = "undefined" != typeof Uint8Array,
				d = "undefined" != typeof Map,
				f = [];
			f[1] = 212, f[2] = 213, f[4] = 214, f[8] = 215, f[16] = 216, t.getWriteType = function(e) {
				var t = c.getWriteToken(e),
					n = e && e.useraw,
					i = A && e && e.binarraybuffer,
					g = i ? a.isArrayBuffer : a.isBuffer,
					p = i ? function(e, t) {
						v(e, new Uint8Array(t))
					} : v,
					m = d && e && e.usemap ? function(e, n) {
						if(!(n instanceof Map)) return b(e, n);
						var r = n.size;
						t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
						var i = e.codec.encode;
						n.forEach(function(t, n, r) {
							i(e, n), i(e, t)
						})
					} : b;
				return {
					"boolean": function(e, n) {
						t[n ? 195 : 194](e, n)
					},
					"function": y,
					number: function(e, n) {
						var r, i = 0 | n;
						if(n !== i) return void t[r = 203](e, n);
						r = -32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210;
						t[r](e, i)
					},
					object: n ? function(e, n) {
						if(g(n)) return function(e, n) {
							var r = n.length;
							t[r < 32 ? 160 + r : r <= 65535 ? 218 : 219](e, r), e.send(n)
						}(e, n);
						w(e, n)
					} : w,
					string: function(e) {
						return n;

						function n(n, r) {
							var i = r.length,
								s = 5 + 3 * i;
							n.offset = n.reserve(s);
							var o = n.buffer,
								a = e(i),
								c = n.offset + a;
							i = l.write.call(o, r, c);
							var u = e(i);
							if(a !== u) {
								var h = c + u - a,
									A = c + i;
								l.copy.call(o, o, h, c, A)
							}
							t[1 === u ? 160 + i : u <= 3 ? 215 + u : 219](n, i), n.offset += i
						}
					}(n ? function(e) {
						return e < 32 ? 1 : e <= 65535 ? 3 : 5
					} : function(e) {
						return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
					}),
					symbol: y,
					undefined: y
				};

				function w(e, n) {
					if(null === n) return y(e, n);
					if(g(n)) return p(e, n);
					if(r(n)) return function(e, n) {
						var r = n.length;
						t[r < 16 ? 144 + r : r <= 65535 ? 220 : 221](e, r);
						for(var i = e.codec.encode, s = 0; s < r; s++) i(e, n[s])
					}(e, n);
					if(s.isUint64BE(n)) return function(e, n) {
						t[207](e, n.toArray())
					}(e, n);
					if(o.isInt64BE(n)) return function(e, n) {
						t[211](e, n.toArray())
					}(e, n);
					var i = e.codec.getExtPacker(n);
					if(i && (n = i(n)), n instanceof h) return function(e, n) {
						var r = n.buffer,
							i = r.length,
							s = f[i] || (i < 255 ? 199 : i <= 65535 ? 200 : 201);
						t[s](e, i), u[n.type](e), e.send(r)
					}(e, n);
					m(e, n)
				}

				function y(e, n) {
					t[192](e, n)
				}

				function v(e, n) {
					var r = n.length;
					t[r < 255 ? 196 : r <= 65535 ? 197 : 198](e, r), e.send(n)
				}

				function b(e, n) {
					var r = Object.keys(n),
						i = r.length;
					t[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
					var s = e.codec.encode;
					r.forEach(function(t) {
						s(e, t), s(e, n[t])
					})
				}
			}
		},
		"./node_modules/msgpack-lite/lib/write-uint8.js": function(e, t) {
			for(var n = t.uint8 = new Array(256), r = 0; r <= 255; r++) n[r] = i(r);

			function i(e) {
				return function(t) {
					var n = t.reserve(1);
					t.buffer[n] = e
				}
			}
		},
		"./node_modules/msgpack-lite/node_modules/isarray/index.js": function(e, t) {
			var n = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == n.call(e)
			}
		},
		"./node_modules/process/browser.js": function(e, t) {
			var n, r, i = e.exports = {};

			function s() {
				throw new Error("setTimeout has not been defined")
			}

			function o() {
				throw new Error("clearTimeout has not been defined")
			}

			function a(e) {
				if(n === setTimeout) return setTimeout(e, 0);
				if((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
				try {
					return n(e, 0)
				} catch (t) {
					try {
						return n.call(null, e, 0)
					} catch (t) {
						return n.call(this, e, 0)
					}
				}
			}! function() {
				try {
					n = "function" == typeof setTimeout ? setTimeout : s
				} catch (e) {
					n = s
				}
				try {
					r = "function" == typeof clearTimeout ? clearTimeout : o
				} catch (e) {
					r = o
				}
			}();
			var l, c = [],
				u = !1,
				h = -1;

			function A() {
				u && l && (u = !1, l.length ? c = l.concat(c) : h = -1, c.length && d())
			}

			function d() {
				if(!u) {
					var e = a(A);
					u = !0;
					for(var t = c.length; t;) {
						for(l = c, c = []; ++h < t;) l && l[h].run();
						h = -1, t = c.length
					}
					l = null, u = !1,
						function(e) {
							if(r === clearTimeout) return clearTimeout(e);
							if((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
							try {
								r(e)
							} catch (t) {
								try {
									return r.call(null, e)
								} catch (t) {
									return r.call(this, e)
								}
							}
						}(e)
				}
			}

			function f(e, t) {
				this.fun = e, this.array = t
			}

			function g() {}
			i.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if(arguments.length > 1)
					for(var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				c.push(new f(e, t)), 1 !== c.length || u || a(d)
			}, f.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(e) {
				return []
			}, i.binding = function(e) {
				throw new Error("process.binding is not supported")
			}, i.cwd = function() {
				return "/"
			}, i.chdir = function(e) {
				throw new Error("process.chdir is not supported")
			}, i.umask = function() {
				return 0
			}
		},
		"./node_modules/punycode/punycode.js": function(e, t, n) {
			(function(e, r) {
				var i;
				! function(s) {
					t && t.nodeType, e && e.nodeType;
					var o = "object" == typeof r && r;
					o.global !== o && o.window !== o && o.self;
					var a, l = 2147483647,
						c = 36,
						u = /^xn--/,
						h = /[^\x20-\x7E]/,
						A = /[\x2E\u3002\uFF0E\uFF61]/g,
						d = {
							overflow: "Overflow: input needs wider integers to process",
							"not-basic": "Illegal input >= 0x80 (not a basic code point)",
							"invalid-input": "Invalid input"
						},
						f = Math.floor,
						g = String.fromCharCode;

					function p(e) {
						throw new RangeError(d[e])
					}

					function m(e, t) {
						for(var n = e.length, r = []; n--;) r[n] = t(e[n]);
						return r
					}

					function w(e, t) {
						var n = e.split("@"),
							r = "";
						return n.length > 1 && (r = n[0] + "@", e = n[1]), r + m((e = e.replace(A, ".")).split("."), t).join(".")
					}

					function y(e) {
						for(var t, n, r = [], i = 0, s = e.length; i < s;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < s ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
						return r
					}

					function v(e) {
						return m(e, function(e) {
							var t = "";
							return e > 65535 && (t += g((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += g(e)
						}).join("")
					}

					function b(e, t) {
						return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
					}

					function k(e, t, n) {
						var r = 0;
						for(e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += c) e = f(e / 35);
						return f(r + 36 * e / (e + 38))
					}

					function x(e) {
						var t, n, r, i, s, o, a, u, h, A, d, g = [],
							m = e.length,
							w = 0,
							y = 128,
							b = 72;
						for((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && p("not-basic"), g.push(e.charCodeAt(r));
						for(i = n > 0 ? n + 1 : 0; i < m;) {
							for(s = w, o = 1, a = c; i >= m && p("invalid-input"), ((u = (d = e.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : c) >= c || u > f((l - w) / o)) && p("overflow"), w += u * o, !(u < (h = a <= b ? 1 : a >= b + 26 ? 26 : a - b)); a += c) o > f(l / (A = c - h)) && p("overflow"), o *= A;
							b = k(w - s, t = g.length + 1, 0 == s), f(w / t) > l - y && p("overflow"), y += f(w / t), w %= t, g.splice(w++, 0, y)
						}
						return v(g)
					}

					function B(e) {
						var t, n, r, i, s, o, a, u, h, A, d, m, w, v, x, B = [];
						for(m = (e = y(e)).length, t = 128, n = 0, s = 72, o = 0; o < m; ++o)(d = e[o]) < 128 && B.push(g(d));
						for(r = i = B.length, i && B.push("-"); r < m;) {
							for(a = l, o = 0; o < m; ++o)(d = e[o]) >= t && d < a && (a = d);
							for(a - t > f((l - n) / (w = r + 1)) && p("overflow"), n += (a - t) * w, t = a, o = 0; o < m; ++o)
								if((d = e[o]) < t && ++n > l && p("overflow"), d == t) {
									for(u = n, h = c; !(u < (A = h <= s ? 1 : h >= s + 26 ? 26 : h - s)); h += c) x = u - A, v = c - A, B.push(g(b(A + x % v, 0))), u = f(x / v);
									B.push(g(b(u, 0))), s = k(n, w, r == i), n = 0, ++r
								}++ n, ++t
						}
						return B.join("")
					}
					a = {
						version: "1.4.1",
						ucs2: {
							decode: y,
							encode: v
						},
						decode: x,
						encode: B,
						toASCII: function(e) {
							return w(e, function(e) {
								return h.test(e) ? "xn--" + B(e) : e
							})
						},
						toUnicode: function(e) {
							return w(e, function(e) {
								return u.test(e) ? x(e.slice(4).toLowerCase()) : e
							})
						}
					}, void 0 === (i = function() {
						return a
					}.call(t, n, t, e)) || (e.exports = i)
				}()
			}).call(this, n("./node_modules/webpack/buildin/module.js")(e), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/querystring-es3/decode.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			e.exports = function(e, t, n, s) {
				t = t || "&", n = n || "=";
				var o = {};
				if("string" != typeof e || 0 === e.length) return o;
				var a = /\+/g;
				e = e.split(t);
				var l = 1e3;
				s && "number" == typeof s.maxKeys && (l = s.maxKeys);
				var c = e.length;
				l > 0 && c > l && (c = l);
				for(var u = 0; u < c; ++u) {
					var h, A, d, f, g = e[u].replace(a, "%20"),
						p = g.indexOf(n);
					p >= 0 ? (h = g.substr(0, p), A = g.substr(p + 1)) : (h = g, A = ""), d = decodeURIComponent(h), f = decodeURIComponent(A), r(o, d) ? i(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f
				}
				return o
			};
			var i = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			}
		},
		"./node_modules/querystring-es3/encode.js": function(e, t, n) {
			"use strict";
			var r = function(e) {
				switch(typeof e) {
					case "string":
						return e;
					case "boolean":
						return e ? "true" : "false";
					case "number":
						return isFinite(e) ? e : "";
					default:
						return ""
				}
			};
			e.exports = function(e, t, n, a) {
				return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? s(o(e), function(o) {
					var a = encodeURIComponent(r(o)) + n;
					return i(e[o]) ? s(e[o], function(e) {
						return a + encodeURIComponent(r(e))
					}).join(t) : a + encodeURIComponent(r(e[o]))
				}).join(t) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(e)) : ""
			};
			var i = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};

			function s(e, t) {
				if(e.map) return e.map(t);
				for(var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
				return n
			}
			var o = Object.keys || function(e) {
				var t = [];
				for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
				return t
			}
		},
		"./node_modules/querystring-es3/index.js": function(e, t, n) {
			"use strict";
			t.decode = t.parse = n("./node_modules/querystring-es3/decode.js"), t.encode = t.stringify = n("./node_modules/querystring-es3/encode.js")
		},
		"./node_modules/url/url.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/punycode/punycode.js"),
				i = n("./node_modules/url/util.js");

			function s() {
				this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
			}
			t.parse = y, t.resolve = function(e, t) {
				return y(e, !1, !0).resolve(t)
			}, t.resolveObject = function(e, t) {
				return e ? y(e, !1, !0).resolveObject(t) : t
			}, t.format = function(e) {
				i.isString(e) && (e = y(e));
				return e instanceof s ? e.format() : s.prototype.format.call(e)
			}, t.Url = s;
			var o = /^([a-z0-9.+-]+:)/i,
				a = /:[0-9]*$/,
				l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
				c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
				u = ["'"].concat(c),
				h = ["%", "/", "?", ";", "#"].concat(u),
				A = ["/", "?", "#"],
				d = /^[+a-z0-9A-Z_-]{0,63}$/,
				f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
				g = {
					javascript: !0,
					"javascript:": !0
				},
				p = {
					javascript: !0,
					"javascript:": !0
				},
				m = {
					http: !0,
					https: !0,
					ftp: !0,
					gopher: !0,
					file: !0,
					"http:": !0,
					"https:": !0,
					"ftp:": !0,
					"gopher:": !0,
					"file:": !0
				},
				w = n("./node_modules/querystring-es3/index.js");

			function y(e, t, n) {
				if(e && i.isObject(e) && e instanceof s) return e;
				var r = new s;
				return r.parse(e, t, n), r
			}
			s.prototype.parse = function(e, t, n) {
				if(!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
				var s = e.indexOf("?"),
					a = -1 !== s && s < e.indexOf("#") ? "?" : "#",
					c = e.split(a);
				c[0] = c[0].replace(/\\/g, "/");
				var y = e = c.join(a);
				if(y = y.trim(), !n && 1 === e.split("#").length) {
					var v = l.exec(y);
					if(v) return this.path = y, this.href = y, this.pathname = v[1], v[2] ? (this.search = v[2], this.query = t ? w.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
				}
				var b = o.exec(y);
				if(b) {
					var k = (b = b[0]).toLowerCase();
					this.protocol = k, y = y.substr(b.length)
				}
				if(n || b || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var x = "//" === y.substr(0, 2);
					!x || b && p[b] || (y = y.substr(2), this.slashes = !0)
				}
				if(!p[b] && (x || b && !m[b])) {
					for(var B, C, j = -1, D = 0; D < A.length; D++) {
						-1 !== (M = y.indexOf(A[D])) && (-1 === j || M < j) && (j = M)
					} - 1 !== (C = -1 === j ? y.lastIndexOf("@") : y.lastIndexOf("@", j)) && (B = y.slice(0, C), y = y.slice(C + 1), this.auth = decodeURIComponent(B)), j = -1;
					for(D = 0; D < h.length; D++) {
						var M; - 1 !== (M = y.indexOf(h[D])) && (-1 === j || M < j) && (j = M)
					} - 1 === j && (j = y.length), this.host = y.slice(0, j), y = y.slice(j), this.parseHost(), this.hostname = this.hostname || "";
					var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if(!O)
						for(var T = this.hostname.split(/\./), P = (D = 0, T.length); D < P; D++) {
							var E = T[D];
							if(E && !E.match(d)) {
								for(var I = "", q = 0, H = E.length; q < H; q++) E.charCodeAt(q) > 127 ? I += "x" : I += E[q];
								if(!I.match(d)) {
									var X = T.slice(0, D),
										S = T.slice(D + 1),
										V = E.match(f);
									V && (X.push(V[1]), S.unshift(V[2])), S.length && (y = "/" + S.join(".") + y), this.hostname = X.join(".");
									break
								}
							}
						}
					this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = r.toASCII(this.hostname));
					var z = this.port ? ":" + this.port : "",
						R = this.hostname || "";
					this.host = R + z, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
				}
				if(!g[k])
					for(D = 0, P = u.length; D < P; D++) {
						var L = u[D];
						if(-1 !== y.indexOf(L)) {
							var Y = encodeURIComponent(L);
							Y === L && (Y = escape(L)), y = y.split(L).join(Y)
						}
					}
				var W = y.indexOf("#"); - 1 !== W && (this.hash = y.substr(W), y = y.slice(0, W));
				var U = y.indexOf("?");
				if(-1 !== U ? (this.search = y.substr(U), this.query = y.substr(U + 1), t && (this.query = w.parse(this.query)), y = y.slice(0, U)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), m[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
					z = this.pathname || "";
					var N = this.search || "";
					this.path = z + N
				}
				return this.href = this.format(), this
			}, s.prototype.format = function() {
				var e = this.auth || "";
				e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
				var t = this.protocol || "",
					n = this.pathname || "",
					r = this.hash || "",
					s = !1,
					o = "";
				this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
				var a = this.search || o && "?" + o || "";
				return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== s ? (s = "//" + (s || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : s || (s = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + s + (n = n.replace(/[?#]/g, function(e) {
					return encodeURIComponent(e)
				})) + (a = a.replace("#", "%23")) + r
			}, s.prototype.resolve = function(e) {
				return this.resolveObject(y(e, !1, !0)).format()
			}, s.prototype.resolveObject = function(e) {
				if(i.isString(e)) {
					var t = new s;
					t.parse(e, !1, !0), e = t
				}
				for(var n = new s, r = Object.keys(this), o = 0; o < r.length; o++) {
					var a = r[o];
					n[a] = this[a]
				}
				if(n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
				if(e.slashes && !e.protocol) {
					for(var l = Object.keys(e), c = 0; c < l.length; c++) {
						var u = l[c];
						"protocol" !== u && (n[u] = e[u])
					}
					return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
				}
				if(e.protocol && e.protocol !== n.protocol) {
					if(!m[e.protocol]) {
						for(var h = Object.keys(e), A = 0; A < h.length; A++) {
							var d = h[A];
							n[d] = e[d]
						}
						return n.href = n.format(), n
					}
					if(n.protocol = e.protocol, e.host || p[e.protocol]) n.pathname = e.pathname;
					else {
						for(var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
						e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/")
					}
					if(n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
						var g = n.pathname || "",
							w = n.search || "";
						n.path = g + w
					}
					return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
				}
				var y = n.pathname && "/" === n.pathname.charAt(0),
					v = e.host || e.pathname && "/" === e.pathname.charAt(0),
					b = v || y || n.host && e.pathname,
					k = b,
					x = n.pathname && n.pathname.split("/") || [],
					B = (f = e.pathname && e.pathname.split("/") || [], n.protocol && !m[n.protocol]);
				if(B && (n.hostname = "", n.port = null, n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), b = b && ("" === f[0] || "" === x[0])), v) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, x = f;
				else if(f.length) x || (x = []), x.pop(), x = x.concat(f), n.search = e.search, n.query = e.query;
				else if(!i.isNullOrUndefined(e.search)) {
					if(B) n.hostname = n.host = x.shift(), (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), n.host = n.hostname = O.shift());
					return n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
				}
				if(!x.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
				for(var C = x.slice(-1)[0], j = (n.host || e.host || x.length > 1) && ("." === C || ".." === C) || "" === C, D = 0, M = x.length; M >= 0; M--) "." === (C = x[M]) ? x.splice(M, 1) : ".." === C ? (x.splice(M, 1), D++) : D && (x.splice(M, 1), D--);
				if(!b && !k)
					for(; D--; D) x.unshift("..");
				!b || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), j && "/" !== x.join("/").substr(-1) && x.push("");
				var O, T = "" === x[0] || x[0] && "/" === x[0].charAt(0);
				B && (n.hostname = n.host = T ? "" : x.length ? x.shift() : "", (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), n.host = n.hostname = O.shift()));
				return (b = b || n.host && x.length) && !T && x.unshift(""), x.length ? n.pathname = x.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
			}, s.prototype.parseHost = function() {
				var e = this.host,
					t = a.exec(e);
				t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
			}
		},
		"./node_modules/url/util.js": function(e, t, n) {
			"use strict";
			e.exports = {
				isString: function(e) {
					return "string" == typeof e
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e
				},
				isNull: function(e) {
					return null === e
				},
				isNullOrUndefined: function(e) {
					return null == e
				}
			}
		},
		"./node_modules/webpack/buildin/global.js": function(e, t) {
			var n;
			n = function() {
				return this
			}();
			try {
				n = n || new Function("return this")()
			} catch (e) {
				"object" == typeof window && (n = window)
			}
			e.exports = n
		},
		"./node_modules/webpack/buildin/module.js": function(e, t) {
			e.exports = function(e) {
				return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						return e.i
					}
				}), e.webpackPolyfill = 1), e
			}
		},
		"./src/js/app.js": function(e, t, n) {
			"use strict";
			window.loadedScript = !0;
			var r = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
			n("./src/js/libs/modernizr.js");
			var i = n("./src/js/libs/io-client.js"),
				s = n("./src/js/libs/utils.js"),
				o = n("./src/js/libs/animText.js"),
				a = n("./src/js/config.js"),
				l = n("./src/js/data/gameObject.js"),
				c = n("./src/js/data/items.js"),
				u = (n("./src/js/data/mapManager.js"), n("./src/js/data/objectManager.js")),
				h = n("./src/js/data/player.js"),
				A = n("./src/js/data/store.js"),
				d = n("./src/js/data/projectile.js"),
				f = n("./src/js/data/projectileManager.js"),
				g = n("./src/js/libs/soundManager.js").obj,
				p = new o.TextManager,
				m = new(n("./vultr/VultrClient.js"))("moomoo.io", 3e3, a.maxPlayers, 5, !1);
			m.debugLog = !1;
			var w = !1;

			function y() {
				ht && At && (w = !0, r ? window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
					action: "homepage"
				}).then(function(e) {
					v(e)
				}) : v(null))
			}

			function v(e) {
				m.start(function(t, n, o) {
					var l = (r ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + o;
					e && (l += "&token=" + encodeURIComponent(e)), i.connect(l, function(e) {
						Nr(), setInterval(() => Nr(), 2500), e ? dt(e) : (!0, he.onclick = s.checkTrusted(function() {
							var e, t;
							e = ++yt > 1, t = Date.now() - wt > mt, e && t ? (wt = Date.now(), vt()) : bn()
						}), s.hookTouchEvents(he), Ae.onclick = s.checkTrusted(function() {
							Fr("https://krunker.io/?play=SquidGame_KB")
						}), s.hookTouchEvents(Ae), fe.onclick = s.checkTrusted(function() {
							setTimeout(function() {
								var e, t;
								e = ke.value, (t = prompt("party key", e)) && (window.onbeforeunload = void 0, window.location.href = "/?server=" + t)
							}, 10)
						}), s.hookTouchEvents(fe), ge.onclick = s.checkTrusted(function() {
							Me.classList.contains("showing") ? (Me.classList.remove("showing"), pe.innerText = "Settings") : (Me.classList.add("showing"), pe.innerText = "Close")
						}), s.hookTouchEvents(ge), me.onclick = s.checkTrusted(function() {
							fn(), "block" != Ue.style.display ? It() : Ue.style.display = "none"
						}), s.hookTouchEvents(me), we.onclick = s.checkTrusted(function() {
							"block" != Ke.style.display ? (Ke.style.display = "block", Ue.style.display = "none", rn(), Qt()) : Ke.style.display = "none"
						}), s.hookTouchEvents(we), ye.onclick = s.checkTrusted(function() {
							tn()
						}), s.hookTouchEvents(ye), Fe.onclick = s.checkTrusted(function() {
							yn()
						}), s.hookTouchEvents(Fe), function() {
							for(var e = 0; e < Wn.length; ++e) {
								var t = new Image;
								t.onload = function() {
									this.isLoaded = !0
								}, t.src = ".././img/icons/" + Wn[e] + ".png", Yn[Wn[e]] = t
							}
						}(), Oe.style.display = "none", De.style.display = "block", Ve.value = j("moo_name") || "", function() {
							var e = j("native_resolution");
							Kt(e ? "true" == e : "undefined" != typeof cordova), M = "true" == j("show_ping"), Ce.hidden = !M, j("moo_moosic") || 0, setInterval(function() {
								window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
							}, 1e3), Jt(), s.removeAllChildren(Pe);
							for(var t = 0; t < c.weapons.length + c.list.length; ++t) ! function(e) {
								s.generateElement({
									id: "actionBarItem" + e,
									"class": "actionBarItem",
									style: "display:none",
									onmouseout: function() {
										bt()
									},
									parent: Pe
								})
							}(t);
							for(t = 0; t < c.list.length + c.weapons.length; ++t) ! function(e) {
								var t = document.createElement("canvas");
								t.width = t.height = 66;
								var n = t.getContext("2d");
								if(n.translate(t.width / 2, t.height / 2), n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, c.weapons[e]) {
									n.rotate(Math.PI / 4 + Math.PI);
									var r = new Image;
									ur[c.weapons[e].src] = r, r.onload = function() {
										this.isLoaded = !0;
										var r = 1 / (this.height / this.width),
											i = c.weapons[e].iPad || 1;
										n.drawImage(this, -t.width * i * a.iconPad * r / 2, -t.height * i * a.iconPad / 2, t.width * i * r * a.iconPad, t.height * i * a.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-t.width / 2, -t.height / 2, t.width, t.height), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")"
									}, r.src = ".././img/weapons/" + c.weapons[e].src + ".png", (i = document.getElementById("actionBarItem" + e)).onmouseover = s.checkTrusted(function() {
										bt(c.weapons[e], !0)
									}), i.onclick = s.checkTrusted(function() {
										vn(e, !0)
									}), s.hookTouchEvents(i)
								} else {
									r = gr(c.list[e - c.weapons.length], !0);
									var i, o = Math.min(t.width - a.iconPadding, r.width);
									n.globalAlpha = 1, n.drawImage(r, -o / 2, -o / 2, o, o), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-o / 2, -o / 2, o, o), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")", (i = document.getElementById("actionBarItem" + e)).onmouseover = s.checkTrusted(function() {
										bt(c.list[e - c.weapons.length])
									}), i.onclick = s.checkTrusted(function() {
										vn(e - c.weapons.length)
									}), s.hookTouchEvents(i)
								}
							}(t);
							Ve.ontouchstart = s.checkTrusted(function(e) {
								e.preventDefault();
								var t = prompt("enter name", e.currentTarget.value);
								e.currentTarget.value = t.slice(0, 15)
							}), xe.checked = D, xe.onchange = s.checkTrusted(function(e) {
								Kt(e.target.checked)
							}), Be.checked = M, Be.onchange = s.checkTrusted(function(e) {
								M = Be.checked, Ce.hidden = !M, C("show_ping", M ? "true" : "false")
							})
						}())
					}, {
						id: ot,
						d: dt,
						1: xn,
						2: Tr,
						4: Pr,
						33: Xr,
						5: Fn,
						6: vr,
						a: jr,
						aa: Cr,
						7: tr,
						8: br,
						sp: kr,
						9: Ir,
						h: Hr,
						11: Vn,
						12: Rn,
						13: zn,
						14: Er,
						15: Qn,
						16: Nn,
						17: Zt,
						18: xr,
						19: Br,
						20: Qr,
						ac: Ot,
						ad: Et,
						an: Dt,
						st: Tt,
						sa: Pt,
						us: Nt,
						ch: an,
						mm: Wt,
						t: Xn,
						p: Yt,
						pp: Ur
					}), gt(), setTimeout(() => pt(), 3e3)
				}, function(e) {
					console.error("Vultr error:", e), alert("Error:\n" + e), dt("disconnected")
				})
			}
			var b = new g(a, s);
			var k, x = Math.PI,
				B = 2 * x;

			function C(e, t) {
				k && localStorage.setItem(e, t)
			}

			function j(e) {
				return k ? localStorage.getItem(e) : null
			}
			Math.lerpAngle = function(e, t, n) {
				Math.abs(t - e) > x && (e > t ? t += B : e += B);
				var r = t + (e - t) * n;
				return r >= 0 && r <= B ? r : r % B
			}, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, r, i) {
				return n < 2 * i && (i = n / 2), r < 2 * i && (i = r / 2), i < 0 && (i = 0), this.beginPath(), this.moveTo(e + i, t), this.arcTo(e + n, t, e + n, t + r, i), this.arcTo(e + n, t + r, e, t + r, i), this.arcTo(e, t + r, e, t, i), this.arcTo(e, t, e + n, t, i), this.closePath(), this
			}, CanvasRenderingContext2D.prototype.rigidLRect = function(e, t, n, r, i) {
				return n < 2 * i && (i = n / 2), r < 2 * i && (i = r / 2), i < 0 && (i = 0), this.beginPath(), this.moveTo(e + i, t), this.lineTo(e + n, t, e + n, t + r, i), this.lineTo(e + n, t + r, e, t + r, i), this.arcTo(e, t + r, e, t, i), this.arcTo(e, t, e + n, t, i), this.closePath(), this
			}, CanvasRenderingContext2D.prototype.rigidRRect = function(e, t, n, r, i) {
				return n < 2 * i && (i = n / 2), r < 2 * i && (i = r / 2), i < 0 && (i = 0), this.beginPath(), this.moveTo(e + i, t), this.arcTo(e + n, t, e + n, t + r, i), this.arcTo(e + n, t + r, e, t + r, i), this.lineTo(e, t + r, e, t, i), this.lineTo(e, t, e + n, t, i), this.closePath(), this
			}, "undefined" != typeof Storage && (k = !0), j("consent") || (consentBlock.style.display = "block"), window.checkTerms = function(e) {
				e ? (consentBlock.style.display = "none", C("consent", 1)) : $("#consentShake").effect("shake")
			};
			var D, M, O = j("moofoll");
			var T, P, E, I, q, H, X, S, V, z, R, L, Y = 1,
				W = Date.now(),
				U = [],
				N = [],
				Q = [],
				F = [],
				G = [],
				_ = new f(d, G, N, U, nt, c, a, s),
				Z = n("./src/js/data/aiManager.js"),
				K = n("./src/js/data/ai.js"),
				J = new Z(U, K, N, c, null, a, s),
				ee = 1,
				te = 0,
				ne = 0,
				re = 0,
				ie = {
					id: -1,
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0
				},
				se = {
					id: -1,
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0
				},
				oe = 0,
				ae = a.maxScreenWidth,
				le = a.maxScreenHeight,
				ce = !1,
				ue = (document.getElementById("ad-container"), document.getElementById("mainMenu")),
				he = document.getElementById("enterGame"),
				Ae = document.getElementById("promoImg"),
				de = document.getElementById("partyButton"),
				fe = document.getElementById("joinPartyButton"),
				ge = document.getElementById("settingsButton"),
				pe = ge.getElementsByTagName("span")[0],
				me = document.getElementById("allianceButton"),
				we = document.getElementById("storeButton"),
				ye = document.getElementById("chatButton"),
				ve = document.getElementById("gameCanvas"),
				be = ve.getContext("2d"),
				ke = document.getElementById("serverBrowser"),
				xe = document.getElementById("nativeResolution"),
				Be = document.getElementById("showPing"),
				Ce = (document.getElementById("playMusic"), document.getElementById("pingDisplay")),
				je = document.getElementById("shutdownDisplay"),
				De = document.getElementById("menuCardHolder"),
				Me = document.getElementById("guideCard"),
				Oe = document.getElementById("loadingText"),
				Te = document.getElementById("gameUI"),
				Pe = document.getElementById("actionBar"),
				Ee = document.getElementById("scoreDisplay"),
				Ie = document.getElementById("foodDisplay"),
				qe = document.getElementById("woodDisplay"),
				He = document.getElementById("stoneDisplay"),
				Xe = document.getElementById("killCounter"),
				Se = document.getElementById("leaderboardData"),
				Ve = document.getElementById("nameInput"),
				ze = document.getElementById("itemInfoHolder"),
				Re = document.getElementById("ageText"),
				Le = document.getElementById("ageBarBody"),
				Ye = document.getElementById("upgradeHolder"),
				We = document.getElementById("upgradeCounter"),
				Ue = document.getElementById("allianceMenu"),
				Ne = document.getElementById("allianceHolder"),
				Qe = document.getElementById("allianceManager"),
				Fe = document.getElementById("mapDisplay"),
				Ge = document.getElementById("diedText"),
				_e = document.getElementById("skinColorHolder"),
				Ze = Fe.getContext("2d");
			Fe.width = 300, Fe.height = 300;
			var Ke = document.getElementById("storeMenu"),
				Je = document.getElementById("storeHolder"),
				$e = document.getElementById("noticationDisplay"),
				et = A.hats,
				tt = A.accessories,
				nt = new u(l, F, s, a),
				rt = "#525252",
				it = "#3d3f42",
				st = 5.5;

			function ot(e) {
				Q = e.teams
			}
			var at = document.getElementById("featuredYoutube"),
				lt = [{
					name: "Corrupt X",
					link: "https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw"
				}, {
					name: "Tweak Big",
					link: "https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw"
				}, {
					name: "Arena Closer",
					link: "https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ"
				}, {
					name: "Godenot",
					link: "https://www.youtube.com/user/SirGodenot"
				}, {
					name: "RajNoobTV",
					link: "https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q"
				}, {
					name: "TomNotTom",
					link: "https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw"
				}, {
					name: "Nation",
					link: "https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g"
				}, {
					name: "Pidyohago",
					link: "https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q"
				}, {
					name: "Enigma",
					link: "https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg"
				}, {
					name: "Bauer",
					link: "https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g"
				}, {
					name: "iStealth",
					link: "https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A"
				}, {
					name: "SICKmania",
					link: "https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g"
				}, {
					name: "LightThief",
					link: "https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ"
				}, {
					name: "Fortish",
					link: "https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q"
				}, {
					name: "巧克力",
					link: "https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg"
				}, {
					name: "i Febag",
					link: "https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg"
				}, {
					name: "GoneGaming",
					link: "https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g"
				}],
				ct = lt[s.randInt(0, lt.length - 1)];
			at.innerHTML = "<a target='_blank' class='ytLink' href='" + ct.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + ct.name + "</a>";
			var ut = !0,
				ht = !1,
				At = !1;

			function dt(e) {
				!1, i.close(), ft(e)
			}

			function ft(e) {
				ue.style.display = "block", Te.style.display = "none", De.style.display = "none", Ge.style.display = "none", Oe.style.display = "block", Oe.innerHTML = e + "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"
			}
			window.onblur = function() {
				ut = !1
			}, window.onfocus = function() {
				ut = !0, q && q.alive && fn()
			}, window.onload = function() {
				ht = !0, y(), setTimeout(function() {
					w || (alert("Captcha failed to load"), window.location.reload())
				}, 2e4)
			}, window.captchaCallback = function() {
				At = !0, y()
			}, ve.oncontextmenu = function() {
				return !1
			};

			function gt() {
				var e, t, n = "",
					r = 0;
				for(var i in m.servers) {
					for(var s = m.servers[i], o = 0, l = 0; l < s.length; l++)
						for(var c = 0; c < s[l].games.length; c++) o += s[l].games[c].playerCount;
					r += o;
					var u = m.regionInfo[i].name;
					n += "<option disabled>" + u + " - " + o + " players</option>";
					for(var h = 0; h < s.length; h++)
						for(var A = s[h], d = 0; d < A.games.length; d++) {
							var f = A.games[d],
								g = 1 * A.index + d + 1,
								p = m.server && m.server.region === A.region && m.server.index === A.index && m.gameIndex == d,
								w = u + " " + g + " [" + Math.min(f.playerCount, a.maxPlayers) + "/" + a.maxPlayers + "]";
							let e = m.stripRegion(i) + ":" + h + ":" + d;
							p && (de.getElementsByTagName("span")[0].innerText = e), n += "<option value='" + e + "' " + (p ? "selected" : "") + ">" + w + "</option>"
						}
					n += "<option disabled></option>"
				}
				n += "<option disabled>All Servers - " + r + " players</option>", ke.innerHTML = n, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t = "//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"), document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
			}

			function pt() {
				var e = new XMLHttpRequest;
				e.onreadystatechange = function() {
					4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText), m.processServers(vultr.servers), gt()) : console.error("Failed to load server data with status code:", this.status))
				}, e.open("GET", "/serverData", !0), e.send()
			}
			ke.addEventListener("change", s.checkTrusted(function() {
				let e = ke.value.split(":");
				m.switchServer(e[0], e[1], e[2])
			}));
			document.getElementById("pre-content-container");
			var mt = 3e5,
				wt = 0,
				yt = 0;

			function vt() {
				return cpmstarAPI, console.log("Failed to load video ad API", !!cpmstarAPI, !1), void bn()
			}

			function bt(e, t, n) {
				if(q && e)
					if(s.removeAllChildren(ze), ze.classList.add("visible"), s.generateElement({
							id: "itemInfoName",
							text: s.capitalizeFirst(e.name),
							parent: ze
						}), s.generateElement({
							id: "itemInfoDesc",
							text: e.desc,
							parent: ze
						}), n);
					else if(t) s.generateElement({
					"class": "itemInfoReq",
					text: e.type ? "secondary" : "primary",
					parent: ze
				});
				else {
					for(var r = 0; r < e.req.length; r += 2) s.generateElement({
						"class": "itemInfoReq",
						html: e.req[r] + "<span class='itemInfoReqVal'> x" + e.req[r + 1] + "</span>",
						parent: ze
					});
					e.group.limit && s.generateElement({
						"class": "itemInfoLmt",
						text: (q.itemCounts[e.group.id] || 0) + "/" + e.group.limit,
						parent: ze
					})
				} else ze.classList.remove("visible")
			}
			window.showPreAd = vt, window.isAlly = function(e) {
				for(let t = 0; t < jt.length; t += 2)
					if(e == jt[t]) return !0
			};
			var kt, xt, Bt, Ct = [],
				jt = [];

			function Dt(e, t) {
				Ct.push({
					sid: e,
					name: t
				}), Mt()
			}

			function Mt() {
				if(Ct[0]) {
					var e = Ct[0];
					s.removeAllChildren($e), $e.style.display = "block", s.generateElement({
						"class": "notificationText",
						text: e.name,
						parent: $e
					}), s.generateElement({
						"class": "notifButton",
						html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
						parent: $e,
						onclick: function() {
							qt(0)
						},
						hookTouch: !0
					}), s.generateElement({
						"class": "notifButton",
						html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
						parent: $e,
						onclick: function() {
							qt(1)
						},
						hookTouch: !0
					})
				} else $e.style.display = "none"
			}

			function Ot(e) {
				Q.push(e), "block" == Ue.style.display && It()
			}

			function Tt(e, t) {
				q && (q.team = e, q.isOwner = t, "block" == Ue.style.display && It())
			}

			function Pt(e) {
				jt = e, "block" == Ue.style.display && It()
			}

			function Et(e) {
				for(var t = Q.length - 1; t >= 0; t--) Q[t].sid == e && Q.splice(t, 1);
				"block" == Ue.style.display && It()
			}

			function It() {
				if(q && q.alive) {
					if(rn(), Ke.style.display = "none", Ue.style.display = "block", s.removeAllChildren(Ne), q.team)
						for(var e = 0; e < jt.length; e += 2) ! function(e) {
							var t = s.generateElement({
								"class": "allianceItem",
								style: "color:" + (jt[e] == q.sid ? "#fff" : "rgba(255,255,255,0.6)"),
								text: jt[e + 1],
								parent: Ne
							});
							q.isOwner && jt[e] != q.sid && s.generateElement({
								"class": "joinAlBtn",
								text: "Kick",
								onclick: function() {
									Ht(jt[e])
								},
								hookTouch: !0,
								parent: t
							})
						}(e);
					else if(Q.length)
						for(e = 0; e < Q.length; ++e) ! function(e) {
							var t = s.generateElement({
								"class": "allianceItem",
								style: "color:" + (Q[e].sid == q.team ? "#fff" : "rgba(255,255,255,0.6)"),
								text: Q[e].sid,
								parent: Ne
							});
							s.generateElement({
								"class": "joinAlBtn",
								text: "Join",
								onclick: function() {
									Xt(e)
								},
								hookTouch: !0,
								parent: t
							})
						}(e);
					else s.generateElement({
						"class": "allianceItem",
						text: "No Tribes Yet",
						parent: Ne
					});
					s.removeAllChildren(Qe), q.team ? s.generateElement({
						"class": "allianceButtonM",
						style: "width: 360px",
						text: q.isOwner ? "Delete Tribe" : "Leave Tribe",
						onclick: function() {
							Vt()
						},
						hookTouch: !0,
						parent: Qe
					}) : (s.generateElement({
						tag: "input",
						type: "text",
						id: "allianceInput",
						maxLength: 7,
						placeholder: "unique name",
						ontouchstart: function(e) {
							e.preventDefault();
							var t = prompt("unique name", e.currentTarget.value);
							e.currentTarget.value = t.slice(0, 7)
						},
						parent: Qe
					}), s.generateElement({
						tag: "div",
						"class": "allianceButtonM",
						style: "width: 140px;",
						text: "Create",
						onclick: function() {
							St()
						},
						hookTouch: !0,
						parent: Qe
					}))
				}
			}

			function qt(e) {
				i.send("11", Ct[0].sid, e), Ct.splice(0, 1), Mt()
			}

			function Ht(e) {
				i.send("12", e)
			}

			function Xt(e) {
				i.send("10", Q[e].sid)
			}

			function St() {
				i.send("8", document.getElementById("allianceInput").value)
			}

			function Vt() {
				Ct = [], Mt(), i.send("9")
			}
			var zt, Rt = [];

			function Lt() {
				this.init = function(e, t) {
					this.scale = 0, this.x = e, this.y = t, this.active = !0
				}, this.update = function(e, t) {
					this.active && (this.scale += .05 * t, this.scale >= a.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / a.mapPingScale), e.beginPath(), e.arc(this.x / a.mapScale * Fe.width, this.y / a.mapScale * Fe.width, this.scale, 0, 2 * Math.PI), e.stroke()))
				}
			}

			function Yt(e, t) {
				for(var n = 0; n < Rt.length; ++n)
					if(!Rt[n].active) {
						zt = Rt[n];
						break
					} zt || (zt = new Lt, Rt.push(zt)), zt.init(e, t)
			}

			function Wt(e) {
				xt = e
			}
			var Ut = 0;

			function Nt(e, t, n) {
				n ? e ? q.tailIndex = t : q.tails[t] = 1 : e ? q.skinIndex = t : q.skins[t] = 1, "block" == Ke.style.display && Qt()
			}

			function Qt() {
				if(q) {
					s.removeAllChildren(Je);
					for(var e = Ut, t = e ? tt : et, n = 0; n < t.length; ++n) t[n].dontSell || function(n) {
						var r = s.generateElement({
							id: "storeDisplay" + n,
							"class": "storeItem",
							onmouseout: function() {
								bt()
							},
							onmouseover: function() {
								bt(t[n], !1, !0)
							},
							parent: Je
						});
						s.hookTouchEvents(r, !0), s.generateElement({
							tag: "img",
							"class": "hatPreview",
							src: "../img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].topSprite ? "_p" : "") + ".png",
							parent: r
						}), s.generateElement({
							tag: "span",
							text: t[n].name,
							parent: r
						}), (e ? q.tails[t[n].id] : q.skins[t[n].id]) ? (e ? q.tailIndex : q.skinIndex) == t[n].id ? s.generateElement({
							"class": "joinAlBtn",
							style: "margin-top: 5px",
							text: "Unequip",
							onclick: function() {
								Ft(0, e)
							},
							hookTouch: !0,
							parent: r
						}) : s.generateElement({
							"class": "joinAlBtn",
							style: "margin-top: 5px",
							text: "Equip",
							onclick: function() {
								Ft(t[n].id, e)
							},
							hookTouch: !0,
							parent: r
						}) : (s.generateElement({
							"class": "joinAlBtn",
							style: "margin-top: 5px",
							text: "Buy",
							onclick: function() {
								Gt(t[n].id, e)
							},
							hookTouch: !0,
							parent: r
						}), s.generateElement({
							tag: "span",
							"class": "itemPrice",
							text: t[n].price,
							parent: r
						}))
					}(n)
				}
			}

			function Ft(e, t) {
				i.send("13c", 0, e, t)
			}

			function Gt(e, t) {
				i.send("13c", 1, e, t)
			}

			function _t() {
				Ke.style.display = "none", Ue.style.display = "none", rn()
			}

			function Zt(e, t) {
				e && (t ? q.weapons = e : q.items = e);
				for(var n = 0; n < c.list.length; ++n) {
					var r = c.weapons.length + n;
					document.getElementById("actionBarItem" + r).style.display = q.items.indexOf(c.list[n].id) >= 0 ? "inline-block" : "none"
				}
				for(n = 0; n < c.weapons.length; ++n) document.getElementById("actionBarItem" + n).style.display = q.weapons[c.weapons[n].type] == c.weapons[n].id ? "inline-block" : "none"
			}

			function Kt(e) {
				D = e, Y = e && window.devicePixelRatio || 1, xe.checked = e, C("native_resolution", e.toString()), ln()
			}

			function Jt() {
				for(var e = "", t = 0; t < a.skinColors.length; ++t) e += t == oe ? "<div class='skinColorItem activeSkin' style='background-color:" + a.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + a.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
				_e.innerHTML = e
			}
			var $t = document.getElementById("chatBox"),
				en = document.getElementById("chatHolder");

			function tn() {
				sn ? setTimeout(function() {
					var e = prompt("chat message");
					e && nn(e)
				}, 1) : "block" == en.style.display ? ($t.value && nn($t.value), rn()) : (Ke.style.display = "none", Ue.style.display = "none", en.style.display = "block", $t.focus(), fn()), $t.value = ""
			}

			function nn(e) {
				i.send("ch", e)
			}

			function rn() {
				$t.value = "", en.style.display = "none"
			}
			var sn, on;

			function an(e, t) {
				var n = zr(e);
				n && (n.chatMessage = t, n.chatCountdown = a.chatCountdown)
			}

			function ln() {
				R = window.innerWidth, L = window.innerHeight;
				var e = Math.max(R / ae, L / le) * Y;
				ve.width = R * Y, ve.height = L * Y, ve.style.width = R + "px", ve.style.height = L + "px", be.setTransform(e, 0, 0, e, (R * Y - ae * e) / 2, (L * Y - le * e) / 2)
			}

			function cn(e) {
				(sn = e) ? Me.classList.add("touch"): Me.classList.remove("touch")
			}

			function un(e) {
				e.preventDefault(), e.stopPropagation(), cn(!0);
				for(var t = 0; t < e.changedTouches.length; t++) {
					var n = e.changedTouches[t];
					n.identifier == ie.id ? (ie.id = -1, wn()) : n.identifier == se.id && (se.id = -1, q.buildIndex >= 0 && (I = 1, pn()), I = 0, pn())
				}
			}

			function hn() {
				return q ? (-1 != se.id ? on = Math.atan2(se.currentY - se.startY, se.currentX - se.startX) : q.lockDir || sn || (on = Math.atan2(re - L / 2, ne - R / 2)), s.fixTo(on || 0, 2)) : 0
			}
			window.addEventListener("resize", s.checkTrusted(ln)), ln(), cn(!1), window.setUsingTouch = cn, ve.addEventListener("touchmove", s.checkTrusted(function(e) {
				e.preventDefault(), e.stopPropagation(), cn(!0);
				for(var t = 0; t < e.changedTouches.length; t++) {
					var n = e.changedTouches[t];
					n.identifier == ie.id ? (ie.currentX = n.pageX, ie.currentY = n.pageY, wn()) : n.identifier == se.id && (se.currentX = n.pageX, se.currentY = n.pageY, I = 1)
				}
			}), !1), ve.addEventListener("touchstart", s.checkTrusted(function(e) {
				e.preventDefault(), e.stopPropagation(), cn(!0);
				for(var t = 0; t < e.changedTouches.length; t++) {
					var n = e.changedTouches[t];
					n.pageX < document.body.scrollWidth / 2 && -1 == ie.id ? (ie.id = n.identifier, ie.startX = ie.currentX = n.pageX, ie.startY = ie.currentY = n.pageY, wn()) : n.pageX > document.body.scrollWidth / 2 && -1 == se.id && (se.id = n.identifier, se.startX = se.currentX = n.pageX, se.startY = se.currentY = n.pageY, q.buildIndex < 0 && (I = 1, pn()))
				}
			}), !1), ve.addEventListener("touchend", s.checkTrusted(un), !1), ve.addEventListener("touchcancel", s.checkTrusted(un), !1), ve.addEventListener("touchleave", s.checkTrusted(un), !1), ve.addEventListener("mousemove", function(e) {
				e.preventDefault(), e.stopPropagation(), cn(!1), ne = e.clientX, re = e.clientY
			}, !1), ve.addEventListener("mousedown", function(e) {
				cn(!1), 1 != I && (I = 1, pn())
			}, !1), ve.addEventListener("mouseup", function(e) {
				cn(!1), 0 != I && (I = 0, pn())
			}, !1);
			var An = {},
				dn = {
					87: [0, -1],
					38: [0, -1],
					83: [0, 1],
					40: [0, 1],
					65: [-1, 0],
					37: [-1, 0],
					68: [1, 0],
					39: [1, 0]
				};

			function fn() {
				An = {}, i.send("rmd")
			}

			function gn() {
				return "block" != Ue.style.display && "block" != en.style.display
			}

			function pn() {
				q && q.alive && i.send("c", I, q.buildIndex >= 0 ? hn() : null)
			}
			window.addEventListener("keydown", s.checkTrusted(function(e) {
				var t = e.which || e.keyCode || 0;
				27 == t ? _t() : q && q.alive && gn() && (An[t] || (An[t] = 1, 69 == t ? i.send("7", 1) : 67 == t ? (Bt || (Bt = {}), Bt.x = q.x, Bt.y = q.y) : 88 == t ? (q.lockDir = q.lockDir ? 0 : 1, i.send("7", 0)) : null != q.weapons[t - 49] ? vn(q.weapons[t - 49], !0) : null != q.items[t - 49 - q.weapons.length] ? vn(q.items[t - 49 - q.weapons.length]) : 81 == t ? vn(q.items[0]) : 82 == t ? yn() : dn[t] ? wn() : 32 == t && (I = 1, pn())))
			})), window.addEventListener("keyup", s.checkTrusted(function(e) {
				if(q && q.alive) {
					var t = e.which || e.keyCode || 0;
					13 == t ? tn() : gn() && An[t] && (An[t] = 0, dn[t] ? wn() : 32 == t && (I = 0, pn()))
				}
			}));
			var mn = void 0;

			function wn() {
				var e = function() {
					var e = 0,
						t = 0;
					if(-1 != ie.id) e += ie.currentX - ie.startX, t += ie.currentY - ie.startY;
					else
						for(var n in dn) {
							var r = dn[n];
							e += !!An[n] * r[0], t += !!An[n] * r[1]
						}
					return 0 == e && 0 == t ? void 0 : s.fixTo(Math.atan2(t, e), 2)
				}();
				(null == mn || null == e || Math.abs(e - mn) > .3) && (i.send("33", e), mn = e)
			}

			function yn() {
				i.send("14", 1)
			}

			function vn(e, t) {
				i.send("5", e, t)
			}

			function bn() {
				C("moo_name", Ve.value), !ce && i.connected && (ce = !0, b.stop("menu"), ft("Loading..."), i.send("sp", {
					name: Ve.value,
					moofoll: O,
					skin: oe
				}))
			}
			var kn = !0;

			function xn(e) {
				Oe.style.display = "none", De.style.display = "block", ue.style.display = "none", An = {}, H = e, I = 0, ce = !0, kn && (kn = !1, F.length = 0)
			}
			var Bn = 0,
				Cn = 0,
				jn = 0,
				Dn = 0,
				Mn = 0,
				On = 0,
				Tn = [],
				Pn = [],
				En = [],
				In = [],
				qn = [],
				Hn = [];

			function Xn(e, t, n, r) {
				Hn.push(t), In.push(e), n >= 0 ? (Tn.push(n), qn.push(t), En.push(e)) : (Pn.push(n), Hn.push(t), In.push(e)), setTimeout(() => {
					for(let e = 0; e < Tn.length; e++) Bn += Tn[e], jn += En[e], e == Tn.length - 1 && (jn = jn / Tn.length + 1), Mn += qn[e], e == Tn.length - 1 && (Mn = Mn / Tn.length + 1);
					for(let e = 0; e < Pn.length; e++) Cn += Pn[e], Dn += In[e], e == Pn.length - 1 && (Dn = Dn / Pn.length + 1), On += Hn[e], e == Pn.length - 1 && (On = On / Pn.length + 1);
					Cn < 0 && 0 != Cn && p.showText(Dn, On, 50, .15, 1500, "" + Math.abs(Cn), n >= 0 ? "#fff" : "#8ecc51"), Bn > 0 && p.showText(jn, Mn, 50, .15, 1500, "" + Math.abs(Bn), n >= 0 ? "#fff" : "#8ecc51"), Bn = 0, Cn = 0, jn = 0, Dn = 0, Mn = 0, On = 0, Tn = [], Pn = [], En = [], In = [], qn = [], Hn = []
				}, 1)
			}
			var Sn = 99999;

			function Vn() {
				ce = !1;
				try {
					factorem.refreshAds([2], !0)
				} catch (e) {}
				Te.style.display = "none", _t(), kt = {
					x: q.x,
					y: q.y
				}, Oe.style.display = "none", Ge.style.display = "block", q.clownCounter = 0, Ge.style.fontSize = "0px", Sn = 0, setTimeout(function() {
					De.style.display = "block", ue.style.display = "block", Ge.style.display = "none"
				}, a.deathFadeout), pt()
			}

			function zn(e) {
				q && nt.removeAllItems(e)
			}

			function Rn(e) {
				nt.disableBySid(e)
			}

			function Ln() {
				Ee.innerText = q.points, Ie.innerText = q.food, qe.innerText = q.wood, He.innerText = q.stone, Xe.innerText = q.kills
			}
			var Yn = {},
				Wn = ["crown", "skull"];
			var Un = [];

			function Nn(e, t) {
				if(q.upgradePoints = e, q.upgrAge = t, e > 0) {
					Un.length = 0, s.removeAllChildren(Ye);
					for(var n = 0; n < c.weapons.length; ++n) {
						if(c.weapons[n].age == t && (null == c.weapons[n].pre || q.weapons.indexOf(c.weapons[n].pre) >= 0)) s.generateElement({
							id: "upgradeItem" + n,
							"class": "actionBarItem",
							onmouseout: function() {
								bt()
							},
							parent: Ye
						}).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage, Un.push(n)
					}
					for(n = 0; n < c.list.length; ++n)
						if(c.list[n].age == t && (null == c.list[n].pre || q.items.indexOf(c.list[n].pre) >= 0)) {
							var r = c.weapons.length + n;
							s.generateElement({
								id: "upgradeItem" + r,
								"class": "actionBarItem",
								onmouseout: function() {
									bt()
								},
								parent: Ye
							}).style.backgroundImage = document.getElementById("actionBarItem" + r).style.backgroundImage, Un.push(r)
						} for(n = 0; n < Un.length; n++) ! function(e) {
						var t = document.getElementById("upgradeItem" + e);
						t.onmouseover = function() {
							c.weapons[e] ? bt(c.weapons[e], !0) : bt(c.list[e - c.weapons.length])
						}, t.onclick = s.checkTrusted(function() {
							i.send("6", e)
						}), s.hookTouchEvents(t)
					}(Un[n]);
					Un.length ? (Ye.style.display = "block", We.style.display = "block", We.innerHTML = "SELECT ITEMS (" + e + ")") : (Ye.style.display = "none", We.style.display = "none", bt())
				} else Ye.style.display = "none", We.style.display = "none", bt()
			}

			function Qn(e, t, n) {
				null != e && (q.XP = e), null != t && (q.maxXP = t), null != n && (q.age = n), n == a.maxAge ? (Re.innerHTML = "MAX AGE", Le.style.width = "100%") : (Re.innerHTML = "AGE " + q.age, Le.style.width = q.XP / q.maxXP * 100 + "%")
			}

			function Fn(e) {
				s.removeAllChildren(Se);
				for(var t = 1, n = 0; n < e.length; n += 3) ! function(n) {
					s.generateElement({
						"class": "leaderHolder",
						parent: Se,
						children: [s.generateElement({
							"class": "leaderboardItem",
							style: "color:" + (e[n] == H ? "#fff" : "rgba(255,255,255,0.6)"),
							text: t + ". " + ("" != e[n + 1] ? e[n + 1] : "unknown")
						}), s.generateElement({
							"class": "leaderScore",
							text: s.kFormat(e[n + 2]) || "0"
						})]
					})
				}(n), t++
			}

			function Gn() {
				if(q && (!E || P - E >= 1e3 / a.clientSendRate) && (E = P, i.send("2", hn())), Sn < 120 && (Sn += .1 * T, Ge.style.fontSize = Math.min(Math.round(Sn), 120) + "px"), q) {
					var e = s.getDistance(S, V, q.x, q.y),
						t = s.getDirection(q.x, q.y, S, V),
						n = Math.min(.01 * e * T, e);
					e > .05 ? (S += n * Math.cos(t), V += n * Math.sin(t)) : (S = q.x, V = q.y)
				} else S = a.mapScale / 2, V = a.mapScale / 2;
				for(var r = P - 1e3 / a.serverUpdateRate, o = 0; o < N.length + U.length; ++o)
					if((X = N[o] || U[o - N.length]) && X.visible)
						if(X.forcePos) X.x = X.x2, X.y = X.y2, X.dir = X.d2;
						else {
							var l = X.t2 - X.t1,
								c = (r - X.t1) / l;
							X.dt += T;
							var u = Math.min(1.7, X.dt / 170),
								h = X.x2 - X.x1;
							X.x = X.x1 + h * u, h = X.y2 - X.y1, X.y = X.y1 + h * u, X.dir = Math.lerpAngle(X.d2, X.d1, Math.min(1.2, c))
						} var A = S - ae / 2,
					d = V - le / 2;
				a.snowBiomeTop - d <= 0 && a.mapScale - a.snowBiomeTop - d >= le ? (be.fillStyle = "#b6db66", be.fillRect(0, 0, ae, le)) : a.mapScale - a.snowBiomeTop - d <= 0 ? (be.fillStyle = "#dbc666", be.fillRect(0, 0, ae, le)) : a.snowBiomeTop - d >= le ? (be.fillStyle = "#fff", be.fillRect(0, 0, ae, le)) : a.snowBiomeTop - d >= 0 ? (be.fillStyle = "#fff", be.fillRect(0, 0, ae, a.snowBiomeTop - d), be.fillStyle = "#b6db66", be.fillRect(0, a.snowBiomeTop - d, ae, le - (a.snowBiomeTop - d))) : (be.fillStyle = "#b6db66", be.fillRect(0, 0, ae, a.mapScale - a.snowBiomeTop - d), be.fillStyle = "#dbc666", be.fillRect(0, a.mapScale - a.snowBiomeTop - d, ae, le - (a.mapScale - a.snowBiomeTop - d))), kn || ((ee += te * a.waveSpeed * T) >= a.waveMax ? (ee = a.waveMax, te = -1) : ee <= 1 && (ee = te = 1), be.globalAlpha = 1, be.fillStyle = "#dbc666", $n(A, d, be, a.riverPadding), be.fillStyle = "#91b2db", $n(A, d, be, 250 * (ee - 1))), be.lineWidth = 4, be.strokeStyle = "#000", be.globalAlpha = .06, be.beginPath();
				for(var f = -S; f < ae; f += le / 18) f > 0 && (be.moveTo(f, 0), be.lineTo(f, le));
				for(var g = -V; g < le; g += le / 18) f > 0 && (be.moveTo(0, g), be.lineTo(ae, g));
				be.stroke(), be.globalAlpha = 1, be.strokeStyle = rt, er(-1, A, d), be.globalAlpha = 1, be.lineWidth = st, Zn(0, A, d), nr(A, d, 0), be.globalAlpha = 1;
				for(o = 0; o < U.length; ++o)(X = U[o]).active && X.visible && (X.animate(T), be.save(), be.translate(X.x - A, X.y - d), be.rotate(X.dir + X.dirPlus - Math.PI / 2), Mr(X, be), be.restore());
				if(er(0, A, d), Zn(1, A, d), er(1, A, d), nr(A, d, 1), er(2, A, d), er(3, A, d), be.fillStyle = "#000", be.globalAlpha = .09, A <= 0 && be.fillRect(0, 0, -A, le), a.mapScale - A <= ae) {
					var m = Math.max(0, -d);
					be.fillRect(a.mapScale - A, m, ae - (a.mapScale - A), le - m)
				}
				if(d <= 0 && be.fillRect(-A, 0, ae + A, -d), a.mapScale - d <= le) {
					var w = Math.max(0, -A),
						y = 0;
					a.mapScale - A <= ae && (y = ae - (a.mapScale - A)), be.fillRect(w, a.mapScale - d, ae - w - y, le - (a.mapScale - d))
				}
				be.globalAlpha = 1, be.fillStyle = "rgba(0, 0, 70, 0.35)", be.fillRect(0, 0, ae, le), be.strokeStyle = it;
				for(o = 0; o < N.length + U.length; ++o)
					if((X = N[o] || U[o - N.length]).visible && (10 != X.skinIndex || X == q || X.team && X.team == q.team)) {
						var v = (X.team ? "[" + X.team + "] " : "") + (X.name || "") + (null != X.skinIndex && X != q ? " <" + (X.clownCounter || "0") + "/7>" : "");
						if("" != v) {
							if(be.font = (X.nameScale || 30) + "px Hammersmith One", be.fillStyle = "#fff", be.textBaseline = "middle", be.textAlign = "center", be.lineWidth = X.nameScale ? 11 : 8, be.lineJoin = "round", be.strokeText(v, X.x - A, X.y - d - X.scale - a.nameY), be.fillText(v, X.x - A, X.y - d - X.scale - a.nameY), X.isLeader && Yn.crown.isLoaded) {
								var b = a.crownIconScale;
								w = X.x - A - b / 2 - be.measureText(v).width / 2 - a.crownPad;
								be.drawImage(Yn.crown, w, X.y - d - X.scale - a.nameY - b / 2 - 5, b, b)
							}
							if(1 == X.iconIndex && Yn.skull.isLoaded) {
								b = a.crownIconScale, w = X.x - A - b / 2 + be.measureText(v).width / 2 + a.crownPad;
								be.drawImage(Yn.skull, w, X.y - d - X.scale - a.nameY - b / 2 - 5, b, b)
							}
						}
						if(X.health > 0) {
							a.healthBarWidth;
							be.fillStyle = it, be.roundRect(X.x - A - a.healthBarWidth - a.healthBarPad, X.y - d + X.scale + a.nameY, 2 * a.healthBarWidth + 2 * a.healthBarPad, 17, 8), be.fill(), be.fillStyle = X == q || X.team && X.team == q.team ? "#8ecc51" : "#cc5151", be.roundRect(X.x - A - a.healthBarWidth, X.y - d + X.scale + a.nameY + a.healthBarPad, 2 * a.healthBarWidth * (X.health / X.maxHealth), 17 - 2 * a.healthBarPad, 7), be.fill(), window.reloadedColor = "#fff200", window.middleReloadedColor = "#ffa600", window.notReloadedColor = "#FF0000";
							let e = new Image;
							if(e.src = "data:image/png;base64,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", X.id) {
								let t = "none";
								try {
									t = getCookie("target")
								} catch (e) {
									t = "none"
								}
								"none" != t && null != t && Vr(X.id).sid == t && "ON" == document.getElementById("instaDisplay").innerText && be.drawImage(e, X.x - 1.1 * X.scale - A, X.y - 1.1 * X.scale - d, 2.2 * X.scale, 2.2 * X.scale), document.getElementById("reloadBars").checked && (a.reloadBarWidth, be.fillStyle = it, be.rigidRRect(X.x - A - a.healthBarPad, X.y - d + X.scale + a.nameY - 13, a.healthBarWidth + 2 * a.healthBarPad, 17, 8), be.fill(), a.healthBarWidth, be.fillStyle = it, be.rigidLRect(X.x - A - a.healthBarWidth - a.healthBarPad, X.y - d + X.scale + a.nameY - 13, a.healthBarWidth + 2 * a.healthBarPad, 17, 8), be.fill(), be.fillStyle = 1 == secondaryReload[X.sid] ? window.reloadedColor : secondaryReload[X.sid] > .5 ? window.middleReloadedColor : window.notReloadedColor, be.roundRect(X.x - A + 2.5, X.y - d + X.scale + a.nameY + a.healthBarPad - 13, 2 * a.healthBarWidth / 2.1 * (X.sr < secondaryReload[X.sid] ? X.sr + (secondaryReload[X.sid] - X.sr) * Math.min(1, X.dt / 111) : secondaryReload[X.sid]), 17 - 2 * a.healthBarPad, 7), be.fill(), be.fillStyle = 1 == primaryReload[X.sid] ? window.reloadedColor : primaryReload[X.sid] > .5 ? window.middleReloadedColor : window.notReloadedColor, be.roundRect(X.x - A - a.healthBarWidth, X.y - d + X.scale + a.nameY + a.healthBarPad - 13, 2 * a.healthBarWidth / 2.1 * (X.pr < primaryReload[X.sid] ? X.pr + (primaryReload[X.sid] - X.pr) * Math.min(1, X.dt / 111) : primaryReload[X.sid]), 17 - 2 * a.healthBarPad, 7), be.fill())
							}
						}
					} p.update(T, be, A, d);
				for(o = 0; o < N.length; ++o)
					if((X = N[o]).visible && X.chatCountdown > 0) {
						X.chatCountdown -= T, X.chatCountdown <= 0 && (X.chatCountdown = 0), be.font = "32px Hammersmith One";
						var k = be.measureText(X.chatMessage);
						be.textBaseline = "middle", be.textAlign = "center";
						w = X.x - A, m = X.y - X.scale - d - 90;
						var x = k.width + 17;
						be.fillStyle = "rgba(0,0,0,0.2)", be.roundRect(w - x / 2, m - 23.5, x, 47, 6), be.fill(), be.fillStyle = "#fff", be.fillText(X.chatMessage, w, m)
					}!
				function(e) {
					if(q && q.alive) {
						Ze.clearRect(0, 0, Fe.width, Fe.height), Ze.strokeStyle = "#fff", Ze.lineWidth = 4;
						for(var t = 0; t < Rt.length; ++t)(zt = Rt[t]).update(Ze, e);
						if(Ze.globalAlpha = 1, Ze.fillStyle = "#fff", pr(q.x / a.mapScale * Fe.width, q.y / a.mapScale * Fe.height, 7, Ze, !0), Ze.fillStyle = "rgba(255,255,255,0.35)", q.team && xt)
							for(t = 0; t < xt.length;) pr(xt[t] / a.mapScale * Fe.width, xt[t + 1] / a.mapScale * Fe.height, 7, Ze, !0), t += 2;
						kt && (Ze.fillStyle = "#fc5553", Ze.font = "34px Hammersmith One", Ze.textBaseline = "middle", Ze.textAlign = "center", Ze.fillText("x", kt.x / a.mapScale * Fe.width, kt.y / a.mapScale * Fe.height)), Bt && (Ze.fillStyle = "#fff", Ze.font = "34px Hammersmith One", Ze.textBaseline = "middle", Ze.textAlign = "center", Ze.fillText("x", Bt.x / a.mapScale * Fe.width, Bt.y / a.mapScale * Fe.height))
					}
				}(T), -1 !== ie.id && _n(ie.startX, ie.startY, ie.currentX, ie.currentY), -1 !== se.id && _n(se.startX, se.startY, se.currentX, se.currentY)
			}

			function _n(e, t, n, r) {
				be.save(), be.setTransform(1, 0, 0, 1, 0, 0), be.scale(Y, Y);
				var i = 50;
				be.beginPath(), be.arc(e, t, i, 0, 2 * Math.PI, !1), be.closePath(), be.fillStyle = "rgba(255, 255, 255, 0.3)", be.fill();
				i = 50;
				var s = n - e,
					o = r - t,
					a = Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2)),
					l = a > i ? a / i : 1;
				s /= l, o /= l, be.beginPath(), be.arc(e + s, t + o, .5 * i, 0, 2 * Math.PI, !1), be.closePath(), be.fillStyle = "white", be.fill(), be.restore()
			}

			function Zn(e, t, n) {
				for(var r = 0; r < G.length; ++r)(X = G[r]).active && X.layer == e && (X.update(T), X.active && Or(X.x - t, X.y - n, X.scale) && (be.save(), be.translate(X.x - t, X.y - n), be.rotate(X.dir), Jn(0, 0, X, be, 1), be.restore()))
			}
			var Kn = {};

			function Jn(e, t, n, r, i) {
				if(n.src) {
					var s = c.projectiles[n.indx].src,
						o = Kn[s];
					o || ((o = new Image).onload = function() {
						this.isLoaded = !0
					}, o.src = ".././img/weapons/" + s + ".png", Kn[s] = o), o.isLoaded && r.drawImage(o, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
				} else 1 == n.indx && (r.fillStyle = "#939393", pr(e, t, n.scale, r))
			}

			function $n(e, t, n, r) {
				var i = a.riverWidth + r,
					s = a.mapScale / 2 - t - i / 2;
				s < le && s + i > 0 && n.fillRect(0, s, ae, i)
			}

			function er(e, t, n) {
				for(var r, i, s, o = 0; o < F.length; ++o)(X = F[o]).active && (i = X.x + X.xWiggle - t, s = X.y + X.yWiggle - n, 0 == e && X.update(T), X.layer == e && Or(i, s, X.scale + (X.blocker || 0)) && (be.globalAlpha = X.hideFromEnemy ? .6 : 1, X.isItem ? (r = gr(X), be.save(), be.translate(i, s), be.rotate(X.dir), be.drawImage(r, -r.width / 2, -r.height / 2), X.blocker && (be.strokeStyle = "#db6e6e", be.globalAlpha = .3, be.lineWidth = 6, pr(0, 0, X.blocker, be, !1, !0)), be.restore()) : (r = dr(X), be.drawImage(r, i - r.width / 2, s - r.height / 2))))
			}

			function tr(e, t, n) {
				(X = zr(e)) && (X.startAnim(t, n), 10 == n || 14 == n ? setTimeout(() => {
					secondaryReload[e] = 0
				}) : setTimeout(() => {
					primaryReload[e] = 0
				}))
			}

			function nr(e, t, n) {
				be.globalAlpha = 1;
				for(var r = 0; r < N.length; ++r)(X = N[r]).zIndex == n && (X.animate(T), X.visible && (X.skinRot += .002 * T, z = (X == q ? hn() : X.dir) + X.dirPlus, be.save(), be.translate(X.x - e, X.y - t), be.rotate(z), rr(X, be), be.restore()))
			}

			function rr(e, t) {
				(t = t || be).lineWidth = st, t.lineJoin = "miter";
				var n = Math.PI / 4 * (c.weapons[e.weaponIndex].armS || 1),
					r = e.buildIndex < 0 && c.weapons[e.weaponIndex].hndS || 1,
					i = e.buildIndex < 0 && c.weapons[e.weaponIndex].hndD || 1;
				if(e.tailIndex > 0 && function(e, t, n) {
						if(!(ir = lr[e])) {
							var r = new Image;
							r.onload = function() {
								this.isLoaded = !0, this.onload = null
							}, r.src = ".././img/accessories/access_" + e + ".png", lr[e] = r, ir = r
						}
						var i = cr[e];
						if(!i) {
							for(var s = 0; s < tt.length; ++s)
								if(tt[s].id == e) {
									i = tt[s];
									break
								} cr[e] = i
						}
						ir.isLoaded && (t.save(), t.translate(-20 - (i.xOff || 0), 0), i.spin && t.rotate(n.skinRot), t.drawImage(ir, -i.scale / 2, -i.scale / 2, i.scale, i.scale), t.restore())
					}(e.tailIndex, t, e), e.buildIndex < 0 && !c.weapons[e.weaponIndex].aboveHand && (hr(c.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == c.weapons[e.weaponIndex].projectile || c.weapons[e.weaponIndex].hideProjectile || Jn(e.scale, 0, c.projectiles[c.weapons[e.weaponIndex].projectile], be)), t.fillStyle = a.skinColors[e.skinColor], pr(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), pr(e.scale * i * Math.cos(-n * r), e.scale * i * Math.sin(-n * r), 14), e.buildIndex < 0 && c.weapons[e.weaponIndex].aboveHand && (hr(c.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == c.weapons[e.weaponIndex].projectile || c.weapons[e.weaponIndex].hideProjectile || Jn(e.scale, 0, c.projectiles[c.weapons[e.weaponIndex].projectile], be)), e.buildIndex >= 0) {
					var s = gr(c.list[e.buildIndex]);
					t.drawImage(s, e.scale - c.list[e.buildIndex].holdOffset, -s.width / 2)
				}
				pr(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), ar(e.skinIndex, t, null, e))
			}
			var ir, sr = {},
				or = {};

			function ar(e, t, n, r) {
				if(!(ir = sr[e])) {
					var i = new Image;
					i.onload = function() {
						this.isLoaded = !0, this.onload = null
					}, i.src = ".././img/hats/hat_" + e + ".png", sr[e] = i, ir = i
				}
				var s = n || or[e];
				if(!s) {
					for(var o = 0; o < et.length; ++o)
						if(et[o].id == e) {
							s = et[o];
							break
						} or[e] = s
				}
				ir.isLoaded && t.drawImage(ir, -s.scale / 2, -s.scale / 2, s.scale, s.scale), !n && s.topSprite && (t.save(), t.rotate(r.skinRot), ar(e + "_top", t, s, r), t.restore())
			}
			var lr = {},
				cr = {};
			var ur = {};

			function hr(e, t, n, r, i) {
				var s = e.src + (t || ""),
					o = ur[s];
				o || ((o = new Image).onload = function() {
					this.isLoaded = !0
				}, o.src = ".././img/weapons/" + s + ".png", ur[s] = o), o.isLoaded && i.drawImage(o, n + e.xOff - e.length / 2, r + e.yOff - e.width / 2, e.length, e.width)
			}
			var Ar = {};

			function dr(e) {
				var t = e.y >= a.mapScale - a.snowBiomeTop ? 2 : e.y <= a.snowBiomeTop ? 1 : 0,
					n = e.type + "_" + e.scale + "_" + t,
					r = Ar[n];
				if(!r) {
					var i = document.createElement("canvas");
					i.width = i.height = 2.1 * e.scale + st;
					var o = i.getContext("2d");
					if(o.translate(i.width / 2, i.height / 2), o.rotate(s.randFloat(0, Math.PI)), o.strokeStyle = rt, o.lineWidth = st, 0 == e.type)
						for(var l, c = 0; c < 2; ++c) mr(o, 7, l = X.scale * (c ? .5 : 1), .7 * l), o.fillStyle = t ? c ? "#fff" : "#e3f1f4" : c ? "#b4db62" : "#9ebf57", o.fill(), c || o.stroke();
					else if(1 == e.type)
						if(2 == t) o.fillStyle = "#606060", mr(o, 6, .3 * e.scale, .71 * e.scale), o.fill(), o.stroke(), o.fillStyle = "#89a54c", pr(0, 0, .55 * e.scale, o), o.fillStyle = "#a5c65b", pr(0, 0, .3 * e.scale, o, !0);
						else {
							var u;
							! function(e, t, n, r) {
								var i, o = Math.PI / 2 * 3,
									a = Math.PI / t;
								e.beginPath(), e.moveTo(0, -r);
								for(var l = 0; l < t; l++) i = s.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(o + a) * i, Math.sin(o + a) * i, Math.cos(o + 2 * a) * r, Math.sin(o + 2 * a) * r), o += 2 * a;
								e.lineTo(0, -r), e.closePath()
							}(o, 6, X.scale, .7 * X.scale), o.fillStyle = t ? "#e3f1f4" : "#89a54c", o.fill(), o.stroke(), o.fillStyle = t ? "#6a64af" : "#c15555";
							var h = B / 4;
							for(c = 0; c < 4; ++c) pr((u = s.randInt(X.scale / 3.5, X.scale / 2.3)) * Math.cos(h * c), u * Math.sin(h * c), s.randInt(10, 12), o)
						}
					else 2 != e.type && 3 != e.type || (o.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", mr(o, 3, e.scale, e.scale), o.fill(), o.stroke(), o.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", mr(o, 3, .55 * e.scale, .65 * e.scale), o.fill());
					r = i, Ar[n] = r
				}
				return r
			}
			var fr = [];

			function gr(e, t) {
				var n, r, i, o, a, l, u, h, A = fr[e.id];
				if(!A || t) {
					var d = document.createElement("canvas");
					d.width = d.height = 2.5 * e.scale + st + (c.list[e.id].spritePadding || 0);
					var f = d.getContext("2d");
					if(f.translate(d.width / 2, d.height / 2), f.rotate(t ? 0 : Math.PI / 2), f.strokeStyle = rt, f.lineWidth = st * (t ? d.width / 81 : 1), "apple" == e.name) {
						f.fillStyle = "#c15555", pr(0, 0, e.scale, f), f.fillStyle = "#89a54c";
						var g = -Math.PI / 2;
						n = e.scale * Math.cos(g), r = e.scale * Math.sin(g), i = 25, o = g + Math.PI / 2, a = f, l = n + i * Math.cos(o), u = r + i * Math.sin(o), h = .4 * i, a.moveTo(n, r), a.beginPath(), a.quadraticCurveTo((n + l) / 2 + h * Math.cos(o + Math.PI / 2), (r + u) / 2 + h * Math.sin(o + Math.PI / 2), l, u), a.quadraticCurveTo((n + l) / 2 - h * Math.cos(o + Math.PI / 2), (r + u) / 2 - h * Math.sin(o + Math.PI / 2), n, r), a.closePath(), a.fill(), a.stroke()
					} else if("cookie" == e.name) {
						f.fillStyle = "#cca861", pr(0, 0, e.scale, f), f.fillStyle = "#937c4b";
						for(var p = B / (w = 4), m = 0; m < w; ++m) pr((y = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(p * m), y * Math.sin(p * m), s.randInt(4, 5), f, !0)
					} else if("cheese" == e.name) {
						f.fillStyle = "#f4f3ac", pr(0, 0, e.scale, f), f.fillStyle = "#c3c28b";
						var w, y;
						for(p = B / (w = 4), m = 0; m < w; ++m) pr((y = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(p * m), y * Math.sin(p * m), s.randInt(4, 5), f, !0)
					} else if("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
						f.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
						var v = "castle wall" == e.name ? 4 : 3;
						mr(f, v, 1.1 * e.scale, 1.1 * e.scale), f.fill(), f.stroke(), f.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", mr(f, v, .65 * e.scale, .65 * e.scale), f.fill()
					} else if("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
						f.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
						var b = .6 * e.scale;
						mr(f, "spikes" == e.name ? 5 : 6, e.scale, b), f.fill(), f.stroke(), f.fillStyle = "#a5974c", pr(0, 0, b, f), f.fillStyle = "#c9b758", pr(0, 0, b / 2, f, !0)
					} else if("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) f.fillStyle = "#a5974c", pr(0, 0, e.scale, f), f.fillStyle = "#c9b758", yr(0, 0, 1.5 * e.scale, 29, 4, f), f.fillStyle = "#a5974c", pr(0, 0, .5 * e.scale, f);
					else if("mine" == e.name) f.fillStyle = "#939393", mr(f, 3, e.scale, e.scale), f.fill(), f.stroke(), f.fillStyle = "#bcbcbc", mr(f, 3, .55 * e.scale, .65 * e.scale), f.fill();
					else if("sapling" == e.name)
						for(m = 0; m < 2; ++m) {
							mr(f, 7, b = e.scale * (m ? .5 : 1), .7 * b), f.fillStyle = m ? "#b4db62" : "#9ebf57", f.fill(), m || f.stroke()
						} else if("pit trap" == e.name) f.fillStyle = "#a5974c", mr(f, 3, 1.1 * e.scale, 1.1 * e.scale), f.fill(), f.stroke(), f.fillStyle = rt, mr(f, 3, .65 * e.scale, .65 * e.scale), f.fill();
						else if("boost pad" == e.name) f.fillStyle = "#7e7f82", wr(0, 0, 2 * e.scale, 2 * e.scale, f), f.fill(), f.stroke(), f.fillStyle = "#dbd97d",
						function(e, t) {
							t = t || be;
							var n = e * (Math.sqrt(3) / 2);
							t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
						}(1 * e.scale, f);
					else if("turret" == e.name) {
						f.fillStyle = "#a5974c", pr(0, 0, e.scale, f), f.fill(), f.stroke(), f.fillStyle = "#939393";
						wr(0, -25, .9 * e.scale, 50, f), pr(0, 0, .6 * e.scale, f), f.fill(), f.stroke()
					} else if("platform" == e.name) {
						f.fillStyle = "#cebd5f";
						var k = 2 * e.scale,
							x = k / 4,
							C = -e.scale / 2;
						for(m = 0; m < 4; ++m) wr(C - x / 2, 0, x, 2 * e.scale, f), f.fill(), f.stroke(), C += k / 4
					} else "healing pad" == e.name ? (f.fillStyle = "#7e7f82", wr(0, 0, 2 * e.scale, 2 * e.scale, f), f.fill(), f.stroke(), f.fillStyle = "#db6e6e", yr(0, 0, .65 * e.scale, 20, 4, f, !0)) : "spawn pad" == e.name ? (f.fillStyle = "#7e7f82", wr(0, 0, 2 * e.scale, 2 * e.scale, f), f.fill(), f.stroke(), f.fillStyle = "#71aad6", pr(0, 0, .6 * e.scale, f)) : "blocker" == e.name ? (f.fillStyle = "#7e7f82", pr(0, 0, e.scale, f), f.fill(), f.stroke(), f.rotate(Math.PI / 4), f.fillStyle = "#db6e6e", yr(0, 0, .65 * e.scale, 20, 4, f, !0)) : "teleporter" == e.name && (f.fillStyle = "#7e7f82", pr(0, 0, e.scale, f), f.fill(), f.stroke(), f.rotate(Math.PI / 4), f.fillStyle = "#d76edb", pr(0, 0, .5 * e.scale, f, !0));
					A = d, t || (fr[e.id] = A)
				}
				return A
			}

			function pr(e, t, n, r, i, s) {
				(r = r || be).beginPath(), r.arc(e, t, n, 0, 2 * Math.PI), s || r.fill(), i || r.stroke()
			}

			function mr(e, t, n, r) {
				var i, s, o = Math.PI / 2 * 3,
					a = Math.PI / t;
				e.beginPath(), e.moveTo(0, -n);
				for(var l = 0; l < t; l++) i = Math.cos(o) * n, s = Math.sin(o) * n, e.lineTo(i, s), o += a, i = Math.cos(o) * r, s = Math.sin(o) * r, e.lineTo(i, s), o += a;
				e.lineTo(0, -n), e.closePath()
			}

			function wr(e, t, n, r, i, s) {
				i.fillRect(e - n / 2, t - r / 2, n, r), s || i.strokeRect(e - n / 2, t - r / 2, n, r)
			}

			function yr(e, t, n, r, i, s, o) {
				s.save(), s.translate(e, t), i = Math.ceil(i / 2);
				for(var a = 0; a < i; a++) wr(0, 0, 2 * n, r, s, o), s.rotate(Math.PI / i);
				s.restore()
			}

			function vr(e) {
				for(var t = 0; t < e.length;) nt.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], c.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
					sid: e[t + 7]
				} : null), t += 8
			}

			function br(e, t) {
				(X = Lr(t)) && (X.xWiggle += a.gatherWiggle * Math.cos(e), X.yWiggle += a.gatherWiggle * Math.sin(e))
			}

			function kr(e, t) {
				(X = Lr(e)) && (X.dir = t, X.xWiggle += a.gatherWiggle * Math.cos(t + Math.PI), X.yWiggle += a.gatherWiggle * Math.sin(t + Math.PI))
			}

			function xr(e, t, n, r, i, s, o, a) {
				ut && (_.addProjectile(e, t, n, r, i, s, null, null, o).sid = a, function(e, t, n, r, i) {
					let s = 1 / 0,
						o = -1;
					for(let r = 0; r < N.length; r++)(X = N[r]) && X.visible && X.secondary && void 0 !== c.weapons[X.secondary].projectile && c.projectiles[c.weapons[X.secondary].projectile].speed == i && s > (1.5 * X.x2 - X.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 80 * Math.sin(n)) ** 2 && (o = X.sid, s = (1.5 * X.x2 - X.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 80 * Math.sin(n)) ** 2);
					if(Math.sqrt(s) > 60)
						if(1.5 == i) {
							for(let r = 0; r < N.length; r++)(X = N[r]) && X.visible && s > (1.5 * X.x2 - X.x1 / 2 - e + 10 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 10 * Math.sin(n)) ** 2 && (o = X.sid, s = (1.5 * X.x2 - X.x1 / 2 - e + 10 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 10 * Math.sin(n)) ** 2);
							Math.sqrt(s) < 60 && (turretReload[o] = -.0444)
						} else {
							for(let r = 0; r < N.length; r++)(X = N[r]) && X.visible && X.secondary && s > (1.5 * X.x2 - X.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 80 * Math.sin(n)) ** 2 && (o = X.sid, s = (1.5 * X.x2 - X.x1 / 2 - e + 80 * Math.cos(n)) ** 2 + (1.5 * X.y2 - X.y1 / 2 - t + 80 * Math.sin(n)) ** 2);
							X = zr(o), setTimeout(() => {
								secondaryReload[o] = 0
							})
						}
					else X = zr(o), secondaryReload[o] = -111 / c.weapons[X.secondary].speed
				}(e, t, n, 0, i))
			}

			function Br(e, t) {
				for(var n = 0; n < G.length; ++n) G[n].sid == e && (G[n].range = t)
			}

			function Cr(e) {
				(X = Rr(e)) && X.startAnim()
			}

			function jr(e) {
				for(var t = 0; t < U.length; ++t) U[t].forcePos = !U[t].visible, U[t].visible = !1;
				if(e) {
					var n = Date.now();
					for(t = 0; t < e.length;)(X = Rr(e[t])) ? (X.index = e[t + 1], X.t1 = void 0 === X.t2 ? n : X.t2, X.t2 = n, X.x1 = X.x, X.y1 = X.y, X.x2 = e[t + 2], X.y2 = e[t + 3], X.d1 = void 0 === X.d2 ? e[t + 4] : X.d2, X.d2 = e[t + 4], X.health = e[t + 5], X.dt = 0, X.visible = !0) : ((X = J.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = X.x, X.y2 = X.y, X.d2 = X.dir, X.health = e[t + 5], J.aiTypes[e[t + 1]].name || (X.name = a.cowNames[e[t + 6]]), X.forcePos = !0, X.sid = e[t], X.visible = !0), t += 7
				}
			}
			var Dr = {};

			function Mr(e, t) {
				var n = e.index,
					r = Dr[n];
				if(!r) {
					var i = new Image;
					i.onload = function() {
						this.isLoaded = !0, this.onload = null
					}, i.src = ".././img/animals/" + e.src + ".png", r = i, Dr[n] = r
				}
				if(r.isLoaded) {
					var s = 1.2 * e.scale * (e.spriteMlt || 1);
					t.drawImage(r, -s, -s, 2 * s, 2 * s)
				}
			}

			function Or(e, t, n) {
				return e + n >= 0 && e - n <= ae && t + n >= 0 && t - n <= le
			}

			function Tr(e, t) {
				var n = Vr(e[0]);
				n || (n = new h(e[0], e[1], a, s, _, nt, N, U, c, et, tt), N.push(n)), n.spawn(t ? O : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e), primaryReload[n.sid] = 1, n.pr = 1, secondaryReload[n.sid] = 1, n.sr = 1, turretReload[n.sid] = 1, n.tr = 1, n.clownCounter = 0, t && (S = (q = n).x, V = q.y, Zt(), Ln(), Qn(), Nn(0), Te.style.display = "block")
			}

			function Pr(e) {
				for(var t = 0; t < N.length; t++)
					if(N[t].id == e) {
						N.splice(t, 1);
						break
					}
			}

			function Er(e, t) {
				q && (q.itemCounts[e] = t)
			}

			function Ir(e, t, n) {
				q && (q[e] = t, n && Ln())
			}
			var qr = 0;

			function Hr(e, t) {
				(X = zr(e)) && (! function(e, t) {
					let n = t - e.health;
					if(n > 0) {
						if(13 == e.skinIndex) return 13 == e.tailIndex ? void(6 == n && (e.lastBull = qr)) : void(3 == n && (e.lastBull = qr));
						!isNaN(e.clownCounter) && e.lastDamage && (qr - e.lastDamage < 2 ? e.clownCounter++ : e.clownCounter = Math.max(0, e.clownCounter - 2), e.lastDamage = 0)
					} else if(e.lastDamage = qr, 7 == e.skinIndex)
						if(13 == e.tailIndex) {
							if(-2 == n) e.lastBull = qr
						} else if(-5 == n) e.lastBull = qr
				}(X, t), X.health = t)
			}

			function Xr(e) {
				qr++;
				for(var t = Date.now(), n = 0; n < N.length; ++n) N[n].forcePos = !N[n].visible, N[n].visible = !1;
				for(n = 0; n < e.length;)(X = zr(e[n])) && (X.t1 = void 0 === X.t2 ? t : X.t2, X.t2 = t, X.x1 = X.x, X.y1 = X.y, X.x2 = e[n + 1], X.y2 = e[n + 2], X.d1 = void 0 === X.d2 ? e[n + 3] : X.d2, X.d2 = e[n + 3], X.dt = 0, X.buildIndex = e[n + 4], X.weaponIndex = e[n + 5], X.weaponVariant = e[n + 6], X.team = e[n + 7], X.isLeader = e[n + 8], X.skinIndex = e[n + 9], X.tailIndex = e[n + 10], X.iconIndex = e[n + 11], X.zIndex = e[n + 12], X.visible = !0, Sr(X), "" == q.clownCounter || null == q.clownCounter || isNaN(q.clownCounter) ? setCookie("MYshame", "0", 10) : setCookie("MYshame", q.clownCounter.toString(), 10)), n += 13
			}

			function Sr(e) {
				45 == e.skinIndex ? e.clownCounter = 7 : isNaN(e.clownCounter) && (e.clownCounter = 0), e.weaponIndex < 9 ? e.weaponIndex == e.primary ? -1 == e.buildIndex ? (e.pr = primaryReload[e.sid], e.sr = secondaryReload[e.sid], primaryReload[e.sid] = Math.min(1, primaryReload[e.sid] + 111 / c.weapons[e.primary].speed)) : e.pr = primaryReload[e.sid] : e.primary = e.weaponIndex : e.weaponIndex > 8 ? e.weaponIndex == e.secondary ? -1 == e.buildIndex ? (e.sr = secondaryReload[e.sid], e.pr = primaryReload[e.sid], secondaryReload[e.sid] = Math.min(1, secondaryReload[e.sid] + 111 / c.weapons[e.secondary].speed)) : e.sr = secondaryReload[e.sid] : e.secondary = e.weaponIndex : (e.sr = secondaryReload[e.sid], e.pr = primaryReload[e.sid]), e.tr = turretReload[e.sid], turretReload[e.sid] = Math.min(1, turretReload[e.sid] + .0444)
			}

			function Vr(e) {
				for(var t = 0; t < N.length; ++t)
					if(N[t].id == e) return N[t];
				return null
			}

			function zr(e) {
				for(var t = 0; t < N.length; ++t)
					if(N[t].sid == e) return N[t];
				return null
			}

			function Rr(e) {
				for(var t = 0; t < U.length; ++t)
					if(U[t].sid == e) return U[t];
				return null
			}

			function Lr(e) {
				for(var t = 0; t < F.length; ++t)
					if(F[t].sid == e) return F[t];
				return null
			}
			var Yr, Wr = -1;

			function Ur() {
				var e = Date.now() - Wr;
				window.pingTime = e, Ce.innerText = "Ping: " + e + " ms"
			}

			function Nr() {
				Wr = Date.now(), i.send("pp")
			}

			function Qr(e) {
				if(!(e < 0)) {
					var t = Math.floor(e / 60),
						n = e % 60;
					n = ("0" + n).slice(-2), je.innerText = "Server restarting in " + t + ":" + n, je.hidden = !1
				}
			}

			function Fr(e) {
				window.open(e, "_blank")
			}
			window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
					window.setTimeout(e, 1e3 / 60)
				}, Yr = a.mapScale / 2, nt.add(0, Yr, Yr + 200, 0, a.treeScales[3], 0), nt.add(1, Yr, Yr - 480, 0, a.treeScales[3], 0), nt.add(2, Yr + 300, Yr + 450, 0, a.treeScales[3], 0), nt.add(3, Yr - 950, Yr - 130, 0, a.treeScales[2], 0), nt.add(4, Yr - 750, Yr - 400, 0, a.treeScales[3], 0), nt.add(5, Yr - 700, Yr + 400, 0, a.treeScales[2], 0), nt.add(6, Yr + 800, Yr - 200, 0, a.treeScales[3], 0), nt.add(7, Yr - 260, Yr + 340, 0, a.bushScales[3], 1), nt.add(8, Yr + 760, Yr + 310, 0, a.bushScales[3], 1), nt.add(9, Yr - 800, Yr + 100, 0, a.bushScales[3], 1), nt.add(10, Yr - 800, Yr + 300, 0, c.list[4].scale, c.list[4].id, c.list[10]), nt.add(11, Yr + 650, Yr - 390, 0, c.list[4].scale, c.list[4].id, c.list[10]), nt.add(12, Yr - 400, Yr - 450, 0, a.rockScales[2], 2),
				function e() {
					P = Date.now(), T = P - W, W = P, Gn(), requestAnimFrame(e)
				}(), window.openLink = Fr, window.aJoinReq = qt, window.follmoo = function() {
					O || (O = !0, C("moofoll", 1))
				}, window.kickFromClan = Ht, window.sendJoin = Xt, window.leaveAlliance = Vt, window.createAlliance = St, window.storeBuy = Gt, window.storeEquip = Ft, window.showItemInfo = bt, window.selectSkinColor = function(e) {
					oe = e, Jt()
				}, window.changeStoreIndex = function(e) {
					Ut != e && (Ut = e, Qt())
				}, window.config = a
		},
		"./src/js/config.js": function(e, t, n) {
			(function(t) {
				e.exports.maxScreenWidth = 1920, e.exports.maxScreenHeight = 1080, e.exports.serverUpdateRate = 9, e.exports.maxPlayers = t && -1 != t.argv.indexOf("--largeserver") ? 80 : 40, e.exports.maxPlayersHard = e.exports.maxPlayers + 10, e.exports.collisionDepth = 6, e.exports.minimapRate = 3e3, e.exports.colGrid = 10, e.exports.clientSendRate = 5, e.exports.healthBarWidth = 50, e.exports.reloadBarWidth = 22, e.exports.healthBarPad = 4.5, e.exports.iconPadding = 15, e.exports.iconPad = .9, e.exports.deathFadeout = 3e3, e.exports.crownIconScale = 60, e.exports.crownPad = 35, e.exports.chatCountdown = 3e3, e.exports.chatCooldown = 500, e.exports.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME, e.exports.maxAge = 100, e.exports.gatherAngle = Math.PI / 2.6, e.exports.gatherWiggle = 10, e.exports.hitReturnRatio = .25, e.exports.hitAngle = Math.PI / 2, e.exports.playerScale = 35, e.exports.playerSpeed = .0016, e.exports.playerDecel = .993, e.exports.nameY = 26, e.exports.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"], e.exports.animalCount = 7, e.exports.aiTurnRandom = .06, e.exports.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky", "Lemon"], e.exports.shieldAngle = Math.PI / 3, e.exports.weaponVariants = [{
					id: 0,
					src: "",
					xp: 0,
					val: 1
				}, {
					id: 1,
					src: "_g",
					xp: 3e3,
					val: 1.1
				}, {
					id: 2,
					src: "_d",
					xp: 7e3,
					val: 1.18
				}, {
					id: 3,
					src: "_r",
					poison: !0,
					xp: 12e3,
					val: 1.18
				}], e.exports.fetchVariant = function(t) {
					for(var n = t.weaponXP[t.weaponIndex] || 0, r = e.exports.weaponVariants.length - 1; r >= 0; --r)
						if(n >= e.exports.weaponVariants[r].xp) return e.exports.weaponVariants[r]
				}, e.exports.resourceTypes = ["wood", "food", "stone", "points"], e.exports.areaCount = 7, e.exports.treesPerArea = 9, e.exports.bushesPerArea = 3, e.exports.totalRocks = 32, e.exports.goldOres = 7, e.exports.riverWidth = 724, e.exports.riverPadding = 114, e.exports.waterCurrent = .0011, e.exports.waveSpeed = 1e-4, e.exports.waveMax = 1.3, e.exports.treeScales = [150, 160, 165, 175], e.exports.bushScales = [80, 85, 95], e.exports.rockScales = [80, 85, 90], e.exports.snowBiomeTop = 2400, e.exports.snowSpeed = .75, e.exports.maxNameLength = 15, e.exports.mapScale = 14400, e.exports.mapPingScale = 40, e.exports.mapPingTime = 2200
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./src/js/data/ai.js": function(e, t) {
			var n = 2 * Math.PI;
			e.exports = function(e, t, r, i, s, o, a, l) {
				this.sid = e, this.isAI = !0, this.nameIndex = s.randInt(0, o.cowNames.length - 1), this.init = function(e, t, n, r, i) {
					this.x = e, this.y = t, this.startX = i.fixedSpawn ? e : null, this.startY = i.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.index = r, this.src = i.src, i.name && (this.name = i.name), this.weightM = i.weightM, this.speed = i.speed, this.killScore = i.killScore, this.turnSpeed = i.turnSpeed, this.scale = i.scale, this.maxHealth = i.health, this.leapForce = i.leapForce, this.health = this.maxHealth, this.chargePlayer = i.chargePlayer, this.viewRange = i.viewRange, this.drop = i.drop, this.dmg = i.dmg, this.hostile = i.hostile, this.dontRun = i.dontRun, this.hitRange = i.hitRange, this.hitDelay = i.hitDelay, this.hitScare = i.hitScare, this.spriteMlt = i.spriteMlt, this.nameScale = i.nameScale, this.colDmg = i.colDmg, this.noTrap = i.noTrap, this.spawnDelay = i.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
				};
				var c = 0;
				this.update = function(e) {
					if(this.active) {
						if(this.spawnCounter) return this.spawnCounter -= e, void(this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || s.randInt(0, o.mapScale), this.y = this.startY || s.randInt(0, o.mapScale)));
						(c -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), c = 1e3);
						var i = !1,
							a = 1;
						if(!this.zIndex && !this.lockMove && this.y >= o.mapScale / 2 - o.riverWidth / 2 && this.y <= o.mapScale / 2 + o.riverWidth / 2 && (a = .33, this.xVel += o.waterCurrent * e), this.lockMove) this.xVel = 0, this.yVel = 0;
						else if(this.waitCount > 0) {
							if(this.waitCount -= e, this.waitCount <= 0)
								if(this.chargePlayer) {
									for(var u, h, A, d = 0; d < r.length; ++d) !r[d].alive || r[d].skin && r[d].skin.bullRepel || (A = s.getDistance(this.x, this.y, r[d].x, r[d].y)) <= this.viewRange && (!u || A < h) && (h = A, u = r[d]);
									u ? (this.chargeTarget = u, this.moveCount = s.randInt(8e3, 12e3)) : (this.moveCount = s.randInt(1e3, 2e3), this.targetDir = s.randFloat(-Math.PI, Math.PI))
								} else this.moveCount = s.randInt(4e3, 1e4), this.targetDir = s.randFloat(-Math.PI, Math.PI)
						} else if(this.moveCount > 0) {
							var f = this.speed * a;
							if(this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = s.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), f *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = s.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), f *= 1.75, i = !0), this.hitWait && (f *= .3), this.dir != this.targetDir) {
								this.dir %= n;
								var g = (this.dir - this.targetDir + n) % n,
									p = Math.min(Math.abs(g - n), g, this.turnSpeed * e),
									m = g - Math.PI >= 0 ? 1 : -1;
								this.dir += m * p + n
							}
							this.dir %= n, this.xVel += f * e * Math.cos(this.dir), this.yVel += f * e * Math.sin(this.dir), this.moveCount -= e, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : s.randInt(1500, 6e3))
						}
						this.zIndex = 0, this.lockMove = !1;
						var w = s.getDistance(0, 0, this.xVel * e, this.yVel * e),
							y = Math.min(4, Math.max(1, Math.round(w / 40))),
							v = 1 / y;
						for(d = 0; d < y; ++d) {
							this.xVel && (this.x += this.xVel * e * v), this.yVel && (this.y += this.yVel * e * v), B = t.getGridArrays(this.x, this.y, this.scale);
							for(var b = 0; b < B.length; ++b)
								for(var k = 0; k < B[b].length; ++k) B[b][k].active && t.checkCollision(this, B[b][k], v)
						}
						var x = !1;
						if(this.hitWait > 0 && (this.hitWait -= e, this.hitWait <= 0)) {
							x = !0, this.hitWait = 0, this.leapForce && !s.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
							for(var B = t.getGridArrays(this.x, this.y, this.hitRange), C = 0; C < B.length; ++C)
								for(b = 0; b < B[C].length; ++b)(j = B[C][b]).health && (D = s.getDistance(this.x, this.y, j.x, j.y)) < j.scale + this.hitRange && (j.changeHealth(5 * -this.dmg) && t.disableObj(j), t.hitObj(j, s.getDirection(this.x, this.y, j.x, j.y)));
							for(b = 0; b < r.length; ++b) r[b].canSee(this) && l.send(r[b].id, "aa", this.sid)
						}
						if(i || x) {
							var j, D, M;
							for(d = 0; d < r.length; ++d)(j = r[d]) && j.alive && (D = s.getDistance(this.x, this.y, j.x, j.y), this.hitRange ? !this.hitWait && D <= this.hitRange + j.scale && (x ? (M = s.getDirection(j.x, j.y, this.x, this.y), j.changeHealth(-this.dmg), j.xVel += .6 * Math.cos(M), j.yVel += .6 * Math.sin(M), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3e3, this.hitWait = s.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : D <= this.scale + j.scale && (M = s.getDirection(j.x, j.y, this.x, this.y), j.changeHealth(-this.dmg), j.xVel += .55 * Math.cos(M), j.yVel += .55 * Math.sin(M)))
						}
						this.xVel && (this.xVel *= Math.pow(o.playerDecel, e)), this.yVel && (this.yVel *= Math.pow(o.playerDecel, e));
						var O = this.scale;
						this.x - O < 0 ? (this.x = O, this.xVel = 0) : this.x + O > o.mapScale && (this.x = o.mapScale - O, this.xVel = 0), this.y - O < 0 ? (this.y = O, this.yVel = 0) : this.y + O > o.mapScale && (this.y = o.mapScale - O, this.yVel = 0)
					}
				}, this.canSee = function(e) {
					if(!e) return !1;
					if(e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
					var t = Math.abs(e.x - this.x) - e.scale,
						n = Math.abs(e.y - this.y) - e.scale;
					return t <= o.maxScreenWidth / 2 * 1.3 && n <= o.maxScreenHeight / 2 * 1.3
				};
				var u = 0,
					h = 0;
				this.animate = function(e) {
					this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, u = 0, h = 0) : 0 == h ? (u += e / (this.animSpeed * o.hitReturnRatio), this.dirPlus = s.lerp(0, this.targetAngle, Math.min(1, u)), u >= 1 && (u = 1, h = 1)) : (u -= e / (this.animSpeed * (1 - o.hitReturnRatio)), this.dirPlus = s.lerp(0, this.targetAngle, Math.max(0, u))))
				}, this.startAnim = function() {
					this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, u = 0, h = 0
				}, this.changeHealth = function(e, t, n) {
					if(this.active && (this.health += e, n && (this.hitScare && !s.randInt(0, this.hitScare) ? (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget = n, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3)), e < 0 && this.hitRange && s.randInt(0, 1) && (this.hitWait = 500), t && t.canSee(this) && e < 0 && l.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6) : (this.x = this.startX || s.randInt(0, o.mapScale), this.y = this.startY || s.randInt(0, o.mapScale)), this.health = this.maxHealth, this.runFrom = null, t && (a(t, this.killScore), this.drop))))
						for(var r = 0; r < this.drop.length;) t.addResource(o.resourceTypes.indexOf(this.drop[r]), this.drop[r + 1]), r += 2
				}
			}
		},
		"./src/js/data/aiManager.js": function(e, t) {
			e.exports = function(e, t, n, r, i, s, o, a, l) {
				this.aiTypes = [{
					id: 0,
					src: "cow_1",
					killScore: 150,
					health: 500,
					weightM: .8,
					speed: 95e-5,
					turnSpeed: .001,
					scale: 72,
					drop: ["food", 50]
				}, {
					id: 1,
					src: "pig_1",
					killScore: 200,
					health: 800,
					weightM: .6,
					speed: 85e-5,
					turnSpeed: .001,
					scale: 72,
					drop: ["food", 80]
				}, {
					id: 2,
					name: "Bull",
					src: "bull_2",
					hostile: !0,
					dmg: 20,
					killScore: 1e3,
					health: 1800,
					weightM: .5,
					speed: 94e-5,
					turnSpeed: 74e-5,
					scale: 78,
					viewRange: 800,
					chargePlayer: !0,
					drop: ["food", 100]
				}, {
					id: 3,
					name: "Bully",
					src: "bull_1",
					hostile: !0,
					dmg: 20,
					killScore: 2e3,
					health: 2800,
					weightM: .45,
					speed: .001,
					turnSpeed: 8e-4,
					scale: 90,
					viewRange: 900,
					chargePlayer: !0,
					drop: ["food", 400]
				}, {
					id: 4,
					name: "Wolf",
					src: "wolf_1",
					hostile: !0,
					dmg: 8,
					killScore: 500,
					health: 300,
					weightM: .45,
					speed: .001,
					turnSpeed: .002,
					scale: 84,
					viewRange: 800,
					chargePlayer: !0,
					drop: ["food", 200]
				}, {
					id: 5,
					name: "Quack",
					src: "chicken_1",
					dmg: 8,
					killScore: 2e3,
					noTrap: !0,
					health: 300,
					weightM: .2,
					speed: .0018,
					turnSpeed: .006,
					scale: 70,
					drop: ["food", 100]
				}, {
					id: 6,
					name: "MOOSTAFA",
					nameScale: 50,
					src: "enemy",
					hostile: !0,
					dontRun: !0,
					fixedSpawn: !0,
					spawnDelay: 6e4,
					noTrap: !0,
					colDmg: 100,
					dmg: 40,
					killScore: 8e3,
					health: 18e3,
					weightM: .4,
					speed: 7e-4,
					turnSpeed: .01,
					scale: 80,
					spriteMlt: 1.8,
					leapForce: .9,
					viewRange: 1e3,
					hitRange: 210,
					hitDelay: 1e3,
					chargePlayer: !0,
					drop: ["food", 100]
				}, {
					id: 7,
					name: "Treasure",
					hostile: !0,
					nameScale: 35,
					src: "crate_1",
					fixedSpawn: !0,
					spawnDelay: 12e4,
					colDmg: 200,
					killScore: 5e3,
					health: 2e4,
					weightM: .1,
					speed: 0,
					turnSpeed: 0,
					scale: 70,
					spriteMlt: 1
				}, {
					id: 8,
					name: "MOOFIE",
					src: "wolf_2",
					hostile: !0,
					fixedSpawn: !0,
					dontRun: !0,
					hitScare: 4,
					spawnDelay: 3e4,
					noTrap: !0,
					nameScale: 35,
					dmg: 10,
					colDmg: 100,
					killScore: 3e3,
					health: 7e3,
					weightM: .45,
					speed: .0015,
					turnSpeed: .002,
					scale: 90,
					viewRange: 800,
					chargePlayer: !0,
					drop: ["food", 1e3]
				}], this.spawn = function(c, u, h, A) {
					for(var d, f = 0; f < e.length; ++f)
						if(!e[f].active) {
							d = e[f];
							break
						} return d || (d = new t(e.length, i, n, r, o, s, a, l), e.push(d)), d.init(c, u, h, A, this.aiTypes[A]), d
				}
			}
		},
		"./src/js/data/gameObject.js": function(e, t) {
			e.exports = function(e) {
				this.sid = e, this.init = function(e, t, n, r, i, s, o) {
					s = s || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = s.doUpdate, this.x = e, this.y = t, this.dir = n, this.xWiggle = 0, this.yWiggle = 0, this.scale = r, this.type = i, this.id = s.id, this.owner = o, this.name = s.name, this.isItem = null != this.id, this.group = s.group, this.health = s.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = s.colDiv || 1, this.blocker = s.blocker, this.ignoreCollision = s.ignoreCollision, this.dontGather = s.dontGather, this.hideFromEnemy = s.hideFromEnemy, this.friction = s.friction, this.projDmg = s.projDmg, this.dmg = s.dmg, this.pDmg = s.pDmg, this.pps = s.pps, this.zIndex = s.zIndex || 0, this.turnSpeed = s.turnSpeed, this.req = s.req, this.trap = s.trap, this.healCol = s.healCol, this.teleport = s.teleport, this.boostSpeed = s.boostSpeed, this.projectile = s.projectile, this.shootRange = s.shootRange, this.shootRate = s.shootRate, this.shootCount = this.shootRate, this.spawnPoint = s.spawnPoint
				}, this.changeHealth = function(e, t) {
					return this.health += e, this.health <= 0
				}, this.getScale = function(e, t) {
					return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
				}, this.visibleToPlayer = function(e) {
					return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
				}, this.update = function(e) {
					this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(.99, e)), this.turnSpeed && (this.dir += this.turnSpeed * e))
				}
			}
		},
		"./src/js/data/items.js": function(e, t) {
			e.exports.groups = [{
				id: 0,
				name: "food",
				layer: 0
			}, {
				id: 1,
				name: "walls",
				place: !0,
				limit: 30,
				layer: 0
			}, {
				id: 2,
				name: "spikes",
				place: !0,
				limit: 15,
				layer: 0
			}, {
				id: 3,
				name: "mill",
				place: !0,
				limit: 7,
				layer: 1
			}, {
				id: 4,
				name: "mine",
				place: !0,
				limit: 1,
				layer: 0
			}, {
				id: 5,
				name: "trap",
				place: !0,
				limit: 6,
				layer: -1
			}, {
				id: 6,
				name: "booster",
				place: !0,
				limit: 12,
				layer: -1
			}, {
				id: 7,
				name: "turret",
				place: !0,
				limit: 2,
				layer: 1
			}, {
				id: 8,
				name: "watchtower",
				place: !0,
				limit: 12,
				layer: 1
			}, {
				id: 9,
				name: "buff",
				place: !0,
				limit: 4,
				layer: -1
			}, {
				id: 10,
				name: "spawn",
				place: !0,
				limit: 1,
				layer: -1
			}, {
				id: 11,
				name: "sapling",
				place: !0,
				limit: 2,
				layer: 0
			}, {
				id: 12,
				name: "blocker",
				place: !0,
				limit: 3,
				layer: -1
			}, {
				id: 13,
				name: "teleporter",
				place: !0,
				limit: 2,
				layer: -1
			}], t.projectiles = [{
				indx: 0,
				layer: 0,
				src: "arrow_1",
				dmg: 25,
				speed: 1.6,
				scale: 103,
				range: 1e3
			}, {
				indx: 1,
				layer: 1,
				dmg: 25,
				scale: 20
			}, {
				indx: 0,
				layer: 0,
				src: "arrow_1",
				dmg: 35,
				speed: 2.5,
				scale: 103,
				range: 1200
			}, {
				indx: 0,
				layer: 0,
				src: "arrow_1",
				dmg: 30,
				speed: 2,
				scale: 103,
				range: 1200
			}, {
				indx: 1,
				layer: 1,
				dmg: 16,
				scale: 20
			}, {
				indx: 0,
				layer: 0,
				src: "bullet_1",
				dmg: 50,
				speed: 3.6,
				scale: 160,
				range: 1400
			}], t.weapons = [{
				id: 0,
				type: 0,
				name: "tool hammer",
				desc: "tool for gathering all resources",
				src: "hammer_1",
				length: 140,
				width: 140,
				xOff: -3,
				yOff: 18,
				dmg: 25,
				range: 65,
				gather: 1,
				speed: 300
			}, {
				id: 1,
				type: 0,
				age: 2,
				name: "hand axe",
				desc: "gathers resources at a higher rate",
				src: "axe_1",
				length: 140,
				width: 140,
				xOff: 3,
				yOff: 24,
				dmg: 30,
				spdMult: 1,
				range: 70,
				gather: 2,
				speed: 400
			}, {
				id: 2,
				type: 0,
				age: 8,
				name: "great axe",
				desc: "deal more damage and gather more resources",
				src: "great_axe_1",
				length: 140,
				width: 140,
				xOff: -8,
				yOff: 25,
				dmg: 35,
				spdMult: 1,
				range: 75,
				gather: 4,
				speed: 400
			}, {
				id: 3,
				type: 0,
				age: 2,
				name: "short sword",
				desc: "increased attack power but slower move speed",
				src: "sword_1",
				iPad: 1.3,
				length: 130,
				width: 210,
				xOff: -8,
				yOff: 46,
				dmg: 35,
				spdMult: .85,
				range: 110,
				gather: 1,
				speed: 300
			}, {
				id: 4,
				type: 0,
				age: 8,
				name: "katana",
				desc: "greater range and damage",
				src: "samurai_1",
				iPad: 1.3,
				length: 130,
				width: 210,
				xOff: -8,
				yOff: 59,
				dmg: 40,
				spdMult: .8,
				range: 118,
				gather: 1,
				speed: 300
			}, {
				id: 5,
				type: 0,
				age: 2,
				name: "polearm",
				desc: "long range melee weapon",
				src: "spear_1",
				iPad: 1.3,
				length: 130,
				width: 210,
				xOff: -8,
				yOff: 53,
				dmg: 45,
				knock: .2,
				spdMult: .82,
				range: 142,
				gather: 1,
				speed: 700
			}, {
				id: 6,
				type: 0,
				age: 2,
				name: "bat",
				desc: "fast long range melee weapon",
				src: "bat_1",
				iPad: 1.3,
				length: 110,
				width: 180,
				xOff: -8,
				yOff: 53,
				dmg: 20,
				knock: .7,
				range: 110,
				gather: 1,
				speed: 300
			}, {
				id: 7,
				type: 0,
				age: 2,
				name: "daggers",
				desc: "really fast short range weapon",
				src: "dagger_1",
				iPad: .8,
				length: 110,
				width: 110,
				xOff: 18,
				yOff: 0,
				dmg: 20,
				knock: .1,
				range: 65,
				gather: 1,
				hitSlow: .1,
				spdMult: 1.13,
				speed: 100
			}, {
				id: 8,
				type: 0,
				age: 2,
				name: "stick",
				desc: "great for gathering but very weak",
				src: "stick_1",
				length: 140,
				width: 140,
				xOff: 3,
				yOff: 24,
				dmg: 1,
				spdMult: 1,
				range: 70,
				gather: 7,
				speed: 400
			}, {
				id: 9,
				type: 1,
				age: 6,
				name: "hunting bow",
				desc: "bow used for ranged combat and hunting",
				src: "bow_1",
				req: ["wood", 4],
				length: 120,
				width: 120,
				xOff: -6,
				yOff: 0,
				projectile: 0,
				spdMult: .75,
				speed: 600
			}, {
				id: 10,
				type: 1,
				age: 6,
				name: "great hammer",
				desc: "hammer used for destroying structures",
				src: "great_hammer_1",
				length: 140,
				width: 140,
				xOff: -9,
				yOff: 25,
				dmg: 10,
				spdMult: .88,
				range: 75,
				sDmg: 7.5,
				gather: 1,
				speed: 400
			}, {
				id: 11,
				type: 1,
				age: 6,
				name: "wooden shield",
				desc: "blocks projectiles and reduces melee damage",
				src: "shield_1",
				length: 120,
				width: 120,
				shield: .2,
				xOff: 6,
				yOff: 0,
				spdMult: .7
			}, {
				id: 12,
				type: 1,
				age: 8,
				name: "crossbow",
				desc: "deals more damage and has greater range",
				src: "crossbow_1",
				req: ["wood", 5],
				aboveHand: !0,
				armS: .75,
				length: 120,
				width: 120,
				xOff: -4,
				yOff: 0,
				projectile: 2,
				spdMult: .7,
				speed: 700
			}, {
				id: 13,
				type: 1,
				age: 9,
				name: "repeater crossbow",
				desc: "high firerate crossbow with reduced damage",
				src: "crossbow_2",
				req: ["wood", 10],
				aboveHand: !0,
				armS: .75,
				length: 120,
				width: 120,
				xOff: -4,
				yOff: 0,
				projectile: 3,
				spdMult: .7,
				speed: 230
			}, {
				id: 14,
				type: 1,
				age: 6,
				name: "mc grabby",
				desc: "steals resources from enemies",
				src: "grab_1",
				length: 130,
				width: 210,
				xOff: -8,
				yOff: 53,
				dmg: 0,
				steal: 250,
				knock: .2,
				spdMult: 1.05,
				range: 125,
				gather: 0,
				speed: 700
			}, {
				id: 15,
				type: 1,
				age: 9,
				name: "musket",
				desc: "slow firerate but high damage and range",
				src: "musket_1",
				req: ["stone", 10],
				aboveHand: !0,
				rec: .35,
				armS: .6,
				hndS: .3,
				hndD: 1.6,
				length: 205,
				width: 205,
				xOff: 25,
				yOff: 0,
				projectile: 5,
				hideProjectile: !0,
				spdMult: .6,
				speed: 1500
			}], e.exports.list = [{
				group: e.exports.groups[0],
				name: "apple",
				desc: "restores 20 health when consumed",
				req: ["food", 10],
				consume: function(e) {
					return e.changeHealth(20, e)
				},
				scale: 22,
				holdOffset: 15
			}, {
				age: 3,
				group: e.exports.groups[0],
				name: "cookie",
				desc: "restores 40 health when consumed",
				req: ["food", 15],
				consume: function(e) {
					return e.changeHealth(40, e)
				},
				scale: 27,
				holdOffset: 15
			}, {
				age: 7,
				group: e.exports.groups[0],
				name: "cheese",
				desc: "restores 30 health and another 50 over 5 seconds",
				req: ["food", 25],
				consume: function(e) {
					return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
				},
				scale: 27,
				holdOffset: 15
			}, {
				group: e.exports.groups[1],
				name: "wood wall",
				desc: "provides protection for your village",
				req: ["wood", 10],
				projDmg: !0,
				health: 380,
				scale: 50,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 3,
				group: e.exports.groups[1],
				name: "stone wall",
				desc: "provides improved protection for your village",
				req: ["stone", 25],
				health: 900,
				scale: 50,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[1],
				name: "castle wall",
				desc: "provides powerful protection for your village",
				req: ["stone", 35],
				health: 1500,
				scale: 52,
				holdOffset: 20,
				placeOffset: -5
			}, {
				group: e.exports.groups[2],
				name: "spikes",
				desc: "damages enemies when they touch them",
				req: ["wood", 20, "stone", 5],
				health: 400,
				dmg: 20,
				scale: 49,
				spritePadding: -23,
				holdOffset: 8,
				placeOffset: -5
			}, {
				age: 5,
				group: e.exports.groups[2],
				name: "greater spikes",
				desc: "damages enemies when they touch them",
				req: ["wood", 30, "stone", 10],
				health: 500,
				dmg: 35,
				scale: 52,
				spritePadding: -23,
				holdOffset: 8,
				placeOffset: -5
			}, {
				age: 9,
				group: e.exports.groups[2],
				name: "poison spikes",
				desc: "poisons enemies when they touch them",
				req: ["wood", 35, "stone", 15],
				health: 600,
				dmg: 30,
				pDmg: 5,
				scale: 52,
				spritePadding: -23,
				holdOffset: 8,
				placeOffset: -5
			}, {
				age: 9,
				group: e.exports.groups[2],
				name: "spinning spikes",
				desc: "damages enemies when they touch them",
				req: ["wood", 30, "stone", 20],
				health: 500,
				dmg: 45,
				turnSpeed: .003,
				scale: 52,
				spritePadding: -23,
				holdOffset: 8,
				placeOffset: -5
			}, {
				group: e.exports.groups[3],
				name: "windmill",
				desc: "generates gold over time",
				req: ["wood", 50, "stone", 10],
				health: 400,
				pps: 1,
				turnSpeed: 0,
				spritePadding: 25,
				iconLineMult: 12,
				scale: 45,
				holdOffset: 20,
				placeOffset: 5
			}, {
				age: 5,
				group: e.exports.groups[3],
				name: "faster windmill",
				desc: "generates more gold over time",
				req: ["wood", 60, "stone", 20],
				health: 500,
				pps: 1.5,
				turnSpeed: 0,
				spritePadding: 25,
				iconLineMult: 12,
				scale: 47,
				holdOffset: 20,
				placeOffset: 5
			}, {
				age: 8,
				group: e.exports.groups[3],
				name: "power mill",
				desc: "generates more gold over time",
				req: ["wood", 100, "stone", 50],
				health: 800,
				pps: 2,
				turnSpeed: 0,
				spritePadding: 25,
				iconLineMult: 12,
				scale: 47,
				holdOffset: 20,
				placeOffset: 5
			}, {
				age: 5,
				group: e.exports.groups[4],
				type: 2,
				name: "mine",
				desc: "allows you to mine stone",
				req: ["wood", 20, "stone", 100],
				iconLineMult: 12,
				scale: 65,
				holdOffset: 20,
				placeOffset: 0
			}, {
				age: 5,
				group: e.exports.groups[11],
				type: 0,
				name: "sapling",
				desc: "allows you to farm wood",
				req: ["wood", 150],
				iconLineMult: 12,
				colDiv: .5,
				scale: 110,
				holdOffset: 50,
				placeOffset: -15
			}, {
				age: 4,
				group: e.exports.groups[5],
				name: "pit trap",
				desc: "pit that traps enemies if they walk over it",
				req: ["wood", 30, "stone", 30],
				trap: !0,
				ignoreCollision: !0,
				hideFromEnemy: !0,
				health: 500,
				colDiv: .2,
				scale: 50,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 4,
				group: e.exports.groups[6],
				name: "boost pad",
				desc: "provides boost when stepped on",
				req: ["stone", 20, "wood", 5],
				ignoreCollision: !0,
				boostSpeed: 1.5,
				health: 150,
				colDiv: .7,
				scale: 45,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[7],
				doUpdate: !0,
				name: "turret",
				desc: "defensive structure that shoots at enemies",
				req: ["wood", 200, "stone", 150],
				health: 800,
				projectile: 1,
				shootRange: 700,
				shootRate: 2200,
				scale: 43,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[8],
				name: "platform",
				desc: "platform to shoot over walls and cross over water",
				req: ["wood", 20],
				ignoreCollision: !0,
				zIndex: 1,
				health: 300,
				scale: 43,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[9],
				name: "healing pad",
				desc: "standing on it will slowly heal you",
				req: ["wood", 30, "food", 10],
				ignoreCollision: !0,
				healCol: 15,
				health: 400,
				colDiv: .7,
				scale: 45,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 9,
				group: e.exports.groups[10],
				name: "spawn pad",
				desc: "you will spawn here when you die but it will dissapear",
				req: ["wood", 100, "stone", 100],
				health: 400,
				ignoreCollision: !0,
				spawnPoint: !0,
				scale: 45,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[12],
				name: "blocker",
				desc: "blocks building in radius",
				req: ["wood", 30, "stone", 25],
				ignoreCollision: !0,
				blocker: 300,
				health: 400,
				colDiv: .7,
				scale: 45,
				holdOffset: 20,
				placeOffset: -5
			}, {
				age: 7,
				group: e.exports.groups[13],
				name: "teleporter",
				desc: "teleports you to a random point on the map",
				req: ["wood", 60, "stone", 60],
				ignoreCollision: !0,
				teleport: !0,
				health: 200,
				colDiv: .7,
				scale: 45,
				holdOffset: 20,
				placeOffset: -5
			}];
			for(var n = 0; n < e.exports.list.length; ++n) e.exports.list[n].id = n, e.exports.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre);
			if("undefined" != typeof window);
		},
		"./src/js/data/mapManager.js": function(e, t) {
			e.exports = {}
		},
		"./src/js/data/objectManager.js": function(e, t) {
			var n = Math.floor,
				r = Math.abs,
				i = Math.cos,
				s = Math.sin,
				o = (Math.pow, Math.sqrt);
			e.exports = function(e, t, a, l, c, u) {
				var h, A;
				this.objects = t, this.grids = {}, this.updateObjects = [];
				var d = l.mapScale / l.colGrid;
				this.setObjectGrids = function(e) {
					for(var t = Math.min(l.mapScale, Math.max(0, e.x)), n = Math.min(l.mapScale, Math.max(0, e.y)), r = 0; r < l.colGrid; ++r) {
						h = r * d;
						for(var i = 0; i < l.colGrid; ++i) A = i * d, t + e.scale >= h && t - e.scale <= h + d && n + e.scale >= A && n - e.scale <= A + d && (this.grids[r + "_" + i] || (this.grids[r + "_" + i] = []), this.grids[r + "_" + i].push(e), e.gridLocations.push(r + "_" + i))
					}
				}, this.removeObjGrid = function(e) {
					for(var t, n = 0; n < e.gridLocations.length; ++n)(t = this.grids[e.gridLocations[n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1)
				}, this.disableObj = function(e) {
					if(e.active = !1, u) {
						e.owner && e.pps && (e.owner.pps -= e.pps), this.removeObjGrid(e);
						var t = this.updateObjects.indexOf(e);
						t >= 0 && this.updateObjects.splice(t, 1)
					}
				}, this.hitObj = function(e, t) {
					for(var n = 0; n < c.length; ++n) c[n].active && (e.sentTo[c[n].id] && (e.active ? c[n].canSee(e) && u.send(c[n].id, "8", a.fixTo(t, 1), e.sid) : u.send(c[n].id, "12", e.sid)), e.active || e.owner != c[n] || c[n].changeItemCount(e.group.id, -1))
				};
				var f, g, p = [];
				this.getGridArrays = function(e, t, r) {
					h = n(e / d), A = n(t / d), p.length = 0;
					try {
						this.grids[h + "_" + A] && p.push(this.grids[h + "_" + A]), e + r >= (h + 1) * d && ((f = this.grids[h + 1 + "_" + A]) && p.push(f), A && t - r <= A * d ? (f = this.grids[h + 1 + "_" + (A - 1)]) && p.push(f) : t + r >= (A + 1) * d && (f = this.grids[h + 1 + "_" + (A + 1)]) && p.push(f)), h && e - r <= h * d && ((f = this.grids[h - 1 + "_" + A]) && p.push(f), A && t - r <= A * d ? (f = this.grids[h - 1 + "_" + (A - 1)]) && p.push(f) : t + r >= (A + 1) * d && (f = this.grids[h - 1 + "_" + (A + 1)]) && p.push(f)), t + r >= (A + 1) * d && (f = this.grids[h + "_" + (A + 1)]) && p.push(f), A && t - r <= A * d && (f = this.grids[h + "_" + (A - 1)]) && p.push(f)
					} catch (e) {}
					return p
				}, this.add = function(n, r, i, s, o, a, l, c, h) {
					g = null;
					for(var A = 0; A < t.length; ++A)
						if(t[A].sid == n) {
							g = t[A];
							break
						} if(!g)
						for(A = 0; A < t.length; ++A)
							if(!t[A].active) {
								g = t[A];
								break
							} g || (g = new e(n), t.push(g)), c && (g.sid = n), g.init(r, i, s, o, a, l, h), u && (this.setObjectGrids(g), g.doUpdate && this.updateObjects.push(g))
				}, this.disableBySid = function(e) {
					for(var n = 0; n < t.length; ++n)
						if(t[n].sid == e) {
							this.disableObj(t[n]);
							break
						}
				}, this.removeAllItems = function(e, n) {
					for(var r = 0; r < t.length; ++r) t[r].active && t[r].owner && t[r].owner.sid == e && this.disableObj(t[r]);
					n && n.broadcast("13", e)
				}, this.fetchSpawnObj = function(e) {
					for(var n = null, r = 0; r < t.length; ++r)
						if((g = t[r]).active && g.owner && g.owner.sid == e && g.spawnPoint) {
							n = [g.x, g.y], this.disableObj(g), u.broadcast("12", g.sid), g.owner && g.owner.changeItemCount(g.group.id, -1);
							break
						} return n
				}, this.checkItemLocation = function(e, n, r, i, s, o, c) {
					for(var u = 0; u < t.length; ++u) {
						var h = t[u].blocker ? t[u].blocker : t[u].getScale(i, t[u].isItem);
						if(t[u].active && a.getDistance(e, n, t[u].x, t[u].y) < r + h) return !1
					}
					return !(!o && 18 != s && n >= l.mapScale / 2 - l.riverWidth / 2 && n <= l.mapScale / 2 + l.riverWidth / 2)
				}, this.addProjectile = function(e, t, n, r, i) {
					for(var s, o = items.projectiles[i], l = 0; l < projectiles.length; ++l)
						if(!projectiles[l].active) {
							s = projectiles[l];
							break
						} s || (s = new Projectile(c, a), projectiles.push(s)), s.init(i, e, t, n, o.speed, r, o.scale)
				}, this.checkCollision = function(e, t, n) {
					n = n || 1;
					var c = e.x - t.x,
						u = e.y - t.y,
						h = e.scale + t.scale;
					if(r(c) <= h || r(u) <= h) {
						h = e.scale + (t.getScale ? t.getScale() : t.scale);
						var A = o(c * c + u * u) - h;
						if(A <= 0) {
							if(t.ignoreCollision) !t.trap || e.noTrap || t.owner == e || t.owner && t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n * t.boostSpeed * (t.weightM || 1) * i(t.dir), e.yVel += n * t.boostSpeed * (t.weightM || 1) * s(t.dir)) : t.healCol ? e.healCol = t.healCol : t.teleport && (e.x = a.randInt(0, l.mapScale), e.y = a.randInt(0, l.mapScale)) : (e.lockMove = !0, t.hideFromEnemy = !1);
							else {
								var d = a.getDirection(e.x, e.y, t.x, t.y);
								a.getDistance(e.x, e.y, t.x, t.y);
								if(t.isPlayer ? (A = -1 * A / 2, e.x += A * i(d), e.y += A * s(d), t.x -= A * i(d), t.y -= A * s(d)) : (e.x = t.x + h * i(d), e.y = t.y + h * s(d), e.xVel *= .75, e.yVel *= .75), t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner.team != e.team)) {
									e.changeHealth(-t.dmg, t.owner, t);
									var f = 1.5 * (t.weightM || 1);
									e.xVel += f * i(d), e.yVel += f * s(d), !t.pDmg || e.skin && e.skin.poisonRes || (e.dmgOverTime.dmg = t.pDmg, e.dmgOverTime.time = 5, e.dmgOverTime.doer = t.owner), e.colDmg && t.health && (t.changeHealth(-e.colDmg) && this.disableObj(t), this.hitObj(t, a.getDirection(e.x, e.y, t.x, t.y)))
								}
							}
							return t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0
						}
					}
					return !1
				}
			}
		},
		"./src/js/data/player.js": function(e, t, n) {
			var r = new(n("./node_modules/bad-words/lib/badwords.js"));
			r.addWords("666");
			var i = Math.abs,
				s = Math.cos,
				o = Math.sin,
				a = Math.pow,
				l = Math.sqrt;
			e.exports = function(e, t, n, c, u, h, A, d, f, g, p, m, w, y) {
				this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
				for(var v = 0; v < p.length; ++v) p[v].price <= 0 && (this.tails[p[v].id] = 1);
				this.skins = {};
				for(v = 0; v < g.length; ++v) g[v].price <= 0 && (this.skins[g[v].id] = 1);
				this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function(e) {
					this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = n.playerScale, this.speed = n.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}
				}, this.resetMoveDir = function() {
					this.moveDir = void 0
				}, this.resetResources = function(e) {
					for(var t = 0; t < n.resourceTypes.length; ++t) this[n.resourceTypes[t]] = e ? 100 : 0
				}, this.addItem = function(e) {
					var t = f.list[e];
					if(t) {
						for(var n = 0; n < this.items.length; ++n)
							if(f.list[this.items[n]].group == t.group) return this.buildIndex == this.items[n] && (this.buildIndex = e), this.items[n] = e, !0;
						return this.items.push(e), !0
					}
					return !1
				}, this.setUserData = function(e) {
					if(e) {
						this.name = "unknown";
						var t = e.name + "",
							i = !1,
							s = (t = (t = (t = (t = t.slice(0, n.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
						for(var o of r.list)
							if(-1 != s.indexOf(o)) {
								i = !0;
								break
							} t.length > 0 && !i && (this.name = t), this.skinColor = 0, n.skinColors[e.skin] && (this.skinColor = e.skin)
					}
				}, this.getData = function() {
					return [this.id, this.sid, this.name, c.fixTo(this.x, 2), c.fixTo(this.y, 2), c.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
				}, this.setData = function(e) {
					this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
				};
				var b = 0;
				this.update = function(e) {
					if(this.alive) {
						if(this.shameTimer > 0 && (this.shameTimer -= e, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (b -= e) <= 0) {
							var t = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
							t && this.changeHealth(t, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), b = 1e3
						}
						if(this.alive) {
							if(this.slowMult < 1 && (this.slowMult += 8e-4 * e, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += e, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove) this.xVel = 0, this.yVel = 0;
							else {
								var r = (this.buildIndex >= 0 ? .5 : 1) * (f.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= n.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : n.snowSpeed : 1) * this.slowMult;
								!this.zIndex && this.y >= n.mapScale / 2 - n.riverWidth / 2 && this.y <= n.mapScale / 2 + n.riverWidth / 2 && (this.skin && this.skin.watrImm ? (r *= .75, this.xVel += .4 * n.waterCurrent * e) : (r *= .33, this.xVel += n.waterCurrent * e));
								var i = null != this.moveDir ? s(this.moveDir) : 0,
									d = null != this.moveDir ? o(this.moveDir) : 0,
									g = l(i * i + d * d);
								0 != g && (i /= g, d /= g), i && (this.xVel += i * this.speed * r * e), d && (this.yVel += d * this.speed * r * e)
							}
							var p;
							this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
							for(var m = c.getDistance(0, 0, this.xVel * e, this.yVel * e), w = Math.min(4, Math.max(1, Math.round(m / 40))), y = 1 / w, v = 0; v < w; ++v) {
								this.xVel && (this.x += this.xVel * e * y), this.yVel && (this.y += this.yVel * e * y), p = h.getGridArrays(this.x, this.y, this.scale);
								for(var k = 0; k < p.length; ++k)
									for(var x = 0; x < p[k].length; ++x) p[k][x].active && h.checkCollision(this, p[k][x], y)
							}
							for(v = (C = A.indexOf(this)) + 1; v < A.length; ++v) A[v] != this && A[v].alive && h.checkCollision(this, A[v]);
							if(this.xVel && (this.xVel *= a(n.playerDecel, e), this.xVel <= .01 && this.xVel >= -.01 && (this.xVel = 0)), this.yVel && (this.yVel *= a(n.playerDecel, e), this.yVel <= .01 && this.yVel >= -.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > n.mapScale && (this.x = n.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > n.mapScale && (this.y = n.mapScale - this.scale), this.buildIndex < 0)
								if(this.reloads[this.weaponIndex] > 0) this.reloads[this.weaponIndex] -= e, this.gathering = this.mouseState;
								else if(this.gathering || this.autoGather) {
								var B = !0;
								if(null != f.weapons[this.weaponIndex].gather) this.gather(A);
								else if(null != f.weapons[this.weaponIndex].projectile && this.hasRes(f.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
									this.useRes(f.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
									var C = f.weapons[this.weaponIndex].projectile,
										j = 2 * this.scale,
										D = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
									f.weapons[this.weaponIndex].rec && (this.xVel -= f.weapons[this.weaponIndex].rec * s(this.dir), this.yVel -= f.weapons[this.weaponIndex].rec * o(this.dir)), u.addProjectile(this.x + j * s(this.dir), this.y + j * o(this.dir), this.dir, f.projectiles[C].range * D, f.projectiles[C].speed * D, C, this, null, this.zIndex)
								} else B = !1;
								this.gathering = this.mouseState, B && (this.reloads[this.weaponIndex] = f.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1))
							}
						}
					}
				}, this.addWeaponXP = function(e) {
					this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += e
				}, this.earnXP = function(e) {
					this.age < n.maxAge && (this.XP += e, this.XP >= this.maxXP ? (this.age < n.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, m.send(this.id, "16", this.upgradePoints, this.upgrAge), m.send(this.id, "15", this.XP, c.fixTo(this.maxXP, 1), this.age)) : m.send(this.id, "15", this.XP))
				}, this.changeHealth = function(e, t) {
					if(e > 0 && this.health >= this.maxHealth) return !1;
					e < 0 && this.skin && (e *= this.skin.dmgMult || 1), e < 0 && this.tail && (e *= this.tail.dmgMult || 1), e < 0 && (this.hitTime = Date.now()), this.health += e, this.health > this.maxHealth && (e -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(t);
					for(var n = 0; n < A.length; ++n) this.sentTo[A[n].id] && m.send(A[n].id, "h", this.sid, Math.round(this.health));
					return !t || !t.canSee(this) || t == this && e < 0 || m.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0
				}, this.kill = function(e) {
					e && e.alive && (e.kills++, e.skin && e.skin.goldSteal ? w(e, Math.round(this.points / 2)) : w(e, Math.round(100 * this.age * (e.skin && e.skin.kScrM ? e.skin.kScrM : 1))), m.send(e.id, "9", "kills", e.kills, 1)), this.alive = !1, m.send(this.id, "11"), y()
				}, this.addResource = function(e, t, r) {
					!r && t > 0 && this.addWeaponXP(t), 3 == e ? w(this, t, !0) : (this[n.resourceTypes[e]] += t, m.send(this.id, "9", n.resourceTypes[e], this[n.resourceTypes[e]], 1))
				}, this.changeItemCount = function(e, t) {
					this.itemCounts[e] = this.itemCounts[e] || 0, this.itemCounts[e] += t, m.send(this.id, "14", e, this.itemCounts[e])
				}, this.buildItem = function(e) {
					var t = this.scale + e.scale + (e.placeOffset || 0),
						n = this.x + t * s(this.dir),
						r = this.y + t * o(this.dir);
					if(this.canBuild(e) && !(e.consume && this.skin && this.skin.noEat) && (e.consume || h.checkItemLocation(n, r, e.scale, .6, e.id, !1, this))) {
						var i = !1;
						if(e.consume) {
							if(this.hitTime) {
								var a = Date.now() - this.hitTime;
								this.hitTime = 0, a <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 3e4, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0))
							}
							this.shameTimer <= 0 && (i = e.consume(this))
						} else i = !0, e.group.limit && this.changeItemCount(e.group.id, 1), e.pps && (this.pps += e.pps), h.add(h.objects.length, n, r, this.dir, e.scale, e.type, e, !1, this);
						i && (this.useRes(e), this.buildIndex = -1)
					}
				}, this.hasRes = function(e, t) {
					for(var n = 0; n < e.req.length;) {
						if(this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1))) return !1;
						n += 2
					}
					return !0
				}, this.useRes = function(e, t) {
					if(!n.inSandbox)
						for(var r = 0; r < e.req.length;) this.addResource(n.resourceTypes.indexOf(e.req[r]), -Math.round(e.req[r + 1] * (t || 1))), r += 2
				}, this.canBuild = function(e) {
					return !!n.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >= e.group.limit) && this.hasRes(e)
				}, this.gather = function() {
					this.noMovTimer = 0, this.slowMult -= f.weapons[this.weaponIndex].hitSlow || .3, this.slowMult < 0 && (this.slowMult = 0);
					for(var e, t, r, i = n.fetchVariant(this), a = i.poison, l = i.val, u = {}, g = h.getGridArrays(this.x, this.y, f.weapons[this.weaponIndex].range), p = 0; p < g.length; ++p)
						for(var m = 0; m < g[p].length; ++m)
							if((t = g[p][m]).active && !t.dontGather && !u[t.sid] && t.visibleToPlayer(this) && c.getDistance(this.x, this.y, t.x, t.y) - t.scale <= f.weapons[this.weaponIndex].range && (e = c.getDirection(t.x, t.y, this.x, this.y), c.getAngleDist(e, this.dir) <= n.gatherAngle)) {
								if(u[t.sid] = 1, t.health) {
									if(t.changeHealth(-f.weapons[this.weaponIndex].dmg * l * (f.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
										for(var w = 0; w < t.req.length;) this.addResource(n.resourceTypes.indexOf(t.req[w]), t.req[w + 1]), w += 2;
										h.disableObj(t)
									}
								} else {
									this.earnXP(4 * f.weapons[this.weaponIndex].gather);
									var y = f.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
									this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(t.type, y)
								}
								r = !0, h.hitObj(t, e)
							} for(m = 0; m < A.length + d.length; ++m)
						if((t = A[m] || d[m - A.length]) != this && t.alive && (!t.team || t.team != this.team) && c.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= f.weapons[this.weaponIndex].range && (e = c.getDirection(t.x, t.y, this.x, this.y), c.getAngleDist(e, this.dir) <= n.gatherAngle)) {
							var v = f.weapons[this.weaponIndex].steal;
							v && t.addResource && (v = Math.min(t.points || 0, v), this.addResource(3, v), t.addResource(3, -v));
							var b = l;
							null != t.weaponIndex && f.weapons[t.weaponIndex].shield && c.getAngleDist(e + Math.PI, t.dir) <= n.shieldAngle && (b = f.weapons[t.weaponIndex].shield);
							var k = f.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
								x = .3 * (t.weightM || 1) + (f.weapons[this.weaponIndex].knock || 0);
							t.xVel += x * s(e), t.yVel += x * o(e), this.skin && this.skin.healD && this.changeHealth(k * b * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(k * b * this.tail.healD, this), t.skin && t.skin.dmg && 1 == b && this.changeHealth(-k * t.skin.dmg, t), t.tail && t.tail.dmg && 1 == b && this.changeHealth(-k * t.tail.dmg, t), !(t.dmgOverTime && this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = this.skin.poisonDmg, t.dmgOverTime.time = this.skin.poisonTime || 1, t.dmgOverTime.doer = this), !t.dmgOverTime || !a || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = 5, t.dmgOverTime.time = 5, t.dmgOverTime.doer = this), t.skin && t.skin.dmgK && (this.xVel -= t.skin.dmgK * s(e), this.yVel -= t.skin.dmgK * o(e)), t.changeHealth(-k * b, this, this)
						} this.sendAnimation(r ? 1 : 0)
				}, this.sendAnimation = function(e) {
					for(var t = 0; t < A.length; ++t) this.sentTo[A[t].id] && this.canSee(A[t]) && m.send(A[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex)
				};
				var k = 0,
					x = 0;
				this.animate = function(e) {
					this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, k = 0, x = 0) : 0 == x ? (k += e / (this.animSpeed * n.hitReturnRatio), this.dirPlus = c.lerp(0, this.targetAngle, Math.min(1, k)), k >= 1 && (k = 1, x = 1)) : (k -= e / (this.animSpeed * (1 - n.hitReturnRatio)), this.dirPlus = c.lerp(0, this.targetAngle, Math.max(0, k))))
				}, this.startAnim = function(e, t) {
					this.animTime = this.animSpeed = f.weapons[t].speed, this.targetAngle = e ? -n.hitAngle : -Math.PI, k = 0, x = 0
				}, this.canSee = function(e) {
					if(!e) return !1;
					if(e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
					var t = i(e.x - this.x) - e.scale,
						r = i(e.y - this.y) - e.scale;
					return t <= n.maxScreenWidth / 2 * 1.3 && r <= n.maxScreenHeight / 2 * 1.3
				}
			}
		},
		"./src/js/data/projectile.js": function(e, t) {
			e.exports = function(e, t, n, r, i, s, o) {
				this.init = function(e, t, n, r, i, s, a, l, c) {
					this.active = !0, this.indx = e, this.x = t, this.y = n, this.dir = r, this.skipMov = !0, this.speed = i, this.dmg = s, this.scale = l, this.range = a, this.owner = c, o && (this.sentTo = {})
				};
				var a, l = [];
				this.update = function(c) {
					if(this.active) {
						var u, h = this.speed * c;
						if(this.skipMov ? this.skipMov = !1 : (this.x += h * Math.cos(this.dir), this.y += h * Math.sin(this.dir), this.range -= h, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), h = 1, this.range = 0, this.active = !1)), o) {
							for(var A = 0; A < e.length; ++A) !this.sentTo[e[A].id] && e[A].canSee(this) && (this.sentTo[e[A].id] = 1, o.send(e[A].id, "18", s.fixTo(this.x, 1), s.fixTo(this.y, 1), s.fixTo(this.dir, 2), s.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
							l.length = 0;
							for(A = 0; A < e.length + t.length; ++A) !(a = e[A] || t[A - e.length]).alive || a == this.owner || this.owner.team && a.team == this.owner.team || s.lineInRect(a.x - a.scale, a.y - a.scale, a.x + a.scale, a.y + a.scale, this.x, this.y, this.x + h * Math.cos(this.dir), this.y + h * Math.sin(this.dir)) && l.push(a);
							for(var d = n.getGridArrays(this.x, this.y, this.scale), f = 0; f < d.length; ++f)
								for(var g = 0; g < d[f].length; ++g) u = (a = d[f][g]).getScale(), a.active && this.ignoreObj != a.sid && this.layer <= a.layer && l.indexOf(a) < 0 && !a.ignoreCollision && s.lineInRect(a.x - u, a.y - u, a.x + u, a.y + u, this.x, this.y, this.x + h * Math.cos(this.dir), this.y + h * Math.sin(this.dir)) && l.push(a);
							if(l.length > 0) {
								var p = null,
									m = null,
									w = null;
								for(A = 0; A < l.length; ++A) w = s.getDistance(this.x, this.y, l[A].x, l[A].y), (null == m || w < m) && (m = w, p = l[A]);
								if(p.isPlayer || p.isAI) {
									var y = .3 * (p.weightM || 1);
									p.xVel += y * Math.cos(this.dir), p.yVel += y * Math.sin(this.dir), null != p.weaponIndex && r.weapons[p.weaponIndex].shield && s.getAngleDist(this.dir + Math.PI, p.dir) <= i.shieldAngle || p.changeHealth(-this.dmg, this.owner, this.owner)
								} else {
									p.projDmg && p.health && p.changeHealth(-this.dmg) && n.disableObj(p);
									for(A = 0; A < e.length; ++A) e[A].active && (p.sentTo[e[A].id] && (p.active ? e[A].canSee(p) && o.send(e[A].id, "8", s.fixTo(this.dir, 2), p.sid) : o.send(e[A].id, "12", p.sid)), p.active || p.owner != e[A] || e[A].changeItemCount(p.group.id, -1))
								}
								this.active = !1;
								for(A = 0; A < e.length; ++A) this.sentTo[e[A].id] && o.send(e[A].id, "19", this.sid, s.fixTo(m, 1))
							}
						}
					}
				}
			}
		},
		"./src/js/data/projectileManager.js": function(e, t) {
			e.exports = function(e, t, n, r, i, s, o, a, l) {
				this.addProjectile = function(c, u, h, A, d, f, g, p, m) {
					for(var w, y = s.projectiles[f], v = 0; v < t.length; ++v)
						if(!t[v].active) {
							w = t[v];
							break
						} return w || ((w = new e(n, r, i, s, o, a, l)).sid = t.length, t.push(w)), w.init(f, c, u, h, d, y.dmg, A, y.scale, g), w.ignoreObj = p, w.layer = m || y.layer, w.src = y.src, w
				}
			}
		},
		"./src/js/data/store.js": function(e, t) {
			e.exports.hats = [{
				id: 45,
				name: "Shame!",
				dontSell: !0,
				price: 0,
				scale: 120,
				desc: "hacks are for losers"
			}, {
				id: 51,
				name: "Moo Cap",
				price: 0,
				scale: 120,
				desc: "coolest mooer around"
			}, {
				id: 50,
				name: "Apple Cap",
				price: 0,
				scale: 120,
				desc: "apple farms remembers"
			}, {
				id: 28,
				name: "Moo Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 29,
				name: "Pig Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 30,
				name: "Fluff Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 36,
				name: "Pandou Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 37,
				name: "Bear Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 38,
				name: "Monkey Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 44,
				name: "Polar Head",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 35,
				name: "Fez Hat",
				price: 0,
				scale: 120,
				desc: "no effect"
			}, {
				id: 42,
				name: "Enigma Hat",
				price: 0,
				scale: 120,
				desc: "join the enigma army"
			}, {
				id: 43,
				name: "Blitz Hat",
				price: 0,
				scale: 120,
				desc: "hey everybody i'm blitz"
			}, {
				id: 49,
				name: "Bob XIII Hat",
				price: 0,
				scale: 120,
				desc: "like and subscribe"
			}, {
				id: 57,
				name: "Pumpkin",
				price: 50,
				scale: 120,
				desc: "Spooooky"
			}, {
				id: 8,
				name: "Bummle Hat",
				price: 100,
				scale: 120,
				desc: "no effect"
			}, {
				id: 2,
				name: "Straw Hat",
				price: 500,
				scale: 120,
				desc: "no effect"
			}, {
				id: 15,
				name: "Winter Cap",
				price: 600,
				scale: 120,
				desc: "allows you to move at normal speed in snow",
				coldM: 1
			}, {
				id: 5,
				name: "Cowboy Hat",
				price: 1e3,
				scale: 120,
				desc: "no effect"
			}, {
				id: 4,
				name: "Ranger Hat",
				price: 2e3,
				scale: 120,
				desc: "no effect"
			}, {
				id: 18,
				name: "Explorer Hat",
				price: 2e3,
				scale: 120,
				desc: "no effect"
			}, {
				id: 31,
				name: "Flipper Hat",
				price: 2500,
				scale: 120,
				desc: "have more control while in water",
				watrImm: !0
			}, {
				id: 1,
				name: "Marksman Cap",
				price: 3e3,
				scale: 120,
				desc: "increases arrow speed and range",
				aMlt: 1.3
			}, {
				id: 10,
				name: "Bush Gear",
				price: 3e3,
				scale: 160,
				desc: "allows you to disguise yourself as a bush"
			}, {
				id: 48,
				name: "Halo",
				price: 3e3,
				scale: 120,
				desc: "no effect"
			}, {
				id: 6,
				name: "Soldier Helmet",
				price: 4e3,
				scale: 120,
				desc: "reduces damage taken but slows movement",
				spdMult: .94,
				dmgMult: .75
			}, {
				id: 23,
				name: "Anti Venom Gear",
				price: 4e3,
				scale: 120,
				desc: "makes you immune to poison",
				poisonRes: 1
			}, {
				id: 13,
				name: "Medic Gear",
				price: 5e3,
				scale: 110,
				desc: "slowly regenerates health over time",
				healthRegen: 3
			}, {
				id: 9,
				name: "Miners Helmet",
				price: 5e3,
				scale: 120,
				desc: "earn 1 extra gold per resource",
				extraGold: 1
			}, {
				id: 32,
				name: "Musketeer Hat",
				price: 5e3,
				scale: 120,
				desc: "reduces cost of projectiles",
				projCost: .5
			}, {
				id: 7,
				name: "Bull Helmet",
				price: 6e3,
				scale: 120,
				desc: "increases damage done but drains health",
				healthRegen: -5,
				dmgMultO: 1.5,
				spdMult: .96
			}, {
				id: 22,
				name: "Emp Helmet",
				price: 6e3,
				scale: 120,
				desc: "turrets won't attack but you move slower",
				antiTurret: 1,
				spdMult: .7
			}, {
				id: 12,
				name: "Booster Hat",
				price: 6e3,
				scale: 120,
				desc: "increases your movement speed",
				spdMult: 1.16
			}, {
				id: 26,
				name: "Barbarian Armor",
				price: 8e3,
				scale: 120,
				desc: "knocks back enemies that attack you",
				dmgK: .6
			}, {
				id: 21,
				name: "Plague Mask",
				price: 1e4,
				scale: 120,
				desc: "melee attacks deal poison damage",
				poisonDmg: 5,
				poisonTime: 6
			}, {
				id: 46,
				name: "Bull Mask",
				price: 1e4,
				scale: 120,
				desc: "bulls won't target you unless you attack them",
				bullRepel: 1
			}, {
				id: 14,
				name: "Windmill Hat",
				topSprite: !0,
				price: 1e4,
				scale: 120,
				desc: "generates points while worn",
				pps: 1.5
			}, {
				id: 11,
				name: "Spike Gear",
				topSprite: !0,
				price: 1e4,
				scale: 120,
				desc: "deal damage to players that damage you",
				dmg: .45
			}, {
				id: 53,
				name: "Turret Gear",
				topSprite: !0,
				price: 1e4,
				scale: 120,
				desc: "you become a walking turret",
				turret: {
					proj: 1,
					range: 700,
					rate: 2500
				},
				spdMult: .7
			}, {
				id: 20,
				name: "Samurai Armor",
				price: 12e3,
				scale: 120,
				desc: "increased attack speed and fire rate",
				atkSpd: .78
			}, {
				id: 58,
				name: "Dark Knight",
				price: 12e3,
				scale: 120,
				desc: "restores health when you deal damage",
				healD: .4
			}, {
				id: 27,
				name: "Scavenger Gear",
				price: 15e3,
				scale: 120,
				desc: "earn double points for each kill",
				kScrM: 2
			}, {
				id: 40,
				name: "Tank Gear",
				price: 15e3,
				scale: 120,
				desc: "increased damage to buildings but slower movement",
				spdMult: .3,
				bDmg: 3.3
			}, {
				id: 52,
				name: "Thief Gear",
				price: 15e3,
				scale: 120,
				desc: "steal half of a players gold when you kill them",
				goldSteal: .5
			}, {
				id: 55,
				name: "Bloodthirster",
				price: 2e4,
				scale: 120,
				desc: "Restore Health when dealing damage. And increased damage",
				healD: .25,
				dmgMultO: 1.2
			}, {
				id: 56,
				name: "Assassin Gear",
				price: 2e4,
				scale: 120,
				desc: "Go invisible when not moving. Can't eat. Increased speed",
				noEat: !0,
				spdMult: 1.1,
				invisTimer: 1e3
			}], e.exports.accessories = [{
				id: 12,
				name: "Snowball",
				price: 1e3,
				scale: 105,
				xOff: 18,
				desc: "no effect"
			}, {
				id: 9,
				name: "Tree Cape",
				price: 1e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 10,
				name: "Stone Cape",
				price: 1e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 3,
				name: "Cookie Cape",
				price: 1500,
				scale: 90,
				desc: "no effect"
			}, {
				id: 8,
				name: "Cow Cape",
				price: 2e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 11,
				name: "Monkey Tail",
				price: 2e3,
				scale: 97,
				xOff: 25,
				desc: "Super speed but reduced damage",
				spdMult: 1.35,
				dmgMultO: .2
			}, {
				id: 17,
				name: "Apple Basket",
				price: 3e3,
				scale: 80,
				xOff: 12,
				desc: "slowly regenerates health over time",
				healthRegen: 1
			}, {
				id: 6,
				name: "Winter Cape",
				price: 3e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 4,
				name: "Skull Cape",
				price: 4e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 5,
				name: "Dash Cape",
				price: 5e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 2,
				name: "Dragon Cape",
				price: 6e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 1,
				name: "Super Cape",
				price: 8e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 7,
				name: "Troll Cape",
				price: 8e3,
				scale: 90,
				desc: "no effect"
			}, {
				id: 14,
				name: "Thorns",
				price: 1e4,
				scale: 115,
				xOff: 20,
				desc: "no effect"
			}, {
				id: 15,
				name: "Blockades",
				price: 1e4,
				scale: 95,
				xOff: 15,
				desc: "no effect"
			}, {
				id: 20,
				name: "Devils Tail",
				price: 1e4,
				scale: 95,
				xOff: 20,
				desc: "no effect"
			}, {
				id: 16,
				name: "Sawblade",
				price: 12e3,
				scale: 90,
				spin: !0,
				xOff: 0,
				desc: "deal damage to players that damage you",
				dmg: .15
			}, {
				id: 13,
				name: "Angel Wings",
				price: 15e3,
				scale: 138,
				xOff: 22,
				desc: "slowly regenerates health over time",
				healthRegen: 3
			}, {
				id: 19,
				name: "Shadow Wings",
				price: 15e3,
				scale: 138,
				xOff: 22,
				desc: "increased movement speed",
				spdMult: 1.1
			}, {
				id: 18,
				name: "Blood Wings",
				price: 2e4,
				scale: 178,
				xOff: 26,
				desc: "restores health when you deal damage",
				healD: .2
			}, {
				id: 21,
				name: "Corrupt X Wings",
				price: 2e4,
				scale: 178,
				xOff: 26,
				desc: "deal damage to players that damage you",
				dmg: .25
			}]
		},
		"./src/js/libs/animText.js": function(e, t) {
			e.exports.AnimText = function() {
				this.init = function(e, t, n, r, i, s, o) {
					this.x = e, this.y = t, this.color = o, this.scale = n, this.startScale = this.scale, this.maxScale = 1.5 * n, this.scaleSpeed = .7, this.speed = r, this.life = i, this.text = s
				}, this.update = function(e) {
					this.life && (this.life -= e, this.y -= this.speed * e, this.scale += this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
				}, this.render = function(e, t, n) {
					e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - n)
				}
			}, e.exports.TextManager = function() {
				this.texts = [], this.update = function(e, t, n, r) {
					t.textBaseline = "middle", t.textAlign = "center";
					for(var i = 0; i < this.texts.length; ++i) this.texts[i].life && (this.texts[i].update(e), this.texts[i].render(t, n, r))
				}, this.showText = function(t, n, r, i, s, o, a) {
					for(var l, c = 0; c < this.texts.length; ++c)
						if(!this.texts[c].life) {
							l = this.texts[c];
							break
						} l || (l = new e.exports.AnimText, this.texts.push(l)), l.init(t, n, r, i, s, o, a)
				}
			}
		},
		"./src/js/libs/io-client.js": function(e, t, n) {
			var r = n("./node_modules/msgpack-lite/lib/browser.js");
			n("./src/js/config.js");
			e.exports = {
				socket: null,
				connected: !1,
				socketId: -1,
				connect: function(e, t, n) {
					if(!this.socket) {
						var i = this;
						try {
							var s = !1,
								o = e;
							this.socket = new WebSocket(o), this.socket.binaryType = "arraybuffer", this.socket.onmessage = function(e) {
								var t = new Uint8Array(e.data),
									s = r.decode(t),
									o = s[0];
								t = s[1];
								"io-init" == o ? i.socketId = t[0] : n[o].apply(void 0, t)
							}, this.socket.onopen = function() {
								i.connected = !0, t()
							}, this.socket.onclose = function(e) {
								i.connected = !1, 4001 == e.code ? t("Invalid Connection") : s || t("disconnected")
							}, this.socket.onerror = function(e) {
								this.socket && this.socket.readyState != WebSocket.OPEN && (s = !0, console.error("Socket error", arguments), t("Socket error"))
							}
						} catch (e) {
							console.warn("Socket connection error:", e), t(e)
						}
					}
				},
				send: function(e) {
					var t = Array.prototype.slice.call(arguments, 1),
						n = r.encode([e, t]);
					this.socket.send(n)
				},
				socketReady: function() {
					return this.socket && this.connected
				},
				close: function() {
					this.socket && this.socket.close()
				}
			}
		},
		"./src/js/libs/modernizr.js": function(e, t) {
			! function(e, t, n) {
				function r(e, t) {
					return typeof e === t
				}
				var i = [],
					s = [],
					o = {
						_version: "3.5.0",
						_config: {
							classPrefix: "",
							enableClasses: !0,
							enableJSClass: !0,
							usePrefixes: !0
						},
						_q: [],
						on: function(e, t) {
							var n = this;
							setTimeout(function() {
								t(n[e])
							}, 0)
						},
						addTest: function(e, t, n) {
							s.push({
								name: e,
								fn: t,
								options: n
							})
						},
						addAsyncTest: function(e) {
							s.push({
								name: null,
								fn: e
							})
						}
					},
					a = function() {};
				a.prototype = o, a = new a;
				var l = t.documentElement,
					c = "svg" === l.nodeName.toLowerCase();
				a.addTest("passiveeventlisteners", function() {
						var t = !1;
						try {
							var n = Object.defineProperty({}, "passive", {
								get: function() {
									t = !0
								}
							});
							e.addEventListener("test", null, n)
						} catch (e) {}
						return t
					}),
					function() {
						var e, t, n, o, l, c;
						for(var u in s)
							if(s.hasOwnProperty(u)) {
								if(e = [], (t = s[u]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
									for(n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
								for(o = r(t.fn, "function") ? t.fn() : t.fn, l = 0; l < e.length; l++) 1 === (c = e[l].split(".")).length ? a[c[0]] = o : (!a[c[0]] || a[c[0]] instanceof Boolean || (a[c[0]] = new Boolean(a[c[0]])), a[c[0]][c[1]] = o), i.push((o ? "" : "no-") + c.join("-"))
							}
					}(),
					function(e) {
						var t = l.className,
							n = a._config.classPrefix || "";
						if(c && (t = t.baseVal), a._config.enableJSClass) {
							var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
							t = t.replace(r, "$1" + n + "js$2")
						}
						a._config.enableClasses && (t += " " + n + e.join(" " + n), c ? l.className.baseVal = t : l.className = t)
					}(i), delete o.addTest, delete o.addAsyncTest;
				for(var u = 0; u < a._q.length; u++) a._q[u]();
				e.Modernizr = a
			}(window, document)
		},
		"./src/js/libs/soundManager.js": function(e, t) {
			e.exports.obj = function(e, t) {
				var n;
				this.sounds = [], this.active = !0, this.play = function(t, r, i) {
					r && this.active && ((n = this.sounds[t]) || (n = new Howl({
						src: ".././sound/" + t + ".mp3"
					}), this.sounds[t] = n), i && n.isPlaying || (n.isPlaying = !0, n.play(), n.volume((r || 1) * e.volumeMult), n.loop(i)))
				}, this.toggleMute = function(e, t) {
					(n = this.sounds[e]) && n.mute(t)
				}, this.stop = function(e) {
					(n = this.sounds[e]) && (n.stop(), n.isPlaying = !1)
				}
			}
		},
		"./src/js/libs/utils.js": function(e, t) {
			var n = Math.abs,
				r = (Math.cos, Math.sin, Math.pow, Math.sqrt),
				i = (n = Math.abs, Math.atan2),
				s = Math.PI;
			e.exports.randInt = function(e, t) {
				return Math.floor(Math.random() * (t - e + 1)) + e
			}, e.exports.randFloat = function(e, t) {
				return Math.random() * (t - e + 1) + e
			}, e.exports.lerp = function(e, t, n) {
				return e + (t - e) * n
			}, e.exports.decel = function(e, t) {
				return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
			}, e.exports.getDistance = function(e, t, n, i) {
				return r((n -= e) * n + (i -= t) * i)
			}, e.exports.getDirection = function(e, t, n, r) {
				return i(t - r, e - n)
			}, e.exports.getAngleDist = function(e, t) {
				var r = n(t - e) % (2 * s);
				return r > s ? 2 * s - r : r
			}, e.exports.isNumber = function(e) {
				return "number" == typeof e && !isNaN(e) && isFinite(e)
			}, e.exports.isString = function(e) {
				return e && "string" == typeof e
			}, e.exports.kFormat = function(e) {
				return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
			}, e.exports.capitalizeFirst = function(e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}, e.exports.fixTo = function(e, t) {
				return parseFloat(e.toFixed(t))
			}, e.exports.sortByPoints = function(e, t) {
				return parseFloat(t.points) - parseFloat(e.points)
			}, e.exports.lineInRect = function(e, t, n, r, i, s, o, a) {
				var l = i,
					c = o;
				if(i > o && (l = o, c = i), c > n && (c = n), l < e && (l = e), l > c) return !1;
				var u = s,
					h = a,
					A = o - i;
				if(Math.abs(A) > 1e-7) {
					var d = (a - s) / A,
						f = s - d * i;
					u = d * l + f, h = d * c + f
				}
				if(u > h) {
					var g = h;
					h = u, u = g
				}
				return h > r && (h = r), u < t && (u = t), !(u > h)
			}, e.exports.containsPoint = function(e, t, n) {
				var r = e.getBoundingClientRect(),
					i = r.left + window.scrollX,
					s = r.top + window.scrollY,
					o = r.width,
					a = r.height;
				return t > i && t < i + o && (n > s && n < s + a)
			}, e.exports.mousifyTouchEvent = function(e) {
				var t = e.changedTouches[0];
				e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
			}, e.exports.hookTouchEvents = function(t, n) {
				var r = !n,
					i = !1,
					s = !1;

				function o(n) {
					e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), r && (n.preventDefault(), n.stopPropagation()), i && (t.onclick && t.onclick(n), t.onmouseout && t.onmouseout(n), i = !1)
				}
				t.addEventListener("touchstart", e.exports.checkTrusted(function(n) {
					e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), r && (n.preventDefault(), n.stopPropagation());
					t.onmouseover && t.onmouseover(n);
					i = !0
				}), s), t.addEventListener("touchmove", e.exports.checkTrusted(function(n) {
					e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), r && (n.preventDefault(), n.stopPropagation());
					e.exports.containsPoint(t, n.pageX, n.pageY) ? i || (t.onmouseover && t.onmouseover(n), i = !0) : i && (t.onmouseout && t.onmouseout(n), i = !1)
				}), s), t.addEventListener("touchend", e.exports.checkTrusted(o), s), t.addEventListener("touchcancel", e.exports.checkTrusted(o), s), t.addEventListener("touchleave", e.exports.checkTrusted(o), s)
			}, e.exports.removeAllChildren = function(e) {
				for(; e.hasChildNodes();) e.removeChild(e.lastChild)
			}, e.exports.generateElement = function(t) {
				var n = document.createElement(t.tag || "div");

				function r(e, r) {
					t[e] && (n[r] = t[e])
				}
				for(var i in r("text", "textContent"), r("html", "innerHTML"), r("class", "className"), t) {
					switch(i) {
						case "tag":
						case "text":
						case "html":
						case "class":
						case "style":
						case "hookTouch":
						case "parent":
						case "children":
							continue
					}
					n[i] = t[i]
				}
				if(n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)), n.onmouseover && (n.onmouseover = e.exports.checkTrusted(n.onmouseover)), n.onmouseout && (n.onmouseout = e.exports.checkTrusted(n.onmouseout)), t.style && (n.style.cssText = t.style), t.hookTouch && e.exports.hookTouchEvents(n), t.parent && t.parent.appendChild(n), t.children)
					for(var s = 0; s < t.children.length; s++) n.appendChild(t.children[s]);
				return n
			}, e.exports.eventIsTrusted = function(e) {
				return !e || "boolean" != typeof e.isTrusted || e.isTrusted
			}, e.exports.checkTrusted = function(t) {
				return function(n) {
					n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n)
				}
			}, e.exports.randomString = function(e) {
				for(var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
				return t
			}, e.exports.countInArray = function(e, t) {
				for(var n = 0, r = 0; r < e.length; r++) e[r] === t && n++;
				return n
			}
		},
		"./vultr/VultrClient.js": function(e, t, n) {
			var r = n("./node_modules/url/url.js"),
				i = n("./node_modules/md5/md5.js");

			function s(e, t, n, r, i) {
				"localhost" == location.hostname && (window.location.hostname = "127.0.0.1"), this.debugLog = !1, this.baseUrl = e, this.lobbySize = n, this.devPort = t, this.lobbySpread = r, this.rawIPs = !!i, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers)
			}
			s.prototype.regionInfo = {
				0: {
					name: "Local",
					latitude: 0,
					longitude: 0
				},
				"vultr:1": {
					name: "New Jersey",
					latitude: 40.1393329,
					longitude: -75.8521818
				},
				"vultr:2": {
					name: "Chicago",
					latitude: 41.8339037,
					longitude: -87.872238
				},
				"vultr:3": {
					name: "Dallas",
					latitude: 32.8208751,
					longitude: -96.8714229
				},
				"vultr:4": {
					name: "Seattle",
					latitude: 47.6149942,
					longitude: -122.4759879
				},
				"vultr:5": {
					name: "Los Angeles",
					latitude: 34.0207504,
					longitude: -118.691914
				},
				"vultr:6": {
					name: "Atlanta",
					latitude: 33.7676334,
					longitude: -84.5610332
				},
				"vultr:7": {
					name: "Amsterdam",
					latitude: 52.3745287,
					longitude: 4.7581878
				},
				"vultr:8": {
					name: "London",
					latitude: 51.5283063,
					longitude: -.382486
				},
				"vultr:9": {
					name: "Frankfurt",
					latitude: 50.1211273,
					longitude: 8.496137
				},
				"vultr:12": {
					name: "Silicon Valley",
					latitude: 37.4024714,
					longitude: -122.3219752
				},
				"vultr:19": {
					name: "Sydney",
					latitude: -33.8479715,
					longitude: 150.651084
				},
				"vultr:24": {
					name: "Paris",
					latitude: 48.8588376,
					longitude: 2.2773454
				},
				"vultr:25": {
					name: "Tokyo",
					latitude: 35.6732615,
					longitude: 139.569959
				},
				"vultr:39": {
					name: "Miami",
					latitude: 25.7823071,
					longitude: -80.3012156
				},
				"vultr:40": {
					name: "Singapore",
					latitude: 1.3147268,
					longitude: 103.7065876
				}
			}, s.prototype.start = function(e, t) {
				this.callback = e, this.errorCallback = t;
				var n = this.parseServerQuery();
				n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers())
			}, s.prototype.parseServerQuery = function() {
				var e = r.parse(location.href, !0),
					t = e.query.server;
				if("string" == typeof t) {
					var n = t.split(":");
					if(3 == n.length) {
						var i = n[0],
							s = parseInt(n[1]),
							o = parseInt(n[2]);
						return "0" == i || i.startsWith("vultr:") || (i = "vultr:" + i), [i, s, o, e.query.password]
					}
					this.errorCallback("Invalid number of server parameters in " + t)
				}
			}, s.prototype.findServer = function(e, t) {
				var n = this.servers[e];
				if(Array.isArray(n)) {
					for(var r = 0; r < n.length; r++) {
						var i = n[r];
						if(i.index == t) return i
					}
					console.warn("Could not find server in region " + e + " with index " + t + ".")
				} else this.errorCallback("No server list for region " + e)
			}, s.prototype.pingServers = function() {
				var e = this,
					t = [];
				for(var n in this.servers)
					if(this.servers.hasOwnProperty(n)) {
						var r = this.servers[n],
							i = r[Math.floor(Math.random() * r.length)];
						null != i ? function(r, i) {
							var s = new XMLHttpRequest;
							s.onreadystatechange = function(r) {
								var s = r.target;
								if(4 == s.readyState)
									if(200 == s.status) {
										for(var o = 0; o < t.length; o++) t[o].abort();
										e.log("Connecting to region", i.region);
										var a = e.seekServer(i.region);
										e.connect(a[0], a[1], a[2])
									} else console.warn("Error pinging " + i.ip + " in region " + n)
							};
							var o = "//" + e.serverAddress(i.ip, !0) + ":" + e.serverPort(i) + "/ping";
							s.open("GET", o, !0), s.send(null), e.log("Pinging", o), t.push(s)
						}(0, i) : console.log("No target server for region " + n)
					}
			}, s.prototype.seekServer = function(e, t, n) {
				null == n && (n = "random"), null == t && (t = !1);
				const r = ["random"];
				var i = this.lobbySize,
					s = this.lobbySpread,
					o = this.servers[e].flatMap(function(e) {
						var t = 0;
						return e.games.map(function(n) {
							var r = t++;
							return {
								region: e.region,
								index: e.index * e.games.length + r,
								gameIndex: r,
								gameCount: e.games.length,
								playerCount: n.playerCount,
								isPrivate: n.isPrivate
							}
						})
					}).filter(function(e) {
						return !e.isPrivate
					}).filter(function(e) {
						return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2
					}).filter(function(e) {
						return "random" == n || r[e.index % r.length].key == n
					}).sort(function(e, t) {
						return t.playerCount - e.playerCount
					}).filter(function(e) {
						return e.playerCount < i
					});
				if(t && o.reverse(), 0 != o.length) {
					var a = Math.min(s, o.length),
						l = Math.floor(Math.random() * a),
						c = o[l = Math.min(l, o.length - 1)],
						u = c.region,
						h = (l = Math.floor(c.index / c.gameCount), c.index % c.gameCount);
					return this.log("Found server."), [u, l, h]
				}
				this.errorCallback("No open servers.")
			}, s.prototype.connect = function(e, t, n) {
				if(!this.connected) {
					var r = this.findServer(e, t);
					null != r ? (this.log("Connecting to server", r, "with game index", n), r.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (window.history.replaceState(document.title, document.title, this.generateHref(e, t, n, this.password)), this.server = r, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(r.ip), "on port", this.serverPort(r), "with game index", n), this.callback(this.serverAddress(r.ip), this.serverPort(r), n))) : this.errorCallback("Failed to find server for region " + e + " and index " + t)
				}
			}, s.prototype.switchServer = function(e, t, n, r) {
				this.switchingServers = !0, window.location.href = this.generateHref(e, t, n, r)
			}, s.prototype.generateHref = function(e, t, n, r) {
				var i = "/?server=" + (e = this.stripRegion(e)) + ":" + t + ":" + n;
				return r && (i += "&password=" + encodeURIComponent(r)), i
			}, s.prototype.serverAddress = function(e, t) {
				return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e + "." + this.baseUrl
			}, s.prototype.serverPort = function(e) {
				return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80
			}, s.prototype.processServers = function(e) {
				for(var t = {}, n = 0; n < e.length; n++) {
					var r = e[n],
						i = t[r.region];
					null == i && (i = [], t[r.region] = i), i.push(r)
				}
				for(var s in t) t[s] = t[s].sort(function(e, t) {
					return e.index - t.index
				});
				this.servers = t
			}, s.prototype.ipToHex = function(e) {
				return e.split(".").map(e => ("00" + parseInt(e).toString(16)).substr(-2)).join("").toLowerCase()
			}, s.prototype.hashIP = function(e) {
				return i(this.ipToHex(e))
			}, s.prototype.log = function() {
				return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0
			}, s.prototype.stripRegion = function(e) {
				return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)), e
			}, window.testVultrClient = function() {
				var e = 1;

				function t(t, n) {
					(t = `${t}`) == (n = `${n}`) ? console.log(`Assert ${e} passed.`): console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`), e++
				}
				var n = new s("test.io", -1, 5, 1, !1);
				n.errorCallback = function(e) {
					e
				}, n.processServers(function(e) {
					var t = [];
					for(var n in e)
						for(var r = e[n], i = 0; i < r.length; i++) t.push({
							ip: n + ":" + i,
							scheme: "testing",
							region: n,
							index: i,
							games: r[i].map(e => ({
								playerCount: e,
								isPrivate: !1
							}))
						});
					return t
				}({
					1: [
						[0, 0, 0, 0],
						[0, 0, 0, 0]
					],
					2: [
						[5, 1, 0, 0],
						[0, 0, 0, 0]
					],
					3: [
						[5, 0, 1, 5],
						[0, 0, 0, 0]
					],
					4: [
						[5, 1, 1, 5],
						[1, 0, 0, 0]
					],
					5: [
						[5, 1, 1, 5],
						[1, 0, 4, 0]
					],
					6: [
						[5, 5, 5, 5],
						[2, 3, 1, 4]
					],
					7: [
						[5, 5, 5, 5],
						[5, 5, 5, 5]
					]
				})), t(n.seekServer(1, !1), [1, 0, 0]), t(n.seekServer(1, !0), [1, 1, 3]), t(n.seekServer(2, !1), [2, 0, 1]), t(n.seekServer(2, !0), [2, 1, 3]), t(n.seekServer(3, !1), [3, 0, 2]), t(n.seekServer(3, !0), [3, 1, 3]), t(n.seekServer(4, !1), [4, 0, 1]), t(n.seekServer(4, !0), [4, 1, 3]), t(n.seekServer(5, !1), [5, 1, 2]), t(n.seekServer(5, !0), [5, 1, 3]), t(n.seekServer(6, !1), [6, 1, 3]), t(n.seekServer(6, !0), void 0), t(n.seekServer(7, !1), void 0), t(n.seekServer(7, !0), void 0), console.log("Tests passed.")
			};
			var o = function(e, t) {
				return e.concat(t)
			};
			Array.prototype.flatMap = function(e) {
				return function(e, t) {
					return t.map(e).reduce(o, [])
				}(e, this)
			}, e.exports = s
		}
	});
