import { Column } from "./Table";

interface Point {
  x: number,
  y: number,
}

export interface WordInfo {
  id: string;
  word: string;
  translation: string;
  frequency: number;
  createdAt: Date;
  point: Point;
}

export interface UserInfo {
  name: string;
  surname: string;
  age: number;
  createdAt: Date;
}


export const words: WordInfo[] = [
  { id: "1", point: { x: 6, y: 3 }, word: "to realy", translation: "полагаться", frequency: 8, createdAt: new Date(2022, 2, 3) },
  { id: "3", point: { x: 6, y: 1 }, word: "to doubt", translation: "сомневаться", frequency: 15, createdAt: new Date(2021, 6, 23) },
  { id: "4", point: { x: 5, y: 13 }, word: "to suspect", translation: "подозревать", frequency: 5, createdAt: new Date(2022, 10, 8) },
  { id: "6", point: { x: 1, y: 3 }, word: "by the way", translation: "кстати", frequency: 11, createdAt: new Date(2021, 11, 4) },
]

export const columnsWord: Column<WordInfo>[] = [
  { title: "Word", render: w => w.word, compare: (a, b) => a.word  > b.word?-1:1, },
  { title: 'Translation', render: w => w.translation, compare: (a, b) => a.translation  > b.translation?-1:1 },
  { title: "Frequency", render: w => w.frequency.toString(), compare: (a, b) => a.frequency  > b.frequency?-1:1 },
  { title: "Point", render: w => `x: ${w.point.x}, y ${w.point.y}`, compare: (a, b) => a.point.x + a.point.y > b.point.x + b.point.y?-1:1 },
  { title: "Date", render: w => w.createdAt.getFullYear() + '.' + w.createdAt.getMonth() + '.' + w.createdAt.getDay(),  compare: (a, b) => a.createdAt  > b.createdAt?-1:1}
]

export const users: UserInfo[] = [
  { name: 'Jhon', surname: 'Jonson', age: 20, createdAt: new Date(2021, 5, 7) },
  { name: 'Alex', surname: 'Alexov', age: 30, createdAt: new Date(2022, 10, 18) },
  { name: 'Dima', surname: 'V', age: 25, createdAt: new Date(2019, 6, 9) },
  { name: 'Alice', surname: 'C', age: 18, createdAt: new Date(2022, 12, 27) },
]

