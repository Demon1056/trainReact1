import { StatList , StatItem, Label, Value} from "./Stat.styled"
export const Stats = ({followers,views,likes})=>{
    return(  <StatList >

    <StatItem>
        <Label >Followers</Label>
        <Value >{followers}</Value>
      </StatItem>
      <StatItem>
        <Label >Views</Label>
        <Value >{views}</Value>
      </StatItem>
      <StatItem>
        <Label >Likes</Label>
        <Value >{likes}</Value>
      </StatItem></StatList>)
}
