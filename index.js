panel.plugin("brandsistency/align-marks", {
	writerMarks: {
		center: {
			get button() {
				return {
					icon: "text-center",
					label: "Centre"
				}
			},

			commands() {
				return () => this.toggle()
			},

			get name() {
				return "center"
			},

			get schema() {
				return {
					parseDOM: [
						{
							tag: 'span',
							getAttrs: () => {
								return { class: 'txt-c' }
							}
						}
					],
					toDOM: () => ['span', { class: 'txt-c' }, 0]
				}
			}
		},
		right: {
			get button() {
				return {
					icon: "text-right",
					label: "Align right"
				}
			},

			commands() {
				return () => this.toggle()
			},

			get name() {
				return "right"
			},

			get schema() {
				return {
					parseDOM: [
						{
							tag: 'span',
							getAttrs: () => {
								return { class: 'txt-r' }
							}
						}
					],
					toDOM: () => ['span', { class: 'txt-r' }, 0]
				}
			}
		}
	}
});