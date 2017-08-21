<?php

$variable = ['button.html','table.html','form.html','alert.html','confirm.html','card.html','hero.html','markdown.html','editor.html','chart.html','grid.html','masonry.html','progress.html','modal.html','fonts.html','icon.html','component.html','style-guide.html','create.html','list-card.html','list-item.html','setting.html','messages.html','notifications.html','trash.html','author.html','issues.html','contribution.html','typography.html','code.html'];

$data = file_get_contents('index.html');

foreach ($variable as $key => $value) {
	// unlink($value);
	touch($value);

	$h = fopen($value, 'w');
	fwrite($h, $data);
	fclose($h);
}