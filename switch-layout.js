var seep = require("seep")

exports.app = seep.Application.extend({

	start: function() {
		this.setName("Swith a component from layout to layout")
		
		this.l1 = new seep.layout.Flow()
		this.l1.height = "1.5em"
		this.l2 = new seep.layout.Flow()
		this.l2.height = "1.5em"
		
		this.add(this.l1)
		this.add(this.l2)
		
		this.l1.add(new seep.Text("Move me"))
		
		var move = new seep.Button("Move It!")
		move.addListener("click", function(e) {
			var move = this.l1.remove(0)
			this.l2.add(move)
			move.repaint(true)
			e.source.disabled = true
		}, {bind: this})
		
		this.add(move)
	}
	
})