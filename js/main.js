var forIform = function(data){
   alert("here is your data "+data);
};
$(document).ready(function(){
    var iform=$('#Form'),
        fperrorslink = $('#fperrorslink');
    
    iform.validate({
        invalidHandler: function(form, validator){
            fperrorslink.click();
            var html = '';
            for (var key in validator.submitted){
                var label=$('label[for^="'+key+'"]').not('[generated]');
                var legend=label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldname +'</li>';
            };
            $("#formpageerrors ul").html(html);
        },
        submitHandler: function(){
            var data = iform.serializeArray();
            alert("form submitted");
            forIForm(data);
        }
    });
});




		
		$( '#json' ).live( 'click',
			function(event){
			$(loadJSON());
		  	
			}
		
		);
		
		$( '#xml' ).live( 'click',
			function(event){
			$(loadXML());
		  	
			}
		
		);
		
		$( '#csv' ).live( 'click',
			function(event){
			$(loadCSV());
		  	
			}
		
		);
   







function clearLocal() {
	localStorage.clear(); 
	location.reload(true);
} 






function loadJSON(){
	
	var jData = 1;
	$.ajax({
		url: 'jsonwork.js',
		type: 'GET',
		dataType: 'json',
		success: function(data){
		
		$('.submissions').append('<div class="topJSON"></div>');
		
		$('.topJSON').append('<h2>JSON Data</h2>');
		
		
			$.each(data.items, function(){
				
				var itJdata = "json" + jData;
				
    			
				
				var entry = this;
				$('.topJSON').append('<div class=' + itJdata + ' id=\"inputDiv\"></div>');
				
			  $('.' + itJdata).append('<label id="label">Category: </label> <p>' + entry.workOut + '</p>'
    			+ '<label id="label">Workout: </label> <p>' + entry.wkName +
    			 '</p>' + '<label id="label">Reps: </label> <p>' + entry.reps + 
    			 '</p>' + '<label id="label">Favorite: </label> <p>' + entry.favorite + 
    			 '</p>' + '<label id="label">: </label> <p>' + entry.notes + '</p>');
    			jData++;
    			
		})}

	})
};




	
	
function loadXML(){	
	var xmlData = 1;
	$.ajax({
		url: 'xmlwork.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(data){
		
		$('.submissions').append('<div class="topXML"></div>');
		
		$('.topXML').append('<h2>XML Data</h2>');
		
			$(data).find("item").each(function(){
				
				var itXmlData = "xml" + xmlData;
				
    			
								var entry = this;
				$('.topXML').append('<div class=' + itXmlData + ' id=\"inputDiv\"></div>');
				
			  $('.' + itXmlData).append('<label id="label">Category: </label> <p>' + $(entry).find("workOut").text() + '</p>'
    			+ '<label id="label">Workout: </label> <p>' + $(entry).find("wkName").text() + '</p>' +
    			 '<label id="label">Reps: </label> <p>' + $(entry).find("reps").text() + '</p>' +
    			  '<label id="label">Favorite: </label> <p>' + $(entry).find("favorite").text() + '</p>' + 
    			  '<label id="label">: </label> <p>' + $(entry).find("notes").text() + '</p>');
    			xmlData++;
    			
		})}

	})	
};	
	
	function loadCSV(){	
	var csvData = 1;
	$.ajax({
		url: 'csvwork.csv',
		type: 'GET',
		data: null,
		success: function(data){
		
		$('.submissions').append('<div class="topCSV"></div>');
		
		$('.topCSV').append('<h2>CSV Data</h2>');
		
		
		var lines = data.split('\n');

		for (var lineNum = 0; lineNum < lines.length; lineNum++) {
			
			var itCsvData = "csv" + csvData;
		    
		    var row = lines[lineNum];
		    var columns = row.split(",");
		    
		    var labels = [
		    	"Category: ",
		    	"Workout: ",
		    	"Reps: ",
		    	"Favorite: ",
		    	": "
		    ]
		    $('.topCSV').append('<div class=' + itCsvData + ' id=\"inputDiv\"></div>');
		    		    for (var entry in columns ){
		    
		    $('.' + itCsvData).append('<label id="label">' + labels[entry] +'</label> <p>' + columns[entry] + '</p>');
			    }
			csvData++;    
		} 
		
		
		}

	})	
};




