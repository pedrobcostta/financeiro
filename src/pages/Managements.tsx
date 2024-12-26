import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface Management {
  id: string;
  name: string;
}

// Mock data - será substituído pela integração com backend
const mockManagements: Management[] = [
  { id: "1", name: "Gestão Pessoal" },
  { id: "2", name: "Empresa ABC" },
];

export default function Managements() {
  const handleDelete = (id: string) => {
    // Aqui será implementada a lógica de deleção
    toast.success("Gestão excluída com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Minhas Gestões
          </h1>
          <Link to="/new-management">
            <Button>
              <Plus className="mr-2" />
              Nova Gestão
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockManagements.map((management) => (
            <Card key={management.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">
                  {management.name}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(management.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </CardHeader>
              <CardContent>
                <Link to={`/dashboard/${management.id}`}>
                  <Button className="w-full">Acessar</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}