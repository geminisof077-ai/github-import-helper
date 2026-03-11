import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endTime?: Date;
  label?: string;
}

export default function CountdownTimer({
  endTime = new Date(Date.now() + 48 * 60 * 60 * 1000),
  label = "Special Offer Ends In",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 font-bold text-xl min-w-[3rem] text-center">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs text-muted-foreground mt-1 uppercase font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-accent" />
        <span className="font-semibold text-foreground">{label}</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl font-bold text-muted-foreground pb-5">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl font-bold text-muted-foreground pb-5">:</span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="text-2xl font-bold text-muted-foreground pb-5">:</span>
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
