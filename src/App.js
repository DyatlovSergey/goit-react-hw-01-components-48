import Profile from "./components/Profile";
import user from "./user.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import statistics from "./data.json";
import StatisticList from "./components/StatisticList";
import FriendsList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticList title="Upload stats" items={statistics} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
