Process:

Setup

1. Initialized with create-react-app for simplicity as I am comfortable with it (while apache Server is a new term for me I suspect I've been using it exclusively in my dev journey thus far as it appears to be the dominant server. As cra uses webpack to compile down to an easy to serve static build I think it fulfils the apache criteria)
   - GatsbyJs looks to be an interesting bootstrapping alternative utilising graphQl that I am curious to try if there were no time contraint, however, it seems overkill here as there's only one request
2. Set up Enzyme to work with react's 'out of the box' jest

Planning and dependency decision:

1. With setup out of the way I had to ensure data was being received to the client upon RSS request.
   1. Achieved using an easy to use proxy for now (with more time I could have forked my own copy to host or looked at alternatives such as nginx): https://cors-anywhere.herokuapp.com/
   2. Extracted API call to seperate file for future mocking
   3. Using RssParser to hold response at top level app state and distribute to children
   4. later implemented this method in useEffect
2. Installed react-bootstrap - it is my current go-to for fast react development
3. Looked at implementing keyboard shortcuts from the start as something tells me retrofitting would be painful
   1. Found an easy to use library using HOC logic (which I like): https://github.com/Orange-OpenSource/react-keyboard-navigation
   2. Played with until I was happy it could provide what I need
4. Feeds & feed components created.
   1. Found dependency for video thumbnails that play onHover, unfortunately they broke the tests and after much wrestling with jest/babel and modifying the dependency I have left them broken as I think it is a cra issue but they work fine in the browser. Online answers suggest a more recent version of Node offers functionality to explicitly declare dependencies as modules but unable to upgrade without ejecting cra.
5. Context seemed the easiest way to implement the Video feature, found a versatile dependency react-player with keyboard navigation out the box and decent ui
6. Some cleanup and refactorng, turned css modular
7. Implemented the context hook for each Feed Item to change the main video
8. Implemented redux because of the way the feed data is structured, continuing with context the way I started would've worked too but this way there is no prop drilling, things are better seperated and the components are lighter.
9.
