/**
 * @name CollapsibleSidebar
 * @author Xyvyrianeth
 * @version 1.0.0
 * @description Collapses the channel list when chatting and expands it when it or the server list is hovered over. Useful for people who have their secondary monitors in portrait.
 */

module.exports = class CollapsibleSidebar {
	start() {
		const classes = { // All subject to change
			base: "base-2jDfDU",
			content: "content-1SgpWY",
			guildList: "guilds-2JjMmN",
			channelList: "sidebar-1tnWFu",
			channelContent: "container-1NXEtd",
			userPanel: "panels-3wFtMD",
			// threadContainer: "container-1r6BKw",
			chatWindow: "chat-2ZfjoI",
			chatContent1: "content-1jQy2l",
			chatContent2: "chatContent-3KubbW"
		}
		const guildList = document.getElementsByClassName(classes.guildList)[0];
		const channelList = document.getElementsByClassName(classes.channelList)[0];
		const widths = [window.innerWidth - (guildList.clientWidth + 50), channelList.clientWidth];
		console.log(widths);
		// if (document.getElementsByClassName(classes.threadContainer).length == 2)
		// {
		// 	widths.push(document.getElementsByClassName(classes.threadContainer)[1].width());
		// }

		var css =
			":root {\n" +
			"	--chat-width: " + widths[0] + "px;\n" +
			"	--channel-width: " + widths[1] + "px;\n" +
			"   --thread-width: " + widths[2] + "px;\n" +
			"}\n" +
			"\n" +
			"@keyframes expand {\n" +
			"	from { width: 50px; }\n" +
			"	to { width: var(--channel-width); }\n" +
			"}\n" +
			"@keyframes collapse {\n" +
			"	to { width: 50px; }\n" +
			"	from { width: var(--channel-width); }\n" +
			"}\n" +
			"\n" +
			`.${classes.channelContent}, .${classes.userPanel} {\n` +
			"	width: var(--channel-width);" +
			"}\n" +
			`.${classes.channelList} {\n` +
			"	animation-name: collapse;\n" +
			"	animation-duration: 0.2s;\n" +
			"	width: 50px;\n" +
			"}\n" +
			`.${classes.channelList}:hover {\n` +
			"	animation-name: expand;\n" +
			"	animation-duration: 0.2s;\n" +
			"	width: var(--channel-width);\n" +
			"}\n" +
			`.${classes.guildList}:hover + .${classes.base}>.${classes.content}>.${classes.channelList} {\n` +
			"	animation-name: expand;\n" +
			"	animation-duration: 0.25s;\n" +
			"	width: var(--channel-width);\n" +
			"}\n" +
			"\n" +
			`.${classes.chatContent1}, ${classes.chatContent2} {\n` +
			"	width: var(--chat-width);\n" +
			"}\n"
			// + // I've completely forgot what this bit was supposed to do. These class names are terrible.
			// ".wrapper-2jXpOf, .panels-j1Uci, .channelNotice-3I83Cr {\n" +
			// "	width: var(--channel-width);\n" +
			// "}" + (widths.length == 3 ?	"\n" +
			// 							".threadSidebar-1o3BTy > .chat-15Vmww > .chatContent-a9vAAp {\n" +
			// 							"	width: var(--thread-width) !important;\n" +
			// 							"}" : "");

		const collapse = document.createElement("style");
		collapse.id = "collapse";
		collapse.innerHTML = css;
		document.head.append(collapse);

		window.onresize = () => { this.stop(); this.start(); }
	}

	stop() {
		document.getElementById("collapse").remove();
	}
}