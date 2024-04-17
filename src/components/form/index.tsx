import { FC } from "react";
import { UserList } from "../user_list";

export const Form: FC = () => {
  return (
    <div>
      <h1>友達リスト選択して送信する</h1>
      <UserList />
      <button>Click me</button>
    </div>
  );
}