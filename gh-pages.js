import ghpages from 'gh-pages';

ghpages.publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/fakelog/svelte-tailwind-github-pages-example.git',
    user: {
        name: 'fakelog',
        email: 'solodyankin.d@outlook.com'
    },
    dotfiles: true
}, () => {
    console.log('deployment done');
}
);