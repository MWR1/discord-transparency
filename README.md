# discord-transparency

This is a script for changing the background color of Discord to <b>any image</b>, enabling transparency.

![ss](https://i.imgur.com/NzwC6UV.png)

# ⚠ Disclaimer

-   <b> This is against Discord's Terms Of Service, specifically, any client-side modification is forbidden. </b> <br>
    However, Discord will not actively look out for such users, unless you are reported, but this script has measures against that.
-   <b> With future updates to Discord, some elements' names might change, which will probably cause certain elements to appear not transparent anymore. </b> <br>
    I will try to mitigate those errors as soon as possible, but it will happen at some point.
-   <b>This does not yet work with the web application, only with the desktop one. </b> <br>
    I will make sure to add support for the web app in the near future.

## Features

-   You can change the background image by pressing `CTRL + ALT`.
    ⚠ You have to post the image on Discord first then use the link provided by them (press on "Open original", and copy the link) and paste that inside the input.
-   You can deactivate the theme by using `CTRL + D`. This is especially useful when you want to take a screenshot of a message, or of the entire desktop but you're afraid that someone might report you for using this script. It will disable the theme, making Discord look untouched.
-   You can change the brightness of the image by pressing `CTRL + B` and moving the slider button. This will update in real time, and you can save the brightness level by pressing the button.
-   The "n blocked messages" dialog from when you block people has been removed, so your natural curiosity isn't being sparked anymore.

## Prerequisites (if you want to implement the script in such a way that it launches at the same time with Discord)

-   Install [NodeJS](https://nodejs.org)

# INSTALLING

There are THREE ways of implementing this script.

## 1. Copy pasting the script inside the developer console

-   Press `CTRL + SHIFT + I` inside Discord. A tab should open to the side
-   Navigate to the `Console` tab, near the top right corner
-   Copy the script found inside this page, inside the file <b>`manual-copy-pasting.min.js`</b>, under "for manual copy pasting"
-   Go to Discord, then inside the Console tab paste the script you've just copied. And that's it. <br>
    ❗ Meanwhile this is the easier way to set it up, each time Discord launches, you have to follow these same steps again, because the script will be deleted with each relaunch. <b>But it's a little simpler this time</b>, because, while in the Console tab, you can just press the `ARROW UP KEY`, then `ENTER`, and the script will appear, without having to copy and paste it again from this page.

## 2. Launching the script with Discord

❗ This is a little bit harder than the copy and pasting technique, but you won't have to open the developer console again and again, each time discord launches.

-   Press the `WINDOWS KEY`, and then type `%appdata%`
-   Locate the folder called "Discord", and open it
-   Open the first folder inside it, which should be something like `0.0.xxx`, and open it
-   Open the folder called "modules"
-   Locate the folder called "discord_desktop_core" and open it
-   In there, (on Windows), press `SHIFT` and `RIGHT CLICK` at the same time, then press on <b>Open PowerShell window here</b>. On other operating systems, open any terminal, having the path to this folder
-   Now, after the window opened, in there paste this line: `npx asar extract core.asar ./unpacked`. Wait for a bit, then a folder called "unpacked" should appear
-   Open the folder "unpacked", then open the folder "app", and locate <b>"mainScreen.js"</b>
-   Open "mainScreen.js" with Notepad, or any other text editor. We'll go with Notepad
-   Press Ctrl + F, and in there type `did-finish-load`, and check the "Down" checkbox under the "Direction" label, then press "Find Next"
-   Right under the text highlighted, paste the code located in <b>`startup-with-discord.js`</b> in this page.
-   Press Ctrl + S to save the file, then close it, and the folder "unpacked". Afterwards, go back to the terminal opened recently
-   Inside the terminal, paste this line: `npx asar pack unpacked core.asar`, and then wait. When it's done, you can close everything, and restart Discord. That's it

## 3. Using the installer (NEW)

❗ Please note that the installer is in a very early release and it is prone to bugs, works only with the Discord Canary, and only on Windows.

-   Go to the <b>Releases</b> tab
-   Press on "Assets"
-   Download the first file (that has the extension .rar)
-   Extract it, then open the folder
-   Inside the folder should be an `.exe` file. If you want it on your desktop, create a shortcut by `right click` -> `create shortcut`, then move that shortcut on your desktop. <b>Do not move the `.exe` file directly, because it will not work anymore!</b>
-   That's it, enjoy!

## Planned updates in the future

-   Add support for the web application

## Contact

-   For any sort of bugs you can contact me in my [Discord Server](https://discord.gg/Bd2JnFB).
