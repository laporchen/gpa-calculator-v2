<template>
		<n-grid cols=24 x-gap=8 w="full" >
			<n-gi span=8 >
				<n-text class="text-center">
					GPA : {{ gpa }}
				</n-text>
			</n-gi>
			<n-gi span=8 >
				<n-text class="text-center">
					總學分: {{ credits }}
				</n-text>
			</n-gi>
			<n-gi span=8 >
				<n-text class="text-center">
					百分制: {{ percent }}
				</n-text>
			</n-gi>
		</n-grid>
		<n-dynamic-input 
			v-model:value="courses"
			:onCreate="createCourse"
		>
		<template #default="{ value }">
			<n-space vertical>
				<n-space vertical align="center" w="full">
					<n-grid cols=24 x-gap=8 w="full" item-responsive>
						<n-gi span="0:10 400:14">
							<n-input v-model:value="value.name" placeholder="科目名稱" />
						</n-gi>
						<n-gi span="0:6 400:5">
							<n-input-number :show-button="false" v-model:value="value.credit" placeholder="學分數" :min=0 />
						</n-gi>
						<n-gi span="0:8 400:5">
							<n-select v-model:value="value.grade" :options="gradeOption"/>
						</n-gi>
					</n-grid>
				</n-space>
			</n-space>
		</template>
		</n-dynamic-input>
</template>

<script setup lang="ts">
import { ref,computed } from "vue"
import type { Course } from "../scripts/types"
import { scoreList } from "../data/score"


const gpa = computed(() => {
	if(credits.value == 0) return "0.00"
	let cur = 0
	courses.value.forEach(el => cur += el.grade * el.credit)
	return (cur / credits.value).toFixed(2)
})

const credits = computed(() => {
	let cur = 0
	courses.value.forEach(el => cur += el.credit)
	return cur
})

const percent = computed(() => {
	if(gpa.value in scoreList) {
		return scoreList[gpa.value]
	}
	return "0.00"
})

const courses = ref<Course[]>([])

const createCourse = () => {
	return {
		name: "",
		credit: 0,
		grade: 0
	} as Course
}



const gradeOption = [
	{
		label: "A+",
		value: 4.3
	},
	{
		label: "A",
		value: 4.0
	},
	{
		label: "A-",
		value: 3.7
	},
	{
		label: "B+",
		value: 3.3
	},
	{
		label: "B",
		value: 3.0
	},
	{
		label: "B-",
		value: 2.7
	},
	{
		label: "C+",
		value: 2.3
	},
	{
		label: "C",
		value: 2.0
	},
	{
		label: "C-",
		value: 1.7
	},
	{
		label: "D",
		value: 1.0
	},
	{
		label: "E/X",
		value: 0
	},
]
</script>

<style scoped>
</style>
