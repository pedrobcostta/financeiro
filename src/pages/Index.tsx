import { BalanceCard } from "@/components/Dashboard/BalanceCard";
import { ExpenseChart } from "@/components/Dashboard/ExpenseChart";
import { RecentTransactions } from "@/components/Dashboard/RecentTransactions";

// Dados mockados para exemplo
const mockTransactions = [
  {
    id: "1",
    description: "Salário",
    amount: 5000,
    type: "income" as const,
    date: "2024-03-15",
  },
  {
    id: "2",
    description: "Aluguel",
    amount: 1500,
    type: "expense" as const,
    date: "2024-03-10",
  },
  {
    id: "3",
    description: "Supermercado",
    amount: 800,
    type: "expense" as const,
    date: "2024-03-08",
  },
];

const mockExpenseData = [
  { name: "Moradia", value: 1500 },
  { name: "Alimentação", value: 800 },
  { name: "Transporte", value: 400 },
  { name: "Lazer", value: 300 },
];

const Index = () => {
  const totalIncome = mockTransactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = mockTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Financeiro</h1>
        
        <div className="grid grid-cols-3 gap-4">
          <BalanceCard title="Saldo Atual" balance={balance} />
          <BalanceCard title="Receitas" balance={totalIncome} />
          <BalanceCard title="Despesas" balance={-totalExpenses} />
        </div>

        <div className="grid grid-cols-5 gap-4">
          <ExpenseChart data={mockExpenseData} />
          <RecentTransactions transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
};

export default Index;