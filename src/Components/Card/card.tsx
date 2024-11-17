import React from "react";
import { cardProps, statusToImg } from "../../types";

interface actualCardProps extends cardProps {
  showPriority?: boolean;
  Image?: boolean;
}

const Card: React.FC<actualCardProps> = (details) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        gap: 0,
        overflow: "hidden",
        padding: 10,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: 0,
          paddingTop: 0,
          marginTop: 0,
          marginBottom: 0,
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "rgb(110,110,120)",
            fontWeight: "600",
            paddingBottom: 0,
            paddingTop: 0,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {details.id}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {details.Image && <img src={statusToImg(details.status)} />}
        <h3
          style={{
            color: "rgb(40,41	,44)",
            fontWeight: "600",
            marginTop: 0,
          }}
        >
          {details.title}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          alignItems: "center",
          height: 30,
        }}
      >
        {details.showPriority && (
          <div
            style={{
              padding: 2,
              borderWidth: 1,
              borderColor: "rgb(110,110,120)",
              borderStyle: "solid",
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              aspectRatio: 1,
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src={`./priority-${details.priority}.svg`}
              alt="priority"
              style={{
                height: "70%",
                width: "70%",
                objectFit: "contain",
              }}
            />
          </div>
        )}
        {details.tag.map((tag) => (
          <div
            key={tag}
            style={{
              padding: 2,
              borderWidth: 1,
              borderColor: "rgb(110,110,120)",
              borderStyle: "solid",
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              maxHeight: "100%",
            }}
          >
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: "gray",
              }}
            />
            <p
              style={{
                color: "rgb(110,110,120)",
                fontWeight: "600",
              }}
            >
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
