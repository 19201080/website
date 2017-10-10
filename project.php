<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>&#233tienne ndiaye - <?php echo $title?></title>
	<meta name="description" content="étienne ndiaye - interaction design - product design">
	<meta name="keywords" content="product design, interaction design">
	<meta name="author" content="étienne ndiaye">
	<meta property="og:url" content="http://www.et-nd.co/works/<?php echo basename(dirname($_SERVER['PHP_SELF'])) ?>">
	<meta property="og:title" content="étienne ndiaye - <?php echo $title?>">
	<meta property="og:type" content="website">
	<meta property="og:description" content="interaction + product design">
	<!-- <meta property="og:image" content="/thumbnails/ogimage.jpg"> -->

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/gif" href="/files/favicon.gif">
	<link href="/stylesheets/normalize.css" rel="stylesheet" type="text/css">
	<link href="/stylesheets/project.css" media="screen, projection" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Muli:300,400" rel="stylesheet">
</head>

<body>
<div class="header">
	<div class="top menu">
		<div class="backbutton"><a href="/"><noscript><</noscript></a></div>
		<div class="projecttitle title"><a href="/">&#233tienne ndiaye</a></div>
	</div>
</div>

<div class="page-wrapper">
	<div class="main-title">
		<h1><?php echo $title?></h1>
		<h3><?php echo $summary?></h3>
		<h3><?php echo $year?></h3>
	</div>
	<div class="project-container">
		<?php foreach ($content as $i){?>
			<?php if (strpos($i[1], "image") !== false) {?>
				<div class="<?php echo $i[1]?>"><img src="<?php echo $i[0]?>"/></div>
			<?php } else if (strpos($i[1], "video") !== false) {?>
				<div class="<?php echo $i[1]?>"><div class="videocontainer"><iframe src="https://player.vimeo.com/video/<?php echo $i[0]?>?api=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=CCC" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div></div>
			<?php } else if (strpos($i[1], "maintext") !== false) {?>
				<div class="<?php echo $i[1]?>"><h2><?php echo $i[0]?></h2></div>
			<?php } else if (strpos($i[1], "clear") !== false) {?>
				<div style="clear:both"></div>
			<?php } else if (strpos($i[1], "line") !== false) {?>
				<div class="<?php echo $i[1]?>"></div>
			<?php } else {?>
				<div class="<?php echo $i[1]?>"><p><?php echo $i[0]?></p></div>
			<?php }?>
		<?php }?>
	</div>
</div>

<div class="footer">
	<?php include "projectlist.php";
	for ($j = 0; $j < count($projectlist); $j++) {
		if ($projectlist[$j] == basename(dirname($_SERVER['PHP_SELF']))) {
			if ($j == 0) {?>
				<div class="nextproject empty"></div>
				<div class="prevproject"><a href="../<?php echo $projectlist[$j+1];?>/">previous project ></a></div>
			<?php } elseif ($j == (count($projectlist) - 1)) {?>
				<div class="nextproject"><a href="../<?php echo $projectlist[$j-1];?>/">< next project</a></div>
				<div class="prevproject empty"></div>
			<?php } else {?>
				<div class="nextproject"><a href="../<?php echo $projectlist[$j-1];?>/">< next project</a></div>
				<div class="prevproject"><a href="../<?php echo $projectlist[$j+1];?>/">previous project ></a></div>
			<?php }
		}
	}?>
</div>

<script type="text/javascript" src="/scripts/lib.js"></script>
<script type="text/javascript" src="/scripts/min.js"></script>
</body>
