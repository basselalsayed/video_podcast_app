# Description

<p align="justify">This is a tech test I did for a large company where I was tasked to build a video podcast app that fits in 720p consistently and is entirely navigatable by keyboard. I was given an rss feed, and instructed to build out a web player interface to an exact spec. Was asked to demonstrate TDD ability but not extensively for time purposes. Build time was 3 days. </p>

# Running:

Install dependencies: `yarn`

## Booting the server:

To view the optimised build

Boot with `serve -s build`

You can install serve globally with `yarn global add serve`, npm: `npm i -g serve`

run `yarn build` if there's an error with the build folder

For hot reload during development: `yarn start`

Navigate to http://localhost:3000 in your browser.

# Testing

Tested in chrome at 720p

`yarn test`

# Process:

## Setup

1. Initialised with create-react-app for simplicity as I am comfortable with it.

2. Set up Enzyme to work with react's 'out of the box' jest

## Planning and dependency decision:

1. With setup done I had to ensure data was being received to the client upon RSS request.
   - Using RssParser to map response to js object literal and holding it in App Component's state to distribute to children
   - Later fetched feed in useEffect
2. Installed react-bootstrap - my current go-to for fast react development
3. Looked at implementing keyboard shortcuts from the start as something tells me retrofitting would be painful
   - Found an easy to use [library](https://github.com/Orange-OpenSource/react-keyboard-navigation) using HOC logic
   - Played with until I was happy it could provide what I need
4. Feeds & feed components created.
   - Found dependency for video thumbnails that play onHover, unfortunately they broke the tests and after much wrestling with jest/babel and modifying the dependency I have left them broken as I think it is a cra issue but they work fine in the browser. Online answers suggest a more recent version of Node offers functionality to explicitly declare dependencies as modules but unable to upgrade without ejecting CRA.
5. Context seemed the easiest way to implement the Video feature, found a versatile dependency react-player with keyboard navigation out the box and decent ui
6. Some cleanup and refactoring, turned css modular
7. Implemented the context hook for each Feed Item to change the main video
8. Implemented redux because of the way the feed data is structured, continuing with context the way I started would've worked too but this way there is no prop drilling, things are better separated and the components are lighter.
10. Using Flexbox for display. For the most part fixed apart from a little flex resizing bug when first clicking a video in full 720p (tested on 720p HDTV). Also mobile responsive auto stacking the now playing video directly beneath the header.
11. I decided against using the initial dependency planned for keyboard navigation as the hoc logic was complex and would only offer vertical arrow navigation. After much struggle trying to implement auto arrow navigation based on html attributes/tabIndex/bootstrap styling I bit the bullet and implemented a system using redux that is robust. If the focused element is ever lost a few random key presses will return it to view somewhere visible.

### Additional Features

With additional time I would have implemented:

- more testing
- additional info pulled from API into video thumbnail (such as calculated x mins/hours/days ago)
- conditional rendering of a 'please select video screen' to fill whitespace.
- dark mode implementation
- add another rss feed (assuming same api structure)
- improved styling
