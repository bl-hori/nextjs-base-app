"use client";

import { usePageState } from "nrstate-client/PageStateClient";
import { useEffect } from "react";

import { PageState, statePath } from "@/state/examples/page-state-demo";

export default function Page() {
  const [pageState, setPageState] = usePageState<PageState>();

  const { a, b } = pageState;

  useEffect(() => {
    setPageState({ ...pageState, b: "desc" }, statePath);
  });

  return (
    <>
      <p>{a}</p>
      <p>{b}</p>
    </>
  );
}
