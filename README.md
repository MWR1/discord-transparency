# discord-transparency

This is a script that allows you to add a background image to Discord.
![ss](https://i.imgur.com/wGuRuHD.png)

# ⚠ Disclaimer

- <b> This is against Discord's Terms Of Service, specifically, any client-side modification is forbidden. </b>
  However, Discord will not actively look out for such users, unless they are reported. But this script has measures against that.
- <b> With future updates to Discord, some elements might not appear properly anymore.</b>
  I will try to mitigate these errors as soon as possible, but it will happen at some point.

## Features

<b style="background-color:rgba(0, 0, 0, 0.1)">All features of this script can be found by pressing the `CTRL + SHIFT + X` combination. That will bring up a panel with each action you can perform.</b><br>

#### Here are some cool things that have been added:

- You can change the background image. <sup>(I mean this is the whole point of the script)</sup>

  ⚠ You have to post the image on Discord first then use the link provided by them. Press on "Open original", and copy the link. Paste that in the text box from the corresponding action, then press Enter.

- You can change the brightness of the image, according to your liking. By pressing on the "Save brightness level" button, next time you open Discord, the brightness level will stay the same. Just, make it so the brightness is good enough that you can see the text.
- You can deactivate the theme by pressing `CTRL + D`.
  This is especially useful when you want to take a screenshot of a message, or of the entire desktop but you're afraid that someone might report you for using this script. It will disable the theme, making Discord look untouched.
- The "n blocked messages" dialog from when you block people has been removed, so your natural curiosity isn't being sparked anymore.

## Prerequisites

(if you want to implement the script in such a way that it launches at the same time with Discord)

- Install [NodeJS](https://nodejs.org)

# INSTALLATION

There are THREE ways of implementing this script.

## 1. Using the installer

- [Download the installer (look below "Assets")](https://github.com/MWR1/DTInstaller/releases)
- Enjoy!<br>
  ❗ If you're on Windows, make sure not to move the .exe file outside the folder it's in, otherwise it won't work anymore (this behavior is going to be fixed in the future).<br>
  ❗ If you're on Linux, you have to run the installer through a terminal (also going to be fixed in the future).

## 2. Copy pasting the script inside the developer console

- Enable Discord's developer tools (there are tutorials on how to do that)
- Press `CTRL + SHIFT + I` inside Discord. A tab should open to the side
- Navigate to the `Console` tab, near the top right corner
- Copy the script from above, from the files section, in this page, in the folder `main`, from inside the file <b>`manual-copy-pasting.js`</b>
- Go to Discord, then inside the Console tab paste the script you've just copied. <br>
  ❗ While this is the easier way to set it up, each time Discord launches, you will have to follow most of the same steps again, because the script will be deleted with each relaunch of the Discord client. <b>But you can do this:</b>
  - While in the Console tab, you can just press the `ARROW UP KEY`, then `ENTER`, and the script will appear, without having to copy and paste it again from this page.

## 3. Launching the script with Discord

❗ This is a little bit harder than the copy and pasting technique, but you won't have to open the developer console again and again, each time discord launches.

- Press the `WINDOWS KEY`, and then type `%appdata%` (on Windows).
- Go back, then go to the folder "Local"
- Locate the folder called "Discord", and open it
- You may have more folders that have this name structure: "app-x.y.z". Open the one that is **the most recent** by "Date modified"
- Open the folder called "modules"
- Locate the folder called "discord_desktop_core-xyz" and open it, then open the folder inside of it, whose name should just be "discord_desktop_core"
- In there, (on Windows), press `SHIFT` and `RIGHT CLICK` at the same time, then press on <b>Open PowerShell window here</b>. On other operating systems, open any terminal, having the path to this folder
- Now, after the window opened, in there paste this line: `npx asar extract core.asar ./unpacked`. After a bit, a folder called "unpacked" should appear
- Open the folder "unpacked", then open the folder "app", and locate <b>`mainScreen.js`</b>
- Open `mainScreen.js` with Notepad, or any other text editor. We'll go with Notepad
- Search for the text `did-finish-load`. In Notepad, press Ctrl + F, and in there type `did-finish-load`. Tick the "Down" checkbox under the "Direction" label, then press "Find Next"
- Paste the code where the red arrow points at. The code is located in the `main` folder inside the <b>`startup-with-discord.js`</b> file from above, in the files section ![ss](https://i.imgur.com/8yC4z62.png)
- Press Ctrl + S to save the file, then close it. Also close the folder "unpacked". Afterwards, go back to the terminal (in our case PowerShell) opened recently
- Inside the terminal, paste this line: `npx asar pack unpacked core.asar`, and then wait. When it's done (you can see a new line appearing in the terminal) you can close everything, and restart Discord

## Planned updates in the future

- Create a workflow that's easier to maintain

## Contact

- For any sort of bugs you can contact me in my [Discord Server](https://discord.gg/Bd2JnFB).
