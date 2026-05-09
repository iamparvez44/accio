class IPLTeam {
  static #totalTeam = 0;
  static #champion = null;

  constructor(teamName, city, captain) {
    this.teamName = teamName;
    this.city = city;
    this.captain = captain;
    this.win = 0;
    this.loss = 0;
    IPLTeam.#totalTeam++;
  }

  getInfo() {
    console.log(this.teamName, this.city, this.captain);
  }

  static getTotalTeams() {
    console.log(IPLTeam.#totalTeam);
  }

  recordResult(result) {
    if (result == "win") {
      this.win++;
    } else if (result == "loss") {
      this.loss++;
    }
  }

  getStats() {
    console.log(`${this.teamName} | Wins-> ${this.win} lose-> ${this.loss}`);
  }

  static setChampion(team) {
    IPLTeam.#champion = team;
  }

  static getChampion() {
    console.log(IPLTeam.#champion);
  }

  static compare(team1, team2){

  if(team1.win > team2.win){
      console.log(`${team1.teamName} has more wins`);
  }
  else if(team2.win > team1.win){
      console.log(`${team2.teamName} has more wins`);
  }
  else{
      console.log("Both teams have equal wins");
  }

}
}

let obj1 = new IPLTeam("Chennai Super Kings |", "Chennai |", "Dhoni");
let obj2 = new IPLTeam("Mumbai Indians |", "Mumbai |", "Rohit Sharma");
let obj3 = new IPLTeam(
  "Royal Challengers Bangalore |",
  "Bangalore |",
  "Virat Kohli",
);
let obj4 = new IPLTeam(
  "Kolkata Knight Riders |",
  "Kolkata |",
  "Dinesh Karthik",
);
obj1.recordResult("win");
obj1.recordResult("win");
obj1.recordResult("loss");
obj1.recordResult("win");
obj1.recordResult("win");


obj2.recordResult("win");
obj2.recordResult("win");
obj2.recordResult("win");
obj2.recordResult("win");
obj2.recordResult("win");

// IPLTeam.setChampion("CSK");

// IPLTeam.getChampion();

IPLTeam.compare(obj1, obj2);

// obj1.getStats();
// obj2.getStats();
