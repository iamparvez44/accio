class IPLTeam{

     static #totalTeam = 0;

    constructor(teamName, city, captain){

       

        this.teamName = teamName;
        this.city = city;
        this.captain = captain;

        IPLTeam.#totalTeam++

    }

    getInfo(){
        console.log(`${this.teamName} | ${this.city} | ${this.captain}`)
    }

    static getTotalTeams(){
        console.log("Total teams in IPL " + IPLTeam.#totalTeam);
     }

     



}


const csk = new IPLTeam("Chennai Super Kings", "Chennai", "Dhoni");
const mi = new IPLTeam("Mumbai Indians", "Mumbai", "Rohit");
const rcb = new IPLTeam("Royal Challengers", "Bengaluru", "Kohli");

csk.getInfo();
IPLTeam.getTotalTeams();