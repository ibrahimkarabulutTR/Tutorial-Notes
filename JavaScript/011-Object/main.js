// OBJECT

let profile = {
	id: 210235,
	name: 'İbrahim',
	surname: 'Karabulut',
	email: 'job.ibrahimkarabulut@gmail.com',
	lang: ['Html', 'CSS3', 'JavaScript', 'PHP', 'GO', 'Java']
}

console.log(profile)
console.log(profile.name)
console.log(profile['surname'])
console.log(profile.lang)
console.log(profile.lang[2])
profile.gender = "Man"
console.log(profile)
console.log(typeof profile)

let company = {
	bossName: 'Abdullah Ökmen',
	foundingDate: '10.02.2023',
	work: ['Software', 'Ads Agency', 'Social Media', 'Security'],
	employee: [
		{
			name: 'Yusuf Karabulut',
			job: 'Software Engineer'
		},
		{
			name: 'Ramazan Kalkan',
			job: 'Adverts Manager'
		},
		{
			name: 'İbrahim Yaman',
			job: 'Security Personel'
		}
	],
	printWork(){
		this.work.forEach((work, id) => {
			console.log(`${id}: ${work}`)
		})
	},
	printEmployee: () => {
		company.employee.forEach((employee, index) => {
			console.log(`${index}: ${employee.name} (Job: ${employee.job})`)
		})
	}
}
company.printWork()
company.printEmployee()