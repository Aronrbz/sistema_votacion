<?php

header('Content-Type: application/json; charset=utf-8');
include 'conexion.php';

$query = "SELECT id_region, nombre_region FROM region";
$result = $conn->query($query);

// Insertamos la comprobacion
if (!$result) {
    die("Error en la consulta: " . $conn->error);
}

$regiones = [];
while($row = $result->fetch_assoc()) {
    $regiones[] = $row;
}

echo json_encode($regiones);
?>
