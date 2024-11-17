import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
const NavBar = ({
  groupBy,
  setGroupBy,
  orderBy,
  setOrderBy,
}: {
  groupBy: "status" | "userId" | "priority";
  setGroupBy: React.Dispatch<
    React.SetStateAction<"status" | "userId" | "priority">
  >;
  orderBy: "priority" | "title";
  setOrderBy: React.Dispatch<React.SetStateAction<"priority" | "title">>;
}) => {
  const Menu = () => (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <label style={{ color: "black", gap: 20 }}>
          Grouping
          <select
            value={groupBy}
            onChange={(e) =>
              setGroupBy(e.target.value as "status" | "userId" | "priority")
            }
          >
            <option value={"status"}>Status</option>
            <option value={"userId"}>User</option>
            <option value={"priority"}>Priority</option>
          </select>
        </label>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <label style={{ color: "black" }}>
          Ordering
          <select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value as "priority" | "title")}
          >
            <option value={"priority"}>Priority</option>
            <option value={"title"}>Title</option>
          </select>
        </label>
      </div>
    </div>
  );
  return (
    <nav
      style={{
        backgroundColor: "white",
        height: 60,
        marginTop: 0,
        top: 0,
        width: "100vw",
        paddingLeft: 60,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Popover.Root>
        <Popover.Trigger
          className="PopoverTrigger"
          style={{
            backgroundColor: "white",
            borderRadius: 6,
            padding: 2,
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src="./Display.svg" alt="Display" />
            <p>Display</p>
            <img src="./down.svg" alt="Display" />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="PopoverContent"
            style={{
              backgroundColor: "rgb(248,248,250)",
              paddingTop: 10,
              paddingLeft: 20,
            }}
          >
            <Menu />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </nav>
  );
};

export default NavBar;
