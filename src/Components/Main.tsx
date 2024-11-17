import { useQuery } from "@tanstack/react-query";
import {
  apiResponse,

  priotityToText,
  statusToImg,
  user,
} from "../types";

import NavBar from "./Navbar";
import { useEffect, useMemo, useState } from "react";
import Section from "./Section";

type GroupedData<T> = {
  [key: string]: T[];
};

const Main = (initialState: {
  groupBy?: "status" | "userId" | "priority";
  orderBy?: "priority" | "title";
}) => {
  const [groupBy, setGroupBy] = useState<"status" | "userId" | "priority">(
    initialState.groupBy ?? "status"
  );
  const [orderBy, setOrderBy] = useState<"priority" | "title">(
    initialState.orderBy ?? "priority"
  );
  const fetchData = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment "
    );
    const data = await response.json();
    return data as apiResponse;
  };

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    staleTime: 120000,
  });

  function findNameFromUserId(userId: string, users: user[]) {
    const user = users.find((user) => user.id === userId);
    return user?.name || "Unassigned";
  }

  const getUserName = (userId: string) => {
    return findNameFromUserId(userId, data?.users || []);
  };

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("orderBy", orderBy);
  }, [groupBy, orderBy]);

  function groupByField<T>(array: T[], field: keyof T): GroupedData<T> {
    return array.reduce((acc, item) => {
      const key = item[field] as unknown as string;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {} as GroupedData<T>);
  }

  const groupedData = useMemo(() => {
    return groupByField(data?.tickets || [], groupBy);
  }, [groupBy, data]);

  return (
    <main style={{ height: "100vh", overflow: "scroll" }}>
      <NavBar
        orderBy={orderBy}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        setOrderBy={setOrderBy}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "100vw",
        }}
      >
        {Object.entries(groupedData).map(([key, value]) => (
          <Section
            showDetailsImg={groupBy !== "status"}
            title={
              groupBy === "priority"
                ? priotityToText(parseInt(key))
                : groupBy === "userId"
                ? getUserName(key)
                : key
            }
            key={key}
            Image={() => {
              switch (groupBy) {
                case "priority":
                  return <img src={`./priority-${key}.svg`} alt="priority" />;
                case "status":
                  return <img src={statusToImg(key)} alt="priority" />;

                case "userId":
                  return null;
              }
            }}
            count={value.length}
            showPriority={groupBy !== "priority"}
            tickets={value.sort((a, b) => {
              if (orderBy === "priority") {
                return b.priority - a.priority;
              }
              return a.title.localeCompare(b.title);
            })}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
