import { getPageState } from "nrstate";

import {
  PageState,
  initPageState,
  statePath,
} from "@/state/examples/page-state-demo";

export default function Page() {
  const pageState = getPageState<PageState>(initPageState, statePath);
  const { a, b } = pageState;

  return (
    <>
      <p>{a}</p>
      <p>{b}</p>
    </>
  );
}
