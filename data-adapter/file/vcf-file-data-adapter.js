VCFFileDataAdapter.prototype.loadFromFile = FileDataAdapter.prototype.loadFromFile;
VCFFileDataAdapter.prototype.loadFromContent = FileDataAdapter.prototype.loadFromContent;
VCFFileDataAdapter.prototype.read = FileDataAdapter.prototype.read;
VCFFileDataAdapter.prototype.getDataset = FileDataAdapter.prototype.getDataset;


function VCFFileDataAdapter(){
	FileDataAdapter.prototype.constructor.call(this);
	
	this.dataset = null;
	this.content = null;
	
	this.lines = new Array();
};

VCFFileDataAdapter.prototype.getLines = function(content){
	return this.lines;
};


VCFFileDataAdapter.prototype.parse = function(content){
	this.content = content;
	var lineBreak = content.split("\n");
	var sifFieldsString  = new Array();
	for (var i = 0; i < lineBreak.length; i++){
		var trimmed = lineBreak[i].replace(/^\s+|\s+$/g,"");
		if ((trimmed != null)&&(trimmed.length > 0)){
			var field = trimmed.replace(/\t/g,'**%**').split("**%**");
			if (field[0].substr(0,1) != "#"){
				this.lines.push(field);
			}
		}
	}
	
	
};











