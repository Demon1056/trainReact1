import { StatisticItem ,StatisticValue } from "../Statistics.stuled"
export const StatItem = ({data, length})=>  <StatisticItem key={data.key} length={length}>
<span>{data.label}</span>
<StatisticValue >{data.percentage}%</StatisticValue>
</StatisticItem>