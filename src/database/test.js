const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name:"Hamilton Ribeiro",
        avatar:"https://avatars1.githubusercontent.com/u/36341001?s=460&u=1935bcd93a65998595979029b26aa40c894898ec&v=4",
        whatsapp:"11 91234-5678",
        bio:"Entusiasta em alimentos fermentados (Chucrutes e Beat Kvass)."
    }

    classValue = {
        subject:"Química",
        cost:"24"
        // o proffy_id virá pelo banco de dados AUTO INCREMENTAL
    }

    classScheduleValues = [
        // o class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // Consultar os dados inseridos
})