"use strict";

var dn = dn || {};

dn.menu_id_to_caption = {
'menu_print': 'print',
'menu_sharing': 'sharing',
'menu_save': 'save',
'menu_history': 'history',
'menu_file': 'current file',
'menu_new': 'new',
'menu_open': 'new/open',
'menu_find': 'find/replace',
'menu_goto': 'goto line',
'menu_general_settings': 'general settings',
'menu_shortcuts': 'shortcuts',
'menu_drive': 'drive',
'menu_help': 'about/help'};


dn.shortcuts_list = [
"cut|Ctrl-X|Cmd-X",    
"copy|Ctrl-C|Cmd-C",
"paste|Ctrl-V|Command-V",
"cycle clipboard|Cltr-[V then left or right arrow]|Command-[V then left or right arrow]",
"select all|Ctrl-A|Command-A",
"find|Ctrl(-Alt)-F",
"replace|Ctrl-R",
"go to line|Ctrl(-Alt)-L",
"undo|Ctrl-Z|Command-Z",
"redo|Ctrl-Shift-Z,Ctrl-Y|Command-Shift-Z,Command-Y",
" | ",
"toggle widget|Esc",
"save|Ctrl-S|Command-S",
"print|Ctrl(-Alt)-P|Command-P",
"file history|Ctrl-H|Command-H",
"new|Ctrl(-Alt)-N",
"open|Ctrl(-Alt)-O",
"  | ",
"to upper case|Ctrl-U",
"to lower case|Ctr-Shift-U",
"modify selection|Shift-(Ctrl-)(Alt-) {Down, Up, Left, Right, End, Home, PageDown, PageUp, End}|Shift-(Command-)(Alt-) {Down, Up, Left, Right, End, Home, PageDown,End}",
"copy lines down|Ctrl-Alt-Down|Command-Option-Down",
"copy lines up|Ctrl-Alt-Up|Command-Option-Up",
"center selection||Ctrl-L",
"fold all|Alt-0|Option-0",
"unfold all|Alt-Shift-0|Option-Shift-0",
"go to end|Ctrl-End,Ctrl-Down|Command-End,Command-Down",
"go to line end|Alt-Right,End|Command-Right,End,Ctrl-E",
"go to line start|Alt-Left,Home|Command-Left,Home,Ctrl-A",
"go to page down|PageDown|Option-PageDown,Ctrl-V",
"go to page up|PageUp|Option-PageUp",
"go to start|Ctrl-Home,Ctrl-Up|Command-Home,Command-Up",
"go to word left|Ctrl-Left|Option-Left",
"go to word right|Ctrl-Right|Option-Right",
"indent|Tab",
"outdent|Shift-Tab",
"overwrite|Insert",
"remove line|Ctrl-D|Command-D",
"remove to line end||Ctrl-K",
"remove to linestart||Option-Backspace",
"remove word left||Alt-Backspace,Ctrl-Alt-Backspace",
"remove word right||Alt-Delete",
"split line||Ctrl-O",
"toggle comment|Ctrl-7|Command-7",
"transpose letters|Ctrl-T"
]

dn.ext_to_mime_type = {
html:"text/html",
htm:"text/html",
js:"text/javascript",
pl:"application/x-perl",
xml:"text/xml",
c:"text/x-csrc",
cpp:"text/x-c++src",
h:"text/x-chdr",
json:"application/json",
php:"application/x-php",
svg:"text/html",
css:"text/css",
java:"text/x-java",
py:"text/x-python",
scala:"scala",
textile:"textile",
tex:"application/x-tex",
bib:"application/x-tex",
rtf:"application/rtf",
rtx:"application/rtf",
sh:"application/x-sh",
sql:"text/x-sql",
as:"text/x-actionscript"
//everything else is hopefully ok to be text/plain.
}

dn.tooltip_info = { //keys correspond to icon data-info attr, which will be the same as keys in SHORTCUTS_LIST
    "save" : "Save file contents.  ",
    "print": "Open print view in a new tab.  ",
    "sharing": "View and modify file's sharing status.",
    "file history": "Explore the file history.  ",
    "drive": "Show this file in Google Drive.  ",
    "about": "Drive Notepad website.",
    "shortcuts": "Keyboard shortcuts.",
    "new": "Create new file in a new tab.  ",
    "open": "Launch open dialoag.  ",
    "settings_file": "Properties of the current file.",
    "settings_general": "Your general Drive Notepad preferences.",
    "title": "Click to edit the file's title.",
    "description": "Click to edit the file's description."
}

dn.client_id = '591525900269-94ok9krafau8qa24666btvccmsfnq5fp.apps.googleusercontent.com';

// See https://developers.google.com/apis-explorer 
dn.scopes = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/drive.appdata'
];

var WHICH = {
ENTER: 13,
ESC: 27,
UP: 38,
DOWN: 40
};
