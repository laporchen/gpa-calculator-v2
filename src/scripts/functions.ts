export function gradeVal(grade : string) {
	if(grade == "A+") return 4.3;
	if(grade == "A") return 4.0;
	if(grade == "A-") return 3.7;
	if(grade == "B+") return 3.3;
	if(grade == "B") return 3.0;
	if(grade == "B-") return 2.7;
	if(grade == "C+") return 2.3;
	if(grade == "C") return 2.0;
	if(grade == "C-") return 1.7;
	if(grade == "D") return 1.0;
	if(grade == "E") return 0;
	if(grade == "X") return 0;
	return 0;
}
