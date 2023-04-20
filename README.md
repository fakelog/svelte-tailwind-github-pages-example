# Creating a Svelte app with Tailwind CSS and deploying to GitHub Pages

## **Creating the project**

### To create a new Svelte app with Tailwind CSS and GitHub Pages deployment, follow these steps:

1. Create a new project directory and navigate to it:
```bash
npm create svelte@latest svelte-tailwind-github-pages-example
cd svelte-tailwind-github-pages-example
npm i
```

2. Install the Svelte static adapter:
```bash
npm i -D @sveltejs/adapter-static@latest
```

3. Configure the adapter in svelte.config.js:
```js | ddd
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
```

4. Enable prerendering in the layout component by adding `prerender: true` to `src/routes/+layout.js`.
```js
export const prerender = true;
```

> More information on the [website](https://kit.svelte.dev/docs/adapter-static)

## **Installing and configuring Tailwind CSS**

### To install and configure Tailwind CSS in your Svelte app, follow the steps on the website

> To install and configure Tailwind CSS in your Svelte app, follow the steps on the [website](https://tailwindcss.com/docs/guides/sveltekit)

## **Configuring for deployment on GitHub Pages**

1. Install the `gh-pages` package:
```bash
npm install gh-pages --save-dev
```

2. Add the following scripts to your `package.json` file:
```json
	...
	"scripts": {
		...
		"preview": "vite preview",
		"deploy": "npm run build && node ./gh-pages.js"
	},
	...
```

3. Create a new `gh-pages.js` file and add the following code:
```js
import ghpages from 'gh-pages';

ghpages.publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/fakelog/svelte-tailwind-github-pages-example.git',  // Replace with your GitHub repository URL
    user: {
        name: 'fakelog', // Replace with your GitHub username
        email: 'solodyankin.d@outlook.com' // Replace with your email address
    },
    dotfiles: true
}, () => {
    console.log('deployment done');
}
);
```

> More information on the [website](https://github.com/tschaub/gh-pages-static)

## Developing

### Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building and deploying 

### Create a production version of your app:

```bash
npm run build
```

### Build and deploying:

```bash
npm run deploy
```

> More information on the [website](https://github.com/sveltejs/svelte/blob/master/README.md)