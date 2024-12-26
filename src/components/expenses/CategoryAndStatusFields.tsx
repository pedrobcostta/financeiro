import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

interface CategoryAndStatusFieldsProps {
  control: Control<any>;
}

export function CategoryAndStatusFields({ control }: CategoryAndStatusFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Categoria</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="food">Alimentação</SelectItem>
                <SelectItem value="transport">Transporte</SelectItem>
                <SelectItem value="health">Saúde</SelectItem>
                <SelectItem value="education">Educação</SelectItem>
                <SelectItem value="leisure">Lazer</SelectItem>
                <SelectItem value="other">Outros</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Situação</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a situação" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="paid">Pago</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="overdue">Vencido</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}