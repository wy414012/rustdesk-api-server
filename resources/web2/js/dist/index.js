import {getServerConf} from "./ljw.js?v=6"
import {F as $t, J as Yt, L as Re, l as P4, m as r, P as ua, s as Xt, z as H4} from "./vendor.js?v=0b990c6e";
import {ids as langIds, lang} from './lang.js?v=6'

var Zt = Object.defineProperty;
var Qt = (u, e, i) => e in u ? Zt(u, e, {enumerable: !0, configurable: !0, writable: !0, value: i}) : u[e] = i;
var d = (u, e, i) => (Qt(u, typeof e != "symbol" ? e + "" : e, i), i), Y4 = (u, e, i) => {
    if (!e.has(u)) throw TypeError("Cannot " + i)
};
var g = (u, e, i) => (Y4(u, e, "read from private field"), i ? i.call(u) : e.get(u)), pu = (u, e, i) => {
    if (e.has(u)) throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(u) : e.set(u, i)
}, C4 = (u, e, i, o) => (Y4(u, e, "write to private field"), o ? o.call(u, i) : e.set(u, i), i), ze = (u, e, i, o) => ({
    set _(a) {
        C4(u, e, a, i)
    }, get _() {
        return g(u, e, o)
    }
}), Pe = (u, e, i) => (Y4(u, e, "access private method"), i);

const ea = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
    new MutationObserver(a => {
        for (const t of a) if (t.type === "childList") for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }).observe(document, {childList: !0, subtree: !0});

    function i(a) {
        const t = {};
        return a.integrity && (t.integrity = a.integrity), a.referrerpolicy && (t.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? t.credentials = "include" : a.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
    }

    function o(a) {
        if (a.ep) return;
        a.ep = !0;
        const t = i(a);
        fetch(a.href, t)
    }
};
ea();
var ie = (u => (u[u.I420 = 0] = "I420", u[u.I444 = 1] = "I444", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(ie || {});

function ia(u) {
    switch (u) {
        case 0:
        case"I420":
            return 0;
        case 1:
        case"I444":
            return 1;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function ta(u) {
    switch (u) {
        case 0:
            return "I420";
        case 1:
            return "I444";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var c4 = (u => (u[u.Legacy = 0] = "Legacy", u[u.Map = 1] = "Map", u[u.Translate = 2] = "Translate", u[u.Auto = 3] = "Auto", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(c4 || {});

function aa(u) {
    switch (u) {
        case 0:
        case"Legacy":
            return 0;
        case 1:
        case"Map":
            return 1;
        case 2:
        case"Translate":
            return 2;
        case 3:
        case"Auto":
            return 3;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function oa(u) {
    switch (u) {
        case 0:
            return "Legacy";
        case 1:
            return "Map";
        case 2:
            return "Translate";
        case 3:
            return "Auto";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var N = (u => (u[u.Unknown = 0] = "Unknown", u[u.Alt = 1] = "Alt", u[u.Backspace = 2] = "Backspace", u[u.CapsLock = 3] = "CapsLock", u[u.Control = 4] = "Control", u[u.Delete = 5] = "Delete", u[u.DownArrow = 6] = "DownArrow", u[u.End = 7] = "End", u[u.Escape = 8] = "Escape", u[u.F1 = 9] = "F1", u[u.F10 = 10] = "F10", u[u.F11 = 11] = "F11", u[u.F12 = 12] = "F12", u[u.F2 = 13] = "F2", u[u.F3 = 14] = "F3", u[u.F4 = 15] = "F4", u[u.F5 = 16] = "F5", u[u.F6 = 17] = "F6", u[u.F7 = 18] = "F7", u[u.F8 = 19] = "F8", u[u.F9 = 20] = "F9", u[u.Home = 21] = "Home", u[u.LeftArrow = 22] = "LeftArrow", u[u.Meta = 23] = "Meta", u[u.Option = 24] = "Option", u[u.PageDown = 25] = "PageDown", u[u.PageUp = 26] = "PageUp", u[u.Return = 27] = "Return", u[u.RightArrow = 28] = "RightArrow", u[u.Shift = 29] = "Shift", u[u.Space = 30] = "Space", u[u.Tab = 31] = "Tab", u[u.UpArrow = 32] = "UpArrow", u[u.Numpad0 = 33] = "Numpad0", u[u.Numpad1 = 34] = "Numpad1", u[u.Numpad2 = 35] = "Numpad2", u[u.Numpad3 = 36] = "Numpad3", u[u.Numpad4 = 37] = "Numpad4", u[u.Numpad5 = 38] = "Numpad5", u[u.Numpad6 = 39] = "Numpad6", u[u.Numpad7 = 40] = "Numpad7", u[u.Numpad8 = 41] = "Numpad8", u[u.Numpad9 = 42] = "Numpad9", u[u.Cancel = 43] = "Cancel", u[u.Clear = 44] = "Clear", u[u.Menu = 45] = "Menu", u[u.Pause = 46] = "Pause", u[u.Kana = 47] = "Kana", u[u.Hangul = 48] = "Hangul", u[u.Junja = 49] = "Junja", u[u.Final = 50] = "Final", u[u.Hanja = 51] = "Hanja", u[u.Kanji = 52] = "Kanji", u[u.Convert = 53] = "Convert", u[u.Select = 54] = "Select", u[u.Print = 55] = "Print", u[u.Execute = 56] = "Execute", u[u.Snapshot = 57] = "Snapshot", u[u.Insert = 58] = "Insert", u[u.Help = 59] = "Help", u[u.Sleep = 60] = "Sleep", u[u.Separator = 61] = "Separator", u[u.Scroll = 62] = "Scroll", u[u.NumLock = 63] = "NumLock", u[u.RWin = 64] = "RWin", u[u.Apps = 65] = "Apps", u[u.Multiply = 66] = "Multiply", u[u.Add = 67] = "Add", u[u.Subtract = 68] = "Subtract", u[u.Decimal = 69] = "Decimal", u[u.Divide = 70] = "Divide", u[u.Equals = 71] = "Equals", u[u.NumpadEnter = 72] = "NumpadEnter", u[u.RShift = 73] = "RShift", u[u.RControl = 74] = "RControl", u[u.RAlt = 75] = "RAlt", u[u.VolumeMute = 76] = "VolumeMute", u[u.VolumeUp = 77] = "VolumeUp", u[u.VolumeDown = 78] = "VolumeDown", u[u.Power = 79] = "Power", u[u.CtrlAltDel = 100] = "CtrlAltDel", u[u.LockScreen = 101] = "LockScreen", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(N || {});

function A4(u) {
    switch (u) {
        case 0:
        case"Unknown":
            return 0;
        case 1:
        case"Alt":
            return 1;
        case 2:
        case"Backspace":
            return 2;
        case 3:
        case"CapsLock":
            return 3;
        case 4:
        case"Control":
            return 4;
        case 5:
        case"Delete":
            return 5;
        case 6:
        case"DownArrow":
            return 6;
        case 7:
        case"End":
            return 7;
        case 8:
        case"Escape":
            return 8;
        case 9:
        case"F1":
            return 9;
        case 10:
        case"F10":
            return 10;
        case 11:
        case"F11":
            return 11;
        case 12:
        case"F12":
            return 12;
        case 13:
        case"F2":
            return 13;
        case 14:
        case"F3":
            return 14;
        case 15:
        case"F4":
            return 15;
        case 16:
        case"F5":
            return 16;
        case 17:
        case"F6":
            return 17;
        case 18:
        case"F7":
            return 18;
        case 19:
        case"F8":
            return 19;
        case 20:
        case"F9":
            return 20;
        case 21:
        case"Home":
            return 21;
        case 22:
        case"LeftArrow":
            return 22;
        case 23:
        case"Meta":
            return 23;
        case 24:
        case"Option":
            return 24;
        case 25:
        case"PageDown":
            return 25;
        case 26:
        case"PageUp":
            return 26;
        case 27:
        case"Return":
            return 27;
        case 28:
        case"RightArrow":
            return 28;
        case 29:
        case"Shift":
            return 29;
        case 30:
        case"Space":
            return 30;
        case 31:
        case"Tab":
            return 31;
        case 32:
        case"UpArrow":
            return 32;
        case 33:
        case"Numpad0":
            return 33;
        case 34:
        case"Numpad1":
            return 34;
        case 35:
        case"Numpad2":
            return 35;
        case 36:
        case"Numpad3":
            return 36;
        case 37:
        case"Numpad4":
            return 37;
        case 38:
        case"Numpad5":
            return 38;
        case 39:
        case"Numpad6":
            return 39;
        case 40:
        case"Numpad7":
            return 40;
        case 41:
        case"Numpad8":
            return 41;
        case 42:
        case"Numpad9":
            return 42;
        case 43:
        case"Cancel":
            return 43;
        case 44:
        case"Clear":
            return 44;
        case 45:
        case"Menu":
            return 45;
        case 46:
        case"Pause":
            return 46;
        case 47:
        case"Kana":
            return 47;
        case 48:
        case"Hangul":
            return 48;
        case 49:
        case"Junja":
            return 49;
        case 50:
        case"Final":
            return 50;
        case 51:
        case"Hanja":
            return 51;
        case 52:
        case"Kanji":
            return 52;
        case 53:
        case"Convert":
            return 53;
        case 54:
        case"Select":
            return 54;
        case 55:
        case"Print":
            return 55;
        case 56:
        case"Execute":
            return 56;
        case 57:
        case"Snapshot":
            return 57;
        case 58:
        case"Insert":
            return 58;
        case 59:
        case"Help":
            return 59;
        case 60:
        case"Sleep":
            return 60;
        case 61:
        case"Separator":
            return 61;
        case 62:
        case"Scroll":
            return 62;
        case 63:
        case"NumLock":
            return 63;
        case 64:
        case"RWin":
            return 64;
        case 65:
        case"Apps":
            return 65;
        case 66:
        case"Multiply":
            return 66;
        case 67:
        case"Add":
            return 67;
        case 68:
        case"Subtract":
            return 68;
        case 69:
        case"Decimal":
            return 69;
        case 70:
        case"Divide":
            return 70;
        case 71:
        case"Equals":
            return 71;
        case 72:
        case"NumpadEnter":
            return 72;
        case 73:
        case"RShift":
            return 73;
        case 74:
        case"RControl":
            return 74;
        case 75:
        case"RAlt":
            return 75;
        case 76:
        case"VolumeMute":
            return 76;
        case 77:
        case"VolumeUp":
            return 77;
        case 78:
        case"VolumeDown":
            return 78;
        case 79:
        case"Power":
            return 79;
        case 100:
        case"CtrlAltDel":
            return 100;
        case 101:
        case"LockScreen":
            return 101;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function R4(u) {
    switch (u) {
        case 0:
            return "Unknown";
        case 1:
            return "Alt";
        case 2:
            return "Backspace";
        case 3:
            return "CapsLock";
        case 4:
            return "Control";
        case 5:
            return "Delete";
        case 6:
            return "DownArrow";
        case 7:
            return "End";
        case 8:
            return "Escape";
        case 9:
            return "F1";
        case 10:
            return "F10";
        case 11:
            return "F11";
        case 12:
            return "F12";
        case 13:
            return "F2";
        case 14:
            return "F3";
        case 15:
            return "F4";
        case 16:
            return "F5";
        case 17:
            return "F6";
        case 18:
            return "F7";
        case 19:
            return "F8";
        case 20:
            return "F9";
        case 21:
            return "Home";
        case 22:
            return "LeftArrow";
        case 23:
            return "Meta";
        case 24:
            return "Option";
        case 25:
            return "PageDown";
        case 26:
            return "PageUp";
        case 27:
            return "Return";
        case 28:
            return "RightArrow";
        case 29:
            return "Shift";
        case 30:
            return "Space";
        case 31:
            return "Tab";
        case 32:
            return "UpArrow";
        case 33:
            return "Numpad0";
        case 34:
            return "Numpad1";
        case 35:
            return "Numpad2";
        case 36:
            return "Numpad3";
        case 37:
            return "Numpad4";
        case 38:
            return "Numpad5";
        case 39:
            return "Numpad6";
        case 40:
            return "Numpad7";
        case 41:
            return "Numpad8";
        case 42:
            return "Numpad9";
        case 43:
            return "Cancel";
        case 44:
            return "Clear";
        case 45:
            return "Menu";
        case 46:
            return "Pause";
        case 47:
            return "Kana";
        case 48:
            return "Hangul";
        case 49:
            return "Junja";
        case 50:
            return "Final";
        case 51:
            return "Hanja";
        case 52:
            return "Kanji";
        case 53:
            return "Convert";
        case 54:
            return "Select";
        case 55:
            return "Print";
        case 56:
            return "Execute";
        case 57:
            return "Snapshot";
        case 58:
            return "Insert";
        case 59:
            return "Help";
        case 60:
            return "Sleep";
        case 61:
            return "Separator";
        case 62:
            return "Scroll";
        case 63:
            return "NumLock";
        case 64:
            return "RWin";
        case 65:
            return "Apps";
        case 66:
            return "Multiply";
        case 67:
            return "Add";
        case 68:
            return "Subtract";
        case 69:
            return "Decimal";
        case 70:
            return "Divide";
        case 71:
            return "Equals";
        case 72:
            return "NumpadEnter";
        case 73:
            return "RShift";
        case 74:
            return "RControl";
        case 75:
            return "RAlt";
        case 76:
            return "VolumeMute";
        case 77:
            return "VolumeUp";
        case 78:
            return "VolumeDown";
        case 79:
            return "Power";
        case 100:
            return "CtrlAltDel";
        case 101:
            return "LockScreen";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var du = (u => (u[u.Text = 0] = "Text", u[u.Rtf = 1] = "Rtf", u[u.Html = 2] = "Html", u[u.ImageRgba = 21] = "ImageRgba", u[u.ImagePng = 22] = "ImagePng", u[u.ImageSvg = 23] = "ImageSvg", u[u.Special = 31] = "Special", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(du || {});

function na(u) {
    switch (u) {
        case 0:
        case"Text":
            return 0;
        case 1:
        case"Rtf":
            return 1;
        case 2:
        case"Html":
            return 2;
        case 21:
        case"ImageRgba":
            return 21;
        case 22:
        case"ImagePng":
            return 22;
        case 23:
        case"ImageSvg":
            return 23;
        case 31:
        case"Special":
            return 31;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function ra(u) {
    switch (u) {
        case 0:
            return "Text";
        case 1:
            return "Rtf";
        case 2:
            return "Html";
        case 21:
            return "ImageRgba";
        case 22:
            return "ImagePng";
        case 23:
            return "ImageSvg";
        case 31:
            return "Special";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

function sa(u) {
    switch (u) {
        case 0:
        case"Dir":
            return 0;
        case 2:
        case"DirLink":
            return 2;
        case 3:
        case"DirDrive":
            return 3;
        case 4:
        case"File":
            return 4;
        case 5:
        case"FileLink":
            return 5;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function la(u) {
    switch (u) {
        case 0:
            return "Dir";
        case 2:
            return "DirLink";
        case 3:
            return "DirDrive";
        case 4:
            return "File";
        case 5:
            return "FileLink";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var x4 = (u => (u[u.NotSet = 0] = "NotSet", u[u.Low = 2] = "Low", u[u.Balanced = 3] = "Balanced", u[u.Best = 4] = "Best", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(x4 || {});

function Ea(u) {
    switch (u) {
        case 0:
        case"NotSet":
            return 0;
        case 2:
        case"Low":
            return 2;
        case 3:
        case"Balanced":
            return 3;
        case 4:
        case"Best":
            return 4;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function da(u) {
    switch (u) {
        case 0:
            return "NotSet";
        case 2:
            return "Low";
        case 3:
            return "Balanced";
        case 4:
            return "Best";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var i0 = (u => (u[u.Keyboard = 0] = "Keyboard", u[u.Clipboard = 2] = "Clipboard", u[u.Audio = 3] = "Audio", u[u.File = 4] = "File", u[u.Restart = 5] = "Restart", u[u.Recording = 6] = "Recording", u[u.BlockInput = 7] = "BlockInput", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(i0 || {});

function ca(u) {
    switch (u) {
        case 0:
        case"Keyboard":
            return 0;
        case 2:
        case"Clipboard":
            return 2;
        case 3:
        case"Audio":
            return 3;
        case 4:
        case"File":
            return 4;
        case 5:
        case"Restart":
            return 5;
        case 6:
        case"Recording":
            return 6;
        case 7:
        case"BlockInput":
            return 7;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function Ca(u) {
    switch (u) {
        case 0:
            return "Keyboard";
        case 2:
            return "Clipboard";
        case 3:
            return "Audio";
        case 4:
            return "File";
        case 5:
            return "Restart";
        case 6:
            return "Recording";
        case 7:
            return "BlockInput";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var mu = (u => (u[u.Auto = 0] = "Auto", u[u.VP9 = 1] = "VP9", u[u.H264 = 2] = "H264", u[u.H265 = 3] = "H265", u[u.VP8 = 4] = "VP8", u[u.AV1 = 5] = "AV1", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(mu || {});

function pa(u) {
    switch (u) {
        case 0:
        case"Auto":
            return 0;
        case 1:
        case"VP9":
            return 1;
        case 2:
        case"H264":
            return 2;
        case 3:
        case"H265":
            return 3;
        case 4:
        case"VP8":
            return 4;
        case 5:
        case"AV1":
            return 5;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function Da(u) {
    switch (u) {
        case 0:
            return "Auto";
        case 1:
            return "VP9";
        case 2:
            return "H264";
        case 3:
            return "H265";
        case 4:
            return "VP8";
        case 5:
            return "AV1";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var x = (u => (u[u.NotSet = 0] = "NotSet", u[u.No = 1] = "No", u[u.Yes = 2] = "Yes", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(x || {});

function iu(u) {
    switch (u) {
        case 0:
        case"NotSet":
            return 0;
        case 1:
        case"No":
            return 1;
        case 2:
        case"Yes":
            return 2;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function tu(u) {
    switch (u) {
        case 0:
            return "NotSet";
        case 1:
            return "No";
        case 2:
            return "Yes";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var D4 = (u => (u[u.BlkStateUnknown = 0] = "BlkStateUnknown", u[u.BlkOnSucceeded = 2] = "BlkOnSucceeded", u[u.BlkOnFailed = 3] = "BlkOnFailed", u[u.BlkOffSucceeded = 4] = "BlkOffSucceeded", u[u.BlkOffFailed = 5] = "BlkOffFailed", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(D4 || {});

function Ba(u) {
    switch (u) {
        case 0:
        case"BlkStateUnknown":
            return 0;
        case 2:
        case"BlkOnSucceeded":
            return 2;
        case 3:
        case"BlkOnFailed":
            return 3;
        case 4:
        case"BlkOffSucceeded":
            return 4;
        case 5:
        case"BlkOffFailed":
            return 5;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function Aa(u) {
    switch (u) {
        case 0:
            return "BlkStateUnknown";
        case 2:
            return "BlkOnSucceeded";
        case 3:
            return "BlkOnFailed";
        case 4:
            return "BlkOffSucceeded";
        case 5:
            return "BlkOffFailed";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var au = (u => (u[u.PrvStateUnknown = 0] = "PrvStateUnknown", u[u.PrvOnByOther = 2] = "PrvOnByOther", u[u.PrvNotSupported = 3] = "PrvNotSupported", u[u.PrvOnSucceeded = 4] = "PrvOnSucceeded", u[u.PrvOnFailedDenied = 5] = "PrvOnFailedDenied", u[u.PrvOnFailedPlugin = 6] = "PrvOnFailedPlugin", u[u.PrvOnFailed = 7] = "PrvOnFailed", u[u.PrvOffSucceeded = 8] = "PrvOffSucceeded", u[u.PrvOffByPeer = 9] = "PrvOffByPeer", u[u.PrvOffFailed = 10] = "PrvOffFailed", u[u.PrvOffUnknown = 11] = "PrvOffUnknown", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(au || {});

function ma(u) {
    switch (u) {
        case 0:
        case"PrvStateUnknown":
            return 0;
        case 2:
        case"PrvOnByOther":
            return 2;
        case 3:
        case"PrvNotSupported":
            return 3;
        case 4:
        case"PrvOnSucceeded":
            return 4;
        case 5:
        case"PrvOnFailedDenied":
            return 5;
        case 6:
        case"PrvOnFailedPlugin":
            return 6;
        case 7:
        case"PrvOnFailed":
            return 7;
        case 8:
        case"PrvOffSucceeded":
            return 8;
        case 9:
        case"PrvOffByPeer":
            return 9;
        case 10:
        case"PrvOffFailed":
            return 10;
        case 11:
        case"PrvOffUnknown":
            return 11;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function Fa(u) {
    switch (u) {
        case 0:
            return "PrvStateUnknown";
        case 2:
            return "PrvOnByOther";
        case 3:
            return "PrvNotSupported";
        case 4:
            return "PrvOnSucceeded";
        case 5:
            return "PrvOnFailedDenied";
        case 6:
            return "PrvOnFailedPlugin";
        case 7:
            return "PrvOnFailed";
        case 8:
            return "PrvOffSucceeded";
        case 9:
            return "PrvOffByPeer";
        case 10:
            return "PrvOffFailed";
        case 11:
            return "PrvOffUnknown";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

function Ie() {
    return {data: new Uint8Array(0), key: !1, pts: 0}
}

const t0 = {
    encode(u, e = r.Writer.create()) {
        return u.data.length !== 0 && e.uint32(10).bytes(u.data), u.key !== !1 && e.uint32(16).bool(u.key), u.pts !== 0 && e.uint32(24).int64(u.pts), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ie();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.data = i.bytes();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.key = i.bool();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.pts = V(i.int64());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            data: n(u.data) ? z(u.data) : new Uint8Array(0),
            key: n(u.key) ? globalThis.Boolean(u.key) : !1,
            pts: n(u.pts) ? globalThis.Number(u.pts) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.data.length !== 0 && (e.data = P(u.data)), u.key !== !1 && (e.key = u.key), u.pts !== 0 && (e.pts = Math.round(u.pts)), e
    }, create(u) {
        return t0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = Ie();
        return e.data = (i = u.data) != null ? i : new Uint8Array(0), e.key = (o = u.key) != null ? o : !1, e.pts = (a = u.pts) != null ? a : 0, e
    }
};

function Te() {
    return {frames: []}
}

const k = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.frames) t0.encode(i, e.uint32(10).fork()).ldelim();
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Te();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.frames.push(t0.decode(i, i.uint32()));
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {frames: globalThis.Array.isArray(u == null ? void 0 : u.frames) ? u.frames.map(e => t0.fromJSON(e)) : []}
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.frames) != null && i.length && (e.frames = u.frames.map(o => t0.toJSON(o))), e
    }, create(u) {
        return k.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Te();
        return e.frames = ((i = u.frames) == null ? void 0 : i.map(o => t0.fromPartial(o))) || [], e
    }
};

function je() {
    return {compress: !1}
}

const a0 = {
    encode(u, e = r.Writer.create()) {
        return u.compress !== !1 && e.uint32(8).bool(u.compress), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = je();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.compress = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {compress: n(u.compress) ? globalThis.Boolean(u.compress) : !1}
    }, toJSON(u) {
        const e = {};
        return u.compress !== !1 && (e.compress = u.compress), e
    }, create(u) {
        return a0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = je();
        return e.compress = (i = u.compress) != null ? i : !1, e
    }
};

function Ne() {
    return {compress: !1, stride: 0}
}

const o0 = {
    encode(u, e = r.Writer.create()) {
        return u.compress !== !1 && e.uint32(8).bool(u.compress), u.stride !== 0 && e.uint32(16).int32(u.stride), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ne();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.compress = i.bool();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.stride = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            compress: n(u.compress) ? globalThis.Boolean(u.compress) : !1,
            stride: n(u.stride) ? globalThis.Number(u.stride) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.compress !== !1 && (e.compress = u.compress), u.stride !== 0 && (e.stride = Math.round(u.stride)), e
    }, create(u) {
        return o0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Ne();
        return e.compress = (i = u.compress) != null ? i : !1, e.stride = (o = u.stride) != null ? o : 0, e
    }
};

function Oe() {
    return {
        vp9s: void 0,
        rgb: void 0,
        yuv: void 0,
        h264s: void 0,
        h265s: void 0,
        vp8s: void 0,
        av1s: void 0,
        display: 0
    }
}

const n0 = {
    encode(u, e = r.Writer.create()) {
        return u.vp9s !== void 0 && k.encode(u.vp9s, e.uint32(50).fork()).ldelim(), u.rgb !== void 0 && a0.encode(u.rgb, e.uint32(58).fork()).ldelim(), u.yuv !== void 0 && o0.encode(u.yuv, e.uint32(66).fork()).ldelim(), u.h264s !== void 0 && k.encode(u.h264s, e.uint32(82).fork()).ldelim(), u.h265s !== void 0 && k.encode(u.h265s, e.uint32(90).fork()).ldelim(), u.vp8s !== void 0 && k.encode(u.vp8s, e.uint32(98).fork()).ldelim(), u.av1s !== void 0 && k.encode(u.av1s, e.uint32(106).fork()).ldelim(), u.display !== 0 && e.uint32(112).int32(u.display), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Oe();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 6:
                    if (t !== 50) break;
                    a.vp9s = k.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.rgb = a0.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.yuv = o0.decode(i, i.uint32());
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.h264s = k.decode(i, i.uint32());
                    continue;
                case 11:
                    if (t !== 90) break;
                    a.h265s = k.decode(i, i.uint32());
                    continue;
                case 12:
                    if (t !== 98) break;
                    a.vp8s = k.decode(i, i.uint32());
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.av1s = k.decode(i, i.uint32());
                    continue;
                case 14:
                    if (t !== 112) break;
                    a.display = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            vp9s: n(u.vp9s) ? k.fromJSON(u.vp9s) : void 0,
            rgb: n(u.rgb) ? a0.fromJSON(u.rgb) : void 0,
            yuv: n(u.yuv) ? o0.fromJSON(u.yuv) : void 0,
            h264s: n(u.h264s) ? k.fromJSON(u.h264s) : void 0,
            h265s: n(u.h265s) ? k.fromJSON(u.h265s) : void 0,
            vp8s: n(u.vp8s) ? k.fromJSON(u.vp8s) : void 0,
            av1s: n(u.av1s) ? k.fromJSON(u.av1s) : void 0,
            display: n(u.display) ? globalThis.Number(u.display) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.vp9s !== void 0 && (e.vp9s = k.toJSON(u.vp9s)), u.rgb !== void 0 && (e.rgb = a0.toJSON(u.rgb)), u.yuv !== void 0 && (e.yuv = o0.toJSON(u.yuv)), u.h264s !== void 0 && (e.h264s = k.toJSON(u.h264s)), u.h265s !== void 0 && (e.h265s = k.toJSON(u.h265s)), u.vp8s !== void 0 && (e.vp8s = k.toJSON(u.vp8s)), u.av1s !== void 0 && (e.av1s = k.toJSON(u.av1s)), u.display !== 0 && (e.display = Math.round(u.display)), e
    }, create(u) {
        return n0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Oe();
        return e.vp9s = u.vp9s !== void 0 && u.vp9s !== null ? k.fromPartial(u.vp9s) : void 0, e.rgb = u.rgb !== void 0 && u.rgb !== null ? a0.fromPartial(u.rgb) : void 0, e.yuv = u.yuv !== void 0 && u.yuv !== null ? o0.fromPartial(u.yuv) : void 0, e.h264s = u.h264s !== void 0 && u.h264s !== null ? k.fromPartial(u.h264s) : void 0, e.h265s = u.h265s !== void 0 && u.h265s !== null ? k.fromPartial(u.h265s) : void 0, e.vp8s = u.vp8s !== void 0 && u.vp8s !== null ? k.fromPartial(u.vp8s) : void 0, e.av1s = u.av1s !== void 0 && u.av1s !== null ? k.fromPartial(u.av1s) : void 0, e.display = (i = u.display) != null ? i : 0, e
    }
};

function Me() {
    return {id: "", pk: new Uint8Array(0)}
}

const te = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.pk.length !== 0 && e.uint32(18).bytes(u.pk), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Me();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.pk = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.String(u.id) : "", pk: n(u.pk) ? z(u.pk) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.pk.length !== 0 && (e.pk = P(u.pk)), e
    }, create(u) {
        return te.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Me();
        return e.id = (i = u.id) != null ? i : "", e.pk = (o = u.pk) != null ? o : new Uint8Array(0), e
    }
};

function Le() {
    return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        name: "",
        online: !1,
        cursor_embedded: !1,
        original_resolution: void 0,
        scale: 0
    }
}

const r0 = {
    encode(u, e = r.Writer.create()) {
        return u.x !== 0 && e.uint32(8).sint32(u.x), u.y !== 0 && e.uint32(16).sint32(u.y), u.width !== 0 && e.uint32(24).int32(u.width), u.height !== 0 && e.uint32(32).int32(u.height), u.name !== "" && e.uint32(42).string(u.name), u.online !== !1 && e.uint32(48).bool(u.online), u.cursor_embedded !== !1 && e.uint32(56).bool(u.cursor_embedded), u.original_resolution !== void 0 && v.encode(u.original_resolution, e.uint32(66).fork()).ldelim(), u.scale !== 0 && e.uint32(73).double(u.scale), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Le();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.x = i.sint32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.y = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.width = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.height = i.int32();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.name = i.string();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.online = i.bool();
                    continue;
                case 7:
                    if (t !== 56) break;
                    a.cursor_embedded = i.bool();
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.original_resolution = v.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 73) break;
                    a.scale = i.double();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            x: n(u.x) ? globalThis.Number(u.x) : 0,
            y: n(u.y) ? globalThis.Number(u.y) : 0,
            width: n(u.width) ? globalThis.Number(u.width) : 0,
            height: n(u.height) ? globalThis.Number(u.height) : 0,
            name: n(u.name) ? globalThis.String(u.name) : "",
            online: n(u.online) ? globalThis.Boolean(u.online) : !1,
            cursor_embedded: n(u.cursor_embedded) ? globalThis.Boolean(u.cursor_embedded) : !1,
            original_resolution: n(u.original_resolution) ? v.fromJSON(u.original_resolution) : void 0,
            scale: n(u.scale) ? globalThis.Number(u.scale) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), u.width !== 0 && (e.width = Math.round(u.width)), u.height !== 0 && (e.height = Math.round(u.height)), u.name !== "" && (e.name = u.name), u.online !== !1 && (e.online = u.online), u.cursor_embedded !== !1 && (e.cursor_embedded = u.cursor_embedded), u.original_resolution !== void 0 && (e.original_resolution = v.toJSON(u.original_resolution)), u.scale !== 0 && (e.scale = u.scale), e
    }, create(u) {
        return r0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = Le();
        return e.x = (i = u.x) != null ? i : 0, e.y = (o = u.y) != null ? o : 0, e.width = (a = u.width) != null ? a : 0, e.height = (t = u.height) != null ? t : 0, e.name = (s = u.name) != null ? s : "", e.online = (l = u.online) != null ? l : !1, e.cursor_embedded = (E = u.cursor_embedded) != null ? E : !1, e.original_resolution = u.original_resolution !== void 0 && u.original_resolution !== null ? v.fromPartial(u.original_resolution) : void 0, e.scale = (c = u.scale) != null ? c : 0, e
    }
};

function Ue() {
    return {host: "", port: 0}
}

const s0 = {
    encode(u, e = r.Writer.create()) {
        return u.host !== "" && e.uint32(10).string(u.host), u.port !== 0 && e.uint32(16).int32(u.port), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ue();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.host = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.port = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {host: n(u.host) ? globalThis.String(u.host) : "", port: n(u.port) ? globalThis.Number(u.port) : 0}
    }, toJSON(u) {
        const e = {};
        return u.host !== "" && (e.host = u.host), u.port !== 0 && (e.port = Math.round(u.port)), e
    }, create(u) {
        return s0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Ue();
        return e.host = (i = u.host) != null ? i : "", e.port = (o = u.port) != null ? o : 0, e
    }
};

function We() {
    return {dir: "", show_hidden: !1}
}

const Fu = {
    encode(u, e = r.Writer.create()) {
        return u.dir !== "" && e.uint32(10).string(u.dir), u.show_hidden !== !1 && e.uint32(16).bool(u.show_hidden), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = We();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.dir = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.show_hidden = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            dir: n(u.dir) ? globalThis.String(u.dir) : "",
            show_hidden: n(u.show_hidden) ? globalThis.Boolean(u.show_hidden) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.dir !== "" && (e.dir = u.dir), u.show_hidden !== !1 && (e.show_hidden = u.show_hidden), e
    }, create(u) {
        return Fu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = We();
        return e.dir = (i = u.dir) != null ? i : "", e.show_hidden = (o = u.show_hidden) != null ? o : !1, e
    }
};

function Ve() {
    return {username: "", password: ""}
}

const l0 = {
    encode(u, e = r.Writer.create()) {
        return u.username !== "" && e.uint32(10).string(u.username), u.password !== "" && e.uint32(18).string(u.password), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ve();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.username = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.password = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            username: n(u.username) ? globalThis.String(u.username) : "",
            password: n(u.password) ? globalThis.String(u.password) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.username !== "" && (e.username = u.username), u.password !== "" && (e.password = u.password), e
    }, create(u) {
        return l0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Ve();
        return e.username = (i = u.username) != null ? i : "", e.password = (o = u.password) != null ? o : "", e
    }
};

function qe() {
    return {
        username: "",
        password: new Uint8Array(0),
        my_id: "",
        my_name: "",
        option: void 0,
        file_transfer: void 0,
        port_forward: void 0,
        video_ack_required: !1,
        session_id: 0,
        version: "",
        os_login: void 0,
        my_platform: "",
        hwid: new Uint8Array(0)
    }
}

const H = {
    encode(u, e = r.Writer.create()) {
        return u.username !== "" && e.uint32(10).string(u.username), u.password.length !== 0 && e.uint32(18).bytes(u.password), u.my_id !== "" && e.uint32(34).string(u.my_id), u.my_name !== "" && e.uint32(42).string(u.my_name), u.option !== void 0 && S.encode(u.option, e.uint32(50).fork()).ldelim(), u.file_transfer !== void 0 && Fu.encode(u.file_transfer, e.uint32(58).fork()).ldelim(), u.port_forward !== void 0 && s0.encode(u.port_forward, e.uint32(66).fork()).ldelim(), u.video_ack_required !== !1 && e.uint32(72).bool(u.video_ack_required), u.session_id !== 0 && e.uint32(80).uint64(u.session_id), u.version !== "" && e.uint32(90).string(u.version), u.os_login !== void 0 && l0.encode(u.os_login, e.uint32(98).fork()).ldelim(), u.my_platform !== "" && e.uint32(106).string(u.my_platform), u.hwid.length !== 0 && e.uint32(114).bytes(u.hwid), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = qe();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.username = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.password = i.bytes();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.my_id = i.string();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.my_name = i.string();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.option = S.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.file_transfer = Fu.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.port_forward = s0.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 72) break;
                    a.video_ack_required = i.bool();
                    continue;
                case 10:
                    if (t !== 80) break;
                    a.session_id = V(i.uint64());
                    continue;
                case 11:
                    if (t !== 90) break;
                    a.version = i.string();
                    continue;
                case 12:
                    if (t !== 98) break;
                    a.os_login = l0.decode(i, i.uint32());
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.my_platform = i.string();
                    continue;
                case 14:
                    if (t !== 114) break;
                    a.hwid = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            username: n(u.username) ? globalThis.String(u.username) : "",
            password: n(u.password) ? z(u.password) : new Uint8Array(0),
            my_id: n(u.my_id) ? globalThis.String(u.my_id) : "",
            my_name: n(u.my_name) ? globalThis.String(u.my_name) : "",
            option: n(u.option) ? S.fromJSON(u.option) : void 0,
            file_transfer: n(u.file_transfer) ? Fu.fromJSON(u.file_transfer) : void 0,
            port_forward: n(u.port_forward) ? s0.fromJSON(u.port_forward) : void 0,
            video_ack_required: n(u.video_ack_required) ? globalThis.Boolean(u.video_ack_required) : !1,
            session_id: n(u.session_id) ? globalThis.Number(u.session_id) : 0,
            version: n(u.version) ? globalThis.String(u.version) : "",
            os_login: n(u.os_login) ? l0.fromJSON(u.os_login) : void 0,
            my_platform: n(u.my_platform) ? globalThis.String(u.my_platform) : "",
            hwid: n(u.hwid) ? z(u.hwid) : new Uint8Array(0)
        }
    }, toJSON(u) {
        const e = {};
        return u.username !== "" && (e.username = u.username), u.password.length !== 0 && (e.password = P(u.password)), u.my_id !== "" && (e.my_id = u.my_id), u.my_name !== "" && (e.my_name = u.my_name), u.option !== void 0 && (e.option = S.toJSON(u.option)), u.file_transfer !== void 0 && (e.file_transfer = Fu.toJSON(u.file_transfer)), u.port_forward !== void 0 && (e.port_forward = s0.toJSON(u.port_forward)), u.video_ack_required !== !1 && (e.video_ack_required = u.video_ack_required), u.session_id !== 0 && (e.session_id = Math.round(u.session_id)), u.version !== "" && (e.version = u.version), u.os_login !== void 0 && (e.os_login = l0.toJSON(u.os_login)), u.my_platform !== "" && (e.my_platform = u.my_platform), u.hwid.length !== 0 && (e.hwid = P(u.hwid)), e
    }, create(u) {
        return H.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c, C;
        const e = qe();
        return e.username = (i = u.username) != null ? i : "", e.password = (o = u.password) != null ? o : new Uint8Array(0), e.my_id = (a = u.my_id) != null ? a : "", e.my_name = (t = u.my_name) != null ? t : "", e.option = u.option !== void 0 && u.option !== null ? S.fromPartial(u.option) : void 0, e.file_transfer = u.file_transfer !== void 0 && u.file_transfer !== null ? Fu.fromPartial(u.file_transfer) : void 0, e.port_forward = u.port_forward !== void 0 && u.port_forward !== null ? s0.fromPartial(u.port_forward) : void 0, e.video_ack_required = (s = u.video_ack_required) != null ? s : !1, e.session_id = (l = u.session_id) != null ? l : 0, e.version = (E = u.version) != null ? E : "", e.os_login = u.os_login !== void 0 && u.os_login !== null ? l0.fromPartial(u.os_login) : void 0, e.my_platform = (c = u.my_platform) != null ? c : "", e.hwid = (C = u.hwid) != null ? C : new Uint8Array(0), e
    }
};

function Ke() {
    return {code: "", hwid: new Uint8Array(0)}
}

const _u = {
    encode(u, e = r.Writer.create()) {
        return u.code !== "" && e.uint32(10).string(u.code), u.hwid.length !== 0 && e.uint32(18).bytes(u.hwid), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ke();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.code = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.hwid = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {code: n(u.code) ? globalThis.String(u.code) : "", hwid: n(u.hwid) ? z(u.hwid) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.code !== "" && (e.code = u.code), u.hwid.length !== 0 && (e.hwid = P(u.hwid)), e
    }, create(u) {
        return _u.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Ke();
        return e.code = (i = u.code) != null ? i : "", e.hwid = (o = u.hwid) != null ? o : new Uint8Array(0), e
    }
};

function He() {
    return {text: ""}
}

const vu = {
    encode(u, e = r.Writer.create()) {
        return u.text !== "" && e.uint32(10).string(u.text), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = He();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.text = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {text: n(u.text) ? globalThis.String(u.text) : ""}
    }, toJSON(u) {
        const e = {};
        return u.text !== "" && (e.text = u.text), e
    }, create(u) {
        return vu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = He();
        return e.text = (i = u.text) != null ? i : "", e
    }
};

function Je() {
    return {privacy_mode: !1}
}

const E0 = {
    encode(u, e = r.Writer.create()) {
        return u.privacy_mode !== !1 && e.uint32(8).bool(u.privacy_mode), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Je();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.privacy_mode = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {privacy_mode: n(u.privacy_mode) ? globalThis.Boolean(u.privacy_mode) : !1}
    }, toJSON(u) {
        const e = {};
        return u.privacy_mode !== !1 && (e.privacy_mode = u.privacy_mode), e
    }, create(u) {
        return E0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Je();
        return e.privacy_mode = (i = u.privacy_mode) != null ? i : !1, e
    }
};

function Ge() {
    return {vp8: !1, vp9: !1, av1: !1, h264: !1, h265: !1}
}

const J = {
    encode(u, e = r.Writer.create()) {
        return u.vp8 !== !1 && e.uint32(8).bool(u.vp8), u.vp9 !== !1 && e.uint32(16).bool(u.vp9), u.av1 !== !1 && e.uint32(24).bool(u.av1), u.h264 !== !1 && e.uint32(32).bool(u.h264), u.h265 !== !1 && e.uint32(40).bool(u.h265), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ge();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.vp8 = i.bool();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.vp9 = i.bool();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.av1 = i.bool();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.h264 = i.bool();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.h265 = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            vp8: n(u.vp8) ? globalThis.Boolean(u.vp8) : !1,
            vp9: n(u.vp9) ? globalThis.Boolean(u.vp9) : !1,
            av1: n(u.av1) ? globalThis.Boolean(u.av1) : !1,
            h264: n(u.h264) ? globalThis.Boolean(u.h264) : !1,
            h265: n(u.h265) ? globalThis.Boolean(u.h265) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.vp8 !== !1 && (e.vp8 = u.vp8), u.vp9 !== !1 && (e.vp9 = u.vp9), u.av1 !== !1 && (e.av1 = u.av1), u.h264 !== !1 && (e.h264 = u.h264), u.h265 !== !1 && (e.h265 = u.h265), e
    }, create(u) {
        return J.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = Ge();
        return e.vp8 = (i = u.vp8) != null ? i : !1, e.vp9 = (o = u.vp9) != null ? o : !1, e.av1 = (a = u.av1) != null ? a : !1, e.h264 = (t = u.h264) != null ? t : !1, e.h265 = (s = u.h265) != null ? s : !1, e
    }
};

function Ze() {
    return {h264: !1, h265: !1, vp8: !1, av1: !1, i444: void 0}
}

const G = {
    encode(u, e = r.Writer.create()) {
        return u.h264 !== !1 && e.uint32(8).bool(u.h264), u.h265 !== !1 && e.uint32(16).bool(u.h265), u.vp8 !== !1 && e.uint32(24).bool(u.vp8), u.av1 !== !1 && e.uint32(32).bool(u.av1), u.i444 !== void 0 && J.encode(u.i444, e.uint32(42).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ze();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.h264 = i.bool();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.h265 = i.bool();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.vp8 = i.bool();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.av1 = i.bool();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.i444 = J.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            h264: n(u.h264) ? globalThis.Boolean(u.h264) : !1,
            h265: n(u.h265) ? globalThis.Boolean(u.h265) : !1,
            vp8: n(u.vp8) ? globalThis.Boolean(u.vp8) : !1,
            av1: n(u.av1) ? globalThis.Boolean(u.av1) : !1,
            i444: n(u.i444) ? J.fromJSON(u.i444) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.h264 !== !1 && (e.h264 = u.h264), u.h265 !== !1 && (e.h265 = u.h265), u.vp8 !== !1 && (e.vp8 = u.vp8), u.av1 !== !1 && (e.av1 = u.av1), u.i444 !== void 0 && (e.i444 = J.toJSON(u.i444)), e
    }, create(u) {
        return G.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = Ze();
        return e.h264 = (i = u.h264) != null ? i : !1, e.h265 = (o = u.h265) != null ? o : !1, e.vp8 = (a = u.vp8) != null ? a : !1, e.av1 = (t = u.av1) != null ? t : !1, e.i444 = u.i444 !== void 0 && u.i444 !== null ? J.fromPartial(u.i444) : void 0, e
    }
};

function Qe() {
    return {
        username: "",
        hostname: "",
        platform: "",
        displays: [],
        current_display: 0,
        sas_enabled: !1,
        version: "",
        features: void 0,
        encoding: void 0,
        resolutions: void 0,
        platform_additions: "",
        windows_sessions: void 0
    }
}

const Y = {
    encode(u, e = r.Writer.create()) {
        u.username !== "" && e.uint32(10).string(u.username), u.hostname !== "" && e.uint32(18).string(u.hostname), u.platform !== "" && e.uint32(26).string(u.platform);
        for (const i of u.displays) r0.encode(i, e.uint32(34).fork()).ldelim();
        return u.current_display !== 0 && e.uint32(40).int32(u.current_display), u.sas_enabled !== !1 && e.uint32(48).bool(u.sas_enabled), u.version !== "" && e.uint32(58).string(u.version), u.features !== void 0 && E0.encode(u.features, e.uint32(74).fork()).ldelim(), u.encoding !== void 0 && G.encode(u.encoding, e.uint32(82).fork()).ldelim(), u.resolutions !== void 0 && $.encode(u.resolutions, e.uint32(90).fork()).ldelim(), u.platform_additions !== "" && e.uint32(98).string(u.platform_additions), u.windows_sessions !== void 0 && q0.encode(u.windows_sessions, e.uint32(106).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Qe();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.username = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.hostname = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.platform = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.displays.push(r0.decode(i, i.uint32()));
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.current_display = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.sas_enabled = i.bool();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.version = i.string();
                    continue;
                case 9:
                    if (t !== 74) break;
                    a.features = E0.decode(i, i.uint32());
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.encoding = G.decode(i, i.uint32());
                    continue;
                case 11:
                    if (t !== 90) break;
                    a.resolutions = $.decode(i, i.uint32());
                    continue;
                case 12:
                    if (t !== 98) break;
                    a.platform_additions = i.string();
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.windows_sessions = q0.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            username: n(u.username) ? globalThis.String(u.username) : "",
            hostname: n(u.hostname) ? globalThis.String(u.hostname) : "",
            platform: n(u.platform) ? globalThis.String(u.platform) : "",
            displays: globalThis.Array.isArray(u == null ? void 0 : u.displays) ? u.displays.map(e => r0.fromJSON(e)) : [],
            current_display: n(u.current_display) ? globalThis.Number(u.current_display) : 0,
            sas_enabled: n(u.sas_enabled) ? globalThis.Boolean(u.sas_enabled) : !1,
            version: n(u.version) ? globalThis.String(u.version) : "",
            features: n(u.features) ? E0.fromJSON(u.features) : void 0,
            encoding: n(u.encoding) ? G.fromJSON(u.encoding) : void 0,
            resolutions: n(u.resolutions) ? $.fromJSON(u.resolutions) : void 0,
            platform_additions: n(u.platform_additions) ? globalThis.String(u.platform_additions) : "",
            windows_sessions: n(u.windows_sessions) ? q0.fromJSON(u.windows_sessions) : void 0
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.username !== "" && (e.username = u.username), u.hostname !== "" && (e.hostname = u.hostname), u.platform !== "" && (e.platform = u.platform), (i = u.displays) != null && i.length && (e.displays = u.displays.map(o => r0.toJSON(o))), u.current_display !== 0 && (e.current_display = Math.round(u.current_display)), u.sas_enabled !== !1 && (e.sas_enabled = u.sas_enabled), u.version !== "" && (e.version = u.version), u.features !== void 0 && (e.features = E0.toJSON(u.features)), u.encoding !== void 0 && (e.encoding = G.toJSON(u.encoding)), u.resolutions !== void 0 && (e.resolutions = $.toJSON(u.resolutions)), u.platform_additions !== "" && (e.platform_additions = u.platform_additions), u.windows_sessions !== void 0 && (e.windows_sessions = q0.toJSON(u.windows_sessions)), e
    }, create(u) {
        return Y.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = Qe();
        return e.username = (i = u.username) != null ? i : "", e.hostname = (o = u.hostname) != null ? o : "", e.platform = (a = u.platform) != null ? a : "", e.displays = ((t = u.displays) == null ? void 0 : t.map(C => r0.fromPartial(C))) || [], e.current_display = (s = u.current_display) != null ? s : 0, e.sas_enabled = (l = u.sas_enabled) != null ? l : !1, e.version = (E = u.version) != null ? E : "", e.features = u.features !== void 0 && u.features !== null ? E0.fromPartial(u.features) : void 0, e.encoding = u.encoding !== void 0 && u.encoding !== null ? G.fromPartial(u.encoding) : void 0, e.resolutions = u.resolutions !== void 0 && u.resolutions !== null ? $.fromPartial(u.resolutions) : void 0, e.platform_additions = (c = u.platform_additions) != null ? c : "", e.windows_sessions = u.windows_sessions !== void 0 && u.windows_sessions !== null ? q0.fromPartial(u.windows_sessions) : void 0, e
    }
};

function Xe() {
    return {sid: 0, name: ""}
}

const d0 = {
    encode(u, e = r.Writer.create()) {
        return u.sid !== 0 && e.uint32(8).uint32(u.sid), u.name !== "" && e.uint32(18).string(u.name), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Xe();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.sid = i.uint32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.name = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {sid: n(u.sid) ? globalThis.Number(u.sid) : 0, name: n(u.name) ? globalThis.String(u.name) : ""}
    }, toJSON(u) {
        const e = {};
        return u.sid !== 0 && (e.sid = Math.round(u.sid)), u.name !== "" && (e.name = u.name), e
    }, create(u) {
        return d0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Xe();
        return e.sid = (i = u.sid) != null ? i : 0, e.name = (o = u.name) != null ? o : "", e
    }
};

function Ye() {
    return {error: void 0, peer_info: void 0, enable_trusted_devices: !1}
}

const c0 = {
    encode(u, e = r.Writer.create()) {
        return u.error !== void 0 && e.uint32(10).string(u.error), u.peer_info !== void 0 && Y.encode(u.peer_info, e.uint32(18).fork()).ldelim(), u.enable_trusted_devices !== !1 && e.uint32(24).bool(u.enable_trusted_devices), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ye();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.error = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.peer_info = Y.decode(i, i.uint32());
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.enable_trusted_devices = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            error: n(u.error) ? globalThis.String(u.error) : void 0,
            peer_info: n(u.peer_info) ? Y.fromJSON(u.peer_info) : void 0,
            enable_trusted_devices: n(u.enable_trusted_devices) ? globalThis.Boolean(u.enable_trusted_devices) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.error !== void 0 && (e.error = u.error), u.peer_info !== void 0 && (e.peer_info = Y.toJSON(u.peer_info)), u.enable_trusted_devices !== !1 && (e.enable_trusted_devices = u.enable_trusted_devices), e
    }, create(u) {
        return c0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Ye();
        return e.error = (i = u.error) != null ? i : void 0, e.peer_info = u.peer_info !== void 0 && u.peer_info !== null ? Y.fromPartial(u.peer_info) : void 0, e.enable_trusted_devices = (o = u.enable_trusted_devices) != null ? o : !1, e
    }
};

function $e() {
    return {scale: 0}
}

const C0 = {
    encode(u, e = r.Writer.create()) {
        return u.scale !== 0 && e.uint32(8).int32(u.scale), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = $e();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.scale = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {scale: n(u.scale) ? globalThis.Number(u.scale) : 0}
    }, toJSON(u) {
        const e = {};
        return u.scale !== 0 && (e.scale = Math.round(u.scale)), e
    }, create(u) {
        return C0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = $e();
        return e.scale = (i = u.scale) != null ? i : 0, e
    }
};

function u3() {
    return {x: 0, y: 0}
}

const p0 = {
    encode(u, e = r.Writer.create()) {
        return u.x !== 0 && e.uint32(8).int32(u.x), u.y !== 0 && e.uint32(16).int32(u.y), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = u3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.x = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.y = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {x: n(u.x) ? globalThis.Number(u.x) : 0, y: n(u.y) ? globalThis.Number(u.y) : 0}
    }, toJSON(u) {
        const e = {};
        return u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), e
    }, create(u) {
        return p0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = u3();
        return e.x = (i = u.x) != null ? i : 0, e.y = (o = u.y) != null ? o : 0, e
    }
};

function e3() {
    return {x: 0, y: 0}
}

const D0 = {
    encode(u, e = r.Writer.create()) {
        return u.x !== 0 && e.uint32(8).int32(u.x), u.y !== 0 && e.uint32(16).int32(u.y), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = e3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.x = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.y = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {x: n(u.x) ? globalThis.Number(u.x) : 0, y: n(u.y) ? globalThis.Number(u.y) : 0}
    }, toJSON(u) {
        const e = {};
        return u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), e
    }, create(u) {
        return D0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = e3();
        return e.x = (i = u.x) != null ? i : 0, e.y = (o = u.y) != null ? o : 0, e
    }
};

function i3() {
    return {x: 0, y: 0}
}

const B0 = {
    encode(u, e = r.Writer.create()) {
        return u.x !== 0 && e.uint32(8).int32(u.x), u.y !== 0 && e.uint32(16).int32(u.y), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = i3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.x = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.y = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {x: n(u.x) ? globalThis.Number(u.x) : 0, y: n(u.y) ? globalThis.Number(u.y) : 0}
    }, toJSON(u) {
        const e = {};
        return u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), e
    }, create(u) {
        return B0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = i3();
        return e.x = (i = u.x) != null ? i : 0, e.y = (o = u.y) != null ? o : 0, e
    }
};

function t3() {
    return {scale_update: void 0, pan_start: void 0, pan_update: void 0, pan_end: void 0}
}

const A0 = {
    encode(u, e = r.Writer.create()) {
        return u.scale_update !== void 0 && C0.encode(u.scale_update, e.uint32(10).fork()).ldelim(), u.pan_start !== void 0 && p0.encode(u.pan_start, e.uint32(18).fork()).ldelim(), u.pan_update !== void 0 && D0.encode(u.pan_update, e.uint32(26).fork()).ldelim(), u.pan_end !== void 0 && B0.encode(u.pan_end, e.uint32(34).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = t3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.scale_update = C0.decode(i, i.uint32());
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.pan_start = p0.decode(i, i.uint32());
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.pan_update = D0.decode(i, i.uint32());
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.pan_end = B0.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            scale_update: n(u.scale_update) ? C0.fromJSON(u.scale_update) : void 0,
            pan_start: n(u.pan_start) ? p0.fromJSON(u.pan_start) : void 0,
            pan_update: n(u.pan_update) ? D0.fromJSON(u.pan_update) : void 0,
            pan_end: n(u.pan_end) ? B0.fromJSON(u.pan_end) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.scale_update !== void 0 && (e.scale_update = C0.toJSON(u.scale_update)), u.pan_start !== void 0 && (e.pan_start = p0.toJSON(u.pan_start)), u.pan_update !== void 0 && (e.pan_update = D0.toJSON(u.pan_update)), u.pan_end !== void 0 && (e.pan_end = B0.toJSON(u.pan_end)), e
    }, create(u) {
        return A0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        const e = t3();
        return e.scale_update = u.scale_update !== void 0 && u.scale_update !== null ? C0.fromPartial(u.scale_update) : void 0, e.pan_start = u.pan_start !== void 0 && u.pan_start !== null ? p0.fromPartial(u.pan_start) : void 0, e.pan_update = u.pan_update !== void 0 && u.pan_update !== null ? D0.fromPartial(u.pan_update) : void 0, e.pan_end = u.pan_end !== void 0 && u.pan_end !== null ? B0.fromPartial(u.pan_end) : void 0, e
    }
};

function a3() {
    return {touch_event: void 0, modifiers: []}
}

const m0 = {
    encode(u, e = r.Writer.create()) {
        u.touch_event !== void 0 && A0.encode(u.touch_event, e.uint32(10).fork()).ldelim(), e.uint32(18).fork();
        for (const i of u.modifiers) e.int32(i);
        return e.ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = a3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.touch_event = A0.decode(i, i.uint32());
                    continue;
                case 2:
                    if (t === 16) {
                        a.modifiers.push(i.int32());
                        continue
                    }
                    if (t === 18) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.modifiers.push(i.int32());
                        continue
                    }
                    break
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            touch_event: n(u.touch_event) ? A0.fromJSON(u.touch_event) : void 0,
            modifiers: globalThis.Array.isArray(u == null ? void 0 : u.modifiers) ? u.modifiers.map(e => A4(e)) : []
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.touch_event !== void 0 && (e.touch_event = A0.toJSON(u.touch_event)), (i = u.modifiers) != null && i.length && (e.modifiers = u.modifiers.map(o => R4(o))), e
    }, create(u) {
        return m0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = a3();
        return e.touch_event = u.touch_event !== void 0 && u.touch_event !== null ? A0.fromPartial(u.touch_event) : void 0, e.modifiers = ((i = u.modifiers) == null ? void 0 : i.map(o => o)) || [], e
    }
};

function o3() {
    return {mask: 0, x: 0, y: 0, modifiers: []}
}

const ku = {
    encode(u, e = r.Writer.create()) {
        u.mask !== 0 && e.uint32(8).int32(u.mask), u.x !== 0 && e.uint32(16).sint32(u.x), u.y !== 0 && e.uint32(24).sint32(u.y), e.uint32(34).fork();
        for (const i of u.modifiers) e.int32(i);
        return e.ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = o3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.mask = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.x = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.y = i.sint32();
                    continue;
                case 4:
                    if (t === 32) {
                        a.modifiers.push(i.int32());
                        continue
                    }
                    if (t === 34) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.modifiers.push(i.int32());
                        continue
                    }
                    break
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            mask: n(u.mask) ? globalThis.Number(u.mask) : 0,
            x: n(u.x) ? globalThis.Number(u.x) : 0,
            y: n(u.y) ? globalThis.Number(u.y) : 0,
            modifiers: globalThis.Array.isArray(u == null ? void 0 : u.modifiers) ? u.modifiers.map(e => A4(e)) : []
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.mask !== 0 && (e.mask = Math.round(u.mask)), u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), (i = u.modifiers) != null && i.length && (e.modifiers = u.modifiers.map(o => R4(o))), e
    }, create(u) {
        return ku.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = o3();
        return e.mask = (i = u.mask) != null ? i : 0, e.x = (o = u.x) != null ? o : 0, e.y = (a = u.y) != null ? a : 0, e.modifiers = ((t = u.modifiers) == null ? void 0 : t.map(s => s)) || [], e
    }
};

function n3() {
    return {
        down: !1,
        press: !1,
        control_key: void 0,
        chr: void 0,
        unicode: void 0,
        seq: void 0,
        win2win_hotkey: void 0,
        modifiers: [],
        mode: 0
    }
}

const w = {
    encode(u, e = r.Writer.create()) {
        u.down !== !1 && e.uint32(8).bool(u.down), u.press !== !1 && e.uint32(16).bool(u.press), u.control_key !== void 0 && e.uint32(24).int32(u.control_key), u.chr !== void 0 && e.uint32(32).uint32(u.chr), u.unicode !== void 0 && e.uint32(40).uint32(u.unicode), u.seq !== void 0 && e.uint32(50).string(u.seq), u.win2win_hotkey !== void 0 && e.uint32(56).uint32(u.win2win_hotkey), e.uint32(66).fork();
        for (const i of u.modifiers) e.int32(i);
        return e.ldelim(), u.mode !== 0 && e.uint32(72).int32(u.mode), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = n3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.down = i.bool();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.press = i.bool();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.control_key = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.chr = i.uint32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.unicode = i.uint32();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.seq = i.string();
                    continue;
                case 7:
                    if (t !== 56) break;
                    a.win2win_hotkey = i.uint32();
                    continue;
                case 8:
                    if (t === 64) {
                        a.modifiers.push(i.int32());
                        continue
                    }
                    if (t === 66) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.modifiers.push(i.int32());
                        continue
                    }
                    break;
                case 9:
                    if (t !== 72) break;
                    a.mode = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            down: n(u.down) ? globalThis.Boolean(u.down) : !1,
            press: n(u.press) ? globalThis.Boolean(u.press) : !1,
            control_key: n(u.control_key) ? A4(u.control_key) : void 0,
            chr: n(u.chr) ? globalThis.Number(u.chr) : void 0,
            unicode: n(u.unicode) ? globalThis.Number(u.unicode) : void 0,
            seq: n(u.seq) ? globalThis.String(u.seq) : void 0,
            win2win_hotkey: n(u.win2win_hotkey) ? globalThis.Number(u.win2win_hotkey) : void 0,
            modifiers: globalThis.Array.isArray(u == null ? void 0 : u.modifiers) ? u.modifiers.map(e => A4(e)) : [],
            mode: n(u.mode) ? aa(u.mode) : 0
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.down !== !1 && (e.down = u.down), u.press !== !1 && (e.press = u.press), u.control_key !== void 0 && (e.control_key = R4(u.control_key)), u.chr !== void 0 && (e.chr = Math.round(u.chr)), u.unicode !== void 0 && (e.unicode = Math.round(u.unicode)), u.seq !== void 0 && (e.seq = u.seq), u.win2win_hotkey !== void 0 && (e.win2win_hotkey = Math.round(u.win2win_hotkey)), (i = u.modifiers) != null && i.length && (e.modifiers = u.modifiers.map(o => R4(o))), u.mode !== 0 && (e.mode = oa(u.mode)), e
    }, create(u) {
        return w.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c, C;
        const e = n3();
        return e.down = (i = u.down) != null ? i : !1, e.press = (o = u.press) != null ? o : !1, e.control_key = (a = u.control_key) != null ? a : void 0, e.chr = (t = u.chr) != null ? t : void 0, e.unicode = (s = u.unicode) != null ? s : void 0, e.seq = (l = u.seq) != null ? l : void 0, e.win2win_hotkey = (E = u.win2win_hotkey) != null ? E : void 0, e.modifiers = ((c = u.modifiers) == null ? void 0 : c.map(D => D)) || [], e.mode = (C = u.mode) != null ? C : 0, e
    }
};

function r3() {
    return {id: 0, hotx: 0, hoty: 0, width: 0, height: 0, colors: new Uint8Array(0)}
}

const F0 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).uint64(u.id), u.hotx !== 0 && e.uint32(16).sint32(u.hotx), u.hoty !== 0 && e.uint32(24).sint32(u.hoty), u.width !== 0 && e.uint32(32).int32(u.width), u.height !== 0 && e.uint32(40).int32(u.height), u.colors.length !== 0 && e.uint32(50).bytes(u.colors), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = r3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = V(i.uint64());
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.hotx = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.hoty = i.sint32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.width = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.height = i.int32();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.colors = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            hotx: n(u.hotx) ? globalThis.Number(u.hotx) : 0,
            hoty: n(u.hoty) ? globalThis.Number(u.hoty) : 0,
            width: n(u.width) ? globalThis.Number(u.width) : 0,
            height: n(u.height) ? globalThis.Number(u.height) : 0,
            colors: n(u.colors) ? z(u.colors) : new Uint8Array(0)
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.hotx !== 0 && (e.hotx = Math.round(u.hotx)), u.hoty !== 0 && (e.hoty = Math.round(u.hoty)), u.width !== 0 && (e.width = Math.round(u.width)), u.height !== 0 && (e.height = Math.round(u.height)), u.colors.length !== 0 && (e.colors = P(u.colors)), e
    }, create(u) {
        return F0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l;
        const e = r3();
        return e.id = (i = u.id) != null ? i : 0, e.hotx = (o = u.hotx) != null ? o : 0, e.hoty = (a = u.hoty) != null ? a : 0, e.width = (t = u.width) != null ? t : 0, e.height = (s = u.height) != null ? s : 0, e.colors = (l = u.colors) != null ? l : new Uint8Array(0), e
    }
};

function s3() {
    return {x: 0, y: 0}
}

const _0 = {
    encode(u, e = r.Writer.create()) {
        return u.x !== 0 && e.uint32(8).sint32(u.x), u.y !== 0 && e.uint32(16).sint32(u.y), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = s3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.x = i.sint32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.y = i.sint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {x: n(u.x) ? globalThis.Number(u.x) : 0, y: n(u.y) ? globalThis.Number(u.y) : 0}
    }, toJSON(u) {
        const e = {};
        return u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), e
    }, create(u) {
        return _0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = s3();
        return e.x = (i = u.x) != null ? i : 0, e.y = (o = u.y) != null ? o : 0, e
    }
};

function l3() {
    return {salt: "", challenge: ""}
}

const v0 = {
    encode(u, e = r.Writer.create()) {
        return u.salt !== "" && e.uint32(10).string(u.salt), u.challenge !== "" && e.uint32(18).string(u.challenge), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = l3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.salt = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.challenge = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            salt: n(u.salt) ? globalThis.String(u.salt) : "",
            challenge: n(u.challenge) ? globalThis.String(u.challenge) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.salt !== "" && (e.salt = u.salt), u.challenge !== "" && (e.challenge = u.challenge), e
    }, create(u) {
        return v0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = l3();
        return e.salt = (i = u.salt) != null ? i : "", e.challenge = (o = u.challenge) != null ? o : "", e
    }
};

function E3() {
    return {compress: !1, content: new Uint8Array(0), width: 0, height: 0, format: 0, special_name: ""}
}

const U = {
    encode(u, e = r.Writer.create()) {
        return u.compress !== !1 && e.uint32(8).bool(u.compress), u.content.length !== 0 && e.uint32(18).bytes(u.content), u.width !== 0 && e.uint32(24).int32(u.width), u.height !== 0 && e.uint32(32).int32(u.height), u.format !== 0 && e.uint32(40).int32(u.format), u.special_name !== "" && e.uint32(50).string(u.special_name), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = E3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.compress = i.bool();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.content = i.bytes();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.width = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.height = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.format = i.int32();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.special_name = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            compress: n(u.compress) ? globalThis.Boolean(u.compress) : !1,
            content: n(u.content) ? z(u.content) : new Uint8Array(0),
            width: n(u.width) ? globalThis.Number(u.width) : 0,
            height: n(u.height) ? globalThis.Number(u.height) : 0,
            format: n(u.format) ? na(u.format) : 0,
            special_name: n(u.special_name) ? globalThis.String(u.special_name) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.compress !== !1 && (e.compress = u.compress), u.content.length !== 0 && (e.content = P(u.content)), u.width !== 0 && (e.width = Math.round(u.width)), u.height !== 0 && (e.height = Math.round(u.height)), u.format !== 0 && (e.format = ra(u.format)), u.special_name !== "" && (e.special_name = u.special_name), e
    }, create(u) {
        return U.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l;
        const e = E3();
        return e.compress = (i = u.compress) != null ? i : !1, e.content = (o = u.content) != null ? o : new Uint8Array(0), e.width = (a = u.width) != null ? a : 0, e.height = (t = u.height) != null ? t : 0, e.format = (s = u.format) != null ? s : 0, e.special_name = (l = u.special_name) != null ? l : "", e
    }
};

function d3() {
    return {clipboards: []}
}

const gu = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.clipboards) U.encode(i, e.uint32(10).fork()).ldelim();
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = d3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.clipboards.push(U.decode(i, i.uint32()));
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {clipboards: globalThis.Array.isArray(u == null ? void 0 : u.clipboards) ? u.clipboards.map(e => U.fromJSON(e)) : []}
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.clipboards) != null && i.length && (e.clipboards = u.clipboards.map(o => U.toJSON(o))), e
    }, create(u) {
        return gu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = d3();
        return e.clipboards = ((i = u.clipboards) == null ? void 0 : i.map(o => U.fromPartial(o))) || [], e
    }
};

function c3() {
    return {entry_type: 0, name: "", is_hidden: !1, size: 0, modified_time: 0}
}

const W = {
    encode(u, e = r.Writer.create()) {
        return u.entry_type !== 0 && e.uint32(8).int32(u.entry_type), u.name !== "" && e.uint32(18).string(u.name), u.is_hidden !== !1 && e.uint32(24).bool(u.is_hidden), u.size !== 0 && e.uint32(32).uint64(u.size), u.modified_time !== 0 && e.uint32(40).uint64(u.modified_time), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = c3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.entry_type = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.name = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.is_hidden = i.bool();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.size = V(i.uint64());
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.modified_time = V(i.uint64());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            entry_type: n(u.entry_type) ? sa(u.entry_type) : 0,
            name: n(u.name) ? globalThis.String(u.name) : "",
            is_hidden: n(u.is_hidden) ? globalThis.Boolean(u.is_hidden) : !1,
            size: n(u.size) ? globalThis.Number(u.size) : 0,
            modified_time: n(u.modified_time) ? globalThis.Number(u.modified_time) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.entry_type !== 0 && (e.entry_type = la(u.entry_type)), u.name !== "" && (e.name = u.name), u.is_hidden !== !1 && (e.is_hidden = u.is_hidden), u.size !== 0 && (e.size = Math.round(u.size)), u.modified_time !== 0 && (e.modified_time = Math.round(u.modified_time)), e
    }, create(u) {
        return W.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = c3();
        return e.entry_type = (i = u.entry_type) != null ? i : 0, e.name = (o = u.name) != null ? o : "", e.is_hidden = (a = u.is_hidden) != null ? a : !1, e.size = (t = u.size) != null ? t : 0, e.modified_time = (s = u.modified_time) != null ? s : 0, e
    }
};

function C3() {
    return {id: 0, path: "", entries: []}
}

const k0 = {
    encode(u, e = r.Writer.create()) {
        u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path);
        for (const i of u.entries) W.encode(i, e.uint32(26).fork()).ldelim();
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = C3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.entries.push(W.decode(i, i.uint32()));
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            entries: globalThis.Array.isArray(u == null ? void 0 : u.entries) ? u.entries.map(e => W.fromJSON(e)) : []
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), (i = u.entries) != null && i.length && (e.entries = u.entries.map(o => W.toJSON(o))), e
    }, create(u) {
        return k0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = C3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.entries = ((a = u.entries) == null ? void 0 : a.map(t => W.fromPartial(t))) || [], e
    }
};

function p3() {
    return {path: "", include_hidden: !1}
}

const hu = {
    encode(u, e = r.Writer.create()) {
        return u.path !== "" && e.uint32(10).string(u.path), u.include_hidden !== !1 && e.uint32(16).bool(u.include_hidden), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = p3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.path = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.include_hidden = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            path: n(u.path) ? globalThis.String(u.path) : "",
            include_hidden: n(u.include_hidden) ? globalThis.Boolean(u.include_hidden) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.path !== "" && (e.path = u.path), u.include_hidden !== !1 && (e.include_hidden = u.include_hidden), e
    }, create(u) {
        return hu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = p3();
        return e.path = (i = u.path) != null ? i : "", e.include_hidden = (o = u.include_hidden) != null ? o : !1, e
    }
};

function D3() {
    return {id: 0, path: "", include_hidden: !1}
}

const fu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), u.include_hidden !== !1 && e.uint32(24).bool(u.include_hidden), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = D3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.include_hidden = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            include_hidden: n(u.include_hidden) ? globalThis.Boolean(u.include_hidden) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), u.include_hidden !== !1 && (e.include_hidden = u.include_hidden), e
    }, create(u) {
        return fu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = D3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.include_hidden = (a = u.include_hidden) != null ? a : !1, e
    }
};

function B3() {
    return {id: 0, path: "", new_name: ""}
}

const xu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), u.new_name !== "" && e.uint32(26).string(u.new_name), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = B3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.new_name = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            new_name: n(u.new_name) ? globalThis.String(u.new_name) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), u.new_name !== "" && (e.new_name = u.new_name), e
    }, create(u) {
        return xu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = B3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.new_name = (a = u.new_name) != null ? a : "", e
    }
};

function A3() {
    return {
        read_dir: void 0,
        send: void 0,
        receive: void 0,
        create: void 0,
        remove_dir: void 0,
        remove_file: void 0,
        all_files: void 0,
        cancel: void 0,
        send_confirm: void 0,
        rename: void 0
    }
}

const T = {
    encode(u, e = r.Writer.create()) {
        return u.read_dir !== void 0 && hu.encode(u.read_dir, e.uint32(10).fork()).ldelim(), u.send !== void 0 && zu.encode(u.send, e.uint32(18).fork()).ldelim(), u.receive !== void 0 && Ru.encode(u.receive, e.uint32(26).fork()).ldelim(), u.create !== void 0 && ju.encode(u.create, e.uint32(34).fork()).ldelim(), u.remove_dir !== void 0 && Iu.encode(u.remove_dir, e.uint32(42).fork()).ldelim(), u.remove_file !== void 0 && Tu.encode(u.remove_file, e.uint32(50).fork()).ldelim(), u.all_files !== void 0 && fu.encode(u.all_files, e.uint32(58).fork()).ldelim(), u.cancel !== void 0 && yu.encode(u.cancel, e.uint32(66).fork()).ldelim(), u.send_confirm !== void 0 && cu.encode(u.send_confirm, e.uint32(74).fork()).ldelim(), u.rename !== void 0 && xu.encode(u.rename, e.uint32(82).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = A3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.read_dir = hu.decode(i, i.uint32());
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.send = zu.decode(i, i.uint32());
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.receive = Ru.decode(i, i.uint32());
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.create = ju.decode(i, i.uint32());
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.remove_dir = Iu.decode(i, i.uint32());
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.remove_file = Tu.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.all_files = fu.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.cancel = yu.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 74) break;
                    a.send_confirm = cu.decode(i, i.uint32());
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.rename = xu.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            read_dir: n(u.read_dir) ? hu.fromJSON(u.read_dir) : void 0,
            send: n(u.send) ? zu.fromJSON(u.send) : void 0,
            receive: n(u.receive) ? Ru.fromJSON(u.receive) : void 0,
            create: n(u.create) ? ju.fromJSON(u.create) : void 0,
            remove_dir: n(u.remove_dir) ? Iu.fromJSON(u.remove_dir) : void 0,
            remove_file: n(u.remove_file) ? Tu.fromJSON(u.remove_file) : void 0,
            all_files: n(u.all_files) ? fu.fromJSON(u.all_files) : void 0,
            cancel: n(u.cancel) ? yu.fromJSON(u.cancel) : void 0,
            send_confirm: n(u.send_confirm) ? cu.fromJSON(u.send_confirm) : void 0,
            rename: n(u.rename) ? xu.fromJSON(u.rename) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.read_dir !== void 0 && (e.read_dir = hu.toJSON(u.read_dir)), u.send !== void 0 && (e.send = zu.toJSON(u.send)), u.receive !== void 0 && (e.receive = Ru.toJSON(u.receive)), u.create !== void 0 && (e.create = ju.toJSON(u.create)), u.remove_dir !== void 0 && (e.remove_dir = Iu.toJSON(u.remove_dir)), u.remove_file !== void 0 && (e.remove_file = Tu.toJSON(u.remove_file)), u.all_files !== void 0 && (e.all_files = fu.toJSON(u.all_files)), u.cancel !== void 0 && (e.cancel = yu.toJSON(u.cancel)), u.send_confirm !== void 0 && (e.send_confirm = cu.toJSON(u.send_confirm)), u.rename !== void 0 && (e.rename = xu.toJSON(u.rename)), e
    }, create(u) {
        return T.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        const e = A3();
        return e.read_dir = u.read_dir !== void 0 && u.read_dir !== null ? hu.fromPartial(u.read_dir) : void 0, e.send = u.send !== void 0 && u.send !== null ? zu.fromPartial(u.send) : void 0, e.receive = u.receive !== void 0 && u.receive !== null ? Ru.fromPartial(u.receive) : void 0, e.create = u.create !== void 0 && u.create !== null ? ju.fromPartial(u.create) : void 0, e.remove_dir = u.remove_dir !== void 0 && u.remove_dir !== null ? Iu.fromPartial(u.remove_dir) : void 0, e.remove_file = u.remove_file !== void 0 && u.remove_file !== null ? Tu.fromPartial(u.remove_file) : void 0, e.all_files = u.all_files !== void 0 && u.all_files !== null ? fu.fromPartial(u.all_files) : void 0, e.cancel = u.cancel !== void 0 && u.cancel !== null ? yu.fromPartial(u.cancel) : void 0, e.send_confirm = u.send_confirm !== void 0 && u.send_confirm !== null ? cu.fromPartial(u.send_confirm) : void 0, e.rename = u.rename !== void 0 && u.rename !== null ? xu.fromPartial(u.rename) : void 0, e
    }
};

function m3() {
    return {id: 0}
}

const yu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = m3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.Number(u.id) : 0}
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), e
    }, create(u) {
        return yu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = m3();
        return e.id = (i = u.id) != null ? i : 0, e
    }
};

function F3() {
    return {dir: void 0, block: void 0, error: void 0, done: void 0, digest: void 0}
}

const ou = {
    encode(u, e = r.Writer.create()) {
        return u.dir !== void 0 && k0.encode(u.dir, e.uint32(10).fork()).ldelim(), u.block !== void 0 && wu.encode(u.block, e.uint32(18).fork()).ldelim(), u.error !== void 0 && Su.encode(u.error, e.uint32(26).fork()).ldelim(), u.done !== void 0 && Pu.encode(u.done, e.uint32(34).fork()).ldelim(), u.digest !== void 0 && bu.encode(u.digest, e.uint32(42).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = F3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.dir = k0.decode(i, i.uint32());
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.block = wu.decode(i, i.uint32());
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.error = Su.decode(i, i.uint32());
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.done = Pu.decode(i, i.uint32());
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.digest = bu.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            dir: n(u.dir) ? k0.fromJSON(u.dir) : void 0,
            block: n(u.block) ? wu.fromJSON(u.block) : void 0,
            error: n(u.error) ? Su.fromJSON(u.error) : void 0,
            done: n(u.done) ? Pu.fromJSON(u.done) : void 0,
            digest: n(u.digest) ? bu.fromJSON(u.digest) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.dir !== void 0 && (e.dir = k0.toJSON(u.dir)), u.block !== void 0 && (e.block = wu.toJSON(u.block)), u.error !== void 0 && (e.error = Su.toJSON(u.error)), u.done !== void 0 && (e.done = Pu.toJSON(u.done)), u.digest !== void 0 && (e.digest = bu.toJSON(u.digest)), e
    }, create(u) {
        return ou.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        const e = F3();
        return e.dir = u.dir !== void 0 && u.dir !== null ? k0.fromPartial(u.dir) : void 0, e.block = u.block !== void 0 && u.block !== null ? wu.fromPartial(u.block) : void 0, e.error = u.error !== void 0 && u.error !== null ? Su.fromPartial(u.error) : void 0, e.done = u.done !== void 0 && u.done !== null ? Pu.fromPartial(u.done) : void 0, e.digest = u.digest !== void 0 && u.digest !== null ? bu.fromPartial(u.digest) : void 0, e
    }
};

function _3() {
    return {id: 0, file_num: 0, last_modified: 0, file_size: 0, is_upload: !1, is_identical: !1}
}

const bu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.file_num !== 0 && e.uint32(16).sint32(u.file_num), u.last_modified !== 0 && e.uint32(24).uint64(u.last_modified), u.file_size !== 0 && e.uint32(32).uint64(u.file_size), u.is_upload !== !1 && e.uint32(40).bool(u.is_upload), u.is_identical !== !1 && e.uint32(48).bool(u.is_identical), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = _3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.file_num = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.last_modified = V(i.uint64());
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.file_size = V(i.uint64());
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.is_upload = i.bool();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.is_identical = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0,
            last_modified: n(u.last_modified) ? globalThis.Number(u.last_modified) : 0,
            file_size: n(u.file_size) ? globalThis.Number(u.file_size) : 0,
            is_upload: n(u.is_upload) ? globalThis.Boolean(u.is_upload) : !1,
            is_identical: n(u.is_identical) ? globalThis.Boolean(u.is_identical) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), u.last_modified !== 0 && (e.last_modified = Math.round(u.last_modified)), u.file_size !== 0 && (e.file_size = Math.round(u.file_size)), u.is_upload !== !1 && (e.is_upload = u.is_upload), u.is_identical !== !1 && (e.is_identical = u.is_identical), e
    }, create(u) {
        return bu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l;
        const e = _3();
        return e.id = (i = u.id) != null ? i : 0, e.file_num = (o = u.file_num) != null ? o : 0, e.last_modified = (a = u.last_modified) != null ? a : 0, e.file_size = (t = u.file_size) != null ? t : 0, e.is_upload = (s = u.is_upload) != null ? s : !1, e.is_identical = (l = u.is_identical) != null ? l : !1, e
    }
};

function v3() {
    return {id: 0, file_num: 0, data: new Uint8Array(0), compressed: !1, blk_id: 0}
}

const wu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.file_num !== 0 && e.uint32(16).sint32(u.file_num), u.data.length !== 0 && e.uint32(26).bytes(u.data), u.compressed !== !1 && e.uint32(32).bool(u.compressed), u.blk_id !== 0 && e.uint32(40).uint32(u.blk_id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = v3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.file_num = i.sint32();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.data = i.bytes();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.compressed = i.bool();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.blk_id = i.uint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0,
            data: n(u.data) ? z(u.data) : new Uint8Array(0),
            compressed: n(u.compressed) ? globalThis.Boolean(u.compressed) : !1,
            blk_id: n(u.blk_id) ? globalThis.Number(u.blk_id) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), u.data.length !== 0 && (e.data = P(u.data)), u.compressed !== !1 && (e.compressed = u.compressed), u.blk_id !== 0 && (e.blk_id = Math.round(u.blk_id)), e
    }, create(u) {
        return wu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = v3();
        return e.id = (i = u.id) != null ? i : 0, e.file_num = (o = u.file_num) != null ? o : 0, e.data = (a = u.data) != null ? a : new Uint8Array(0), e.compressed = (t = u.compressed) != null ? t : !1, e.blk_id = (s = u.blk_id) != null ? s : 0, e
    }
};

function k3() {
    return {id: 0, error: "", file_num: 0}
}

const Su = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.error !== "" && e.uint32(18).string(u.error), u.file_num !== 0 && e.uint32(24).sint32(u.file_num), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = k3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.error = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.file_num = i.sint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            error: n(u.error) ? globalThis.String(u.error) : "",
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.error !== "" && (e.error = u.error), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), e
    }, create(u) {
        return Su.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = k3();
        return e.id = (i = u.id) != null ? i : 0, e.error = (o = u.error) != null ? o : "", e.file_num = (a = u.file_num) != null ? a : 0, e
    }
};

function g3() {
    return {id: 0, path: "", include_hidden: !1, file_num: 0}
}

const zu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), u.include_hidden !== !1 && e.uint32(24).bool(u.include_hidden), u.file_num !== 0 && e.uint32(32).int32(u.file_num), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = g3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.include_hidden = i.bool();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.file_num = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            include_hidden: n(u.include_hidden) ? globalThis.Boolean(u.include_hidden) : !1,
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), u.include_hidden !== !1 && (e.include_hidden = u.include_hidden), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), e
    }, create(u) {
        return zu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = g3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.include_hidden = (a = u.include_hidden) != null ? a : !1, e.file_num = (t = u.file_num) != null ? t : 0, e
    }
};

function h3() {
    return {id: 0, file_num: 0, skip: void 0, offset_blk: void 0}
}

const cu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.file_num !== 0 && e.uint32(16).sint32(u.file_num), u.skip !== void 0 && e.uint32(24).bool(u.skip), u.offset_blk !== void 0 && e.uint32(32).uint32(u.offset_blk), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = h3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.file_num = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.skip = i.bool();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.offset_blk = i.uint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0,
            skip: n(u.skip) ? globalThis.Boolean(u.skip) : void 0,
            offset_blk: n(u.offset_blk) ? globalThis.Number(u.offset_blk) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), u.skip !== void 0 && (e.skip = u.skip), u.offset_blk !== void 0 && (e.offset_blk = Math.round(u.offset_blk)), e
    }, create(u) {
        return cu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = h3();
        return e.id = (i = u.id) != null ? i : 0, e.file_num = (o = u.file_num) != null ? o : 0, e.skip = (a = u.skip) != null ? a : void 0, e.offset_blk = (t = u.offset_blk) != null ? t : void 0, e
    }
};

function f3() {
    return {id: 0, file_num: 0}
}

const Pu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.file_num !== 0 && e.uint32(16).sint32(u.file_num), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = f3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.file_num = i.sint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.Number(u.id) : 0, file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0}
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), e
    }, create(u) {
        return Pu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = f3();
        return e.id = (i = u.id) != null ? i : 0, e.file_num = (o = u.file_num) != null ? o : 0, e
    }
};

function x3() {
    return {id: 0, path: "", files: [], file_num: 0, total_size: 0}
}

const Ru = {
    encode(u, e = r.Writer.create()) {
        u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path);
        for (const i of u.files) W.encode(i, e.uint32(26).fork()).ldelim();
        return u.file_num !== 0 && e.uint32(32).int32(u.file_num), u.total_size !== 0 && e.uint32(40).uint64(u.total_size), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = x3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.files.push(W.decode(i, i.uint32()));
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.file_num = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.total_size = V(i.uint64());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            files: globalThis.Array.isArray(u == null ? void 0 : u.files) ? u.files.map(e => W.fromJSON(e)) : [],
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0,
            total_size: n(u.total_size) ? globalThis.Number(u.total_size) : 0
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), (i = u.files) != null && i.length && (e.files = u.files.map(o => W.toJSON(o))), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), u.total_size !== 0 && (e.total_size = Math.round(u.total_size)), e
    }, create(u) {
        return Ru.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = x3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.files = ((a = u.files) == null ? void 0 : a.map(l => W.fromPartial(l))) || [], e.file_num = (t = u.file_num) != null ? t : 0, e.total_size = (s = u.total_size) != null ? s : 0, e
    }
};

function y3() {
    return {id: 0, path: "", recursive: !1}
}

const Iu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), u.recursive !== !1 && e.uint32(24).bool(u.recursive), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = y3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.recursive = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            recursive: n(u.recursive) ? globalThis.Boolean(u.recursive) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), u.recursive !== !1 && (e.recursive = u.recursive), e
    }, create(u) {
        return Iu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = y3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.recursive = (a = u.recursive) != null ? a : !1, e
    }
};

function b3() {
    return {id: 0, path: "", file_num: 0}
}

const Tu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), u.file_num !== 0 && e.uint32(24).sint32(u.file_num), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = b3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.file_num = i.sint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.Number(u.id) : 0,
            path: n(u.path) ? globalThis.String(u.path) : "",
            file_num: n(u.file_num) ? globalThis.Number(u.file_num) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), u.file_num !== 0 && (e.file_num = Math.round(u.file_num)), e
    }, create(u) {
        return Tu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = b3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e.file_num = (a = u.file_num) != null ? a : 0, e
    }
};

function w3() {
    return {id: 0, path: ""}
}

const ju = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(8).int32(u.id), u.path !== "" && e.uint32(18).string(u.path), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = w3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.id = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.path = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.Number(u.id) : 0, path: n(u.path) ? globalThis.String(u.path) : ""}
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.path !== "" && (e.path = u.path), e
    }, create(u) {
        return ju.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = w3();
        return e.id = (i = u.id) != null ? i : 0, e.path = (o = u.path) != null ? o : "", e
    }
};

function S3() {
    return {}
}

const g0 = {
    encode(u, e = r.Writer.create()) {
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = S3();
        for (; i.pos < o;) {
            const t = i.uint32();
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {}
    }, toJSON(u) {
        return {}
    }, create(u) {
        return g0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        return S3()
    }
};

function z3() {
    return {id: 0, format: ""}
}

const h0 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== 0 && e.uint32(16).int32(u.id), u.format !== "" && e.uint32(26).string(u.format), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = z3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.id = i.int32();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.format = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.Number(u.id) : 0, format: n(u.format) ? globalThis.String(u.format) : ""}
    }, toJSON(u) {
        const e = {};
        return u.id !== 0 && (e.id = Math.round(u.id)), u.format !== "" && (e.format = u.format), e
    }, create(u) {
        return h0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = z3();
        return e.id = (i = u.id) != null ? i : 0, e.format = (o = u.format) != null ? o : "", e
    }
};

function P3() {
    return {formats: []}
}

const f0 = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.formats) h0.encode(i, e.uint32(18).fork()).ldelim();
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = P3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 18) break;
                    a.formats.push(h0.decode(i, i.uint32()));
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {formats: globalThis.Array.isArray(u == null ? void 0 : u.formats) ? u.formats.map(e => h0.fromJSON(e)) : []}
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.formats) != null && i.length && (e.formats = u.formats.map(o => h0.toJSON(o))), e
    }, create(u) {
        return f0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = P3();
        return e.formats = ((i = u.formats) == null ? void 0 : i.map(o => h0.fromPartial(o))) || [], e
    }
};

function R3() {
    return {msg_flags: 0}
}

const x0 = {
    encode(u, e = r.Writer.create()) {
        return u.msg_flags !== 0 && e.uint32(16).int32(u.msg_flags), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = R3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.msg_flags = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {msg_flags: n(u.msg_flags) ? globalThis.Number(u.msg_flags) : 0}
    }, toJSON(u) {
        const e = {};
        return u.msg_flags !== 0 && (e.msg_flags = Math.round(u.msg_flags)), e
    }, create(u) {
        return x0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = R3();
        return e.msg_flags = (i = u.msg_flags) != null ? i : 0, e
    }
};

function I3() {
    return {requested_format_id: 0}
}

const y0 = {
    encode(u, e = r.Writer.create()) {
        return u.requested_format_id !== 0 && e.uint32(16).int32(u.requested_format_id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = I3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.requested_format_id = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {requested_format_id: n(u.requested_format_id) ? globalThis.Number(u.requested_format_id) : 0}
    }, toJSON(u) {
        const e = {};
        return u.requested_format_id !== 0 && (e.requested_format_id = Math.round(u.requested_format_id)), e
    }, create(u) {
        return y0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = I3();
        return e.requested_format_id = (i = u.requested_format_id) != null ? i : 0, e
    }
};

function T3() {
    return {msg_flags: 0, format_data: new Uint8Array(0)}
}

const b0 = {
    encode(u, e = r.Writer.create()) {
        return u.msg_flags !== 0 && e.uint32(16).int32(u.msg_flags), u.format_data.length !== 0 && e.uint32(26).bytes(u.format_data), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = T3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.msg_flags = i.int32();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.format_data = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            msg_flags: n(u.msg_flags) ? globalThis.Number(u.msg_flags) : 0,
            format_data: n(u.format_data) ? z(u.format_data) : new Uint8Array(0)
        }
    }, toJSON(u) {
        const e = {};
        return u.msg_flags !== 0 && (e.msg_flags = Math.round(u.msg_flags)), u.format_data.length !== 0 && (e.format_data = P(u.format_data)), e
    }, create(u) {
        return b0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = T3();
        return e.msg_flags = (i = u.msg_flags) != null ? i : 0, e.format_data = (o = u.format_data) != null ? o : new Uint8Array(0), e
    }
};

function j3() {
    return {
        stream_id: 0,
        list_index: 0,
        dw_flags: 0,
        n_position_low: 0,
        n_position_high: 0,
        cb_requested: 0,
        have_clip_data_id: !1,
        clip_data_id: 0
    }
}

const w0 = {
    encode(u, e = r.Writer.create()) {
        return u.stream_id !== 0 && e.uint32(16).int32(u.stream_id), u.list_index !== 0 && e.uint32(24).int32(u.list_index), u.dw_flags !== 0 && e.uint32(32).int32(u.dw_flags), u.n_position_low !== 0 && e.uint32(40).int32(u.n_position_low), u.n_position_high !== 0 && e.uint32(48).int32(u.n_position_high), u.cb_requested !== 0 && e.uint32(56).int32(u.cb_requested), u.have_clip_data_id !== !1 && e.uint32(64).bool(u.have_clip_data_id), u.clip_data_id !== 0 && e.uint32(72).int32(u.clip_data_id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = j3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.stream_id = i.int32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.list_index = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.dw_flags = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.n_position_low = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.n_position_high = i.int32();
                    continue;
                case 7:
                    if (t !== 56) break;
                    a.cb_requested = i.int32();
                    continue;
                case 8:
                    if (t !== 64) break;
                    a.have_clip_data_id = i.bool();
                    continue;
                case 9:
                    if (t !== 72) break;
                    a.clip_data_id = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            stream_id: n(u.stream_id) ? globalThis.Number(u.stream_id) : 0,
            list_index: n(u.list_index) ? globalThis.Number(u.list_index) : 0,
            dw_flags: n(u.dw_flags) ? globalThis.Number(u.dw_flags) : 0,
            n_position_low: n(u.n_position_low) ? globalThis.Number(u.n_position_low) : 0,
            n_position_high: n(u.n_position_high) ? globalThis.Number(u.n_position_high) : 0,
            cb_requested: n(u.cb_requested) ? globalThis.Number(u.cb_requested) : 0,
            have_clip_data_id: n(u.have_clip_data_id) ? globalThis.Boolean(u.have_clip_data_id) : !1,
            clip_data_id: n(u.clip_data_id) ? globalThis.Number(u.clip_data_id) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.stream_id !== 0 && (e.stream_id = Math.round(u.stream_id)), u.list_index !== 0 && (e.list_index = Math.round(u.list_index)), u.dw_flags !== 0 && (e.dw_flags = Math.round(u.dw_flags)), u.n_position_low !== 0 && (e.n_position_low = Math.round(u.n_position_low)), u.n_position_high !== 0 && (e.n_position_high = Math.round(u.n_position_high)), u.cb_requested !== 0 && (e.cb_requested = Math.round(u.cb_requested)), u.have_clip_data_id !== !1 && (e.have_clip_data_id = u.have_clip_data_id), u.clip_data_id !== 0 && (e.clip_data_id = Math.round(u.clip_data_id)), e
    }, create(u) {
        return w0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = j3();
        return e.stream_id = (i = u.stream_id) != null ? i : 0, e.list_index = (o = u.list_index) != null ? o : 0, e.dw_flags = (a = u.dw_flags) != null ? a : 0, e.n_position_low = (t = u.n_position_low) != null ? t : 0, e.n_position_high = (s = u.n_position_high) != null ? s : 0, e.cb_requested = (l = u.cb_requested) != null ? l : 0, e.have_clip_data_id = (E = u.have_clip_data_id) != null ? E : !1, e.clip_data_id = (c = u.clip_data_id) != null ? c : 0, e
    }
};

function N3() {
    return {msg_flags: 0, stream_id: 0, requested_data: new Uint8Array(0)}
}

const S0 = {
    encode(u, e = r.Writer.create()) {
        return u.msg_flags !== 0 && e.uint32(24).int32(u.msg_flags), u.stream_id !== 0 && e.uint32(32).int32(u.stream_id), u.requested_data.length !== 0 && e.uint32(42).bytes(u.requested_data), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = N3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 3:
                    if (t !== 24) break;
                    a.msg_flags = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.stream_id = i.int32();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.requested_data = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            msg_flags: n(u.msg_flags) ? globalThis.Number(u.msg_flags) : 0,
            stream_id: n(u.stream_id) ? globalThis.Number(u.stream_id) : 0,
            requested_data: n(u.requested_data) ? z(u.requested_data) : new Uint8Array(0)
        }
    }, toJSON(u) {
        const e = {};
        return u.msg_flags !== 0 && (e.msg_flags = Math.round(u.msg_flags)), u.stream_id !== 0 && (e.stream_id = Math.round(u.stream_id)), u.requested_data.length !== 0 && (e.requested_data = P(u.requested_data)), e
    }, create(u) {
        return S0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = N3();
        return e.msg_flags = (i = u.msg_flags) != null ? i : 0, e.stream_id = (o = u.stream_id) != null ? o : 0, e.requested_data = (a = u.requested_data) != null ? a : new Uint8Array(0), e
    }
};

function O3() {
    return {
        ready: void 0,
        format_list: void 0,
        format_list_response: void 0,
        format_data_request: void 0,
        format_data_response: void 0,
        file_contents_request: void 0,
        file_contents_response: void 0
    }
}

const z0 = {
    encode(u, e = r.Writer.create()) {
        return u.ready !== void 0 && g0.encode(u.ready, e.uint32(10).fork()).ldelim(), u.format_list !== void 0 && f0.encode(u.format_list, e.uint32(18).fork()).ldelim(), u.format_list_response !== void 0 && x0.encode(u.format_list_response, e.uint32(26).fork()).ldelim(), u.format_data_request !== void 0 && y0.encode(u.format_data_request, e.uint32(34).fork()).ldelim(), u.format_data_response !== void 0 && b0.encode(u.format_data_response, e.uint32(42).fork()).ldelim(), u.file_contents_request !== void 0 && w0.encode(u.file_contents_request, e.uint32(50).fork()).ldelim(), u.file_contents_response !== void 0 && S0.encode(u.file_contents_response, e.uint32(58).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = O3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.ready = g0.decode(i, i.uint32());
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.format_list = f0.decode(i, i.uint32());
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.format_list_response = x0.decode(i, i.uint32());
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.format_data_request = y0.decode(i, i.uint32());
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.format_data_response = b0.decode(i, i.uint32());
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.file_contents_request = w0.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.file_contents_response = S0.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            ready: n(u.ready) ? g0.fromJSON(u.ready) : void 0,
            format_list: n(u.format_list) ? f0.fromJSON(u.format_list) : void 0,
            format_list_response: n(u.format_list_response) ? x0.fromJSON(u.format_list_response) : void 0,
            format_data_request: n(u.format_data_request) ? y0.fromJSON(u.format_data_request) : void 0,
            format_data_response: n(u.format_data_response) ? b0.fromJSON(u.format_data_response) : void 0,
            file_contents_request: n(u.file_contents_request) ? w0.fromJSON(u.file_contents_request) : void 0,
            file_contents_response: n(u.file_contents_response) ? S0.fromJSON(u.file_contents_response) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.ready !== void 0 && (e.ready = g0.toJSON(u.ready)), u.format_list !== void 0 && (e.format_list = f0.toJSON(u.format_list)), u.format_list_response !== void 0 && (e.format_list_response = x0.toJSON(u.format_list_response)), u.format_data_request !== void 0 && (e.format_data_request = y0.toJSON(u.format_data_request)), u.format_data_response !== void 0 && (e.format_data_response = b0.toJSON(u.format_data_response)), u.file_contents_request !== void 0 && (e.file_contents_request = w0.toJSON(u.file_contents_request)), u.file_contents_response !== void 0 && (e.file_contents_response = S0.toJSON(u.file_contents_response)), e
    }, create(u) {
        return z0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        const e = O3();
        return e.ready = u.ready !== void 0 && u.ready !== null ? g0.fromPartial(u.ready) : void 0, e.format_list = u.format_list !== void 0 && u.format_list !== null ? f0.fromPartial(u.format_list) : void 0, e.format_list_response = u.format_list_response !== void 0 && u.format_list_response !== null ? x0.fromPartial(u.format_list_response) : void 0, e.format_data_request = u.format_data_request !== void 0 && u.format_data_request !== null ? y0.fromPartial(u.format_data_request) : void 0, e.format_data_response = u.format_data_response !== void 0 && u.format_data_response !== null ? b0.fromPartial(u.format_data_response) : void 0, e.file_contents_request = u.file_contents_request !== void 0 && u.file_contents_request !== null ? w0.fromPartial(u.file_contents_request) : void 0, e.file_contents_response = u.file_contents_response !== void 0 && u.file_contents_response !== null ? S0.fromPartial(u.file_contents_response) : void 0, e
    }
};

function M3() {
    return {width: 0, height: 0}
}

const v = {
    encode(u, e = r.Writer.create()) {
        return u.width !== 0 && e.uint32(8).int32(u.width), u.height !== 0 && e.uint32(16).int32(u.height), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = M3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.width = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.height = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            width: n(u.width) ? globalThis.Number(u.width) : 0,
            height: n(u.height) ? globalThis.Number(u.height) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.width !== 0 && (e.width = Math.round(u.width)), u.height !== 0 && (e.height = Math.round(u.height)), e
    }, create(u) {
        return v.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = M3();
        return e.width = (i = u.width) != null ? i : 0, e.height = (o = u.height) != null ? o : 0, e
    }
};

function L3() {
    return {display: 0, resolution: void 0}
}

const Nu = {
    encode(u, e = r.Writer.create()) {
        return u.display !== 0 && e.uint32(8).int32(u.display), u.resolution !== void 0 && v.encode(u.resolution, e.uint32(18).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = L3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.display = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.resolution = v.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            display: n(u.display) ? globalThis.Number(u.display) : 0,
            resolution: n(u.resolution) ? v.fromJSON(u.resolution) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.display !== 0 && (e.display = Math.round(u.display)), u.resolution !== void 0 && (e.resolution = v.toJSON(u.resolution)), e
    }, create(u) {
        return Nu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = L3();
        return e.display = (i = u.display) != null ? i : 0, e.resolution = u.resolution !== void 0 && u.resolution !== null ? v.fromPartial(u.resolution) : void 0, e
    }
};

function U3() {
    return {resolutions: []}
}

const $ = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.resolutions) v.encode(i, e.uint32(10).fork()).ldelim();
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = U3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.resolutions.push(v.decode(i, i.uint32()));
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {resolutions: globalThis.Array.isArray(u == null ? void 0 : u.resolutions) ? u.resolutions.map(e => v.fromJSON(e)) : []}
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.resolutions) != null && i.length && (e.resolutions = u.resolutions.map(o => v.toJSON(o))), e
    }, create(u) {
        return $.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = U3();
        return e.resolutions = ((i = u.resolutions) == null ? void 0 : i.map(o => v.fromPartial(o))) || [], e
    }
};

function W3() {
    return {
        display: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        cursor_embedded: !1,
        resolutions: void 0,
        original_resolution: void 0
    }
}

const Ou = {
    encode(u, e = r.Writer.create()) {
        return u.display !== 0 && e.uint32(8).int32(u.display), u.x !== 0 && e.uint32(16).sint32(u.x), u.y !== 0 && e.uint32(24).sint32(u.y), u.width !== 0 && e.uint32(32).int32(u.width), u.height !== 0 && e.uint32(40).int32(u.height), u.cursor_embedded !== !1 && e.uint32(48).bool(u.cursor_embedded), u.resolutions !== void 0 && $.encode(u.resolutions, e.uint32(58).fork()).ldelim(), u.original_resolution !== void 0 && v.encode(u.original_resolution, e.uint32(66).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = W3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.display = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.x = i.sint32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.y = i.sint32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.width = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.height = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.cursor_embedded = i.bool();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.resolutions = $.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.original_resolution = v.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            display: n(u.display) ? globalThis.Number(u.display) : 0,
            x: n(u.x) ? globalThis.Number(u.x) : 0,
            y: n(u.y) ? globalThis.Number(u.y) : 0,
            width: n(u.width) ? globalThis.Number(u.width) : 0,
            height: n(u.height) ? globalThis.Number(u.height) : 0,
            cursor_embedded: n(u.cursor_embedded) ? globalThis.Boolean(u.cursor_embedded) : !1,
            resolutions: n(u.resolutions) ? $.fromJSON(u.resolutions) : void 0,
            original_resolution: n(u.original_resolution) ? v.fromJSON(u.original_resolution) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.display !== 0 && (e.display = Math.round(u.display)), u.x !== 0 && (e.x = Math.round(u.x)), u.y !== 0 && (e.y = Math.round(u.y)), u.width !== 0 && (e.width = Math.round(u.width)), u.height !== 0 && (e.height = Math.round(u.height)), u.cursor_embedded !== !1 && (e.cursor_embedded = u.cursor_embedded), u.resolutions !== void 0 && (e.resolutions = $.toJSON(u.resolutions)), u.original_resolution !== void 0 && (e.original_resolution = v.toJSON(u.original_resolution)), e
    }, create(u) {
        return Ou.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l;
        const e = W3();
        return e.display = (i = u.display) != null ? i : 0, e.x = (o = u.x) != null ? o : 0, e.y = (a = u.y) != null ? a : 0, e.width = (t = u.width) != null ? t : 0, e.height = (s = u.height) != null ? s : 0, e.cursor_embedded = (l = u.cursor_embedded) != null ? l : !1, e.resolutions = u.resolutions !== void 0 && u.resolutions !== null ? $.fromPartial(u.resolutions) : void 0, e.original_resolution = u.original_resolution !== void 0 && u.original_resolution !== null ? v.fromPartial(u.original_resolution) : void 0, e
    }
};

function V3() {
    return {add: [], sub: [], set: []}
}

const Mu = {
    encode(u, e = r.Writer.create()) {
        e.uint32(10).fork();
        for (const i of u.add) e.int32(i);
        e.ldelim(), e.uint32(18).fork();
        for (const i of u.sub) e.int32(i);
        e.ldelim(), e.uint32(26).fork();
        for (const i of u.set) e.int32(i);
        return e.ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = V3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t === 8) {
                        a.add.push(i.int32());
                        continue
                    }
                    if (t === 10) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.add.push(i.int32());
                        continue
                    }
                    break;
                case 2:
                    if (t === 16) {
                        a.sub.push(i.int32());
                        continue
                    }
                    if (t === 18) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.sub.push(i.int32());
                        continue
                    }
                    break;
                case 3:
                    if (t === 24) {
                        a.set.push(i.int32());
                        continue
                    }
                    if (t === 26) {
                        const s = i.uint32() + i.pos;
                        for (; i.pos < s;) a.set.push(i.int32());
                        continue
                    }
                    break
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            add: globalThis.Array.isArray(u == null ? void 0 : u.add) ? u.add.map(e => globalThis.Number(e)) : [],
            sub: globalThis.Array.isArray(u == null ? void 0 : u.sub) ? u.sub.map(e => globalThis.Number(e)) : [],
            set: globalThis.Array.isArray(u == null ? void 0 : u.set) ? u.set.map(e => globalThis.Number(e)) : []
        }
    }, toJSON(u) {
        var i, o, a;
        const e = {};
        return (i = u.add) != null && i.length && (e.add = u.add.map(t => Math.round(t))), (o = u.sub) != null && o.length && (e.sub = u.sub.map(t => Math.round(t))), (a = u.set) != null && a.length && (e.set = u.set.map(t => Math.round(t))), e
    }, create(u) {
        return Mu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = V3();
        return e.add = ((i = u.add) == null ? void 0 : i.map(t => t)) || [], e.sub = ((o = u.sub) == null ? void 0 : o.map(t => t)) || [], e.set = ((a = u.set) == null ? void 0 : a.map(t => t)) || [], e
    }
};

function q3() {
    return {display: 0, on: !1}
}

const Lu = {
    encode(u, e = r.Writer.create()) {
        return u.display !== 0 && e.uint32(8).int32(u.display), u.on !== !1 && e.uint32(16).bool(u.on), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = q3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.display = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.on = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {display: n(u.display) ? globalThis.Number(u.display) : 0, on: n(u.on) ? globalThis.Boolean(u.on) : !1}
    }, toJSON(u) {
        const e = {};
        return u.display !== 0 && (e.display = Math.round(u.display)), u.on !== !1 && (e.on = u.on), e
    }, create(u) {
        return Lu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = q3();
        return e.display = (i = u.display) != null ? i : 0, e.on = (o = u.on) != null ? o : !1, e
    }
};

function K3() {
    return {impl_key: "", on: !1}
}

const Uu = {
    encode(u, e = r.Writer.create()) {
        return u.impl_key !== "" && e.uint32(10).string(u.impl_key), u.on !== !1 && e.uint32(16).bool(u.on), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = K3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.impl_key = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.on = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            impl_key: n(u.impl_key) ? globalThis.String(u.impl_key) : "",
            on: n(u.on) ? globalThis.Boolean(u.on) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.impl_key !== "" && (e.impl_key = u.impl_key), u.on !== !1 && (e.on = u.on), e
    }, create(u) {
        return Uu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = K3();
        return e.impl_key = (i = u.impl_key) != null ? i : "", e.on = (o = u.on) != null ? o : !1, e
    }
};

function H3() {
    return {permission: 0, enabled: !1}
}

const P0 = {
    encode(u, e = r.Writer.create()) {
        return u.permission !== 0 && e.uint32(8).int32(u.permission), u.enabled !== !1 && e.uint32(16).bool(u.enabled), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = H3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.permission = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.enabled = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            permission: n(u.permission) ? ca(u.permission) : 0,
            enabled: n(u.enabled) ? globalThis.Boolean(u.enabled) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.permission !== 0 && (e.permission = Ca(u.permission)), u.enabled !== !1 && (e.enabled = u.enabled), e
    }, create(u) {
        return P0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = H3();
        return e.permission = (i = u.permission) != null ? i : 0, e.enabled = (o = u.enabled) != null ? o : !1, e
    }
};

function J3() {
    return {
        ability_vp9: 0,
        ability_h264: 0,
        ability_h265: 0,
        prefer: 0,
        ability_vp8: 0,
        ability_av1: 0,
        i444: void 0,
        prefer_chroma: 0
    }
}

const Wu = {
    encode(u, e = r.Writer.create()) {
        return u.ability_vp9 !== 0 && e.uint32(8).int32(u.ability_vp9), u.ability_h264 !== 0 && e.uint32(16).int32(u.ability_h264), u.ability_h265 !== 0 && e.uint32(24).int32(u.ability_h265), u.prefer !== 0 && e.uint32(32).int32(u.prefer), u.ability_vp8 !== 0 && e.uint32(40).int32(u.ability_vp8), u.ability_av1 !== 0 && e.uint32(48).int32(u.ability_av1), u.i444 !== void 0 && J.encode(u.i444, e.uint32(58).fork()).ldelim(), u.prefer_chroma !== 0 && e.uint32(64).int32(u.prefer_chroma), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = J3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.ability_vp9 = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.ability_h264 = i.int32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.ability_h265 = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.prefer = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.ability_vp8 = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.ability_av1 = i.int32();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.i444 = J.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 64) break;
                    a.prefer_chroma = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            ability_vp9: n(u.ability_vp9) ? globalThis.Number(u.ability_vp9) : 0,
            ability_h264: n(u.ability_h264) ? globalThis.Number(u.ability_h264) : 0,
            ability_h265: n(u.ability_h265) ? globalThis.Number(u.ability_h265) : 0,
            prefer: n(u.prefer) ? pa(u.prefer) : 0,
            ability_vp8: n(u.ability_vp8) ? globalThis.Number(u.ability_vp8) : 0,
            ability_av1: n(u.ability_av1) ? globalThis.Number(u.ability_av1) : 0,
            i444: n(u.i444) ? J.fromJSON(u.i444) : void 0,
            prefer_chroma: n(u.prefer_chroma) ? ia(u.prefer_chroma) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.ability_vp9 !== 0 && (e.ability_vp9 = Math.round(u.ability_vp9)), u.ability_h264 !== 0 && (e.ability_h264 = Math.round(u.ability_h264)), u.ability_h265 !== 0 && (e.ability_h265 = Math.round(u.ability_h265)), u.prefer !== 0 && (e.prefer = Da(u.prefer)), u.ability_vp8 !== 0 && (e.ability_vp8 = Math.round(u.ability_vp8)), u.ability_av1 !== 0 && (e.ability_av1 = Math.round(u.ability_av1)), u.i444 !== void 0 && (e.i444 = J.toJSON(u.i444)), u.prefer_chroma !== 0 && (e.prefer_chroma = ta(u.prefer_chroma)), e
    }, create(u) {
        return Wu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E;
        const e = J3();
        return e.ability_vp9 = (i = u.ability_vp9) != null ? i : 0, e.ability_h264 = (o = u.ability_h264) != null ? o : 0, e.ability_h265 = (a = u.ability_h265) != null ? a : 0, e.prefer = (t = u.prefer) != null ? t : 0, e.ability_vp8 = (s = u.ability_vp8) != null ? s : 0, e.ability_av1 = (l = u.ability_av1) != null ? l : 0, e.i444 = u.i444 !== void 0 && u.i444 !== null ? J.fromPartial(u.i444) : void 0, e.prefer_chroma = (E = u.prefer_chroma) != null ? E : 0, e
    }
};

function G3() {
    return {
        image_quality: 0,
        lock_after_session_end: 0,
        show_remote_cursor: 0,
        privacy_mode: 0,
        block_input: 0,
        custom_image_quality: 0,
        disable_audio: 0,
        disable_clipboard: 0,
        enable_file_transfer: 0,
        supported_decoding: void 0,
        custom_fps: 0,
        disable_keyboard: 0,
        follow_remote_cursor: 0,
        follow_remote_window: 0
    }
}

const S = {
    encode(u, e = r.Writer.create()) {
        return u.image_quality !== 0 && e.uint32(8).int32(u.image_quality), u.lock_after_session_end !== 0 && e.uint32(16).int32(u.lock_after_session_end), u.show_remote_cursor !== 0 && e.uint32(24).int32(u.show_remote_cursor), u.privacy_mode !== 0 && e.uint32(32).int32(u.privacy_mode), u.block_input !== 0 && e.uint32(40).int32(u.block_input), u.custom_image_quality !== 0 && e.uint32(48).int32(u.custom_image_quality), u.disable_audio !== 0 && e.uint32(56).int32(u.disable_audio), u.disable_clipboard !== 0 && e.uint32(64).int32(u.disable_clipboard), u.enable_file_transfer !== 0 && e.uint32(72).int32(u.enable_file_transfer), u.supported_decoding !== void 0 && Wu.encode(u.supported_decoding, e.uint32(82).fork()).ldelim(), u.custom_fps !== 0 && e.uint32(88).int32(u.custom_fps), u.disable_keyboard !== 0 && e.uint32(96).int32(u.disable_keyboard), u.follow_remote_cursor !== 0 && e.uint32(120).int32(u.follow_remote_cursor), u.follow_remote_window !== 0 && e.uint32(128).int32(u.follow_remote_window), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = G3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.image_quality = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.lock_after_session_end = i.int32();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.show_remote_cursor = i.int32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.privacy_mode = i.int32();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.block_input = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.custom_image_quality = i.int32();
                    continue;
                case 7:
                    if (t !== 56) break;
                    a.disable_audio = i.int32();
                    continue;
                case 8:
                    if (t !== 64) break;
                    a.disable_clipboard = i.int32();
                    continue;
                case 9:
                    if (t !== 72) break;
                    a.enable_file_transfer = i.int32();
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.supported_decoding = Wu.decode(i, i.uint32());
                    continue;
                case 11:
                    if (t !== 88) break;
                    a.custom_fps = i.int32();
                    continue;
                case 12:
                    if (t !== 96) break;
                    a.disable_keyboard = i.int32();
                    continue;
                case 15:
                    if (t !== 120) break;
                    a.follow_remote_cursor = i.int32();
                    continue;
                case 16:
                    if (t !== 128) break;
                    a.follow_remote_window = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            image_quality: n(u.image_quality) ? Ea(u.image_quality) : 0,
            lock_after_session_end: n(u.lock_after_session_end) ? iu(u.lock_after_session_end) : 0,
            show_remote_cursor: n(u.show_remote_cursor) ? iu(u.show_remote_cursor) : 0,
            privacy_mode: n(u.privacy_mode) ? iu(u.privacy_mode) : 0,
            block_input: n(u.block_input) ? iu(u.block_input) : 0,
            custom_image_quality: n(u.custom_image_quality) ? globalThis.Number(u.custom_image_quality) : 0,
            disable_audio: n(u.disable_audio) ? iu(u.disable_audio) : 0,
            disable_clipboard: n(u.disable_clipboard) ? iu(u.disable_clipboard) : 0,
            enable_file_transfer: n(u.enable_file_transfer) ? iu(u.enable_file_transfer) : 0,
            supported_decoding: n(u.supported_decoding) ? Wu.fromJSON(u.supported_decoding) : void 0,
            custom_fps: n(u.custom_fps) ? globalThis.Number(u.custom_fps) : 0,
            disable_keyboard: n(u.disable_keyboard) ? iu(u.disable_keyboard) : 0,
            follow_remote_cursor: n(u.follow_remote_cursor) ? iu(u.follow_remote_cursor) : 0,
            follow_remote_window: n(u.follow_remote_window) ? iu(u.follow_remote_window) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.image_quality !== 0 && (e.image_quality = da(u.image_quality)), u.lock_after_session_end !== 0 && (e.lock_after_session_end = tu(u.lock_after_session_end)), u.show_remote_cursor !== 0 && (e.show_remote_cursor = tu(u.show_remote_cursor)), u.privacy_mode !== 0 && (e.privacy_mode = tu(u.privacy_mode)), u.block_input !== 0 && (e.block_input = tu(u.block_input)), u.custom_image_quality !== 0 && (e.custom_image_quality = Math.round(u.custom_image_quality)), u.disable_audio !== 0 && (e.disable_audio = tu(u.disable_audio)), u.disable_clipboard !== 0 && (e.disable_clipboard = tu(u.disable_clipboard)), u.enable_file_transfer !== 0 && (e.enable_file_transfer = tu(u.enable_file_transfer)), u.supported_decoding !== void 0 && (e.supported_decoding = Wu.toJSON(u.supported_decoding)), u.custom_fps !== 0 && (e.custom_fps = Math.round(u.custom_fps)), u.disable_keyboard !== 0 && (e.disable_keyboard = tu(u.disable_keyboard)), u.follow_remote_cursor !== 0 && (e.follow_remote_cursor = tu(u.follow_remote_cursor)), u.follow_remote_window !== 0 && (e.follow_remote_window = tu(u.follow_remote_window)), e
    }, create(u) {
        return S.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c, C, D, B, m, f;
        const e = G3();
        return e.image_quality = (i = u.image_quality) != null ? i : 0, e.lock_after_session_end = (o = u.lock_after_session_end) != null ? o : 0, e.show_remote_cursor = (a = u.show_remote_cursor) != null ? a : 0, e.privacy_mode = (t = u.privacy_mode) != null ? t : 0, e.block_input = (s = u.block_input) != null ? s : 0, e.custom_image_quality = (l = u.custom_image_quality) != null ? l : 0, e.disable_audio = (E = u.disable_audio) != null ? E : 0, e.disable_clipboard = (c = u.disable_clipboard) != null ? c : 0, e.enable_file_transfer = (C = u.enable_file_transfer) != null ? C : 0, e.supported_decoding = u.supported_decoding !== void 0 && u.supported_decoding !== null ? Wu.fromPartial(u.supported_decoding) : void 0, e.custom_fps = (D = u.custom_fps) != null ? D : 0, e.disable_keyboard = (B = u.disable_keyboard) != null ? B : 0, e.follow_remote_cursor = (m = u.follow_remote_cursor) != null ? m : 0, e.follow_remote_window = (f = u.follow_remote_window) != null ? f : 0, e
    }
};

function Z3() {
    return {time: 0, from_client: !1, last_delay: 0, target_bitrate: 0}
}

const R0 = {
    encode(u, e = r.Writer.create()) {
        return u.time !== 0 && e.uint32(8).int64(u.time), u.from_client !== !1 && e.uint32(16).bool(u.from_client), u.last_delay !== 0 && e.uint32(24).uint32(u.last_delay), u.target_bitrate !== 0 && e.uint32(32).uint32(u.target_bitrate), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Z3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.time = V(i.int64());
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.from_client = i.bool();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.last_delay = i.uint32();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.target_bitrate = i.uint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            time: n(u.time) ? globalThis.Number(u.time) : 0,
            from_client: n(u.from_client) ? globalThis.Boolean(u.from_client) : !1,
            last_delay: n(u.last_delay) ? globalThis.Number(u.last_delay) : 0,
            target_bitrate: n(u.target_bitrate) ? globalThis.Number(u.target_bitrate) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.time !== 0 && (e.time = Math.round(u.time)), u.from_client !== !1 && (e.from_client = u.from_client), u.last_delay !== 0 && (e.last_delay = Math.round(u.last_delay)), u.target_bitrate !== 0 && (e.target_bitrate = Math.round(u.target_bitrate)), e
    }, create(u) {
        return R0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = Z3();
        return e.time = (i = u.time) != null ? i : 0, e.from_client = (o = u.from_client) != null ? o : !1, e.last_delay = (a = u.last_delay) != null ? a : 0, e.target_bitrate = (t = u.target_bitrate) != null ? t : 0, e
    }
};

function Q3() {
    return {asymmetric_value: new Uint8Array(0), symmetric_value: new Uint8Array(0)}
}

const K = {
    encode(u, e = r.Writer.create()) {
        return u.asymmetric_value.length !== 0 && e.uint32(10).bytes(u.asymmetric_value), u.symmetric_value.length !== 0 && e.uint32(18).bytes(u.symmetric_value), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Q3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.asymmetric_value = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.symmetric_value = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            asymmetric_value: n(u.asymmetric_value) ? z(u.asymmetric_value) : new Uint8Array(0),
            symmetric_value: n(u.symmetric_value) ? z(u.symmetric_value) : new Uint8Array(0)
        }
    }, toJSON(u) {
        const e = {};
        return u.asymmetric_value.length !== 0 && (e.asymmetric_value = P(u.asymmetric_value)), u.symmetric_value.length !== 0 && (e.symmetric_value = P(u.symmetric_value)), e
    }, create(u) {
        return K.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Q3();
        return e.asymmetric_value = (i = u.asymmetric_value) != null ? i : new Uint8Array(0), e.symmetric_value = (o = u.symmetric_value) != null ? o : new Uint8Array(0), e
    }
};

function X3() {
    return {id: new Uint8Array(0)}
}

const I0 = {
    encode(u, e = r.Writer.create()) {
        return u.id.length !== 0 && e.uint32(10).bytes(u.id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = X3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? z(u.id) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.id.length !== 0 && (e.id = P(u.id)), e
    }, create(u) {
        return I0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = X3();
        return e.id = (i = u.id) != null ? i : new Uint8Array(0), e
    }
};

function Y3() {
    return {sample_rate: 0, channels: 0}
}

const T0 = {
    encode(u, e = r.Writer.create()) {
        return u.sample_rate !== 0 && e.uint32(8).uint32(u.sample_rate), u.channels !== 0 && e.uint32(16).uint32(u.channels), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Y3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.sample_rate = i.uint32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.channels = i.uint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            sample_rate: n(u.sample_rate) ? globalThis.Number(u.sample_rate) : 0,
            channels: n(u.channels) ? globalThis.Number(u.channels) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.sample_rate !== 0 && (e.sample_rate = Math.round(u.sample_rate)), u.channels !== 0 && (e.channels = Math.round(u.channels)), e
    }, create(u) {
        return T0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Y3();
        return e.sample_rate = (i = u.sample_rate) != null ? i : 0, e.channels = (o = u.channels) != null ? o : 0, e
    }
};

function $3() {
    return {data: new Uint8Array(0)}
}

const j0 = {
    encode(u, e = r.Writer.create()) {
        return u.data.length !== 0 && e.uint32(10).bytes(u.data), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = $3();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.data = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {data: n(u.data) ? z(u.data) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.data.length !== 0 && (e.data = P(u.data)), e
    }, create(u) {
        return j0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = $3();
        return e.data = (i = u.data) != null ? i : new Uint8Array(0), e
    }
};

function ui() {
    return {msgtype: "", title: "", text: "", link: ""}
}

const N0 = {
    encode(u, e = r.Writer.create()) {
        return u.msgtype !== "" && e.uint32(10).string(u.msgtype), u.title !== "" && e.uint32(18).string(u.title), u.text !== "" && e.uint32(26).string(u.text), u.link !== "" && e.uint32(34).string(u.link), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ui();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.msgtype = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.title = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.text = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.link = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            msgtype: n(u.msgtype) ? globalThis.String(u.msgtype) : "",
            title: n(u.title) ? globalThis.String(u.title) : "",
            text: n(u.text) ? globalThis.String(u.text) : "",
            link: n(u.link) ? globalThis.String(u.link) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.msgtype !== "" && (e.msgtype = u.msgtype), u.title !== "" && (e.title = u.title), u.text !== "" && (e.text = u.text), u.link !== "" && (e.link = u.link), e
    }, create(u) {
        return N0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = ui();
        return e.msgtype = (i = u.msgtype) != null ? i : "", e.title = (o = u.title) != null ? o : "", e.text = (a = u.text) != null ? a : "", e.link = (t = u.link) != null ? t : "", e
    }
};

function ei() {
    return {privacy_mode_state: void 0, block_input_state: void 0, details: "", impl_key: ""}
}

const O0 = {
    encode(u, e = r.Writer.create()) {
        return u.privacy_mode_state !== void 0 && e.uint32(8).int32(u.privacy_mode_state), u.block_input_state !== void 0 && e.uint32(16).int32(u.block_input_state), u.details !== "" && e.uint32(26).string(u.details), u.impl_key !== "" && e.uint32(34).string(u.impl_key), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ei();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.privacy_mode_state = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.block_input_state = i.int32();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.details = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.impl_key = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            privacy_mode_state: n(u.privacy_mode_state) ? ma(u.privacy_mode_state) : void 0,
            block_input_state: n(u.block_input_state) ? Ba(u.block_input_state) : void 0,
            details: n(u.details) ? globalThis.String(u.details) : "",
            impl_key: n(u.impl_key) ? globalThis.String(u.impl_key) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.privacy_mode_state !== void 0 && (e.privacy_mode_state = Fa(u.privacy_mode_state)), u.block_input_state !== void 0 && (e.block_input_state = Aa(u.block_input_state)), u.details !== "" && (e.details = u.details), u.impl_key !== "" && (e.impl_key = u.impl_key), e
    }, create(u) {
        return O0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = ei();
        return e.privacy_mode_state = (i = u.privacy_mode_state) != null ? i : void 0, e.block_input_state = (o = u.block_input_state) != null ? o : void 0, e.details = (a = u.details) != null ? a : "", e.impl_key = (t = u.impl_key) != null ? t : "", e
    }
};

function ii() {
    return {username: "", password: ""}
}

const Vu = {
    encode(u, e = r.Writer.create()) {
        return u.username !== "" && e.uint32(10).string(u.username), u.password !== "" && e.uint32(18).string(u.password), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ii();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.username = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.password = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            username: n(u.username) ? globalThis.String(u.username) : "",
            password: n(u.password) ? globalThis.String(u.password) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.username !== "" && (e.username = u.username), u.password !== "" && (e.password = u.password), e
    }, create(u) {
        return Vu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = ii();
        return e.username = (i = u.username) != null ? i : "", e.password = (o = u.password) != null ? o : "", e
    }
};

function ti() {
    return {direct: void 0, logon: void 0}
}

const Du = {
    encode(u, e = r.Writer.create()) {
        return u.direct !== void 0 && e.uint32(8).bool(u.direct), u.logon !== void 0 && Vu.encode(u.logon, e.uint32(18).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ti();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.direct = i.bool();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.logon = Vu.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            direct: n(u.direct) ? globalThis.Boolean(u.direct) : void 0,
            logon: n(u.logon) ? Vu.fromJSON(u.logon) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.direct !== void 0 && (e.direct = u.direct), u.logon !== void 0 && (e.logon = Vu.toJSON(u.logon)), e
    }, create(u) {
        return Du.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = ti();
        return e.direct = (i = u.direct) != null ? i : void 0, e.logon = u.logon !== void 0 && u.logon !== null ? Vu.fromPartial(u.logon) : void 0, e
    }
};

function ai() {
    return {uuid: new Uint8Array(0)}
}

const M0 = {
    encode(u, e = r.Writer.create()) {
        return u.uuid.length !== 0 && e.uint32(10).bytes(u.uuid), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ai();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.uuid = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {uuid: n(u.uuid) ? z(u.uuid) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.uuid.length !== 0 && (e.uuid = P(u.uuid)), e
    }, create(u) {
        return M0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = ai();
        return e.uuid = (i = u.uuid) != null ? i : new Uint8Array(0), e
    }
};

function oi() {
    return {uuid: new Uint8Array(0), lr: void 0}
}

const L0 = {
    encode(u, e = r.Writer.create()) {
        return u.uuid.length !== 0 && e.uint32(10).bytes(u.uuid), u.lr !== void 0 && H.encode(u.lr, e.uint32(18).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = oi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.uuid = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.lr = H.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {uuid: n(u.uuid) ? z(u.uuid) : new Uint8Array(0), lr: n(u.lr) ? H.fromJSON(u.lr) : void 0}
    }, toJSON(u) {
        const e = {};
        return u.uuid.length !== 0 && (e.uuid = P(u.uuid)), u.lr !== void 0 && (e.lr = H.toJSON(u.lr)), e
    }, create(u) {
        return L0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = oi();
        return e.uuid = (i = u.uuid) != null ? i : new Uint8Array(0), e.lr = u.lr !== void 0 && u.lr !== null ? H.fromPartial(u.lr) : void 0, e
    }
};

function ni() {
    return {}
}

const U0 = {
    encode(u, e = r.Writer.create()) {
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ni();
        for (; i.pos < o;) {
            const t = i.uint32();
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {}
    }, toJSON(u) {
        return {}
    }, create(u) {
        return U0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        return ni()
    }
};

function ri() {
    return {id: "", content: new Uint8Array(0)}
}

const W0 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.content.length !== 0 && e.uint32(18).bytes(u.content), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ri();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.content = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: n(u.id) ? globalThis.String(u.id) : "", content: n(u.content) ? z(u.content) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.content.length !== 0 && (e.content = P(u.content)), e
    }, create(u) {
        return W0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = ri();
        return e.id = (i = u.id) != null ? i : "", e.content = (o = u.content) != null ? o : new Uint8Array(0), e
    }
};

function si() {
    return {id: "", name: "", msg: ""}
}

const V0 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.name !== "" && e.uint32(18).string(u.name), u.msg !== "" && e.uint32(26).string(u.msg), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = si();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.name = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.msg = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: n(u.id) ? globalThis.String(u.id) : "",
            name: n(u.name) ? globalThis.String(u.name) : "",
            msg: n(u.msg) ? globalThis.String(u.msg) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.name !== "" && (e.name = u.name), u.msg !== "" && (e.msg = u.msg), e
    }, create(u) {
        return V0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = si();
        return e.id = (i = u.id) != null ? i : "", e.name = (o = u.name) != null ? o : "", e.msg = (a = u.msg) != null ? a : "", e
    }
};

function li() {
    return {sessions: [], current_sid: 0}
}

const q0 = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.sessions) d0.encode(i, e.uint32(10).fork()).ldelim();
        return u.current_sid !== 0 && e.uint32(16).uint32(u.current_sid), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = li();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.sessions.push(d0.decode(i, i.uint32()));
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.current_sid = i.uint32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            sessions: globalThis.Array.isArray(u == null ? void 0 : u.sessions) ? u.sessions.map(e => d0.fromJSON(e)) : [],
            current_sid: n(u.current_sid) ? globalThis.Number(u.current_sid) : 0
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.sessions) != null && i.length && (e.sessions = u.sessions.map(o => d0.toJSON(o))), u.current_sid !== 0 && (e.current_sid = Math.round(u.current_sid)), e
    }, create(u) {
        return q0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = li();
        return e.sessions = ((i = u.sessions) == null ? void 0 : i.map(a => d0.fromPartial(a))) || [], e.current_sid = (o = u.current_sid) != null ? o : 0, e
    }
};

function Ei() {
    return {switch_display: 0}
}

const K0 = {
    encode(u, e = r.Writer.create()) {
        return u.switch_display !== 0 && e.uint32(8).int32(u.switch_display), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ei();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.switch_display = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {switch_display: n(u.switch_display) ? globalThis.Number(u.switch_display) : 0}
    }, toJSON(u) {
        const e = {};
        return u.switch_display !== 0 && (e.switch_display = Math.round(u.switch_display)), e
    }, create(u) {
        return K0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Ei();
        return e.switch_display = (i = u.switch_display) != null ? i : 0, e
    }
};

function di() {
    return {
        chat_message: void 0,
        switch_display: void 0,
        permission_info: void 0,
        option: void 0,
        audio_format: void 0,
        close_reason: void 0,
        refresh_video: void 0,
        video_received: void 0,
        back_notification: void 0,
        restart_remote_device: void 0,
        uac: void 0,
        foreground_window_elevated: void 0,
        stop_service: void 0,
        elevation_request: void 0,
        elevation_response: void 0,
        portable_service_running: void 0,
        switch_sides_request: void 0,
        switch_back: void 0,
        change_resolution: void 0,
        plugin_request: void 0,
        plugin_failure: void 0,
        full_speed_fps: void 0,
        auto_adjust_fps: void 0,
        client_record_status: void 0,
        capture_displays: void 0,
        refresh_video_display: void 0,
        toggle_virtual_display: void 0,
        toggle_privacy_mode: void 0,
        supported_encoding: void 0,
        selected_sid: void 0,
        change_display_resolution: void 0,
        message_query: void 0,
        follow_current_display: void 0
    }
}

const h = {
    encode(u, e = r.Writer.create()) {
        return u.chat_message !== void 0 && vu.encode(u.chat_message, e.uint32(34).fork()).ldelim(), u.switch_display !== void 0 && Ou.encode(u.switch_display, e.uint32(42).fork()).ldelim(), u.permission_info !== void 0 && P0.encode(u.permission_info, e.uint32(50).fork()).ldelim(), u.option !== void 0 && S.encode(u.option, e.uint32(58).fork()).ldelim(), u.audio_format !== void 0 && T0.encode(u.audio_format, e.uint32(66).fork()).ldelim(), u.close_reason !== void 0 && e.uint32(74).string(u.close_reason), u.refresh_video !== void 0 && e.uint32(80).bool(u.refresh_video), u.video_received !== void 0 && e.uint32(96).bool(u.video_received), u.back_notification !== void 0 && O0.encode(u.back_notification, e.uint32(106).fork()).ldelim(), u.restart_remote_device !== void 0 && e.uint32(112).bool(u.restart_remote_device), u.uac !== void 0 && e.uint32(120).bool(u.uac), u.foreground_window_elevated !== void 0 && e.uint32(128).bool(u.foreground_window_elevated), u.stop_service !== void 0 && e.uint32(136).bool(u.stop_service), u.elevation_request !== void 0 && Du.encode(u.elevation_request, e.uint32(146).fork()).ldelim(), u.elevation_response !== void 0 && e.uint32(154).string(u.elevation_response), u.portable_service_running !== void 0 && e.uint32(160).bool(u.portable_service_running), u.switch_sides_request !== void 0 && M0.encode(u.switch_sides_request, e.uint32(170).fork()).ldelim(), u.switch_back !== void 0 && U0.encode(u.switch_back, e.uint32(178).fork()).ldelim(), u.change_resolution !== void 0 && v.encode(u.change_resolution, e.uint32(194).fork()).ldelim(), u.plugin_request !== void 0 && W0.encode(u.plugin_request, e.uint32(202).fork()).ldelim(), u.plugin_failure !== void 0 && V0.encode(u.plugin_failure, e.uint32(210).fork()).ldelim(), u.full_speed_fps !== void 0 && e.uint32(216).uint32(u.full_speed_fps), u.auto_adjust_fps !== void 0 && e.uint32(224).uint32(u.auto_adjust_fps), u.client_record_status !== void 0 && e.uint32(232).bool(u.client_record_status), u.capture_displays !== void 0 && Mu.encode(u.capture_displays, e.uint32(242).fork()).ldelim(), u.refresh_video_display !== void 0 && e.uint32(248).int32(u.refresh_video_display), u.toggle_virtual_display !== void 0 && Lu.encode(u.toggle_virtual_display, e.uint32(258).fork()).ldelim(), u.toggle_privacy_mode !== void 0 && Uu.encode(u.toggle_privacy_mode, e.uint32(266).fork()).ldelim(), u.supported_encoding !== void 0 && G.encode(u.supported_encoding, e.uint32(274).fork()).ldelim(), u.selected_sid !== void 0 && e.uint32(280).uint32(u.selected_sid), u.change_display_resolution !== void 0 && Nu.encode(u.change_display_resolution, e.uint32(290).fork()).ldelim(), u.message_query !== void 0 && K0.encode(u.message_query, e.uint32(298).fork()).ldelim(), u.follow_current_display !== void 0 && e.uint32(304).int32(u.follow_current_display), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = di();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 4:
                    if (t !== 34) break;
                    a.chat_message = vu.decode(i, i.uint32());
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.switch_display = Ou.decode(i, i.uint32());
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.permission_info = P0.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.option = S.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.audio_format = T0.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 74) break;
                    a.close_reason = i.string();
                    continue;
                case 10:
                    if (t !== 80) break;
                    a.refresh_video = i.bool();
                    continue;
                case 12:
                    if (t !== 96) break;
                    a.video_received = i.bool();
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.back_notification = O0.decode(i, i.uint32());
                    continue;
                case 14:
                    if (t !== 112) break;
                    a.restart_remote_device = i.bool();
                    continue;
                case 15:
                    if (t !== 120) break;
                    a.uac = i.bool();
                    continue;
                case 16:
                    if (t !== 128) break;
                    a.foreground_window_elevated = i.bool();
                    continue;
                case 17:
                    if (t !== 136) break;
                    a.stop_service = i.bool();
                    continue;
                case 18:
                    if (t !== 146) break;
                    a.elevation_request = Du.decode(i, i.uint32());
                    continue;
                case 19:
                    if (t !== 154) break;
                    a.elevation_response = i.string();
                    continue;
                case 20:
                    if (t !== 160) break;
                    a.portable_service_running = i.bool();
                    continue;
                case 21:
                    if (t !== 170) break;
                    a.switch_sides_request = M0.decode(i, i.uint32());
                    continue;
                case 22:
                    if (t !== 178) break;
                    a.switch_back = U0.decode(i, i.uint32());
                    continue;
                case 24:
                    if (t !== 194) break;
                    a.change_resolution = v.decode(i, i.uint32());
                    continue;
                case 25:
                    if (t !== 202) break;
                    a.plugin_request = W0.decode(i, i.uint32());
                    continue;
                case 26:
                    if (t !== 210) break;
                    a.plugin_failure = V0.decode(i, i.uint32());
                    continue;
                case 27:
                    if (t !== 216) break;
                    a.full_speed_fps = i.uint32();
                    continue;
                case 28:
                    if (t !== 224) break;
                    a.auto_adjust_fps = i.uint32();
                    continue;
                case 29:
                    if (t !== 232) break;
                    a.client_record_status = i.bool();
                    continue;
                case 30:
                    if (t !== 242) break;
                    a.capture_displays = Mu.decode(i, i.uint32());
                    continue;
                case 31:
                    if (t !== 248) break;
                    a.refresh_video_display = i.int32();
                    continue;
                case 32:
                    if (t !== 258) break;
                    a.toggle_virtual_display = Lu.decode(i, i.uint32());
                    continue;
                case 33:
                    if (t !== 266) break;
                    a.toggle_privacy_mode = Uu.decode(i, i.uint32());
                    continue;
                case 34:
                    if (t !== 274) break;
                    a.supported_encoding = G.decode(i, i.uint32());
                    continue;
                case 35:
                    if (t !== 280) break;
                    a.selected_sid = i.uint32();
                    continue;
                case 36:
                    if (t !== 290) break;
                    a.change_display_resolution = Nu.decode(i, i.uint32());
                    continue;
                case 37:
                    if (t !== 298) break;
                    a.message_query = K0.decode(i, i.uint32());
                    continue;
                case 38:
                    if (t !== 304) break;
                    a.follow_current_display = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            chat_message: n(u.chat_message) ? vu.fromJSON(u.chat_message) : void 0,
            switch_display: n(u.switch_display) ? Ou.fromJSON(u.switch_display) : void 0,
            permission_info: n(u.permission_info) ? P0.fromJSON(u.permission_info) : void 0,
            option: n(u.option) ? S.fromJSON(u.option) : void 0,
            audio_format: n(u.audio_format) ? T0.fromJSON(u.audio_format) : void 0,
            close_reason: n(u.close_reason) ? globalThis.String(u.close_reason) : void 0,
            refresh_video: n(u.refresh_video) ? globalThis.Boolean(u.refresh_video) : void 0,
            video_received: n(u.video_received) ? globalThis.Boolean(u.video_received) : void 0,
            back_notification: n(u.back_notification) ? O0.fromJSON(u.back_notification) : void 0,
            restart_remote_device: n(u.restart_remote_device) ? globalThis.Boolean(u.restart_remote_device) : void 0,
            uac: n(u.uac) ? globalThis.Boolean(u.uac) : void 0,
            foreground_window_elevated: n(u.foreground_window_elevated) ? globalThis.Boolean(u.foreground_window_elevated) : void 0,
            stop_service: n(u.stop_service) ? globalThis.Boolean(u.stop_service) : void 0,
            elevation_request: n(u.elevation_request) ? Du.fromJSON(u.elevation_request) : void 0,
            elevation_response: n(u.elevation_response) ? globalThis.String(u.elevation_response) : void 0,
            portable_service_running: n(u.portable_service_running) ? globalThis.Boolean(u.portable_service_running) : void 0,
            switch_sides_request: n(u.switch_sides_request) ? M0.fromJSON(u.switch_sides_request) : void 0,
            switch_back: n(u.switch_back) ? U0.fromJSON(u.switch_back) : void 0,
            change_resolution: n(u.change_resolution) ? v.fromJSON(u.change_resolution) : void 0,
            plugin_request: n(u.plugin_request) ? W0.fromJSON(u.plugin_request) : void 0,
            plugin_failure: n(u.plugin_failure) ? V0.fromJSON(u.plugin_failure) : void 0,
            full_speed_fps: n(u.full_speed_fps) ? globalThis.Number(u.full_speed_fps) : void 0,
            auto_adjust_fps: n(u.auto_adjust_fps) ? globalThis.Number(u.auto_adjust_fps) : void 0,
            client_record_status: n(u.client_record_status) ? globalThis.Boolean(u.client_record_status) : void 0,
            capture_displays: n(u.capture_displays) ? Mu.fromJSON(u.capture_displays) : void 0,
            refresh_video_display: n(u.refresh_video_display) ? globalThis.Number(u.refresh_video_display) : void 0,
            toggle_virtual_display: n(u.toggle_virtual_display) ? Lu.fromJSON(u.toggle_virtual_display) : void 0,
            toggle_privacy_mode: n(u.toggle_privacy_mode) ? Uu.fromJSON(u.toggle_privacy_mode) : void 0,
            supported_encoding: n(u.supported_encoding) ? G.fromJSON(u.supported_encoding) : void 0,
            selected_sid: n(u.selected_sid) ? globalThis.Number(u.selected_sid) : void 0,
            change_display_resolution: n(u.change_display_resolution) ? Nu.fromJSON(u.change_display_resolution) : void 0,
            message_query: n(u.message_query) ? K0.fromJSON(u.message_query) : void 0,
            follow_current_display: n(u.follow_current_display) ? globalThis.Number(u.follow_current_display) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.chat_message !== void 0 && (e.chat_message = vu.toJSON(u.chat_message)), u.switch_display !== void 0 && (e.switch_display = Ou.toJSON(u.switch_display)), u.permission_info !== void 0 && (e.permission_info = P0.toJSON(u.permission_info)), u.option !== void 0 && (e.option = S.toJSON(u.option)), u.audio_format !== void 0 && (e.audio_format = T0.toJSON(u.audio_format)), u.close_reason !== void 0 && (e.close_reason = u.close_reason), u.refresh_video !== void 0 && (e.refresh_video = u.refresh_video), u.video_received !== void 0 && (e.video_received = u.video_received), u.back_notification !== void 0 && (e.back_notification = O0.toJSON(u.back_notification)), u.restart_remote_device !== void 0 && (e.restart_remote_device = u.restart_remote_device), u.uac !== void 0 && (e.uac = u.uac), u.foreground_window_elevated !== void 0 && (e.foreground_window_elevated = u.foreground_window_elevated), u.stop_service !== void 0 && (e.stop_service = u.stop_service), u.elevation_request !== void 0 && (e.elevation_request = Du.toJSON(u.elevation_request)), u.elevation_response !== void 0 && (e.elevation_response = u.elevation_response), u.portable_service_running !== void 0 && (e.portable_service_running = u.portable_service_running), u.switch_sides_request !== void 0 && (e.switch_sides_request = M0.toJSON(u.switch_sides_request)), u.switch_back !== void 0 && (e.switch_back = U0.toJSON(u.switch_back)), u.change_resolution !== void 0 && (e.change_resolution = v.toJSON(u.change_resolution)), u.plugin_request !== void 0 && (e.plugin_request = W0.toJSON(u.plugin_request)), u.plugin_failure !== void 0 && (e.plugin_failure = V0.toJSON(u.plugin_failure)), u.full_speed_fps !== void 0 && (e.full_speed_fps = Math.round(u.full_speed_fps)), u.auto_adjust_fps !== void 0 && (e.auto_adjust_fps = Math.round(u.auto_adjust_fps)), u.client_record_status !== void 0 && (e.client_record_status = u.client_record_status), u.capture_displays !== void 0 && (e.capture_displays = Mu.toJSON(u.capture_displays)), u.refresh_video_display !== void 0 && (e.refresh_video_display = Math.round(u.refresh_video_display)), u.toggle_virtual_display !== void 0 && (e.toggle_virtual_display = Lu.toJSON(u.toggle_virtual_display)), u.toggle_privacy_mode !== void 0 && (e.toggle_privacy_mode = Uu.toJSON(u.toggle_privacy_mode)), u.supported_encoding !== void 0 && (e.supported_encoding = G.toJSON(u.supported_encoding)), u.selected_sid !== void 0 && (e.selected_sid = Math.round(u.selected_sid)), u.change_display_resolution !== void 0 && (e.change_display_resolution = Nu.toJSON(u.change_display_resolution)), u.message_query !== void 0 && (e.message_query = K0.toJSON(u.message_query)), u.follow_current_display !== void 0 && (e.follow_current_display = Math.round(u.follow_current_display)), e
    }, create(u) {
        return h.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c, C, D, B, m, f, R, I;
        const e = di();
        return e.chat_message = u.chat_message !== void 0 && u.chat_message !== null ? vu.fromPartial(u.chat_message) : void 0, e.switch_display = u.switch_display !== void 0 && u.switch_display !== null ? Ou.fromPartial(u.switch_display) : void 0, e.permission_info = u.permission_info !== void 0 && u.permission_info !== null ? P0.fromPartial(u.permission_info) : void 0, e.option = u.option !== void 0 && u.option !== null ? S.fromPartial(u.option) : void 0, e.audio_format = u.audio_format !== void 0 && u.audio_format !== null ? T0.fromPartial(u.audio_format) : void 0, e.close_reason = (i = u.close_reason) != null ? i : void 0, e.refresh_video = (o = u.refresh_video) != null ? o : void 0, e.video_received = (a = u.video_received) != null ? a : void 0, e.back_notification = u.back_notification !== void 0 && u.back_notification !== null ? O0.fromPartial(u.back_notification) : void 0, e.restart_remote_device = (t = u.restart_remote_device) != null ? t : void 0, e.uac = (s = u.uac) != null ? s : void 0, e.foreground_window_elevated = (l = u.foreground_window_elevated) != null ? l : void 0, e.stop_service = (E = u.stop_service) != null ? E : void 0, e.elevation_request = u.elevation_request !== void 0 && u.elevation_request !== null ? Du.fromPartial(u.elevation_request) : void 0, e.elevation_response = (c = u.elevation_response) != null ? c : void 0, e.portable_service_running = (C = u.portable_service_running) != null ? C : void 0, e.switch_sides_request = u.switch_sides_request !== void 0 && u.switch_sides_request !== null ? M0.fromPartial(u.switch_sides_request) : void 0, e.switch_back = u.switch_back !== void 0 && u.switch_back !== null ? U0.fromPartial(u.switch_back) : void 0, e.change_resolution = u.change_resolution !== void 0 && u.change_resolution !== null ? v.fromPartial(u.change_resolution) : void 0, e.plugin_request = u.plugin_request !== void 0 && u.plugin_request !== null ? W0.fromPartial(u.plugin_request) : void 0, e.plugin_failure = u.plugin_failure !== void 0 && u.plugin_failure !== null ? V0.fromPartial(u.plugin_failure) : void 0, e.full_speed_fps = (D = u.full_speed_fps) != null ? D : void 0, e.auto_adjust_fps = (B = u.auto_adjust_fps) != null ? B : void 0, e.client_record_status = (m = u.client_record_status) != null ? m : void 0, e.capture_displays = u.capture_displays !== void 0 && u.capture_displays !== null ? Mu.fromPartial(u.capture_displays) : void 0, e.refresh_video_display = (f = u.refresh_video_display) != null ? f : void 0, e.toggle_virtual_display = u.toggle_virtual_display !== void 0 && u.toggle_virtual_display !== null ? Lu.fromPartial(u.toggle_virtual_display) : void 0, e.toggle_privacy_mode = u.toggle_privacy_mode !== void 0 && u.toggle_privacy_mode !== null ? Uu.fromPartial(u.toggle_privacy_mode) : void 0, e.supported_encoding = u.supported_encoding !== void 0 && u.supported_encoding !== null ? G.fromPartial(u.supported_encoding) : void 0, e.selected_sid = (R = u.selected_sid) != null ? R : void 0, e.change_display_resolution = u.change_display_resolution !== void 0 && u.change_display_resolution !== null ? Nu.fromPartial(u.change_display_resolution) : void 0, e.message_query = u.message_query !== void 0 && u.message_query !== null ? K0.fromPartial(u.message_query) : void 0, e.follow_current_display = (I = u.follow_current_display) != null ? I : void 0, e
    }
};

function ci() {
    return {req_timestamp: 0, is_connect: !1}
}

const H0 = {
    encode(u, e = r.Writer.create()) {
        return u.req_timestamp !== 0 && e.uint32(8).int64(u.req_timestamp), u.is_connect !== !1 && e.uint32(16).bool(u.is_connect), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ci();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.req_timestamp = V(i.int64());
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.is_connect = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            req_timestamp: n(u.req_timestamp) ? globalThis.Number(u.req_timestamp) : 0,
            is_connect: n(u.is_connect) ? globalThis.Boolean(u.is_connect) : !1
        }
    }, toJSON(u) {
        const e = {};
        return u.req_timestamp !== 0 && (e.req_timestamp = Math.round(u.req_timestamp)), u.is_connect !== !1 && (e.is_connect = u.is_connect), e
    }, create(u) {
        return H0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = ci();
        return e.req_timestamp = (i = u.req_timestamp) != null ? i : 0, e.is_connect = (o = u.is_connect) != null ? o : !1, e
    }
};

function Ci() {
    return {accepted: !1, req_timestamp: 0, ack_timestamp: 0}
}

const J0 = {
    encode(u, e = r.Writer.create()) {
        return u.accepted !== !1 && e.uint32(8).bool(u.accepted), u.req_timestamp !== 0 && e.uint32(16).int64(u.req_timestamp), u.ack_timestamp !== 0 && e.uint32(24).int64(u.ack_timestamp), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ci();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.accepted = i.bool();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.req_timestamp = V(i.int64());
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.ack_timestamp = V(i.int64());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            accepted: n(u.accepted) ? globalThis.Boolean(u.accepted) : !1,
            req_timestamp: n(u.req_timestamp) ? globalThis.Number(u.req_timestamp) : 0,
            ack_timestamp: n(u.ack_timestamp) ? globalThis.Number(u.ack_timestamp) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.accepted !== !1 && (e.accepted = u.accepted), u.req_timestamp !== 0 && (e.req_timestamp = Math.round(u.req_timestamp)), u.ack_timestamp !== 0 && (e.ack_timestamp = Math.round(u.ack_timestamp)), e
    }, create(u) {
        return J0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = Ci();
        return e.accepted = (i = u.accepted) != null ? i : !1, e.req_timestamp = (o = u.req_timestamp) != null ? o : 0, e.ack_timestamp = (a = u.ack_timestamp) != null ? a : 0, e
    }
};

function pi() {
    return {
        signed_id: void 0,
        public_key: void 0,
        test_delay: void 0,
        video_frame: void 0,
        login_request: void 0,
        login_response: void 0,
        hash: void 0,
        mouse_event: void 0,
        audio_frame: void 0,
        cursor_data: void 0,
        cursor_position: void 0,
        cursor_id: void 0,
        key_event: void 0,
        clipboard: void 0,
        file_action: void 0,
        file_response: void 0,
        misc: void 0,
        cliprdr: void 0,
        message_box: void 0,
        switch_sides_response: void 0,
        voice_call_request: void 0,
        voice_call_response: void 0,
        peer_info: void 0,
        pointer_device_event: void 0,
        auth_2fa: void 0,
        multi_clipboards: void 0
    }
}

const eu = {
    encode(u, e = r.Writer.create()) {
        return u.signed_id !== void 0 && I0.encode(u.signed_id, e.uint32(26).fork()).ldelim(), u.public_key !== void 0 && K.encode(u.public_key, e.uint32(34).fork()).ldelim(), u.test_delay !== void 0 && R0.encode(u.test_delay, e.uint32(42).fork()).ldelim(), u.video_frame !== void 0 && n0.encode(u.video_frame, e.uint32(50).fork()).ldelim(), u.login_request !== void 0 && H.encode(u.login_request, e.uint32(58).fork()).ldelim(), u.login_response !== void 0 && c0.encode(u.login_response, e.uint32(66).fork()).ldelim(), u.hash !== void 0 && v0.encode(u.hash, e.uint32(74).fork()).ldelim(), u.mouse_event !== void 0 && ku.encode(u.mouse_event, e.uint32(82).fork()).ldelim(), u.audio_frame !== void 0 && j0.encode(u.audio_frame, e.uint32(90).fork()).ldelim(), u.cursor_data !== void 0 && F0.encode(u.cursor_data, e.uint32(98).fork()).ldelim(), u.cursor_position !== void 0 && _0.encode(u.cursor_position, e.uint32(106).fork()).ldelim(), u.cursor_id !== void 0 && e.uint32(112).uint64(u.cursor_id), u.key_event !== void 0 && w.encode(u.key_event, e.uint32(122).fork()).ldelim(), u.clipboard !== void 0 && U.encode(u.clipboard, e.uint32(130).fork()).ldelim(), u.file_action !== void 0 && T.encode(u.file_action, e.uint32(138).fork()).ldelim(), u.file_response !== void 0 && ou.encode(u.file_response, e.uint32(146).fork()).ldelim(), u.misc !== void 0 && h.encode(u.misc, e.uint32(154).fork()).ldelim(), u.cliprdr !== void 0 && z0.encode(u.cliprdr, e.uint32(162).fork()).ldelim(), u.message_box !== void 0 && N0.encode(u.message_box, e.uint32(170).fork()).ldelim(), u.switch_sides_response !== void 0 && L0.encode(u.switch_sides_response, e.uint32(178).fork()).ldelim(), u.voice_call_request !== void 0 && H0.encode(u.voice_call_request, e.uint32(186).fork()).ldelim(), u.voice_call_response !== void 0 && J0.encode(u.voice_call_response, e.uint32(194).fork()).ldelim(), u.peer_info !== void 0 && Y.encode(u.peer_info, e.uint32(202).fork()).ldelim(), u.pointer_device_event !== void 0 && m0.encode(u.pointer_device_event, e.uint32(210).fork()).ldelim(), u.auth_2fa !== void 0 && _u.encode(u.auth_2fa, e.uint32(218).fork()).ldelim(), u.multi_clipboards !== void 0 && gu.encode(u.multi_clipboards, e.uint32(226).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = pi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 3:
                    if (t !== 26) break;
                    a.signed_id = I0.decode(i, i.uint32());
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.public_key = K.decode(i, i.uint32());
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.test_delay = R0.decode(i, i.uint32());
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.video_frame = n0.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.login_request = H.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.login_response = c0.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 74) break;
                    a.hash = v0.decode(i, i.uint32());
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.mouse_event = ku.decode(i, i.uint32());
                    continue;
                case 11:
                    if (t !== 90) break;
                    a.audio_frame = j0.decode(i, i.uint32());
                    continue;
                case 12:
                    if (t !== 98) break;
                    a.cursor_data = F0.decode(i, i.uint32());
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.cursor_position = _0.decode(i, i.uint32());
                    continue;
                case 14:
                    if (t !== 112) break;
                    a.cursor_id = V(i.uint64());
                    continue;
                case 15:
                    if (t !== 122) break;
                    a.key_event = w.decode(i, i.uint32());
                    continue;
                case 16:
                    if (t !== 130) break;
                    a.clipboard = U.decode(i, i.uint32());
                    continue;
                case 17:
                    if (t !== 138) break;
                    a.file_action = T.decode(i, i.uint32());
                    continue;
                case 18:
                    if (t !== 146) break;
                    a.file_response = ou.decode(i, i.uint32());
                    continue;
                case 19:
                    if (t !== 154) break;
                    a.misc = h.decode(i, i.uint32());
                    continue;
                case 20:
                    if (t !== 162) break;
                    a.cliprdr = z0.decode(i, i.uint32());
                    continue;
                case 21:
                    if (t !== 170) break;
                    a.message_box = N0.decode(i, i.uint32());
                    continue;
                case 22:
                    if (t !== 178) break;
                    a.switch_sides_response = L0.decode(i, i.uint32());
                    continue;
                case 23:
                    if (t !== 186) break;
                    a.voice_call_request = H0.decode(i, i.uint32());
                    continue;
                case 24:
                    if (t !== 194) break;
                    a.voice_call_response = J0.decode(i, i.uint32());
                    continue;
                case 25:
                    if (t !== 202) break;
                    a.peer_info = Y.decode(i, i.uint32());
                    continue;
                case 26:
                    if (t !== 210) break;
                    a.pointer_device_event = m0.decode(i, i.uint32());
                    continue;
                case 27:
                    if (t !== 218) break;
                    a.auth_2fa = _u.decode(i, i.uint32());
                    continue;
                case 28:
                    if (t !== 226) break;
                    a.multi_clipboards = gu.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            signed_id: n(u.signed_id) ? I0.fromJSON(u.signed_id) : void 0,
            public_key: n(u.public_key) ? K.fromJSON(u.public_key) : void 0,
            test_delay: n(u.test_delay) ? R0.fromJSON(u.test_delay) : void 0,
            video_frame: n(u.video_frame) ? n0.fromJSON(u.video_frame) : void 0,
            login_request: n(u.login_request) ? H.fromJSON(u.login_request) : void 0,
            login_response: n(u.login_response) ? c0.fromJSON(u.login_response) : void 0,
            hash: n(u.hash) ? v0.fromJSON(u.hash) : void 0,
            mouse_event: n(u.mouse_event) ? ku.fromJSON(u.mouse_event) : void 0,
            audio_frame: n(u.audio_frame) ? j0.fromJSON(u.audio_frame) : void 0,
            cursor_data: n(u.cursor_data) ? F0.fromJSON(u.cursor_data) : void 0,
            cursor_position: n(u.cursor_position) ? _0.fromJSON(u.cursor_position) : void 0,
            cursor_id: n(u.cursor_id) ? globalThis.Number(u.cursor_id) : void 0,
            key_event: n(u.key_event) ? w.fromJSON(u.key_event) : void 0,
            clipboard: n(u.clipboard) ? U.fromJSON(u.clipboard) : void 0,
            file_action: n(u.file_action) ? T.fromJSON(u.file_action) : void 0,
            file_response: n(u.file_response) ? ou.fromJSON(u.file_response) : void 0,
            misc: n(u.misc) ? h.fromJSON(u.misc) : void 0,
            cliprdr: n(u.cliprdr) ? z0.fromJSON(u.cliprdr) : void 0,
            message_box: n(u.message_box) ? N0.fromJSON(u.message_box) : void 0,
            switch_sides_response: n(u.switch_sides_response) ? L0.fromJSON(u.switch_sides_response) : void 0,
            voice_call_request: n(u.voice_call_request) ? H0.fromJSON(u.voice_call_request) : void 0,
            voice_call_response: n(u.voice_call_response) ? J0.fromJSON(u.voice_call_response) : void 0,
            peer_info: n(u.peer_info) ? Y.fromJSON(u.peer_info) : void 0,
            pointer_device_event: n(u.pointer_device_event) ? m0.fromJSON(u.pointer_device_event) : void 0,
            auth_2fa: n(u.auth_2fa) ? _u.fromJSON(u.auth_2fa) : void 0,
            multi_clipboards: n(u.multi_clipboards) ? gu.fromJSON(u.multi_clipboards) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.signed_id !== void 0 && (e.signed_id = I0.toJSON(u.signed_id)), u.public_key !== void 0 && (e.public_key = K.toJSON(u.public_key)), u.test_delay !== void 0 && (e.test_delay = R0.toJSON(u.test_delay)), u.video_frame !== void 0 && (e.video_frame = n0.toJSON(u.video_frame)), u.login_request !== void 0 && (e.login_request = H.toJSON(u.login_request)), u.login_response !== void 0 && (e.login_response = c0.toJSON(u.login_response)), u.hash !== void 0 && (e.hash = v0.toJSON(u.hash)), u.mouse_event !== void 0 && (e.mouse_event = ku.toJSON(u.mouse_event)), u.audio_frame !== void 0 && (e.audio_frame = j0.toJSON(u.audio_frame)), u.cursor_data !== void 0 && (e.cursor_data = F0.toJSON(u.cursor_data)), u.cursor_position !== void 0 && (e.cursor_position = _0.toJSON(u.cursor_position)), u.cursor_id !== void 0 && (e.cursor_id = Math.round(u.cursor_id)), u.key_event !== void 0 && (e.key_event = w.toJSON(u.key_event)), u.clipboard !== void 0 && (e.clipboard = U.toJSON(u.clipboard)), u.file_action !== void 0 && (e.file_action = T.toJSON(u.file_action)), u.file_response !== void 0 && (e.file_response = ou.toJSON(u.file_response)), u.misc !== void 0 && (e.misc = h.toJSON(u.misc)), u.cliprdr !== void 0 && (e.cliprdr = z0.toJSON(u.cliprdr)), u.message_box !== void 0 && (e.message_box = N0.toJSON(u.message_box)), u.switch_sides_response !== void 0 && (e.switch_sides_response = L0.toJSON(u.switch_sides_response)), u.voice_call_request !== void 0 && (e.voice_call_request = H0.toJSON(u.voice_call_request)), u.voice_call_response !== void 0 && (e.voice_call_response = J0.toJSON(u.voice_call_response)), u.peer_info !== void 0 && (e.peer_info = Y.toJSON(u.peer_info)), u.pointer_device_event !== void 0 && (e.pointer_device_event = m0.toJSON(u.pointer_device_event)), u.auth_2fa !== void 0 && (e.auth_2fa = _u.toJSON(u.auth_2fa)), u.multi_clipboards !== void 0 && (e.multi_clipboards = gu.toJSON(u.multi_clipboards)), e
    }, create(u) {
        return eu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = pi();
        return e.signed_id = u.signed_id !== void 0 && u.signed_id !== null ? I0.fromPartial(u.signed_id) : void 0, e.public_key = u.public_key !== void 0 && u.public_key !== null ? K.fromPartial(u.public_key) : void 0, e.test_delay = u.test_delay !== void 0 && u.test_delay !== null ? R0.fromPartial(u.test_delay) : void 0, e.video_frame = u.video_frame !== void 0 && u.video_frame !== null ? n0.fromPartial(u.video_frame) : void 0, e.login_request = u.login_request !== void 0 && u.login_request !== null ? H.fromPartial(u.login_request) : void 0, e.login_response = u.login_response !== void 0 && u.login_response !== null ? c0.fromPartial(u.login_response) : void 0, e.hash = u.hash !== void 0 && u.hash !== null ? v0.fromPartial(u.hash) : void 0, e.mouse_event = u.mouse_event !== void 0 && u.mouse_event !== null ? ku.fromPartial(u.mouse_event) : void 0, e.audio_frame = u.audio_frame !== void 0 && u.audio_frame !== null ? j0.fromPartial(u.audio_frame) : void 0, e.cursor_data = u.cursor_data !== void 0 && u.cursor_data !== null ? F0.fromPartial(u.cursor_data) : void 0, e.cursor_position = u.cursor_position !== void 0 && u.cursor_position !== null ? _0.fromPartial(u.cursor_position) : void 0, e.cursor_id = (i = u.cursor_id) != null ? i : void 0, e.key_event = u.key_event !== void 0 && u.key_event !== null ? w.fromPartial(u.key_event) : void 0, e.clipboard = u.clipboard !== void 0 && u.clipboard !== null ? U.fromPartial(u.clipboard) : void 0, e.file_action = u.file_action !== void 0 && u.file_action !== null ? T.fromPartial(u.file_action) : void 0, e.file_response = u.file_response !== void 0 && u.file_response !== null ? ou.fromPartial(u.file_response) : void 0, e.misc = u.misc !== void 0 && u.misc !== null ? h.fromPartial(u.misc) : void 0, e.cliprdr = u.cliprdr !== void 0 && u.cliprdr !== null ? z0.fromPartial(u.cliprdr) : void 0, e.message_box = u.message_box !== void 0 && u.message_box !== null ? N0.fromPartial(u.message_box) : void 0, e.switch_sides_response = u.switch_sides_response !== void 0 && u.switch_sides_response !== null ? L0.fromPartial(u.switch_sides_response) : void 0, e.voice_call_request = u.voice_call_request !== void 0 && u.voice_call_request !== null ? H0.fromPartial(u.voice_call_request) : void 0, e.voice_call_response = u.voice_call_response !== void 0 && u.voice_call_response !== null ? J0.fromPartial(u.voice_call_response) : void 0, e.peer_info = u.peer_info !== void 0 && u.peer_info !== null ? Y.fromPartial(u.peer_info) : void 0, e.pointer_device_event = u.pointer_device_event !== void 0 && u.pointer_device_event !== null ? m0.fromPartial(u.pointer_device_event) : void 0, e.auth_2fa = u.auth_2fa !== void 0 && u.auth_2fa !== null ? _u.fromPartial(u.auth_2fa) : void 0, e.multi_clipboards = u.multi_clipboards !== void 0 && u.multi_clipboards !== null ? gu.fromPartial(u.multi_clipboards) : void 0, e
    }
};

function z(u) {
    if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(u, "base64"));
    {
        const e = globalThis.atob(u), i = new Uint8Array(e.length);
        for (let o = 0; o < e.length; ++o) i[o] = e.charCodeAt(o);
        return i
    }
}

function P(u) {
    if (globalThis.Buffer) return globalThis.Buffer.from(u).toString("base64");
    {
        const e = [];
        return u.forEach(i => {
            e.push(globalThis.String.fromCharCode(i))
        }), globalThis.btoa(e.join(""))
    }
}

function V(u) {
    if (u.gt(globalThis.Number.MAX_SAFE_INTEGER)) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    if (u.lt(globalThis.Number.MIN_SAFE_INTEGER)) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    return u.toNumber()
}

r.util.Long !== Re && (r.util.Long = Re, r.configure());

function n(u) {
    return u != null
}

var ae = (u => (u[u.DEFAULT_CONN = 0] = "DEFAULT_CONN", u[u.FILE_TRANSFER = 1] = "FILE_TRANSFER", u[u.PORT_FORWARD = 2] = "PORT_FORWARD", u[u.RDP = 3] = "RDP", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(ae || {});

function nt(u) {
    switch (u) {
        case 0:
        case"DEFAULT_CONN":
            return 0;
        case 1:
        case"FILE_TRANSFER":
            return 1;
        case 2:
        case"PORT_FORWARD":
            return 2;
        case 3:
        case"RDP":
            return 3;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function rt(u) {
    switch (u) {
        case 0:
            return "DEFAULT_CONN";
        case 1:
            return "FILE_TRANSFER";
        case 2:
            return "PORT_FORWARD";
        case 3:
            return "RDP";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var st = (u => (u[u.UNKNOWN_NAT = 0] = "UNKNOWN_NAT", u[u.ASYMMETRIC = 1] = "ASYMMETRIC", u[u.SYMMETRIC = 2] = "SYMMETRIC", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(st || {});

function J4(u) {
    switch (u) {
        case 0:
        case"UNKNOWN_NAT":
            return 0;
        case 1:
        case"ASYMMETRIC":
            return 1;
        case 2:
        case"SYMMETRIC":
            return 2;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function G4(u) {
    switch (u) {
        case 0:
            return "UNKNOWN_NAT";
        case 1:
            return "ASYMMETRIC";
        case 2:
            return "SYMMETRIC";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

function _a(u) {
    switch (u) {
        case 0:
        case"OK":
            return 0;
        case 2:
        case"UUID_MISMATCH":
            return 2;
        case 3:
        case"ID_EXISTS":
            return 3;
        case 4:
        case"TOO_FREQUENT":
            return 4;
        case 5:
        case"INVALID_ID_FORMAT":
            return 5;
        case 6:
        case"NOT_SUPPORT":
            return 6;
        case 7:
        case"SERVER_ERROR":
            return 7;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function va(u) {
    switch (u) {
        case 0:
            return "OK";
        case 2:
            return "UUID_MISMATCH";
        case 3:
            return "ID_EXISTS";
        case 4:
            return "TOO_FREQUENT";
        case 5:
            return "INVALID_ID_FORMAT";
        case 6:
            return "NOT_SUPPORT";
        case 7:
            return "SERVER_ERROR";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

var G0 = (u => (u[u.ID_NOT_EXIST = 0] = "ID_NOT_EXIST", u[u.OFFLINE = 2] = "OFFLINE", u[u.LICENSE_MISMATCH = 3] = "LICENSE_MISMATCH", u[u.LICENSE_OVERUSE = 4] = "LICENSE_OVERUSE", u[u.UNRECOGNIZED = -1] = "UNRECOGNIZED", u))(G0 || {});

function ka(u) {
    switch (u) {
        case 0:
        case"ID_NOT_EXIST":
            return 0;
        case 2:
        case"OFFLINE":
            return 2;
        case 3:
        case"LICENSE_MISMATCH":
            return 3;
        case 4:
        case"LICENSE_OVERUSE":
            return 4;
        case-1:
        case"UNRECOGNIZED":
        default:
            return -1
    }
}

function ga(u) {
    switch (u) {
        case 0:
            return "ID_NOT_EXIST";
        case 2:
            return "OFFLINE";
        case 3:
            return "LICENSE_MISMATCH";
        case 4:
            return "LICENSE_OVERUSE";
        case-1:
        default:
            return "UNRECOGNIZED"
    }
}

function Di() {
    return {id: "", serial: 0}
}

const Z0 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.serial !== 0 && e.uint32(16).int32(u.serial), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Di();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.serial = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {id: p(u.id) ? globalThis.String(u.id) : "", serial: p(u.serial) ? globalThis.Number(u.serial) : 0}
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.serial !== 0 && (e.serial = Math.round(u.serial)), e
    }, create(u) {
        return Z0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Di();
        return e.id = (i = u.id) != null ? i : "", e.serial = (o = u.serial) != null ? o : 0, e
    }
};

function Bi() {
    return {request_pk: !1}
}

const Q0 = {
    encode(u, e = r.Writer.create()) {
        return u.request_pk !== !1 && e.uint32(16).bool(u.request_pk), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Bi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 2:
                    if (t !== 16) break;
                    a.request_pk = i.bool();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {request_pk: p(u.request_pk) ? globalThis.Boolean(u.request_pk) : !1}
    }, toJSON(u) {
        const e = {};
        return u.request_pk !== !1 && (e.request_pk = u.request_pk), e
    }, create(u) {
        return Q0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Bi();
        return e.request_pk = (i = u.request_pk) != null ? i : !1, e
    }
};

function Ai() {
    return {id: "", nat_type: 0, licence_key: "", conn_type: 0, token: "", version: ""}
}

const qu = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.nat_type !== 0 && e.uint32(16).int32(u.nat_type), u.licence_key !== "" && e.uint32(26).string(u.licence_key), u.conn_type !== 0 && e.uint32(32).int32(u.conn_type), u.token !== "" && e.uint32(42).string(u.token), u.version !== "" && e.uint32(50).string(u.version), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ai();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.nat_type = i.int32();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.licence_key = i.string();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.conn_type = i.int32();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.token = i.string();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.version = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: p(u.id) ? globalThis.String(u.id) : "",
            nat_type: p(u.nat_type) ? J4(u.nat_type) : 0,
            licence_key: p(u.licence_key) ? globalThis.String(u.licence_key) : "",
            conn_type: p(u.conn_type) ? nt(u.conn_type) : 0,
            token: p(u.token) ? globalThis.String(u.token) : "",
            version: p(u.version) ? globalThis.String(u.version) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.nat_type !== 0 && (e.nat_type = G4(u.nat_type)), u.licence_key !== "" && (e.licence_key = u.licence_key), u.conn_type !== 0 && (e.conn_type = rt(u.conn_type)), u.token !== "" && (e.token = u.token), u.version !== "" && (e.version = u.version), e
    }, create(u) {
        return qu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l;
        const e = Ai();
        return e.id = (i = u.id) != null ? i : "", e.nat_type = (o = u.nat_type) != null ? o : 0, e.licence_key = (a = u.licence_key) != null ? a : "", e.conn_type = (t = u.conn_type) != null ? t : 0, e.token = (s = u.token) != null ? s : "", e.version = (l = u.version) != null ? l : "", e
    }
};

function mi() {
    return {socket_addr: new Uint8Array(0), relay_server: "", nat_type: 0}
}

const X0 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.relay_server !== "" && e.uint32(18).string(u.relay_server), u.nat_type !== 0 && e.uint32(24).int32(u.nat_type), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = mi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.relay_server = i.string();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.nat_type = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            nat_type: p(u.nat_type) ? J4(u.nat_type) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.relay_server !== "" && (e.relay_server = u.relay_server), u.nat_type !== 0 && (e.nat_type = G4(u.nat_type)), e
    }, create(u) {
        return X0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a;
        const e = mi();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.relay_server = (o = u.relay_server) != null ? o : "", e.nat_type = (a = u.nat_type) != null ? a : 0, e
    }
};

function Fi() {
    return {serial: 0}
}

const Y0 = {
    encode(u, e = r.Writer.create()) {
        return u.serial !== 0 && e.uint32(8).int32(u.serial), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Fi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.serial = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {serial: p(u.serial) ? globalThis.Number(u.serial) : 0}
    }, toJSON(u) {
        const e = {};
        return u.serial !== 0 && (e.serial = Math.round(u.serial)), e
    }, create(u) {
        return Y0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Fi();
        return e.serial = (i = u.serial) != null ? i : 0, e
    }
};

function _i() {
    return {port: 0, cu: void 0}
}

const $0 = {
    encode(u, e = r.Writer.create()) {
        return u.port !== 0 && e.uint32(8).int32(u.port), u.cu !== void 0 && uu.encode(u.cu, e.uint32(18).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = _i();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.port = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.cu = uu.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {port: p(u.port) ? globalThis.Number(u.port) : 0, cu: p(u.cu) ? uu.fromJSON(u.cu) : void 0}
    }, toJSON(u) {
        const e = {};
        return u.port !== 0 && (e.port = Math.round(u.port)), u.cu !== void 0 && (e.cu = uu.toJSON(u.cu)), e
    }, create(u) {
        return $0.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = _i();
        return e.port = (i = u.port) != null ? i : 0, e.cu = u.cu !== void 0 && u.cu !== null ? uu.fromPartial(u.cu) : void 0, e
    }
};

function vi() {
    return {socket_addr: new Uint8Array(0), id: "", relay_server: "", nat_type: 0, version: ""}
}

const u4 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.id !== "" && e.uint32(18).string(u.id), u.relay_server !== "" && e.uint32(26).string(u.relay_server), u.nat_type !== 0 && e.uint32(32).int32(u.nat_type), u.version !== "" && e.uint32(42).string(u.version), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = vi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.id = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.relay_server = i.string();
                    continue;
                case 4:
                    if (t !== 32) break;
                    a.nat_type = i.int32();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.version = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            id: p(u.id) ? globalThis.String(u.id) : "",
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            nat_type: p(u.nat_type) ? J4(u.nat_type) : 0,
            version: p(u.version) ? globalThis.String(u.version) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.id !== "" && (e.id = u.id), u.relay_server !== "" && (e.relay_server = u.relay_server), u.nat_type !== 0 && (e.nat_type = G4(u.nat_type)), u.version !== "" && (e.version = u.version), e
    }, create(u) {
        return u4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = vi();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.id = (o = u.id) != null ? o : "", e.relay_server = (a = u.relay_server) != null ? a : "", e.nat_type = (t = u.nat_type) != null ? t : 0, e.version = (s = u.version) != null ? s : "", e
    }
};

function ki() {
    return {id: "", uuid: new Uint8Array(0), pk: new Uint8Array(0), old_id: ""}
}

const e4 = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.uuid.length !== 0 && e.uint32(18).bytes(u.uuid), u.pk.length !== 0 && e.uint32(26).bytes(u.pk), u.old_id !== "" && e.uint32(34).string(u.old_id), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ki();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.uuid = i.bytes();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.pk = i.bytes();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.old_id = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: p(u.id) ? globalThis.String(u.id) : "",
            uuid: p(u.uuid) ? M(u.uuid) : new Uint8Array(0),
            pk: p(u.pk) ? M(u.pk) : new Uint8Array(0),
            old_id: p(u.old_id) ? globalThis.String(u.old_id) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.uuid.length !== 0 && (e.uuid = L(u.uuid)), u.pk.length !== 0 && (e.pk = L(u.pk)), u.old_id !== "" && (e.old_id = u.old_id), e
    }, create(u) {
        return e4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t;
        const e = ki();
        return e.id = (i = u.id) != null ? i : "", e.uuid = (o = u.uuid) != null ? o : new Uint8Array(0), e.pk = (a = u.pk) != null ? a : new Uint8Array(0), e.old_id = (t = u.old_id) != null ? t : "", e
    }
};

function gi() {
    return {result: 0, keep_alive: 0}
}

const i4 = {
    encode(u, e = r.Writer.create()) {
        return u.result !== 0 && e.uint32(8).int32(u.result), u.keep_alive !== 0 && e.uint32(16).int32(u.keep_alive), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = gi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.result = i.int32();
                    continue;
                case 2:
                    if (t !== 16) break;
                    a.keep_alive = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            result: p(u.result) ? _a(u.result) : 0,
            keep_alive: p(u.keep_alive) ? globalThis.Number(u.keep_alive) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.result !== 0 && (e.result = va(u.result)), u.keep_alive !== 0 && (e.keep_alive = Math.round(u.keep_alive)), e
    }, create(u) {
        return i4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = gi();
        return e.result = (i = u.result) != null ? i : 0, e.keep_alive = (o = u.keep_alive) != null ? o : 0, e
    }
};

function hi() {
    return {
        socket_addr: new Uint8Array(0),
        pk: new Uint8Array(0),
        failure: 0,
        relay_server: "",
        nat_type: void 0,
        is_local: void 0,
        other_failure: "",
        feedback: 0
    }
}

const t4 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.pk.length !== 0 && e.uint32(18).bytes(u.pk), u.failure !== 0 && e.uint32(24).int32(u.failure), u.relay_server !== "" && e.uint32(34).string(u.relay_server), u.nat_type !== void 0 && e.uint32(40).int32(u.nat_type), u.is_local !== void 0 && e.uint32(48).bool(u.is_local), u.other_failure !== "" && e.uint32(58).string(u.other_failure), u.feedback !== 0 && e.uint32(64).int32(u.feedback), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = hi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.pk = i.bytes();
                    continue;
                case 3:
                    if (t !== 24) break;
                    a.failure = i.int32();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.relay_server = i.string();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.nat_type = i.int32();
                    continue;
                case 6:
                    if (t !== 48) break;
                    a.is_local = i.bool();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.other_failure = i.string();
                    continue;
                case 8:
                    if (t !== 64) break;
                    a.feedback = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            pk: p(u.pk) ? M(u.pk) : new Uint8Array(0),
            failure: p(u.failure) ? ka(u.failure) : 0,
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            nat_type: p(u.nat_type) ? J4(u.nat_type) : void 0,
            is_local: p(u.is_local) ? globalThis.Boolean(u.is_local) : void 0,
            other_failure: p(u.other_failure) ? globalThis.String(u.other_failure) : "",
            feedback: p(u.feedback) ? globalThis.Number(u.feedback) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.pk.length !== 0 && (e.pk = L(u.pk)), u.failure !== 0 && (e.failure = ga(u.failure)), u.relay_server !== "" && (e.relay_server = u.relay_server), u.nat_type !== void 0 && (e.nat_type = G4(u.nat_type)), u.is_local !== void 0 && (e.is_local = u.is_local), u.other_failure !== "" && (e.other_failure = u.other_failure), u.feedback !== 0 && (e.feedback = Math.round(u.feedback)), e
    }, create(u) {
        return t4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = hi();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.pk = (o = u.pk) != null ? o : new Uint8Array(0), e.failure = (a = u.failure) != null ? a : 0, e.relay_server = (t = u.relay_server) != null ? t : "", e.nat_type = (s = u.nat_type) != null ? s : void 0, e.is_local = (l = u.is_local) != null ? l : void 0, e.other_failure = (E = u.other_failure) != null ? E : "", e.feedback = (c = u.feedback) != null ? c : 0, e
    }
};

function fi() {
    return {serial: 0, rendezvous_servers: []}
}

const uu = {
    encode(u, e = r.Writer.create()) {
        u.serial !== 0 && e.uint32(8).int32(u.serial);
        for (const i of u.rendezvous_servers) e.uint32(18).string(i);
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = fi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 8) break;
                    a.serial = i.int32();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.rendezvous_servers.push(i.string());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            serial: p(u.serial) ? globalThis.Number(u.serial) : 0,
            rendezvous_servers: globalThis.Array.isArray(u == null ? void 0 : u.rendezvous_servers) ? u.rendezvous_servers.map(e => globalThis.String(e)) : []
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.serial !== 0 && (e.serial = Math.round(u.serial)), (i = u.rendezvous_servers) != null && i.length && (e.rendezvous_servers = u.rendezvous_servers), e
    }, create(u) {
        return uu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = fi();
        return e.serial = (i = u.serial) != null ? i : 0, e.rendezvous_servers = ((o = u.rendezvous_servers) == null ? void 0 : o.map(a => a)) || [], e
    }
};

function xi() {
    return {
        id: "",
        uuid: "",
        socket_addr: new Uint8Array(0),
        relay_server: "",
        secure: !1,
        licence_key: "",
        conn_type: 0,
        token: ""
    }
}

const Ku = {
    encode(u, e = r.Writer.create()) {
        return u.id !== "" && e.uint32(10).string(u.id), u.uuid !== "" && e.uint32(18).string(u.uuid), u.socket_addr.length !== 0 && e.uint32(26).bytes(u.socket_addr), u.relay_server !== "" && e.uint32(34).string(u.relay_server), u.secure !== !1 && e.uint32(40).bool(u.secure), u.licence_key !== "" && e.uint32(50).string(u.licence_key), u.conn_type !== 0 && e.uint32(56).int32(u.conn_type), u.token !== "" && e.uint32(66).string(u.token), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = xi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.uuid = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.relay_server = i.string();
                    continue;
                case 5:
                    if (t !== 40) break;
                    a.secure = i.bool();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.licence_key = i.string();
                    continue;
                case 7:
                    if (t !== 56) break;
                    a.conn_type = i.int32();
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.token = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: p(u.id) ? globalThis.String(u.id) : "",
            uuid: p(u.uuid) ? globalThis.String(u.uuid) : "",
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            secure: p(u.secure) ? globalThis.Boolean(u.secure) : !1,
            licence_key: p(u.licence_key) ? globalThis.String(u.licence_key) : "",
            conn_type: p(u.conn_type) ? nt(u.conn_type) : 0,
            token: p(u.token) ? globalThis.String(u.token) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.id !== "" && (e.id = u.id), u.uuid !== "" && (e.uuid = u.uuid), u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.relay_server !== "" && (e.relay_server = u.relay_server), u.secure !== !1 && (e.secure = u.secure), u.licence_key !== "" && (e.licence_key = u.licence_key), u.conn_type !== 0 && (e.conn_type = rt(u.conn_type)), u.token !== "" && (e.token = u.token), e
    }, create(u) {
        return Ku.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = xi();
        return e.id = (i = u.id) != null ? i : "", e.uuid = (o = u.uuid) != null ? o : "", e.socket_addr = (a = u.socket_addr) != null ? a : new Uint8Array(0), e.relay_server = (t = u.relay_server) != null ? t : "", e.secure = (s = u.secure) != null ? s : !1, e.licence_key = (l = u.licence_key) != null ? l : "", e.conn_type = (E = u.conn_type) != null ? E : 0, e.token = (c = u.token) != null ? c : "", e
    }
};

function yi() {
    return {
        socket_addr: new Uint8Array(0),
        uuid: "",
        relay_server: "",
        id: void 0,
        pk: void 0,
        refuse_reason: "",
        version: "",
        feedback: 0
    }
}

const a4 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.uuid !== "" && e.uint32(18).string(u.uuid), u.relay_server !== "" && e.uint32(26).string(u.relay_server), u.id !== void 0 && e.uint32(34).string(u.id), u.pk !== void 0 && e.uint32(42).bytes(u.pk), u.refuse_reason !== "" && e.uint32(50).string(u.refuse_reason), u.version !== "" && e.uint32(58).string(u.version), u.feedback !== 0 && e.uint32(72).int32(u.feedback), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = yi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.uuid = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.relay_server = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.id = i.string();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.pk = i.bytes();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.refuse_reason = i.string();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.version = i.string();
                    continue;
                case 9:
                    if (t !== 72) break;
                    a.feedback = i.int32();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            uuid: p(u.uuid) ? globalThis.String(u.uuid) : "",
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            id: p(u.id) ? globalThis.String(u.id) : void 0,
            pk: p(u.pk) ? M(u.pk) : void 0,
            refuse_reason: p(u.refuse_reason) ? globalThis.String(u.refuse_reason) : "",
            version: p(u.version) ? globalThis.String(u.version) : "",
            feedback: p(u.feedback) ? globalThis.Number(u.feedback) : 0
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.uuid !== "" && (e.uuid = u.uuid), u.relay_server !== "" && (e.relay_server = u.relay_server), u.id !== void 0 && (e.id = u.id), u.pk !== void 0 && (e.pk = L(u.pk)), u.refuse_reason !== "" && (e.refuse_reason = u.refuse_reason), u.version !== "" && (e.version = u.version), u.feedback !== 0 && (e.feedback = Math.round(u.feedback)), e
    }, create(u) {
        return a4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E, c;
        const e = yi();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.uuid = (o = u.uuid) != null ? o : "", e.relay_server = (a = u.relay_server) != null ? a : "", e.id = (t = u.id) != null ? t : void 0, e.pk = (s = u.pk) != null ? s : void 0, e.refuse_reason = (l = u.refuse_reason) != null ? l : "", e.version = (E = u.version) != null ? E : "", e.feedback = (c = u.feedback) != null ? c : 0, e
    }
};

function bi() {
    return {url: ""}
}

const o4 = {
    encode(u, e = r.Writer.create()) {
        return u.url !== "" && e.uint32(10).string(u.url), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = bi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.url = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {url: p(u.url) ? globalThis.String(u.url) : ""}
    }, toJSON(u) {
        const e = {};
        return u.url !== "" && (e.url = u.url), e
    }, create(u) {
        return o4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = bi();
        return e.url = (i = u.url) != null ? i : "", e
    }
};

function wi() {
    return {socket_addr: new Uint8Array(0), relay_server: ""}
}

const n4 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.relay_server !== "" && e.uint32(18).string(u.relay_server), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = wi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.relay_server = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.relay_server !== "" && (e.relay_server = u.relay_server), e
    }, create(u) {
        return n4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = wi();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.relay_server = (o = u.relay_server) != null ? o : "", e
    }
};

function Si() {
    return {socket_addr: new Uint8Array(0), local_addr: new Uint8Array(0), relay_server: "", id: "", version: ""}
}

const r4 = {
    encode(u, e = r.Writer.create()) {
        return u.socket_addr.length !== 0 && e.uint32(10).bytes(u.socket_addr), u.local_addr.length !== 0 && e.uint32(18).bytes(u.local_addr), u.relay_server !== "" && e.uint32(26).string(u.relay_server), u.id !== "" && e.uint32(34).string(u.id), u.version !== "" && e.uint32(42).string(u.version), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Si();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.socket_addr = i.bytes();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.local_addr = i.bytes();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.relay_server = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.id = i.string();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.version = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            socket_addr: p(u.socket_addr) ? M(u.socket_addr) : new Uint8Array(0),
            local_addr: p(u.local_addr) ? M(u.local_addr) : new Uint8Array(0),
            relay_server: p(u.relay_server) ? globalThis.String(u.relay_server) : "",
            id: p(u.id) ? globalThis.String(u.id) : "",
            version: p(u.version) ? globalThis.String(u.version) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.socket_addr.length !== 0 && (e.socket_addr = L(u.socket_addr)), u.local_addr.length !== 0 && (e.local_addr = L(u.local_addr)), u.relay_server !== "" && (e.relay_server = u.relay_server), u.id !== "" && (e.id = u.id), u.version !== "" && (e.version = u.version), e
    }, create(u) {
        return r4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s;
        const e = Si();
        return e.socket_addr = (i = u.socket_addr) != null ? i : new Uint8Array(0), e.local_addr = (o = u.local_addr) != null ? o : new Uint8Array(0), e.relay_server = (a = u.relay_server) != null ? a : "", e.id = (t = u.id) != null ? t : "", e.version = (s = u.version) != null ? s : "", e
    }
};

function zi() {
    return {cmd: "", mac: "", id: "", username: "", hostname: "", platform: "", misc: ""}
}

const s4 = {
    encode(u, e = r.Writer.create()) {
        return u.cmd !== "" && e.uint32(10).string(u.cmd), u.mac !== "" && e.uint32(18).string(u.mac), u.id !== "" && e.uint32(26).string(u.id), u.username !== "" && e.uint32(34).string(u.username), u.hostname !== "" && e.uint32(42).string(u.hostname), u.platform !== "" && e.uint32(50).string(u.platform), u.misc !== "" && e.uint32(58).string(u.misc), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = zi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.cmd = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.mac = i.string();
                    continue;
                case 3:
                    if (t !== 26) break;
                    a.id = i.string();
                    continue;
                case 4:
                    if (t !== 34) break;
                    a.username = i.string();
                    continue;
                case 5:
                    if (t !== 42) break;
                    a.hostname = i.string();
                    continue;
                case 6:
                    if (t !== 50) break;
                    a.platform = i.string();
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.misc = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            cmd: p(u.cmd) ? globalThis.String(u.cmd) : "",
            mac: p(u.mac) ? globalThis.String(u.mac) : "",
            id: p(u.id) ? globalThis.String(u.id) : "",
            username: p(u.username) ? globalThis.String(u.username) : "",
            hostname: p(u.hostname) ? globalThis.String(u.hostname) : "",
            platform: p(u.platform) ? globalThis.String(u.platform) : "",
            misc: p(u.misc) ? globalThis.String(u.misc) : ""
        }
    }, toJSON(u) {
        const e = {};
        return u.cmd !== "" && (e.cmd = u.cmd), u.mac !== "" && (e.mac = u.mac), u.id !== "" && (e.id = u.id), u.username !== "" && (e.username = u.username), u.hostname !== "" && (e.hostname = u.hostname), u.platform !== "" && (e.platform = u.platform), u.misc !== "" && (e.misc = u.misc), e
    }, create(u) {
        return s4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o, a, t, s, l, E;
        const e = zi();
        return e.cmd = (i = u.cmd) != null ? i : "", e.mac = (o = u.mac) != null ? o : "", e.id = (a = u.id) != null ? a : "", e.username = (t = u.username) != null ? t : "", e.hostname = (s = u.hostname) != null ? s : "", e.platform = (l = u.platform) != null ? l : "", e.misc = (E = u.misc) != null ? E : "", e
    }
};

function Pi() {
    return {id: "", peers: []}
}

const Hu = {
    encode(u, e = r.Writer.create()) {
        u.id !== "" && e.uint32(10).string(u.id);
        for (const i of u.peers) e.uint32(18).string(i);
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Pi();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.id = i.string();
                    continue;
                case 2:
                    if (t !== 18) break;
                    a.peers.push(i.string());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            id: p(u.id) ? globalThis.String(u.id) : "",
            peers: globalThis.Array.isArray(u == null ? void 0 : u.peers) ? u.peers.map(e => globalThis.String(e)) : []
        }
    }, toJSON(u) {
        var i;
        const e = {};
        return u.id !== "" && (e.id = u.id), (i = u.peers) != null && i.length && (e.peers = u.peers), e
    }, create(u) {
        return Hu.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i, o;
        const e = Pi();
        return e.id = (i = u.id) != null ? i : "", e.peers = ((o = u.peers) == null ? void 0 : o.map(a => a)) || [], e
    }
};

function Ri() {
    return {states: new Uint8Array(0)}
}

const l4 = {
    encode(u, e = r.Writer.create()) {
        return u.states.length !== 0 && e.uint32(10).bytes(u.states), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ri();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.states = i.bytes();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {states: p(u.states) ? M(u.states) : new Uint8Array(0)}
    }, toJSON(u) {
        const e = {};
        return u.states.length !== 0 && (e.states = L(u.states)), e
    }, create(u) {
        return l4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Ri();
        return e.states = (i = u.states) != null ? i : new Uint8Array(0), e
    }
};

function Ii() {
    return {keys: []}
}

const E4 = {
    encode(u, e = r.Writer.create()) {
        for (const i of u.keys) e.uint32(10).bytes(i);
        return e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ii();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.keys.push(i.bytes());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {keys: globalThis.Array.isArray(u == null ? void 0 : u.keys) ? u.keys.map(e => M(e)) : []}
    }, toJSON(u) {
        var i;
        const e = {};
        return (i = u.keys) != null && i.length && (e.keys = u.keys.map(o => L(o))), e
    }, create(u) {
        return E4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Ii();
        return e.keys = ((i = u.keys) == null ? void 0 : i.map(o => o)) || [], e
    }
};

function Ti() {
    return {token: ""}
}

const Ju = {
    encode(u, e = r.Writer.create()) {
        return u.token !== "" && e.uint32(10).string(u.token), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = Ti();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 1:
                    if (t !== 10) break;
                    a.token = i.string();
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {token: p(u.token) ? globalThis.String(u.token) : ""}
    }, toJSON(u) {
        const e = {};
        return u.token !== "" && (e.token = u.token), e
    }, create(u) {
        return Ju.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        var i;
        const e = Ti();
        return e.token = (i = u.token) != null ? i : "", e
    }
};

function ji() {
    return {
        register_peer: void 0,
        register_peer_response: void 0,
        punch_hole_request: void 0,
        punch_hole: void 0,
        punch_hole_sent: void 0,
        punch_hole_response: void 0,
        fetch_local_addr: void 0,
        local_addr: void 0,
        configure_update: void 0,
        register_pk: void 0,
        register_pk_response: void 0,
        software_update: void 0,
        request_relay: void 0,
        relay_response: void 0,
        test_nat_request: void 0,
        test_nat_response: void 0,
        peer_discovery: void 0,
        online_request: void 0,
        online_response: void 0,
        key_exchange: void 0,
        hc: void 0
    }
}

const y4 = {
    encode(u, e = r.Writer.create()) {
        return u.register_peer !== void 0 && Z0.encode(u.register_peer, e.uint32(50).fork()).ldelim(), u.register_peer_response !== void 0 && Q0.encode(u.register_peer_response, e.uint32(58).fork()).ldelim(), u.punch_hole_request !== void 0 && qu.encode(u.punch_hole_request, e.uint32(66).fork()).ldelim(), u.punch_hole !== void 0 && X0.encode(u.punch_hole, e.uint32(74).fork()).ldelim(), u.punch_hole_sent !== void 0 && u4.encode(u.punch_hole_sent, e.uint32(82).fork()).ldelim(), u.punch_hole_response !== void 0 && t4.encode(u.punch_hole_response, e.uint32(90).fork()).ldelim(), u.fetch_local_addr !== void 0 && n4.encode(u.fetch_local_addr, e.uint32(98).fork()).ldelim(), u.local_addr !== void 0 && r4.encode(u.local_addr, e.uint32(106).fork()).ldelim(), u.configure_update !== void 0 && uu.encode(u.configure_update, e.uint32(114).fork()).ldelim(), u.register_pk !== void 0 && e4.encode(u.register_pk, e.uint32(122).fork()).ldelim(), u.register_pk_response !== void 0 && i4.encode(u.register_pk_response, e.uint32(130).fork()).ldelim(), u.software_update !== void 0 && o4.encode(u.software_update, e.uint32(138).fork()).ldelim(), u.request_relay !== void 0 && Ku.encode(u.request_relay, e.uint32(146).fork()).ldelim(), u.relay_response !== void 0 && a4.encode(u.relay_response, e.uint32(154).fork()).ldelim(), u.test_nat_request !== void 0 && Y0.encode(u.test_nat_request, e.uint32(162).fork()).ldelim(), u.test_nat_response !== void 0 && $0.encode(u.test_nat_response, e.uint32(170).fork()).ldelim(), u.peer_discovery !== void 0 && s4.encode(u.peer_discovery, e.uint32(178).fork()).ldelim(), u.online_request !== void 0 && Hu.encode(u.online_request, e.uint32(186).fork()).ldelim(), u.online_response !== void 0 && l4.encode(u.online_response, e.uint32(194).fork()).ldelim(), u.key_exchange !== void 0 && E4.encode(u.key_exchange, e.uint32(202).fork()).ldelim(), u.hc !== void 0 && Ju.encode(u.hc, e.uint32(210).fork()).ldelim(), e
    }, decode(u, e) {
        const i = u instanceof r.Reader ? u : r.Reader.create(u);
        let o = e === void 0 ? i.len : i.pos + e;
        const a = ji();
        for (; i.pos < o;) {
            const t = i.uint32();
            switch (t >>> 3) {
                case 6:
                    if (t !== 50) break;
                    a.register_peer = Z0.decode(i, i.uint32());
                    continue;
                case 7:
                    if (t !== 58) break;
                    a.register_peer_response = Q0.decode(i, i.uint32());
                    continue;
                case 8:
                    if (t !== 66) break;
                    a.punch_hole_request = qu.decode(i, i.uint32());
                    continue;
                case 9:
                    if (t !== 74) break;
                    a.punch_hole = X0.decode(i, i.uint32());
                    continue;
                case 10:
                    if (t !== 82) break;
                    a.punch_hole_sent = u4.decode(i, i.uint32());
                    continue;
                case 11:
                    if (t !== 90) break;
                    a.punch_hole_response = t4.decode(i, i.uint32());
                    continue;
                case 12:
                    if (t !== 98) break;
                    a.fetch_local_addr = n4.decode(i, i.uint32());
                    continue;
                case 13:
                    if (t !== 106) break;
                    a.local_addr = r4.decode(i, i.uint32());
                    continue;
                case 14:
                    if (t !== 114) break;
                    a.configure_update = uu.decode(i, i.uint32());
                    continue;
                case 15:
                    if (t !== 122) break;
                    a.register_pk = e4.decode(i, i.uint32());
                    continue;
                case 16:
                    if (t !== 130) break;
                    a.register_pk_response = i4.decode(i, i.uint32());
                    continue;
                case 17:
                    if (t !== 138) break;
                    a.software_update = o4.decode(i, i.uint32());
                    continue;
                case 18:
                    if (t !== 146) break;
                    a.request_relay = Ku.decode(i, i.uint32());
                    continue;
                case 19:
                    if (t !== 154) break;
                    a.relay_response = a4.decode(i, i.uint32());
                    continue;
                case 20:
                    if (t !== 162) break;
                    a.test_nat_request = Y0.decode(i, i.uint32());
                    continue;
                case 21:
                    if (t !== 170) break;
                    a.test_nat_response = $0.decode(i, i.uint32());
                    continue;
                case 22:
                    if (t !== 178) break;
                    a.peer_discovery = s4.decode(i, i.uint32());
                    continue;
                case 23:
                    if (t !== 186) break;
                    a.online_request = Hu.decode(i, i.uint32());
                    continue;
                case 24:
                    if (t !== 194) break;
                    a.online_response = l4.decode(i, i.uint32());
                    continue;
                case 25:
                    if (t !== 202) break;
                    a.key_exchange = E4.decode(i, i.uint32());
                    continue;
                case 26:
                    if (t !== 210) break;
                    a.hc = Ju.decode(i, i.uint32());
                    continue
            }
            if ((t & 7) === 4 || t === 0) break;
            i.skipType(t & 7)
        }
        return a
    }, fromJSON(u) {
        return {
            register_peer: p(u.register_peer) ? Z0.fromJSON(u.register_peer) : void 0,
            register_peer_response: p(u.register_peer_response) ? Q0.fromJSON(u.register_peer_response) : void 0,
            punch_hole_request: p(u.punch_hole_request) ? qu.fromJSON(u.punch_hole_request) : void 0,
            punch_hole: p(u.punch_hole) ? X0.fromJSON(u.punch_hole) : void 0,
            punch_hole_sent: p(u.punch_hole_sent) ? u4.fromJSON(u.punch_hole_sent) : void 0,
            punch_hole_response: p(u.punch_hole_response) ? t4.fromJSON(u.punch_hole_response) : void 0,
            fetch_local_addr: p(u.fetch_local_addr) ? n4.fromJSON(u.fetch_local_addr) : void 0,
            local_addr: p(u.local_addr) ? r4.fromJSON(u.local_addr) : void 0,
            configure_update: p(u.configure_update) ? uu.fromJSON(u.configure_update) : void 0,
            register_pk: p(u.register_pk) ? e4.fromJSON(u.register_pk) : void 0,
            register_pk_response: p(u.register_pk_response) ? i4.fromJSON(u.register_pk_response) : void 0,
            software_update: p(u.software_update) ? o4.fromJSON(u.software_update) : void 0,
            request_relay: p(u.request_relay) ? Ku.fromJSON(u.request_relay) : void 0,
            relay_response: p(u.relay_response) ? a4.fromJSON(u.relay_response) : void 0,
            test_nat_request: p(u.test_nat_request) ? Y0.fromJSON(u.test_nat_request) : void 0,
            test_nat_response: p(u.test_nat_response) ? $0.fromJSON(u.test_nat_response) : void 0,
            peer_discovery: p(u.peer_discovery) ? s4.fromJSON(u.peer_discovery) : void 0,
            online_request: p(u.online_request) ? Hu.fromJSON(u.online_request) : void 0,
            online_response: p(u.online_response) ? l4.fromJSON(u.online_response) : void 0,
            key_exchange: p(u.key_exchange) ? E4.fromJSON(u.key_exchange) : void 0,
            hc: p(u.hc) ? Ju.fromJSON(u.hc) : void 0
        }
    }, toJSON(u) {
        const e = {};
        return u.register_peer !== void 0 && (e.register_peer = Z0.toJSON(u.register_peer)), u.register_peer_response !== void 0 && (e.register_peer_response = Q0.toJSON(u.register_peer_response)), u.punch_hole_request !== void 0 && (e.punch_hole_request = qu.toJSON(u.punch_hole_request)), u.punch_hole !== void 0 && (e.punch_hole = X0.toJSON(u.punch_hole)), u.punch_hole_sent !== void 0 && (e.punch_hole_sent = u4.toJSON(u.punch_hole_sent)), u.punch_hole_response !== void 0 && (e.punch_hole_response = t4.toJSON(u.punch_hole_response)), u.fetch_local_addr !== void 0 && (e.fetch_local_addr = n4.toJSON(u.fetch_local_addr)), u.local_addr !== void 0 && (e.local_addr = r4.toJSON(u.local_addr)), u.configure_update !== void 0 && (e.configure_update = uu.toJSON(u.configure_update)), u.register_pk !== void 0 && (e.register_pk = e4.toJSON(u.register_pk)), u.register_pk_response !== void 0 && (e.register_pk_response = i4.toJSON(u.register_pk_response)), u.software_update !== void 0 && (e.software_update = o4.toJSON(u.software_update)), u.request_relay !== void 0 && (e.request_relay = Ku.toJSON(u.request_relay)), u.relay_response !== void 0 && (e.relay_response = a4.toJSON(u.relay_response)), u.test_nat_request !== void 0 && (e.test_nat_request = Y0.toJSON(u.test_nat_request)), u.test_nat_response !== void 0 && (e.test_nat_response = $0.toJSON(u.test_nat_response)), u.peer_discovery !== void 0 && (e.peer_discovery = s4.toJSON(u.peer_discovery)), u.online_request !== void 0 && (e.online_request = Hu.toJSON(u.online_request)), u.online_response !== void 0 && (e.online_response = l4.toJSON(u.online_response)), u.key_exchange !== void 0 && (e.key_exchange = E4.toJSON(u.key_exchange)), u.hc !== void 0 && (e.hc = Ju.toJSON(u.hc)), e
    }, create(u) {
        return y4.fromPartial(u != null ? u : {})
    }, fromPartial(u) {
        const e = ji();
        return e.register_peer = u.register_peer !== void 0 && u.register_peer !== null ? Z0.fromPartial(u.register_peer) : void 0, e.register_peer_response = u.register_peer_response !== void 0 && u.register_peer_response !== null ? Q0.fromPartial(u.register_peer_response) : void 0, e.punch_hole_request = u.punch_hole_request !== void 0 && u.punch_hole_request !== null ? qu.fromPartial(u.punch_hole_request) : void 0, e.punch_hole = u.punch_hole !== void 0 && u.punch_hole !== null ? X0.fromPartial(u.punch_hole) : void 0, e.punch_hole_sent = u.punch_hole_sent !== void 0 && u.punch_hole_sent !== null ? u4.fromPartial(u.punch_hole_sent) : void 0, e.punch_hole_response = u.punch_hole_response !== void 0 && u.punch_hole_response !== null ? t4.fromPartial(u.punch_hole_response) : void 0, e.fetch_local_addr = u.fetch_local_addr !== void 0 && u.fetch_local_addr !== null ? n4.fromPartial(u.fetch_local_addr) : void 0, e.local_addr = u.local_addr !== void 0 && u.local_addr !== null ? r4.fromPartial(u.local_addr) : void 0, e.configure_update = u.configure_update !== void 0 && u.configure_update !== null ? uu.fromPartial(u.configure_update) : void 0, e.register_pk = u.register_pk !== void 0 && u.register_pk !== null ? e4.fromPartial(u.register_pk) : void 0, e.register_pk_response = u.register_pk_response !== void 0 && u.register_pk_response !== null ? i4.fromPartial(u.register_pk_response) : void 0, e.software_update = u.software_update !== void 0 && u.software_update !== null ? o4.fromPartial(u.software_update) : void 0, e.request_relay = u.request_relay !== void 0 && u.request_relay !== null ? Ku.fromPartial(u.request_relay) : void 0, e.relay_response = u.relay_response !== void 0 && u.relay_response !== null ? a4.fromPartial(u.relay_response) : void 0, e.test_nat_request = u.test_nat_request !== void 0 && u.test_nat_request !== null ? Y0.fromPartial(u.test_nat_request) : void 0, e.test_nat_response = u.test_nat_response !== void 0 && u.test_nat_response !== null ? $0.fromPartial(u.test_nat_response) : void 0, e.peer_discovery = u.peer_discovery !== void 0 && u.peer_discovery !== null ? s4.fromPartial(u.peer_discovery) : void 0, e.online_request = u.online_request !== void 0 && u.online_request !== null ? Hu.fromPartial(u.online_request) : void 0, e.online_response = u.online_response !== void 0 && u.online_response !== null ? l4.fromPartial(u.online_response) : void 0, e.key_exchange = u.key_exchange !== void 0 && u.key_exchange !== null ? E4.fromPartial(u.key_exchange) : void 0, e.hc = u.hc !== void 0 && u.hc !== null ? Ju.fromPartial(u.hc) : void 0, e
    }
};

function M(u) {
    if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(u, "base64"));
    {
        const e = globalThis.atob(u), i = new Uint8Array(e.length);
        for (let o = 0; o < e.length; ++o) i[o] = e.charCodeAt(o);
        return i
    }
}

function L(u) {
    if (globalThis.Buffer) return globalThis.Buffer.from(u).toString("base64");
    {
        const e = [];
        return u.forEach(i => {
            e.push(globalThis.String.fromCharCode(i))
        }), globalThis.btoa(e.join(""))
    }
}

function p(u) {
    return u != null
}

class I4 {
    constructor(e, i = !0, o = "") {
        d(this, "_websocket");
        d(this, "_eventHandlers");
        d(this, "_buf");
        d(this, "_status");
        d(this, "_latency");
        d(this, "_secretKey");
        d(this, "_uri");
        d(this, "_isRendezvous");
        d(this, "_recvDataCount");
        d(this, "_tag");
        d(this, "_isProcessing");
        this._eventHandlers = {
            message: void 0,
            open: void 0,
            close: void 0,
            error: void 0,
            status_change: void 0
        }, this._uri = e, this._status = "", this._buf = [], this._websocket = new WebSocket(e), this._websocket.onmessage = this._recv_message.bind(this), this._websocket.binaryType = "arraybuffer", this._latency = new Date().getTime(), this._isRendezvous = i, this._recvDataCount = 0, this._tag = o, this._isProcessing = !1
    }

    resetRecvDataCount() {
        this._recvDataCount = 0
    }

    getRecvDataCount() {
        return this._recvDataCount
    }

    latency() {
        return this._latency
    }

    setSecretKey(e) {
        this._secretKey = [e, 0, 0]
    }

    sendMessage(e) {
        let i = eu.encode(eu.fromPartial(e)).finish(), o = this._secretKey;
        o && (o[1] += 1, i = tt(i, o[1], o[0])), this._websocket.send(i)
    }

    sendRendezvous(e) {
        this._websocket.send(y4.encode(y4.fromPartial(e)).finish())
    }

    sendBytes(e) {
        let i = this._secretKey;
        i && (i[1] += 1, e = tt(e, i[1], i[0])), this._websocket.send(e)
    }

    parseMessage(e) {
        return eu.decode(e)
    }

    parseRendezvous(e) {
        return y4.decode(e)
    }

    off(e) {
        this._eventHandlers[e] = void 0
    }

    on(e, i) {
        this._eventHandlers[e] = i
    }

    setStatus(e) {
        this._status = e, this._eventHandlers.status_change && this._eventHandlers.status_change(e)
    }

    async open(e = 12e3) {
        return new Promise((i, o) => {
            setTimeout(() => {
                this._status != "open" && o(this._status || "Timeout")
            }, e), this._websocket.onopen = () => {
                var a;
                this._latency = new Date().getTime() - this._latency, this.setStatus("open"), console.debug(">> WebSock.onopen " + this._tag), (a = this._websocket) != null && a.protocol && console.info("Server " + this._tag + " choose sub-protocol: " + this._websocket.protocol), this._eventHandlers.open && this._eventHandlers.open(), console.info("WebSock.onopen " + this._tag), i(this)
            }, this._websocket.onclose = a => {
                this._status == "open", this.setStatus(a), this._tag == "query onlines" ? console.info("WebSock.onclose " + this._tag) : a.code == 1e3 ? console.info("WebSock.onclose " + this._tag + ": " + a.reason) : (console.error("WebSock.onclose: " + this._tag), console.error(a)), this._eventHandlers.close && this._eventHandlers.close(a), o("Reset by the peer")
            }, this._websocket.onerror = a => {
                if (!this._status) {
                    o("Failed to connect to " + (this._isRendezvous ? "rendezvous" : "relay") + " server, " + this._uri);
                    return
                }
                this.setStatus(a), console.error("WebSock.onerror: " + this._tag), console.error(a), this._eventHandlers.error && this._eventHandlers.error(a)
            }
        })
    }

    async next(e = 12e3) {
        let i = this._eventHandlers.message;
        this.off("message");
        try {
            let o = await this._next(e);
            return this.on("message", i), o
        } catch (o) {
            throw this.on("message", i), o
        }
    }

    async _next(e = 12e3) {
        const i = (o, a, t) => {
            if (this._buf.length) o(this._buf[0]), this._buf.splice(0, 1); else {
                if (this._status != "open") {
                    a(this._status);
                    return
                }
                new Date().getTime() > t + e ? a("Timeout") : setTimeout(() => i(o, a, t), 1)
            }
        };
        return new Promise((o, a) => {
            i(o, a, new Date().getTime())
        })
    }

    close() {
        this.setStatus(""), this._websocket && ((this._websocket.readyState === WebSocket.OPEN || this._websocket.readyState === WebSocket.CONNECTING) && (console.info("Closing WebSocket(" + this._tag + ") connection"), this._websocket.close(1e3, "Normal closure")), this._websocket.onmessage = () => {
        })
    }

    _recv_message(e) {
        if (e.data instanceof window.ArrayBuffer) {
            let i = new Uint8Array(e.data);
            this._recvDataCount += i.length;
            const o = this._secretKey;
            o && (o[2] += 1, i = zn(i, o[2], o[0]));
            let a;
            i.length == 0 ? a = new Uint8Array : a = this._isRendezvous ? this.parseRendezvous(i) : this.parseMessage(i), this._buf.push(a), this._eventHandlers.message && (this._isProcessing || this.processQueue())
        }
    }

    async processQueue() {
        this._isProcessing = !0;
        try {
            for (; this._buf.length > 0 && this._eventHandlers.message;) {
                const e = this._buf.shift();
                await this._eventHandlers.message(e)
            }
        } catch (e) {
            console.log("Error in processQueue: " + e)
        }
        this._isProcessing = !1
    }
}

let Au = null;
const Ni = ".";
var X, Bu, Yu, q4, Eu, K4, lt, v4;

class ha {
    constructor() {
        pu(this, K4);
        pu(this, X, null);
        pu(this, Bu, {});
        pu(this, Yu, {});
        pu(this, q4, 0);
        pu(this, Eu, []);
        pu(this, v4, async (e, i) => {
            const o = await (await fetch(e)).arrayBuffer(), a = new Blob([o], {type: i});
            return URL.createObjectURL(a)
        })
    }

    async load() {
        if (!g(this, X)) {
            C4(this, X, new Worker("./ffmpeg.js?v=dddac33a", {type: "module"})), Pe(this, K4, lt).call(this);
            const e = await g(this, v4).call(this, `${Ni}/ffmpeg-core.js?v=16fa4bb1`, "text/javascript"),
                i = await g(this, v4).call(this, `${Ni}/ffmpeg-core.wasm?v=241ebe18`, "application/wasm");
            return this.send({type: "LOAD", data: {coreURL: e, wasmURL: i}})
        }
    }

    async decode(e, i) {
        let o = [i];
        var a = null;
        return g(this, Eu).length > 0 && (a = g(this, Eu).pop(), o.push(a)), this.send({
            type: "DECODE",
            data: {codec: e, data: i, arrayBuffer: a}
        }, o)
    }

    async send({type: e, data: i}, o) {
        return g(this, X) ? new Promise((a, t) => {
            const s = ze(this, q4)._++;
            g(this, Bu)[s] = a, g(this, Yu)[s] = t, g(this, X).postMessage({id: s, type: e, data: i}, o)
        }) : Promise.reject("FFmpeg not loaded")
    }

    close() {
        g(this, X) && (this.send({type: "CLOSE", data: {}}), g(this, X).terminate(), C4(this, X, null))
    }
}

X = new WeakMap, Bu = new WeakMap, Yu = new WeakMap, q4 = new WeakMap, Eu = new WeakMap, K4 = new WeakSet, lt = function () {
    g(this, X).onmessage = ({data: {id: e, type: i, data: o}}) => {
        i == "LOAD" ? (console.log("FFmpeg loaded"), g(this, Bu)[e](o)) : i == "DECODE" ? (g(this, Eu).push(o.data.data), g(this, Eu).length > 8 && g(this, Eu).shift(), g(this, Bu)[e](o)) : i == "CLOSE" ? (C4(this, Eu, []), g(this, Bu)[e](o)) : i == "ERROR" ? g(this, Yu)[e](o) : g(this, Yu)[e](o), delete g(this, Bu)[e], delete g(this, Yu)[e]
    }
}, v4 = new WeakMap;

async function fa() {
    try {
        return Au = new ha, Au ? Au.load() : Promise.reject("Failed to create FFmpeg instance")
    } catch (u) {
        return console.log("Failed to load FFmpeg", u), Promise.reject("Failed to load FFmpeg")
    }
}

async function xa(u, e) {
    return Au ? Au.decode(u, e) : Promise.reject("FFmpeg is uninitialized")
}

async function ya() {
    Au && (Au.close(), Au = null)
}

const ba = "Desktop session not ready", wa = "Desktop xsession failed", Sa = "Desktop session another user login",
    za = "Desktop xorg not found", Pa = "Desktop none", Ra = "Desktop session not ready, password empty",
    Ia = "Desktop session not ready, password wrong", Ta = "Empty Password", ja = "Wrong Password",
    Na = "Wrong 2FA Code", Oi = "2FA Required", Oa = "No Password Access", Ma = "Wayland login screen is not supported",
    La = "x11 expected", Et = "https://rustdesk.com/docs/en/manual/linux/#x11-required",
    Ua = "https://rustdesk.com/docs/en/", Wa = Et,
    Va = "https://github.com/rustdesk/rustdesk/wiki/Headless-Linux-Support",
    Mi = {"rustdesk docs home": Ua, "rustdesk docs x11-required": Wa, "rustdesk x11 headless": Va},
    Li = "Input source 1", qa = "map", Ui = "translate", Ka = "ShiftLeft", Ha = "ShiftRight", B4 = "ControlLeft",
    dt = "ControlRight", ce = "AltLeft", ct = "AltRight", Ct = "MetaLeft", pt = "MetaRight", Z4 = "Windows",
    Q4 = "Linux", Ce = "Mac OS", Dt = "Android", Ja = "iOS", Ga = "web", Za = "ISO", Qa = 1, Xa = 2, Wi = 3, Vi = 4,
    g4 = 1, h4 = 2, Ya = 4, $a = 8, uo = 16, $4 = "public", qi = "OeVuKk5nlHiXp+APNn0Y3pC1Iwpwn44JGqrQCsWqmBw=",
    eo = 1e3, io = 6e4, oe = lang, to = langIds;

function ao(u, e, i, o) {
    return u == "error" && e == "Connection Error" && ((i.indexOf("10054") < 0 || i.indexOf("104") < 0) && o || i.toLowerCase().indexOf("offline") < 0 && i.toLowerCase().indexOf("exist") < 0 && i.toLowerCase().indexOf("handshake") < 0 && i.toLowerCase().indexOf("failed") < 0 && i.toLowerCase().indexOf("resolve") < 0 && i.toLowerCase().indexOf("mismatch") < 0 && i.toLowerCase().indexOf("manually") < 0 && i.toLowerCase().indexOf("not allowed") < 0)
}

const oo = {
    VK_A: "a",
    VK_B: "b",
    VK_C: "c",
    VK_D: "d",
    VK_E: "e",
    VK_F: "f",
    VK_G: "g",
    VK_H: "h",
    VK_I: "i",
    VK_J: "j",
    VK_K: "k",
    VK_L: "l",
    VK_M: "m",
    VK_N: "n",
    VK_O: "o",
    VK_P: "p",
    VK_Q: "q",
    VK_R: "r",
    VK_S: "s",
    VK_T: "t",
    VK_U: "u",
    VK_V: "v",
    VK_W: "w",
    VK_X: "x",
    VK_Y: "y",
    VK_Z: "z",
    VK_0: "0",
    VK_1: "1",
    VK_2: "2",
    VK_3: "3",
    VK_4: "4",
    VK_5: "5",
    VK_6: "6",
    VK_7: "7",
    VK_8: "8",
    VK_9: "9",
    VK_COMMA: ",",
    VK_SLASH: "/",
    VK_SEMICOLON: ";",
    VK_QUOTE: "'",
    VK_LBRACKET: "[",
    VK_RBRACKET: "]",
    VK_BACKSLASH: "\\",
    VK_MINUS: "-",
    VK_PLUS: "=",
    VK_DIVIDE: "Divide",
    VK_MULTIPLY: "Multiply",
    VK_SUBTRACT: "Subtract",
    VK_ADD: "Add",
    VK_DECIMAL: "Decimal",
    VK_F1: "F1",
    VK_F2: "F2",
    VK_F3: "F3",
    VK_F4: "F4",
    VK_F5: "F5",
    VK_F6: "F6",
    VK_F7: "F7",
    VK_F8: "F8",
    VK_F9: "F9",
    VK_F10: "F10",
    VK_F11: "F11",
    VK_F12: "F12",
    VK_ENTER: "Return",
    VK_CANCEL: "Cancel",
    VK_BACK: "Backspace",
    VK_TAB: "Tab",
    VK_CLEAR: "Clear",
    VK_RETURN: "Return",
    VK_SHIFT: "Shift",
    VK_CONTROL: "Control",
    VK_MENU: "Alt",
    VK_PAUSE: "Pause",
    VK_CAPITAL: "CapsLock",
    VK_KANA: "Kana",
    VK_HANGUL: "Hangul",
    VK_JUNJA: "Junja",
    VK_FINAL: "Final",
    VK_HANJA: "Hanja",
    VK_KANJI: "Kanji",
    VK_ESCAPE: "Escape",
    VK_CONVERT: "Convert",
    VK_SPACE: "Space",
    VK_PRIOR: "PageUp",
    VK_NEXT: "PageDown",
    VK_END: "End",
    VK_HOME: "Home",
    VK_LEFT: "LeftArrow",
    VK_UP: "UpArrow",
    VK_RIGHT: "RightArrow",
    VK_DOWN: "DownArrow",
    VK_SELECT: "Select",
    VK_PRINT: "Print",
    VK_EXECUTE: "Execute",
    VK_SNAPSHOT: "Snapshot",
    VK_INSERT: "Insert",
    VK_DELETE: "Delete",
    VK_HELP: "Help",
    VK_SLEEP: "Sleep",
    VK_SEPARATOR: "Separator",
    VK_NUMPAD0: "Numpad0",
    VK_NUMPAD1: "Numpad1",
    VK_NUMPAD2: "Numpad2",
    VK_NUMPAD3: "Numpad3",
    VK_NUMPAD4: "Numpad4",
    VK_NUMPAD5: "Numpad5",
    VK_NUMPAD6: "Numpad6",
    VK_NUMPAD7: "Numpad7",
    VK_NUMPAD8: "Numpad8",
    VK_NUMPAD9: "Numpad9",
    Apps: "Apps",
    Meta: "Meta",
    RAlt: "RAlt",
    RWin: "RWin",
    RControl: "RControl",
    RShift: "RShift",
    CTRL_ALT_DEL: "CtrlAltDel",
    LOCK_SCREEN: "LockScreen"
}, ne = "1.3.3", no = "2024-11-22 02:03";

class A {
    static setItem(e, i) {
        localStorage.setItem(this.prefix + e, i)
    }

    static getItem(e) {
        return localStorage.getItem(this.prefix + e)
    }

    static removeItem(e) {
        localStorage.removeItem(this.prefix + e)
    }

    static clear() {
        for (let e = localStorage.length - 1; e >= 0; e--) {
            const i = localStorage.key(e);
            i && i.startsWith(this.prefix) && localStorage.removeItem(i)
        }
    }
}

d(A, "prefix", "wc-");

class O {
    static async init() {
        if (!this.db) return new Promise((e, i) => {
            const o = indexedDB.open(this.dbName, 1);
            o.onupgradeneeded = a => {
                const t = a.target.result;
                t.objectStoreNames.contains(this.storeName) || t.createObjectStore(this.storeName)
            }, o.onsuccess = async a => {
                this.db = a.target.result;
                try {
                    await this.loadCache(), e()
                } catch (t) {
                    i(t)
                }
            }, o.onerror = a => {
                i(a.target.error)
            }
        })
    }

    static async loadCache() {
        return new Promise((e, i) => {
            const a = this.db.transaction([this.storeName], "readonly").objectStore(this.storeName), t = a.getAllKeys();
            t.onsuccess = s => {
                const E = s.target.result.map(c => new Promise((C, D) => {
                    const B = a.get(c);
                    B.onsuccess = m => {
                        this.cache[c] = m.target.result, C()
                    }, B.onerror = m => {
                        D(m.target.error)
                    }
                }));
                Promise.all(E).then(() => e()).catch(i)
            }, t.onerror = s => {
                i(s.target.error)
            }
        })
    }

    static setItem(e, i) {
        this.cache[this.prefix + e] = i;
        const t = this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName).put(i, this.prefix + e);
        t.onerror = s => {
            console.error("IndexedDB setItem error:", s.target.error)
        }
    }

    static getItem(e) {
        var i;
        return (i = this.cache[this.prefix + e]) != null ? i : null
    }

    static removeItem(e) {
        delete this.cache[this.prefix + e];
        const a = this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName).delete(this.prefix + e);
        a.onerror = t => {
            console.error("IndexedDB removeItem error:", t.target.error)
        }
    }

    static clear() {
        this.cache = {};
        const o = this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName).clear();
        o.onerror = a => {
            console.error("IndexedDB clear error:", a.target.error)
        }
    }
}

d(O, "dbName", "wc-database"), d(O, "storeName", "wc-store"), d(O, "prefix", "wc-"), d(O, "db", null), d(O, "cache", {});
const Cu = () => {
    try {
        return JSON.parse(O.getItem("peers")) || {}
    } catch {
        return {}
    }
}, pe = u => {
    O.setItem("peers", JSON.stringify(u))
}, ro = u => {
    const e = Cu();
    delete e[u], pe(e)
}, re = u => Cu()[u], so = (u, e) => {
    const i = Cu();
    i[u] = e, pe(i)
}, lo = (u, e) => {
    var o;
    return (o = re(u)[e]) != null ? o : $u(e)
}, Bt = (u, e, i) => {
    const o = Cu(), a = o[u] || {};
    i == null ? delete a[e] : a[e] = i, a.tm = new Date().getTime(), o[u] = a, pe(o)
}, De = u => A.getItem(`option:local:${u}`), At = (u, e) => {
    A.setItem(`option:local:${u}`, e)
}, Eo = u => A.getItem(`option:flutter:local:${u}`), co = (u, e) => {
    A.setItem(`option:flutter:local:${u}`, e)
}, mt = async u => {
    const e = Lt(), i = Qu.publicKey, o = X4(0), a = e.from_string(u), t = await Ht(a),
        s = e.crypto_secretbox_easy(t, o, i);
    return Z(s)
}, Ft = async u => {
    const e = Lt(), i = Qu.publicKey, o = d4(u), a = e.crypto_secretbox_open_easy(o, X4(0), i), t = await Jt(a);
    return e.to_string(t)
}, Co = async u => {
    let e = await mt(u);
    O.setItem("ab", e)
}, _t = async () => {
    try {
        let u = O.getItem("ab");
        if (u) return JSON.parse(await Ft(u))
    } catch (u) {
        console.error("loadAb error", u)
    }
    return {access_token: "", ab_entries: []}
}, po = () => {
    O.removeItem("ab")
}, Do = async u => {
    let e = await mt(u);
    O.setItem("group", e)
}, Bo = async () => {
    try {
        let u = O.getItem("group");
        if (u) return JSON.parse(await Ft(u))
    } catch (u) {
        console.error("loadGroup error", u)
    }
    return {access_token: "", users: [], peers: []}
}, Ao = () => {
    O.removeItem("group")
}, mo = u => u.name == "My address book" || u.name == "Legacy address book";
var vt = kt();

function Fo() {
    vt = kt()
}

function _o(u, e) {
    const i = vt || u.substring(u.length - 2).toLowerCase();
    let o = oe.en, a = oe[i];
    a || (a = o);
    let t = a[e];
    return !t && i != "en" && (t = o[e]), t || e
}

const vo = "z".charCodeAt(0), ko = "a".charCodeAt(0);

function go(u, e) {
    const i = oo[u] || u;
    if (i.length == 1) {
        const a = i.charCodeAt(0);
        return !e && (a > vo || a < ko) ? w.fromPartial({unicode: a}) : w.fromPartial({chr: a})
    }
    const o = A4(i);
    return o == N.UNRECOGNIZED && console.error("Unknown control key " + i), w.fromPartial({control_key: o})
}

async function ue(u) {
    await new Promise(e => setTimeout(e, u))
}

function kt() {
    let u = A.getItem("option:local:lang");
    if (u && (u.includes("-") && (u = u.split("-")[1]), u.includes("_") && (u = u.split("_")[1]), oe.hasOwnProperty(u))) return u;
    try {
        const e = window.location.search;
        return new URLSearchParams(e).get("lang") || ""
    } catch {
        return ""
    }
}

var Qu = {privateKey: new Uint8Array([]), publicKey: new Uint8Array([])};

async function ho() {
    try {
        const u = "app-data";
        try {
            const i = A.getItem(u);
            if (i) {
                const o = JSON.parse(i);
                if (Qu = {
                    privateKey: new Uint8Array(d4(o.a)),
                    publicKey: new Uint8Array(d4(o.b))
                }, Qu.publicKey.length === 32 && Qu.privateKey.length === 64) return
            }
        } catch (i) {
            console.error(i)
        }
        const e = await fo();
        A.setItem(u, JSON.stringify({a: Z(e.privateKey), b: Z(e.publicKey)})), Qu = e
    } catch (u) {
        console.error("failed to init key pair", u)
    }
}

function Z(u) {
    return yn(u)
}

function d4(u) {
    return Ut(u)
}

async function fo() {
    return await Mn()
}

function T4() {
    return "web"
}

function gt() {
    return "web"
}

function ht() {
    return Z(Qu.publicKey)
}

function xo() {
    return Gu([ht()])
}

function Gu(u) {
    const e = new Xt.exports.Hash;
    return u.forEach(i => (typeof i == "string" && (i = new TextEncoder().encode(i)), e.update(i))), e.digest()
}

function ft() {
    const u = navigator.userAgent.toLowerCase();
    return u.includes("win") ? Z4 : u.includes("mac") ? Ce : u.includes("linux") ? Q4 : u.includes("android") ? Dt : u.includes("iphone") || u.includes("ipad") ? Ja : "Unknown OS"
}

async function yo(u, e) {
    for (let i = 0; i < 2; i++) {
        const a = e === void 0 ? await u.next() : await u.next(e);
        if (!(!a || (a == null ? void 0 : a.key_exchange))) return a
    }
}

function bo() {
    return A.getItem("key") || void 0
}

function xt() {
    return A.getItem("option:local:access_token") || void 0
}

function wo() {
    return A.getItem("option:local:user_info") || void 0
}

function b4() {
    return Xu
}

const Be = {
        Alt: 56,
        AltGr: 57400,
        Backspace: 14,
        CapsLock: 58,
        ControlLeft: 29,
        ControlRight: 57373,
        Delete: 57427,
        UpArrow: 57416,
        DownArrow: 57424,
        LeftArrow: 57419,
        RightArrow: 57421,
        End: 57423,
        Escape: 1,
        F1: 59,
        F2: 60,
        F3: 61,
        F4: 62,
        F5: 63,
        F6: 64,
        F7: 65,
        F8: 66,
        F9: 67,
        F10: 68,
        F11: 87,
        F12: 88,
        F13: 100,
        F14: 101,
        F15: 102,
        F16: 103,
        F17: 104,
        F18: 105,
        F19: 106,
        F20: 107,
        F21: 108,
        F22: 109,
        F23: 110,
        F24: 118,
        Home: 57415,
        MetaLeft: 57435,
        PageDown: 57425,
        PageUp: 57417,
        Return: 28,
        ShiftLeft: 42,
        ShiftRight: 54,
        Space: 57,
        Tab: 15,
        PrintScreen: 57399,
        ScrollLock: 70,
        NumLock: 69,
        BackQuote: 41,
        Num1: 2,
        Num2: 3,
        Num3: 4,
        Num4: 5,
        Num5: 6,
        Num6: 7,
        Num7: 8,
        Num8: 9,
        Num9: 10,
        Num0: 11,
        Minus: 12,
        Equal: 13,
        KeyQ: 16,
        KeyW: 17,
        KeyE: 18,
        KeyR: 19,
        KeyT: 20,
        KeyY: 21,
        KeyU: 22,
        KeyI: 23,
        KeyO: 24,
        KeyP: 25,
        LeftBracket: 26,
        RightBracket: 27,
        BackSlash: 43,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        SemiColon: 39,
        Quote: 40,
        IntlBackslash: 86,
        IntlRo: 115,
        IntlYen: 125,
        KanaMode: 112,
        KeyZ: 44,
        KeyX: 45,
        KeyC: 46,
        KeyV: 47,
        KeyB: 48,
        KeyN: 49,
        KeyM: 50,
        Comma: 51,
        Dot: 52,
        Slash: 53,
        Insert: 57426,
        KpMinus: 74,
        KpPlus: 78,
        KpMultiply: 55,
        KpDivide: 57397,
        KpDecimal: 83,
        KpReturn: 57372,
        KpEqual: 89,
        KpComma: 126,
        Kp0: 82,
        Kp1: 79,
        Kp2: 80,
        Kp3: 81,
        Kp4: 75,
        Kp5: 76,
        Kp6: 77,
        Kp7: 71,
        Kp8: 72,
        Kp9: 73,
        MetaRight: 57436,
        Apps: 57437,
        VolumeUp: 57392,
        VolumeDown: 57390,
        VolumeMute: 57376,
        Lang1: 123,
        Lang2: 121,
        Lang3: 120,
        Lang4: 119,
        Lang5: 118,
        Kana: 128,
        Hanja: 241
    }, So = {
        Alt: 64,
        AltGr: 108,
        Backspace: 22,
        CapsLock: 66,
        ControlLeft: 37,
        ControlRight: 105,
        Delete: 119,
        DownArrow: 116,
        End: 115,
        Escape: 9,
        F1: 67,
        F10: 76,
        F11: 95,
        F12: 96,
        F13: 191,
        F14: 192,
        F15: 193,
        F16: 194,
        F17: 195,
        F18: 196,
        F19: 197,
        F20: 198,
        F21: 199,
        F22: 200,
        F23: 201,
        F24: 202,
        F2: 68,
        F3: 69,
        F4: 70,
        F5: 71,
        F6: 72,
        F7: 73,
        F8: 74,
        F9: 75,
        Home: 110,
        LeftArrow: 113,
        MetaLeft: 133,
        PageDown: 117,
        PageUp: 112,
        Return: 36,
        RightArrow: 114,
        ShiftLeft: 50,
        ShiftRight: 62,
        Space: 65,
        Tab: 23,
        UpArrow: 111,
        PrintScreen: 107,
        ScrollLock: 78,
        Pause: 127,
        NumLock: 77,
        BackQuote: 49,
        Num1: 10,
        Num2: 11,
        Num3: 12,
        Num4: 13,
        Num5: 14,
        Num6: 15,
        Num7: 16,
        Num8: 17,
        Num9: 18,
        Num0: 19,
        Minus: 20,
        Equal: 21,
        KeyQ: 24,
        KeyW: 25,
        KeyE: 26,
        KeyR: 27,
        KeyT: 28,
        KeyY: 29,
        KeyU: 30,
        KeyI: 31,
        KeyO: 32,
        KeyP: 33,
        LeftBracket: 34,
        RightBracket: 35,
        KeyA: 38,
        KeyS: 39,
        KeyD: 40,
        KeyF: 41,
        KeyG: 42,
        KeyH: 43,
        KeyJ: 44,
        KeyK: 45,
        KeyL: 46,
        SemiColon: 47,
        Quote: 48,
        BackSlash: 51,
        IntlBackslash: 94,
        IntlRo: 97,
        IntlYen: 132,
        KanaMode: 101,
        KeyZ: 52,
        KeyX: 53,
        KeyC: 54,
        KeyV: 55,
        KeyB: 56,
        KeyN: 57,
        KeyM: 58,
        Comma: 59,
        Dot: 60,
        Slash: 61,
        Insert: 118,
        KpDecimal: 91,
        KpReturn: 104,
        KpMinus: 82,
        KpPlus: 86,
        KpMultiply: 63,
        KpDivide: 106,
        KpEqual: 125,
        KpComma: 129,
        Kp0: 90,
        Kp1: 87,
        Kp2: 88,
        Kp3: 89,
        Kp4: 83,
        Kp5: 84,
        Kp6: 85,
        Kp7: 79,
        Kp8: 80,
        Kp9: 81,
        MetaRight: 134,
        Apps: 135,
        VolumeUp: 123,
        VolumeDown: 122,
        VolumeMute: 121,
        Lang1: 102,
        Lang2: 100,
        Lang3: 98,
        Lang4: 99,
        Lang5: 93
    }, zo = {
        Alt: 57,
        AltGr: 58,
        Backspace: 67,
        CapsLock: 115,
        ControlLeft: 113,
        ControlRight: 114,
        Delete: 112,
        DownArrow: 20,
        End: 123,
        Escape: 111,
        F1: 131,
        F10: 140,
        F11: 141,
        F12: 142,
        F2: 132,
        F3: 133,
        F4: 134,
        F5: 135,
        F6: 136,
        F7: 137,
        F8: 138,
        F9: 139,
        Home: 3,
        LeftArrow: 21,
        MetaLeft: 117,
        PageDown: 93,
        PageUp: 92,
        Return: 66,
        RightArrow: 22,
        ShiftLeft: 59,
        ShiftRight: 60,
        Space: 62,
        Tab: 61,
        UpArrow: 19,
        PrintScreen: 120,
        ScrollLock: 116,
        NumLock: 143,
        Pause: 121,
        BackQuote: 75,
        Num1: 8,
        Num2: 9,
        Num3: 10,
        Num4: 11,
        Num5: 12,
        Num6: 13,
        Num7: 14,
        Num8: 15,
        Num9: 16,
        Num0: 7,
        Minus: 69,
        Equal: 70,
        KeyA: 29,
        KeyB: 30,
        KeyC: 31,
        KeyD: 32,
        KeyE: 33,
        KeyF: 34,
        KeyG: 35,
        KeyH: 36,
        KeyI: 37,
        KeyJ: 38,
        KeyK: 39,
        KeyL: 40,
        KeyM: 41,
        KeyN: 42,
        KeyO: 43,
        KeyP: 44,
        KeyQ: 45,
        KeyR: 46,
        KeyS: 47,
        KeyT: 48,
        KeyU: 49,
        KeyV: 50,
        KeyW: 51,
        KeyX: 52,
        KeyY: 53,
        KeyZ: 54,
        LeftBracket: 71,
        RightBracket: 72,
        SemiColon: 74,
        Quote: 75,
        BackSlash: 73,
        KanaMode: 218,
        Comma: 55,
        Dot: 56,
        Slash: 76,
        Insert: 124
    }, Po = {
        226: "Alt",
        230: "AltGr",
        42: "Backspace",
        57: "CapsLock",
        224: "ControlLeft",
        228: "ControlRight",
        76: "Delete",
        82: "UpArrow",
        81: "DownArrow",
        80: "LeftArrow",
        79: "RightArrow",
        77: "End",
        41: "Escape",
        58: "F1",
        59: "F2",
        60: "F3",
        61: "F4",
        62: "F5",
        63: "F6",
        64: "F7",
        65: "F8",
        66: "F9",
        67: "F10",
        68: "F11",
        69: "F12",
        104: "F13",
        105: "F14",
        106: "F15",
        107: "F16",
        108: "F17",
        109: "F18",
        110: "F19",
        111: "F20",
        112: "F21",
        113: "F22",
        114: "F23",
        115: "F24",
        74: "Home",
        227: "MetaLeft",
        78: "PageDown",
        75: "PageUp",
        40: "Return",
        225: "ShiftLeft",
        229: "ShiftRight",
        44: "Space",
        43: "Tab",
        70: "PrintScreen",
        71: "ScrollLock",
        83: "NumLock",
        53: "BackQuote",
        30: "Num1",
        31: "Num2",
        32: "Num3",
        33: "Num4",
        34: "Num5",
        35: "Num6",
        36: "Num7",
        37: "Num8",
        38: "Num9",
        39: "Num0",
        45: "Minus",
        46: "Equal",
        20: "KeyQ",
        26: "KeyW",
        8: "KeyE",
        21: "KeyR",
        23: "KeyT",
        28: "KeyY",
        24: "KeyU",
        12: "KeyI",
        18: "KeyO",
        19: "KeyP",
        47: "LeftBracket",
        48: "RightBracket",
        49: "BackSlash",
        4: "KeyA",
        22: "KeyS",
        7: "KeyD",
        9: "KeyF",
        10: "KeyG",
        11: "KeyH",
        13: "KeyJ",
        14: "KeyK",
        15: "KeyL",
        51: "SemiColon",
        52: "Quote",
        100: "IntlBackslash",
        135: "IntlRo",
        137: "IntlYen",
        29: "KeyZ",
        27: "KeyX",
        6: "KeyC",
        25: "KeyV",
        5: "KeyB",
        17: "KeyN",
        16: "KeyM",
        54: "Comma",
        55: "Dot",
        56: "Slash",
        73: "Insert",
        86: "KpMinus",
        87: "KpPlus",
        85: "KpMultiply",
        84: "KpDivide",
        99: "KpDecimal",
        88: "KpReturn",
        103: "KpEqual",
        133: "KpComma",
        98: "Kp0",
        89: "Kp1",
        90: "Kp2",
        91: "Kp3",
        92: "Kp4",
        93: "Kp5",
        94: "Kp6",
        95: "Kp7",
        96: "Kp8",
        97: "Kp9",
        231: "MetaRight",
        128: "VolumeUp",
        129: "VolumeDown",
        127: "VolumeMute",
        139: "Lang1",
        138: "Lang2",
        146: "Lang3",
        147: "Lang4",
        148: "Lang5",
        155: "Cancel",
        156: "Clear",
        136: "Kana",
        145: "Hanja",
        119: "Select",
        116: "Execute",
        117: "Help",
        159: "Separator"
    }, Ro = {
        KeyA: 0,
        KeyS: 1,
        KeyD: 2,
        KeyF: 3,
        KeyH: 4,
        KeyG: 5,
        KeyZ: 6,
        KeyX: 7,
        KeyC: 8,
        KeyV: 9,
        IntlBackslash: 10,
        KeyB: 11,
        KeyQ: 12,
        KeyW: 13,
        KeyE: 14,
        KeyR: 15,
        KeyY: 16,
        KeyT: 17,
        Num1: 18,
        Num2: 19,
        Num3: 20,
        Num4: 21,
        Num6: 22,
        Num5: 23,
        Equal: 24,
        Num9: 25,
        Num7: 26,
        Minus: 27,
        Num8: 28,
        Num0: 29,
        RightBracket: 30,
        KeyO: 31,
        KeyU: 32,
        LeftBracket: 33,
        KeyI: 34,
        KeyP: 35,
        Return: 36,
        KeyL: 37,
        KeyJ: 38,
        Quote: 39,
        KeyK: 40,
        SemiColon: 41,
        BackSlash: 42,
        Comma: 43,
        Slash: 44,
        KeyN: 45,
        KeyM: 46,
        Dot: 47,
        Tab: 48,
        Space: 49,
        BackQuote: 50,
        Backspace: 51,
        Escape: 53,
        MetaRight: 54,
        MetaLeft: 55,
        ShiftLeft: 56,
        CapsLock: 57,
        Alt: 58,
        ControlLeft: 59,
        ShiftRight: 60,
        AltGr: 61,
        ControlRight: 62,
        Function: 63,
        F17: 64,
        KpDecimal: 65,
        KpMultiply: 67,
        KpPlus: 69,
        NumLock: 71,
        VolumeUp: 72,
        VolumeDown: 73,
        VolumeMute: 74,
        KpDivide: 75,
        KpReturn: 76,
        KpMinus: 78,
        F18: 79,
        F19: 80,
        KpEqual: 81,
        Kp0: 82,
        Kp1: 83,
        Kp2: 84,
        Kp3: 85,
        Kp4: 86,
        Kp5: 87,
        Kp6: 88,
        Kp7: 89,
        F20: 90,
        Kp8: 91,
        Kp9: 92,
        IntlYen: 93,
        IntlRo: 94,
        KpComma: 95,
        F5: 96,
        F6: 97,
        F7: 98,
        F3: 99,
        F8: 100,
        F9: 101,
        Lang2: 102,
        F11: 103,
        Lang1: 104,
        F13: 105,
        F16: 106,
        F14: 107,
        F10: 109,
        F12: 111,
        F15: 113,
        Insert: 114,
        Home: 115,
        PageUp: 116,
        Delete: 117,
        F4: 118,
        End: 119,
        F2: 120,
        PageDown: 121,
        F1: 122,
        LeftArrow: 123,
        RightArrow: 124,
        DownArrow: 125,
        UpArrow: 126,
        Apps: 110
    }, Io = {
        AltLeft: "Alt",
        AltRight: "AltGr",
        Backspace: "Backspace",
        CapsLock: "CapsLock",
        ControlLeft: "ControlLeft",
        ControlRight: "ControlRight",
        Delete: "Delete",
        ArrowUp: "UpArrow",
        ArrowDown: "DownArrow",
        ArrowLeft: "LeftArrow",
        ArrowRight: "RightArrow",
        End: "End",
        Escape: "Escape",
        F1: "F1",
        F2: "F2",
        F3: "F3",
        F4: "F4",
        F5: "F5",
        F6: "F6",
        F7: "F7",
        F8: "F8",
        F9: "F9",
        F10: "F10",
        F11: "F11",
        F12: "F12",
        F13: "F13",
        F14: "F14",
        F15: "F15",
        F16: "F16",
        F17: "F17",
        F18: "F18",
        F19: "F19",
        F20: "F20",
        F21: "F21",
        F22: "F22",
        F23: "F23",
        F24: "F24",
        Home: "Home",
        MetaLeft: "MetaLeft",
        PageDown: "PageDown",
        PageUp: "PageUp",
        Enter: "Return",
        ShiftLeft: "ShiftLeft",
        ShiftRight: "ShiftRight",
        Space: "Space",
        Tab: "Tab",
        PrintScreen: "PrintScreen",
        ScrollLock: "ScrollLock",
        NumLock: "NumLock",
        Backquote: "BackQuote",
        Digit1: "Num1",
        Digit2: "Num2",
        Digit3: "Num3",
        Digit4: "Num4",
        Digit5: "Num5",
        Digit6: "Num6",
        Digit7: "Num7",
        Digit8: "Num8",
        Digit9: "Num9",
        Digit0: "Num0",
        Minus: "Minus",
        Equal: "Equal",
        KeyQ: "KeyQ",
        KeyW: "KeyW",
        KeyE: "KeyE",
        KeyR: "KeyR",
        KeyT: "KeyT",
        KeyY: "KeyY",
        KeyU: "KeyU",
        KeyI: "KeyI",
        KeyO: "KeyO",
        KeyP: "KeyP",
        BracketLeft: "LeftBracket",
        BracketRight: "RightBracket",
        Backslash: "BackSlash",
        KeyA: "KeyA",
        KeyS: "KeyS",
        KeyD: "KeyD",
        KeyF: "KeyF",
        KeyG: "KeyG",
        KeyH: "KeyH",
        KeyJ: "KeyJ",
        KeyK: "KeyK",
        KeyL: "KeyL",
        Semicolon: "SemiColon",
        Quote: "Quote",
        IntlBackslash: "IntlBackslash",
        IntlRo: "IntlRo",
        IntlYen: "IntlYen",
        KanaMode: "KanaMode",
        KeyZ: "KeyZ",
        KeyX: "KeyX",
        KeyC: "KeyC",
        KeyV: "KeyV",
        KeyB: "KeyB",
        KeyN: "KeyN",
        KeyM: "KeyM",
        Comma: "Comma",
        Period: "Dot",
        Slash: "Slash",
        Insert: "Insert",
        NumpadSubtract: "KpMinus",
        NumpadAdd: "KpPlus",
        NumpadMultiply: "KpMultiply",
        NumpadDivide: "KpDivide",
        NumpadDecimal: "KpDecimal",
        NumpadEnter: "KpReturn",
        NumpadEqual: "KpEqual",
        NumpadComma: "KpComma",
        Numpad0: "Kp0",
        Numpad1: "Kp1",
        Numpad2: "Kp2",
        Numpad3: "Kp3",
        Numpad4: "Kp4",
        Numpad5: "Kp5",
        Numpad6: "Kp6",
        Numpad7: "Kp7",
        Numpad8: "Kp8",
        Numpad9: "Kp9",
        MetaRight: "MetaRight",
        ContextMenu: "Apps",
        AudioVolumeUp: "VolumeUp",
        AudioVolumeDown: "VolumeDown",
        AudioVolumeMute: "VolumeMute",
        NonConvert: "Lang1",
        Convert: "Lang2",
        Lang3: "Lang3",
        Lang4: "Lang4",
        Lang5: "Lang5"
    }, To = new Set(["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "MetaLeft", "MetaRight", "Alt", "AltGr"]),
    jo = new Set(["BackQuote", "Num1", "Num2", "Num3", "Num4", "Num5", "Num6", "Num7", "Num8", "Num9", "Num0", "Minus", "Equal", "KeyA", "KeyB", "KeyC", "KeyD", "KeyE", "KeyF", "KeyG", "KeyH", "KeyI", "KeyJ", "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT", "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", "LeftBracket", "RightBracket", "BackSlash", "SemiColon", "Quote", "Comma", "Dot", "Slash", "IntlBackslash", "Space"]),
    No = new Set(["Kp0", "Kp1", "Kp2", "Kp3", "Kp4", "Kp5", "Kp6", "Kp7", "Kp8", "Kp9", "KpMinus", "KpMultiply", "KpDivide", "KpPlus", "KpDecimal"]);
let p4 = !1, ru = !1;
const b = {};
b[Ka] = !1;
b[Ha] = !1;
b[B4] = !1;
b[dt] = !1;
b[ce] = !1;
b[ct] = !1;
b[Ct] = !1;
b[pt] = !1;
const m4 = {}, Ae = u => No.has(u), me = u => jo.has(u), Oo = u => To.has(u),
    Mo = () => b[B4] || b[dt] || b[ce] || b[ct] || b[Ct] || b[pt];
let _, j4 = !1;

function Lo() {
    if (j4) {
        console.info("Keyboard event listener is already started");
        return
    }
    document.addEventListener("keydown", N4), document.addEventListener("keyup", N4), _ || (_ = document.createElement("div"), _.setAttribute("contenteditable", "true"), _.id = "hiddenInput", _.style.position = "absolute", _.style.left = "-9999px", _.style.height = "1px", _.style.width = "1px", document.body.appendChild(_), Xu ? _.addEventListener("input", O4) : (V4 || Zu) && _.addEventListener("compositionend", O4), _.focus()), j4 = !0, console.info("Keyboard event listener started")
}

function se() {
    if (!j4) {
        console.info("Keyboard event listener is not started");
        return
    }
    document.removeEventListener("keydown", N4), document.removeEventListener("keyup", N4), _ && (Xu || V4 ? _.removeEventListener("input", O4) : Zu && _.removeEventListener("compositionend", O4), _.remove(), _ = void 0), j4 = !1, console.info("Keyboard event listener stopped")
}

function Fe(u, e) {
    u.sendMessage({key_event: e})
}

function N4(u) {
    const e = u0();
    if (!e) return;
    const i = u.type === "keydown";
    i && !ru && u.preventDefault(), yt(e, u, i)
}

function O4(u) {
    var a, t;
    const e = u0();
    if (!e) return;
    u.preventDefault();
    let i = null;
    if ((u instanceof InputEvent || u instanceof CompositionEvent) && (i = u.data), !i) return;
    const o = w.fromPartial({seq: i, mode: c4.Translate, down: !0, press: !0});
    Fe(e, o), ((t = (a = _ == null ? void 0 : _.textContent) == null ? void 0 : a.length) != null ? t : 0) > 10 && (_.textContent = "")
}

function yt(u, e, i) {
    const o = Vo(u, e, i);
    for (const a of o) Fe(u, a)
}

function Uo(u, e, i, o) {
    const a = Po[e];
    if (!a) {
        console.error("Unknown USB HID code " + e);
        return
    }
    const t = M4(u, a, i);
    if (!t) return;
    const s = Ae(a), l = me(a);
    (l || s) && bt(t, o, s, l);
    for (const E of t) Fe(u, E)
}

function Wo() {
    const u = u0();
    if (!!u) for (const e in m4) {
        const i = m4[e];
        i && yt(u, i, !1)
    }
}

function Vo(u, e, i) {
    var c;
    const o = e.code, a = Io[o];
    if (!a) return console.error("Key code is not supported " + o), [];
    const t = u.getOption("keyboard_mode"), s = qo(e);
    Jo(e, i), i ? m4[o] = e : delete m4[o];
    let l = [];
    switch (t) {
        case qa:
            l = (c = M4(u, a, i)) != null ? c : [];
            break;
        case Ui:
            l = Go(u, e, a, i);
            break
    }
    if (!l) return [];
    const E = Ae(a);
    if (t !== Ui || E) {
        const C = me(a);
        bt(l, s, E, C)
    }
    return l
}

function bt(u, e, i, o) {
    for (const s of u) o && (e & 1 << 1) != 0 && s.modifiers.push(N.CapsLock), i && (e & 1 << 2) != 0 && s.modifiers.push(N.NumLock)
}

function qo(u) {
    let a = 0;
    return u.getModifierState("CapsLock") && (a |= 1 << 1), u.getModifierState("NumLock") && (a |= 1 << 2), u.getModifierState("ScrollLock") && (a |= 1 << 3), a
}

function Ko(u, e) {
    return u == Z4 ? Be[e] : u == Q4 ? So[e] : u == Dt ? zo[e] : u == Ce ? (A.getItem("option:local:kb_layout") == Za && (e == "IntlBackslash" ? e = "BackQuote" : e == "BackQuote" && (e = "IntlBackslash")), Ro[e]) : null
}

function Ho(u) {
    let e = {...u};
    return e.down = !1, [u, e]
}

function Jo(u, e) {
    const i = u.code;
    i in b && (b[i] = e)
}

function M4(u, e, i) {
    const o = u.getPeerPlatform(), a = u.isSwapControlCommand();
    e == "ControlLeft" || e == "ControlRight" ? a && (e = "MetaLeft") : (e == "MetaLeft" || e == "MetaRight") && a && (e = "ControlLeft");
    const t = Ko(o, e);
    if (t == null) return console.error("Unknown key code " + e + " for platform " + o), [];
    const s = w.fromPartial({chr: t, mode: c4.Map, down: i, press: i});
    return o === Q4 && i && !Oo(e) ? Ho(s) : [s]
}

function Go(u, e, i, o) {
    const a = _ === document.activeElement;
    if (_ && _.focus(), V4 && _ && a && e.key === "Process") return [];
    const t = me(i), s = e.key === "Dead";
    if (o && ru && t) return Zu ? ru = s : ru = !1, [];
    if (s) return o && (Zu ? ru = !0 : ru = !ru), ru && _ && !a && Xu && _.dispatchEvent(new KeyboardEvent(e.type, {...e})), [];
    if (ru = !1, !Zu && Ae(i)) return M4(u, i, o);
    if (Zu && e.code === "AltRight") return [];
    if (e.key === "AltGraph") return p4 && !o && (p4 = !1), !p4 && o && b[B4] ? (p4 = !0, b[B4] = !1, delete m4[B4], [w.fromPartial({
        chr: Be.ControlLeft,
        mode: c4.Map,
        down: !1,
        press: !1
    })]) : [];
    const E = u.getPeerPlatform();
    let c = [];
    return Xu && (c = Zo(E, e, o)), (Xu || V4) && c.length === 0 && o && t && (c = Ki(e, o)), Xu && p4 || (Zu && o && t && !b[ce] && c.push(...Ki(e, o)), c.length === 0 && c.push(...M4(u, i, o))), c
}

function Zo(u, e, i) {
    if (u !== Z4 || !Mo()) return [];
    let o;
    const a = Be[e.code];
    return a === void 0 ? (console.error("Key code cannot be converted to scan code: " + e.code), []) : (i ? e.key.length === 1 && (o = e.key.charCodeAt(0) & 65535 | a << 16) : o = a << 16, o === void 0 ? [] : [w.fromPartial({
        win2win_hotkey: o,
        mode: c4.Translate,
        down: i,
        press: i
    })])
}

function Ki(u, e) {
    return u.key ? [w.fromPartial({seq: u.key, mode: c4.Translate, down: e, press: e})] : []
}

class Qo {
    constructor(e, i, o, a) {
        d(this, "_uri");
        d(this, "_feedback");
        d(this, "_key");
        d(this, "_token");
        d(this, "_ws");
        d(this, "_interval");
        d(this, "_keepAlive");
        d(this, "_lastRecvMsg");
        d(this, "_aliveFailed");
        this._uri = e, this._feedback = i, this._key = o, this._token = a, this._keepAlive = io, this._lastRecvMsg = new Date, this._aliveFailed = !1
    }

    close() {
        var e;
        this._interval && (clearInterval(this._interval), this._interval = void 0), (e = this._ws) == null || e.close(), this._ws = void 0
    }

    async start() {
        if (this._feedback == 0 || !this._uri || !this._token || !this._key) return;
        const e = new I4(this._uri, !0, "health check");
        await e.open(), console.log(new Date + ": Connected to relay server"), this._ws = e;
        const i = Ju.fromPartial({token: this._token});
        e.sendRendezvous({hc: i}), this.startInterval(), await this.msgLoop(), this.close()
    }

    startInterval() {
        this._interval = setInterval(() => {
            new Date().getTime() - this._lastRecvMsg.getTime() > this._keepAlive * 3 / 2 && (this._aliveFailed = !0)
        }, eo)
    }

    async msgLoop() {
        var e;
        for (this._lastRecvMsg = new Date; ;) {
            if (!this._ws) {
                console.info("HC connection is closed as controlling connection exits");
                break
            }
            try {
                const i = await ((e = this._ws) == null ? void 0 : e.next(300));
                i && (this._lastRecvMsg = new Date, this.handleMsg(i))
            } catch (i) {
                if (i === "Timeout") {
                    if (this._aliveFailed) {
                        console.error("HC connection is timeout");
                        break
                    }
                } else {
                    console.error("An error occurred on health check:", i);
                    break
                }
            }
        }
    }

    handleMsg(e) {
        var i;
        if (e instanceof Uint8Array) {
            (i = this._ws) == null || i.sendBytes(new Uint8Array);
            return
        } else {
            const o = e.register_pk_response;
            o && o.keep_alive > 0 && (this._keepAlive = o.keep_alive * 1e3, console.log("keep_alive: " + this._keepAlive + "ms"))
        }
    }
}

let L4 = [], F4 = "", U4 = [], _4 = [], W4;
const _e = ["text/plain", "text/html", "image/svg+xml", "image/png"];

function ve() {
    U4 = [], _4 = [], W4 = void 0
}

async function Hi(u, e = !1) {
    var i = [], o = "";
    try {
        i = await navigator.clipboard.read(), i.length === 0 && (o = await navigator.clipboard.readText())
    } catch {
        return
    }
    e || i.length === 0 && o === "" || (await Xo(i) ? (L4 = i, await $o(u)) : o !== F4 && (F4 = o, await un(u)))
}

async function Xo(u) {
    if (u.length !== L4.length) return !0;
    for (let e = 0; e < u.length; e++) {
        const i = u[e], o = L4[e];
        if (!await Yo(i, o)) return !0
    }
    return !1
}

async function Yo(u, e) {
    if (u.types.length !== e.types.length) return !1;
    for (let i = 0; i < u.types.length; i++) {
        if (u.types[i] !== e.types[i]) return !1;
        if (!_e.includes(u.types[i])) continue;
        const o = await u.getType(u.types[i]), a = await e.getType(e.types[i]);
        if (o.size !== a.size) return !1;
        const t = new Uint8Array(await o.arrayBuffer()), s = new Uint8Array(await a.arrayBuffer());
        for (let l = 0; l < t.length; l++) if (t[l] !== s[l]) return !1
    }
    return !0
}

function wt(u) {
    switch (u) {
        case"text/plain":
            return du.Text;
        case"text/html":
            return du.Html;
        case"image/svg+xml":
            return du.ImageSvg;
        case"image/png":
            return du.ImagePng;
        default:
            return du.UNRECOGNIZED
    }
}

async function $o(u) {
    const e = [], i = (await Promise.all(L4.map(async o => {
        const a = [];
        for (const t of o.types) {
            if (!_e.includes(t)) continue;
            const s = await o.getType(t);
            e.push(t), a.push(new Uint8Array(await s.arrayBuffer()))
        }
        return a
    }))).flat();
    e.length !== 0 && Kt(i, !0, o => {
        const a = o.map((t, s) => {
            let l = !1;
            t && (l = t.length < F4.length);
            const E = l && t != null ? t : i[s];
            return U.fromPartial({content: E, compress: l, format: wt(e[s])})
        });
        u.sendMessage(eu.fromPartial({multi_clipboards: gu.fromPartial({clipboards: a})}))
    })
}

async function un(u) {
    const e = new TextEncoder().encode(F4);
    Kt(e, !1, i => {
        let o = !1;
        i && (o = i.length < F4.length);
        const a = o && i != null ? i : e;
        let t = U.fromPartial({content: a, compress: o, format: du.Text});
        u.sendMessage(eu.fromPartial({clipboard: t}))
    })
}

function ke(u, e = void 0) {
    const i = () => {
        try {
            Nn(new TextDecoder().decode(u.content)), ve(), e == null || e()
        } catch (o) {
            console.error("Failed to copy to clipboard, ", o), document.hasFocus() || (W4 = u)
        }
    };
    u.compress ? we(u.content, !1, o => {
        o && (u.content = o, i())
    }) : i()
}

const w4 = document.createElement("canvas"), ee = w4.getContext("2d");

function en(u, e, i) {
    if (w4.width = e, w4.height = i, !ee) return new Uint8Array(0);
    const o = ee.createImageData(e, i);
    return o.data.set(u), ee.putImageData(o, 0, 0), Uint8Array.from(atob(w4.toDataURL("image/png").split(",")[1]), a => a.charCodeAt(0))
}

function tn(u, e = void 0) {
    ve();
    const i = u.clipboards, o = i.filter(a => a.compress).map(a => a.content);
    we(o, !0, async a => {
        var c;
        let t = 0;
        for (const C of i) C.compress && (C.content = (c = a[t]) != null ? c : C.content, t++), C.compress = !1;
        const s = {};
        for (const C of i) {
            const D = _e.find(B => C.format === wt(B));
            if (D) {
                const B = new Blob([C.content], {type: D});
                s[D] = B
            }
        }
        if (!(s["image/png"] !== void 0)) {
            for (const C of i) if (C.format === du.ImageRgba) {
                const D = en(C.content, C.width, C.height);
                D.length > 0 && (s["image/png"] = new Blob([D], {type: "image/png"}));
                break
            }
        }
        if (Object.keys(s).length === 0) return;
        const E = new ClipboardItem(s);
        await St(i, E, e)
    })
}

async function St(u, e, i = void 0) {
    if (!document.hasFocus()) {
        U4 = u, _4 = [e];
        return
    }
    try {
        await navigator.clipboard.write([e]), ve(), i == null || i()
    } catch (o) {
        if (console.error("Failed to write to clipboard, ", o), !document.hasFocus()) {
            U4 = u, _4 = [e];
            return
        }
        const a = u.find(t => t.format === du.Text);
        a && ke(a, i)
    }
}

function Ji() {
    xn("info", "Clipboard is synchronized", 2e3)
}

window.addEventListener("focus", function () {
    _4.length > 0 ? St(U4, _4[0], Ji) : W4 && ke(W4, Ji)
});
const su = class {
    constructor({
                    id: e,
                    remote: i,
                    path: o,
                    show_hidden: a,
                    is_remote: t,
                    is_last_job: s,
                    file_num: l,
                    files: E,
                    conn_id: c,
                    total_size: C,
                    finished_size: D,
                    transferred: B,
                    enable_overwrite_detection: m,
                    file_confirmed: f,
                    file_skipped: R,
                    file_is_waiting: I,
                    is_dir: y
                }) {
        d(this, "id");
        d(this, "remote");
        d(this, "path");
        d(this, "show_hidden");
        d(this, "is_remote");
        d(this, "is_last_job");
        d(this, "file_num");
        d(this, "files");
        d(this, "conn_id");
        d(this, "total_size");
        d(this, "finished_size");
        d(this, "transferred");
        d(this, "lastTransferred");
        d(this, "enable_overwrite_detection");
        d(this, "file_confirmed");
        d(this, "file_skipped");
        d(this, "file_is_waiting");
        d(this, "default_overwrite_strategy");
        d(this, "is_dir");
        d(this, "stream");
        d(this, "writer");
        d(this, "zip");
        d(this, "currentData");
        d(this, "fileHandles");
        d(this, "currentReader");
        d(this, "write", async (e, i) => {
            var t;
            if (e.id !== this.id) throw new Error("Wrong id");
            const o = e.file_num;
            if (o >= this.files.length) throw new Error("Wrong file number");
            const a = this.is_dir;
            if (o !== this.file_num || a && !this.zip || !a && !this.writer) if (a) {
                if (this.zip || (this.zip = new Yt), this.currentData) {
                    const s = this.files[this.file_num];
                    this.zip.file(s.name, this.currentData), this.currentData = void 0
                }
                this.file_num = e.file_num
            } else {
                this.writer && await this.writer.close(), this.stream && (this.stream = void 0), this.file_num = e.file_num;
                const s = this.files[o], l = su.join(this.path, s.name);
                this.stream = streamSaver.createWriteStream(l, {size: s.size}), this.writer = (t = this.stream) == null ? void 0 : t.getWriter()
            }
            if (e.compressed) {
                const s = await Jt(e.data);
                if (!s) throw new Error("Failed to decompress");
                if (a) this.currentData ? this.currentData = new Uint8Array([...this.currentData, ...s]) : this.currentData = s; else {
                    if (!this.writer) throw new Error("file is None");
                    try {
                        await this.writer.write(s)
                    } catch (l) {
                        throw le(this.id, "write failed", this.file_num), i(), l
                    }
                }
                this.finished_size += s.length
            } else {
                if (a) this.currentData ? this.currentData = new Uint8Array([...this.currentData, ...e.data]) : this.currentData = e.data; else {
                    if (!this.writer) throw new Error("file is None");
                    try {
                        await this.writer.write(e.data)
                    } catch (s) {
                        throw le(this.id, "write failed", this.file_num), i(), s
                    }
                }
                this.finished_size += e.data.length
            }
            this.transferred += e.data.length
        });
        d(this, "read", async e => {
            var c;
            let i = this.file_num;
            if (i >= this.files.length) {
                (c = this.currentReader) == null || c.cancel(), this.currentReader = void 0;
                return
            }
            let o = this.files[i];
            if (!this.currentReader) {
                if (!this.fileHandles || !this.fileHandles[i]) throw new Error("file is None");
                let D = (await this.fileHandles[i].getFile()).stream();
                this.currentReader = D.getReader({mode: "byob"}), this.file_confirmed = !1, this.file_is_waiting = !1
            }
            if (this.enable_overwrite_detection && !this.file_confirmed) {
                this.file_is_waiting || (this.send_current_digest(e), this.file_is_waiting = !0);
                return
            }
            const a = 128 * 1024;
            let t = new ArrayBuffer(a), s = !1, l = 0;
            for (; l < t.byteLength;) {
                const {value: C, done: D} = await this.currentReader.read(new Uint8Array(t, l, t.byteLength - l));
                if (!C) {
                    this.file_num += 1, this.file_confirmed = !1, this.file_is_waiting = !1, this.currentReader = void 0, t = new ArrayBuffer(0);
                    break
                }
                if (l += C.byteLength, t = C.buffer, D) break
            }
            let E = new Uint8Array(t, 0, l);
            if (l === 0) this.file_num += 1, this.currentReader = void 0, this.file_confirmed = !1, this.file_is_waiting = !1; else {
                if (this.finished_size += l, !Fn(su.join(this.path, o.name))) {
                    const C = await Ht(new Uint8Array(t, 0, l));
                    if (C) C.length < l && (E = new Uint8Array(C), s = !0); else throw new Error("Failed to compress")
                }
                this.transferred += l
            }
            return wu.fromPartial({id: this.id, file_num: i, data: E, compressed: s})
        });
        d(this, "send_current_digest", async e => {
            if (!this.fileHandles || !this.fileHandles[this.file_num]) throw new Error("file is None");
            let i = await this.fileHandles[this.file_num].getFile();
            if (!i) throw new Error("file is None");
            let o = Math.floor(i.lastModified / 1e3), a = i.size,
                t = bu.fromPartial({id: this.id, file_num: this.file_num, last_modified: o, file_size: a}),
                s = ou.fromPartial({digest: t}), l = eu.fromPartial({file_response: s});
            e(l)
        });
        d(this, "read_digest", e => {
            let i = this.files[e.file_num], o = su.join(this.path, i.name), a = this.default_overwrite_strategy;
            if (a !== void 0) {
                let t = cu.fromPartial({
                    id: e.id,
                    file_num: e.file_num,
                    offset_blk: a ? 0 : void 0,
                    skip: a ? void 0 : !0
                });
                return this.confirm(t), su.new_send_confirm(t)
            } else {
                _n(e.id, e.file_num, o, !0, e.is_identical);
                return
            }
        });
        d(this, "write_digest", e => {
            let i = cu.fromPartial({id: e.id, file_num: e.file_num, offset_blk: 0});
            return this.confirm(i), su.new_send_confirm(i)
        });
        d(this, "write_done", e => {
            if (this.writer && this.writer.close(), this.zip) {
                if (this.currentData) {
                    const i = this.files[this.file_num];
                    this.zip.file(i.name, this.currentData), this.currentData = void 0
                }
                this.zip.generateAsync({type: "blob"}).then(i => {
                    $t.exports.saveAs(i, `${this.path}.zip`)
                })
            }
        });
        d(this, "confirm", e => (this.file_num !== e.file_num ? console.log("file num truncated, ignoring") : e.skip !== void 0 ? e.skip ? this.set_file_skipped() : this.set_file_confirmed(!0) : e.offset_blk !== void 0 && this.set_file_confirmed(!0), !0));
        d(this, "set_file_skipped", () => {
            var e;
            (e = this.writer) == null || e.abort(), this.writer = void 0, this.stream = void 0, this.set_file_confirmed(!1), this.set_file_is_waiting(!1), this.file_num += 1, this.file_skipped = !0
        });
        d(this, "set_file_confirmed", e => {
            this.file_confirmed = e, this.file_skipped = !1
        });
        d(this, "set_file_is_waiting", e => {
            this.file_is_waiting = e
        });
        d(this, "update_job_status", e => {
            if (e <= 0) return;
            let i = Math.floor((this.transferred - this.lastTransferred) / (e * 1 / 1e3));
            this.lastTransferred = this.transferred;
            let o = this.file_num - 1;
            this.job_progress(this.id, o, i, this.finished_size)
        });
        d(this, "job_progress", (e, i, o, a) => {
            F("job_progress", {
                id: e.toString(),
                file_num: i.toString(),
                speed: o.toString(),
                finished_size: a.toString()
            })
        });
        d(this, "job_skipped", () => this.file_skipped && this.files.length === 1);
        d(this, "job_error", () => {
            if (this.job_skipped()) return "skipped"
        });
        d(this, "job_completed", () => !this.enable_overwrite_detection || !this.file_confirmed && !this.file_is_waiting);
        d(this, "remove_download_file", () => {
            if (this.writer) try {
                this.writer.abort()
            } catch {
            }
            this.writer = void 0, this.stream = void 0, this.currentData = void 0, this.zip = void 0
        });
        this.id = e, this.remote = i, this.path = o, this.show_hidden = a, this.is_remote = t, this.is_last_job = s, this.file_num = l, this.files = E, this.conn_id = c, this.total_size = C, this.finished_size = D, this.transferred = B, this.lastTransferred = 0, this.enable_overwrite_detection = m, this.file_confirmed = f, this.file_skipped = R, this.file_is_waiting = I, this.is_dir = y
    }
};
let lu = su;
d(lu, "newWrite", (e, i, o, a, t, s, l, E, c) => {
    let C = l.reduce((B, m) => B + m.size, 0);
    return new su({
        id: e,
        remote: i,
        path: o,
        file_num: a,
        show_hidden: t,
        is_remote: s,
        files: l,
        total_size: C,
        enable_overwrite_detection: E,
        is_dir: c,
        is_last_job: !1,
        conn_id: 0,
        finished_size: 0,
        transferred: 0,
        file_confirmed: !1,
        file_skipped: !1,
        file_is_waiting: !1
    })
}), d(lu, "newRead", (e, i, o, a, t, s, l, E, c) => {
    let C = l.reduce((B, m) => B + m.size, 0), D = new su({
        id: e,
        remote: i,
        path: o,
        file_num: a,
        show_hidden: t,
        is_remote: s,
        files: l,
        total_size: C,
        enable_overwrite_detection: E,
        is_dir: !1,
        is_last_job: !1,
        conn_id: 0,
        finished_size: 0,
        transferred: 0,
        file_confirmed: !1,
        file_skipped: !1,
        file_is_waiting: !1
    });
    return D.fileHandles = c, D
}), d(lu, "new_send_confirm", e => eu.fromPartial({file_action: T.fromPartial({send_confirm: e})})), d(lu, "join", (e, i) => i === "" ? e : e.endsWith("/") || e.endsWith("\\") ? e + i : b4() ? e + "\\" + i : e + "/" + i);
const an = (u, e, i, o) => {
    let a = zu.fromPartial({id: u, path: e, include_hidden: o, file_num: i});
    return T.fromPartial({send: a})
}, Gi = (u, e, i, o) => {
    if (!o) return;
    let a = Tu.fromPartial({id: u, path: e, file_num: i});
    return T.fromPartial({remove_file: a})
}, on = (u, e, i) => {
    let o = fu.fromPartial({id: u, path: e, include_hidden: i});
    return T.fromPartial({all_files: o})
}, nn = (u, e) => {
    let i = ju.fromPartial({id: u, path: e});
    return T.fromPartial({create: i})
}, rn = u => {
    let e = yu.fromPartial({id: u});
    return T.fromPartial({cancel: e})
}, sn = (u, e) => {
    let i = Iu.fromPartial({id: u, path: e, recursive: !0});
    return T.fromPartial({remove_dir: i})
}, ln = (u, e, i) => {
    let o = xu.fromPartial({id: u, path: e, new_name: i});
    return T.fromPartial({rename: o})
}, En = (u, e, i, o, a) => {
    let t = Ru.fromPartial({id: u, path: e, file_num: i, files: o, total_size: a});
    return T.fromPartial({receive: t})
}, dn = u => {
    let e = ou.fromPartial({block: u});
    return eu.fromPartial({file_response: e})
}, Zi = (u, e, i) => {
    let o = ou.fromPartial({error: Su.fromPartial({id: u, error: e, file_num: i})});
    return eu.fromPartial({file_response: o})
}, cn = (u, e) => {
    let i = ou.fromPartial({done: Pu.fromPartial({id: u, file_num: e})});
    return eu.fromPartial({file_response: i})
}, Qi = (u, e, i, o, a) => {
    a ? F("update_folder_files", {info: Cn(u, e, a)}) : F("file_dir", {is_local: "false", value: pn(u, i, e)})
}, Cn = (u, e, i) => {
    let o = {
        id: u,
        entries: e.map(a => ({name: a.name, type: a.entry_type, time: a.modified_time, size: a.size})),
        total_size: e.reduce((a, t) => a + t.size, 0)
    };
    return i && (o.num_entries = e.length, delete o.entries), JSON.stringify(o)
}, pn = (u, e, i) => {
    let o = {
        id: u,
        path: e,
        entries: i.map(a => ({entry_type: a.entry_type, name: a.name, size: a.size, modified_time: a.modified_time}))
    };
    return JSON.stringify(o)
}, le = (u, e, i) => {
    F("job_error", {id: u.toString(), err: e, file_num: i.toString()})
}, Dn = (u, e) => {
    F("job_done", {id: u.toString(), file_num: e.toString()})
};
var e0 = 0;
const Bn = async (u, e) => {
    try {
        if (u) {
            const i = await window.showDirectoryPicker();
            let o = {name: i.name, size: 0, entry_type: 2, modified_time: 0};
            e0++, e(e0, i), F("selected_files", {handleIndex: e0, file: o})
        } else {
            const i = {multiple: !0}, o = await window.showOpenFilePicker(i);
            for (const a of o) {
                const t = await a.getFile();
                let s = {name: t.name, size: t.size, entry_type: 4, modified_time: Math.floor(t.lastModified / 1e3)};
                e0++, e(e0, a), F("selected_files", {handleIndex: e0, file: s})
            }
        }
    } catch (i) {
        console.error("Failed to choose file:", i)
    }
}, An = async (u, e) => {
    let i = [];
    for (let o of u) if (!o.is_last_job) try {
        let a = await o.read(e);
        if (a) e(dn(a)); else if (o.job_completed()) {
            i.push(o.id);
            let t = o.job_error();
            e(t ? Zi(o.id, t, o.file_num) : cn(o.id, o.file_num))
        }
    } catch (a) {
        e(Zi(o.id, (a != null ? a : "read failed").toString(), o.file_num))
    }
    return i
}, mn = u => {
    let e = u.lastIndexOf(".");
    return e >= 0 ? u.substring(e + 1) : ""
}, Fn = u => {
    let e = mn(u);
    return e === "xz" || e === "gz" || e === "zip" || e === "7z" || e === "rar" || e === "bz2" || e === "tgz" || e === "png" || e === "jpg"
}, _n = (u, e, i, o, a) => {
    F("override_file_confirm", {
        id: u.toString(),
        file_num: e.toString(),
        read_path: i,
        is_upload: o.toString(),
        is_identical: a.toString()
    })
}, Xi = (u, e) => u === "" ? e : lu.join(u, e), zt = async (u, e) => {
    const i = [];
    let o = [];
    for await(const a of u.values()) if (a.kind === "file") i.push(a.getFile().then(t => {
        o.push({
            entry: W.fromPartial({
                name: Xi(e, t.name),
                size: t.size,
                entry_type: 4,
                modified_time: Math.floor(t.lastModified / 1e3)
            }), handle: a
        })
    })); else if (a.kind === "directory") {
        let t = Xi(e, a.name);
        const s = await zt(a, t);
        o = o.concat(s)
    }
    return await Promise.all(i), o
}, Pt = 21116, Rt = "rs-ny.rustdesk.com", Yi = 100, f4 = "trust-this-device";

class It {
    constructor() {
        d(this, "_msgs");
        d(this, "_ws");
        d(this, "_interval");
        d(this, "_updateInterval");
        d(this, "_id");
        d(this, "_otherServer");
        d(this, "_hash");
        d(this, "_msgbox");
        d(this, "_draw");
        d(this, "_peerInfo");
        d(this, "_firstFrame");
        d(this, "_frameCount");
        d(this, "_videoFormat");
        d(this, "_password");
        d(this, "_presetPassword");
        d(this, "_sharedPassword");
        d(this, "_passwordSource");
        d(this, "_options");
        d(this, "_fpsCalc");
        d(this, "_updateTs");
        d(this, "_serverPerms");
        d(this, "_elevationRequested");
        d(this, "_supportedEncoding");
        d(this, "_i444");
        d(this, "_healthCheck");
        d(this, "_sessionId");
        d(this, "_isFileTransfer");
        d(this, "_readJobs");
        d(this, "_writeJobs");
        d(this, "_removeJobs");
        d(this, "_last_update_jobs_ms");
        d(this, "_fileHandles");
        d(this, "_ftTimer");
        d(this, "_restartingRemoteDevice");
        d(this, "_enableTrustedDevices");
        d(this, "_lastChangeDisplay");
        d(this, "_lastSendFps");
        d(this, "_videoQueue");
        d(this, "_decodingVideo");
        d(this, "_selectedWindowsSessionId");
        this._msgbox = Tt, this._draw = de, this._msgs = [], this._id = "", this._frameCount = {}, this._fpsCalc = {
            videoTestSpeed: [0, 0],
            skipBegining: 0,
            fps: void 0
        }, this._updateTs = new Date().getTime(), this._serverPerms = {
            keyboardEnabled: !0,
            fileTransferEnabled: !0,
            clipboardEnabled: !0
        }, this._elevationRequested = !1, this._supportedEncoding = G.fromPartial({}), this._sessionId = 0, this._isFileTransfer = !1, this._readJobs = [], this._writeJobs = [], this._removeJobs = {}, this._last_update_jobs_ms = 0, this._fileHandles = {}, this._restartingRemoteDevice = !1, this._enableTrustedDevices = !1, this._passwordSource = {type: "Undefined"}, this._videoQueue = [], this._decodingVideo = !1
    }

    getPeerPlatform() {
        var e, i;
        return (i = (e = this._peerInfo) == null ? void 0 : e.platform) != null ? i : ""
    }

    isSupportVirtualDisplay() {
        if (!this._peerInfo) return !1;
        try {
            const e = JSON.parse(this._peerInfo.platform_additions), i = e.is_installed, o = e.idd_impl;
            return i && this._peerInfo.platform == "Windows" && (o == "rustdesk_idd" || o == "amyuni_idd")
        } catch (e) {
            return console.error("Failed to check virtual display support, ", e), !1
        }
    }

    sendMessage(e) {
        var i;
        (i = this._ws) == null || i.sendMessage(e)
    }

    handleRelayId(e) {
        return e.endsWith("\\r") || e.endsWith("/r") ? e.substring(0, e.length - 2) : e
    }

    setRemoteId(e) {
        var o, a, t, s, l;
        let i = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        if (i == 0 && (i = 1), this._sessionId = i, this._restartingRemoteDevice = !1, this._id = e, e.includes("@")) {
            const E = e.split("@"), c = E[0], C = ((o = E[1]) != null ? o : "").split("?"),
                D = (a = C[0]) != null ? a : "", B = (t = C[1]) != null ? t : "",
                m = D == $4 ? qi : (s = B.split("&").reduce((R, I) => {
                    const y = I.indexOf("=");
                    if (y != -1) {
                        const nu = I.substring(0, y).toLowerCase(), k4 = I.substring(y + 1);
                        R[nu] = k4
                    }
                    return R
                }, {}).key) != null ? s : "", f = this.handleRelayId(c);
            this._otherServer = {realId: f, server: D, key: m}, this._id = `${f}@${D}`
        } else this._id = this.handleRelayId(e);
        if (this._options = (l = Cu()[this._id]) != null ? l : this.getUserDefaultToggleOptions(), this._otherServer && !this._otherServer.key) {
            const E = this.getOption("other-server-key");
            E && (this._otherServer.key = E)
        }
    }

    setSessionInfo(e) {
        this._isFileTransfer = e.isFileTransfer, e.is_shared_password ? this._sharedPassword = e.password : this._presetPassword = e.password
    }

    async start() {
        try {
            await this._start()
        } catch (e) {
            this.msgbox("error", "Connection Error", e.type == "close" ? "Reset by the peer" : String(e))
        }
    }

    getId() {
        var e, i;
        return (i = (e = this._otherServer) == null ? void 0 : e.realId) != null ? i : this._id
    }

    async _start() {
        var m, f;
        let e = this.getId(), i = bo(), o = xt(), a = (m = this._otherServer) == null ? void 0 : m.server;
        this._otherServer && (i = this._otherServer.key, o = "");
        let t = "";
        a ? a == $4 ? t = z4(Rt) : t = z4(a) : t = S4(), this._options || (this._options = (f = Cu()[this._id]) != null ? f : this.getUserDefaultToggleOptions()), this._interval = setInterval(() => {
            var R;
            for (; this._msgs.length;) (R = this._ws) == null || R.sendMessage(this._msgs[0]), this._msgs.splice(0, 1)
        }, 1);
        const s = new I4(t, !0, "rendezvous");
        this._ws = s, console.log(new Date + ": Connecting to rendezvous server: " + t + ", for " + e), await s.open(), console.log(new Date + ": Connected to rendezvous server");
        const l = this._isFileTransfer ? ae.FILE_TRANSFER : ae.DEFAULT_CONN, E = st.SYMMETRIC,
            c = qu.fromPartial({id: e, licence_key: i, conn_type: l, nat_type: E, token: o, version: ne});
        s.sendRendezvous({punch_hole_request: c});
        const C = await s.next();
        s.close(), console.log(new Date + ": Got relay response");
        const D = C.punch_hole_response, B = C.relay_response;
        if (D) {
            if (D != null && D.other_failure) {
                this.msgbox("error", "Error", D == null ? void 0 : D.other_failure);
                return
            }
            if (D.failure != G0.UNRECOGNIZED) switch (D == null ? void 0 : D.failure) {
                case G0.ID_NOT_EXIST:
                    this.msgbox("error", "Error", "ID does not exist");
                    break;
                case G0.OFFLINE:
                    this.msgbox("error", "Error", "Remote desktop is offline");
                    break;
                case G0.LICENSE_MISMATCH:
                    this.msgbox("error", "Error", "Key mismatch");
                    break;
                case G0.LICENSE_OVERUSE:
                    this.msgbox("error", "Error", "Key overuse");
                    break
            }
        } else if (B) {
            if (!B.version) {
                this.msgbox("error", "Error", "Remote version is low, not support web");
                return
            }
            this._healthCheck = new Qo(t, B.feedback, i, o), this._healthCheck.start(), await this.connectRelay(B, i)
        }
    }

    async connectRelay(e, i) {
        var c, C;
        const o = e.pk;
        let a = e.relay_server;
        a ? a = z4(a, !0, 2) : a = S4(!0);
        const t = e.uuid;
        console.log(new Date + ": Connecting to relay server: " + a);
        const s = new I4(a, !1, "relay");
        await s.open(), console.log(new Date + ": Connected to relay server"), this._ws = s;
        const l = Ku.fromPartial({licence_key: i, uuid: t});
        s.sendRendezvous({request_relay: l});
        const E = await this.secure(o, i) || !1;
        F("connection_ready", {secure: E, direct: !1}), this._updateInterval = setInterval(() => {
            this.updateStatus()
        }, 1e3), (c = this._ws) == null || c.on("message", this.msgHandler.bind(this)), (C = this._ws) == null || C.on("status_change", this.onStatusChange.bind(this))
    }

    async secure(e, i) {
        var m, f, R, I, y, nu, k4, Se;
        if (e) {
            try {
                if (e = await it(e, i || qi), e) {
                    const j = te.decode(e);
                    j.id == this.getId() && (e = j.pk)
                }
                (e == null ? void 0 : e.length) != 32 && (e = void 0)
            } catch (j) {
                console.error("Failed to verify id pk, ", j), e = void 0
            }
            e || console.error("Handshake failed: invalid public key from rendezvous server")
        }
        if (!e) {
            const j = K.fromPartial({});
            (m = this._ws) == null || m.sendMessage({public_key: j});
            return
        }
        const o = await ((f = this._ws) == null ? void 0 : f.next());
        let a = o == null ? void 0 : o.signed_id;
        if (!a) {
            console.error("Handshake failed: invalid message type");
            const j = K.fromPartial({});
            (R = this._ws) == null || R.sendMessage({public_key: j});
            return
        }
        try {
            a = await it(a.id, Uint8Array.from(e))
        } catch (j) {
            console.error("Failed to verify signed id pk, ", j), console.error("pk mismatch, fall back to non-secure");
            const Gt = K.fromPartial({});
            (I = this._ws) == null || I.sendMessage({public_key: Gt});
            return
        }
        const t = te.decode(a), s = t.id, l = t.pk;
        if (s != this.getId()) {
            console.error("Handshake failed: sign failure");
            const j = K.fromPartial({});
            (y = this._ws) == null || y.sendMessage({public_key: j});
            return
        }
        if (l.length != 32) {
            console.error("Handshake failed: invalid public box key length from peer");
            const j = K.fromPartial({});
            (nu = this._ws) == null || nu.sendMessage({public_key: j});
            return
        }
        const [E, c] = bn(), C = wn(), D = Sn(C, l, E), B = K.fromPartial({asymmetric_value: c, symmetric_value: D});
        return (k4 = this._ws) == null || k4.sendMessage({public_key: B}), (Se = this._ws) == null || Se.setSecretKey(C), console.log("secured"), !0
    }

    async msgHandler(e) {
        var i;
        if (this._ws) {
            if (e != null && e.hash) await this.handleHash(e.hash); else if (e != null && e.test_delay) {
                const o = e == null ? void 0 : e.test_delay;
                o.from_client || (F("update_quality_status", {
                    delay: `${o.last_delay}`,
                    target_bitrate: `${o.target_bitrate}`
                }), (i = this._ws) == null || i.sendMessage({test_delay: o}))
            } else if (e != null && e.login_response) this.handleLoginResponse(e == null ? void 0 : e.login_response); else if (e != null && e.video_frame) this.handleVideoFrame(e == null ? void 0 : e.video_frame); else if (e != null && e.clipboard) ke(e == null ? void 0 : e.clipboard); else if (e != null && e.multi_clipboards) tn(e == null ? void 0 : e.multi_clipboards); else if (e != null && e.cursor_data) {
                const o = e == null ? void 0 : e.cursor_data;
                we(o.colors, !1, a => {
                    a && (o.colors = a, F("cursor_data", o))
                })
            } else if (e != null && e.cursor_id) F("cursor_id", {id: e == null ? void 0 : e.cursor_id}); else if (e != null && e.cursor_position) F("cursor_position", e == null ? void 0 : e.cursor_position); else if (e != null && e.misc) this.handleMisc(e == null ? void 0 : e.misc); else if (e != null && e.audio_frame) Tn(e == null ? void 0 : e.audio_frame.data); else if (e != null && e.message_box) this.handleMsgBox(e == null ? void 0 : e.message_box); else if (e != null && e.peer_info) this.handleSyncPeerInfo(e.peer_info); else if (e.file_response) await this.handleFileResponse(e.file_response); else if (e.file_action) {
                const o = e.file_action;
                await this.handleFileAction(o)
            }
        }
    }

    onStatusChange(e) {
        if (e === "" || e === "open") return;
        if (this._restartingRemoteDevice) {
            this.msgbox("restarting", "Restarting remote device", "remote_restarting_tip", "");
            return
        }
        if (e instanceof CloseEvent && e.code == 1e3 || !this._ws) return;
        e && console.error("msgLoop error: ", e);
        const i = "Connection Error";
        let o = "";
        if (e === "Timeout") o = "Connection timeout"; else if (e instanceof CloseEvent) {
            let a = `code: ${e.code}`;
            e.reason && (a += `, reason: ${e.reason}`), o = `Connection closed, ${a}`
        } else e instanceof Error ? o = e.message : typeof e.toString == "function" ? o = e.toString() : o = "";
        this.msgbox("error", i, o, "")
    }

    enterOrLeave(e) {
        e === !1 ? (Wo(), se()) : (Ee(), Hi(this))
    }

    makeDisplaysMsg(e) {
        let i = [];
        return e.forEach(o => {
            let a = {};
            a.x = o.x, a.y = o.y, a.width = o.width, a.height = o.height, a.cursor_embedded = o.cursor_embedded ? 1 : 0, o.original_resolution && (a.original_width = o.original_resolution.width, a.original_height = o.original_resolution.height), a.scale = Math.floor(o.scale * 100), i.push(a)
        }), JSON.stringify(i)
    }

    handleSyncPeerInfo(e) {
        this._peerInfo && (this._peerInfo.displays = e.displays), F("sync_peer_info", {displays: this.makeDisplaysMsg(e.displays)}), F("sync_platform_additions", {platform_additions: e.platform_additions})
    }

    handleMsgBox(e) {
        let i = e.link;
        i in Mi ? i = Mi[i] : (console.warn("Message box ignore link " + i + " for security"), i = ""), this.msgbox(e.msgtype, e.title, e.text, i)
    }

    updateStatus() {
        var s, l;
        const e = new Date().getTime(), i = e - this._updateTs;
        if (i < 1e3) return;
        this._updateTs = e;
        const o = ((s = this._ws) == null ? void 0 : s.getRecvDataCount()) || 0;
        (l = this._ws) == null || l.resetRecvDataCount();
        const a = `${(o / 1024 / i * 1e3).toFixed(2)} kb/s`, t = {};
        for (const E in this._frameCount) if (this._frameCount.hasOwnProperty(E)) {
            const c = this._frameCount[E];
            t[E] = Math.floor(c / (i / 1e3))
        }
        this._frameCount = {}, F("update_quality_status", {speed: a, fps: JSON.stringify(t)})
    }

    handleLoginResponse(e) {
        const i = {
            [Ma]: {
                msgtype: "error",
                title: "Login Error",
                text: "Login screen using Wayland is not supported",
                link: "https://rustdesk.com/docs/en/manual/linux/#login-screen",
                try_again: !0
            },
            [ba]: {msgtype: "session-login", title: "", text: "", link: "", try_again: !0},
            [wa]: {msgtype: "session-re-login", title: "", text: "", link: "", try_again: !0},
            [Sa]: {
                msgtype: "info-nocancel",
                title: "another_user_login_title_tip",
                text: "another_user_login_text_tip",
                link: "",
                try_again: !1
            },
            [za]: {
                msgtype: "info-nocancel",
                title: "xorg_not_found_title_tip",
                text: "xorg_not_found_text_tip",
                link: "https://rustdesk.com/docs/en/manual/linux/#login-screen",
                try_again: !0
            },
            [Pa]: {
                msgtype: "info-nocancel",
                title: "no_desktop_title_tip",
                text: "no_desktop_text_tip",
                link: "https://rustdesk.com/docs/en/manual/linux/#login-screen",
                try_again: !0
            },
            [Ra]: {msgtype: "session-login-password", title: "", text: "", link: "", try_again: !0},
            [Ia]: {msgtype: "session-login-re-password", title: "", text: "", link: "", try_again: !0},
            [Oa]: {
                msgtype: "wait-remote-accept-nook",
                title: "Prompt",
                text: "Please wait for the remote side to accept your session request...",
                link: "",
                try_again: !0
            }
        }, o = e.error;
        if (o) if (o == Oi && (this._enableTrustedDevices = e.enable_trusted_devices), o == Ta && (this._password = void 0, this.msgbox("input-password", "Password Required", "", "")), o == ja) this._password = void 0, this.msgbox("re-input-password", o, "Do you want to enter again?"); else if (o == Na || o == Oi) this.getOption(f4) == "Y" && this.setOption(f4, void 0), this.msgbox("input-2fa", o, ""); else if (o in i) {
            const a = i[o];
            this.msgbox(a.msgtype, a.title, a.text, a.link)
        } else o.includes(La) ? this.msgbox("error", "Login Error", o, Et) : this.msgbox("error", "Login Error", o); else e.peer_info && (this._firstFrame = !1, this.handlePeerInfo(e.peer_info))
    }

    enableTrustedDevices() {
        return this._enableTrustedDevices
    }

    msgbox(e, i, o, a = "") {
        var t;
        (t = this._msgbox) == null || t.call(this, e, i, o, a)
    }

    cancelMsgbox(e) {
        F("cancel_msgbox", {tag: e})
    }

    draw(e, i) {
        de(e, new Uint8Array(i.data))
    }

    close() {
        var e, i;
        this._msgs = [], this._interval && (clearInterval(this._interval), this._interval = void 0), this._updateInterval && (clearInterval(this._updateInterval), this._updateInterval = void 0), this._ftTimer && (clearTimeout(this._ftTimer), this._ftTimer = void 0), (e = this._ws) == null || e.close(), this._ws = void 0, (i = this._healthCheck) == null || i.close(), this._healthCheck = void 0, this._readJobs = [], this._writeJobs = [], this._removeJobs = {}, this._fileHandles = {}, se(), this._lastChangeDisplay = void 0, this._lastSendFps = void 0, this._videoQueue = [], this._decodingVideo = !1
    }

    refresh() {
        var i;
        const e = h.fromPartial({refresh_video: !0});
        (i = this._ws) == null || i.sendMessage({misc: e})
    }

    setMsgbox(e) {
        this._msgbox = e
    }

    setDraw(e) {
        this._draw = e
    }

    async handleHash(e) {
        this._hash = e;
        let i = this._password;
        (!i || i.length === 0) && this._presetPassword && (i = Gu([this._presetPassword, e.salt]), this._passwordSource = {type: "Undefined"});
        let o = this._sharedPassword;
        if (this._sharedPassword = void 0, o && (i = Gu([o, e.salt]), this._passwordSource = {
            type: "SharedAb",
            value: o
        }), !i || i.length === 0) {
            const l = this.getOption("password");
            typeof l == "string" && l.length > 0 && (i = d4(l), this._passwordSource = {type: "Undefined"})
        }
        if (!i || i.length === 0) {
            let l = De("access_token"), E = await _t();
            if (l && l === E.access_token) {
                let c = E.ab_entries.find(C => mo(C));
                if (c) {
                    let C = c.peers.find(D => D.id == this._id);
                    if (C) {
                        let D = d4(C.hash);
                        D.length > 0 && (i = D, this._passwordSource = {type: "PersonalAb", value: D})
                    }
                }
            }
        }
        this._password = i;
        let a;
        !i || i.length === 0 ? (a = new Uint8Array(0), this.msgbox("input-password", "Password Required", "")) : a = Gu([i, e.challenge]);
        let t = this.getOption("os-username") || "", s = this.getOption("os-password") || "";
        this._sendLoginMessage({os_login: {username: t, password: s}, password: a})
    }

    handle_login_from_ui(e, i, o, a) {
        let t;
        if (o === "") {
            let l = this._password;
            if (!l || l.length === 0) {
                const E = this.getOption("password");
                typeof E == "string" && E.length > 0 && (l = d4(E), this._passwordSource = {type: "Undefined"})
            }
            t = l
        } else this._passwordSource = {type: "Undefined"}, t = Gu([o, this._hash.salt]), this.setRemember(a);
        this._password = t;
        let s = Gu([t != null ? t : Uint8Array.from([]), this._hash.challenge]);
        this._sendLoginMessage({os_login: {username: e, password: i}, password: s})
    }

    changePreferCodec() {
        var a;
        const e = this.getSupportedDecoding(), i = S.fromPartial({supported_decoding: e}),
            o = h.fromPartial({option: i});
        (a = this._ws) == null || a.sendMessage({misc: o})
    }

    async reconnect() {
        this.close(), await this.start()
    }

    _getHwid(e = void 0) {
        return (e != null ? e : this.getOption(f4) == "Y") ? xo() : new Uint8Array
    }

    _sendLoginMessage(e) {
        var E;
        const i = this._otherServer ? `${T4()}@${S4()}` : T4(), o = wo();
        let a = gt();
        if (o) try {
            const c = JSON.parse(o);
            c.name && (a = c.name)
        } catch (c) {
            console.error("Failed to get user info, ", c)
        }
        let t;
        if (this._isFileTransfer) {
            let c = this.getOption("remote_dir"), C = this.getOption("remote_show_hidden") === "Y";
            t = Fu.fromPartial({dir: c, show_hidden: C})
        }
        const s = this._getHwid(), l = H.fromPartial({
            username: this.getId(),
            my_id: i,
            my_name: a,
            session_id: this._sessionId,
            password: e.password,
            option: this.getOptionMessage(),
            video_ack_required: !0,
            os_login: e.os_login,
            version: ne,
            my_platform: Ga,
            file_transfer: t,
            hwid: s
        });
        (E = this._ws) == null || E.sendMessage({login_request: l})
    }

    getOptionMessage() {
        if (this._isFileTransfer) return;
        let e = 0;
        const i = S.fromPartial({}), o = this.getImageQuality(), a = this.getImageQualityEnum(o, !0), t = x.Yes;
        if (a != null) i.image_quality = a, e += 1; else if (o === "custom") {
            let l = 50, E = this.getOption("custom_image_quality");
            if (E) try {
                l = parseInt(E)
            } catch {
            }
            i.custom_image_quality = l << 8, e += 1;
            let c = this.getOption("custom-fps");
            if (c) try {
                i.custom_fps = parseInt(c), this._lastSendFps = i.custom_fps, e += 1
            } catch {
            }
        }
        const s = this.getOption("view-only");
        return s && (i.disable_keyboard = t), (s || this._options["show-remote-cursor"]) && (i.show_remote_cursor = t, e += 1), this._options["follow-remote-cursor"] && (i.follow_remote_cursor = t, e += 1), this._options["follow-remote-window"] && (i.follow_remote_window = t, e += 1), !s && this._options["lock-after-session-end"] && (i.lock_after_session_end = t, e += 1), this._options["disable-audio"] && (i.disable_audio = t, e += 1), (s || this._options["disable-clipboard"]) && (i.disable_clipboard = t, e += 1), i.supported_decoding = this.getSupportedDecoding(), e += 1, e > 0 ? i : void 0
    }

    sendVideoReceived() {
        var i;
        const e = h.fromPartial({video_received: !0});
        (i = this._ws) == null || i.sendMessage({misc: e})
    }

    getCodecFormat(e) {
        return e.vp9s ? "VP9" : e.vp8s ? "VP8" : e.av1s ? "AV1" : e.h264s ? "H264" : e.h265s ? "H265" : "Unknown"
    }

    getSupportedEncoding() {
        return this._supportedEncoding
    }

    getSupportedDecoding() {
        let e = this.getOption("codec-preference");
        e == "vp8" ? e = mu.VP8 : e == "vp9" ? e = mu.VP9 : e == "av1" ? e = mu.AV1 : e == "h264" ? e = mu.H264 : e == "h265" ? e = mu.H265 : e = mu.Auto;
        let i = this.getOption("i444") == "Y" ? ie.I444 : ie.I420;
        return Wu.fromPartial({
            ability_vp8: 1,
            ability_vp9: 1,
            ability_av1: 1,
            ability_h264: 1,
            ability_h265: 1,
            prefer: e,
            prefer_chroma: i,
            i444: J.fromPartial({vp9: !0, av1: !0})
        })
    }

    getAlternativeCodecs() {
        const e = this.getSupportedEncoding(), i = this.getSupportedDecoding();
        return JSON.stringify({
            vp8: e.vp8 && i.ability_vp8 == 1,
            av1: e.av1 && i.ability_av1 == 1,
            h264: e.h264 && i.ability_h264 == 1,
            h265: e.h265 && i.ability_h265 == 1
        })
    }

    fpsCalculate(e, i) {
        if (e) {
            this._fpsCalc.skipBegining = 0, this._fpsCalc.videoTestSpeed = [0, 0];
            return
        }
        if (this._fpsCalc.skipBegining < 3) {
            this._fpsCalc.skipBegining += 1;
            return
        }
        this._fpsCalc.videoTestSpeed[1] += i, this._fpsCalc.videoTestSpeed[0] += 1, this._fpsCalc.videoTestSpeed[0] % 10 == 0 && i > 0 && (this._fpsCalc.fps = Math.floor(this._fpsCalc.videoTestSpeed[0] * 1e3 / this._fpsCalc.videoTestSpeed[1]), console.log("max decode fps: " + this._fpsCalc.fps)), this._fpsCalc.videoTestSpeed[0] >= 30 && (this._fpsCalc.videoTestSpeed = [0, 0])
    }

    handleVideoFrame(e) {
        if (!this._firstFrame) {
            this.msgbox("", "", ""), this._firstFrame = !0, this.sendToggleVirtualDisplayMsg(), this.sendTogglePrivacyModeMsg(), Ee(), Hi(this, !0);
            const i = 0;
            for (let o = 0; o < i; o++) this.sendVideoReceived();
            console.log(`send ${i} video received in advance for high fps`)
        }
        this._videoQueue.push(e), this._decodingVideo || this.processVideoQueue()
    }

    async processVideoQueue() {
        this._decodingVideo = !0;
        try {
            for (; this._videoQueue.length > 0;) await this.handleOneVideoFrame(this._videoQueue.shift())
        } catch (e) {
            console.error("deal video queue failed", e)
        }
        this._decodingVideo = !1
    }

    async handleOneVideoFrame(e) {
        const i = this.getCodecFormat(e), o = this._videoFormat != i;
        o && (this._videoFormat = i, F("update_quality_status", {codec_format: i}));
        var a = new Date().getTime(), t = 0, s = void 0;
        if (e.vp8s) t = 0, s = e.vp8s; else if (e.vp9s) t = 1, s = e.vp9s; else if (e.av1s) t = 2, s = e.av1s; else if (e.h264s) t = 3, s = e.h264s; else if (e.h265s) t = 4, s = e.h265s; else {
            console.log("unknown codec");
            return
        }
        const l = s == null ? void 0 : s.frames.length;
        this._frameCount[e.display] = (this._frameCount[e.display] || 0) + l, this.sendVideoReceived();
        try {
            for (let E = 0; E < l; E++) {
                let c = s.frames[E];
                const C = await xa(t, c.data.slice(0).buffer);
                if (C.data && l - 1 == E) {
                    this.draw(e.display, C.data);
                    const D = new Date().getTime();
                    this.fpsCalculate(o, D - a);
                    const B = C.data.yuvFormat == 5;
                    this._i444 != B && (this._i444 = B, F("update_quality_status", {chroma: B ? "4:4:4" : "4:2:0"}))
                }
            }
        } catch (E) {
            console.error("decode error: ", E)
        }
    }

    sendToggleVirtualDisplayMsg() {
        if (!this.isSupportVirtualDisplay()) return;
        const e = this.getOption("virtual-display");
        !e || e.split(",").forEach(i => {
            const o = Number(i);
            isNaN(o) || this._sendToggleVirtualDisplayMsg(o, !0)
        })
    }

    sendTogglePrivacyModeMsg() {
        if (!!this._peerInfo && !(Q(this._peerInfo.version) < Q("1.2.4")) && this.getOption("privacy-mode")) {
            const e = this.getOption("privacy-mode-impl-key");
            if (e == "privacy_mode_impl_virtual_display" && this.isSupportVirtualDisplay()) return;
            this._sendTogglePrivacyModeMsg(e, !0)
        }
    }

    handlePeerInfo(e) {
        var a, t, s;
        if (this._peerInfo = e, e.current_display > e.displays.length && (e.current_display = 0), Q(e.version) < Q("1.1.10") && this.setPermission("restart", !1), this._isFileTransfer) {
            if (!e.username.length && !((a = e.windows_sessions) != null && a.sessions.length)) {
                this.msgbox("error", "Error", "No active console user logged on, please connect and logon first.");
                return
            }
        } else if (e.displays.length == 0) {
            this.lcHandlePeerInfo(e), F("update_privacy_mode", {}), this.msgbox("error", "Remote Error", "No Display");
            return
        }
        F("peer_info", {
            ...e,
            displays: this.makeDisplaysMsg(e.displays),
            resolutions: JSON.stringify(e.resolutions)
        }), this._isFileTransfer || (this.msgbox("success", "Successful", "Connected, waiting for image..."), this.tryChangeInitResolution(e.current_display));
        const i = this.shouldAutoLogin();
        i && this.inputOsPassword(i);
        const o = (t = this.getOption("info")) == null ? void 0 : t.username;
        o && !e.username && (e.username = o), F("update_privacy_mode", {}), this.lcHandlePeerInfo(e), (s = e.windows_sessions) != null && s.sessions.length && (this._selectedWindowsSessionId == e.windows_sessions.current_sid ? this.sendSelectedSessionId(e.windows_sessions.current_sid.toString()) : this.setMultipleWindowsSession(e.windows_sessions.sessions))
    }

    lcHandlePeerInfo(e) {
        var l;
        let i = re(this._id) || {};
        i.info = {username: e.username, hostname: e.hostname, platform: e.platform};
        let o = this._password, a = i.password, t = this.getRemember(), s = this._hash;
        t ? o && o.length > 0 && Z(o) !== a && !$i(this._passwordSource, o, s) && (i.password = Z(o), console.log("remember password of " + this._id)) : o && o.length > 0 && ut(this._passwordSource, o) ? (i.password = Z(o), console.log("save ab password of " + this._id + " to recent")) : a && (i.password = void 0, console.log("remove password of " + this._id)), (l = this._otherServer) != null && l.server && this._otherServer.server != $4 && this.setOption("other-server-key", this._otherServer.key), i.password && o && o.length > 0 && !$i(this._passwordSource, o, s) && !ut(this._passwordSource, o) && F("sync_peer_hash_password_to_personal_ab", {
            id: this._id,
            hash: Z(o)
        }), this.saveConfig(i), e.encoding && (this._supportedEncoding = e.encoding)
    }

    setPermission(e, i) {
        F("permission", {[e]: i})
    }

    shouldAutoLogin() {
        const e = this.getOption("lock-after-session-end"), i = !!this.getOption("auto-login"),
            o = this.getOption("os-password");
        return o && e && i ? o : ""
    }

    handleMisc(e) {
        if (e.audio_format) In(e.audio_format.channels, e.audio_format.sample_rate); else if (e.chat_message) F("chat_client_mode", {text: e.chat_message.text}); else if (e.permission_info) {
            const i = e.permission_info;
            console.info("Change permission " + i.permission + " -> " + i.enabled);
            let o;
            switch (i.permission) {
                case i0.Keyboard:
                    this._serverPerms.keyboardEnabled = i.enabled, o = "keyboard";
                    break;
                case i0.Clipboard:
                    this._serverPerms.clipboardEnabled = i.enabled, o = "clipboard";
                    break;
                case i0.Audio:
                    o = "audio";
                    break;
                case i0.Restart:
                    o = "restart";
                    break;
                case i0.BlockInput:
                    o = "block_input";
                    break;
                default:
                    return !0
            }
            this.setPermission(o, i.enabled)
        } else if (e.switch_display) F("switch_display", e.switch_display), this.setCustomResolution(e.switch_display); else {
            if (e.close_reason) return this.msgbox("error", "Connection Error", e.close_reason), this.close(), !1;
            if (e.back_notification) {
                if (!this.handleBackNotification(e.back_notification)) return this.close(), !1
            } else e.uac !== void 0 ? e.uac && this._serverPerms.keyboardEnabled ? this.msgbox("on-uac", "Prompt", "Please wait for confirmation of UAC...", "") : (this.cancelMsgbox("on-uac"), this.cancelMsgbox("wait-uac"), this.cancelMsgbox("elevation-error")) : e.foreground_window_elevated !== void 0 ? e.foreground_window_elevated && this._serverPerms.keyboardEnabled ? this.msgbox("on-foreground-elevated", "Prompt", "elevated_foreground_window_tip", "") : (this.cancelMsgbox("on-foreground-elevated"), this.cancelMsgbox("wait-uac"), this.cancelMsgbox("elevation-error")) : e.elevation_response !== void 0 ? e.elevation_response === "" ? this.msgbox("wait-uac", "", "", "") : (this.cancelMsgbox("wait-uac"), this.msgbox("elevation-error", "Elevation Error", e.elevation_response, "")) : e.portable_service_running !== void 0 ? (this.portableServiceRunning(e.portable_service_running), this._elevationRequested && e.portable_service_running && this.msgbox("custom-nocancel-success", "Successful", "Elevate successfully", "")) : e.supported_encoding ? this._supportedEncoding = e.supported_encoding : e.follow_current_display !== void 0 && this.handleFollowCurrentDisplay(e.follow_current_display)
        }
        return !0
    }

    portableServiceRunning(e) {
        F("portable_service_running", {running: e.toString()})
    }

    handleFollowCurrentDisplay(e) {
        F("follow_current_display", {display_idx: e.toString()})
    }

    handleBackNotification(e) {
        if (e.block_input_state) this.handleBackMsgBlockInput(e.block_input_state, e.details); else if (e.privacy_mode_state) return this.handleBackMsgPrivacyMode(e.privacy_mode_state, e.details, e.impl_key);
        return !0
    }

    updateBlockInputState(e) {
        F("update_block_input_state", {input_state: e ? "on" : "off"})
    }

    handleBackMsgBlockInput(e, i) {
        switch (e) {
            case D4.BlkOnSucceeded:
                this.updateBlockInputState(!0);
                break;
            case D4.BlkOnFailed:
                this.msgbox("custom-error", "Block user input", i == "" ? "Failed" : i, ""), this.updateBlockInputState(!1);
                break;
            case D4.BlkOffSucceeded:
                this.updateBlockInputState(!1);
                break;
            case D4.BlkOffFailed:
                this.msgbox("custom-error", "Unblock user input", i == "" ? "Failed" : i, "");
                break
        }
    }

    updatePrivacyMode(e, i) {
        i && (e == "" && (e = "privacy_mode_impl_mag"), this.setOption("privacy-mode-impl-key", e)), this.setOption("privacy-mode", i), F("update_privacy_mode", {})
    }

    handleBackMsgPrivacyMode(e, i, o) {
        switch (e) {
            case au.PrvOnByOther:
                return this.msgbox("error", "Connecting...", "Someone turns on privacy mode, exit", ""), !1;
            case au.PrvNotSupported:
                this.msgbox("custom-error", "Privacy mode", "Unsupported", ""), this.updatePrivacyMode(o, !1);
                break;
            case au.PrvOnSucceeded:
                this.msgbox("custom-nocancel", "Privacy mode", "Enter privacy mode", ""), this.updatePrivacyMode(o, !0);
                break;
            case au.PrvOnFailedDenied:
                this.msgbox("custom-error", "Privacy mode", "Peer denied", ""), this.updatePrivacyMode(o, !1);
                break;
            case au.PrvOnFailedPlugin:
                this.msgbox("custom-error", "Privacy mode", "Please install plugins", ""), this.updatePrivacyMode(o, !1);
                break;
            case au.PrvOnFailed:
                this.msgbox("custom-error", "Privacy mode", i == "" ? "Failed" : i, ""), this.updatePrivacyMode(o, !1);
                break;
            case au.PrvOffSucceeded:
                this.msgbox("custom-nocancel", "Privacy mode", "Exit privacy mode", ""), this.updatePrivacyMode(o, !1);
                break;
            case au.PrvOffFailed:
                this.msgbox("custom-error", "Privacy mode", i == "" ? "Failed to turn off" : i, "");
                break;
            case au.PrvOffUnknown:
                this.msgbox("custom-error", "Privacy mode", "Turned off", ""), this.updatePrivacyMode(o, !1);
                break
        }
        return !0
    }

    getRemember() {
        return this._options.remember || !1
    }

    setRemember(e) {
        this.setOption("remember", e)
    }

    getOption(e) {
        var i;
        return (i = this._options[e]) != null ? i : $u(e)
    }

    getUserDefaultToggleOptions() {
        const e = {}, i = {
            "show-remote-cursor": "show_remote_cursor",
            "lock-after-session-end": "lock_after_session_end",
            "privacy-mode": "privacy_mode",
            "enable-file-copy-paste": "enable-file-copy-paste",
            "disable-audio": "disable_audio",
            "disable-clipboard": "disable_clipboard",
            "show-quality-monitor": "show_quality_monitor",
            allow_swap_key: "allow_swap_key",
            "view-only": "view_only",
            "follow-remote-cursor": "follow_remote_cursor",
            "follow-remote-window": "follow_remote_window"
        };
        for (const [a, t] of Object.entries(i)) e[a] = $u(t) == "Y";
        const o = ["codec-preference", "custom-fps", "zoom-cursor", "touch-mode", "i444", "swap-left-right-mouse", "collapse_toolbar"];
        for (const a of o) e[a] = $u(a);
        return e
    }

    getToggleOption(e) {
        const i = ["show-remote-cursor", "privacy-mode", "enable-file-copy-paste"], o = this._options[e];
        return typeof o == "string" ? o != "" : o != null ? o : !!i.includes(e)
    }

    getStatus() {
        return JSON.stringify({status_num: 10})
    }

    checkConnStatus() {
    }

    saveConfig(e) {
        this._options = e, this._options.tm = new Date().getTime(), so(this._id, e)
    }

    loadConfig() {
        return re(this._id) || {}
    }

    setOption(e, i) {
        i == null ? delete this._options[e] : this._options[e] = i, this._options.tm = new Date().getTime(), Bt(this._id, e, i)
    }

    setFlutterUiOption(e, i) {
        this.setOption(`flutter_ui:${e}`, i)
    }

    getFlutterUiOption(e) {
        return this.getOption(`flutter_ui:${e}`)
    }

    inputKey(e, i, o, a, t, s, l) {
        var c;
        const E = go(e, fn());
        !E || (a && (e == "VK_MENU" || e == "RAlt") && (a = !1), t && (e == "VK_CONTROL" || e == "RControl") && (t = !1), s && (e == "VK_SHIFT" || e == "RShift") && (s = !1), l && (e == "Meta" || e == "RWin") && (l = !1), E.down = i, E.press = o, E.modifiers = this.getMod(a, t, s, l), (c = this._ws) == null || c.sendMessage({key_event: E}))
    }

    ctrlAltDel() {
        var i, o;
        const e = w.fromPartial({down: !0});
        ((i = this._peerInfo) == null ? void 0 : i.platform) == "Windows" ? e.control_key = N.CtrlAltDel : (e.control_key = N.Delete, e.modifiers = this.getMod(!0, !0, !1, !1)), (o = this._ws) == null || o.sendMessage({key_event: e})
    }

    restart() {
        var i;
        this._restartingRemoteDevice = !0;
        const e = h.fromPartial({});
        e.restart_remote_device = !0, (i = this._ws) == null || i.sendMessage({misc: e})
    }

    inputString(e) {
        var o;
        const i = w.fromPartial({seq: e});
        (o = this._ws) == null || o.sendMessage({key_event: i})
    }

    send2fa(e) {
        var i;
        try {
            const o = JSON.parse(e), a = o.code, t = o.trust_this_device;
            t && this.setOption(f4, "Y");
            const s = this._getHwid(t), l = _u.fromPartial({code: a, hwid: s});
            (i = this._ws) == null || i.sendMessage({auth_2fa: l})
        } catch {
            console.log('Failed to switch display, invalid param "' + e + '"')
        }
    }

    _captureDisplays({add: e, sub: i, set: o}) {
        var s;
        const a = Mu.fromPartial({add: e, sub: i, set: o}), t = h.fromPartial({capture_displays: a});
        (s = this._ws) == null || s.sendMessage({misc: t})
    }

    switchDisplay(e) {
        var i;
        try {
            const o = JSON.parse(e), a = o.value, t = o.isDesktop;
            if (a.length == 1) {
                let s = this.getCustomResolution(a[0]);
                const l = Ou.fromPartial({display: a[0], width: s ? s[0] : void 0, height: s ? s[1] : void 0}),
                    E = h.fromPartial({switch_display: l});
                (i = this._ws) == null || i.sendMessage({misc: E}), t || this._captureDisplays({set: a})
            } else this._captureDisplays({set: a})
        } catch {
            console.log('Failed to switch display, invalid param "' + e + '"')
        }
    }

    elevateDirect() {
        var o;
        const e = Du.fromPartial({direct: !0}), i = h.fromPartial({elevation_request: e});
        (o = this._ws) == null || o.sendMessage({misc: i}), this._elevationRequested = !0
    }

    elevateWithLogon(e) {
        var i;
        try {
            const o = JSON.parse(e), a = Vu.fromPartial({username: o.username, password: o.password}),
                t = Du.fromPartial({logon: a}), s = h.fromPartial({elevation_request: t});
            (i = this._ws) == null || i.sendMessage({misc: s}), this._elevationRequested = !0
        } catch {
            console.log('Failed to elevate with logon, invalid param "' + e + '"')
        }
    }

    async inputOsPassword(e) {
        var a, t;
        this.inputMouse(), await ue(50), this.inputMouse(0, 3, 3), await ue(50), this.inputMouse(1 | 1 << 3), this.inputMouse(2 | 1 << 3), await ue(1200);
        const i = w.fromPartial({press: !0, seq: e});
        (a = this._ws) == null || a.sendMessage({key_event: i});
        const o = w.fromPartial({press: !0, control_key: N.Return});
        (t = this._ws) == null || t.sendMessage({key_event: o})
    }

    lockScreen() {
        var i;
        const e = w.fromPartial({down: !0, control_key: N.LockScreen});
        (i = this._ws) == null || i.sendMessage({key_event: e})
    }

    isSwapControlCommand() {
        return this.getToggleOption("allow_swap_key")
    }

    getMod(e, i, o, a) {
        const t = [];
        return e && t.push(N.Alt), i && (this.isSwapControlCommand() ? t.push(N.Meta) : t.push(N.Control)), o && t.push(N.Shift), a && (this.isSwapControlCommand() ? t.push(N.Control) : t.push(N.Meta)), t
    }

    inputMouse(e = 0, i = 0, o = 0, a = !1, t = !1, s = !1, l = !1) {
        var c;
        const E = ku.fromPartial({mask: e, x: i, y: o, modifiers: this.getMod(a, t, s, l)});
        (c = this._ws) == null || c.sendMessage({mouse_event: E})
    }

    toggleOption(e) {
        var s;
        const i = !this._options[e], o = S.fromPartial({}), a = i ? x.Yes : x.No;
        switch (e) {
            case"show-remote-cursor":
                o.show_remote_cursor = a;
                break;
            case"follow-remote-cursor":
                o.follow_remote_cursor = a;
                break;
            case"follow-remote-window":
                o.follow_remote_window = a;
                break;
            case"disable-audio":
                o.disable_audio = a;
                break;
            case"disable-clipboard":
                o.disable_clipboard = a;
                break;
            case"lock-after-session-end":
                o.lock_after_session_end = a;
                break;
            case"privacy-mode":
                o.privacy_mode = a;
                break;
            case"enable-file-copy-paste":
                o.enable_file_transfer = a;
                break;
            case"block-input":
                o.block_input = x.Yes;
                break;
            case"unblock-input":
                o.block_input = x.No;
                break;
            case"show-quality-monitor":
            case"allow_swap_key":
                break;
            case"view-only":
                i ? (o.disable_keyboard = x.Yes, o.disable_clipboard = x.Yes, o.show_remote_cursor = x.Yes, o.enable_file_transfer = x.No, o.lock_after_session_end = x.No) : (o.disable_keyboard = x.No, o.disable_clipboard = this.getToggleOption("disable-clipboard") ? x.Yes : x.No, o.show_remote_cursor = this.getToggleOption("show-remote-cursor") ? x.Yes : x.No, o.enable_file_transfer = this.getToggleOption("enable-file-copy-paste") ? x.Yes : x.No, o.lock_after_session_end = this.getToggleOption("lock-after-session-end") ? x.Yes : x.No);
                break;
            default:
                this.setOption(e, this._options[e] ? void 0 : "Y");
                return
        }
        e.indexOf("block-input") < 0 && this.setOption(e, i);
        const t = h.fromPartial({option: o});
        (s = this._ws) == null || s.sendMessage({misc: t})
    }

    toggleVirtualDisplay(e) {
        try {
            const i = JSON.parse(e);
            this._sendToggleVirtualDisplayMsg(i.index, i.on), this.updateVirtualDisplay(i.index, i.on)
        } catch {
            console.log('Failed to toggle virtual display, invalid param "' + e + '"')
        }
    }

    togglePrivacyMode(e) {
        try {
            const i = JSON.parse(e);
            this._sendTogglePrivacyModeMsg(i.impl_key, i.on)
        } catch {
            console.log('Failed to toggle privacy mode, invalid param "' + e + '"')
        }
    }

    _sendToggleVirtualDisplayMsg(e, i) {
        var t;
        const o = Lu.fromPartial({display: e, on: i}), a = h.fromPartial({toggle_virtual_display: o});
        (t = this._ws) == null || t.sendMessage({misc: a})
    }

    _sendTogglePrivacyModeMsg(e, i) {
        var t;
        const o = Uu.fromPartial({impl_key: e, on: i}), a = h.fromPartial({toggle_privacy_mode: o});
        (t = this._ws) == null || t.sendMessage({misc: a})
    }

    updateVirtualDisplay(e, i) {
        const o = "virtual-display", a = this.getOption(o);
        if (i) {
            const t = a.split(","), s = t.length;
            e == 0 ? t.splice(0, t.length) : t.indexOf(e.toString()) < 0 && t.push(e.toString()), t.length != s && this.setOption(o, t.join(","))
        } else if (e == -1) a != "" && this.setOption(o, ""); else {
            const t = a.split(","), s = t.length;
            if (e == 0) t.pop(); else {
                const l = t.indexOf(e.toString());
                l >= 0 && t.splice(l, 1)
            }
            t.length != s && this.setOption(o, t.join(","))
        }
    }

    getImageQuality() {
        return this.getOption("image_quality")
    }

    getImageQualityEnum(e, i) {
        switch (e) {
            case"low":
                return x4.Low;
            case"best":
                return x4.Best;
            case"balanced":
                return i ? void 0 : x4.Balanced;
            default:
                return
        }
    }

    setImageQuality(e) {
        var t;
        this.setOption("image_quality", e);
        const i = this.getImageQualityEnum(e, !1);
        if (i == null) return;
        const o = S.fromPartial({image_quality: i}), a = h.fromPartial({option: o});
        (t = this._ws) == null || t.sendMessage({misc: a}), this._lastSendFps != 30 && this.setCustomFps(30, !1)
    }

    setCustomImageQuality(e) {
        var t;
        const i = e << 8, o = S.fromPartial({custom_image_quality: i}), a = h.fromPartial({option: o});
        (t = this._ws) == null || t.sendMessage({misc: a}), this.setOption("custom_image_quality", e.toString()), this.setOption("image_quality", "custom")
    }

    setCustomFps(e, i) {
        var s;
        const o = e, a = S.fromPartial({custom_fps: o}), t = h.fromPartial({option: a});
        (s = this._ws) == null || s.sendMessage({misc: t}), this._lastSendFps = o, i && this.setOption("custom-fps", e.toString())
    }

    sendNote(e, i) {
        let o = i;
        fetch(e, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: this._id, session_id: this._sessionId, note: o})
        }).then(a => {
            if (!a.ok) throw new Error(a.statusText);
            return a.text()
        }).then(a => {
            console.log("Send note response:", a)
        }).catch(a => {
            console.error("Failed to send note:", a)
        })
    }

    getPlatform() {
        var e;
        return ((e = this._peerInfo) == null ? void 0 : e.platform) || ""
    }

    async handleFileResponse(e) {
        var i, o;
        if (e.dir) {
            let a = e.dir, t = a.entries;
            if (!b4() && this.getPeerPlatform() == "Windows") for (let s = 0; s < t.length; s++) t[s].name = t[s].name.replace(/\\/g, "/");
            Qi(a.id, t, a.path, !1, !1), this._writeJobs.forEach(s => {
                s.id == a.id && (s.files = t)
            }), this._removeJobs[a.id] && (this._removeJobs[a.id].files = t)
        } else if (e.block) {
            const a = e.block, t = this._writeJobs.find(s => s.id == a.id);
            if (t) try {
                await t.write(a, () => {
                    console.log(`cancel job ${t.id} due to write failed`), this.cancelJob(t.id)
                })
            } catch (s) {
                console.log("write file failed", s)
            }
            this.update_jobs_status()
        } else if (e.digest) {
            const a = e.digest;
            if (a.is_upload) {
                const t = this._readJobs.find(s => s.id == a.id);
                if (t) {
                    const s = t.read_digest(a);
                    s && ((i = this._ws) == null || i.sendMessage(s))
                }
            } else {
                const t = this._writeJobs.find(s => s.id == a.id);
                if (t) {
                    const s = t.write_digest(a);
                    s && ((o = this._ws) == null || o.sendMessage(s))
                }
            }
        } else if (e.done) {
            const a = e.done, t = this._writeJobs.find(l => l.id == a.id);
            let s;
            t && (t.write_done(a), s = t.job_error(), this._writeJobs = this._writeJobs.filter(l => l.id != a.id)), this.handle_job_status(a.id, a.file_num, s)
        } else if (e.error) {
            const a = e.error;
            this._writeJobs = this._writeJobs.filter(t => t.id != a.id), this.handle_job_status(a.id, a.file_num, a.error)
        }
    }

    readRemoteDir(e) {
        var i;
        try {
            const o = JSON.parse(e),
                a = T.fromPartial({read_dir: hu.fromPartial({path: o.path, include_hidden: o.include_hidden})});
            (i = this._ws) == null || i.sendMessage({file_action: a})
        } catch (o) {
            console.error("Failed to read remote dir:", o)
        }
    }

    async sendFiles(e) {
        var i, o;
        try {
            const a = JSON.parse(e), {
                id: t,
                path: s,
                to: l,
                file_num: E,
                include_hidden: c,
                is_remote: C,
                is_dir: D
            } = a, B = Q((i = this._peerInfo) == null ? void 0 : i.version) >= Q("1.1.10");
            if (C) {
                this._writeJobs.push(lu.newWrite(t, s, l, E, c, C, [], B, D));
                const m = an(t, s, E, c);
                (o = this._ws) == null || o.sendMessage({file_action: m})
            }
        } catch (a) {
            console.error("Failed to send files:", a)
        }
    }

    async sendLocalFiles(e) {
        var i;
        try {
            const o = JSON.parse(e), {
                handle_index: a,
                id: t,
                path: s,
                to: l,
                file_num: E,
                include_hidden: c,
                is_remote: C
            } = o, D = Q((i = this._peerInfo) == null ? void 0 : i.version) >= Q("1.1.10");
            if (!C) try {
                let B = this._fileHandles[a];
                if (!B) throw new Error("Failed to get file handle");
                let m = [], f = [];
                if (B instanceof FileSystemFileHandle) {
                    let y = await B.getFile();
                    m = [W.fromPartial({
                        size: y.size,
                        entry_type: 4,
                        modified_time: Math.floor(y.lastModified / 1e3)
                    })], f = [B]
                } else {
                    let y = await zt(B, "");
                    m = y.map(nu => nu.entry), f = y.map(nu => nu.handle)
                }
                let R = lu.newRead(t, s, l, E, c, C, m, D, f);
                Qi(t, m, s, !C, !0), this._readJobs.push(R), this._ftTimer || (this._ftTimer = setTimeout(this.readJobTimerCallback.bind(this), Yi));
                let I = [...m];
                if (b4() && this.getPeerPlatform() != "Windows") for (let y = 0; y < I.length; y++) I[y].name = I[y].name.replace(/\\/g, "/");
                this.sendMessage({file_action: En(t, l, E, I, R.total_size)})
            } catch (B) {
                console.error("Failed to send files:", B), this.handle_job_status(t, -1, (B != null ? B : "Failed to send files").toString())
            }
        } catch (o) {
            console.error("Failed to send files:", o)
        }
    }

    async readJobTimerCallback() {
        let e = await An(this._readJobs, this.sendMessage.bind(this));
        this._readJobs = this._readJobs.filter(i => !e.includes(i.id)), this.update_jobs_status(), this._readJobs.length == 0 ? (clearTimeout(this._ftTimer), this._ftTimer = void 0) : this._ftTimer = setTimeout(this.readJobTimerCallback.bind(this), Yi)
    }

    update_jobs_status() {
        const e = new Date().getTime() - this._last_update_jobs_ms;
        e >= 1e3 && (this._readJobs.forEach(i => {
            i.update_job_status(e)
        }), this._writeJobs.forEach(i => {
            i.update_job_status(e)
        }), this._last_update_jobs_ms = new Date().getTime())
    }

    handle_job_status(e, i, o) {
        var a;
        if (this._removeJobs[e] && this._removeJobs[e].no_confirm) {
            const t = this._removeJobs[e].files;
            if (i + 1 < t.length) {
                const s = this._removeJobs[e].path + this._removeJobs[e].sep + t[i + 1].name;
                if ((a = this._ws) == null || a.sendMessage({file_action: Gi(e, s, i + 1, this._removeJobs[e].is_remote)}), new Date().getTime() - this._removeJobs[e].last_update_job_status >= 1e3) this._removeJobs[e].last_update_job_status = new Date().getTime(); else return
            } else delete this._removeJobs[e], console.log("remove jobs:", this._removeJobs)
        }
        o ? le(e, o, i) : Dn(e, i)
    }

    cancelJob(e) {
        var o;
        (o = this._ws) == null || o.sendMessage({file_action: rn(e)});
        let i = this._writeJobs.find(a => a.id == e);
        i && i.remove_download_file(), this._writeJobs = this._writeJobs.filter(a => a.id != e), this._readJobs = this._readJobs.filter(a => a.id != e), delete this._removeJobs[e]
    }

    removeAllEmptyDirs(e) {
        var i;
        try {
            const o = JSON.parse(e);
            (i = this._ws) == null || i.sendMessage({file_action: sn(o.id, o.path)})
        } catch (o) {
            console.error("Failed to remove all empty dirs:", o)
        }
    }

    removeFile(e) {
        var i;
        try {
            const o = JSON.parse(e), {id: a, path: t, file_num: s, is_remote: l} = o;
            l && ((i = this._ws) == null || i.sendMessage({file_action: Gi(a, t, s, l)}))
        } catch (o) {
            console.error("Failed to remove files:", o)
        }
    }

    readDirToRemoveRecursive(e) {
        var i;
        try {
            const o = JSON.parse(e), {id: a, path: t, is_remote: s, show_hidden: l} = o;
            if (s) {
                (i = this._ws) == null || i.sendMessage({file_action: on(a, t, l)});
                const E = (c, C) => (c ? C === "Windows" : b4()) ? "\\" : "/";
                this._removeJobs[a] = {
                    path: t,
                    files: [],
                    no_confirm: !1,
                    is_remote: s,
                    sep: E(s, this.getPeerPlatform()),
                    last_update_job_status: new Date().getTime()
                }
            }
        } catch (o) {
            console.error("Failed to read dir to remove recursive:", o)
        }
    }

    createDir(e) {
        var i;
        try {
            const o = JSON.parse(e), {id: a, path: t, is_remote: s} = o;
            s && ((i = this._ws) == null || i.sendMessage({file_action: nn(a, t)}))
        } catch (o) {
            console.error("Failed to create dir:", o)
        }
    }

    renameFile(e) {
        var i;
        try {
            const o = JSON.parse(e), {id: a, path: t, new_name: s, is_remote: l} = o;
            l && ((i = this._ws) == null || i.sendMessage({file_action: ln(a, t, s)}))
        } catch (o) {
            console.error("Failed to rename file:", o)
        }
    }

    async seletFiles(e) {
        await Bn(e, (i, o) => {
            this._fileHandles[i] = o
        })
    }

    async handleFileAction(e) {
        if (e.send_confirm) {
            const i = e.send_confirm, o = this._readJobs.find(a => a.id == i.id);
            o && o.confirm(i)
        }
    }

    async confirmOverrideFile(e) {
        try {
            const i = JSON.parse(e), {id: o, file_num: a, need_override: t, remember: s, is_upload: l} = i;
            if (l) {
                const E = this._readJobs.find(c => c.id == o);
                E && (s && (E.default_overwrite_strategy = t), E.confirm(cu.fromPartial({
                    id: o,
                    file_num: a,
                    offset_blk: t ? 0 : void 0,
                    skip: t ? void 0 : !0
                })))
            }
        } catch (i) {
            console.error("Failed to confirm override file:", i)
        }
    }

    sendChat(e) {
        const i = vu.fromPartial({text: e}), o = h.fromPartial({chat_message: i});
        this.sendMessage({misc: o})
    }

    changeResolution(e) {
        var i;
        try {
            const o = JSON.parse(e), a = v.fromPartial({width: o.width, height: o.height});
            let t;
            this._peerInfo && Q(this._peerInfo.version) >= Q("1.2.4") ? t = h.fromPartial({
                change_display_resolution: Nu.fromPartial({
                    display: o.display,
                    resolution: a
                })
            }) : t = h.fromPartial({change_resolution: a}), (i = this._ws) == null || i.sendMessage({misc: t}), this._lastChangeDisplay = {
                display: o.display,
                width: o.width,
                height: o.height,
                time: new Date().getTime()
            }
        } catch (o) {
            console.error("Failed to change resolution:", o)
        }
    }

    setCustomResolution(e) {
        var a, t;
        const i = (s, l) => {
            const E = s.toString(), c = this.loadConfig();
            c.custom_resolutions || (c.custom_resolutions = {}), l ? c.custom_resolutions[E] = {
                w: l[0],
                h: l[1]
            } : delete c.custom_resolutions[E], this.saveConfig(c)
        }, o = () => {
            var s, l, E;
            return ((s = this._lastChangeDisplay) == null ? void 0 : s.display) == e.display && ((l = this._lastChangeDisplay) == null ? void 0 : l.width) == e.width && ((E = this._lastChangeDisplay) == null ? void 0 : E.height) == e.height && new Date().getTime() - this._lastChangeDisplay.time < 15e3
        };
        if (e.width == ((a = e.original_resolution) == null ? void 0 : a.width) && e.height == ((t = e.original_resolution) == null ? void 0 : t.height)) i(e.display, void 0); else {
            const s = this._lastChangeDisplay;
            if ((s == null ? void 0 : s.display) == e.display) {
                const l = o() ? [e.width, e.height] : void 0;
                i(e.display, l)
            }
        }
    }

    getCustomResolution(e) {
        const o = this.loadConfig().custom_resolutions;
        if (o) {
            const a = o[e.toString()];
            if (a && a.w && a.h) return [a.w, a.h]
        }
    }

    tryChangeInitResolution(e) {
        const i = this.getCustomResolution(e);
        i && this.changeResolution(JSON.stringify({display: e, width: i[0], height: i[1]}))
    }

    setMultipleWindowsSession(e) {
        let i = [];
        e.forEach(o => {
            let a = {};
            a.sid = o.sid.toString(), a.name = o.name, i.push(a)
        }), F("set_multiple_windows_session", {windows_sessions: JSON.stringify(i)})
    }

    sendSelectedSessionId(e) {
        var o, a;
        const i = parseInt(e);
        if (isNaN(i)) console.error("selected invalid sid: ", e); else {
            this._selectedWindowsSessionId = i;
            const t = h.fromPartial({selected_sid: i});
            (o = this._ws) == null || o.sendMessage({misc: t});
            const s = this._peerInfo;
            s && ((a = s.windows_sessions) == null ? void 0 : a.current_sid) == i && (this._isFileTransfer ? s.username || this.msgbox("error", "Error", "No active console user logged on, please connect and logon first.") : this.msgbox("success", "Successful", "Connected, waiting for image..."))
        }
    }
}

function S4(u = !1) {
    const e = A.getItem("custom-rendezvous-server");
    return z4(e || Rt, u)
}

function z4(u, e = !1, i = 0) {
    const p = vn() ? "wss://" : "ws://"
    const domain = uriDomain(u)
    const uriport = uriPort(u)
    if (vn() && (!uriport)) {
        return p + domain + "/ws/" + (e ? "relay" : "id");
    }

    if (uriport) {
        const a = parseInt(uriport);
        u = domain + ":" + (a + (e ? i || 3 : 2))
    } else u += ":" + (Pt + (e ? 3 : 2));
    return p + u
}

function vn() {
    return window.location.protocol === "https:"
}

function uriDomain(u) {
    return u.indexOf(":") > 0 ? u.split(":")[0] : u
}

function uriPort(u) {
    return u.indexOf(":") > 0 ? u.split(":")[1] : ''
}

const $i = (u, e, i) => e && u.type == "SharedAb" ? Z(Gu([u.value, i.salt])) === Z(e) : !1,
    ut = (u, e) => e && u.type == "PersonalAb" ? Z(u.value) === Z(e) : !1;

function gn() {
    return S4()
}

function et(u, e) {
    he("callback_query_onlines", {onlines: u.join(","), offlines: e.join(",")})
}

async function hn(u) {
    let e = [];
    try {
        e = JSON.parse(u)
    } catch (a) {
        console.error("Failed to query onlines, ", a);
        return
    }
    if (e.length === 0) return;
    const i = gn(), o = new I4(i, !0, "query onlines");
    try {
        await o.open();
        const a = Hu.fromPartial({id: T4(), peers: e});
        o.sendRendezvous({online_request: a})
    } catch (a) {
        console.error("Failed to query onlines, ", a), et([], e), o.close();
        return
    }
    for (let a = 0; a < 2; a++) {
        const t = await yo(o, 3e3);
        if (!t || (t == null ? void 0 : t.key_exchange) || (t == null ? void 0 : t.online_response) === void 0) continue;
        const s = t.online_response.states;
        let l = [], E = [];
        for (let c = 0; c < e.length; c++) {
            const C = 1 << 7 - c % 8;
            (s[Math.floor(c / 8)] & C) === C ? l.push(e[c]) : E.push(e[c])
        }
        et(l, E), o.close();
        return
    }
    o.close(), console.error("Failed to query online states, no online response")
}

window.curConn = void 0;
window.isMobile = () => /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));
const ge = ft(), Xu = ge === Z4, V4 = ge === Q4, Zu = ge === Ce;

function fn() {
    return !isMobile()
}

function Tt(u, e, i, o) {
    if (!(!u || u == "error" && !i)) {
        i.toLowerCase();
        var a = ao(u, e, i) ? "true" : "";
        onGlobalEvent(JSON.stringify({
            name: "msgbox",
            type: u,
            title: e,
            text: i,
            link: o != null ? o : "",
            hasRetry: a
        }))
    }
}

function xn(u, e, i) {
    onGlobalEvent(JSON.stringify({name: "toast", type: u, text: e, dur_msec: i}))
}

function jt(u) {
    var e = {};
    for (const [i, o] of Object.entries(u)) !i || (o instanceof String || typeof o == "string" ? e[i] = o : o instanceof Uint8Array ? e[i] = "[" + o.toString() + "]" : e[i] = JSON.stringify(o));
    return e
}

function F(u, e) {
    e = jt(e), e.name = u, onGlobalEvent(JSON.stringify(e))
}

function Ee() {
    var e;
    ((e = De("input-source")) != null ? e : Li) === Li ? Lo() : se()
}

function he(u, e) {
    e = jt(e), e.name = u, onRegisteredEvent(JSON.stringify(e))
}

function de(u, e) {
    onRgba(u, e)
}

function fe(u) {
    window.curConn = u
}

function u0() {
    return window.curConn
}

async function Nt() {
    await curConn.start()
}

function xe() {
    var u;
    (u = u0()) == null || u.close(), fe(void 0)
}

function Ot() {
    var e;
    (e = window.curConn) == null || e.close();
    const u = new It;
    return fe(u), u
}

let q;

async function Mt() {
    try {
        q || (await P4.ready, q = P4)
    } catch (u) {
        console.error("Failed to init sodium: " + u.message)
    }
}

function Lt() {
    return q
}

async function it(u, e) {
    return await Mt(), typeof e == "string" && (e = Ut(e)), q.crypto_sign_open(u, e)
}

function Ut(u) {
    return q.from_base64(u, q.base64_variants.ORIGINAL)
}

function yn(u) {
    return q.to_base64(u, q.base64_variants.ORIGINAL)
}

function bn() {
    const u = q.crypto_box_keypair(), e = u.privateKey, i = u.publicKey;
    return [e, i]
}

function wn() {
    return q.crypto_secretbox_keygen()
}

function Sn(u, e, i) {
    const o = Uint8Array.from(Array(24).fill(0));
    return q.crypto_box_easy(u, o, e, i)
}

function X4(u) {
    for (var e = Array(24).fill(0), i = 0; i < e.length && u > 0; i++) {
        var o = u & 255;
        e[i] = o, u = (u - o) / 256
    }
    return Uint8Array.from(e)
}

function tt(u, e, i) {
    return q.crypto_secretbox_easy(u, X4(e), i)
}

function zn(u, e, i) {
    return q.crypto_secretbox_open_easy(u, X4(e), i)
}

window.setByName = (u, e) => {
    switch (u) {
        case"connect":
            Ot(), Nt();
            break;
        case"login":
            e = JSON.parse(e), curConn.handle_login_from_ui(e.os_username, e.os_password, e.password, e.remember);
            break;
        case"close":
            xe();
            break;
        case"refresh":
            curConn.refresh();
            break;
        case"reconnect":
            curConn == null || curConn.reconnect();
            break;
        case"toggle_virtual_display":
            curConn.toggleVirtualDisplay(e);
            break;
        case"toggle_privacy_mode":
            curConn.togglePrivacyMode(e);
            break;
        case"image_quality":
            curConn.setImageQuality(e);
            break;
        case"custom_image_quality":
            curConn.setCustomImageQuality(e);
            break;
        case"custom-fps":
            curConn.setCustomFps(e, !0);
            break;
        case"lock_screen":
            curConn.lockScreen();
            break;
        case"ctrl_alt_del":
            curConn.ctrlAltDel();
            break;
        case"switch_display":
            curConn.switchDisplay(e);
            break;
        case"remove_peer":
            ro(e);
            break;
        case"input_key":
            e = JSON.parse(e), curConn.inputKey(e.name, e.down == "true", e.press == "true", e.alt == "true", e.ctrl == "true", e.shift == "true", e.command == "true");
            break;
        case"input_string":
            curConn.inputString(e);
            break;
        case"flutter_key_event":
            e = JSON.parse(e), Uo(curConn, e.usb_hid, e.down == "true", e.lock_modes);
            break;
        case"send_mouse":
            Pn(e);
            break;
        case"send_2fa":
            curConn == null || curConn.send2fa(e);
            break;
        case"option":
            e = JSON.parse(e), A.setItem(e.name, e.value);
            break;
        case"options":
            e = JSON.parse(e);
            for (const [o, a] of Object.entries(a)) A.setItem(o, a);
            break;
        case"option:local": {
            let o = JSON.parse(e);
            if (o.name == 'access_token' && o.value) {
                getServerConf(o.value)
            }
            At(o.name, o.value), o.name === "input-source" && Ee(), o.name == "lang" && Fo()
        }
            break;
        case"option:flutter:local":
            e = JSON.parse(e), co(e.name, e.value);
            break;
        case"option:flutter:peer":
            e = JSON.parse(e), curConn.setFlutterUiOption(e.name, e.value);
            break;
        case"option:user:default":
            Ln(e);
            break;
        case"option:session":
            e = JSON.parse(e), curConn.setOption(e.name, e.value);
            break;
        case"option:peer":
            try {
                e = JSON.parse(e), Bt(e.id, e.name, e.value)
            } catch (o) {
                console.error('Failed to set peer option: "' + e + '", ' + o.message)
            }
            break;
        case"option:toggle":
            return curConn.toggleOption(e);
        case"input_os_password":
            curConn.inputOsPassword(e);
            break;
        case"session_add_sync":
            return Vn(e);
        case"session_start":
            qn();
            break;
        case"session_close":
            Kn();
            break;
        case"elevate_direct":
            curConn.elevateDirect();
            break;
        case"elevate_with_logon":
            curConn.elevateWithLogon(e);
            break;
        case"peer_exists":
            return !!Cu()[e];
        case"restart":
            curConn.restart();
            break;
        case"fav":
            return A.setItem("fav", e);
        case"query_onlines":
            hn(e);
            break;
        case"change_prefer_codec":
            curConn.changePreferCodec(e);
            break;
        case"cursor":
            On(e);
            break;
        case"enter_or_leave":
            curConn == null || curConn.enterOrLeave(e);
            break;
        case"fullscreen":
            e == "Y" ? Jn() : Gn();
            break;
        case"send_note":
            const i = qt("conn");
            i && (curConn == null || curConn.sendNote(i, e));
            break;
        case"read_remote_dir":
            curConn == null || curConn.readRemoteDir(e);
            break;
        case"send_files":
            curConn == null || curConn.sendFiles(e);
            break;
        case"send_local_files":
            curConn == null || curConn.sendLocalFiles(e);
            break;
        case"cancel_job":
            curConn == null || curConn.cancelJob(e);
            break;
        case"remove_all_empty_dirs":
            curConn == null || curConn.removeAllEmptyDirs(e);
            break;
        case"remove_file":
            curConn == null || curConn.removeFile(e);
            break;
        case"create_dir":
            curConn == null || curConn.createDir(e);
            break;
        case"rename_file":
            curConn == null || curConn.renameFile(e);
            break;
        case"read_dir_to_remove_recursive":
            curConn == null || curConn.readDirToRemoveRecursive(e);
            break;
        case"select_files":
            curConn == null || curConn.seletFiles(e);
            break;
        case"confirm_override_file":
            curConn == null || curConn.confirmOverrideFile(e);
            break;
        case"send_chat":
            curConn == null || curConn.sendChat(e);
            break;
        case"load_ab":
            Xn();
            break;
        case"save_ab":
            Co(e);
            break;
        case"clear_ab":
            po();
            break;
        case"load_group":
            Yn();
            break;
        case"save_group":
            Do(e);
            break;
        case"clear_group":
            Ao();
            break;
        case"change_resolution":
            curConn == null || curConn.changeResolution(e);
            break;
        case"selected_sid":
            curConn == null || curConn.sendSelectedSessionId(e);
            break
    }
};

function Pn(u) {
    if (!curConn) return;
    let e = 0;
    switch (u = JSON.parse(u), u.type) {
        case"down":
            e = Qa;
            break;
        case"up":
            e = Xa;
            break;
        case"wheel":
            e = Wi;
            break;
        case"trackpad":
            e = Vi;
            break
    }
    switch (u.buttons) {
        case"left":
            e |= g4 << 3;
            break;
        case"right":
            e |= h4 << 3;
            break;
        case"wheel":
            e |= Ya << 3;
            break;
        case"back":
            e |= $a << 3;
            break;
        case"forward":
            e |= uo << 3;
            break
    }
    let i = parseInt(u.x || "0"), o = parseInt(u.y || "0");
    (e == Wi || e == Vi) && curConn.getOption("reverse_mouse_wheel") == "Y" && (i = -i, o = -o);
    const a = (e & g4 << 3) > 0 ? 1 : 0, t = (e & h4 << 3) > 0 ? 1 : 0;
    a ^ t && curConn.getToggleOption("swap-left-right-mouse") && (a ? e = e & ~(g4 << 3) | h4 << 3 : e = e & ~(h4 << 3) | g4 << 3), curConn.inputMouse(e, i, o, u.alt == "true", u.ctrl == "true", u.shift == "true", u.command == "true")
}

window.getByName = (u, e) => {
    let i = Rn(u, e);
    return typeof i == "string" || i instanceof String ? i : i == null || i == null ? "" : JSON.stringify(i)
};

function Rn(u, e) {
    var o, a, t, s;
    switch (u) {
        case"remember":
            return curConn.getRemember();
        case"option":
            return A.getItem(e);
        case"options":
            const l = ["custom-rendezvous-server", "relay-server", "api-server", "key"], E = {};
            return l.forEach(C => {
                const D = A.getItem(C);
                D && (E[C] = D)
            }), JSON.stringify(E);
        case"option:local":
            const res = De(e) || ""
            if (e == 'access_token' && res) {
                getServerConf(res)
            }
            return res;
        case"option:flutter:local":
            return Eo(e) || "";
        case"option:flutter:peer":
            return curConn.getFlutterUiOption(e) || "";
        case"image_quality":
            return curConn.getImageQuality();
        case"translate":
            return e = JSON.parse(e), _o(e.locale, e.text);
        case"option:user:default":
            return $u(e);
        case"option:session":
            return curConn ? curConn.getOption(e) : $u(e);
        case"option:peer":
            try {
                const C = JSON.parse(e);
                return (o = lo(C.id, C.name)) != null ? o : $u(C.name)
            } catch (C) {
                return console.error('Failed to get peer option: "' + e + '", ' + C.message), ""
            }
        case"option:toggle":
            return curConn == null ? void 0 : curConn.getToggleOption(e);
        case"get_conn_status":
            return curConn ? curConn.getStatus() : JSON.stringify({status_num: 0});
        case"test_if_valid_server":
            break;
        case"version":
            return ne;
        case"load_recent_peers":
            Un();
            break;
        case"load_fav_peers":
            Wn();
            break;
        case"fav":
            return (a = A.getItem("fav")) != null ? a : "[]";
        case"load_recent_peers_sync":
            return JSON.stringify({peers: JSON.stringify(be())});
        case"api_server":
            return Vt();
        case"is_using_public_server":
            return !A.getItem("custom-rendezvous-server");
        case"get_version_number":
            return Q(e);
        case"audit_server":
            return qt(e);
        case"alternative_codecs":
            return curConn.getAlternativeCodecs();
        case"screen_info":
            return JSON.stringify({
                frame: {
                    l: window.screenX,
                    t: window.screenY,
                    r: window.screenX + window.innerWidth,
                    b: window.screenY + window.innerHeight
                },
                visibleFrame: {
                    l: window.screen.availLeft,
                    t: window.screen.availTop,
                    r: window.screen.availLeft + window.screen.availWidth,
                    b: window.screen.availTop + window.screen.availHeight
                },
                scaleFactor: window.devicePixelRatio
            });
        case"main_display":
            return JSON.stringify({
                w: window.screen.availWidth,
                h: window.screen.availHeight,
                scaleFactor: window.devicePixelRatio
            });
        case"langs":
            var i = Object.entries(to).map(([C, D]) => [C, `${D} (${C})`]);
            return i.sort((C, D) => C[0].localeCompare(D[0])), JSON.stringify(i);
        case"build_date":
            return no;
        case"my_id":
            return T4();
        case"my_name":
            return gt();
        case"uuid":
            return ht();
        case"local_os":
            return ft();
        case"peer_has_password":
            return ((t = (Cu()[e] || {}).password) != null ? t : "") !== "";
        case"fullscreen":
            return Zn() ? "Y" : "N";
        case"platform":
            return curConn.getPlatform();
        case"enable_trusted_devices":
            return (s = curConn == null ? void 0 : curConn.enableTrustedDevices()) != null && s ? "Y" : "N"
    }
    return ""
}

let ye = new Worker("./libopus.js?v=02816afa"), Wt;

function In(u, e) {
    Wt = jn(u, e), ye.postMessage({channels: u, sampleRate: e})
}

function Tn(u) {
    ye.postMessage(u, [u.buffer])
}

window.init = async () => {
    try {
        ye.onmessage = u => {
            Wt.feed(u.data)
        }, await Mt(), await ho(), await fa(), await O.init(), console.log("init done"), onInitFinished()
    } catch (u) {
        console.error("Failed to init: " + u.message), onInitFinished()
    }
};
window.onunload = () => {
    console.log("window close"), ya()
};

function jn(u, e) {
    return new ua({channels: u, sampleRate: e, flushingTime: 2e3})
}

function Nn(u) {
    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", u);
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var e = document.createElement("textarea");
        e.textContent = u, e.style.position = "fixed", document.body.appendChild(e), e.select();
        try {
            return document.execCommand("copy")
        } catch (i) {
            console.warn("Copy to clipboard failed.", i)
        } finally {
            document.body.removeChild(e)
        }
    }
}

function Q(u) {
    try {
        let e = u.split("-"), i = 0;
        if (e.length > 0) {
            let o = 0;
            for (let a of e[0].split(".")) o = parseInt(a) || 0, i = i * 1e3 + o;
            i -= o, i += o * 10
        }
        return e.length > 1 && (i += parseInt(e[1]) || 0), i
    } catch (e) {
        return console.error('Failed to parse version number: "' + u + '" ' + e.message), 0
    }
}

function On(u) {
    let e = "auto";
    if (u != "auto") try {
        const t = JSON.parse(u);
        if (!t.url) return;
        e = `url(${t.url}) ${t.hotx} ${t.hoty}, auto`
    } catch (t) {
        console.error("Failed to set custom cursor: " + t.message);
        return
    }
    for (var i = document.body, o = 0; o < i.children.length; o++) {
        var a = i.children[o];
        a.tagName == "FLUTTER-VIEW" && (a.style.cursor = e)
    }
}

async function Mn() {
    await P4.ready;
    const u = P4.crypto_sign_keypair();
    return {publicKey: u.publicKey, privateKey: u.privateKey}
}

function Ln(u) {
    try {
        const e = JSON.parse(u), i = JSON.parse(A.getItem("user-default-options")) || {};
        i[e.name] = e.value, A.setItem("user-default-options", JSON.stringify(i))
    } catch (e) {
        console.error("Failed to set user default options: " + e.message)
    }
}

function $u(u) {
    var i, o, a;
    const e = {
        view_style: "original",
        scroll_style: "scrollauto",
        image_quality: "balanced",
        "codec-preference": "auto",
        custom_image_quality: "50",
        "custom-fps": "30"
    };
    try {
        return (o = (i = (JSON.parse(A.getItem("user-default-options")) || {})[u]) != null ? i : e[u]) != null ? o : ""
    } catch (t) {
        return console.error("Failed to get user default options: " + t.message), (a = e[u]) != null ? a : ""
    }
}

function be() {
    const u = [];
    for (const [e, i] of Object.entries(Cu())) {
        if (!e) continue;
        const o = i.tm, a = i.info, t = {
            id: e,
            username: a.username || "",
            hostname: a.hostname || "",
            platform: a.platform || "",
            alias: i.alias || ""
        };
        !o || !t || u.push([o, e, t])
    }
    return u.sort().reverse().map(e => e[2])
}

function Un() {
    const u = be();
    u && he("load_recent_peers", {peers: JSON.stringify(u)})
}

function Wn() {
    var u;
    try {
        const e = (u = A.getItem("fav")) != null ? u : "[]", i = JSON.parse(e), o = be().filter(a => i.includes(a.id));
        o && he("load_fav_peers", {peers: JSON.stringify(o)})
    } catch (e) {
        console.error("Failed to load fav peers: " + e.message)
    }
}

function Vn(u) {
    var e;
    try {
        const i = JSON.parse(u), o = i.id;
        if (o) {
            (e = window.curConn) == null || e.close();
            const a = new It;
            return a.setRemoteId(o), a.setSessionInfo(i), fe(a), At("last_remote_id", o), ""
        } else return "No id found in session data " + u
    } catch (i) {
        return i.message
    }
}

function qn(u) {
    try {
        if (!u0()) return;
        Nt()
    } catch (e) {
        Tt("error", "Error", e.message, "")
    }
}

function Kn(u) {
    xe()
}

function Hn(u, e) {
    function i(o) {
        return /^([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{0,4}$/.test(o)
    }

    if (i(u)) {
        if (u.startsWith("[")) {
            let o = u.split("]:");
            if (o.length === 2) {
                let a = parseInt(o[1]) || 0;
                if (a > 0) return `${o[0]}]:${a + e}`
            }
        }
    } else if (u.includes(":")) {
        let o = u.split(":");
        if (o.length === 2) {
            let a = parseInt(o[1]) || 0;
            if (a > 0) return `${o[0]}:${a + e}`
        }
    }
    return u
}

function Vt() {
    const u = A.getItem("api-server");
    if (u) return u;
    const e = A.getItem("custom-rendezvous-server");
    if (e) {
        let i = Hn(e, -2);
        return i == e ? `http://${i}:${Pt - 2}` : `http://${i}`
    }
    return "https://admin.rustdesk.com"
}

function qt(u) {
    if (!xt()) return "";
    const e = Vt();
    return !e || e.includes("rustdesk.com") ? "" : e + "/api/audit/" + u
}

function Kt(u, e, i) {
    try {
        H4.exports.ZstdCodec.run(a => {
            var t = new a.Simple;
            i(e ? u.map(s => t.compress(s, 3)) : t.compress(u, 3))
        })
    } catch (o) {
        console.error("Compress failed: ", o)
    }
}

function we(u, e, i) {
    try {
        H4.exports.ZstdCodec.run(o => {
            var a = new o.Simple;
            i(e ? u.map(t => a.decompress(t)) : a.decompress(u))
        })
    } catch (o) {
        console.error("Decompress failed: ", o)
    }
}

async function Ht(u, e) {
    return new Promise((i, o) => {
        try {
            H4.exports.ZstdCodec.run(a => {
                var t = new a.Simple;
                i(t.compress(u, 3))
            })
        } catch (a) {
            o(a)
        }
    })
}

async function Jt(u, e) {
    return new Promise((i, o) => {
        try {
            H4.exports.ZstdCodec.run(a => {
                var t = new a.Simple;
                i(t.decompress(u))
            })
        } catch (a) {
            o(a)
        }
    })
}

function Jn() {
    const u = document.documentElement;
    u.requestFullscreen ? u.requestFullscreen() : u.mozRequestFullScreen ? u.mozRequestFullScreen() : u.webkitRequestFullscreen ? u.webkitRequestFullscreen() : u.msRequestFullscreen && u.msRequestFullscreen()
}

function Gn() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
}

function Zn() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
}

var at = !1;

function Qn() {
    at || (console.log("listen fullscreen"), at = !0, document.addEventListener("fullscreenchange", () => onFullscreenChanged(!!document.fullscreenElement)), document.addEventListener("mozfullscreenchange", () => onFullscreenChanged(!!document.mozFullScreen)), document.addEventListener("webkitfullscreenchange", () => onFullscreenChanged(!!document.webkitFullscreenElement)), document.addEventListener("msfullscreenchange", () => onFullscreenChanged(!!document.msFullscreenElement)))
}

Qn();

async function Xn() {
    try {
        let u = await _t();
        onLoadAbFinished(JSON.stringify(u))
    } catch (u) {
        console.error("Failed to load ab: " + u.message), onLoadAbFinished("")
    }
}

async function Yn() {
    try {
        let u = await Bo();
        onLoadGroupFinished(JSON.stringify(u))
    } catch (u) {
        console.error("Failed to load group: " + u.message), onLoadGroupFinished("")
    }
}

const ot = document.querySelector("#app");
if (ot) {
    let e = function (i, o, a) {
        !u0() || (i == "input-password" ? (document.querySelector("div#status").style.display = "none", document.querySelector("div#password").style.display = "block") : i ? i == "error" ? (document.querySelector("div#status").style.display = "block", document.querySelector("div#canvas").style.display = "none", document.querySelector("div#text").innerHTML = '<div style="color: red; font-weight: bold;">' + a + "</div>") : (document.querySelector("div#password").style.display = "none", document.querySelector("div#status").style.display = "block", document.querySelector("div#text").innerHTML = '<div style="font-weight: bold;">' + a + "</div>") : (document.querySelector("div#canvas").style.display = "block", document.querySelector("div#password").style.display = "none", document.querySelector("div#status").style.display = "none"))
    };
    ot.innerHTML = `
  <div id="connect" style="text-align: center"><table style="display: inline-block">
    <tr><td><span>Host: </span></td><td><input id="host" /></td></tr>
    <tr><td><span>Key: </span></td><td><input id="key" /></td></tr>
    <tr><td><span>Id: </span></td><td><input id="id" /></td></tr>
    <tr><td></td><td><button onclick="connect();">Connect</button></td></tr>
  </table></div>
  <div id="password" style="display: none;">
    <input type="password" id="password" />
    <button id="confirm" onclick="confirm()">Confirm</button>
    <button id="cancel" onclick="cancel();">Cancel</button>
  </div>
  <div id="status" style="display: none;">
    <div id="text" style="line-height: 2em"></div>
    <button id="cancel" onclick="cancel();">Cancel</button>
  </div>
  <div id="canvas" style="display: none;">
    <button id="cancel" onclick="cancel();">Cancel</button>
    <canvas id="player"></canvas>
    <canvas id="test-yuv-decoder-canvas"></canvas>
  </div>
`;
    let u;
    window.init(), document.body.onload = () => {
        const i = document.querySelector("#host");
        i.value = A.getItem("custom-rendezvous-server");
        const o = document.querySelector("#id");
        o.value = A.getItem("id");
        const a = document.querySelector("#key");
        a.value = A.getItem("key"), u = YUVCanvas.attach(document.getElementById("player"))
    }, window.connect = () => {
        const i = document.querySelector("#host");
        A.setItem("custom-rendezvous-server", i.value);
        const o = document.querySelector("#id");
        A.setItem("id", o.value);
        const a = document.querySelector("#key");
        A.setItem("key", a.value), (async () => {
            const s = Ot();
            s.setMsgbox(e), s.setDraw(l => {
                de(l), u.drawFrame(l)
            }), document.querySelector("div#status").style.display = "block", document.querySelector("div#connect").style.display = "none", document.querySelector("div#text").innerHTML = "Connecting ...", s.setPeerId(o.value), await s.start()
        })()
    }, window.cancel = () => {
        xe(), document.querySelector("div#connect").style.display = "block", document.querySelector("div#password").style.display = "none", document.querySelector("div#status").style.display = "none", document.querySelector("div#canvas").style.display = "none"
    }, window.confirm = () => {
        const i = document.querySelector("input#password").value;
        i && (document.querySelector("div#password").style.display = "none", u0().login(i))
    }
}
