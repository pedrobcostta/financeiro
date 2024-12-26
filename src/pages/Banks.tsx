import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface Bank {
  id: string;
  name: string;
  accountType: string;
  balance: number;
  pixEnabled: boolean;
}

// Mock data - será substituído pela integração com backend
const mockBanks: Bank[] = [
  {
    id: "1",
    name: "Nubank",
    accountType: "Conta Corrente",
    balance: 5000,
    pixEnabled: true,
  },
  {
    id: "2",
    name: "Itaú",
    accountType: "Conta Poupança",
    balance: 10000,
    pixEnabled: true,
  },
];

export default function Banks() {
  const { managementId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Contas Bancárias
          </h1>
          <Link to={`/management/${managementId}/banks/new`}>
            <Button>
              <Plus className="mr-2" />
              Nova Conta
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockBanks.map((bank) => (
            <Card key={bank.id}>
              <CardHeader>
                <CardTitle className="text-xl">{bank.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Tipo de Conta</p>
                    <p className="text-lg">{bank.accountType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Saldo</p>
                    <p className="text-lg font-semibold">
                      R$ {bank.balance.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">PIX</p>
                    <p className="text-lg">
                      {bank.pixEnabled ? "Habilitado" : "Desabilitado"}
                    </p>
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