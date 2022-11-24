import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [ourState, setOurState] = useState<string | null>(null);

  useEffect(() => {
    setOurState("some-data");
    // setOurState(10);
  }, []);

  if (!ourState) return null;

  return (
    <div className={styles.container}>
      How long is the string? {ourState.length}
    </div>
  );
}
