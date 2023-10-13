import { TopProfile } from "./TopProfile/TopProfile"
import { Stats } from "./Stat/Stat"
import { SectionWrap } from "components/Section/Section"
import { ProfileContainer } from "./Profile.styled"
export const Profile = ({user})=>{return ( 
<SectionWrap>
  <ProfileContainer> 
    <TopProfile username = {user.username}
    tag={user.tag}
    location={user.location}
    avatar = {user.avatar}
    />
    <Stats followers={user.stats.followers}
      views={user.stats.views}
likes={user.stats.likes}/>
</ProfileContainer>
</SectionWrap>)}
