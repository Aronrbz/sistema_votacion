<?php
$respuesta = array('yaVoto' => false);

$rut = $_POST['rut'];

// Conexion a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'votaciondb');

if (!$conexion->connect_error) {
    $stmt = $conexion->prepare("SELECT rut FROM voto WHERE rut = ?");
    $stmt->bind_param("s", $rut);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $respuesta['yaVoto'] = true;
    }
}

echo json_encode($respuesta);
?>
