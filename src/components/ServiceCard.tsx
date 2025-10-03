import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export function ServiceCard({ icon: Icon, title, description, color, onClick }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onClick}>
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Button variant="outline" className="w-full">
          Explore {title}
        </Button>
      </CardContent>
    </Card>
  );
}