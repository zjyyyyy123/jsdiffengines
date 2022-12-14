/*
 * Copyright (c) 2016-2022  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 * 
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

import Timer from "timer";
import parseBMF from "commodetto/parseBMF";
import Poco from "commodetto/Poco";
import Resource from "Resource";
import config from "mc/config";

let render = new Poco(screen, {rotation:config?.rotation});

let white = render.makeColor(255, 255, 255);
let blue = render.makeColor(0, 0, 255);

let font = parseBMF(new Resource("OpenSans-Semibold-18.bf4"));
let text = "Press button A to change brightness...   ";
let textWidth = render.getTextWidth(text, font);
let x = render.width;
let y = (render.height - font.height) >> 1;

let loop = true;	// set false to scroll text once across the screen
let brightness = 50;  // screen brightness %
button.a.onChanged = function() {
	if (button.a.read()) {
		return;
	}
	brightness+=10;
	if (brightness > 100) {
		brightness = 0;
	}
	global.power.brightness = brightness;
}

render.begin();
	render.fillRectangle(blue, 0, 0, render.width, render.height);
render.end();

Timer.repeat(id => {
	render.begin(0, y, render.width, font.height);
		render.fillRectangle(blue, 0, 0, render.width, render.height);
		render.drawText(text, font, white, x, y);
		if (!loop) {
			if (x + textWidth == 0)
				Timer.clear(id);
		}
		else {
			if (x + textWidth < render.width)
				render.drawText(text, font, white, x + textWidth, y);
		}
		if (x + textWidth == 0)
			x = 0;
		else
			--x;
	render.end();
}, 17);
