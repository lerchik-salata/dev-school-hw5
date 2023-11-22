class Warrior {
    constructor() {
        this.currentLevel = 1;
        this.currentRank = "Pushover";
        this.currentExperience = 100;
        this.currentAchievements = [];
        this.maxExperience = 10000;
    }

    calculateLevel(experience) {
        return Math.min(Math.trunc(experience / 100), 100);
    }

    calculateRank(level) {
        const rankValueNumber = Math.trunc(level / 10);
        const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        return ranks[Math.min(rankValueNumber, ranks.length - 1)];
    }

    updateLevelAndRank() {
        this.currentLevel = this.calculateLevel(this.currentExperience);
        this.currentRank = this.calculateRank(this.currentLevel);
    }

    training(event) {
        let result = "";
        if (this.currentLevel >= event[2]) {
            this.currentExperience += event[1];
            this.currentAchievements.push(event[0]);
            result = event[0];
        } else {
            result = "Not strong enough";
        }
        this.currentExperience = Math.min(this.currentExperience, this.maxExperience);
        this.updateLevelAndRank();
        return result;
    }

    battle(enemyLevel) {
        let summary = "";
        let enemyRank = this.calculateRank(enemyLevel);

        if (enemyLevel >= 1 && enemyLevel <= 100) {
            if (enemyLevel === this.currentLevel) {
                this.currentExperience += 10;
                summary = "A good fight";
            } else if (enemyLevel === this.currentLevel - 1) {
                this.currentExperience += 5;
                summary = "A good fight";
            } else if (enemyLevel <= this.currentLevel - 2) {
                this.currentExperience += 0;
                summary = "Easy fight";
            } else if (enemyLevel >= this.currentLevel + 5 && enemyRank !== this.currentRank) {
                summary = "You've been defeated";
            } else {
                const experienceGain = 20 * ((enemyLevel - this.currentLevel) ** 2);
                this.currentExperience += experienceGain;
                summary = experienceGain > 0 ? "An intense fight" : "A good fight";
            }
        } else {
            return "Invalid level";
        }

        this.currentExperience = Math.min(this.currentExperience, this.maxExperience);
        this.updateLevelAndRank();
        return summary;
    }

    level() {
        return this.currentLevel;
    }

    rank() {
        return this.currentRank;
    }

    experience() {
        return this.currentExperience;
    }

    achievements() {
        return this.currentAchievements;
    }
}