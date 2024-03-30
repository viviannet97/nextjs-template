import Jumbotron from "@/components/Jumbotron";
import Link from "next/link";
import { Container } from "react-bootstrap";
import About from "./about";
import { CounterContainer } from "@/components/CounterContainer";


/**comentariio */

export default function Home() {
  return (
    <Container>
      
      <CounterContainer/>
      <Link href="/about">Simple Container</Link>
      
      
    </Container>
  );
}
