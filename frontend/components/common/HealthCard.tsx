import React from "react";

interface HealthCardProps {
  children: React.ReactNode;
  className?: string;
}

const HealthCard: React.FC<HealthCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}>
      {children}
    </div>
  );
};

export default HealthCard;