# discord-transparency

This is a script that allows you to add a background image to Discord.

![ss](https://i.imgur.com/ITLqVm6.png)

# ⚠ Disclaimer

- <b> This is against Discord's Terms Of Service. Specifically, any client-side modification is forbidden. </b>
  However, Discord will not actively look out for such users, unless they are reported. But this script has measures against that;
- <b> With future updates to Discord, some elements might not appear properly anymore.</b>
  I will try to mitigate these errors as soon as possible, but they will happen at some point.

# How to install it

- [Download the installer (look below "Assets")](https://github.com/MWR1/DTInstaller/releases);
- Enjoy!<br>
  ❗ If you're on Windows, make sure not to move the .exe file outside the folder it's in, otherwise it won't work anymore (this behavior is going to be fixed in the future).<br>
  ❗ If you're on Linux, you have to run the installer through a terminal (also going to be fixed in the future).

# Features

<b>All features of this script can be found by pressing the `CTRL + SHIFT + X` combination. That will bring up a panel with each action you can perform.</b><br>

If you want to be kept up to date with this project and its features, report some bugs you come across, contact me and whatnot, you can join my [Discord Server](https://discord.gg/Bd2JnFB).

#### Here are some cool things that have been added:

- You can change the background image by either right clicking on an image, or using the appropriate action in the actions panel; <sup>(I mean this is the whole point of the script)</sup>

  ⚠ If you choose to add a background image via a link: you have to post the image on Discord first then use the link provided by them. Press on "Open original", and copy the link. Paste that in the text box from the corresponding action, then press Enter.

- You can change the brightness of the image, according to your liking. By pressing on the "Save brightness level" button, next time you open Discord, the brightness level will stay the same. Just, make it so the brightness is good enough that you can see the text;
- You can change how blurry the image is, so you can get that awesome frosty glass effect. As much as I personally dislike white theme, this looks cool with it. Beware, this _might_ have some performance impacts;
- You can deactivate the theme by pressing `CTRL + D`. This is especially useful when you want to take a screenshot of a message, or of the entire desktop but you're afraid that someone might report you for using this script. It will disable the theme, making Discord look untouched;
- Blocked messages don't appear anymore. Your natural curiosity is now safe from any temptations.

## Prerequisites

- If you want to implement the script in such a way that it launches at the same time with Discord, you have to install [NodeJS](https://nodejs.org).

# Other ways of installing the script

## 1. Copy pasting the script inside the developer console

- Enable Discord's developer tools:

  - Go where Discord is installed. On Windows, you would go to `%appdata%`;
  - look for the folder that matches the name of your Discord client, like (`discord`, `discordcanary`, etc.);
  - Search for a file called `settings.json`;
  - Copy and paste this line right below the opening bracket "{": `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true,`

- Press `CTRL + SHIFT + I` inside Discord. A tab should open to the side;
- Navigate to the `Console` tab, near the top right corner;
- Copy the script from above, from the files section, in this page, in the folder `main`, from inside the file <b>`manual-copy-pasting.js`</b>;
- Go to Discord, then inside the Console tab paste the script you've just copied; <br>
  ❗ While this is the easier way to set it up, each time Discord launches, you will have to follow most of the same steps again, because the script will be deleted with each relaunch of the Discord client. <b>But you can do this:</b>
  - While in the Console tab, you can just press the `ARROW UP KEY`, then `ENTER`, and the script will appear, without having to copy and paste it again from this page, until a new update comes out.

## 2. Launching the script with Discord

❗ This is a little bit harder than the copy and pasting technique, but you won't have to open the developer console again and again, each time Discord launches. This entire procedure is automated with
[the installer. To download it, look below "Assets"](https://github.com/MWR1/DTInstaller/releases).

### Windows

- Search for `%localappdata%` in a folder search box;
- Look for a folder that has "discord" in its name and open it (the name may differ, based on the build you've downloaded);
- You may have more folders that have this name structure: `app-x.y.z`. Open the one that is **the most recent** by "Date modified";
- Open the folder called `modules`;
- Locate the folder that has a name like `discord_desktop_core-xyz` and open it, then open the folder inside of it, whose name should just be `discord_desktop_core`;
- In there, press `SHIFT` and `RIGHT CLICK` at the same time, then press on <b>Open PowerShell window here</b>.
- Now, after the window opened, in there paste this line: `npx asar extract core.asar ./unpacked`. After a bit, a folder called `unpacked` should appear;
- Open the folder `unpacked`, then open the folder `app`, and locate <b>`mainScreen.js`</b>;
- Open `mainScreen.js` with Notepad, or any other text editor. We'll go with Notepad;
- Paste the code at the end of the file. Said code is located in the `main` folder inside the <b>`startup-with-discord.js`</b> file from above, in the files section;
- Press Ctrl + S to save the file, then close it. Also close the folder `unpacked`. Afterwards, go back to the terminal (in our case PowerShell) opened recently;
- Inside the terminal, paste this line: `npx asar pack unpacked core.asar`, and then wait. When it's done, you can see a new line appearing in the terminal. You can then close everything, and restart Discord.

### Linux

- Go to `~./config`;
- Look for a folder that has "discord" in its name and open it (the name may differ, based on the build you've downloaded);
- Inside of it, look for another folder that has a string of numbers as its name, like `0.0.20`. This is the Discord version. Open it and the folder called `modules` inside of it;
- Look for yet another folder called `discord_desktop_core` and open it;
- Finally, open a terminal at this location and in it paste `npx asar extract core.asar ./unpacked`. After a bit, a folder called `unpacked` should appear;
- Open the folder `unpacked`, then open the folder `app`, locate <b>`mainScreen.js`</b> and open it with any text editor;
- Paste the code at the end of the file. Said code is located in the `main` folder inside the <b>`startup-with-discord.js`</b> file from above, in the files section;
- Save the `mainScreen.js` file and close it;
- Inside the terminal, paste this line: `npx asar pack unpacked core.asar`, and then wait. When it's done, you can close everything, and restart Discord.
