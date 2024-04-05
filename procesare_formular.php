<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = $_POST["nume"];
    $email = $_POST["email"];
    $mesaj = $_POST["mesaj"];

    $admin_email = "agroadries@gmail.com";

    $subiect = "Mesaj nou de la $nume";


    $corp = "Nume: $nume\n";
    $corp .= "Email: $email\n\n";
    $corp .= "Mesaj:\n$mesaj";

    mail($admin_email, $subiect, $corp, "From: $email");

    header("Location: pagina principala.html");
    exit();
}
