<?php
include("connectdb2.php");
 

    $ssyl=htmlspecialchars($_POST['ssyl']);
 
    // Выполняем запрос: если пользователя с таким id ещё нет в БД, то добавляем, если есть, то обновляем запись, прибавляя одно посещение (`visits` = (`visits`+1))
    $query = 'INSERT INTO ssyly SET ssyl="'.$ssyl.'", date=now() ';
    $sql = @mysql_query($query);
	echo 'Cпасибо! Материал будет добавлен, после проверки.'
	

?>