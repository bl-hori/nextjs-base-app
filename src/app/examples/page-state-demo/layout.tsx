import { currentPageState } from "nrstate";
import PageStateProvider from "nrstate-client/PageStateProvider";
import { PropsWithChildren } from "react";

import {
  PageState,
  initPageState,
  statePath,
} from "@/state/examples/page-state-demo";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PageStateProvider
      current={currentPageState<PageState>(initPageState, statePath)}
    >
      {children}
    </PageStateProvider>
  );
}
