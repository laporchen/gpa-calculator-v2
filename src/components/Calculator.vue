<template>
	<n-layout-content>
		<div class="justify-center pt-4 mx-auto md:w-2/3 h-full max-w-11/12 lg:w-screen-md">
			<n-card class="min-h-11/12">
				<n-tabs type="line" animated default-value="show">
					<n-tab-pane display-directive="show" name="manual" tab="手動輸入">
						<ManualInput />
					</n-tab-pane>
					<n-tab-pane display-directive="show" name="login" tab="登入校務帳號">
						<Login />
					</n-tab-pane>
				</n-tabs>
			</n-card>
		</div>
	</n-layout-content>
</template>

<script setup lang="ts">
import ManualInput from "./ManualInput.vue"
import Login from "./Login.vue"

</script>

<style scoped>
</style>
