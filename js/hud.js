var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("HUD");


// Coins
var panelCoins = new BABYLON.GUI.StackPanel();
panelCoins.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
panelCoins.isVertical = false;
panelCoins.left = "1%";
panelCoins.top = "1%";
advancedTexture.addControl(panelCoins);   

var coinsHUD = [];
coinsHUD.push(new BABYLON.GUI.Image("coin1", "textures/coin.png"));
coinsHUD[0].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
coinsHUD[0].height = "40px";
coinsHUD[0].width = "40px";
coinsHUD[0].alpha = 0.25;
panelCoins.addControl(coinsHUD[0]); 

coinsHUD.push(new BABYLON.GUI.Image("coin2", "textures/coin.png"));
coinsHUD[1].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
coinsHUD[1].height = "40px";
coinsHUD[1].width = "40px";
coinsHUD[1].alpha = 0.25;
panelCoins.addControl(coinsHUD[1]);

coinsHUD.push(new BABYLON.GUI.Image("coin3", "textures/coin.png"));
coinsHUD[2].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
coinsHUD[2].height = "40px";
coinsHUD[2].width = "40px";
coinsHUD[2].alpha = 0.25;
panelCoins.addControl(coinsHUD[2]); 


// Health
var panelHealth = new BABYLON.GUI.StackPanel();
panelHealth.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
panelHealth.isVertical = false;
panelHealth.left = "-1%";
panelHealth.top = "1%";
advancedTexture.addControl(panelHealth);  

var healthHUD = [];
healthHUD.push(new BABYLON.GUI.Image("heart1", "textures/health.png"));
healthHUD[0].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
healthHUD[0].height = "40px";
healthHUD[0].width = "40px";
panelHealth.addControl(healthHUD[0]); 

healthHUD.push(new BABYLON.GUI.Image("heart2", "textures/health.png"));
healthHUD[1].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
healthHUD[1].height = "40px";
healthHUD[1].width = "40px";
panelHealth.addControl(healthHUD[1]);

healthHUD.push(new BABYLON.GUI.Image("heart3", "textures/health.png"));
healthHUD[2].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
healthHUD[2].height = "40px";
healthHUD[2].width = "40px";
panelHealth.addControl(healthHUD[2]); 

function updateHealth(){
    for(var i=0; i<player.lives; i++){  
        healthHUD[i].alpha = 1;
    }
    for(var i=player.lives; i<3; i++){
        healthHUD[i].alpha = 0.25;
    }
}

function updateCoins(){
    for(var i=0; i<player.coins; i++){  
        coinsHUD[0].alpha = 1;
    }
    for(var i=player.coins; i<3; i++){
        coinsHUD[i].alpha = 0.25;
    }
}