<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
<div class="container">
<?php
echo "<h1>I will help you to get random number</h1>";

$num = (int) $_POST["dicenum"];
$faces = (int) $_POST["faces"];
$count = 0;
echo "<h2>Total number of dices roller <span>$num</span></h2><br>";
echo "<h2>T otal number of faces on dice <span>$faces</span></h2>";

for ($i = 1; $i <= $num; $i++) {
    $val = rand(1, $faces);
    echo "<p>dice : $i <br>value : $val</p>";
    $count += $val;

}
echo "<h3>Total count of dice is  <span>$count</span></h3>";

?>
<a href="/randProject/index.html">Go back</a>
</div>
</body>
</html>