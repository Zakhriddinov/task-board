import { IBoard } from "../interface/board";
import img from "../assets/image.png";

export const ApiMockResponse: IBoard[] = [
  {
    id: 1,
    title: "Новые",
    cards: [
      {
        id: 1,
        title: "UI/UX дизайнер",
        description: "Отдел разработки мобильного...",
        mark: "В приоритете",
        markType: "purple",
        users: 3,
        fileDescription: 255,
        author: {
          name: "Алексей Щербаков",
          role: "Рекруитер",
          image: img,
        },
      },
      {
        id: 2,
        title: "Маркетолог",
        description: "Отдел маркетинга",
        mark: "В приоритете",
        users: 2,
        fileDescription: 182,
        markType: "blue",
        author: {
          name: "Floyd Miles",
          role: "Рекруитер",
          image: img,
        },
      },
      {
        id: 3,
        title: "Менеджер по продажам",
        description: "Отдел продаж",
        mark: "В приоритете",
        users: 3,
        fileDescription: 255,
        markType: "red",
        author: {
          name: "Theresa Webb",
          role: "Рекруитер",
          image: img,
        },
      },
      {
        id: 4,
        title: "Маркетолог",
        description: "Отдел маркетинга",
        mark: "В приоритете",
        users: 2,
        fileDescription: 182,
        markType: "blue",
        author: {
          name: "Vanessa Johnson",
          role: "Рекруитер",
          image: img,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Текущие",
    cards: [
      {
        id: 5,
        title: "PHP Developer",
        description: "Housekeepers",
        mark: "В приоритете",
        users: 3,
        markType: "red",
        fileDescription: 182,
        author: {
          name: "Kristin Watson",
          role: "Рекруитер",
          image: img,
        },
      },
    ],
  },
  {
    id: 3,
    title: "Закрытые",
    cards: [],
  },
  {
    id: 4,
    title: "Архив",
    cards: [],
  },
  {
    id: 5,
    title: "Удаленные",
    cards: [],
  },
];
