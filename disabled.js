var seep = require("seep")

exports.app = seep.Application.extend({

	start: function() {
		this._super("Toggle disabled")
		
		var layout = new seep.layout.Flow({wrap: "div.row"})
		this.add(layout)
		
		this.change_me = new seep.Input("Enabled")
		layout.add(this.change_me)
		
		this.button = new seep.Button("Disable")
		
		var handler = function(e) {
			this.change_me.disabled = !this.change_me.disabled
			this.change_me.text = this.change_me.disabled ? "Disabled" : "Enabled"
			this.button.caption.text = this.change_me.disabled ? "Enable" : "Disable"
		}
		
		this.button.addListener("click", handler, {bind: this, id: "handler"})
		
		this.toggle = new seep.Checkbox()
		this.toggle.addListener("change", function(e) {
			this.button.removeListener("handler")
			if(e.source.checked) {
				this.button.addListener("click", handler, {bind: this, id: "handler", client: true})
			} else {
				this.button.addListener("click", handler, {bind: this, id: "handler"})
			}
		}, {bind: this})
		
		layout.add(this.button)
		layout.add(this.toggle)
	}
	
})