export interface Course {
	name: string
	credit: number
	grade: number
}

export interface AccountInfo {
	account: string
	password: string
}


export interface Grade {
	id: string 
	year: string
	semester: string
	courseId: string
	course_name: string
	required : string
	half: string
	credit: string
	grade: string
}

