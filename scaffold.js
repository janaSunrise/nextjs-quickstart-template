#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

const parseCliArgs = (args_, count = 1) => {
  const totalArgsLen = count + 2;
  const args = [];

  if (args_.length !== totalArgsLen) {
    console.log("Usage: node scaffold.js <CSS-Framework-Name>");
    process.exit(1);
  }

  args_.forEach((arg) => {
    args.push(arg);
  });

  // Remove name of program, and the executable
  args.splice(0, 2);

  return args;
};

const executeShellCmd = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return `Error: ${error.message}`;
    }

    if (stderr) {
      return `STD Error: ${stderr}`;
    }

    return `Output: ${stdout}`;
  });
};

const handleCssFrameworks = (framework) => {
  switch (framework) {
    case "bootstrap": {
      const outputBS = executeShellCmd("npm i bootstrap@next");
      console.log(outputBS);

      // Append BS import to global.scss
      fs.appendFile(
        "./styles/globals.scss",
        '\n@import "~bootstrap/scss/bootstrap";\n',
        (error) => {
          if (error) throw error;
        }
      );
      break;
    }
    case "bulma": {
      const outputBL = executeShellCmd("npm install bulma");
      console.log(outputBL);

      // Add bulma conf
      fs.appendFile(
        "./styles/globals.scss",
        "\n@import '~bulma/bulma';\n",
        (error) => {
          if (error) throw error;
        }
      );
      break;
    }
    case "tailwind": {
      let outputTW = executeShellCmd(
        "npm install -D tailwindcss@latest postcss@latest autoprefixer@latest"
      );
      console.log(outputTW);

      outputTW = executeShellCmd("npx tailwindcss init -p");
      console.log(outputTW);

      // Write Tailwind imports to globals.scss
      fs.appendFile(
        "./styles/globals.scss",
        "\n@tailwind base;\n" +
          "@tailwind components;\n" +
          "@tailwind utilities;\n",
        (error) => {
          if (error) throw error;
        }
      );

      // Write the config
      fs.writeFile(
        "./tailwind.config.js",
        "\nmodule.exports = {\n" +
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
      );
      break;
    }
    case "materialize": {
      const outputMT = executeShellCmd("npm install materialize-css@next");
      console.log(outputMT);

      fs.appendFile(
        "./styles/globals.scss",
        "\n@import 'materialize-css/dist/css/materialize.min.css';\n",
        (error) => {
          if (error) throw error;
        }
      );

      break;
    }
    case "chakraui": {
      const chakraui = executeShellCmd(
        "npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4"
      );
      console.log(chakraui);

      fs.writeFile(
        "./pages/_app.jsx",
        'import { ChakraProvider } from "@chakra-ui/react"\n' +
          'import Layout from "../components/Layout";\n' +
          "\n" +
          'import "../styles/globals.scss";\n' +
          "\n" +
          "const MyApp = ({Component, pageProps}) => {\n" +
          "    return (\n" +
          "        <ChakraProvider>\n" +
          "            <Layout>\n" +
          "                <Component {...pageProps} />\n" +
          "            </Layout>\n" +
          "        </ChakraProvider>\n" +
          "    );\n" +
          "};\n" +
          "\n" +
          "export default MyApp;\n",
        (error) => {
          if (error) throw error;
        }
      );

      break;
    }
    default:
      break;
  }
};

// Constants
const validCssFrameworks = [
  "bootstrap",
  "bulma",
  "tailwind",
  "materialize",
  "chakraui",
];

// Parse the args
const validArgs = parseCliArgs(process.argv);

// Destructure the list
const [framework] = validArgs;

if (validCssFrameworks.indexOf(framework.toLowerCase()) === -1) {
  console.log(
    `Invalid CSS framework! Valid types are: ${validCssFrameworks.join(", ")}`
  );
  process.exit(1);
}

handleCssFrameworks(framework.toLowerCase());
