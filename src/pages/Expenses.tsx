import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

// Mock data - será substituído pela integração com backend
const mockExpenses: Expense[] = [
  {
    id: "1",
    description: "Supermercado",
    amount: 350.5,
    date: "2024-03-15",
    category: "Alimentação",
  },
  {
    id: "2",
    description: "Energia",
    amount: 200,
    date: "2024-03-14",
    category: "Utilidades",
  },
];

export default function Expenses() {
  const { managementId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Despesas
          </h1>
          <Link to={`/management/${managementId}/expenses/new`}>
            <Button>
              <Plus className="mr-2" />
              Nova Despesa
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockExpenses.map((expense) => (
            <Card key={expense.id}>
              <CardHeader>
                <CardTitle className="text-xl">{expense.description}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Valor</p>
                    <p className="text-lg font-semibold text-red-500">
                      R$ {expense.amount.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data</p>
                    <p className="text-lg">{expense.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Categoria</p>
                    <p className="text-lg">{expense.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}