"use strict";(self.webpackChunklenguajes_estructurados=self.webpackChunklenguajes_estructurados||[]).push([[577],{3905:(e,a,r)=>{r.d(a,{Zo:()=>i,kt:()=>g});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function u(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?u(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),c=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},i=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,u=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return r?t.createElement(g,l(l({ref:a},i),{},{components:r})):t.createElement(g,l({ref:a},i))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var u=r.length,l=new Array(u);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<u;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5383:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));const u={marp:!0,theme:"default",size:969,paginate:!0},l="02.02 - Estructuras de datos (struct)",o={unversionedId:"Lenguaje C/02.02_estructuras",id:"Lenguaje C/02.02_estructuras",title:"02.02 - Estructuras de datos (struct)",description:'"# Lenguajes Estructurados',source:"@site/docs/02 - Lenguaje C/02.02_estructuras.md",sourceDirName:"02 - Lenguaje C",slug:"/Lenguaje C/02.02_estructuras",permalink:"/lenguajes-estructurados/docs/Lenguaje C/02.02_estructuras",draft:!1,editUrl:"https://github.com/abelranni/lenguajes-estructurados/tree/main/docs/02 - Lenguaje C/02.02_estructuras.md",tags:[],version:"current",frontMatter:{marp:!0,theme:"default",size:969,paginate:!0},sidebar:"tutorialSidebar",previous:{title:"02.02.E - Fractales de Julia",permalink:"/lenguajes-estructurados/docs/Lenguaje C/02.02.E_fractales_julia"},next:{title:"02.03 - Punteros",permalink:"/lenguajes-estructurados/docs/Lenguaje C/02.03_punteros"}},s={},c=[{value:"\xbfQu\xe9 son las estructuras de datos?",id:"qu\xe9-son-las-estructuras-de-datos",level:2},{value:"\xbfPor qu\xe9 son \xfatiles las estructuras de datos?",id:"por-qu\xe9-son-\xfatiles-las-estructuras-de-datos",level:2},{value:"\xbfC\xf3mo se declaran las estructuras de datos?",id:"c\xf3mo-se-declaran-las-estructuras-de-datos",level:2},{value:"\xbfC\xf3mo se inicializan las estructuras de datos?",id:"c\xf3mo-se-inicializan-las-estructuras-de-datos",level:2},{value:"\xbfC\xf3mo se accede a los campos de una estructura?",id:"c\xf3mo-se-accede-a-los-campos-de-una-estructura",level:2},{value:"\xbfC\xf3mo se modifica el valor de un campo de una estructura?",id:"c\xf3mo-se-modifica-el-valor-de-un-campo-de-una-estructura",level:2},{value:"\xbfC\xf3mo se declaran punteros a estructuras?",id:"c\xf3mo-se-declaran-punteros-a-estructuras",level:2},{value:"\xbfC\xf3mo se accede a los campos de una estructura a trav\xe9s de un puntero?",id:"c\xf3mo-se-accede-a-los-campos-de-una-estructura-a-trav\xe9s-de-un-puntero",level:2},{value:"\xbfC\xf3mo se modifica el valor de un campo de una estructura a trav\xe9s de un puntero?",id:"c\xf3mo-se-modifica-el-valor-de-un-campo-de-una-estructura-a-trav\xe9s-de-un-puntero",level:2},{value:"Ejercicio",id:"ejercicio",level:2}],i={toc:c},d="wrapper";function p(e){let{components:a,...r}=e;return(0,n.kt)(d,(0,t.Z)({},i,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0202---estructuras-de-datos-struct"},"02.02 - Estructuras de datos (struct)"),(0,n.kt)("p",null,'"# Lenguajes Estructurados'),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"qu\xe9-son-las-estructuras-de-datos"},"\xbfQu\xe9 son las estructuras de datos?"),(0,n.kt)("p",null,"Una estructura de datos es una colecci\xf3n de datos relacionados que se almacenan de manera organizada en la memoria de una computadora."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"por-qu\xe9-son-\xfatiles-las-estructuras-de-datos"},"\xbfPor qu\xe9 son \xfatiles las estructuras de datos?"),(0,n.kt)("p",null,"Las estructuras de datos nos permiten almacenar informaci\xf3n relacionada de manera organizada."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-declaran-las-estructuras-de-datos"},"\xbfC\xf3mo se declaran las estructuras de datos?"),(0,n.kt)("p",null,"Para declarar una estructura, utilizamos la palabra reservada ",(0,n.kt)("inlineCode",{parentName:"p"},"struct")," seguida del nombre de la estructura y los campos que contiene."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"struct Libro {\n    char titulo[50];\n    char autor[50];\n    int num_paginas;\n};\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-inicializan-las-estructuras-de-datos"},"\xbfC\xf3mo se inicializan las estructuras de datos?"),(0,n.kt)("p",null,"Para inicializar una estructura, utilizamos la sintaxis de llaves."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'struct Libro libro1 = {"El principito", "Antoine de Saint-Exup\xe9ry", 96};\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-accede-a-los-campos-de-una-estructura"},"\xbfC\xf3mo se accede a los campos de una estructura?"),(0,n.kt)("p",null,'Para acceder a los campos de una estructura, utilizamos el operador de punto ".".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'printf("T\xedtulo: %s\\n", libro1.titulo);\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-modifica-el-valor-de-un-campo-de-una-estructura"},"\xbfC\xf3mo se modifica el valor de un campo de una estructura?"),(0,n.kt)("p",null,'Para modificar el valor de un campo de una estructura, utilizamos el operador de punto "."'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"libro1.num_paginas = 110;\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-declaran-punteros-a-estructuras"},"\xbfC\xf3mo se declaran punteros a estructuras?"),(0,n.kt)("p",null,'Para declarar un puntero a una estructura, utilizamos el operador de indirecci\xf3n "*".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"struct Libro *libro2 = &libro1;\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-accede-a-los-campos-de-una-estructura-a-trav\xe9s-de-un-puntero"},"\xbfC\xf3mo se accede a los campos de una estructura a trav\xe9s de un puntero?"),(0,n.kt)("p",null,'Para acceder a los campos de una estructura a trav\xe9s de un puntero, utilizamos el operador de flecha "->".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'printf("T\xedtulo: %s\\n", libro2->titulo);\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"c\xf3mo-se-modifica-el-valor-de-un-campo-de-una-estructura-a-trav\xe9s-de-un-puntero"},"\xbfC\xf3mo se modifica el valor de un campo de una estructura a trav\xe9s de un puntero?"),(0,n.kt)("p",null,'Para modificar el valor de un campo de una estructura a trav\xe9s de un puntero, utilizamos el operador de flecha "->".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"libro2->num_paginas = 110;\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Supongamos que queremos almacenar informaci\xf3n sobre los libros de una biblioteca, como el t\xedtulo, el autor y el n\xfamero de p\xe1ginas. Podemos utilizar una estructura para almacenar esta informaci\xf3n de manera organizada."),(0,n.kt)("p",null,'Primero, definimos la estructura. En este caso, la estructura se llama "Libro" y contiene tres campos: "titulo", "autor" y "num_paginas".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"struct Libro {\n    char titulo[50];\n    char autor[50];\n    int num_paginas;\n};\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Luego, podemos utilizar la estructura para crear una variable que contenga la informaci\xf3n de un libro. Podemos inicializar la variable utilizando la sintaxis de llaves."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'struct Libro libro1 = {"El principito", "Antoine de Saint-Exup\xe9ry", 96};\n')),(0,n.kt)("p",null,'Podemos acceder a los campos de la estructura utilizando el operador de punto ".". Por ejemplo, para imprimir el t\xedtulo del libro, podemos hacer lo siguiente:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'printf("T\xedtulo: %s\\n", libro1.titulo);\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Tambi\xe9n podemos modificar los campos de la estructura utilizando el operador de punto. Por ejemplo, para cambiar el n\xfamero de p\xe1ginas del libro, podemos hacer lo siguiente:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"libro1.num_paginas = 110;\n")),(0,n.kt)("p",null,"Podemos utilizar la estructura en funciones. Por ejemplo, podemos crear una funci\xf3n para imprimir la informaci\xf3n de un libro:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'void imprimir_libro(struct Libro l) {\n    printf("T\xedtulo: %s\\n", l.titulo);\n    printf("Autor: %s\\n", l.autor);\n    printf("N\xfamero de p\xe1ginas: %d\\n", l.num_paginas);\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Podemos llamar a esta funci\xf3n y pasarle la variable que contiene la informaci\xf3n del libro:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"imprimir_libro(libro1);\n")),(0,n.kt)("p",null,"En resumen, las estructuras nos permiten organizar informaci\xf3n de manera m\xe1s clara y legible. Podemos utilizarlas para crear variables que contengan informaci\xf3n relacionada y acceder a los campos de la estructura utilizando el operador de punto. Tambi\xe9n podemos utilizar estructuras en funciones para procesar y manipular la informaci\xf3n almacenada en ellas."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ejercicio"},"Ejercicio"),(0,n.kt)("p",null,"Escribir un programa que permita ingresar la informaci\xf3n de un libro y luego la imprima."))}p.isMDXComponent=!0}}]);