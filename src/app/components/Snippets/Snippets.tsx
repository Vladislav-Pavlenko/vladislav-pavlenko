import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { fetchSnippets } from "@/app/redux/snippets/operations";
import { selectSnippets } from "./../../redux/snippets/selectors";

export default function Snippets() {
  const dispatch = useDispatch<AppDispatch>();
  const snippets = useSelector(selectSnippets);
  if (!snippets.length) {
    dispatch(fetchSnippets());
  }
  return useSelector(selectSnippets);
}
