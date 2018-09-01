/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var wolfram_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,8],$V2=[2,49],$V3=[1,11],$V4=[14,19],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,18],$V9=[1,19],$Va=[1,24],$Vb=[1,25],$Vc=[1,33],$Vd=[1,29],$Ve=[1,30],$Vf=[1,32],$Vg=[1,27],$Vh=[1,34],$Vi=[1,36],$Vj=[1,37],$Vk=[1,38],$Vl=[1,39],$Vm=[1,40],$Vn=[1,41],$Vo=[1,42],$Vp=[1,43],$Vq=[1,44],$Vr=[1,45],$Vs=[1,46],$Vt=[1,47],$Vu=[1,48],$Vv=[1,49],$Vw=[1,50],$Vx=[5,8,14,19,22,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,49],$Vy=[2,43],$Vz=[1,53],$VA=[1,54],$VB=[5,8,14,19],$VC=[5,8,14,19,26],$VD=[2,17],$VE=[14,22],$VF=[1,88],$VG=[5,8,14,19,22,26,29,30,49],$VH=[5,8,14,19,22,26,29,30,31,32,49],$VI=[5,8,14,19,22,26,29,30,31,32,33,34,35,36,37,38,49],$VJ=[5,8,14,19,22,26,29,30,31,32,33,34,35,36,37,38,39,40,49],$VK=[5,8,14,19,22,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,49],$VL=[2,15],$VM=[1,109],$VN=[8,14,26];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements":6,"statements_":7,";":8,"function":9,"statement":10,"IDENTIFIER":11,"[":12,"parameters":13,"]":14,":=":15,"bracket_statements":16,"While":17,"e":18,",":19,"Do":20,"{":21,"}":22,"statement_with_semicolon":23,"If":24,"(":25,")":26,"=":27,"Return":28,"||":29,"Or":30,"&&":31,"And":32,"!=":33,"==":34,"<=":35,"<":36,">=":37,">":38,"+":39,"-":40,"*":41,"/":42,"^":43,"!":44,"parentheses_expr":45,"exprs":46,"[[":47,"access_arr":48,"]]":49,"NUMBER":50,"STRING_LITERAL":51,"parameter":52,"PARAMETER":53,":":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:";",11:"IDENTIFIER",12:"[",14:"]",15:":=",17:"While",19:",",20:"Do",21:"{",22:"}",24:"If",25:"(",26:")",27:"=",28:"Return",29:"||",30:"Or",31:"&&",32:"And",33:"!=",34:"==",35:"<=",36:"<",37:">=",38:">",39:"+",40:"-",41:"*",42:"/",43:"^",44:"!",47:"[[",49:"]]",50:"NUMBER",51:"STRING_LITERAL",53:"PARAMETER",54:":"},
productions_: [0,[3,2],[6,1],[4,3],[4,1],[7,3],[7,1],[9,6],[10,6],[10,10],[10,1],[10,8],[16,5],[16,1],[16,5],[23,3],[23,4],[23,1],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,2],[18,1],[45,3],[45,4],[45,4],[45,2],[45,3],[45,3],[45,1],[45,1],[45,1],[52,3],[52,1],[13,3],[13,1],[13,0],[48,3],[48,1],[46,3],[46,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = ["statements",$$[$0]];
break;
case 3: case 5:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 4: case 6: case 48: case 51:
this.$ =
 [$$[$0]];
break;
case 7:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]];
break;
case 8:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 9:
this.$ = ["foreach","Object",$$[$0-4],$$[$0-2],$$[$0-7]];
break;
case 10:
this.$ = ["semicolon",$$[$0]];
break;
case 11:
this.$ = ["if",$$[$0-5],$$[$0-3],["else",$$[$0-1]]];
break;
case 12:
this.$ = ["statements",[$$[$0-3]].concat($$[$0-1])];
break;
case 13:
this.$ = ["statements",[$$[$0]]]
break;
case 14:
this.$ = ["semicolon",["set_var",$$[$0-3],$$[$0-1]]];
break;
case 15:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["return",$$[$0-1]];
break;
case 17:
this.$ = ["return",$$[$0]];
break;
case 18: case 20: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 19:
this.$ = ["||",$$[$0-2],$$[$0]];
break;
case 21:
this.$ = ["&&",$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = ["!", [".",$$[$0]]];
break;
case 35:
this.$ = $$[$0];
break;
case 36:
this.$= ["function_call",$$[$0-2],[]];
break;
case 37:
this.$= ["function_call",$$[$0-3],$$[$0-1]];
break;
case 38:
this.$ = ["access_array",$$[$0-3],$$[$0]];
break;
case 39:
this.$ = ["initializer_list","Object",[]];
break;
case 40:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 41:
this.$ = ["parentheses",$$[$0-1]];
break;
case 42:
this.$ = [yytext];
break;
case 43: case 44:
this.$ = yytext;
break;
case 45:
this.$ = ["default_parameter", "Object", $$[$0-2].substring(0,($$[$0-2].length)-1)],$$[$0];
break;
case 46:
this.$ = ["Object", $$[$0].substring(0,($$[$0].length)-1)];
break;
case 47: case 50: case 52:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 49:
this.$ = []
break;
case 53:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,9:3,11:$V0},{1:[3]},{5:[1,5],8:[1,6]},o($V1,[2,4]),{12:[1,7]},{1:[2,1]},{9:8,11:$V0},{13:9,14:$V2,52:10,53:$V3},o($V1,[2,3]),{14:[1,12]},{14:[2,48],19:[1,13]},o($V4,[2,46],{54:[1,14]}),{15:[1,15]},{13:16,14:$V2,52:10,53:$V3},{11:$V5,18:17,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{10:28,11:$Vc,16:26,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$Vg,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{14:[2,47]},o($V4,[2,45],{29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),{11:$V5,18:51,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:52,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($Vx,[2,35]),o($Vx,$Vy,{12:$Vz,47:$VA}),{11:$V5,18:57,21:$V6,22:[1,55],25:$V7,40:$V8,44:$V9,45:20,46:56,50:$Va,51:$Vb},{11:$V5,18:58,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($Vx,[2,42]),o($Vx,[2,44]),o($V1,[2,7]),{10:59,11:[1,60],17:$Vd,18:61,20:$Ve,21:$V6,23:31,24:$Vf,25:$V7,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($VB,[2,13]),{12:[1,62]},{12:[1,63]},o($VC,[2,10]),{12:[1,64]},o([5,8,14,19,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vy,{12:$Vz,27:[1,65],47:$VA}),{12:[1,66]},o($VC,$VD,{29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),{11:$V5,18:67,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:68,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:69,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:70,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:71,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:72,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:73,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:74,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:75,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:76,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:77,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:78,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:79,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:80,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:81,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($Vx,[2,33]),o($Vx,[2,34]),{11:$V5,14:[1,82],18:57,21:$V6,25:$V7,40:$V8,44:$V9,45:20,46:83,50:$Va,51:$Vb},{11:$V5,18:85,21:$V6,25:$V7,40:$V8,44:$V9,45:20,48:84,50:$Va,51:$Vb},o($Vx,[2,39]),{22:[1,86]},o($VE,[2,53],{19:[1,87],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),{26:$VF,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{8:[1,89]},o([8,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vy,{12:$Vz,27:[1,90],47:$VA}),{8:$VD,26:$VF,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{11:$V5,18:91,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{10:28,11:$Vc,16:92,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$Vg,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:93,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:94,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:95,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($VG,[2,18],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VG,[2,19],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VH,[2,20],{33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VH,[2,21],{33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,22],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,23],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,24],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,25],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,26],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VI,[2,27],{39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),o($VJ,[2,28],{41:$Vu,42:$Vv,43:$Vw}),o($VJ,[2,29],{41:$Vu,42:$Vv,43:$Vw}),o($VK,[2,30],{43:$Vw}),o($VK,[2,31],{43:$Vw}),o($Vx,[2,32]),o($Vx,[2,36]),{14:[1,96]},{49:[1,97]},{19:[1,98],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,49:[2,51]},o($Vx,[2,40]),{11:$V5,18:57,21:$V6,25:$V7,40:$V8,44:$V9,45:20,46:99,50:$Va,51:$Vb},o($Vx,[2,41]),{7:100,10:101,11:$Vc,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$V7,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:102,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{19:[1,103],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{19:[1,104]},{19:[1,105],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},o($VC,$VL,{29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw}),{14:[1,106],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},o($Vx,[2,37]),o($Vx,[2,38]),{11:$V5,18:85,21:$V6,25:$V7,40:$V8,44:$V9,45:20,48:107,50:$Va,51:$Vb},o($VE,[2,52]),{8:$VM,26:[1,108]},o($VN,[2,6]),{8:$VL,26:[1,110],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{6:111,7:112,10:101,11:$Vc,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$V7,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{21:[1,113]},{10:28,11:$Vc,16:114,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$Vg,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($VC,[2,16]),{49:[2,50]},o($VB,[2,12]),{10:115,11:$Vc,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$V7,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},o($VB,[2,14]),{14:[1,116]},{8:$VM,14:[2,2]},{11:$V5,18:117,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{19:[1,118]},o($VN,[2,5]),o($VC,[2,8]),{19:[1,119],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},{10:28,11:$Vc,16:120,17:$Vd,18:35,20:$Ve,21:$V6,23:31,24:$Vf,25:$Vg,28:$Vh,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{11:$V5,18:121,21:$V6,25:$V7,40:$V8,44:$V9,45:20,50:$Va,51:$Vb},{14:[1,122]},{22:[1,123],29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw},o($VC,[2,11]),{14:[1,124]},o($VC,[2,9])],
defaultActions: {5:[2,1],16:[2,47],107:[2,50]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 50
break;
case 2:return 51
break;
case 3:return "$"
break;
case 4:return 32
break;
case 5:return 30
break;
case 6:return "block"
break;
case 7:return "typeof"
break;
case 8:return 24
break;
case 9:return "case"
break;
case 10:return 'default'
break;
case 11:return 28
break;
case 12:return 'yield'
break;
case 13:return 17
break;
case 14:return 20
break;
case 15:return 'switch'
break;
case 16:return 'break'
break;
case 17:return 'for'
break;
case 18:return 'var'
break;
case 19:return 'of'
break;
case 20:return 19
break;
case 21:return 8
break;
case 22:return '.'
break;
case 23:return ":="
break;
case 24:return 54
break;
case 25:return 31
break;
case 26:return 29
break;
case 27:return 37
break;
case 28:return 38
break;
case 29:return 35
break;
case 30:return 36
break;
case 31:return 34
break;
case 32:return 33
break;
case 33:return "!"
break;
case 34:return 27
break;
case 35:return '*='
break;
case 36:return 41
break;
case 37:return '/='
break;
case 38:return 42
break;
case 39:return '%'
break;
case 40:return '-='
break;
case 41:return '--'
break;
case 42:return 40
break;
case 43:return '++'
break;
case 44:return '+='
break;
case 45:return 39
break;
case 46:return 43
break;
case 47:return 21
break;
case 48:return 22
break;
case 49:return 12
break;
case 50:return 14
break;
case 51:return 25
break;
case 52:return 26
break;
case 53:return 53
break;
case 54:return 11
break;
case 55:return 5
break;
case 56:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:And\b)/,/^(?:Or\b)/,/^(?:block\b)/,/^(?:typeof\b)/,/^(?:If\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:Return\b)/,/^(?:yield\b)/,/^(?:While\b)/,/^(?:Do\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::=)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:!)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = wolfram_parser;
exports.Parser = wolfram_parser.Parser;
exports.parse = function () { return wolfram_parser.parse.apply(wolfram_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}