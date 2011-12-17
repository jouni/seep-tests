var seep = require("seep")

exports.app = seep.Application.extend({

	start: function() {
		this.setName("Add & remove widgets from a layout")
		
		this.layout = new seep.layout.Flow({wrap: "div.row"})
		this.add(this.layout)
		
		var swap = new seep.Button("Swap")
		swap.addListener("click", function() {
			if(this.layout.count() > 4) {
				var fifth = this.layout.remove(4)
				this.layout.add(fifth, {index: 3})
			}
		}, {bind: this})
		this.layout.add(swap)
		swap.tooltip = "Swap the 4th and 5th components together"
		swap.width = "8em"
		
		var add = new seep.Button("Add");
		add.addListener("click", function() {
			this.layout.add(new seep.Text("Widget #" + (this.layout.count()+1)))
			this.remove.disabled = false
		}, {bind: this})
		this.layout.add(add)
		add.tooltip = "Add new text component to the end of this layout"
		add.width = "8em"
		add.focus()
		
		this.remove = new seep.Button("Remove");
		this.remove.addListener("click", function() {
			if(this.layout.count() > 3)
				this.layout.remove(this.layout.count()-1, {animate: true})
			if(this.layout.count()==3)
				this.remove.disabled = true
		}, {bind: this})
		this.layout.add(this.remove)
		
		this.remove.disabled = true
		this.remove.tooltip = "Remove the last text from this layout"
		this.remove.width = "8em"
	}
	
})