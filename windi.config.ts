import { defineConfig } from "windicss/helpers"
import AspectRatio from "windicss/plugin/aspect-ratio"
import Filters from "windicss/plugin/filters"
import Forms from "windicss/plugin/forms"
import LineClamp from "windicss/plugin/line-clamp"
import SrollSnap from "windicss/plugin/scroll-snap"
import Typography from "windicss/plugin/typography"

export default defineConfig({
	darkMode: "class",
	attributify: true,
	plugins: [AspectRatio, Filters, Forms, LineClamp, SrollSnap, Typography],
	theme: {
		extend: {
			colors: {
				viceGreen: "#34d399",
				viceBlue: "#3b82f6",
			},
		},
	},
})

