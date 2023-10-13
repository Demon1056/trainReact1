import { Profile } from "./Profile/Profile";
import { Container } from "./Container/Container";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import { Transactions } from "./Transactions/Transactions";
import  user  from "../data/user.json";
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
export const App = () => {
  return (<Container>
    <Profile user={user}/>
    <Statistics data ={data}/>
<FriendsList friends={friends}/>
<Transactions transactions={transactions}/>
    </Container>
  );
};
