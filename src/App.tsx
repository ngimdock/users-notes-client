import { UserDisplay } from "./components/user-display";
import { User } from "./types";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generate";

function App() {
  const users: User[] = [
    {
      name: "ngimdock",
      messages: [{ body: "Hello world !" }, { body: "Je suis dev" }],
    },
  ];

  const [result] = useQuery({
    query: GetUsersDocument,
  });

  console.log({ dataUsers: result.data?.users });

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-zinc-800 gap-y-12">
      {result.data?.users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
