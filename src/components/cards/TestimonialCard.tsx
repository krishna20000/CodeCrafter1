
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  photoUrl?: string;
  quote: string;
  name: string;
  businessType: string;
  rating: number; // 1 to 5
  className?: string;
  dataAiHint?: string;
}

export function TestimonialCard({ photoUrl, quote, name, businessType, rating, className, dataAiHint }: TestimonialCardProps) {
  return (
    <Card className={cn(
      "bg-card border-border/50 shadow-lg rounded-xl p-6 text-center h-full",
      "transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20",
      className
    )}>
      <CardContent className="flex flex-col items-center">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            width={80}
            height={80}
            className="rounded-full mb-4 border-2 border-primary object-cover"
            data-ai-hint={dataAiHint}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-muted mb-4 flex items-center justify-center border-2 border-primary">
            <User className="w-10 h-10 text-primary" />
          </div>
        )}
        <p className="italic text-foreground/90 mb-4 text-lg">&ldquo;{quote}&rdquo;</p>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < rating ? "fill-yellow-400 stroke-yellow-400" : "fill-muted stroke-foreground/50"
              )}
            />
          ))}
        </div>
        <h4 className="font-headline text-xl font-semibold text-primary">{name}</h4>
        <p className="text-sm text-foreground/70">{businessType}</p>
      </CardContent>
    </Card>
  );
}
