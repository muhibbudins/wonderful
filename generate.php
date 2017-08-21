<?php

$variable = ['button.html','table.html','form.html','alert.html','card.html','hero.html','markdown.html','editor.html','chart.html','grid.html','asonry.html','progress.html','modal.html','fonts.html','icon.html','component.html','style-guide.html','create.html','list-post.html','list-card.html','list-item.html','setting.html','profile.html','messages.html','notifications.html','trash.html','author.html','isues.html','contribution.html'];

$data = file_get_contents('index.html');

foreach ($variable as $key => $value) {
	touch($value);

	$h = fopen($value, 'w');
	fwrite($h, $data);
	fclose($h);
}