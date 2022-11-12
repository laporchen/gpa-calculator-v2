<template>
	<n-layout-header w="full" h="12" p="x-8"  bordered>
		<n-grid :cols=12 w="full" item-responsive>
			<n-gi span="0:10 400:8">
				<n-space w="full">
					<n-h1>
						師大GPA計算機
					</n-h1>
				</n-space>
			</n-gi>
			<n-gi span="0:2 400:4">
				<n-space w="full" h="12" align="center" justify="end">
					<n-button class="w-12" @click="changeTheme">
						<n-icon v-if="store.state.isDark" size="20">
							<Moon />
						</n-icon>
						<n-icon v-else>
							<Sunny />
						</n-icon>
					</n-button>
				</n-space>
			</n-gi>
		</n-grid>
	</n-layout-header>

</template>

<script lang="ts" setup>
import { Moon, Sunny } from "@vicons/ionicons5"
import store from "../scripts/vuex"
import { toggleDark } from "../scripts/useDark"

const changeTheme = () => {
	toggleDark()
	store.dispatch("isDark",!store.state.isDark)	
}

</script>

<style scoped>
</style>
