Process:

Setup

1. Initialized with create-react-app for simplicity as I am comfortable with it (while apache Server is a new term for me I suspect I've been using it exclusively in my dev journey thus far as it appears to be the dominant server. As cra uses webpack to compile down to an easy to serve static build I think it fulfils the apache criteria)
   - GatsbyJs looks to be an interesting bootstrapping alternative utilising graphQl that I am curious to try if there were no time contraint, however, it seems overkill here as there's only one request
2. Set up Enzyme to work with react's 'out of the box' jest

Planning and dependency decision:

1. With setup out of the way I had to ensure data was being received to the client upon RSS request.
   1. Achieved using an easy to use proxy for now (with more time I could have forked my own copy to host or looked at alternatives such as nginx): https://cors-anywhere.herokuapp.com/
   2. Extracted API call to seperate file for future mocking
2. Installed react-bootstrap - it is my current go-to for fast react development
3. Looked at implementing keyboard shortcuts from the start as something tells me retrofitting would be painful
   1. Found an easy to use library using HOC logic (which I like): https://github.com/Orange-OpenSource/react-keyboard-navigation
   2. Played with until I was happy it could provide what I need
