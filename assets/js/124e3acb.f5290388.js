"use strict";(self.webpackChunklenguajes_estructurados=self.webpackChunklenguajes_estructurados||[]).push([[8157],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),d=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=t,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(k,o(o({ref:n},s),{},{components:a})):r.createElement(k,o({ref:n},s))}));function k(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2873:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),t=(a(7294),a(3905));const i={marp:!0,theme:"default",size:969,paginate:!0},o="02.00 - Preprocesador y Macros",l={unversionedId:"Lenguaje C/02.00_preprocesador_y_macros",id:"Lenguaje C/02.00_preprocesador_y_macros",title:"02.00 - Preprocesador y Macros",description:"Lenguajes Estructurados",source:"@site/docs/02 - Lenguaje C/02.00_preprocesador_y_macros.md",sourceDirName:"02 - Lenguaje C",slug:"/Lenguaje C/02.00_preprocesador_y_macros",permalink:"/lenguajes-estructurados/docs/Lenguaje C/02.00_preprocesador_y_macros",draft:!1,editUrl:"https://github.com/abelranni/lenguajes-estructurados/tree/main/docs/02 - Lenguaje C/02.00_preprocesador_y_macros.md",tags:[],version:"current",frontMatter:{marp:!0,theme:"default",size:969,paginate:!0},sidebar:"tutorialSidebar",previous:{title:"02 - Lenguaje C",permalink:"/lenguajes-estructurados/docs/category/02---lenguaje-c"},next:{title:"02.01 - Conceptos Generales",permalink:"/lenguajes-estructurados/docs/Lenguaje C/02.01_conceptos"}},c={},d=[{value:"Lenguajes Estructurados",id:"lenguajes-estructurados",level:2},{value:"Funcionamiento del preprocesador C",id:"funcionamiento-del-preprocesador-c",level:3},{value:"Incluir archivos de cabecera #include",id:"incluir-archivos-de-cabecera-include",level:3},{value:"Macros con #define",id:"macros-con-define",level:2},{value:"Ejemplo 1: #define preprocesador",id:"ejemplo-1-define-preprocesador",level:3},{value:"Macros como funciones",id:"macros-como-funciones",level:2},{value:"Ejemplo 2: Uso de #define",id:"ejemplo-2-uso-de-define",level:3},{value:"Compilaci\xf3n condicional",id:"compilaci\xf3n-condicional",level:2},{value:"Usos del condicional",id:"usos-del-condicional",level:3},{value:"\xbfC\xf3mo usar condicional?",id:"c\xf3mo-usar-condicional",level:3},{value:"Directiva #ifdef",id:"directiva-ifdef",level:3},{value:"Directiva #if, #elif y #else",id:"directiva-if-elif-y-else",level:3},{value:"#defined",id:"defined",level:3},{value:"Macros predefinidas",id:"macros-predefinidas",level:2},{value:"Ejemplo 3: Obtener la hora actual usando __TIME__",id:"ejemplo-3-obtener-la-hora-actual-usando-__time__",level:3},{value:"Lecturas recomendadas",id:"lecturas-recomendadas",level:3}],s={toc:d},p="wrapper";function u(e){let{components:n,...i}=e;return(0,t.kt)(p,(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"0200---preprocesador-y-macros"},"02.00 - Preprocesador y Macros"),(0,t.kt)("h2",{id:"lenguajes-estructurados"},"Lenguajes Estructurados"),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"funcionamiento-del-preprocesador-c"},"Funcionamiento del preprocesador C"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Funcionamiento de un preprocesador en programaci\xf3n C",src:a(5917).Z,width:"740",height:"400"})),(0,t.kt)("p",null,"El preprocesador C es un preprocesador de macros (permite definir macros) que transforma el programa antes de compilarlo. Estas transformaciones pueden ser la inclusi\xf3n de archivos de cabecera, expansiones de macros, etc."),(0,t.kt)("hr",null),(0,t.kt)("p",null,"Todas las directivas de preprocesamiento comienzan con un s\xedmbolo ",(0,t.kt)("inlineCode",{parentName:"p"},"#"),". Por ejemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#define PI 3.14\n")),(0,t.kt)("p",null,"Algunos de los usos comunes de los preprocesadores C son:"),(0,t.kt)("h3",{id:"incluir-archivos-de-cabecera-include"},"Incluir archivos de cabecera #include"),(0,t.kt)("p",null,"El preprocesador ",(0,t.kt)("inlineCode",{parentName:"p"},"#include")," se utiliza para incluir archivos de cabecera en programas C. Por ejemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n")),(0,t.kt)("hr",null),(0,t.kt)("p",null,"Aqu\xed, ",(0,t.kt)("inlineCode",{parentName:"p"},"stdio.h")," es un archivo de encabezado. La directiva de preprocesador ",(0,t.kt)("inlineCode",{parentName:"p"},"#include")," reemplaza la l\xednea anterior con el contenido del archivo de cabecera ",(0,t.kt)("inlineCode",{parentName:"p"},"stdio.h"),"."),(0,t.kt)("p",null,"Esa es la raz\xf3n por la que necesita usar ",(0,t.kt)("inlineCode",{parentName:"p"},"#include <stdio.h>")," antes de poder usar funciones como ",(0,t.kt)("inlineCode",{parentName:"p"},"scanf()")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"printf()"),"."),(0,t.kt)("p",null,"Tambi\xe9n puede crear su propio archivo de encabezado que contenga la declaraci\xf3n de funci\xf3n e incluirlo en su programa utilizando esta directiva de preprocesador."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'#include "my_header.h"\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"macros-con-define"},"Macros con #define"),(0,t.kt)("p",null,"Una macro es un fragmento de c\xf3digo al que se le asigna un nombre. Puede definir una macro en C utilizando la directiva de preprocesador ",(0,t.kt)("inlineCode",{parentName:"p"},"#define"),"."),(0,t.kt)("p",null,"Aqu\xed hay un ejemplo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#define c 299792458  // speed of light\n")),(0,t.kt)("p",null,"Aqu\xed, cuando usamos ",(0,t.kt)("inlineCode",{parentName:"p"},"c")," en nuestro programa, se reemplaza con ",(0,t.kt)("inlineCode",{parentName:"p"},"299792458"),"."),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ejemplo-1-define-preprocesador"},"Ejemplo 1: #define preprocesador"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#define PI 3.1415\n\nint main()\n{\n    float radius, area;\n    printf("Enter the radius: ");\n    scanf("%f", &radius);\n\n    // Notar el uso de PI\n    area = PI*radius*radius;\n\n    printf("Area=%.2f",area);\n    return 0;\n}\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"macros-como-funciones"},"Macros como funciones"),(0,t.kt)("p",null,"Tambi\xe9n puede definir macros que funcionen de manera similar a una llamada a funci\xf3n. Esto se conoce como macros similares a funciones. Por ejemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#define circleArea(r) (3.1415*(r)*(r))\n")),(0,t.kt)("p",null,"Cada vez que el programa encuentra ",(0,t.kt)("inlineCode",{parentName:"p"},"circleArea(argument)"),", se reemplaza por ",(0,t.kt)("inlineCode",{parentName:"p"},"(3.1415*(argument)*(argument))"),"."),(0,t.kt)("p",null,"Supongamos que pasamos 5 como argumento entonces, se expande de la siguiente manera:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"circleArea(5) expands to (3.1415*5*5)\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ejemplo-2-uso-de-define"},"Ejemplo 2: Uso de #define"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#define PI 3.1415\n#define circleArea(r) (PI*r*r)\n\nint main() {\n    float radius, area;\n\n    printf("Enter the radius: ");\n    scanf("%f", &radius);\n    area = circleArea(radius);\n    printf("Area = %.2f", area);\n\n    return 0;\n}\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"compilaci\xf3n-condicional"},"Compilaci\xf3n condicional"),(0,t.kt)("p",null,"En la programaci\xf3n en C, puede indicar al preprocesador si debe incluir un bloque de c\xf3digo o no. Para ello, se pueden utilizar directivas condicionales."),(0,t.kt)("p",null,"Es similar a una declaraci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," con una diferencia importante."),(0,t.kt)("p",null,"La instrucci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," se prueba durante el tiempo de ejecuci\xf3n para comprobar si un bloque de c\xf3digo debe ejecutarse o no, mientras que los condicionales se utilizan para incluir (u omitir) un bloque de c\xf3digo en el programa antes de la ejecuci\xf3n."),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"usos-del-condicional"},"Usos del condicional"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Utilice c\xf3digo diferente dependiendo de la m\xe1quina, sistema operativo"),(0,t.kt)("li",{parentName:"ul"},"Compilar el mismo archivo fuente en dos programas diferentes"),(0,t.kt)("li",{parentName:"ul"},"para excluir cierto c\xf3digo del programa, pero para mantenerlo como referencia para fines futuros")),(0,t.kt)("h3",{id:"c\xf3mo-usar-condicional"},"\xbfC\xf3mo usar condicional?"),(0,t.kt)("p",null,"Para usar condicional se utilizan directivas ",(0,t.kt)("inlineCode",{parentName:"p"},"#ifdef"),",",(0,t.kt)("inlineCode",{parentName:"p"},"#if"),",",(0,t.kt)("inlineCode",{parentName:"p"},"#defined"),",",(0,t.kt)("inlineCode",{parentName:"p"},"#else")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"#elif")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"directiva-ifdef"},"Directiva #ifdef"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#ifdef MACRO     \n   // codigo condicional\n#endif\n")),(0,t.kt)("p",null,"Aqu\xed, los c\xf3digos condicionales se incluyen en el programa solo si ",(0,t.kt)("inlineCode",{parentName:"p"},"MACRO")," est\xe1 definido."),(0,t.kt)("h3",{id:"directiva-if-elif-y-else"},"Directiva #if, #elif y #else"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#if expression\n   // codigo condicional\n#endif\n")),(0,t.kt)("p",null,"Aqu\xed, ",(0,t.kt)("inlineCode",{parentName:"p"},"expression")," es una expresi\xf3n de tipo entero (pueden ser enteros, caracteres, expresi\xf3n aritm\xe9tica, macros, etc.)."),(0,t.kt)("p",null,"Los c\xf3digos condicionales se incluyen en el programa s\xf3lo si ",(0,t.kt)("inlineCode",{parentName:"p"},"expression")," se eval\xfaa a un valor distinto de cero."),(0,t.kt)("hr",null),(0,t.kt)("p",null,"La directiva opcional ",(0,t.kt)("inlineCode",{parentName:"p"},"#else")," se puede utilizar con la directiva",(0,t.kt)("inlineCode",{parentName:"p"},"#if"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#if expression\n   // codigo condicional si expression es distinto de cero\n#else\n    // codigo condicional si expression es cero\n#endif\n")),(0,t.kt)("p",null,"Tambi\xe9n puede agregar condicional anidado al ",(0,t.kt)("inlineCode",{parentName:"p"},"#if...#else")," usando ",(0,t.kt)("inlineCode",{parentName:"p"},"#elif")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#if expression\n   // codigo condicional si expression es distinto de cero    \n#elif expression1\n   // codigo condicional si expression1 es distinto de cero\n#elif expression2\n   // codigo condicional si expression2 es distinto de cero\n#else\n    // codigo condicional si todas las expresiones son cero\n#endif\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"defined"},"#defined"),(0,t.kt)("p",null,"El operador especial ",(0,t.kt)("inlineCode",{parentName:"p"},"#defined")," se utiliza para probar si una determinada macro est\xe1 definida o no. A menudo se usa con la directiva ",(0,t.kt)("inlineCode",{parentName:"p"},"#if"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#if defined BUFFER_SIZE && BUFFER_SIZE >= 2048\n  // codes\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"macros-predefinidas"},"Macros predefinidas"),(0,t.kt)("p",null,"Aqu\xed hay algunas macros predefinidas en la programaci\xf3n C."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Macro"),(0,t.kt)("th",{parentName:"tr",align:null},"Valor"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"__DATE__")),(0,t.kt)("td",{parentName:"tr",align:null},"Una cadena que contiene la fecha actual.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"__FILE__")),(0,t.kt)("td",{parentName:"tr",align:null},"Una cadena que contiene el nombre de archivo.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"__LINE__")),(0,t.kt)("td",{parentName:"tr",align:null},"Un entero que representa el n\xfamero de l\xednea actual.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"__STDC__")),(0,t.kt)("td",{parentName:"tr",align:null},"Si sigue el est\xe1ndar ANSI C, entonces el valor es un entero distinto de cero.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("inlineCode",{parentName:"td"},"__TIME__")),(0,t.kt)("td",{parentName:"tr",align:null},"Una cadena que contiene la hora actual.")))),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ejemplo-3-obtener-la-hora-actual-usando-__time__"},"Ejemplo 3: Obtener la hora actual usando ","_","_","TIME","_","_"),(0,t.kt)("p",null,"El siguiente programa genera la hora actual mediante macro ",(0,t.kt)("inlineCode",{parentName:"p"},"__TIME__"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\nint main()\n{\n   printf("Current time: %s",__TIME__);   \n}\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Salida")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"Current time: 19:54:39\n")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"lecturas-recomendadas"},"Lecturas recomendadas"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Line-Control.html#Line-Control"},"Control de l\xednea")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html#Pragmas"},"Pragmas")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Preprocessor-Output.html#Preprocessor-Output"},"Salida del preprocesador")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Other-Directives.html#Other-Directives"},"Otras directivas")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Macros.html#Macros",title:"C Macros"},"macros y #define preprocesador")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html#Header-Files",title:"Include preprocessor"},"Uso de archivos de encabezado"))))}u.isMDXComponent=!0},5917:(e,n,a)=>{a.d(n,{Z:()=>r});const r="data:image/webp;base64,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"}}]);