import React from "react";
import { cardProps, statusToImg } from "../types";
import Card from "./Card/card";

const Section = ({
  title,
  count,
  Image,
  tickets,
  showPriority,
  showDetailsImg,
}: {
  title: string;
  count: number;
  tickets: cardProps[];
  Image?: React.FC;
  showPriority?: boolean;
  showDetailsImg?: boolean;
}) => {
  return (
    <div style={{ gap: 10, padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {Image && <Image />}
          <h3 style={{ color: "black" }}>{title}</h3>
          <p style={{ color: "black" }}>{count}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="./add.svg" alt="add" style={{ height: 20, width: 20 }} />
          <img
            src="./3 dot menu.svg"
            alt="3 dot menu"
            style={{ height: 20, width: 20 }}
          />
        </div>
      </div>
      <div>
        {tickets.map((ticket) => (
          <Card
            Image={showDetailsImg}
            {...ticket}
            showPriority={showPriority}
            key={ticket.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
