"use client";

import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface InteractiveStatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
  trend?: 'up' | 'down' | 'neutral';
}

export default function InteractiveStatsCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  onClick,
  trend = 'neutral'
}: InteractiveStatsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`transition-all duration-300 cursor-pointer hover:shadow-lg transform ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${onClick ? 'hover:shadow-xl' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change && (
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  trend === 'up' ? 'text-green-600' : 
                  trend === 'down' ? 'text-red-600' : 
                  'text-muted-foreground'
                }`}>
                  {change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full transition-colors ${
            isHovered ? 'bg-primary/20' : 'bg-muted'
          }`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}