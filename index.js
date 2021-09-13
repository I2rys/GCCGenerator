//Dependencies
const Random_String = require("randomstring")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

var results = ""

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <amount> <output>
Example: node index.js 15 ./output_test.txt`)
    process.exit()    
}

if(Self_Args[0] == ""){
    console.log("Invalid amount.")
    process.exit()
}

if(isNaN(Self_Args[0])){
    console.log("amount is not an Int.")
    process.exit()
}

if(Self_Args[1] == ""){
    console.log("Invalid output.")
    process.exit()
}

for( i = 0; i <= Self_Args[0]; i++ ){
    Generate(i)
}

function Generate(i){
    if(results.length == 0){
        results = Random_String.generate(7)
    }else{
        results += `\n${Random_String.generate(7)}`
    }

    if(i == Self_Args[0]){
        Fs.writeFileSync(Self_Args[1], results, "utf8")
        console.log("Finished.")
    }
}
