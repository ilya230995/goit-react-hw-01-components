import PaintingProfile from "./components/PaintingProfile/PaintingProfile";
import user from "././components/PaintingProfile/user.json";

import UploadStat from "./components/UploadStat/UploadStat";
import statisticalData from ".//components/UploadStat/statistical-data.json";

import FriendsList from "./components/FriendsList/FriendsList";
import friends from "././components/FriendsList/friends.json";

import transaction from "././components/Transaction/transactions.json";
import Transaction from "./components/Transaction/Transaction";

import Container from "./components/Container/Container";

export default function App() {
  return (
    <Container>
      <PaintingProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <UploadStat title="Upload stats" stats={statisticalData} />

      <FriendsList friends={friends} />

      <Transaction items={transaction} />
    </Container>
  );
}
