module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    // Inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // Inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    // Inserir daados na tabela class_Schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                weekday,
                time_from,
                time_to,
                class_id
            ) VALUES (
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}",
                "${class_id}"
            );
        `)
    })

    // aqui vou executar todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}