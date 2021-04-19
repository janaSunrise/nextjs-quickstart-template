#!/usr/bin/env node
const { exec } = require("child_process");
fs = require('fs');

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

const executeShellCmd = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return `Error: ${error.message}`;
        }

        if (stderr) {
            return `STD Error: ${stderr}`;
        }

        return `Output: ${stdout}`
    });
}

const handleCssFrameworks = (framework) => {
    switch (framework) {
        case "bootstrap":
            let output_bs = executeShellCmd("npm i bootstrap@next");
            console.log(output_bs);

            // Append BS import to global.scss
            fs.appendFile(
                "./styles/globals.scss",
                "@import \"~bootstrap/scss/bootstrap\";",
                (error) => {
                    if (error) throw error;
                }
            )
            break;
        case "bulma":
            let output_bl = executeShellCmd("npm install bulma");
            console.log(output_bl);

            // Add bulma conf
            fs.appendFile(
                "./styles/globals.scss",
                "@import '~bulma/bulma';",
                (error) => {
                    if (error) throw error;
                }
            )
            break;
        case "tailwind":
            let output_tw = executeShellCmd("npm install -D tailwindcss@latest postcss@latest autoprefixer@latest");
            console.log(output_tw);

            output_tw = executeShellCmd("npx tailwindcss init -p");
            console.log(output_tw);

            // Write Tailwind imports to globals.scss
            fs.appendFile(
                "./styles/globals.scss",
                "@tailwind base;\n" +
                "@tailwind components;\n" +
                "@tailwind utilities;",
                (error) => {
                    if (error) throw error;
                }
            )

            // Write the config
            fs.writeFile(
                "./tailwind.config.js",
                "module.exports = {\n" +
                "\n" +
                "   purge: [],\n" +
                "\n" +
                "   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],\n" +
                "    darkMode: false, // or 'media' or 'class'\n" +
                "    theme: {\n" +
                "      extend: {},\n" +
                "    },\n" +
                "    variants: {\n" +
                "      extend: {},\n" +
                "    },\n" +
                "    plugins: [],\n" +
                "  }\n" +
                "\n",
                (error) => {
                    if (error) throw error;
                }
            )
            break;
        case "materialize":
            let output_mt = executeShellCmd("npm install materialize-css@next");
            console.log(output_mt);

            console.log("Installed it, Configure the code please.");

            break;
    }
}

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
