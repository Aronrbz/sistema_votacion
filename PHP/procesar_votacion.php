<?php

include '/sistema_votacion/PHP/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreApellido = $_POST["nombreApellido"];
    $alias = $_POST["alias"];
    $rut = $_POST["rut"];
    $email = $_POST["email"];
    $regionId = (int)$_POST["region"];
    $comunaId = (int)$_POST["comuna"];
    $candidatoId = (int)$_POST["candidato"];
    
    // Aquí es donde se integrará el manejo de las fuentes
    $fuentes = $_POST["fuente"]; // Esto dará un array con las opciones seleccionadas.
    $fuente1 = isset($fuentes[0]) ? $fuentes[0] : null;
    $fuente2 = isset($fuentes[1]) ? $fuentes[1] : null;

    // Validar duplicación de votos por RUT
    $rutQuery = "SELECT rut FROM voto WHERE rut = '$rut'";
    $rutResult = $conn->query($rutQuery);

    if($rutResult->num_rows > 0) {
        echo "Ya has votado con este RUT.";
        $conn->close();
        exit; // Salir del script para no continuar con el proceso de inserción
    }

    // Insertar la información del formulario en la tabla 'voto'
    $sql = "INSERT INTO voto (nombre_apellido, alias, rut, email, id_region, id_comuna, id_candidato, como_se_entero_1, como_se_entero_2) 
    VALUES ('$nombreApellido', '$alias', '$rut', '$email', $regionId, $comunaId, $candidatoId, '$fuente1', '$fuente2')";

    if ($conn->query($sql) === TRUE) {
        echo "Voto registrado con éxito.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
}

?>
