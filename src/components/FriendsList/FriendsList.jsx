import { Friend } from "./Friend/Friend"
import { SectionWrap } from "components/Section/Section"
import { ProfileContainer } from "components/Profile/Profile.styled"
import { ListUl } from "./FriendsList..styled"
export const FriendsList = ({friends})=>{
    return( <SectionWrap><ProfileContainer><ListUl >
.{friends.map(friend=><Friend friend={friend} key={friend.id} />)}
  </ListUl></ProfileContainer></SectionWrap>)
}