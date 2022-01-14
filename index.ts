import { greeter } from "./Greeter";
console.log(greeter.greet("Jack"));

import { javaScriptGreeter } from "./JavaScriptGreeter";
console.log(javaScriptGreeter.greet(""));

import { loudGreeter } from "./LoudGreeter";
//loudGreeter.addVolume();
//loudGreeter.addVolume();
console.log(loudGreeter.greet(""));

import { htmlGreeter } from "./HtmlGreeter";
console.log(htmlGreeter.greet());
