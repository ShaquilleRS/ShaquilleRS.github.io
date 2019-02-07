<?php
//Bezoekergegevens uit de formulier halen
$bezoekerid = NULL; //komt niet uit het formulier (autoincrement)
$voornaam   = $_POST["voornaam"];
$achternaam = $_POST["achternaam"];
$email      = $_POST["email"];
$reactie    = $_POST["reactie"];

//Bezoekergegevens invoeren in de tabel
require_once "connect.php";

$sql = $conn->prepare("insert into bezoeker values (:bezoekerid, :voornaam, :achternaam, :email, :reactie)");

$sql->execute([
    "bezoekerid"    => $bezoekerid,
    "voornaam"      => $voornaam,
    "achternaam"    => $achternaam,
    "email"         => $email,
    "reactie"       => $reactie
]);
echo "De bezoeker is toegevoegd";