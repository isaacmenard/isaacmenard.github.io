class selectWorld extends Phaser.Scene{
		
		constructor(){
			 super({key: 'selectWorld' });
		}
		preload () {
			this.load.image('background', 'ASSETS/FIGHTGAME_Assets/ENVIRO/Background/background_new_color.png');
			this.load.image('ground', 'ASSETS/FIGHTGAME_Assets/ENVIRO/LD/platform_full.png');
			this.load.image('tree', 'ASSETS/FIGHTGAME_Assets/ENVIRO/LD/tronc4.png');
			this.load.image('prop1', 'ASSETS/FIGHTGAME_Assets/ENVIRO/props/flower1.png');
			this.load.image('prop2', 'ASSETS/FIGHTGAME_Assets/ENVIRO/props/liana1.png');
			this.load.image('prop3', 'ASSETS/FIGHTGAME_Assets/ENVIRO/props/liana4.png');	
			this.load.image('prop4', 'ASSETS/FIGHTGAME_Assets/ENVIRO/props/grass1.png');
			this.load.image('checkPoint', 'ASSETS/FIGHTGAME_Assets/ITEMs/bonus1.png');
			this.load.spritesheet('portal', 'ASSETS/FIGHTGAME_Assets/ITEMs/bonus4.png', { frameWidth: 25, frameHeight: 25});
			this.load.image('chest', 'ASSETS/FIGHTGAME_Assets/ITEMs/chest.png');
			this.load.image('texte1', 'ASSETS/TEXTE/texte1.png');
			this.load.image('checkpointText', 'ASSETS/TEXTE/checkpoint.png');
			this.load.spritesheet('dude', 'ASSETS/FIGHTGAME_Assets/CHARAs/NAMKA/running/running.png', { frameWidth: 19, frameHeight: 41 });
			this.load.spritesheet('dudeAttack', 'ASSETS/FIGHTGAME_Assets/CHARAs/NAMKA/attack/attack.png', { frameWidth: 71, frameHeight: 41 });
			this.load.spritesheet('boom', 'ASSETS/FIGHTGAME_Assets/FXs/BOUM/BOOM_1.png', { frameWidth: 303, frameHeight: 79 });
		}
		create () {
			listCheckPoint = [];
			checkPoint = [100,450+vertical,null]
			//ajout images Map
			background = this.add.image(2000, window.innerHeight - (300*window.innerHeight/600), 'background').setScale(window.innerHeight/600);
			platforms = this.physics.add.staticGroup();
			tree = this.physics.add.staticGroup();
			props = this.physics.add.staticGroup();
			tree.create(50, 540+vertical, 'tree').setScale(5.5).refreshBody();
			tree.create(711, 640+vertical, 'tree').setScale(3.5).refreshBody();
			tree.create(2011, 745+vertical, 'tree').setScale(4.5).refreshBody();
			tree.create(1211, 790+vertical, 'tree').setScale(3.5).refreshBody();
			tree.create(1411, 790+vertical, 'tree').setScale(3.5).refreshBody();
		    tree.create(2711, 845+vertical, 'tree').setScale(4.5).refreshBody();
			platforms.create(50, 200+vertical, 'ground').setScale(2.5).refreshBody();
			platforms.create(200, 568+vertical, 'ground').setScale(2.5).refreshBody();
			platforms.create(700, 418+vertical, 'ground').setScale(2.5).refreshBody();
			platforms.create(1300, 568+vertical, 'ground').setScale(2.5).refreshBody();
			platforms.create(2000, 468+vertical, 'ground').setScale(2.5).refreshBody();
			platforms.create(2700, 568+vertical, 'ground').setScale(2.5).refreshBody();
			props.create(50, 552+vertical, 'prop1').setScale(1.5).refreshBody();
			props.create(2750, 552+vertical, 'prop1').setScale(1.5).refreshBody();
			props.create(2650, 552+vertical, 'prop1').setScale(1.5).refreshBody();
			props.create(1150, 554+vertical, 'prop1').setScale(1.2).refreshBody();
			props.create(1350, 552+vertical, 'prop1').setScale(1.5).refreshBody();
			props.create(780, 438+vertical, 'prop2').setScale(3).refreshBody();
			props.create(2100, 488+vertical, 'prop2').setScale(3).refreshBody();
			props.create(80, 588+vertical, 'prop2').setScale(3).refreshBody();
			props.create(2780, 588+vertical, 'prop2').setScale(3).refreshBody();
			props.create(180, 218+vertical, 'prop3').setScale(3).refreshBody();
			props.create(1380, 583+vertical, 'prop3').setScale(3).refreshBody();
			props.create(260, 552+vertical, 'prop4').setScale(3).refreshBody();
			props.create(20, 179+vertical, 'chest').setScale(2).refreshBody();
			props.create(80, 185+vertical, 'prop1').setScale(1.7).refreshBody();
			props.create(680, 402+vertical, 'prop1').setScale(1.4).refreshBody();
			props.create(2000, 452+vertical, 'prop1').setScale(1.4).refreshBody();
			props.create(2080, 454+vertical, 'prop1').setScale(1.7).refreshBody();
			props.create(1900, 452+vertical, 'prop4').setScale(3).refreshBody();
			
			
			text0 = this.physics.add.sprite(150, -100, 'texte1').setScale(0.4);
			text0.body.allowGravity = false;
			//textList.push(text0);
			text1 = this.physics.add.sprite(750, -100, 'texte1').setScale(0.4);
			text1.body.allowGravity = false;
			//textList.push(text1);

			textTuto = this.physics.add.sprite(755, 350+vertical, 'checkpointText').setScale(0.2);
			textTuto.body.allowGravity = false;

			
			checkPoint0 = this.physics.add.sprite(100, 510+vertical, 'checkPoint').setScale(2.5);
			checkPoint0.body.allowGravity = false
			listCheckPoint.push(checkPoint0)
			checkPoint1 = this.physics.add.sprite(710, 360+vertical, 'checkPoint').setScale(2.5);
			checkPoint1.body.allowGravity = false
			listCheckPoint.push(checkPoint1)
			checkPoint2 = this.physics.add.sprite(1310, 510+vertical, 'checkPoint').setScale(2.5);
			checkPoint2.body.allowGravity = false
			listCheckPoint.push(checkPoint2)
			portal = this.physics.add.sprite(2708, 510+vertical, 'portal').setScale(2.5);
			portal.body.allowGravity = false
			if(!window.mobileCheck){
				boom = this.add.sprite(-10000, (window.innerHeight - (303*1.5/2)) , 'boom').setScale(1.5);
			}else{
				boom = this.add.sprite(-10000, (window.innerHeight - (303*1.5/2) - window.innerHeight*0.20) , 'boom').setScale(1.5);
			}
			boom.rotation = 4.7

			player = this.physics.add.sprite(checkPoint[0],checkPoint[1], 'dude').setScale(3);
			this.physics.add.collider(player, platforms);

			cursors = this.input.keyboard.createCursorKeys()
			var cam = this.cameras.main
			cam.setBounds(0, 0, 3800, 600);
			cam.startFollow(player,cam.FOLLOW_LOCKON, 0.1, 0.1);
			var firstZoom = true
			function zoomCamera(){
				if(firstZoom){
					cam
						.setPosition(cam.x,-vertical - 800)
						.setSize(window.innerWidth, window.innerHeight*3)
						.setZoom(2);
					background.y += window.innerHeight/2
					firstZoom = false
				}else{
					cam
						.setPosition(0,-vertical*3.8)
						.setSize(window.innerWidth, window.innerHeight*3)
						.setZoom(3);
					background.y += vertical
				}
			}
			if(window.innerHeight > 1500){
				zoomCamera()
			}
			background.setScrollFactor(0.5);

			//anim CHeckPoint
			function checkPointF(checkPointSelectId){
					checkPoint=[listCheckPoint[checkPointSelectId].x,listCheckPoint[checkPointSelectId].y-100,listCheckPoint[checkPointSelectId]]
					if(startAnim == false){
						startAnim = true;
						var interval = setInterval(function (){
							if(Math.round(listCheckPoint[checkPointSelectId].angle +180) < 360 && Math.round(listCheckPoint[checkPointSelectId].angle +180) > 0){
								listCheckPoint[checkPointSelectId].angle += 3
							}else{
								startAnim = false
								clearInterval(interval)
							}
						},1)
						if(checkPointSelectId == 1){
							var intervalN = setInterval(function (){
								if(textTuto.alpha > 0){
								   textTuto.alpha -= 0.1;
								}else{
									clearInterval(intervalN)
								}
							},100)
						}
					}
				if(textList[checkPointSelectId] != undefined){
						if(textList[checkPointSelectId].y < 150){
							textList[checkPointSelectId].setVelocityY(120)
						}else{
							textList[checkPointSelectId].setVelocityY(0)
						}
					}
				}

			//listCheckPoint
			this.physics.add.overlap(player, checkPoint0, function(){checkPointF(0)});
			this.physics.add.overlap(player, checkPoint1, function(){checkPointF(1)});
			this.physics.add.overlap(player, checkPoint2, function(){checkPointF(2)});
			
			
			//list animation
			this.anims.create({
				key: 'boom',
				frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 17 }),
				frameRate: 10,
				repeat: 0
			});
			this.anims.create({
				key: 'left',
				frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
				frameRate: 15,
				repeat: -1
			});
			this.anims.create({
				key: 'right',
				frames: this.anims.generateFrameNumbers('dude', { start: 10, end: 17 }),
				frameRate: 15,
				repeat: -1
			});
			this.anims.create({
				key: 'leftJump',
				frames: this.anims.generateFrameNumbers('dude', { start: 18, end: 18 }),
				frameRate: 7,
				repeat: 2
			});
			this.anims.create({
				key: 'rightJump',
				frames: this.anims.generateFrameNumbers('dude', { start: 21, end: 21 }),
				frameRate: 7,
				repeat: 2
			});
			this.anims.create({
				key: 'attackRight',
				frames: this.anims.generateFrameNumbers('dudeAttack', { start: 0, end: 8 }),
				frameRate: 7,
				repeat: 0
			});
			this.anims.create({
				key: 'attackLeft',
				frames: this.anims.generateFrameNumbers('dudeAttack', { start: 9, end: 16 }),
				frameRate: 7,
				repeat: 0
			});
			this.anims.create({
				key: 'turnLeft',
				frames: [ { key: 'dude', frame: 8 } ],
				frameRate: 0
			});
			this.anims.create({
				key: 'turnRight',
				frames: [ { key: 'dude', frame: 9 } ],
				frameRate: 0
			});
			this.anims.create({
				key: 'portalAnim',
				frames: this.anims.generateFrameNumbers('portal', { start: 0, end: 4 }),
				frameRate: 7,
				repeat: 0
			});

			//position départ
			player.anims.play('turnRight');
			
			
			//coup épée space
			sword = function (){
				
				player.setVelocityX(0);
				//action si il est à coté du portal sinon juste attaque
				if(lastPos == "left"){
					if(portal.x - player.x > -100 && portal.x - player.x < 0){
						zoomCamera()
						setTimeout(function(){
							player.anims.play('attackLeft', true);
							portal.anims.play('portalAnim')
							setTimeout(function(){
								game.scene.start("scene2");
								game.scene.stop("selectWorld");
							},1000	)
						},400)
					}else{
						player.anims.play('attackLeft', true);
					}
				}
				else{
					if(portal.x - player.x < 100){
						zoomCamera()
						setTimeout(function(){
							portal.anims.play('portalAnim')
							player.anims.play('attackRight', true)
							setTimeout(function(){
								game.scene.start("scene2");
								game.scene.stop("selectWorld");
							},1000)
						},400)
					}else{
						player.anims.play('attackRight', true)
					}
				}
			}
			
			this.input.keyboard.on('keyup_SPACE', function (event) {
				sword()
			})
		}
		update () {
			//spaceUp pour mobile
			if(keyDown[3] == true){
				spaceDown = true
			}
			if(spaceDown == true && keyDown[3] == false){
				spaceDown = false;
				sword()
			}
			
			//animation checkpoint
			for(var i = 0; i < listCheckPoint.length;i++){
				if(listCheckPoint[i].angle != 0 && checkPoint[2] != listCheckPoint[i]){
					listCheckPoint[i].angle -= 6
				}
			}
			//animation text
			for(var i = 0; i < textList.length;i++){
				if(startAnim == false){
					if(textList[i].y > -100){
						textList[i].setVelocityY(-120)
					}else{
						textList[i].setVelocityY(0)
					}
				}
			}
			
			//retourCheckPoint
			if(player.y >  (window.innerHeight +100)){
				boom.x = player.x
				player.x = checkPoint[0]
				player.y = checkPoint[1]
				boom.anims.play('boom', true);
			}
			
			//animation arret
			if(cursors.left.isUp && cursors.right.isUp && keyDown[0] == false && keyDown[1] == false && player.body.velocity.x != 0){
				player.setVelocityX(0)
				if(lastPos == "left"){
					player.anims.play('turnLeft');
				}
				else{
					player.anims.play('turnRight')
				}
			}
			//deplacement + saut
			if (cursors.left.isDown || keyDown[1] == true) {
				player.setVelocityX(speedPerso * -1);
				if (player.body.touching.down) { 
					player.anims.play('left', true);
				}else{
					player.anims.play('leftJump', true);
				}
				lastPos = "left"
			}
			else if (cursors.right.isDown || keyDown[0] == true) {
				player.setVelocityX(speedPerso);
				if (player.body.touching.down) { 
					player.anims.play('right', true);
				}else{
					player.anims.play('rightJump', true);
				}
				lastPos = "right"
			}
			if ((cursors.up.isDown || keyDown[2] == true ) && player.body.touching.down && !cursors.space.isDown  && keyDown[3] == false) { 
			   player.setVelocityY(jumpPerso * -1)
			   if(lastPos == "left"){
					player.anims.play('turnLeft');
				}
				else{
					player.anims.play('turnRight')
				}
			}
		}
	}