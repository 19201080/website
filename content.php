<?php include "projectlist.php";?>

<div class="content">
	<?php foreach ($projectlist as $p => $n) {
		include "works/" . $n . "/index.php";?>

		<div class="project"><a href="works/<?php echo $n;?>/">
			<div class="thumb" style="background-image: url('/works/<?php echo $n;?>/thumb.jpg')"></div>
			<div class="title"><?php echo $title?></div>
			<div class="year"><?php echo $year;?></div>
		</a></div>
	<?php }?>
</div>