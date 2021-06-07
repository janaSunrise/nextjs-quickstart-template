# NextJS Quickstart Template

A simple and easy boilerplate for your next NextJS project, to get you started in NO time.

## Getting Started ⤵️

Install the dependencies real quick:

```bash
npm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 🛠️ Project info

This section is aimed to make you familiar with the structure, and how to quickly get up and started.

### Linting and styling

This project has ESLint, Prettier, SCSS linting setup for code, This code has been linted now, and you're free to use it
or remove it as per your need.

### Structure

This project has the following structure and folders to organize and quickly add files and start

- `pages/` folder contains the rendering files with support for auto routing, That is if you have `pages/test.jsx`,
  It'll point towards `/test`.
- `styles/` folder contains all the SCSS (aka SASS) stylesheets for styling pages. Make files with the naming convention
  of `<filename>.module.scss` with First letter of filename capital. You can also do `<filename>.component.scss` for
  the components you're using.
- `public/` folder contains the images and static assets, other than styling files. If you want to use an image, Here's
  How you can do it: `<Image src="/test.png" alt="test" />` with `test.png` being an existing image in the `public/`
  folder.
- `components/` folder contains the various components which can be reused over several places / pages, and keeps the
  code DRY. It already has a `Layout.jsx` file, containing the navbar and footer linked by default.
  It has the following contents:

  ```js
  <Navbar />;
  {
    children;
  }
  <Footer />;
  ```

  Meta tags and components is also located in the components. You can adjust to add / remove things as
  you need it, and if you want to then customize the props and the things, visit `pages/_document.jsx`
  and edit them.

  This is applied to all the pages, and has a Navbar and Footer as designed in the components' folder. Change them to
  have them applied, or leave them to keep them empty. More info about it below.

- `utils/` folder contains the utility methods for the project.

### Project layout info

#### Components

In `components/` folder, we'll have a layout Components which will return following things:

```js
<Navbar />;
{
  children;
}
<Footer />;
```

To have navbar, footer for each page, we'll add them, Remember `Navbar.jsx` and `Footer.jsx` are
components too in components folder, which we import in `Layout.jsx` and use, Then in `pages/_app.js`
which contains the basic structure of an App.

By default, it's like this

```js
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
```

And after having the layout attribute, It'll be like this

```js
return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
```

And `Layout.jsx` is like this:

```js
return (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);
```

Children being the page's content, whichever thing is between nav and footer and Navbar and
footer to keep things DRY.

Edit the `Navbar.jsx` and `Footer.jsx` to update the Navbar and Footer, As the layout is defined,
they're Auto added to all the pages.

There is also configuration added for document in `pages/_document.js`, which also has configuration for the HTML pages
to be rendered. You can add things or remove things from the tags in `<Head />` or `<Body />` section as per your needs
allowing you to freely change how the template is going to be rendered or customized.

#### Scaffolding

This is a way to integrate things quickly into the project with the help of a simple script. I have provided a script
called `scaffold.js` to do the scaffolding, and it supports only CSS frameworks as of now. It's pretty easy to get
started by integrating CSS frameworks in the projects. Here's the command to do that: `node scaffold.js <CSS-FRAMEWORK>`
And It will auto integrate the things as needed in the project.

## ✌️ Integrating CSS Frameworks in this project

### Bootstrap

- First, install the bootstrap library
  ```sh
  npm install bootstrap@next
  # or
  yarn add bootstrap@next
  ```
- Then, finally add the Bootstrap components in the `globals.css` file, Add the following line to the top of the file:
  `@import "~bootstrap/scss/bootstrap";`

### Tailwind

- Get started by installing the dependencies first:
  ```sh
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```
- Next, generate your tailwind.config.js and postcss.config.js files:
  ```sh
  npx tailwindcss init -p
  ```
- Replace the following line, to purge redundant CSS when building the app:
  `purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']`
- Finally Add Tailwind directives in `globals.css`
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### Bulma

- First, install the Bulma library

  ```sh
  npm install bulma
  # or
  yarn add bulma
  ```

- Then, finally add the Bulma components in the `globals.css` file, Add the following line to the top of the file:
  `@import '~bulma/bulma';`
  OR, use this if you want to import everything:
  ```
  @import '~bulma/bulma';
  @import '~bulma/sass/grid/columns.sass';
  @import '~bulma/sass/layout/section.sass';
  @import '~bulma/sass/layout/footer.sass';
  ```

## 🐳 Docker

Docker is an easy way of containerizing and delivering your applications quickly and easily, in a
convenient way. It's really simple to get started with this, with docker handling all the installation
and other tasks. Then, run `docker-compose up` after getting the project and config ready.

**Docker mini guide:**

- Running the App: `docker-compose up --build`
- Stopping the App: `docker-compose down`
- Rebuilding the App: `docker-compose build`

## 🤝 Contributing

Contributions, issues and feature requests are welcome. After cloning & setting up project locally, you can just submit
a PR to this repo, and it will be deployed once it's accepted.

⚠️ It’s good to have descriptive commit messages, or PR titles so that other contributors can understand about your
commit, or the PR Created. Read [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) before
making the commit message.

## Show your support

We love people's support in growing and improving. Be sure to leave a ⭐️ if you like the project and also be sure to
contribute, if you're interested!

## ▶ Links

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

- [Apache 2.0](https://github.com/janaSunrise/nextjs-quickstart-template/blob/main/LICENSE)

<p align="center">Made by janaSunrise with ❤</p>
