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
			this.load.image('textWelcome', 'ASSETS/TEXTE/welcome.png');
			this.load.image('textPortfolio', 'ASSETS/TEXTE/portfolio.png');
			this.load.image('textProjet', 'ASSETS/TEXTE/projetsAnnonce.png');
			this.load.image('textIam', 'ASSETS/TEXTE/textIam.png');
			this.load.image('snow', 'ASSETS/particles/snow.png');
			this.load.image('checkpointText', 'ASSETS/TEXTE/checkpoint.png');
			this.load.spritesheet('dude', 'ASSETS/FIGHTGAME_Assets/CHARAs/NAMKA/running/running.png', { frameWidth: 19, frameHeight: 41 });
			this.load.spritesheet('dudeAttack', 'ASSETS/FIGHTGAME_Assets/CHARAs/NAMKA/attack/attack.png', { frameWidth: 71, frameHeight: 41 });
			this.load.spritesheet('boom', 'ASSETS/FIGHTGAME_Assets/FXs/BOUM/BOOM_1.png', { frameWidth: 303, frameHeight: 79 });
			this.load.image('tiles', 'ASSETS/adve/tiles_new.png');
  			// Load the export Tiled JSON
  			this.load.tilemapTiledJSON('map', 'ASSETS/Map/mapStart.json');
		}
		create () {
			
			
			listCheckPoint = [];
			checkPoint = [100,450+vertical,null]
			//ajout images Map
			
			
			background = this.add.image(2000, window.innerHeight - (300*window.innerHeight/600), 'background').setScale(window.innerHeight/600);
			map = this.make.tilemap({ key: 'map' });
			const tileset = map.addTilesetImage('test', 'tiles');
			backgroundTiled = map.createStaticLayer('BACKGROUND', tileset, 0, 0).setScale(scaleMap);
			backgroundElementTiled = map.createStaticLayer('BACKGROUND ELEMENT', tileset, 0, 0).setScale(scaleMap);
			backgroundElementTiled.alpha = 0.75
			platformsTiled = map.createStaticLayer('COLLIDE', tileset,  0, 0).setScale(scaleMap);
			deadTouchTiled = map.createStaticLayer('DEADTOUCH', tileset, 0, 0).setScale(scaleMap);
			elementsTiled = map.createStaticLayer('ELEMENTS', tileset, 0, 0).setScale(scaleMap);
			platformsTiled.setCollisionByExclusion(-1,true);	
			platformsTiled.allowGravity=  false;
	
			const spawnPoint = map.getObjectLayer('SPAWNPOINT')['objects'][0];
			checkPoint = [spawnPoint.x*scaleMap,spawnPoint.y*scaleMap,null]
			
			if(window.mobileCheck() == false){
				boom = this.add.sprite(-10000, (map.heightInPixels*scaleMap - (303*1.5/2)) , 'boom').setScale(scaleItem*1.5);
			}else{
				boom = this.add.sprite(-10000, (map.heightInPixels*scaleMap - (303*1.5/2) - map.heightInPixels*scaleMap  ) , 'boom').setScale(scaleItem*1.5);
			}
			boom.rotation = 4.7

			player = this.physics.add.sprite(checkPoint[0],checkPoint[1], 'dude').setScale(scaleItem);
			this.physics.add.collider(player, platformsTiled);


			cursors = this.input.keyboard.createCursorKeys()
			var cam = this.cameras.main
			cam.setBounds(0, vertical/2, map.widthInPixels*scaleMap, map.heightInPixels*scaleMap-vertical/2);
			cam.startFollow(player,cam.FOLLOW_LOCKON, 0.1, 0.1);
			var firstZoom = true

			function zoomCamera(){
				if(firstZoom){
					cam
						.setPosition(cam.x,-vertical - 800)
						.setSize(window.innerWidth, window.innerHeight*3)
						.setZoom(2);
					background.y +=  window.innerHeight/2
					firstZoom = false
				}
			}
			background.setScrollFactor(0.5);

					//anim CHeckPoint
			function checkPointF(checkPointSelect){
					checkPoint=[checkPointSelect.x,checkPointSelect.y,checkPointSelect]
					if(startAnim == false){
						startAnim = true;
						var interval = setInterval(function (){
							if(Math.round(checkPointSelect.angle +180) < 360 && Math.round(checkPointSelect.angle +180) > 0){
								checkPointSelect.angle += 3
							}else{
								startAnim = false
								clearInterval(interval)
							}
						},1)
					}

				}

			 	// Create a sprite group for all spikes, set common properties to ensure that
			// sprites in the group don't move via gravity or by player collisions
			checkPoints = this.physics.add.group({
			  allowGravity: false,
			  immovable: true
			});
			
			// Let's get the spike objects, these are NOT sprites
			const checkPointObjects = map.getObjectLayer('CHECKPOINT')['objects'];

			// Now we create spikes in our sprite group for each object in our map
			checkPointObjects.forEach(checkPointS => {
			  // Add new spikes to our sprite group, change the start y position to meet the platform
			  var myCheckPoint = this.physics.add.sprite(checkPointS.x*scaleMap, checkPointS.y*scaleMap  , 'checkPoint').setScale(scaleItem);
			
			  myCheckPoint.body.allowGravity = false;
			  myCheckPoint['idS'] = listCheckPoint.length
			  listCheckPoint.push(myCheckPoint)
				
				this.physics.add.overlap(player, myCheckPoint, function(){checkPointF(myCheckPoint)});
			});
			var portalObjects = []
			const portalPointObjects = map.getObjectLayer('PORTAL')['objects'];

			// Now we create spikes in our sprite group for each object in our map
			portalPointObjects.forEach(checkPointS => {
			  // Add new spikes to our sprite group, change the start y position to meet the platform
			  var myPortalPoint = this.physics.add.sprite(checkPointS.x*scaleMap, checkPointS.y*scaleMap  , 'portal').setScale(scaleItem);
			myPortalPoint['sceneGo'] = checkPointS.properties[0].value
			  myPortalPoint.body.allowGravity = false;
				portalObjects.push(myPortalPoint)
			});
			
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
			
			var presseSpace = false
			
			//coup épée space
			sword = function (){
				
				player.setVelocityX(0);
				
				

			// Now we create spikes in our sprite group for each object in our map
			portalObjects.forEach(checkPointS => {
				
				//action si il est à coté du portal sinon juste attaque
				if(lastPos == "left"){
					var numberS = 100 * scaleItem / 2.5
					console.log(numberS)
					if(checkPointS.x - player.x > -numberS && checkPointS.x - player.x < 0 && !presseSpace){
						presseSpace = true
						zoomCamera()
						setTimeout(function(){
							player.anims.play('attackLeft', true);
							checkPointS.anims.play('portalAnim')
							setTimeout(function(){
								game.scene.start(checkPointS.sceneGo);
								game.scene.stop("selectWorld");
							},1000	)
						},400)
					}else{
						player.anims.play('attackLeft', true);
					}
				}
				else{
					
					var numberS = 100 * scaleItem / 2.5
					console.log(numberS)
					if(checkPointS.x - player.x < numberS && !presseSpace){
						presseSpace = true
						zoomCamera()
						setTimeout(function(){
							checkPointS.anims.play('portalAnim')
							player.anims.play('attackRight', true)
							setTimeout(function(){
								game.scene.start(checkPointS.sceneGo);
								game.scene.stop("selectWorld");
							},1000)
						},400)
					}else{
						player.anims.play('attackRight', true)
					}
				}
			});
			}
									   
			
			this.input.keyboard.on('keyup_SPACE', function (event) {
				sword()
			})
			
			var particles = this.add.particles('snow');

			var emitter = particles.createEmitter({
				x: { min: 0, max: map.widthInPixels*scaleMap },
				y: player.y,
				speed: 600,
				lifespan: 1000,
				gravityY: -350,
				quantity:0.0005,
				alpha:0.9
			});
			var emitter = particles.createEmitter({
				x: { min: 0, max: map.widthInPixels*scaleMap },
				y: player.y+600,
				speed: 600,
				lifespan: 1000,
				gravityY: -350,
				quantity:0.0005,
				alpha:0.9
			});
			var emitter = particles.createEmitter({
				x: { min: 0, max: map.widthInPixels*scaleMap },
				y: player.y-600,
				speed: 600,
				lifespan: 1000,
				gravityY: -350,
				quantity:0.0005,
				alpha:0.9
			});
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

			//retourCheckPoint
			if(player.y >  (map.heightInPixels*scaleMap +100)){
				boom.x = player.x
				boom.y = player.y - vertical
				player.x = checkPoint[0]
				player.y = checkPoint[1]
				player.body.setVelocityY(0)
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
			
		
			if(canMove == true){
				//deplacement + saut
				if (cursors.left.isDown || keyDown[1] == true) {
					player.setVelocityX(speedPerso * -1);
					if (player.body.onFloor()) { 
						player.anims.play('left', true);
					}else{
						player.anims.play('leftJump', true);
					}
					lastPos = "left"
				}
				else if (cursors.right.isDown || keyDown[0] == true) {
					player.setVelocityX(speedPerso);
					if (player.body.onFloor()) { 
						player.anims.play('right', true);
					}else{
						player.anims.play('rightJump', true);
					}
					lastPos = "right"
				}
				if ((cursors.up.isDown || keyDown[2] == true ) && player.body.onFloor() && !cursors.space.isDown  && keyDown[3] == false) { 
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
	}