import { useParams } from "react-router-dom";

export default function Room() {
  const { code } = useParams();
  return <h1>Room {code} </h1>;
}
