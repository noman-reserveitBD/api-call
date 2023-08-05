import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";
import ITodosData from "../types/todo.type";

const getAllTodos = () =>
  useQuery({
    queryKey: ["getAllTodos"],
    queryFn: async () => {
      return axios.get<ITodosData>("/todos");
    },
    select: (data) => data?.data,
    cacheTime: 600,
  });

const TodoService = { getAllTodos };

export default TodoService;
