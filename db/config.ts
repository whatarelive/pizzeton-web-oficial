import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primary: true, type: 'varchar', unique: true }),
    name: column.text(),
    phone: column.number(),
  }
})

const Opinions = defineTable({
  columns: {
    idOpinion: column.number({ primary: true, type: 'varchar', unique: true }),
    userId: column.number({ references: () => User.columns.id }),
    opinion: column.text()
  }
})

export default defineDb({
  tables: { User, Opinions }
});
