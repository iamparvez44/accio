class User{

    constructor(name, email){

        this.name = name;
        this.email = email;

    }

    viewData(){
        console.log(this.name);
        console.log(this.email);
    }

}

class Admin extends User{

    constructor(name, email, address){
        super(name, email);
        this.address = address;
    }

    editData(){

        console.log(this.address);

    }

}

let obj = new Admin("parvez", "parvez.alam44@gmail.com", "sahaspur");

obj.viewData();