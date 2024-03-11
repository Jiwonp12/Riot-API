import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const queryClient = new QueryClient();
const Root = lazy(() => import("./pages/Root"));
const Main = lazy(() => import("./pages/Main"));
const Search = lazy(() => import("./pages/Search"));
const Champions = lazy(() => import("./pages/Champions"));
const ChampionDetail = lazy(() => import("./pages/ChampionDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "search/summoners/:summoner",
        element: (
          <Suspense>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/champions",
        element: (
          <Suspense>
            <Champions />
          </Suspense>
        ),
      },
      {
        path: "/champions/:champion",
        element: (
          <Suspense>
            <ChampionDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
