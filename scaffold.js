#!/usr/bin/env node

const parseCliArgs = (arguments, count=1) => {
    let totalArgsLen = count + 2;
    let args = [];

    if(arguments.length !== totalArgsLen){
        console.log("Usage: node scaffold.js <CSS-Framework-Name>");
        process.exit(1);
    }

    arguments.forEach((arg) => {
        args.push(arg);
    })

    // Remove name of program, and the executable
    args.splice(0, 2);

    return args;
}

const handleCssFrameworks = () => {}

// Constants
const valid_css_frameworks = ["bootstrap", "bulma", "tailwind", "materialize"];

// Parse the args
valid_args = parseCliArgs(process.argv);

// Destructure the list
let framework;
[framework] = valid_args;

if(valid_css_frameworks.indexOf(framework.toLowerCase()) === -1){
    console.log(`Invalid CSS framework! Valid types are: ${valid_css_frameworks.join(", ")}`);
    process.exit(1);
}
