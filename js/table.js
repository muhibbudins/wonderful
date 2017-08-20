$(document).ready(function() {
	var API_ENDPOINT = 'https://jsonplaceholder.typicode.com/',

		$postTable   = $('#table-post');

	
    $postTable.DataTable({
        "ajax": {
        	"url": API_ENDPOINT + "posts",
        	"dataSrc": ""
        },
        "columns": [
			{ "data": "id" },
			{ "data": "title" },
			{ "data": "body" },
			{ "data": "body" },
			{ "data": "body" },
			{ "data": "userId" }
        ],
        "responsive": true
    });

});