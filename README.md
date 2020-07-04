# Running:

Install dependencies:

`yarn`

Booting the server:

For hot reload during development (or quick start):
Boot the server with `yarn start`
Navigate to http://localhost:3000 in your browser.

The rendered page will update as you make changes
You will also see any lint errors in the console.

To view the optimised build
run `yarn build`, then
Boot with `serve -s build`

You can install serve globally with yarn global add serve or `npm i -g serve`

# Testing

`yarn test`

I've kept the tests minimal in number as agreed for speed purposes but I think they demonstrate my aptitude with TDD accurately. Further testing I would implement with the time would be to write additional unit tests for components, tests for the redux actions and some sort of end to end feature test such as cypress

# Process:

## Setup

1. Initialized with create-react-app for simplicity as I am comfortable with it (while apache Server is a new term for me I suspect I've been using it exclusively in my dev journey thus far as it appears to be the dominant server. As CRA uses Webpack to compile down to an easy to serve static build I think it fulfils the apache criteria)
   - GatsbyJs looks to be an interesting bootstrapping alternative utilising graphQl that I'm curious to try if there were no time contraint, however, it seems overkill here as there's only one request
2. Set up Enzyme to work with react's 'out of the box' jest

## Planning and dependency decision:

1. With setup done I had to ensure data was being received to the client upon RSS request.
   1. Achieved using an easy to use proxy (with more time I could have forked my own copy to host or looked at alternatives such as nginx): https://cors-anywhere.herokuapp.com/
   2. Extracted API call to seperate file
   3. Using RssParser to map response to js object literal and holding it in App Component's state to distribute to children
   4. later fetched feed in useEffect
2. Installed react-bootstrap - my current go-to for fast react development
3. Looked at implementing keyboard shortcuts from the start as something tells me retrofitting would be painful
   1. Found an easy to use library using HOC logic: https://github.com/Orange-OpenSource/react-keyboard-navigation
   2. Played with until I was happy it could provide what I need
4. Feeds & feed components created.
   1. Found dependency for video thumbnails that play onHover, unfortunately they broke the tests and after much wrestling with jest/babel and modifying the dependency I have left them broken as I think it is a cra issue but they work fine in the browser. Online answers suggest a more recent version of Node offers functionality to explicitly declare dependencies as modules but unable to upgrade without ejecting cra.
5. Context seemed the easiest way to implement the Video feature, found a versatile dependency react-player with keyboard navigation out the box and decent ui
6. Some cleanup and refactorng, turned css modular
7. Implemented the context hook for each Feed Item to change the main video
8. Implemented redux because of the way the feed data is structured, continuing with context the way I started would've worked too but this way there is no prop drilling, things are better seperated and the components are lighter.
9. Attempting to rename all js subdirectories to lowercase for convention didn't work the way I usually do for unknown reason (rename to placeholder name then back to lowercase). Resulted in a couple of hours of debugging lost file history, learned painful lesson about trying to save time with `git config core.ignorecase`
10. Flexbox has been on my list of things to learn for a while, had to get used to the nesting structure but display is now for the most part fixed apart from a little flex resizing bug when first clicking a video in full 720p (tested on 720p HDTV). Also mobile responsive auto stacking the now playing video underneath the header.
11. I decided against using the inital dependency planned for keyboard navigation as the hoc logic was complex and would only offer vertical arrow navigation. After much struggle trying to implement auto arrow navigation based on html attributes/tabIndex/bootstrap styling I bit the bullet and implemented a system using redux that is robust. If the focused element is ever lost a few 'random' key presses will return it to view somewhere visible.

### Additional Features

With additional time I would have implemented:

- more testing
- additional info pulled from API into video thumbnail (such as calculated x mins/hours/days ago)
- conditional rendering of a 'please select video screen' to fill whitespace.
- dark mode implementation
- add another rss feed (assuming same api structure)
- improved styling
