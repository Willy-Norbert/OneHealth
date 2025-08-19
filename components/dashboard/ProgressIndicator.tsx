"use client";

import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export default function ProgressIndicator({ 
  steps, 
  currentStep, 
  onStepClick 
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between w-full mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isCurrent = currentStep === stepNumber;
        const isClickable = onStepClick && stepNumber <= currentStep;

        return (
          <div key={stepNumber} className="flex items-center flex-1">
            <div 
              className={`relative flex items-center ${stepNumber !== steps.length ? 'flex-1' : ''}`}
              onClick={isClickable ? () => onStepClick(stepNumber) : undefined}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : isCurrent
                    ? 'bg-primary/20 text-primary border-2 border-primary animate-pulse'
                    : 'bg-muted text-muted-foreground border-2 border-muted'
                } ${isClickable ? 'cursor-pointer hover:scale-110' : ''}`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{stepNumber}</span>
                )}
              </div>
              
              {stepNumber !== steps.length && (
                <div 
                  className={`flex-1 h-1 mx-4 transition-all duration-500 ${
                    isCompleted ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
            
            {/* Step Label */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-center">
              <span className={`${isCurrent ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {step}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}