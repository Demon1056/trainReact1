import { Profile } from "./Profile/Profile";
import { Container } from "./Container/Container";
import { Statistics } from "./Statistics/Statistics";
import  user  from "../data/user.json";
import data from "../data/data.json"
export const App = () => {
  return (<Container>
    <Profile user={user}/>
    <Statistics data ={data}/>
    </Container>
  );
};
