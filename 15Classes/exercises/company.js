class Company{
    departments = {};
    constructor(){
    }
    addEmployee(name,salary,position,department){
        /*•	If one of the passed parameters is an empty string 
        (""), undefined or null, this function 
        should throw an error with the following message: 
        "Invalid input!" */
        let errorCheck = [name,salary,position,department];
        errorCheck.forEach(e => {
            if(e == '' || e == undefined || e == null || e < 0 ){
                throw new Error(`Invalid input!`);
            }
        })
        let person = {};

        if(this.departments[name]){
            
            
        }else{
            person[name] = {};
            person[name]['salary'] = +salary;
            person[name]['position'] = position;
            person[name]['department'] = department;
            this.departments[name] = person;
            return `New employee is hired. Name: ${person.name}. Position: ${person.position}`;
        }
       
    }
    bestDepartments(){
        this.departments
    }
}
let c = new Company();
c.addEmployee("Stanimir", 444, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Stanimir", 500, "engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c.bestDepartment());
