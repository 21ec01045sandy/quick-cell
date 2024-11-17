export enum PRIORITY {
  urgent = 4,
  high = 3,
  medium = 2,
  low = 1,
  noPriority = 0,
}

export function priotityToText(priority: PRIORITY) {
  switch (priority) {
    case PRIORITY.urgent:
      return "Urgent";
    case PRIORITY.high:
      return "High";
    case PRIORITY.medium:
      return "Medium";
    case PRIORITY.low:
      return "Low";
    case PRIORITY.noPriority:
      return "No Priority";
  }
}

export function statusToImg(status: string) {
  switch (status) {
    case "Todo":
      return "./To-do.svg";
    case "In progress":
      return "./in-progress.svg";
    case "Done":
      return "./Done.svg";
    case "Cancelled":
      return "./Cancelled.svg";
    case "Backlog":
      return "./Backlog.svg";
    default:
      return "./To-do.svg";
  }
}

export interface user {
  id: string;
  name: string;
  available: boolean;
}
export interface cardProps {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: PRIORITY;
}

export interface apiResponse {
  tickets: cardProps[];
  users: user[];
}
