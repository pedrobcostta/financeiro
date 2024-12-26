import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

interface PaymentFieldsProps {
  control: Control<any>;
}

export function PaymentFields({ control }: PaymentFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={control}
        name="paymentBank"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Banco de Pagamento</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o banco" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="nubank">Nubank</SelectItem>
                <SelectItem value="itau">Itaú</SelectItem>
                <SelectItem value="bradesco">Bradesco</SelectItem>
                <SelectItem value="santander">Santander</SelectItem>
                <SelectItem value="bb">Banco do Brasil</SelectItem>
                <SelectItem value="caixa">Caixa Econômica</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Forma de Pagamento</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a forma de pagamento" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="pix">PIX</SelectItem>
                <SelectItem value="credit">Cartão de Crédito</SelectItem>
                <SelectItem value="debit">Cartão de Débito</SelectItem>
                <SelectItem value="transfer">Transferência</SelectItem>
                <SelectItem value="boleto">Boleto</SelectItem>
                <SelectItem value="money">Dinheiro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}