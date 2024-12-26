import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface Income {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

// Mock data - será substituído pela integração com backend
const mockIncome: Income[] = [
  {
    id: "1",
    description: "Salário",
    amount: 5000,
    date: "2024-03-15",
    category: "Fixo",
  },
  {
    id: "2",
    description: "Freelance",
    amount: 1200,
    date: "2024-03-14",
    category: "Variável",
  },
];

export default function Income() {
  const { managementId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Receitas
          </h1>
          <Link to={`/management/${managementId}/income/new`}>
            <Button>
              <Plus className="mr-2" />
              Nova Receita
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockIncome.map((income) => (
            <Card key={income.id}>
              <CardHeader>
                <CardTitle className="text-xl">{income.description}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Valor</p>
                    <p className="text-lg font-semibold text-green-500">
                      R$ {income.amount.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data</p>
                    <p className="text-lg">{income.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Categoria</p>
                    <p className="text-lg">{income.category}</p>
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