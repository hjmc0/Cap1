import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


export default async function Chart() {
  const theme = useTheme();
  const user1 = await localStorage.getItem("user");
  const user = JSON.parse(user1);

  const compareDates = (a, b) => {
    var [day, month, year] = a.date.split("/");
    var a = new Date(year, month - 1, day);
    var [day, month, year] = b.date.split("/");
    var b = new Date(year, month - 1, day);
    return new Date(a) - new Date(b);
  };
  const sortedDate = user.transactionDetails.sort(compareDates).reverse();

  localStorage.setItem("sortedDate", JSON.stringify(sortedDate));
  const user2 = JSON.parse(sortedDate).reverse();
  const data = user2.map((i) => createData(i.date, i.newBalance));
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Balance ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
