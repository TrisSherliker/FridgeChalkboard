# What?

Serve a basic chalkboard-style noticeboard for your family.


This very simple project spins up a small web server to serve content on your local network, which:
- serves on your port 3000 by default (configurable)
- displays content for any number of people at /index.html, refreshing periodically (once every 5 minutes, by default), and
- allows anyone to set the displayed content, at /admin.html

![index page screenshot](/assets/index-screenshot.png)

![admin page screenshot](/assets/admin-screenshot.png)

# Why?

Our fridge has a built-in Android tablet. Why? Because the one that was on special offer came with that feature. Now, there is a large, low-spec computer in our kitchen. (Ugh.)

Until now, I've kept it switched off.

Inspired by the simplicity making an auto-refreshing noticeboard as posted by HN User `inanutshellus` https://news.ycombinator.com/item?id=42139034 , I made this in a jiffy and demonstrated to my kids a little bit about basic code, and to show them how easy it is to building something useful.

# How?

1. Place all files into a single directory.
2. Configure:
  a. **Set names:** In `index.html`, replace "Person1Name" and "Person2Name" with the names of your people.
  b. **Set port**: In `server.js`, replace the default port `3000` with your preferred port.
  c. **Install packages:** Install the `express` js package and any others you need. If using npm package manager, use: 'npm install express`.
3. Start the server: `node server.js`. It will print the IP address and port at which it is serving.
4. Navigate to that displayed IP address in a browser on a computer at your home network. The template content will be displayed.
5. Visit `.../admin.html` to edit the displayed content, pressing `Update` when finished.

Dates are displayed UK-style, and update automatically.
