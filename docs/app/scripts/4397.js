"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4397],{54397:(e,t,i)=>{i.d(t,{Ps:()=>M});var n=i(70655),r=i(76375);function s(e,t,i){return new r._("Syntax Error: ".concat(i),void 0,e,[t])}var a=i(97359),c=i(72380),o=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),h=i(99763),p=i(25821),l=i(37826),u=i(8306);function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof e||(0,l.Z)(0,"Body must be a string. Received: ".concat((0,p.Z)(e),".")),this.body=e,this.name=t,this.locationOffset=i,this.locationOffset.line>0||(0,l.Z)(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,l.Z)(0,"column in locationOffset is 1-indexed and must be positive.")}var t,i;return t=e,(i=[{key:h.YF,get:function(){return"Source"}}])&&d(t.prototype,i),e}(),E=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),v=i(87392),N=function(){function e(e){var t=new c.WU(o.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==o.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=m(this,e)}while(e.kind===o.COMMENT);return e},e}();function T(e){return isNaN(e)?o.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function m(e,t){for(var i=e.source,n=i.body,r=n.length,a=t.end;a<r;){var h=n.charCodeAt(a),p=e.line,l=1+a-e.lineStart;switch(h){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++e.line,e.lineStart=a;continue;case 13:10===n.charCodeAt(a+1)?a+=2:++a,++e.line,e.lineStart=a;continue;case 33:return new c.WU(o.BANG,a,a+1,p,l,t);case 35:return k(i,a,p,l,t);case 36:return new c.WU(o.DOLLAR,a,a+1,p,l,t);case 38:return new c.WU(o.AMP,a,a+1,p,l,t);case 40:return new c.WU(o.PAREN_L,a,a+1,p,l,t);case 41:return new c.WU(o.PAREN_R,a,a+1,p,l,t);case 46:if(46===n.charCodeAt(a+1)&&46===n.charCodeAt(a+2))return new c.WU(o.SPREAD,a,a+3,p,l,t);break;case 58:return new c.WU(o.COLON,a,a+1,p,l,t);case 61:return new c.WU(o.EQUALS,a,a+1,p,l,t);case 64:return new c.WU(o.AT,a,a+1,p,l,t);case 91:return new c.WU(o.BRACKET_L,a,a+1,p,l,t);case 93:return new c.WU(o.BRACKET_R,a,a+1,p,l,t);case 123:return new c.WU(o.BRACE_L,a,a+1,p,l,t);case 124:return new c.WU(o.PIPE,a,a+1,p,l,t);case 125:return new c.WU(o.BRACE_R,a,a+1,p,l,t);case 34:return 34===n.charCodeAt(a+1)&&34===n.charCodeAt(a+2)?D(i,a,p,l,t,e):x(i,a,p,l,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return A(i,a,h,p,l,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return y(i,a,p,l,t)}throw s(i,a,_(h))}var u=e.line,d=1+a-e.lineStart;return new c.WU(o.EOF,r,r,u,d,t)}function _(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(T(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(T(e),".")}function k(e,t,i,n,r){var s,a=e.body,h=t;do{s=a.charCodeAt(++h)}while(!isNaN(s)&&(s>31||9===s));return new c.WU(o.COMMENT,t,h,i,n,r,a.slice(t+1,h))}function A(e,t,i,n,r,a){var h=e.body,p=i,l=t,u=!1;if(45===p&&(p=h.charCodeAt(++l)),48===p){if((p=h.charCodeAt(++l))>=48&&p<=57)throw s(e,l,"Invalid number, unexpected digit after 0: ".concat(T(p),"."))}else l=I(e,l,p),p=h.charCodeAt(l);if(46===p&&(u=!0,p=h.charCodeAt(++l),l=I(e,l,p),p=h.charCodeAt(l)),69!==p&&101!==p||(u=!0,43!==(p=h.charCodeAt(++l))&&45!==p||(p=h.charCodeAt(++l)),l=I(e,l,p),p=h.charCodeAt(l)),46===p||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(p))throw s(e,l,"Invalid number, expected digit but got: ".concat(T(p),"."));return new c.WU(u?o.FLOAT:o.INT,t,l,n,r,a,h.slice(t,l))}function I(e,t,i){var n=e.body,r=t,a=i;if(a>=48&&a<=57){do{a=n.charCodeAt(++r)}while(a>=48&&a<=57);return r}throw s(e,r,"Invalid number, expected digit but got: ".concat(T(a),"."))}function x(e,t,i,n,r){for(var a,h,p,l,u=e.body,d=t+1,f=d,E=0,v="";d<u.length&&!isNaN(E=u.charCodeAt(d))&&10!==E&&13!==E;){if(34===E)return v+=u.slice(f,d),new c.WU(o.STRING,t,d+1,i,n,r,v);if(E<32&&9!==E)throw s(e,d,"Invalid character within String: ".concat(T(E),"."));if(++d,92===E){switch(v+=u.slice(f,d-1),E=u.charCodeAt(d)){case 34:v+='"';break;case 47:v+="/";break;case 92:v+="\\";break;case 98:v+="\b";break;case 102:v+="\f";break;case 110:v+="\n";break;case 114:v+="\r";break;case 116:v+="\t";break;case 117:var N=(a=u.charCodeAt(d+1),h=u.charCodeAt(d+2),p=u.charCodeAt(d+3),l=u.charCodeAt(d+4),O(a)<<12|O(h)<<8|O(p)<<4|O(l));if(N<0){var m=u.slice(d+1,d+5);throw s(e,d,"Invalid character escape sequence: \\u".concat(m,"."))}v+=String.fromCharCode(N),d+=4;break;default:throw s(e,d,"Invalid character escape sequence: \\".concat(String.fromCharCode(E),"."))}f=++d}}throw s(e,d,"Unterminated string.")}function D(e,t,i,n,r,a){for(var h=e.body,p=t+3,l=p,u=0,d="";p<h.length&&!isNaN(u=h.charCodeAt(p));){if(34===u&&34===h.charCodeAt(p+1)&&34===h.charCodeAt(p+2))return d+=h.slice(l,p),new c.WU(o.BLOCK_STRING,t,p+3,i,n,r,(0,v.W7)(d));if(u<32&&9!==u&&10!==u&&13!==u)throw s(e,p,"Invalid character within String: ".concat(T(u),"."));10===u?(++p,++a.line,a.lineStart=p):13===u?(10===h.charCodeAt(p+1)?p+=2:++p,++a.line,a.lineStart=p):92===u&&34===h.charCodeAt(p+1)&&34===h.charCodeAt(p+2)&&34===h.charCodeAt(p+3)?(d+=h.slice(l,p)+'"""',l=p+=4):++p}throw s(e,p,"Unterminated string.")}function O(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function y(e,t,i,n,r){for(var s=e.body,a=s.length,h=t+1,p=0;h!==a&&!isNaN(p=s.charCodeAt(h))&&(95===p||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122);)++h;return new c.WU(o.NAME,t,h,i,n,r,s.slice(t,h))}var R=function(){function e(e,t){var i=function(e){return(0,u.Z)(e,f)}(e)?e:new f(e);this._lexer=new N(i),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(o.NAME);return{kind:a.h.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:a.h.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(o.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(o.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(o.BRACE_L))return{kind:a.h.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,i=this.parseOperationType();return this.peek(o.NAME)&&(t=this.parseName()),{kind:a.h.OPERATION_DEFINITION,operation:i,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(o.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:a.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(o.DOLLAR),{kind:a.h.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:a.h.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,i=this._lexer.token,n=this.parseName();return this.expectOptionalToken(o.COLON)?(e=n,t=this.parseName()):t=n,{kind:a.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(i)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,t,o.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(o.COLON),{kind:a.h.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:a.h.ARGUMENT,name:this.parseName(),value:(this.expectToken(o.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(o.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(o.NAME)?{kind:a.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:a.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:a.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:a.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case o.BRACKET_L:return this.parseList(e);case o.BRACE_L:return this.parseObject(e);case o.INT:return this._lexer.advance(),{kind:a.h.INT,value:t.value,loc:this.loc(t)};case o.FLOAT:return this._lexer.advance(),{kind:a.h.FLOAT,value:t.value,loc:this.loc(t)};case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:a.h.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:a.h.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:a.h.NULL,loc:this.loc(t)};default:return{kind:a.h.ENUM,value:t.value,loc:this.loc(t)}}case o.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:a.h.STRING,value:e.value,block:e.kind===o.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,i=this._lexer.token;return{kind:a.h.LIST,values:this.any(o.BRACKET_L,(function(){return t.parseValueLiteral(e)}),o.BRACKET_R),loc:this.loc(i)}},t.parseObject=function(e){var t=this,i=this._lexer.token;return{kind:a.h.OBJECT,fields:this.any(o.BRACE_L,(function(){return t.parseObjectField(e)}),o.BRACE_R),loc:this.loc(i)}},t.parseObjectField=function(e){var t=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),{kind:a.h.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(o.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(o.AT),{kind:a.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(o.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(o.BRACKET_R),e={kind:a.h.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(o.BANG)?{kind:a.h.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:a.h.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===o.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var i=this.parseDirectives(!0),n=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return{kind:a.h.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:n,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(o.COLON);var i=this.parseNamedType();return{kind:a.h.OPERATION_TYPE_DEFINITION,operation:t,type:i,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var i=this.parseName(),n=this.parseDirectives(!0);return{kind:a.h.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:n,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:a.h.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:r,fields:s,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(o.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(o.AMP)||this.peek(o.NAME));return t}return this.delimitedMany(o.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(o.BRACE_L)&&this._lexer.lookahead().kind===o.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(o.COLON);var r=this.parseTypeReference(),s=this.parseDirectives(!0);return{kind:a.h.FIELD_DEFINITION,description:t,name:i,arguments:n,type:r,directives:s,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(o.COLON);var n,r=this.parseTypeReference();this.expectOptionalToken(o.EQUALS)&&(n=this.parseValueLiteral(!0));var s=this.parseDirectives(!0);return{kind:a.h.INPUT_VALUE_DEFINITION,description:t,name:i,type:r,defaultValue:n,directives:s,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:a.h.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:r,fields:s,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:a.h.UNION_TYPE_DEFINITION,description:t,name:i,directives:n,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:a.h.ENUM_TYPE_DEFINITION,description:t,name:i,directives:n,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseDirectives(!0);return{kind:a.h.ENUM_VALUE_DEFINITION,description:t,name:i,directives:n,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:a.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:n,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===o.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),i=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return{kind:a.h.SCHEMA_EXTENSION,directives:t,operationTypes:i,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),i=this.parseDirectives(!0);if(0===i.length)throw this.unexpected();return{kind:a.h.SCALAR_TYPE_EXTENSION,name:t,directives:i,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===r.length)throw this.unexpected();return{kind:a.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===r.length)throw this.unexpected();return{kind:a.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseUnionMemberTypes();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:a.h.UNION_TYPE_EXTENSION,name:t,directives:i,types:n,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseEnumValuesDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:a.h.ENUM_TYPE_EXTENSION,name:t,directives:i,values:n,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseInputFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:a.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:n,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);var i=this.parseName(),n=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var s=this.parseDirectiveLocations();return{kind:a.h.DIRECTIVE_DEFINITION,description:t,name:i,arguments:n,repeatable:r,locations:s,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==E[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new c.Ye(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw s(this._lexer.source,t.start,"Expected ".concat(L(e),", found ").concat(C(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==o.NAME||t.value!==e)throw s(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(C(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===o.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return s(this._lexer.source,t.start,"Unexpected ".concat(C(t),"."))},t.any=function(e,t,i){this.expectToken(e);for(var n=[];!this.expectOptionalToken(i);)n.push(t.call(this));return n},t.optionalMany=function(e,t,i){if(this.expectOptionalToken(e)){var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n}return[]},t.many=function(e,t,i){this.expectToken(e);var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var i=[];do{i.push(t.call(this))}while(this.expectOptionalToken(e));return i},e}();function C(e){var t=e.value;return L(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function L(e){return function(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R}(e)?'"'.concat(e,'"'):e}var w=new Map,S=new Map,F=!0,g=!1;function b(e){return e.replace(/[\s,]+/g," ").trim()}function U(e){var t=b(e);if(!w.has(t)){var i=function(e,t){return new R(e,t).parseDocument()}(e,{experimentalFragmentVariables:g});if(!i||"Document"!==i.kind)throw new Error("Not a valid GraphQL document.");w.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(i){var n=e[i];n&&"object"==typeof n&&t.add(n)}))}));var i=e.loc;return i&&(delete i.startToken,delete i.endToken),e}(function(e){var t=new Set,i=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var n=e.name.value,r=b((a=e.loc).source.body.substring(a.start,a.end)),s=S.get(n);s&&!s.has(r)?F&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||S.set(n,s=new Set),s.add(r),t.has(r)||(t.add(r),i.push(e))}else i.push(e);var a})),(0,n.pi)((0,n.pi)({},e),{definitions:i})}(i)))}return w.get(t)}function M(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var n=e[0];return t.forEach((function(t,i){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[i+1]})),U(n)}var B,P=M;(B=M||(M={})).gql=P,B.resetCaches=function(){w.clear(),S.clear()},B.disableFragmentWarnings=function(){F=!1},B.enableExperimentalFragmentVariables=function(){g=!0},B.disableExperimentalFragmentVariables=function(){g=!1},M.default=M}}]);