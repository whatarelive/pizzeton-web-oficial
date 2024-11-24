import { defineDb, defineTable, column } from 'astro:db';

const Opinions = defineTable({
  columns: {
    idOpinion: column.text({ primary: true, type: 'varchar', unique: true }),
    date: column.date(),
    userName: column.text(),
    userPhone: column.text(),
    valoration: column.number(),
    opinion: column.text()
  }
})

export default defineDb({
  tables: { Opinions }
});
