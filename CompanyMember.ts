// problem 8: violates 'interfaces over subclassing'
// we should write an interfae which includes the function getBonus
// when there are more functions that need to be implemented, We can inherit enormously more classes than using abstract class
abstract class CompanyMember {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    abstract getBonus(string): number;
}