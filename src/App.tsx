import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./Components/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main
        groupBy={
          localStorage.getItem("groupBy") as "status" | "userId" | "priority"
        }
        orderBy={localStorage.getItem("orderBy") as "priority" | "title"}
      />
    </QueryClientProvider>
  );
}

export default App;
