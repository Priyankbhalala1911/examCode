class employee{
    constructor(){
        this.empDetails = [];
        this.id = 1;
    }
    createEmployee(employeeData){
        const existData = this.empDetails.find((user)=>user.email === employeeData.email);
        if(existData){
            return "employee are already exists......"
        }
        const userData = {id:this.id++,...employeeData};
        this.empDetails.push(userData);
        return userData;
    }
    getAllEmpData(){
        return this.empDetails;
    }

    updateEmpData(userIndex,updateData){
        const index = this.empDetails.findIndex((user)=>user.id === userIndex);
        if(index === -1){
            return "employee not found..."
        }
        const userData = {...this.empDetails[index] , ...updateData}
        this.empDetails[index] = userData;
        return this.empDetails;
    }

    deleteEmpData(userIndex){
        const index = this.empDetails.findIndex((user)=>user.id === userIndex);
        if(index === -1){
            return "employee not found..."
        }
        this.empDetails.splice(index,1);
        return this.empDetails;

    }

}

const employeeData = new employee();
console.log("create employee:",employeeData.createEmployee({firstName:"priyank",lastName:"Bhalala",mobile:1234456645,email:"xyz@gmail.com",salay:10252,address:[{line1:"vesu",line2:"vesu",area:"vesu",pincode:394625,city:"surat",state:"Gujarat"}]}));
console.log("create employee:",employeeData.createEmployee({firstName:"priyank",lastName:"Bhalala",mobile:1234456645,email:"py@gmail.com",salay:10252,address:[{line1:"vesu",line2:"vesu",area:"vesu",pincode:394625,city:"surat",state:"Gujarat"}]}));

console.log("updateUser :",employeeData.updateEmpData(1,{email:"priyan@gmail.com"}));

console.log("delete user:",employeeData.deleteEmpData(1));

console.log(employeeData.getAllEmpData());