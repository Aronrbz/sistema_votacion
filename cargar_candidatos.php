<?php

header('Content-Type: application/json; charset=utf-8');
include 'conexion.php';

$query = "SELECT id_candidato, nombre_candidato FROM candidato";
$result = $conn->query($query);

$candidatos = [];
while($row = $result->fetch_assoc()) {
    $candidatos[] = $row;
}

echo json_encode($candidatos);
?>
