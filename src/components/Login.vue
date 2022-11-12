<template>
	<n-form
	v-if="!getResult"
	ref="formRef"
	:model="user"
	:rules="rules" >
		<n-form-item label="帳號" path="account">
			<n-input v-model:value="user.account" placeholder="輸入帳號" />
		</n-form-item>
		<n-form-item label="密碼" path="password">
			<n-input v-model:value="user.password" type="password" placeholder="輸入密碼" />
		</n-form-item>
		<n-space justify="center">
			<n-button @click="handleValidateClick">
				登入
			</n-button>
		</n-space>
	</n-form>
	<template v-else>
		<n-collapse>
			<template v-for="[key,year] in scores" :key="key">
				<template v-for="[key2,semester] in year" :key="key2">
					<n-collapse-item>
						<template #header>{{key}}-{{key2}}</template>
						<n-grid cols=24 x-gap=8 w="full" >
							<n-gi span=8 >
								<n-text class="text-center">
									GPA : {{ getGPA(semester) }}
								</n-text>
							</n-gi>
							<n-gi span=8 >
								<n-text class="text-center">
									總學分: {{ getCredits(semester) }}
								</n-text>
							</n-gi>
							<n-gi span=8 >
								<n-text class="text-center">
									百分制: {{ getPercent(semester) }}
								</n-text>
							</n-gi>
						</n-grid>
						<n-table>
							<thead>
								<tr>
									<th>課程名稱</th>
									<th>學分數</th>
									<th>成績</th>
								</tr>
							</thead>
								
							<tbody>
								<tr v-for="course in semester" :key="course.id">
									<th>{{course.course_name}}</th>	
									<th>{{course.credit}}</th>	
									<th>{{course.grade}}</th>	
								</tr>
							</tbody>
						</n-table>
					</n-collapse-item>
				</template>
			</template>
		</n-collapse>
	</template>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { FormInst, useMessage, useLoadingBar } from 'naive-ui'
import { gradeVal } from "../scripts/functions"
import { scoreList } from "../data/score"
import type { AccountInfo, Grade } from "../scripts/types"
import axios from "axios"
const message = useMessage()
const loadingBar = useLoadingBar()

const formRef = ref<FormInst | null>(null)
const user = ref<AccountInfo>({
	account: "",
	password: ""
})
const rules = {
	account: {
		required: true,
		message: "請輸入帳號",
		trigger: "blur"
	},
	password: {
		required: true,
		message: "請輸入密碼",
		trigger: "blur"
	}
}
const result = ref<Grade[]>()
const scores = ref<Map<string,Map<string,Grade[]>>>(new Map())
const getResult = ref(false)
const handleValidateClick = async (e: MouseEvent) => {
	e.preventDefault()
	formRef.value?.validate((errors) => {
		if (errors) {
			message.error("請輸入帳號資訊")
		}
	})
	loadingBar.start()
	message.info("請稍等")
	let response = await axios.post("fetch", user.value);
	console.log(response)
	if(response?.data) {
		result.value = response.data	
		result.value?.forEach((course) => {
			if(!scores.value.has(course.year)){
				scores.value.set(course.year,new Map())
			}
			if(!scores.value.get(course.year)!.has(course.semester)) {
				scores.value.get(course.year)!.set(course.semester,[])
			}
			scores.value.get(course.year)!.get(course.semester)!.push(course)
		})
		console.log(scores.value)
		getResult.value = true
		loadingBar.finish()
	}
	else {
		loadingBar.error()
		message.error("出現錯誤")
	}
}

function getGPA(semester : Grade[]) {
	let grades = 0
	let credits = 0
	semester.forEach((course) => {
		grades += parseInt(course.credit) * gradeVal(course.grade)
		credits += parseInt(course.credit)
	})
	if(!credits) return "0.00" 
	return (grades / credits).toFixed(2)
}


function getCredits(semester : Grade[]) {
	let credits = 0
	semester.forEach((course) => {
		credits += parseInt(course.credit)
	})
	return credits
}

function getPercent(semester : Grade[]) {
	let grade = getGPA(semester)
	if(grade in scoreList) {
		return scoreList[grade].toFixed(2)
	}
	return "0.00"
}
</script>


