import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface BalanceCardProps {
  balance: number;
  title: string;
}

export function BalanceCard({ balance, title }: BalanceCardProps) {
  const isPositive = balance >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${isPositive ? 'text-success' : 'text-danger'}`}>
          {formatCurrency(balance)}
        </div>
      </CardContent>
    </Card>
  );
}