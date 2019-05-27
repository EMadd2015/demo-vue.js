new Vue({
    el: "#app",
    data: {
        gameOn: false,
        playerHealth: 100,
        monsterHealth: 100,
        battleLog: []
    },
    methods: {
        atk: function () {
            var damage = Math.floor(Math.random() * Math.floor(10));
            this.monsterHealth -= damage;
            this.battleLog = ["Player did " + damage + " damage to monster"].concat(this.battleLog);
            if (this.monsterHealth >= 0) {
                damage = Math.floor(Math.random() * Math.floor(10));
                this.playerHealth -= damage;
                this.battleLog = ["Monster did " + damage + " damage to player"].concat(this.battleLog);
                if (this.playerHealth <= 0) {
                    this.battleLog = ["You died bravely..."].concat(this.battleLog);
                    this.gameOn = false;
                }
            } else {
                this.battleLog = ["You win!"].concat(this.battleLog);
                this.gameOn = false;
            }
        },
        spatk: function () {
            this.monsterHealth -= 10;
            this.battleLog = ["Player did " + damage + " damage to monster"].concat(this.battleLog);
            if (this.monsterHealth >= 0) {
                var damage = Math.floor(Math.random() * Math.floor(10));
                this.playerHealth -= damage
                this.battleLog = ["Monster did " + damage + " damage to player"].concat(this.battleLog);
                if (this.playerHealth <= 0) {
                    this.battleLog = ["You died bravely..."].concat(this.battleLog);
                    this.gameOn = false;
                }
            } else {
                this.battleLog = ["You win!"].concat(this.battleLog);
                this.gameOn = false;
            }
        },
        heal: function () {
            this.playerHealth += 10;
            this.battleLog = ["Player healed for 10 health"].concat(this.battleLog);
            var damage = Math.floor(Math.random() * Math.floor(10));
            this.playerHealth -= damage;
            this.battleLog = ["Monster did " + damage + " damage to player"].concat(this.battleLog);
            if (this.playerHealth <= 0) {
                this.battleLog = ["You died bravely..."].concat(this.battleLog);
                this.gameOn = false;
            }
        }
    }
})