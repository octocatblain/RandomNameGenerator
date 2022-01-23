 const app = Vue.createApp({
     data() {
         return{
             firstName: 'Blain',
             lastName: 'Muema',
             email: 'parallelblain@gmail.com',
             gender: 'male',
             picture: 'https://randomuser.me/api/portraits/men/53.jpg',
             cell: '(07) 0689-0589',
             age: '22',
             city: 'Nairobi City',
             country: 'Kenya',
         }
     },
     methods: {
         async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            
            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.cell = results[0].cell
            this.age = results[0].dob.age
            this.location = results[0].location.city
            this.country =  results[0].location.country
         },
     },
 })

 app.mount('#app')