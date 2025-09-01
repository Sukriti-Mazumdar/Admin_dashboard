import React from "react";
import "./StatCard.css";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  negative: boolean;
}

function StatCard({ title, value, change, negative }: StatCardProps) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p className="value">{value}</p>
      <p className={`change ${negative ? "negative" : "positive"}`}>
        {change}
      </p>
    </div>
  );
}

export default StatCard;
