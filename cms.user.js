// ==UserScript==
// @name         BypassCMS
// @namespace    alteri.me
// @version      2.1.2
// @description  :)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @author       alteri
// @match        */mod/quiz/*
// @match        */course/view.php?*
// @icon         
// @updateURL    https://github.com/alteri/cmstool/raw/main/cms.user.js
// @downloadURL  https://github.com/alteri/cmstool/raw/main/cms.user.js
// @license      MIT
// ==/UserScript==

appendMenu();
appendFunc();

function appendMenu() {
    var divBlock = `<div style="z-index: 99999;position: fixed;right: 8px;bottom: 8px;width: 230px;height: 35px;background-color: #d9dde8;border-radius: 6px;" id="menu"><p style=" font-size: 13px; color: #000000; padding: 8px 10px; text-align: center; " id="log">Tool by <a href="#" style="text-decoration: none">alteri</a></p></div>`;
    $("body").append(divBlock);
}

function appendFunc() {
    var func = document.createElement("script");
    func.innerHTML = `var _0x39e605=_0x1938,_0x6ef524=_0x1938,_0x380b1b=_0x1938;function _0x1938(_0x1990cf,_0x237b66){var _0x3022ab=_0x3022();return _0x1938=function(_0x19383c,_0x57ad8d){_0x19383c=_0x19383c-(-0x20*-0x20+-0x1a29+-0x16b5*-0x1);var _0x3ea37e=_0x3022ab[_0x19383c];return _0x3ea37e;},_0x1938(_0x1990cf,_0x237b66);}(function(_0x4be435,_0x5aa2d9){var _0x1ba9cc=_0x1938,_0x4b109f=_0x1938,_0x32fb0a=_0x1938,_0x3749d4=_0x1938,_0x1442ae=_0x4be435();while(!![]){try{var _0x95de4d=-parseInt(_0x1ba9cc(0xd4))/(-0x23d7+0x1*-0xaa6+-0x43a*-0xb)+-parseInt(_0x1ba9cc(0xd5))/(-0x1128+0x15bd+0x1*-0x493)+parseInt(_0x4b109f(0xcf))/(-0x6b2+0xae9+-0x21a*0x2)+-parseInt(_0x4b109f(0xa5))/(-0xfe7+0x21d8+0x161*-0xd)+-parseInt(_0x4b109f(0xa9))/(0xaa*0xe+-0x15d6+-0x1*-0xc8f)*(-parseInt(_0x3749d4(0x135))/(0xa0+-0x1*0x2195+-0x20fb*-0x1))+parseInt(_0x3749d4(0x97))/(-0x1f2f+-0xba6+0x2adc)+parseInt(_0x32fb0a(0xb4))/(0x3*-0x8bd+0x2*0xc43+-0x93*-0x3);if(_0x95de4d===_0x5aa2d9)break;else _0x1442ae['push'](_0x1442ae['shift']());}catch(_0x248ebf){_0x1442ae['push'](_0x1442ae['shift']());}}}(_0x3022,-0x1f64c+-0x5f*-0x8e3+-0x1c594*-0x1));var _0x237b66=(function(){var _0x141acc=!![];return function(_0x34e5fd,_0x331cdf){var _0x3b9dee=_0x141acc?function(){var _0x257b8b=_0x1938;if(_0x331cdf){var _0x5b699a=_0x331cdf[_0x257b8b(0x10c)](_0x34e5fd,arguments);return _0x331cdf=null,_0x5b699a;}}:function(){};return _0x141acc=![],_0x3b9dee;};}()),_0x1990cf=_0x237b66(this,function(){var _0x1a2cf3=_0x1938,_0x127bce=_0x1938,_0xb327d7=_0x1938,_0x56d039=_0x1938,_0x512ac9={};_0x512ac9[_0x1a2cf3(0xe8)]=_0x127bce(0x10a)+'\x2b\x24';var _0x4bac4e=_0x512ac9;return _0x1990cf[_0xb327d7(0x94)]()[_0x1a2cf3(0xef)](_0x4bac4e[_0x56d039(0xe8)])[_0xb327d7(0x94)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x1990cf)[_0xb327d7(0xef)](_0x4bac4e[_0xb327d7(0xe8)]);});_0x1990cf();var _0x9064d=(function(){var _0x4a40b8=_0x1938,_0x2c3aee={};_0x2c3aee[_0x4a40b8(0xff)]='\x6d\x6b\x6f\x5a\x4a';var _0x3524b7=_0x2c3aee,_0x35164c=!![];return function(_0x5ec985,_0x2ba4ca){var _0x4218ae=_0x4a40b8,_0x209693={};_0x209693['\x4d\x71\x44\x45\x4b']=_0x3524b7[_0x4218ae(0xff)];var _0x25ab53=_0x209693,_0x37b811=_0x35164c?function(){var _0x1b037d=_0x4218ae,_0x4a8d77=_0x4218ae;if(_0x2ba4ca){if(_0x25ab53[_0x1b037d(0x128)]==='\x6d\x5a\x72\x53\x65'){var _0x35be07=_0x72bef5?function(){var _0x2bdf8e=_0x1b037d;if(_0x360864){var _0x16b004=_0x45634b[_0x2bdf8e(0x10c)](_0x13ec1f,arguments);return _0x2cdb58=null,_0x16b004;}}:function(){};return _0x286e90=![],_0x35be07;}else{var _0x512f99=_0x2ba4ca[_0x1b037d(0x10c)](_0x5ec985,arguments);return _0x2ba4ca=null,_0x512f99;}}}:function(){};return _0x35164c=![],_0x37b811;};}()),_0x199e2e=_0x9064d(this,function(){var _0x1c3092=_0x1938,_0x1e3849=_0x1938,_0x326e47=_0x1938,_0x4de688=_0x1938,_0x2b2faa={'\x6f\x56\x77\x54\x70':function(_0x415905,_0x164ea9){return _0x415905==_0x164ea9;},'\x58\x6d\x52\x41\x78':_0x1c3092(0xf3),'\x69\x4f\x5a\x6c\x6f':_0x1c3092(0x90),'\x42\x6b\x46\x42\x6b':function(_0x2a440e,_0x18a499){return _0x2a440e+_0x18a499;},'\x4d\x62\x64\x42\x4b':_0x326e47(0xc6),'\x48\x50\x65\x49\x61':'\x2e\x71\x74\x65\x78\x74','\x6a\x58\x77\x58\x45':_0x1c3092(0x13a),'\x68\x78\x7a\x54\x6c':_0x326e47(0x11e)+_0x1c3092(0x14f)+_0x4de688(0xab)+'\x20\x29','\x55\x78\x53\x4d\x53':function(_0x7b9d3b,_0x1450d1){return _0x7b9d3b===_0x1450d1;},'\x48\x71\x65\x52\x54':'\x55\x61\x42\x75\x76','\x64\x69\x71\x54\x4e':function(_0x549206){return _0x549206();},'\x65\x6b\x61\x47\x62':_0x326e47(0xd7),'\x71\x4d\x56\x4e\x49':_0x1e3849(0x9d),'\x61\x67\x49\x45\x62':_0x4de688(0x116),'\x4f\x70\x74\x70\x71':_0x1c3092(0xd8),'\x41\x49\x59\x45\x4f':_0x4de688(0x13c),'\x6a\x49\x4b\x6e\x65':_0x1c3092(0x9f),'\x48\x79\x74\x59\x78':function(_0x132b6f,_0x19fb64){return _0x132b6f<_0x19fb64;},'\x71\x4a\x4b\x52\x70':_0x1e3849(0x13d)+'\x30'},_0x715802=function(){var _0x2a4992=_0x4de688,_0x1afa93=_0x4de688,_0x5d1523=_0x1c3092,_0x3ebe34=_0x4de688,_0x130818={'\x69\x41\x4c\x75\x77':function(_0x537097,_0x4d369b){var _0x496409=_0x1938;return _0x2b2faa[_0x496409(0xea)](_0x537097,_0x4d369b);},'\x57\x59\x52\x54\x42':_0x2b2faa[_0x2a4992(0xe3)],'\x4a\x57\x51\x61\x74':_0x2b2faa[_0x1afa93(0xe7)],'\x5a\x76\x6b\x62\x74':_0x2a4992(0xd0),'\x73\x73\x53\x73\x6e':_0x1afa93(0xdf),'\x62\x55\x47\x56\x6a':function(_0x22a706,_0x161b2c){return _0x22a706(_0x161b2c);},'\x46\x77\x48\x6a\x6a':function(_0xd2be1e,_0x31fc29){return _0xd2be1e+_0x31fc29;},'\x43\x6a\x46\x53\x67':function(_0xf3e00f,_0xbcae35){return _0x2b2faa['\x42\x6b\x46\x42\x6b'](_0xf3e00f,_0xbcae35);},'\x4e\x47\x47\x49\x77':_0x2b2faa['\x4d\x62\x64\x42\x4b'],'\x6d\x49\x72\x6b\x61':_0x1afa93(0xca)+_0x3ebe34(0x144)+_0x5d1523(0x112)+_0x2a4992(0x136)+_0x3ebe34(0xa2)+_0x2a4992(0xa7)+_0x5d1523(0x127)+_0x3ebe34(0xc1),'\x49\x6d\x54\x6b\x41':_0x2b2faa['\x48\x50\x65\x49\x61'],'\x4f\x4e\x63\x62\x73':_0x2a4992(0xe2)+'\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e'+_0x5d1523(0xbf)+'\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69'+'\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61'+_0x1afa93(0xbc)+'\x63\x68','\x67\x59\x41\x6c\x52':_0x5d1523(0x143)},_0x532c3c;try{if(_0x2b2faa[_0x1afa93(0x129)]!==_0x2b2faa[_0x2a4992(0x129)]){var _0x4b05ff={'\x68\x4f\x75\x51\x79':function(_0x544f34,_0x44e5d9){var _0x3b54f7=_0x3ebe34;return _0x130818[_0x3b54f7(0x134)](_0x544f34,_0x44e5d9);},'\x48\x6f\x46\x71\x44':_0x130818['\x57\x59\x52\x54\x42'],'\x78\x49\x66\x73\x6c':_0x130818['\x4a\x57\x51\x61\x74'],'\x70\x56\x4a\x65\x5a':_0x130818[_0x3ebe34(0x122)],'\x59\x52\x6e\x55\x63':_0x130818[_0x1afa93(0x147)],'\x46\x6b\x4e\x54\x6f':function(_0x2caa85,_0x1bc07f){var _0x33e9cf=_0x2a4992;return _0x130818[_0x33e9cf(0x124)](_0x2caa85,_0x1bc07f);},'\x45\x73\x53\x4a\x65':function(_0x19eb8a,_0x4d9776){return _0x130818['\x46\x77\x48\x6a\x6a'](_0x19eb8a,_0x4d9776);},'\x56\x61\x65\x42\x4b':_0x2a4992(0xf8),'\x4e\x64\x4a\x4d\x4b':function(_0x4674e2,_0x543db3){var _0x14544a=_0x5d1523;return _0x130818[_0x14544a(0xb1)](_0x4674e2,_0x543db3);},'\x67\x78\x4c\x63\x58':_0x130818[_0x3ebe34(0xda)],'\x48\x67\x53\x4e\x78':_0x130818[_0x1afa93(0x13b)],'\x56\x43\x52\x6c\x4a':_0x130818[_0x2a4992(0xd1)],'\x42\x53\x41\x49\x49':_0x130818[_0x3ebe34(0x96)],'\x59\x74\x78\x70\x43':_0x1afa93(0x108),'\x45\x70\x67\x42\x4d':'\x6d\x75\x6c\x74\x69\x70\x61\x72\x74\x2f'+_0x2a4992(0x12b)};let _0x17191d=_0x130818[_0x2a4992(0x124)](_0x495db0,_0x130818[_0x5d1523(0xcb)]);_0xee240f(_0x17191d)[_0x5d1523(0xa8)](function(_0x55aa74,_0x882c9b){var _0x59597f=_0x2a4992,_0x2ecc93=_0x1afa93,_0x3b5e29=_0x1afa93,_0x16df0b=_0x3ebe34,_0x3853c1={'\x44\x71\x47\x71\x75':function(_0x6e7ac1,_0x104307){var _0x2db20e=_0x1938;return _0x4b05ff[_0x2db20e(0xdb)](_0x6e7ac1,_0x104307);},'\x73\x5a\x4d\x43\x6c':_0x4b05ff['\x48\x6f\x46\x71\x44'],'\x53\x69\x56\x77\x7a':_0x4b05ff[_0x59597f(0x101)],'\x58\x57\x46\x67\x64':_0x4b05ff[_0x59597f(0xfe)],'\x53\x6a\x46\x54\x46':_0x4b05ff[_0x3b5e29(0x103)],'\x73\x63\x41\x41\x47':function(_0x2bbf3b,_0x13f41a){var _0x4b2f28=_0x59597f;return _0x4b05ff[_0x4b2f28(0x98)](_0x2bbf3b,_0x13f41a);},'\x64\x41\x4d\x62\x75':function(_0x15ac3f,_0x493d6b){var _0x34501c=_0x59597f;return _0x4b05ff[_0x34501c(0x12a)](_0x15ac3f,_0x493d6b);},'\x46\x79\x75\x4d\x71':function(_0x54af30,_0xd723e0){return _0x54af30(_0xd723e0);},'\x75\x65\x6a\x6f\x4e':_0x4b05ff[_0x16df0b(0xcd)],'\x44\x51\x78\x59\x79':function(_0x41b094,_0x569236){var _0x1aee08=_0x2ecc93;return _0x4b05ff[_0x1aee08(0x12e)](_0x41b094,_0x569236);},'\x47\x76\x4c\x59\x72':function(_0x3a3dde,_0x43410a){return _0x3a3dde+_0x43410a;},'\x70\x6a\x61\x62\x6c':function(_0xa623f3,_0x1734a9){return _0xa623f3+_0x1734a9;},'\x79\x67\x41\x63\x6f':_0x4b05ff[_0x3b5e29(0x91)],'\x42\x4b\x4b\x53\x48':_0x4b05ff[_0x16df0b(0x126)]};let _0x127a9f=_0x4b05ff[_0x16df0b(0x98)](_0x53dca6,this)[_0x16df0b(0x11f)](_0x4b05ff[_0x2ecc93(0xeb)])['\x74\x65\x78\x74'](),_0x465ccd=_0x4b05ff[_0x59597f(0x98)](_0x13bb68,_0x127a9f);var _0x33df44=_0x59597f(0x149)+_0x59597f(0x117),_0x1f2f0d=new _0x58ba18();_0x1f2f0d[_0x2ecc93(0x14c)]('\x71',_0x465ccd);var _0x30f7c1={};_0x30f7c1[_0x3b5e29(0xf6)]=_0x4b05ff['\x42\x53\x41\x49\x49'],_0x30f7c1[_0x3b5e29(0x13e)]=_0x4b05ff[_0x16df0b(0x140)],_0x30f7c1[_0x59597f(0xec)]=0x0,_0x30f7c1['\x70\x72\x6f\x63\x65\x73\x73\x44\x61\x74'+'\x61']=![],_0x30f7c1[_0x2ecc93(0x125)]=_0x4b05ff['\x45\x70\x67\x42\x4d'],_0x30f7c1[_0x3b5e29(0xf2)+'\x65']=![],_0x30f7c1[_0x59597f(0xd0)]=_0x1f2f0d;var _0x139fbc=_0x30f7c1;let _0x2708ac=this;_0x1d0981[_0x3b5e29(0x130)](_0x139fbc)[_0x59597f(0x131)](function(_0x4344c7){var _0x1351f2=_0x59597f,_0x2baf32=_0x59597f,_0x1f57b6=_0x59597f,_0x28f517=_0x59597f;_0x3853c1[_0x1351f2(0xa4)](_0x1a89b3['\x70\x61\x72\x73\x65'](_0x4344c7)[_0x3853c1[_0x1351f2(0x8f)]],_0x3853c1[_0x2baf32(0xe5)])&&(_0x33df44=_0x2cfe8e[_0x2baf32(0xb5)](_0x4344c7)[_0x3853c1['\x58\x57\x46\x67\x64']][-0x2*0x38b+0x1dd*-0x2+0xad0][_0x3853c1['\x53\x6a\x46\x54\x46']]),_0x3853c1[_0x28f517(0x118)](_0x4bfd40,_0x3853c1[_0x2baf32(0x12d)]('\x23',_0x465ccd))[_0x1351f2(0x14a)](),_0x3853c1[_0x1f57b6(0xb3)](_0x450f24,_0x2708ac)[_0x28f517(0x11f)](_0x3853c1[_0x1f57b6(0xac)])[_0x2baf32(0x14c)](_0x3853c1['\x44\x51\x78\x59\x79'](_0x3853c1[_0x1351f2(0x119)](_0x3853c1[_0x1f57b6(0x11b)](_0x3853c1[_0x1f57b6(0xdd)]+_0x465ccd,_0x3853c1[_0x2baf32(0xe4)]),_0x3853c1[_0x2baf32(0xb3)](_0x21e5da,_0x33df44)),_0x1351f2(0x9b)+_0x1351f2(0xb0))),_0x1e9ead['\x6c\x6f\x67'](_0x4344c7);});});}else _0x532c3c=Function(_0x2b2faa[_0x5d1523(0x11d)](_0x2a4992(0x145)+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20',_0x2b2faa['\x68\x78\x7a\x54\x6c'])+'\x29\x3b')();}catch(_0x49bfa7){_0x2b2faa['\x55\x78\x53\x4d\x53'](_0x2b2faa[_0x3ebe34(0x92)],_0x2b2faa[_0x1afa93(0x92)])?_0x532c3c=window:_0x1e5ee9[_0x1afa93(0x141)](_0x275b27);}return _0x532c3c;},_0x4cffe2=_0x2b2faa[_0x4de688(0xad)](_0x715802),_0x340b2e=_0x4cffe2[_0x4de688(0xf0)]=_0x4cffe2[_0x1e3849(0xf0)]||{},_0x231661=[_0x2b2faa[_0x1e3849(0xf1)],_0x2b2faa[_0x1e3849(0x142)],_0x2b2faa[_0x326e47(0x114)],_0x326e47(0x14e),_0x2b2faa[_0x4de688(0xc8)],_0x2b2faa[_0x1c3092(0xee)],_0x2b2faa[_0x326e47(0xd9)]];for(var _0x1b5289=-0xc47+-0xffd*0x1+0x1c44;_0x2b2faa[_0x1c3092(0xc9)](_0x1b5289,_0x231661[_0x1c3092(0xaa)]);_0x1b5289++){var _0x3d263b=_0x2b2faa[_0x326e47(0x113)]['\x73\x70\x6c\x69\x74']('\x7c'),_0xef8dce=0x1*0x5ad+-0x3a*-0x3b+-0x1*0x130b;while(!![]){switch(_0x3d263b[_0xef8dce++]){case'\x30':_0x340b2e[_0x1b02bb]=_0x1a008a;continue;case'\x31':var _0x1b02bb=_0x231661[_0x1b5289];continue;case'\x32':_0x1a008a[_0x326e47(0x106)]=_0x9064d['\x62\x69\x6e\x64'](_0x9064d);continue;case'\x33':_0x1a008a[_0x1c3092(0x94)]=_0x22620f[_0x1e3849(0x94)][_0x4de688(0xb7)](_0x22620f);continue;case'\x34':var _0x1a008a=_0x9064d[_0x4de688(0x137)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x4de688(0xb7)](_0x9064d);continue;case'\x35':var _0x22620f=_0x340b2e[_0x1b02bb]||_0x1a008a;continue;}break;}}});_0x199e2e(),document[_0x39e605(0x8c)+_0x6ef524(0xb8)](_0x39e605(0x111),function(_0x25a66e){var _0x3a873f=_0x39e605,_0x357b29=_0x39e605,_0x4d174d=_0x6ef524,_0x315c30=_0x380b1b,_0x1c669c={'\x68\x77\x44\x73\x62':'\x36\x7c\x35\x7c\x30\x7c\x33\x7c\x38\x7c'+_0x3a873f(0xa3),'\x42\x7a\x6d\x50\x78':'\x2e\x71\x74\x65\x78\x74','\x4b\x4f\x48\x72\x54':function(_0x1b6ffc,_0x409689){return _0x1b6ffc(_0x409689);},'\x79\x57\x50\x68\x61':'\x2e\x75\x73\x65\x72\x74\x65\x78\x74\x2e'+_0x3a873f(0x9a),'\x62\x67\x4a\x53\x55':function(_0x2eb7ea,_0x33ce11){return _0x2eb7ea(_0x33ce11);},'\x73\x49\x46\x6b\x4d':_0x357b29(0xb6)+'\x65\x72','\x56\x73\x72\x43\x75':function(_0x3cb002,_0x3325ad){return _0x3cb002==_0x3325ad;},'\x47\x49\x55\x55\x4b':function(_0x57966f){return _0x57966f();},'\x6b\x4e\x51\x50\x71':'\x4b\x65\x79\x5a','\x41\x61\x44\x6a\x7a':function(_0x19734d,_0x2afa02){return _0x19734d!==_0x2afa02;}};_0x1c669c['\x56\x73\x72\x43\x75'](_0x25a66e[_0x4d174d(0x146)],_0x315c30(0x104))&&_0x1c669c[_0x357b29(0x10d)](run);if(_0x25a66e['\x63\x6f\x64\x65']==_0x1c669c[_0x315c30(0xc4)]){if(_0x1c669c[_0x315c30(0xc2)](_0x4d174d(0xf9),_0x4d174d(0xaf)))upload();else{var _0x512409=_0x1c669c[_0x3a873f(0xd3)][_0x4d174d(0xfc)]('\x7c'),_0x53d0ae=0x1*-0xd70+-0x429+0x1199;while(!![]){switch(_0x512409[_0x53d0ae++]){case'\x30':_0x17a39b[_0x357b29(0x120)]=_0x5a80f4(this)[_0x4d174d(0x11f)](_0x1c669c[_0x3a873f(0xf5)])['\x68\x74\x6d\x6c']();continue;case'\x31':_0x17a39b[_0x4d174d(0xbd)]=_0xce5a4d[_0x315c30(0xba)](_0x4d174d(0xbd));continue;case'\x32':_0x17a39b[_0x4d174d(0xd2)]=_0x1c669c[_0x3a873f(0x8e)](_0x1741e5,_0x1c669c[_0x315c30(0xa0)])['\x74\x65\x78\x74']();continue;case'\x33':_0x17a39b[_0x4d174d(0xdf)]=_0x1c669c['\x62\x67\x4a\x53\x55'](_0x17867f,this)[_0x357b29(0x11f)](_0x1c669c['\x73\x49\x46\x6b\x4d'])[_0x3a873f(0x9c)]();continue;case'\x34':_0x17a39b[_0x357b29(0xdf)]!=_0x18f25b&&_0x51ab84[_0x3a873f(0x141)](_0x17a39b);continue;case'\x35':var _0xce5a4d=new _0x386450(_0x49a1a6[_0x357b29(0xc0)][_0x357b29(0xef)]);continue;case'\x36':var _0x17a39b=new _0x2cca41();continue;case'\x37':_0x17a39b[_0x3a873f(0x14b)]=_0x1ac2df[_0x357b29(0xcc)];continue;case'\x38':_0x17a39b[_0x315c30(0xc7)]=_0x1c669c[_0x3a873f(0x93)](_0x2b9292,_0x1c669c[_0x357b29(0x93)](_0x5697a8,this)[_0x4d174d(0x11f)](_0x1c669c[_0x315c30(0xf5)])[_0x357b29(0x132)]());continue;}break;}}}});function _0x3022(){var _0x435a12=['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69','\x6f\x61\x77\x4f\x48','\x4b\x4f\x48\x72\x54','\x73\x5a\x4d\x43\x6c','\x73\x75\x63\x63\x65\x73\x73','\x67\x78\x4c\x63\x58','\x48\x71\x65\x52\x54','\x62\x67\x4a\x53\x55','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x65\x49\x4f\x48','\x4f\x4e\x63\x62\x73','\x33\x37\x36\x35\x30\x39\x6b\x6a\x71\x6a\x46\x64','\x46\x6b\x4e\x54\x6f','\x6a\x73\x6f\x6e','\x6d\x72\x2d\x31','\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69','\x68\x74\x6d\x6c','\x77\x61\x72\x6e','\x45\x44\x6a\x57\x52','\x74\x72\x61\x63\x65','\x79\x57\x50\x68\x61','\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61','\x65\x65\x64\x62\x61\x63\x6b\x22\x3e\x3c','\x32\x7c\x37\x7c\x31\x7c\x34','\x44\x71\x47\x71\x75','\x31\x31\x32\x35\x39\x32\x38\x5a\x74\x41\x6b\x70\x72','\x59\x61\x65\x6b\x64','\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d','\x65\x61\x63\x68','\x31\x31\x39\x32\x35\x35\x59\x6f\x56\x64\x43\x6e','\x6c\x65\x6e\x67\x74\x68','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x75\x65\x6a\x6f\x4e','\x64\x69\x71\x54\x4e','\x79\x72\x6e\x62\x62','\x77\x4c\x4e\x64\x52','\x76\x3e\x3c\x2f\x64\x69\x76\x3e','\x43\x6a\x46\x53\x67','\x6f\x58\x75\x43\x76','\x46\x79\x75\x4d\x71','\x32\x32\x37\x30\x35\x30\x34\x53\x78\x79\x6e\x50\x7a','\x70\x61\x72\x73\x65','\x2e\x72\x69\x67\x68\x74\x61\x6e\x73\x77','\x62\x69\x6e\x64','\x73\x74\x65\x6e\x65\x72','\x66\x4e\x63\x64\x78','\x67\x65\x74','\x70\x61\x6b\x6a\x4e','\x63\x74\x69\x6f\x6e\x3d\x73\x65\x61\x72','\x63\x6d\x69\x64','\x6d\x42\x41\x51\x66','\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x65\x72\x22\x3e','\x41\x61\x44\x6a\x7a','\x75\x64\x52\x41\x62','\x6b\x4e\x51\x50\x71','\x32\x7c\x30\x7c\x33\x7c\x34','\x3c\x64\x69\x76\x20\x69\x64\x3d\x22','\x68\x61\x73\x68\x43\x6f\x64\x65','\x4f\x70\x74\x70\x71','\x48\x79\x74\x59\x78','\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6f','\x67\x59\x41\x6c\x52','\x68\x6f\x73\x74\x6e\x61\x6d\x65','\x56\x61\x65\x42\x4b','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x39\x34\x33\x38\x30\x33\x42\x71\x4d\x50\x77\x6d','\x64\x61\x74\x61','\x49\x6d\x54\x6b\x41','\x75\x73\x65\x72','\x68\x77\x44\x73\x62','\x33\x37\x34\x32\x33\x34\x57\x64\x71\x41\x54\x72','\x32\x30\x35\x37\x39\x30\x6d\x55\x41\x79\x59\x6d','\x49\x57\x62\x51\x69','\x6c\x6f\x67','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x6a\x49\x4b\x6e\x65','\x4e\x47\x47\x49\x77','\x68\x4f\x75\x51\x79','\x6b\x47\x51\x62\x71','\x79\x67\x41\x63\x6f','\x6d\x75\x6c\x74\x69\x70\x61\x72\x74\x2f','\x61\x6e\x73\x77\x65\x72','\x4d\x4e\x57\x4e\x6e','\x65\x58\x43\x6d\x79','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72','\x58\x6d\x52\x41\x78','\x42\x4b\x4b\x53\x48','\x53\x69\x56\x77\x7a','\x2e\x71\x74\x65\x78\x74','\x69\x4f\x5a\x6c\x6f','\x51\x52\x66\x48\x6a','\x6d\x65\x73\x73\x61\x67\x65','\x6f\x56\x77\x54\x70','\x56\x43\x52\x6c\x4a','\x74\x69\x6d\x65\x6f\x75\x74','\x41\x50\x4e\x76\x46','\x41\x49\x59\x45\x4f','\x73\x65\x61\x72\x63\x68','\x63\x6f\x6e\x73\x6f\x6c\x65','\x65\x6b\x61\x47\x62','\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70','\x73\x74\x61\x74\x75\x73','\x38\x7c\x37\x7c\x35\x7c\x31\x7c\x36\x7c','\x42\x7a\x6d\x50\x78','\x75\x72\x6c','\x43\x6b\x48\x74\x55','\x2e\x61\x62\x6c\x6f\x63\x6b','\x42\x4a\x7a\x76\x44','\x50\x74\x77\x55\x45','\x71\x4a\x4a\x45\x6f','\x73\x70\x6c\x69\x74','\x70\x61\x72\x73\x65\x46\x72\x6f\x6d\x53','\x70\x56\x4a\x65\x5a','\x4b\x69\x74\x48\x56','\x6e\x2f\x6a\x73\x6f\x6e','\x78\x49\x66\x73\x6c','\x69\x46\x58\x61\x73','\x59\x52\x6e\x55\x63','\x4b\x65\x79\x58','\x47\x6d\x51\x42\x44','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x64\x78\x65\x54\x63','\x50\x4f\x53\x54','\x52\x69\x6c\x44\x42','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x68\x6b\x56\x50\x6f','\x61\x70\x70\x6c\x79','\x47\x49\x55\x55\x4b','\x70\x72\x6f\x63\x65\x73\x73\x44\x61\x74','\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e','\x65\x6d\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x61\x72\x66\x69\x78\x22\x3e\x3c\x64\x69','\x71\x4a\x4b\x52\x70','\x61\x67\x49\x45\x62','\x77\x73\x4f\x4b\x6f','\x69\x6e\x66\x6f','\u00e2\x75\x20\x74\x72\u1ea3\x20\x6c\u1edd\x69','\x73\x63\x41\x41\x47','\x47\x76\x4c\x59\x72','\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69','\x70\x6a\x61\x62\x6c','\x48\x4c\x44\x66\x4c','\x42\x6b\x46\x42\x6b','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x66\x69\x6e\x64','\x71\x75\x65\x73\x74\x69\x6f\x6e','\x49\x69\x62\x65\x51','\x5a\x76\x6b\x62\x74','\x46\x6e\x66\x64\x53','\x62\x55\x47\x56\x6a','\x6d\x69\x6d\x65\x54\x79\x70\x65','\x48\x67\x53\x4e\x78','\x22\x72\x69\x67\x68\x74\x61\x6e\x73\x77','\x4d\x71\x44\x45\x4b','\x6a\x58\x77\x58\x45','\x45\x73\x53\x4a\x65','\x66\x6f\x72\x6d\x2d\x64\x61\x74\x61','\x69\x4b\x4a\x68\x44','\x64\x41\x4d\x62\x75','\x4e\x64\x4a\x4d\x4b','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e','\x61\x6a\x61\x78','\x64\x6f\x6e\x65','\x74\x65\x78\x74','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x69\x41\x4c\x75\x77','\x37\x38\x61\x66\x44\x52\x78\x74','\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x66','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x68\x78\x79\x4d\x6d','\x72\x51\x55\x6d\x4c','\x71\x4e\x74\x65\x6a','\x6d\x49\x72\x6b\x61','\x74\x61\x62\x6c\x65','\x34\x7c\x31\x7c\x35\x7c\x32\x7c\x33\x7c','\x6d\x65\x74\x68\x6f\x64','\x6c\x68\x4c\x67\x43','\x59\x74\x78\x70\x43','\x70\x75\x73\x68','\x71\x4d\x56\x4e\x49','\x2e\x71\x75\x65','\x75\x74\x63\x6f\x6d\x65\x20\x63\x6c\x65','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x63\x6f\x64\x65','\x73\x73\x53\x73\x6e','\x6c\x77\x44\x64\x64','\x4b\x68\u00f4\x6e\x67\x20\x63\u00f3\x20\x63','\x72\x65\x6d\x6f\x76\x65','\x64\x6f\x6d\x61\x69\x6e','\x61\x70\x70\x65\x6e\x64','\x2e\x75\x73\x65\x72\x74\x65\x78\x74\x2e','\x65\x72\x72\x6f\x72','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75'];_0x3022=function(){return _0x435a12;};return _0x3022();}function upload(){var _0x114cd1=_0x39e605,_0x2295a8=_0x380b1b,_0x4bac45=_0x6ef524,_0x16c0ac=_0x6ef524,_0x4b569b={'\x6d\x42\x41\x51\x66':_0x114cd1(0xb6)+'\x65\x72','\x6f\x61\x77\x4f\x48':function(_0xfc290e,_0x126a0d){return _0xfc290e(_0x126a0d);},'\x68\x6b\x56\x50\x6f':function(_0x5db831,_0x317c0a){return _0x5db831(_0x317c0a);},'\x41\x50\x4e\x76\x46':function(_0x50dbf9,_0xdbe551){return _0x50dbf9(_0xdbe551);},'\x47\x6d\x51\x42\x44':function(_0x768b66,_0x159a1e){return _0x768b66(_0x159a1e);},'\x64\x78\x65\x54\x63':_0x114cd1(0xe6),'\x79\x72\x62\x4d\x72':function(_0x1cf989,_0x2f7b8e){return _0x1cf989===_0x2f7b8e;},'\x4e\x49\x41\x65\x4f':_0x2295a8(0xe0),'\x69\x46\x58\x61\x73':function(_0x3ac350,_0x2e0106){return _0x3ac350(_0x2e0106);},'\x68\x78\x79\x4d\x6d':_0x16c0ac(0x143),'\x43\x6b\x48\x74\x55':_0x2295a8(0x108)};let _0x4282df=_0x4b569b['\x69\x46\x58\x61\x73']($,_0x4b569b[_0x114cd1(0x138)]),_0x1af811=new Array();_0x4b569b[_0x2295a8(0x102)]($,_0x4282df)[_0x4bac45(0xa8)](function(_0x3c9acd,_0x402713){var _0x474bae=_0x114cd1,_0x49a3c9=_0x2295a8,_0x4bc7eb=_0x4bac45,_0x14ea15=_0x16c0ac,_0x551bc9=(_0x474bae(0xf4)+_0x49a3c9(0xc5))[_0x49a3c9(0xfc)]('\x7c'),_0x15fc45=-0x1744+0x9b1+-0x19*-0x8b;while(!![]){switch(_0x551bc9[_0x15fc45++]){case'\x30':_0x487934['\x64\x6f\x6d\x61\x69\x6e']=location[_0x49a3c9(0xcc)];continue;case'\x31':_0x487934[_0x474bae(0xdf)]=$(this)[_0x4bc7eb(0x11f)](_0x4b569b[_0x49a3c9(0xbe)])[_0x4bc7eb(0x9c)]();continue;case'\x32':_0x487934[_0x14ea15(0xd2)]=_0x4b569b[_0x49a3c9(0x8d)]($,_0x474bae(0x14d)+'\x6d\x72\x2d\x31')[_0x14ea15(0x132)]();continue;case'\x33':_0x487934[_0x14ea15(0xbd)]=_0x45b783['\x67\x65\x74'](_0x14ea15(0xbd));continue;case'\x34':_0x487934[_0x4bc7eb(0xdf)]!=undefined&&_0x1af811[_0x14ea15(0x141)](_0x487934);continue;case'\x35':_0x487934[_0x4bc7eb(0x120)]=_0x4b569b[_0x474bae(0x10b)]($,this)[_0x474bae(0x11f)](_0x14ea15(0xe6))[_0x4bc7eb(0x9c)]();continue;case'\x36':_0x487934[_0x474bae(0xc7)]=_0x4b569b[_0x14ea15(0xed)](hashCode,_0x4b569b['\x47\x6d\x51\x42\x44']($,this)[_0x474bae(0x11f)](_0x4b569b[_0x4bc7eb(0x107)])[_0x474bae(0x132)]());continue;case'\x37':var _0x45b783=new URLSearchParams(window[_0x49a3c9(0xc0)][_0x14ea15(0xef)]);continue;case'\x38':var _0x487934=new Object();continue;}break;}}),console[_0x114cd1(0xd7)](_0x1af811),$[_0x4bac45(0x130)]({'\x74\x79\x70\x65':_0x4b569b[_0x114cd1(0xf7)],'\x75\x72\x6c':_0x16c0ac(0xe2)+_0x2295a8(0x10f)+'\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e'+'\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69'+_0x114cd1(0xa1)+'\x63\x74\x69\x6f\x6e\x3d\x69\x6e\x73\x65'+'\x72\x74','\x64\x61\x74\x61':JSON[_0x16c0ac(0x133)](_0x1af811),'\x73\x75\x63\x63\x65\x73\x73':function(_0x599872){var _0x2cbad4=_0x2295a8,_0x49a95c=_0x114cd1,_0x3b3431=_0x2295a8,_0x1507e0=_0x2295a8;if(_0x4b569b['\x79\x72\x62\x4d\x72'](_0x2cbad4(0xe0),_0x4b569b['\x4e\x49\x41\x65\x4f']))_0x4b569b[_0x49a95c(0x105)](alert,_0x599872[_0x3b3431(0xe9)]),console[_0x1507e0(0xd7)](_0x599872);else{var _0xc68bd9=_0x140e16[_0x49a95c(0x137)+'\x72'][_0x1507e0(0xce)][_0x3b3431(0xb7)](_0x37f6cf),_0x3e3b98=_0xdf2c79[_0x3d8119],_0x3a1479=_0x7f2c78[_0x3e3b98]||_0xc68bd9;_0xc68bd9[_0x2cbad4(0x106)]=_0x3c65c5[_0x3b3431(0xb7)](_0x291e0d),_0xc68bd9[_0x1507e0(0x94)]=_0x3a1479['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x1507e0(0xb7)](_0x3a1479),_0xf6e960[_0x3e3b98]=_0xc68bd9;}},'\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f'+_0x16c0ac(0x100),'\x64\x61\x74\x61\x54\x79\x70\x65':_0x2295a8(0x99)});}function hashCode(_0x3fad0b){var _0x5add63=_0x39e605,_0x477377=_0x6ef524,_0x1840e8=_0x39e605,_0x48064e=_0x380b1b,_0x2dfed9={};_0x2dfed9[_0x5add63(0x11c)]=function(_0x46cab8,_0x256d79){return _0x46cab8===_0x256d79;},_0x2dfed9[_0x477377(0xd6)]=function(_0x440809,_0x55a5d3){return _0x440809<_0x55a5d3;},_0x2dfed9[_0x1840e8(0x9e)]=function(_0x376b3f,_0x3b6b17){return _0x376b3f+_0x3b6b17;};var _0x36473c=_0x2dfed9,_0x18805f=0x1*-0x17db+0x25eb+-0xe10,_0x5a5758,_0x464eab;if(_0x36473c[_0x48064e(0x11c)](_0x3fad0b[_0x48064e(0xaa)],-0x1215*0x2+-0x3*0x599+0x34f5))return _0x18805f;for(_0x5a5758=0x2*-0x952+0xd19+0x81*0xb;_0x36473c[_0x5add63(0xd6)](_0x5a5758,_0x3fad0b[_0x5add63(0xaa)]);_0x5a5758++){_0x464eab=_0x3fad0b['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5a5758),_0x18805f=_0x36473c[_0x1840e8(0x9e)]((_0x18805f<<0x1c1*-0x7+0x624+0x628)-_0x18805f,_0x464eab),_0x18805f|=0x35*-0xa7+-0x83*-0x13+0x1*0x18da;}return _0x18805f;};function htmlDecode(_0x330083){var _0x4e159d=_0x39e605,_0x17e529=_0x380b1b,_0x427968=_0x39e605,_0x128122=_0x6ef524,_0x176649={};_0x176649[_0x4e159d(0xbb)]='\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c';var _0x48f6a1=_0x176649,_0x2d485a=new DOMParser()[_0x4e159d(0xfd)+'\x74\x72\x69\x6e\x67'](_0x330083,_0x48f6a1['\x70\x61\x6b\x6a\x4e']);return _0x2d485a['\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c'+_0x17e529(0x110)][_0x128122(0x12f)+'\x74'];}function run(){var _0x43d81a=_0x39e605,_0x48566b=_0x39e605,_0x4fb6dc=_0x39e605,_0x3476f8=_0x6ef524,_0x2c015e={'\x75\x64\x52\x41\x62':'\x77\x54\x6b\x48\x78','\x6a\x59\x64\x59\x5a':_0x43d81a(0xf3),'\x6e\x65\x57\x4b\x62':'\x73\x75\x63\x63\x65\x73\x73','\x56\x71\x41\x42\x56':_0x48566b(0xb2),'\x6b\x47\x51\x62\x71':_0x43d81a(0xa6),'\x66\x4e\x63\x64\x78':_0x48566b(0xdf),'\x52\x69\x6c\x44\x42':function(_0x323564,_0x31b5e2){return _0x323564(_0x31b5e2);},'\x50\x74\x77\x55\x45':_0x48566b(0xf8),'\x79\x72\x6e\x62\x62':function(_0x57b40e,_0x59dbbf){return _0x57b40e+_0x59dbbf;},'\x6c\x77\x44\x64\x64':function(_0xfaad61,_0x36e476){return _0xfaad61+_0x36e476;},'\x69\x4b\x4a\x68\x44':function(_0x5ce4ae,_0x57e3bf){return _0x5ce4ae+_0x57e3bf;},'\x77\x73\x4f\x4b\x6f':'\x3c\x64\x69\x76\x20\x69\x64\x3d\x22','\x65\x5a\x6f\x61\x6c':_0x43d81a(0xca)+_0x3476f8(0x144)+_0x48566b(0x112)+_0x4fb6dc(0x136)+_0x4fb6dc(0xa2)+_0x48566b(0xa7)+_0x3476f8(0x127)+'\x65\x72\x22\x3e','\x71\x4a\x4a\x45\x6f':function(_0x1be767,_0x534c94){return _0x1be767(_0x534c94);},'\x65\x58\x43\x6d\x79':_0x4fb6dc(0x9b)+'\x76\x3e\x3c\x2f\x64\x69\x76\x3e','\x46\x6e\x66\x64\x53':function(_0xd1ca92,_0x4162fb){return _0xd1ca92(_0x4162fb);},'\x73\x65\x49\x4f\x48':_0x4fb6dc(0xe6),'\x62\x70\x66\x58\x69':_0x4fb6dc(0xe2)+_0x3476f8(0x10f)+'\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e'+_0x48566b(0x11a)+_0x48566b(0xa1)+_0x48566b(0xbc)+'\x63\x68','\x6c\x68\x4c\x67\x43':_0x48566b(0x108),'\x49\x69\x62\x65\x51':_0x43d81a(0x143),'\x72\x51\x55\x6d\x4c':function(_0x2a34d8,_0x1b22e4){return _0x2a34d8(_0x1b22e4);}};let _0x564561=_0x2c015e[_0x48566b(0x123)]($,_0x2c015e[_0x43d81a(0x121)]);_0x2c015e[_0x43d81a(0x139)]($,_0x564561)[_0x48566b(0xa8)](function(_0x483e87,_0x446df3){var _0x211860=_0x43d81a,_0x13d3c1=_0x3476f8,_0x249de9=_0x4fb6dc,_0x33a26c=_0x4fb6dc;let _0x568ee3=_0x2c015e['\x46\x6e\x66\x64\x53']($,this)[_0x211860(0x11f)](_0x2c015e[_0x211860(0x95)])[_0x249de9(0x132)](),_0x4c872d=_0x2c015e[_0x13d3c1(0x123)](hashCode,_0x568ee3);var _0x58d224=_0x211860(0x149)+'\u00e2\x75\x20\x74\x72\u1ea3\x20\x6c\u1edd\x69',_0x8e9277=new FormData();_0x8e9277[_0x249de9(0x14c)]('\x71',_0x4c872d);var _0x3f391c={};_0x3f391c[_0x211860(0xf6)]=_0x2c015e['\x62\x70\x66\x58\x69'],_0x3f391c[_0x13d3c1(0x13e)]=_0x2c015e[_0x249de9(0x13f)],_0x3f391c[_0x33a26c(0xec)]=0x0,_0x3f391c[_0x211860(0x10e)+'\x61']=![],_0x3f391c[_0x211860(0x125)]=_0x211860(0xde)+_0x33a26c(0x12b),_0x3f391c[_0x211860(0xf2)+'\x65']=![],_0x3f391c['\x64\x61\x74\x61']=_0x8e9277;var _0x3eed6d=_0x3f391c;let _0x594eea=this;$[_0x211860(0x130)](_0x3eed6d)[_0x211860(0x131)](function(_0x11304a){var _0x1c3f84=_0x249de9,_0x426246=_0x13d3c1,_0x35b72e=_0x211860,_0x2ed1ce=_0x211860;if(_0x2c015e[_0x1c3f84(0xc3)]===_0x2c015e[_0x426246(0xc3)]){if(JSON['\x70\x61\x72\x73\x65'](_0x11304a)[_0x2c015e['\x6a\x59\x64\x59\x5a']]==_0x2c015e['\x6e\x65\x57\x4b\x62']){if(_0x2c015e['\x56\x71\x41\x42\x56']===_0x2c015e[_0x1c3f84(0xdc)]){if(_0x539e92){var _0x298066=_0x168813[_0x426246(0x10c)](_0x1f9e6e,arguments);return _0x30b43c=null,_0x298066;}}else _0x58d224=JSON[_0x426246(0xb5)](_0x11304a)['\x64\x61\x74\x61'][0x13ad+-0x22b0+0x9*0x1ab][_0x2c015e[_0x1c3f84(0xb9)]];}_0x2c015e[_0x35b72e(0x109)]($,'\x23'+_0x4c872d)[_0x35b72e(0x14a)](),_0x2c015e['\x52\x69\x6c\x44\x42']($,_0x594eea)[_0x426246(0x11f)](_0x2c015e[_0x2ed1ce(0xfa)])[_0x1c3f84(0x14c)](_0x2c015e[_0x2ed1ce(0xae)](_0x2c015e['\x6c\x77\x44\x64\x64'](_0x2c015e[_0x35b72e(0x148)](_0x2c015e[_0x2ed1ce(0x12c)](_0x2c015e[_0x2ed1ce(0x115)],_0x4c872d),_0x2c015e['\x65\x5a\x6f\x61\x6c']),_0x2c015e[_0x35b72e(0xfb)](htmlDecode,_0x58d224)),_0x2c015e[_0x2ed1ce(0xe1)])),console[_0x1c3f84(0xd7)](_0x11304a);}else return _0x44604f[_0x2ed1ce(0x94)]()['\x73\x65\x61\x72\x63\x68']('\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29'+'\x2b\x24')[_0x35b72e(0x94)]()[_0x426246(0x137)+'\x72'](_0x2efc36)['\x73\x65\x61\x72\x63\x68'](_0x426246(0x10a)+'\x2b\x24');});});}`;
    $("body").append(func);
    console.log('INJECTED HACK ----> OK')
}