<template>
	<n-config-provider :theme="theme" h="screen">
		<n-loading-bar-provider>
			<n-dialog-provider>
				<n-notification-provider>
					<n-message-provider>
						<n-layout position="absolute">
							<Navbar />
							<n-layout-content has-sider position="absolute" style="top: 48px; bottom: 48px">
								<Calculator />
							</n-layout-content>
							<n-layout-footer w="full" h="12" p="x-8" position="absolute" borderer>
								<n-space w="full" h="full" justify="center" align="center">
									<n-text>
										Created by Lapor  
									</n-text>
									<a href="https://github.com/laporchen/gpa-calculator-v2">
										<n-icon size=20>
											<LogoGithub />
										</n-icon>
									</a>
								</n-space>
							</n-layout-footer>
						</n-layout>
					</n-message-provider>
				</n-notification-provider>
			</n-dialog-provider>
		</n-loading-bar-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue"
import store from "./scripts/vuex"
import { isDark } from "./scripts/useDark"
import { useOsTheme } from "naive-ui"
import { darkTheme } from "naive-ui"
import { LogoGithub } from "@vicons/ionicons5"
import Calculator from "./components/Calculator.vue"
import Navbar from "./components/Navbar.vue"


if (store.state.isDark == null) {
	isDark.value = useOsTheme().value === "dark"
	store.dispatch("isDark", isDark.value)
} else {
	isDark.value = store.state.isDark
}

const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<style scoped>
</style>
