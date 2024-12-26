import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BasicExpenseFields } from "@/components/expenses/BasicExpenseFields";
import { DateFields } from "@/components/expenses/DateFields";
import { CategoryAndStatusFields } from "@/components/expenses/CategoryAndStatusFields";
import { PaymentFields } from "@/components/expenses/PaymentFields";
import { AttachmentFields } from "@/components/expenses/AttachmentFields";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  amount: z.string().min(1, "Valor é obrigatório"),
  dueDate: z.date(),
  referenceDate: z.date(),
  paymentDate: z.date().optional(),
  description: z.string().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
  status: z.enum(["paid", "pending", "overdue"]),
  paymentBank: z.string().min(1, "Banco é obrigatório"),
  paymentMethod: z.string().min(1, "Forma de pagamento é obrigatória"),
  invoiceAttachment: z.any().optional(),
  paymentProofAttachment: z.any().optional(),
  otherAttachment: z.any().optional(),
});

export default function NewExpense() {
  const { managementId } = useParams();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      description: "",
      status: "pending",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast.success("Despesa criada com sucesso!");
      navigate(`/management/${managementId}/expenses`);
    } catch (error) {
      toast.error("Erro ao criar despesa");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Nova Despesa
          </h1>
          <Link to={`/management/${managementId}/expenses`}>
            <Button variant="outline">Cancelar</Button>
          </Link>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <BasicExpenseFields control={form.control} />
            <DateFields control={form.control} />
            <CategoryAndStatusFields control={form.control} />
            <PaymentFields control={form.control} />
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Anexos</h2>
              <AttachmentFields control={form.control} />
            </div>

            <div className="flex justify-end gap-4">
              <Button type="submit">Criar Despesa</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}