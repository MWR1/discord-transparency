# discord-transparency

This is a script for changing the background color of Discord to <b>any image</b>, enabling transparency.

# ⚠ Disclaimer

- <b> This is against Discord's Terms Of Service, specifically, any client-side modification is forbidden. </b> <br>
  However, Discord will not actively look out for such users, unless you are reported, but this script has measures against that.
- <b> I'm not held responsible if during the manual installation something happens to your client, making it stop working. </b> <br>
  You can reinstall the client and try the manual installation again.
- <b> With future updates to Discord, some elements' names might change, which will probably cause certain elements to appear not transparent anymore. I will try to mitigate those errors as soon as possible. </b> <br>
  If you know how to code JavaScript and CSS, then you may fix them yourself, if you're not willing to wait for updates to this script.
- <b>This does not yet work with the web application, only with the desktop one. </b>
  I will make sure to add support for the web app in the near future.
- <b>The launching with Discord installation below may be different on other operating systems.</b>
  Here I'm using Windows 10 to install it.

## Features

- You can change the background image by pressing `CTRL + ALT`. ❗ You have to post the image on Discord first then use the link provided by them (press on "Open original", and copy the link) and paste that inside the input. ❗
- You can deactivate the theme by using `CTRL + D`. This is especially useful when you want to take a screenshot of a message, or of the entire desktop but you're afraid that someone might report you for using this script. It will disable the theme, making Discord look untouched.
- You can change the brightness of the image by pressing `CTRL + B` and moving the slider button. This will update in real time, and you can save the brightness level by pressing the button.

## Prerequisites (if you want to implement the script in such a way that it launches at the same time with Discord)

- Install [NodeJS](https://nodejs.org)

# INSTALLING

There are two ways of implementing this script.

## 1. Copy pasting the script inside the developer console

- Press `CTRL + SHIFT + I` inside Discord. A tab should open to the side
- Navigate to the `Console` tab, near the top right corner
- Copy the script found inside this page, inside the file <b>`script.min.js`</b>, under "for manual copy pasting"
- Go to Discord, then inside the Console tab paste the script you've just copied. And that's it. <br>
  ❗ Meanwhile this is the easier way to set it up, each time Discord launches, you have to follow these same steps again, because the script will be deleted with each relaunch. <b>But it's a little simpler this time</b>, because, while in the Console tab, you can just press the `ARROW UP KEY`, then `ENTER`, and the script will appear, without having to copy and paste it again from this page.

## 2. Launching the script with Discord

❗ This is a little bit harder than the copy and pasting technique, but you won't have to open the developer console again and again, each time discord launches.

- Press the `WINDOWS KEY`, and then type `%appdata%`
- Locate the folder called "Discord", and open it
- Open the first folder inside it, which should be something like `0.0.xxx`, and open it
- Open the folder called "modules"
- Locate the folder called "discord_desktop_core" and open it
- In there, (on Windows), press `SHIFT` and `RIGHT CLICK` at the same time, then press on <b>Open PowerShell window here</b>. On other operating systems, open any terminal, having the path to this folder
- Now, after the window opened, in there paste this line: `npx asar extract core.asar ./unpacked`. Wait for a bit, then a folder called "unpacked" should appear
- Open the folder "unpacked", then open the folder "app", and locate <b>"mainScreen.js"</b>
- Open "mainScreen.js" with Notepad, or any other text editor. We'll go with Notepad
- Press Ctrl + F, and in there type `did-finish-load`, and check the "Down" checkbox under the "Direction" label, then press "Find Next"
- Right under the text highlighted, press an enter, then in there type `mainWindow.webContents.executeJavaScript()`. Inside the `()` put the script located in <b>`script.min.js`</b> in this page, under "for starting up with discord"
- Press Ctrl + S, then close the file, and the folder "unpacked". Then, go back to the terminal opened recently
- Inside the terminal, paste this line: `npx asar pack unpacked core.asar`, and then wait. When it's done, you can close everything, and restart Discord. That's it

## Planned updates in the future

- Add support for the web application
- Create some sort of program that will automatically implement the script for you, easing up the installation process

## Contact

- For any sort of bugs you can contact me in my [Discord Server](https://discord.gg/Bd2JnFB).
