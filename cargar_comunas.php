<?php

header('Content-Type: application/json; charset=utf-8');
include 'conexion.php';

if (isset($_GET['id_region'])) {
    $id_region = (int)$_GET['id_region'];

    $query = "SELECT id_comuna, nombre_comuna FROM comuna WHERE id_region = $id_region";
    $result = $conn->query($query);

    $comunas = [];
    while($row = $result->fetch_assoc()) {
        $comunas[] = $row;
    }

    echo json_encode($comunas);
} else {
    echo json_encode([]);
}
?>
