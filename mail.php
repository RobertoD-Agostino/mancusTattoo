<?php
if(isset($_POST['send'])) {
    $to = 'mancustattooemail@gmail.com'; // Inserisci qui l'indirizzo email del destinatario
    $subject = 'Nuovo messaggio dal modulo di contatto';

    // Recupera i dati dal modulo
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $allergie = $_POST['allergie'];
    $textArea = $_POST['textArea'];
    $budget = $_POST['budget'];
    $city = $_POST['city'];
    $appointment = $_POST['appointment'];

    // Informazioni sull'email
    $headers = "From: $userName <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    // Creazione del corpo dell'email
    $message = "--boundary\r\n";
    $message .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= "Nome completo: $userName\r\n";
    $message .= "Indirizzo email: $email\r\n";
    $message .= "Età: $age\r\n";
    $message .= "Allergie: $allergie\r\n";
    $message .= "Descrizione idea: $textArea\r\n";
    $message .= "Range del budget: $budget\r\n";
    $message .= "Città per fare il tatuaggio: $city\r\n";
    $message .= "Data desiderata: $appointment\r\n\r\n";

    // Gestione dei file caricati
    $attachments = [];

    if(isset($_FILES['primaImg']) && $_FILES['primaImg']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['primaImg']['tmp_name'];
        $fileName = $_FILES['primaImg']['name'];
        $fileSize = $_FILES['primaImg']['size'];
        $fileType = $_FILES['primaImg']['type'];

        // Leggi il contenuto del file
        $fileContent = file_get_contents($fileTmpPath);

        // Aggiungi il file come allegato
        $message .= "--boundary\r\n";
        $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
        $message .= chunk_split(base64_encode($fileContent)) . "\r\n";

        // Aggiungi il file alla lista degli allegati
        $attachments[] = [
            'content' => $fileContent,
            'name' => $fileName,
            'type' => $fileType
        ];
    }

    if(isset($_FILES['secondaImg']) && $_FILES['secondaImg']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['secondaImg']['tmp_name'];
        $fileName = $_FILES['secondaImg']['name'];
        $fileSize = $_FILES['secondaImg']['size'];
        $fileType = $_FILES['secondaImg']['type'];

        // Leggi il contenuto del file
        $fileContent = file_get_contents($fileTmpPath);

        // Aggiungi il file come allegato
        $message .= "--boundary\r\n";
        $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
        $message .= chunk_split(base64_encode($fileContent)) . "\r\n";

        // Aggiungi il file alla lista degli allegati
        $attachments[] = [
            'content' => $fileContent,
            'name' => $fileName,
            'type' => $fileType
        ];
    }

    $message .= "--boundary--";

    // Invia l'email
    if(count($attachments) > 0) {
        // Utilizza la funzione mail() di PHP per inviare l'email con allegati
        $success = mail($to, $subject, $message, $headers);

        // Rimuovi i file temporanei dopo l'invio dell'email
        foreach($attachments as $attachment) {
            unlink($attachment['tmp_name']);
        }
    } else {
        // Utilizza la funzione mail() di PHP per inviare l'email senza allegati
        $success = mail($to, $subject, $message, $headers);
    }

    // Verifica se l'email è stata inviata con successo
    if($success) {
        echo "Email inviata con successo!";
    } else {
        echo "Si è verificato un errore durante l'invio dell'email.";
    }
}





?>
