const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Hamilton Ribeiro",
        avatar: "https://avatars1.githubusercontent.com/u/36341001?s=460&u=1935bcd93a65998595979029b26aa40c894898ec&v=4",
        whatsapp: "11 91234-5678",
        bio: "Entusiasta em alimentos fermentados (Chucrutes e Beat Kvass)."
    }

    classValue = {
        subject: 1,
        cost: "24"
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

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classe de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
          FROM proffys
          JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 08h às 18hs
    // o horário do time_from (08h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
          FROM class_schedule
         WHERE class_schedule.class_id = 1
           AND class_schedule.weekday = "0"
           AND class_schedule.time_from <= "520"
           AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})