import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

interface BasicExpenseFieldsProps {
  control: Control<any>;
}

export function BasicExpenseFields({ control }: BasicExpenseFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome da Conta</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor (R$)</FormLabel>
            <FormControl>
              <Input {...field} type="number" step="0.01" min="0" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}