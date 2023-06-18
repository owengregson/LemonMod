var sounds = true;
window.isLoaded = true;
Math.dist = function (pos1, pos2) {
    var a = pos1.x - pos2.x;
    var b = pos1.y - pos2.y;
    return Math.sqrt(a * a + b * b);
};
const sound = {
    atk: "axe_swing",
    hitBush: "bush_hit1",
	hitAcBush: "bush_hit",
    hitStone: "stone_hit",
    eat: "eat",
    musketFire: "musket_fire",
    hitWood: "hit_wood",
    place: "place"
}
var soundCache = [],
    buildings2 = [],
    players = [],
    cachedSave = [];
    var playerDat = {
        health: 100,
        id: null,
        sid: null
    }
    var joinBtn = document.getElementById("enterGame");
    joinBtn.addEventListener("click", function(e){
       menuMusic.pause();
    });
    if(load_all_sounds){
            for(let i in sound){
                playSound(sound[i]);
            }
    }
//minimize the amount of times a player will download a sound
function playSound(src, rep = 0){
	if(sounds) {
		const ind = `${src}${rep}`;
		if(!soundCache[ind]){
			soundCache[ind] = new Audio(`${link}${src}.mp3`);
			soundCache[ind].isLoaded = false;
			soundCache[ind].addEventListener("canplaythrough", function(){
				soundCache[ind].isLoaded = true;
				if(src !== sound.musketFire && src !== sound.place){
					soundCache[ind].volume = 0.5;
				}
			});
			cachedSave[src] = (rep + 1);
			localStorage.cache_save = JSON.stringify(cachedSave);
			console.log("constructing new audio", src, rep);
		} else if(soundCache[ind].isLoaded){
			if(soundCache[ind].currentTime == 0 || soundCache[ind].ended){
				soundCache[ind].play();
			} else playSound(src, rep + 1);
		}
	}
}
function cpc(sid){
    if(!players[sid]) {
        players[sid] = {
            health: 100,
            sid: sid
        };
    }
}
class ws2 extends WebSocket {
    constructor(url, protocols) {
        super(url, protocols);
        if(ALLOW_PACKET_INTERCEPT){
           this.staticSend = this.send;//using WebSocket.prototype.send.call is slow
            this.send = function(m){
                const data = msgpack.decode(new Uint8Array(m));
                this.staticSend(m);
            }
        }
        this.addEventListener("message", function(m){
            const data = msgpack.decode(new Uint8Array(m.data)),
                  payload = data[1];
            switch(data[0]){
				case "io-init":
					snowWind.volume = 0;
					plainsWind.volume = 0;
					desertWind.volume = 0;
					break;
                case "7":
                    playSound(sound.atk);
                    break;
                case "6":
                    for (let i = 0; i < payload[0].length / 8; i++) {//keep track of builds to know what sound to play
                        const binf = payload[0].slice(8 * i, 8 * i + 8);
                        let thisBuild2 = {
                            id: binf[0],
                            x: binf[1],
                            y: binf[2],
                            dir: binf[3],
                            scale: binf[4],
                            type: binf[5],
                            buildType: binf[6],
                            ownerSid: binf[7]
                        }
                        buildings2[thisBuild2.id] = thisBuild2;
                      if(thisBuild2.ownerSid == playerDat.sid) playSound(sound.place); //play sound if building placed by player
                    }
                    break;
                case "8":
                    var build2 = buildings2[payload[1]],
                    type2 = build2.type,
                    typeA = build2.buildType;
					/*
                    Bush = 0
                    WoodWall/Gold = 3
                    Spikes = 6
                    Windmill = 10
                    Tree = 1
                    StoneWall = 4
                    PitTrap = 15
                    BoostPad = 16
                    GreaterSpikes = 7
                    FasterWindmill = 11
                    Mine = 13
                    Sapling = 14
                    Stone = 2
                    Turret = 17
                    Platform = 18
                    HealingPad = 19
                    Blocker = 21
                    Teleporter = 22
                    CastleWall = 5
                    PowerMill = 12
                    PoisonSpikes = 8
                    SpinningSpikes = 9
                    SpawnPad = 20
                    */
						if(type2 == 1 || typeA == 14 || type2 == 0){
							if(sounds) {
								playSound(sound.hitBush); // tree objects
							}
						} else if(type2 == 2 || type2 == 3 || typeA == 13 || typeA == 6 || typeA==22 || typeA==21 || typeA==19 || typeA==17 || typeA == 16 || typeA == 4 || typeA == 9 || typeA == 8 || typeA == 20 || typeA == 5 || typeA == 7 || typeA==15){
							if(sounds) {
								playSound(sound.hitStone); // stone objects
							}
						} else if(typeA == 3 || typeA == 10 || typeA == 11 || typeA == 12 || typeA == 18){
							if(sounds) {
								playSound(sound.hitWood); // wood objects
							}
						}
                    break;
                    case "11":
					if(sounds) {
					    plainsWind.pause();
					    desertWind.pause();
                        snowWind.pause();
						riverWind.pause();
					}
					    players[playerDat.sid] = 100;
                    break;
                    case "h":
                        cpc(payload[0]);
                        if(payload[0] == playerDat.sid) {if (payload[1] > players[payload[0]].health) playSound(sound.eat);}
					try{
						players[payload[0]].health = payload[1];
					}catch(e){}
                    break;
                    case "1":
                    playerDat.sid = payload[0];
                    break;
                    case "33":
                        for (let i = 0; i < payload[0].length; i += 13) {
                            const plinf = payload[0].slice(i, i + 13);
                            var thisPlayer = {
                                sid: plinf[0],
                                x: plinf[1],
                                y: plinf[2],
                                dir: plinf[3],
                                obj: plinf[4],
                                wep: plinf[5],
                                variant: plinf[6],
                                tribe: plinf[7],
                                isLeader: plinf[8],
                                hat: plinf[9],
                                acc: plinf[10],
                                isSkull: plinf[11],
                                zIndex: plinf[12],
                                dist: null,
                                isMe: plinf[0] == playerDat.sid
                            },
                            sid = thisPlayer.sid,
                            temp = players[sid] || {};

                          //  thisPlayer.dist = Math.dist(thisPlayer, temp);//distance from last update

                          if(temp.x !== thisPlayer.x || temp.y !== thisPlayer.y){//moved
                         //   playSound(sound.walk);
                          }
                            cpc(sid);
                            for(let i in thisPlayer){
								try{
                                players[sid][i] = thisPlayer[i];
								} catch(e) {}
                            }
							// SNOW
							if(sounds) {
								if(players[sid].y <= 2400){
									players[sid].notInSnow = players[sid].inSnow;
									players[sid].inSnow = true;
									players[sid].wasInSnow = false;
								} else {
									players[sid].notInSnow = true;
									players[sid].wasInSnow = players[sid].inSnow;
									players[sid].inSnow = false;
								}
								if(thisPlayer.isMe){
									if(players[sid].inSnow){
										if(players[sid].notInSnow || snowWind.currentTime == 0 || snowWind.ended) {
											snowWind.play();
										}
										if(snowWind.volume < 0.7) snowWind.volume = parseFloat(snowWind.volume+0.05).toFixed(2)
									} else if(snowWind.currentTime !== 0 || snowWind.ended == false){
										if(!snowWind.paused){
											snowWind.volume = parseFloat(snowWind.volume-0.05).toFixed(2)
											if(snowWind.volume == 0){
												snowWind.pause();
											}
										}
									}
								}
								// PLAINS
								if(players[sid].y > 2400 && players[sid].y < 12000){
									players[sid].notInPlains = players[sid].inPlains;
									players[sid].inPlains = true;
									players[sid].wasInPlains = false;
								} else {
									players[sid].notInPlains = true;
									players[sid].wasInPlains = players[sid].inPlains;
									players[sid].inPlains = false;
								}
								console.log(plainsWind.volume);
								if(thisPlayer.isMe){
									if(players[sid].inPlains){
										if(players[sid].notInPlains || plainsWind.currentTime == 0 || plainsWind.ended) {
											plainsWind.play();
										}
										if(plainsWind.volume < 0.5) plainsWind.volume = parseFloat(plainsWind.volume+0.05).toFixed(2)
									} else if(plainsWind.currentTime !== 0 || plainsWind.ended == false){
										if(!plainsWind.paused){
											plainsWind.volume = parseFloat(plainsWind.volume-0.05).toFixed(2);
											if(plainsWind.volume == 0){
												plainsWind.pause();
											}
										}
									}
								}
								// RIVER
								if(players[sid].y >= 6400 && players[sid].y <= 8000){
									players[sid].notInRiver = players[sid].inRiver;
									players[sid].inRiver = true;
									players[sid].wasInRiver = false;
								} else {
									players[sid].notInRiver = true;
									players[sid].wasInRiver = players[sid].inRiver;
									players[sid].inRiver = false;
								}
								if(thisPlayer.isMe){
									if(players[sid].inRiver){
										if(players[sid].notInRiver || riverWind.currentTime == 0 || riverWind.ended) {
											riverWind.play();
										}
										if(riverWind.volume < 0.7) riverWind.volume = parseFloat(riverWind.volume+0.05).toFixed(2)
									} else if(riverWind.currentTime !== 0 || riverWind.ended == false){
										if(!riverWind.paused){
											riverWind.volume = parseFloat(riverWind.volume-0.05).toFixed(2)
											if(riverWind.volume == 0){
												riverWind.pause();
											}
										}
									}
								}
								// DESERT
								if(players[sid].y >= 12000){
									players[sid].notInDesert = players[sid].inDesert;
									players[sid].inDesert = true;
									players[sid].wasInDesert = false;
								} else {
									players[sid].notInDesert = true;
									players[sid].wasInDesert = players[sid].inDesert;
									players[sid].inDesert = false;
								}
								if(thisPlayer.isMe){
									if(players[sid].inDesert){
										if(players[sid].notInDesert || desertWind.currentTime == 0 || desertWind.ended) {
											desertWind.play();
										}
										if(desertWind.volume < 0.5) desertWind.volume = parseFloat(desertWind.volume+0.05).toFixed(2)
									} else if(desertWind.currentTime !== 0 || desertWind.ended == false){
										if(!desertWind.paused){
											desertWind.volume = parseFloat(desertWind.volume-0.05).toFixed(2)
											if(desertWind.volume == 0){
												desertWind.pause();
											}
										}
									}
								}
							} else {
								desertWind.volume = 0;
								snowWind.volume = 0;
								plainsWind.volume = 0;
								riverWind.volume = 0;
								desertWind.pause();
								snowWind.pause();
								plainsWind.pause();
								riverWind.pause();
							}
                        }
                    break;

                    case "18":
                        if(payload[5] == 5 && sounds){//musket bullet
                            playSound(sound.musketFire);
                        }
                    break;
            }
        });
    }
}
try{WebSocket = ws2;}catch(e){}