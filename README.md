# sistema_votacion
Sistema para recopilar y procesar votos de usuarios.

Requisitos técnicos recomendados para ejecutar el proyecto "Sistema de Votación"

Sistema Operativo:

    Windows 10

Hardware:

    Procesador (CPU): Intel i3 de 6ª generación o equivalente AMD
    Memoria RAM: 8 GB o más
    Espacio en disco: Al menos 20 GB disponibles (para alojar XAMPP, bases de datos, y demás herramientas)

Software:

    Visual Studio Code: Versión 1.83.1 o superior
        Descargar desde: https://code.visualstudio.com/
    MySQL Workbench: Versión 8.0 o superior
        Descargar desde: https://dev.mysql.com/downloads/workbench/
    XAMPP: Versión 8.2.4 o superior
        Descargar desde: https://www.apachefriends.org/download.html
    Navegadores Web compatibles:
        Mozilla Firefox (última versión estable)
        Google Chrome (última versión estable)
        Microsoft Edge (última versión estable)

    Git: Version 2.42.
        Descargar desde: https://git-scm.com/download/win

Conectividad:
    Conexión a Internet estable para la clonación del repositorio desde GitHub y para cualquier posible actualización de las herramientas.

Instrucciones de Instalación:

    Asegúrese de tener instalado el sistema operativo Windows 10 y de contar con los requisitos de hardware mencionados.
    Instale Visual Studio Code, MySQL Workbench, XAMPP y Git siguiendo las instrucciones de instalación estándar para Windows 10 (idealmente siguiente a todo)
    Primero vamos a interactuar con Xampp. Siga las instrucciones que daremos a continuación o puede apoyarse en el siguiente video (https://www.youtube.com/watch?v=6cRolPAXA2c&t=176s)

Una vez instalado Xampp, de la forma recomendada para Windows (solo siguiente, idioma inglés y otorgar los permisos necesarios por parte del administrador) abra el aplicativo Xampp y active las casillas “Apache” y “MySQL” como aparecen en la siguiente imagen:

   ![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/456ae80f-1c22-4001-a370-9e1ebbe0a9df) ![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/31cad434-2233-4470-9d78-4debdde40895)



    Vamos a minimizar Xampp por unos momentos ya que no necesitamos otra interacción por ahora y procederemos a continuar con otro paso.

Segundo vamos a interactuar con MySQL Workbench. Siga las instrucciones a continuación o puede apoyarse en el siguiente video (https://www.youtube.com/watch?v=Pj5C7rkGrtc).



    Una vez instalado MySQL Workbench de la forma recomendada para Windows (solo siguiente y otorgar los permisos necesarios por parte del administrador) Abra la herramienta instalada “MySQL Workbench” y usted vera un panel de la siguiente forma

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/d3bff291-cb7b-4e8f-844a-c88b3d5670d9)


    Presione el símbolo “+” al costado derecho de “MySQL Connections” y verá la siguiente ventana

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/2a7bfd92-6fe6-47e7-ac98-d3b0a44a082e)


    En el input “connection name” escriba el nombre votaciondb, el resto de los campos debe dejarlos por defecto. Antes de presionar el botón “ok” presione el botón “test connection”. Es muy probable que no tenga ninguna incidencia si otorgó los permisos previos de instalación y además, tenía habilitado el botón MySQL en Xampp, como se solicitó en el paso anterior. Si la test connection arroja un mensaje

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/8f30b518-4d40-4bac-b533-1740a96b7566)


Entonces podemos continuar al siguiente paso. Por ahora vamos también a minimizar MySQl workbench.

    Tercero, clone el repositorio de GitHub en su máquina local.  Para ello vamos a ir a abrir algún navegador previamente instalado, y vamos a buscar en la barra de búsqueda el repositorio https://github.com/Aronrbz/sistema_votacion/tree/main . Vamos al apartado “<> code”. Presionando en el apartado “<> code”, veremos una interfaz similar a esta:

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/a63efa3f-1c97-4880-8242-af83e60ba72b)

 
Nota: Asegúrese de tener una conexión a Internet estable para cualquier actualización o clonación necesaria.
presionaremos ambos cuadros para copiar el link del repositorio o, copiaremos toda la ruta que esta en el recuadro verde. Ahora que ya tenemos el link copiado para clonar el repositorio, necesitamos descargarlo en un directorio, idealmente en la siguiente ruta sugerida: "C:\xampp\htdocs". Si instamos xampp de la forma sugerida, deberíamos tener un directorio de esta forma:

 ![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/d3d193ce-2c0c-4eb1-808b-626db51337ae)


    Moveremos el cursor del mouse dentro del directorio y haremos click derecho para abrir un git bash. Recodar que git es una herramienta necesaria y previamente solicitada.

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/0ed64cba-b998-408e-855a-aa05b959edd6)


Al hacer esto, podrá visualizar una consola así:

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/72f2ba23-78cd-408c-a0d6-31f5593bffd3)
 

    En la consola, escriba el siguiente comando de git: git clone “acá debe pegar el repositorio previamente copiado”. Luego presione Enter y el repositorio ya estará clonado.
 
![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/7f1ea082-603e-4524-9b1f-861827d294a4)

 
    Posteriormente, en otra línea de comando escriba el comando: cd sistema_votacion/  y luego presione enter. Esto nos permitirá cambiarnos de directorio y estar dentro de main.

NOTA:  es probable que necesite estar autenticado con una cuenta de github. Para ello puede crear una muy rápida y fácilmente en https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home

    Como último paso con git, simplemente en una tercera línea de comando ejecute el comando: “code .” (code espacio punto [todo junto]) esto abrirá visual studio code (recordar que VSCode es una herramienta necesaria y previamente solicitada). Al realizar este paso usted vera en pantalla lo siguiente.

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/61fae510-c63a-4555-b49a-e6536b524084)


"En este apartado usted ya puede inspeccionar el código y sus respectivos comentarios."

    Abra el directorio SQL y luego el archivo scriptSQL.sql. una vez abierto, cópielo completo y volveremos a utilizar MySQL workbench para configurar la base de datos: 


Paso 1: Abre MySQL Workbench.

Paso 2: En la pantalla de inicio, deberías ver una lista de conexiones existentes o un botón para crear una nueva conexión. Si ya tienes una conexión configurada (por ejemplo, para localhost si estás usando XAMPP), haz clic en ella. Si no, crea una nueva conexión proporcionando los detalles necesarios (nombre de host, usuario, contraseña, etc.). Por defecto, si estás usando XAMPP, el usuario es root sin contraseña.
(recordar que la creación y test lo vimos más arriba)
Paso 3: Una vez conectado, deberías estar en la interfaz principal de MySQL Workbench.
Paso 4: Crear una nueva base de datos: 
En la barra de herramientas superior, encuentra y haz clic en el icono que parece un cilindro con un signo +, esto es para crear una nueva base de datos.

Paso 5: Dale un nombre a tu base de datos, en este caso votaciondb, y haz clic en Apply.

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/b5bd661b-e180-4c82-80e6-c30210904a16)


Para ir finalizando, pegue el scriptSQL.sql completo en la hoja de trabajo de MySQL workbench

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/b4905819-8e71-48b4-a605-501a6ccb96b2)



    Vaya seleccionando script por script y presione el rayo que está en la parte superior. Cada script empieza donde está la palabra “CREATE” o “INSERT” y finaliza donde hay un punto y coma ";"

    Además al lado izquierdo de cada script, la aplicación MySQL workbench le indica el largo de cada script para que lo pueda seleccionar y luego ejecutar.

![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/9c30a0d9-2b8c-4ff5-9086-ef1442fae6ad)  ![imagen](https://github.com/Aronrbz/sistema_votacion/assets/101678799/bcea47ad-8a7e-4a93-8f7d-781d70163e71)

   

    Puede visualizar las tablas y el poblado al costado izquierdo presionando la base de datos votaciondb y luego “tables” al costado derecho de cada tabla hay un botón que parece un cuadro, al pincharlo podemos visualizar los datos insertos.


Y como paso final, utilice uno de los navegadores web recomendados para visualizar y probar el proyecto. En la barra del navegador escriba http://localhost/sistema_votacion/HTML y podrá verificar que cumple con todas las condiciones solicitadas. Puede volver a Mysql workbench y refrescar información para verificar que los datos son insertados en la tabla “voto” y que dos rut no pueden volver a votar porque ya están registrados. Ningún campo puede quedar en blanco, se deben escoger dos checkbox, el alias debe tener como mínimo 5 caracteres y al menos un número, la casilla email, tiene condición de correo y el rut, tiene una función que valida si el rut es valido y ficticio, si es valido podrá votar, de lo contrario, si al menos una condición no se cumple, el voto no se guardará en la base de datos.

"Agradezco a Desis por la oportunidad de darme este genial desafío y prueba técnica que me mantuvo bastante entretenido. Espero poder cumplir con el perfil solicitado y con gusto espero ser escogido para trabajar con ustedes."

Aron
