<html>
<head>
<style>
input[type=text] {
   width: 500px;
}
</style>
</head>
<body>

<h1>Inner XML Parsing Tool Talroo</h1>
<form action="" method="POST">
    <span>URL:</span><input name="url" type="text" />
    <input type="submit" value="Submit Form" />
</form>
<?php
// $url = "https://account.webspidermount.com/download/post/MzU0MDIxNzcyMjM=/";
$url = $_POST['url'];
$xml = simplexml_load_file($url) or die("feed not loading");;
print_r($xml);
?>
<script>
</script>


</body>
</html>
