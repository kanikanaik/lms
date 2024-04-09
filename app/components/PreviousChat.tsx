import React from "react";
import { db } from "../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { User } from "lucide-react";

async function PreviousChat() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const people = await db.privateMessage.findMany({
    where: {
      senderId: userId,
    },
    select: {
      receiverId: true,
    },
  });
  const receiverIdsArray = people.map((person) => person.receiverId);

  const users = await db.user.findMany({
    where: {
      id: {
        in: receiverIdsArray,
      },
    },
  });

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id} className="flex gap-3 mb-2">
            <User />
            <div key={user.id}>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviousChat;
