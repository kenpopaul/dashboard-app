export const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 35000 },
  { month: "Mar", revenue: 48000, expenses: 33000 },
  { month: "Apr", revenue: 61000, expenses: 38000 },
  { month: "May", revenue: 55000, expenses: 36000 },
  { month: "Jun", revenue: 67000, expenses: 41000 },
];

export const userGrowthData = [
  { month: "Jan", users: 2400 },
  { month: "Feb", users: 2800 },
  { month: "Mar", users: 3200 },
  { month: "Apr", users: 3800 },
  { month: "May", users: 4200 },
  { month: "Jun", users: 4900 },
];

export const trafficSourcesData = [
  { source: "Organic", visits: 12500 },
  { source: "Direct", visits: 8200 },
  { source: "Social", visits: 6100 },
  { source: "Referral", visits: 4300 },
  { source: "Email", visits: 3800 },
];

export const statsData = [
  {
    title: "Total Revenue",
    value: "$67,231",
    change: 12.5,
    type: "revenue" as const,
  },
  {
    title: "Active Users",
    value: "4,892",
    change: 8.2,
    type: "users" as const,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: -2.1,
    type: "conversion" as const,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: 5.7,
    type: "session" as const,
  },
];
