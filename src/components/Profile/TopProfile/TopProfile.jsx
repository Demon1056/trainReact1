import { TopProfileContainer, ProfileImg, ProfileName, ProfileText} from "./TopProfile.styled"
export const TopProfile = ({username,
    tag,
    location,
    avatar})=>{return (<TopProfileContainer >
<ProfileImg
  src={avatar}
  alt="User"
/>
<ProfileName>{username}</ProfileName>
<ProfileText >{tag}</ProfileText>
<ProfileText >{location}</ProfileText>
</TopProfileContainer>)

}