//// [tests/cases/conformance/externalModules/topLevelModuleDeclarationAndFile.ts] ////

//// [foo_0.ts]
export var x: number = 42;

//// [foo_1.ts]
declare module "vs/foo_0" {
	export var y: () => number;
}


//// [foo_2.ts]
/// <reference path="foo_1.ts"/>
import foo = require("vs/foo_0");
var z1 = foo.x + 10;   // Should error, as declaration should win
var z2 = foo.y() + 10; // Should resolve


//// [foo_1.js]
//// [foo_0.js]
exports.x = 42;
//// [foo_2.js]
var foo = require("vs/foo_0");
var z1 = foo.x + 10;
var z2 = foo.y() + 10;
