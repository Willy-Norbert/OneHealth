"use client";

import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  badge?: string;
}

export default function QuickActionCard({
  icon: Icon,
  title,
  description,
  onClick,
  variant = 'default',
  badge
}: QuickActionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg transform ${
        isHovered ? 'scale-105' : 'scale-100'
      } border-border hover:border-primary/50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-6 relative">
        {badge && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            {badge}
          </div>
        )}
        <div className="flex flex-col items-start space-y-4">
          <div className={`p-3 rounded-lg transition-colors ${
            variant === 'primary' ? 'bg-primary/20' :
            variant === 'secondary' ? 'bg-secondary/20' :
            'bg-muted'
          } group-hover:bg-primary/20`}>
            <Icon className={`w-6 h-6 ${
              variant === 'primary' ? 'text-primary' :
              variant === 'secondary' ? 'text-secondary' :
              'text-muted-foreground'
            } group-hover:text-primary transition-colors`} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="w-full justify-start opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}