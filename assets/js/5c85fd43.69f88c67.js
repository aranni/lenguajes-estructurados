"use strict";(self.webpackChunklenguajes_estructurados=self.webpackChunklenguajes_estructurados||[]).push([[1855],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||l;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9620:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const l={marp:!0,theme:"default",size:969,paginate:!0},o="TCP Server-Client en C",i={unversionedId:"Redes/tcp",id:"Redes/tcp",title:"TCP Server-Client en C",description:"Lenguajes Estructurados",source:"@site/docs/04 - Redes/tcp.md",sourceDirName:"04 - Redes",slug:"/Redes/tcp",permalink:"/lenguajes-estructurados/docs/Redes/tcp",draft:!1,editUrl:"https://github.com/abelranni/lenguajes-estructurados/tree/main/docs/04 - Redes/tcp.md",tags:[],version:"current",frontMatter:{marp:!0,theme:"default",size:969,paginate:!0},sidebar:"tutorialSidebar",previous:{title:"04 - Redes",permalink:"/lenguajes-estructurados/docs/category/04---redes"}},c={},s=[{value:"Lenguajes Estructurados",id:"lenguajes-estructurados",level:2},{value:"\xbfQu\xe9 es la programaci\xf3n de sockets?",id:"qu\xe9-es-la-programaci\xf3n-de-sockets",level:2},{value:"Diagrama de estado para el modelo de servidor y cliente",id:"diagrama-de-estado-para-el-modelo-de-servidor-y-cliente",level:3},{value:"Etapas para el servidor",id:"etapas-para-el-servidor",level:3},{value:"1. Creaci\xf3n de sockets",id:"1-creaci\xf3n-de-sockets",level:3},{value:"2. Setsockopt",id:"2-setsockopt",level:3},{value:"3. Vincular",id:"3-vincular",level:3},{value:"4. Escuchar",id:"4-escuchar",level:3},{value:"5. Aceptar",id:"5-aceptar",level:3},{value:"Etapas para el cliente",id:"etapas-para-el-cliente",level:2},{value:"Implementaci\xf3n TCP Server-Client en C",id:"implementaci\xf3n-tcp-server-client-en-c",level:2},{value:"Servidor TCP",id:"servidor-tcp",level:3},{value:"Cliente TCP",id:"cliente-tcp",level:3},{value:"Compilar y ejecutar",id:"compilar-y-ejecutar",level:3},{value:"Salida",id:"salida",level:3},{value:"Inicializaci\xf3n de Winsock para Windows",id:"inicializaci\xf3n-de-winsock-para-windows",level:2}],d={toc:s},u="wrapper";function p(e){let{components:a,...l}=e;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tcp-server-client-en-c"},"TCP Server-Client en C"),(0,r.kt)("h2",{id:"lenguajes-estructurados"},"Lenguajes Estructurados"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"qu\xe9-es-la-programaci\xf3n-de-sockets"},"\xbfQu\xe9 es la programaci\xf3n de sockets?"),(0,r.kt)("p",null,"La programaci\xf3n de sockets es una forma de conectar dos nodos en una red para comunicarse entre s\xed."),(0,r.kt)("p",null,"Un socket (nodo) escucha en un puerto particular en una IP, mientras que el otro socket se extiende hacia el otro para formar una conexi\xf3n."),(0,r.kt)("p",null,"El servidor forma el socket de escucha mientras el cliente se acerca al servidor."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"diagrama-de-estado-para-el-modelo-de-servidor-y-cliente"},"Diagrama de estado para el modelo de servidor y cliente"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2801).Z,width:"448",height:"609"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"etapas-para-el-servidor"},"Etapas para el servidor"),(0,r.kt)("h3",{id:"1-creaci\xf3n-de-sockets"},"1","."," Creaci\xf3n de sockets"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int sockfd = socket(dominio, tipo, protocolo)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sockfd:")," descriptor de socket, un entero (como un identificador de archivo)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dominio:")," entero, especifica el dominio de comunicaci\xf3n. Utilizamos AF","_"," LOCAL como se define en el est\xe1ndar POSIX para la comunicaci\xf3n entre procesos en el mismo host. Para la comunicaci\xf3n entre procesos en diferentes hosts conectados por IPV4, utilizamos AF","_","INET y AF","_","I NET 6 para procesos conectados por IPV6."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tipo"),": comunicaci\xf3n tipo SOCK","_","STREAM: TCP (confiable, orientado a la conexi\xf3n) SOCK","_","DGRAM: UDP (no confiable, sin conexi\xf3n)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"protocolo:")," Valor de protocolo para Protocolo de Internet (IP), que es 0. Este es el mismo n\xfamero que aparece en el campo de protocolo en el encabezado IP de un paquete.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-setsockopt"},"2","."," Setsockopt"),(0,r.kt)("p",null,'Esto ayuda a manipular las opciones para el socket referido por el descriptor de archivo sockfd. Esto es completamente opcional, pero ayuda en la reutilizaci\xf3n de la direcci\xf3n y el puerto. Evita errores como: "direcci\xf3n ya en uso".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int setsockopt(int sockfd, int level, int optname, \xa0const void ","*","optval, socklen","_","t optlen);")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3-vincular"},"3","."," Vincular"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int bind(int sockfd, const struct sockaddr ","*","addr, socklen","_","t addrlen);")),(0,r.kt)("p",null,"Despu\xe9s de la creaci\xf3n del socket, la funci\xf3n bind enlaza el socket a la direcci\xf3n y al n\xfamero de puerto especificados en addr (estructura de datos personalizada). En el c\xf3digo de ejemplo, vinculamos el servidor al localhost, por lo tanto, usamos INADDR","_","ANY para especificar la direcci\xf3n IP."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"4-escuchar"},"4","."," Escuchar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int listen(int sockfd, int backlog);")),(0,r.kt)("p",null,"Pone el socket del servidor en modo pasivo, donde espera a que el cliente se acerque al servidor para realizar una conexi\xf3n. El backlog, define la longitud m\xe1xima a la que puede crecer la cola de conexiones pendientes para sockfd. Si una solicitud de conexi\xf3n llega cuando la cola est\xe1 llena, el cliente puede recibir un error con una indicaci\xf3n de ECONNREFUSED."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5-aceptar"},"5","."," Aceptar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int new","_","socket= accept(int sockfd, struct sockaddr ","*","addr, socklen","_","t ","*","addrlen);")),(0,r.kt)("p",null,"Extrae la primera solicitud de conexi\xf3n en la cola de conexiones pendientes para el socket de escucha, sockfd, crea un nuevo socket conectado y devuelve un nuevo descriptor de archivo que hace referencia a ese socket. En este punto, la conexi\xf3n se establece entre el cliente y el servidor, y est\xe1n listos para transferir datos."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"etapas-para-el-cliente"},"Etapas para el cliente"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conexi\xf3n de socket:")," Exactamente igual que el de la creaci\xf3n del socket del servidor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conectar:")," La llamada al sistema connect() conecta el socket al que hace referencia el descriptor de archivo sockfd a la direcci\xf3n especificada por addr. La direcci\xf3n y el puerto del servidor se especifican en addr.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"int connect(int sockfd, const struct sockaddr ","*","addr, socklen","_","t addrlen);")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"implementaci\xf3n-tcp-server-client-en-c"},"Implementaci\xf3n TCP Server-Client en C"),(0,r.kt)("p",null,"El protocolo TCP utilizado por otros protocolos como HTTP, HTTPs, FTP, SMTP, Telnet."),(0,r.kt)("p",null,"TCP reorganiza los paquetes de datos en el orden especificado. Existe una garant\xeda absoluta de que los datos transferidos permanecen intactos y llegan en el mismo orden en que fueron enviados."),(0,r.kt)("p",null,"TCP realiza el control de flujo y requiere tres paquetes para configurar una conexi\xf3n de socket antes de que se puedan enviar datos de usuario."),(0,r.kt)("p",null,"TCP maneja la confiabilidad y el control de congesti\xf3n. Tambi\xe9n realiza la comprobaci\xf3n de errores y la recuperaci\xf3n de errores. Los paquetes err\xf3neos se retransmiten desde el origen al destino."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Todo el proceso se puede dividir en los siguientes pasos:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2145).Z,width:"330",height:"375"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"servidor-tcp"},"Servidor TCP"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"create(): Crear socket TCP."),(0,r.kt)("li",{parentName:"ol"},"bind(): Enlazar el socket a la direcci\xf3n del servidor."),(0,r.kt)("li",{parentName:"ol"},"listen(): dejar el socket del servidor en modo pasivo, donde espera a que el cliente se solicite al servidor establecer una conexi\xf3n"),(0,r.kt)("li",{parentName:"ol"},"accept(): en este punto, se establece la conexi\xf3n entre el cliente y el servidor, y est\xe1n listos para transferir datos."),(0,r.kt)("li",{parentName:"ol"},"volver al paso 3.")),(0,r.kt)("h3",{id:"cliente-tcp"},"Cliente TCP"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crear socket TCP."),(0,r.kt)("li",{parentName:"ol"},"Conectar el socket de cliente reci\xe9n creado al servidor.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"compilar-y-ejecutar"},"Compilar y ejecutar"),(0,r.kt)("p",null,"Lado del servidor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcc tcp_server.c -o tcp_server.exe -lws2_32\n./server\n")),(0,r.kt)("p",null,"Lado del cliente:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n gcc tcp_client.c -o tcp_client.exe -lws2_32\n")),(0,r.kt)("h3",{id:"salida"},"Salida"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Lado del servidor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Socket successfully created..\nSocket successfully binded..\nServer listening..\nserver accept the client...\nFrom client: hi\n     To client : hello\nFrom client: exit\n     To client : exit\nServer Exit... \n")),(0,r.kt)("p",null,"Lado del cliente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Socket successfully created..\nconnected to the server..\nEnter the string : hi\nFrom Server : hello\nEnter the string : exit\nFrom Server : exit\nClient Exit... \n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"inicializaci\xf3n-de-winsock-para-windows"},"Inicializaci\xf3n de Winsock para Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"WSADATA wsaData;\n")),(0,r.kt)("p",null,"Esta l\xednea declara una variable wsaData de tipo WSADATA.\nLa estructura WSADATA contiene informaci\xf3n sobre la implementaci\xf3n de la biblioteca Winsock.\nSe utiliza para almacenar detalles sobre la versi\xf3n de Winsock en uso y otra informaci\xf3n relevante."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int iResult = WSAStartup(MAKEWORD(2, 2), &wsaData);\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"La funci\xf3n WSAStartup es la primera funci\xf3n que debe ser llamada antes de utilizar cualquier otra funci\xf3n de la biblioteca Winsock en un programa de Windows."),(0,r.kt)("p",null,"La funci\xf3n inicializa la biblioteca Winsock y proporciona informaci\xf3n sobre la versi\xf3n de Winsock disponible en el sistema. WSAStartup toma dos argumentos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El primer argumento, MAKEWORD(2, 2), especifica la versi\xf3n de Winsock que el programa solicita. En este caso, estamos solicitando la versi\xf3n 2.2 de Winsock. La macro MAKEWORD toma dos valores enteros (en este caso, 2 y 2) y los combina en un solo valor de tipo WORD. La funci\xf3n WSAStartup utiliza este valor para determinar si la versi\xf3n de Winsock solicitada es compatible con la versi\xf3n instalada en el sistema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El segundo argumento, &wsaData, es un puntero a la variable wsaData de tipo WSADATA declarada previamente. La funci\xf3n WSAStartup completa la estructura WSADATA con detalles sobre la implementaci\xf3n de Winsock en el sistema."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"El valor de retorno de WSAStartup se almacena en la variable iResult. Si iResult es 0, significa que la funci\xf3n se ejecut\xf3 correctamente y la biblioteca Winsock se inicializ\xf3 con \xe9xito.\nSi iResult es diferente de 0, hubo un error al inicializar Winsock."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (iResult != 0) {\n    printf("WSAStartup failed with error: %d\\n", iResult);\n    return 1;\n}\n')),(0,r.kt)("p",null,"Esta parte del c\xf3digo verifica si iResult es diferente de 0, lo que indica un error al inicializar Winsock. Si hay un error, imprime un mensaje en la consola informando sobre el error y luego retorna 1, lo que termina la ejecuci\xf3n del programa.\nSi iResult es 0, la funci\xf3n WSAStartup se ejecut\xf3 correctamente y el programa puede continuar utilizando la biblioteca Winsock."),(0,r.kt)("hr",null))}p.isMDXComponent=!0},2145:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Socket_server-1-8350816d55722a6fe467fad45a7b980f.png"},2801:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/StatediagramforserverandclientmodelofSocketdrawio-796f269708a293c6cc305fe22428c94e.webp"}}]);