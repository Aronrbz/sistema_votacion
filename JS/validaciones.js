var Fn = { // Objeto para funciones relacionadas con el RUT
    validaRut: function (rutCompleto) { // Función que valida si un RUT es correcto
        rutCompleto = rutCompleto.replace("‐", "-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) { // Función que calcula el dígito verificador de un RUT
        var M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
};

function showError(inputId, message) { // Función para mostrar un mensaje de error
    $("#" + inputId + "Error").text(message).css("color", "red");
}

function clearError(inputId) { // Función para limpiar el mensaje de error
    $("#" + inputId + "Error").text("");
}

function validateCheckboxSelection() { // Función para validar que al menos dos checkboxes estén seleccionados
    let checkboxes = $("input[name='fuente[]']:checked");
    if (checkboxes.length < 2) {
        showError("fuente",
            "Debes seleccionar al menos dos opciones");
        return false;
    } else {
        clearError("fuente");
        return true;
    }
}

$(document).ready(function () { // Función que se ejecuta cuando el DOM está listo
    $.ajax({ // Llamada AJAX para cargar las regiones
        url: '/sistema_votacion/PHP/cargar_regiones.php',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#region').append($('<option>', {
                value: "",
                text: ""
            }));
            data.forEach(function (region) {
                $('#region').append($('<option>', {
                    value: region.id_region,
                    text: region.nombre_region
                }));
            });
        }
    });

    $.ajax({ // Llamada AJAX para cargar los candidatos
        url: '/sistema_votacion/PHP/cargar_candidatos.php',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#candidato').append($('<option>', {
                value: "",
                text: ""
            }));
            data.forEach(function (candidato) {
                $('#candidato').append($('<option>', {
                    value: candidato.id_candidato,
                    text: candidato.nombre_candidato
                }));
            });
        }
    });

    $('#region').on('change', function () {// Evento que se dispara al cambiar la región seleccionada
        var id_region = $(this).val();
        $('#comuna').empty();
        $.ajax({
            url: '/sistema_votacion/PHP/cargar_comunas.php',
            method: 'GET',
            dataType: 'json',
            data: {
                id_region: id_region
            },
            success: function (data) {
                $('#comuna').append($('<option>', {
                    value: "",
                    text: ""
                }));
                data.forEach(function (comuna) {
                    $('#comuna').append($('<option>', {
                        value: comuna.id_comuna,
                        text: comuna.nombre_comuna
                    }));
                });
            }
        });
    });

    $('#rut').blur(function () {
        var rut = $(this).val();
        if (!Fn.validaRut(rut)) {
            showError("rut", "El RUT no es válido");
        } else {
            $.ajax({
                url: '/sistema_votacion/PHP/validar_rut.php',
                method: 'POST',
                dataType: 'json',
                data: { rut: rut },
                success: function (response) {
                    if (response.yaVoto) {
                        showError("rut", "Este RUT ya ha votado.");
                    } else {
                        clearError("rut");
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // acá podemos manejar otro tipo de errores
                }
            });
        }
    });


    $('#formVotacion').submit(function (event) { // Evento que se dispara al enviar el formulario
        let validForm = true;

        var rut = $('#rut').val();
        if (!Fn.validaRut(rut)) {
            showError("rut", "El RUT no es válido");
            validForm = false;
        }

        var alias = $("#alias").val();
        var aliasPattern = /^(?=.*[A-Za-z])(?=.*[0-9]).{5,}$/;
        if (!aliasPattern.test(alias)) {
            showError("alias", "Tu alias debe tener al menos 5 caracteres. Debe contener letras y números.");
            validForm = false;
        } else {
            clearError("alias");
        }


        ["nombreApellido", "email", "region", "comuna", "candidato"].forEach(field => {
            let fieldValue = $("#" + field).val();
            if (!fieldValue) {
                showError(field, "Este campo está vacío");
                validForm = false;
            } else {
                clearError(field);
            }
        });

        if (!validateCheckboxSelection()) {
            validForm = false;
        }

        if (!validForm) {
            event.preventDefault();
        }
    });
});

