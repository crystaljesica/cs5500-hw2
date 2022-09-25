//Problem 1: name of the class is not meaningful(violates 'good names'), 
//when other people read my code, they don't know what is A and will be very confused.
//should be something like employee
class A {

    // problem 2: not making the fields of the class to be private(violates 'keeping things private')
    // since it is public, it can be modified or used outside this class, should be very dangerous because everyone can access it.
    // should keep the fields to be private
    public salaryPerYear: number;
    // problem 3: not make the data mean something(violates 'make your data mean something')
    // the key idea for typescript is to provide the type, if it can be any type, there would be some problem when calculate the age related problem
    // if the parameter is a invalid string and it is added with the age, the result won't be correct
    // the type should be more specific like number
    public age: any;
    public yearOfEmployeement: number;
    public level: string;

    constructor(salary:number,age:number,yearOfEmployeement:number,level:string) {
        this.salaryPerYear = salary;
        this.age = age;
        this.yearOfEmployeement = yearOfEmployeement;
        this.level = level;
    }

    // problem 4: one method contains two jobs(get the salary&calculate the year when enter the company)
    // the other job can be contained in other function, if we contains several jobs inside one method, 
    // when we are calling this function, other varable could also be changed
    // should only contain one job (violates 'one job per method')
    public getTotalSalary(): number {
        // problem 5: hardcode the current year, when this year passed, the value of the curretn year should be changed
        //(violates ' don't hardcode things that are likely to change')
        // should use new Date().getFullYear() to calculate the current year
        let yearOfEnterCompany = 2022 - this.yearOfEmployeement;
        return this.salaryPerYear * yearOfEnterCompany;
    }

    public ageEnterCompany(): number {
        // problem 6: repeat to calculate the yearOfEnterCompany(violates ' minimize repetition')
        // when we call this function, we calculate the yearOfEnterCompany agin and again which is meaningless and waste of time
        // should write a function to calculate the  yearOfEnterCompany to reduce the repetition
        let yearOfEnterCompany = 2022 - this.yearOfEmployeement;
        return this.age - yearOfEnterCompany;
    }

    public getBonus(level: string): number {
        // problem 7: violates 'Favour Dynamic Dispatch Over Conditionals', if there is other level added in the future, the whole function needs to be changed
        // should write an interface conatins the fonction getBonus and implement the function into different types of the level
        if (level == 'Manager') {
            return 2 * this.salaryPerYear;
        }
        else if (level == 'Employee') {
            return 1.5 * this.salaryPerYear;
        }
        else if (level == 'Parttime') {
            return 1.2 * this.salaryPerYear;
        }
        else {
            return 1.005 * this.salaryPerYear;
        }
    }

    
}