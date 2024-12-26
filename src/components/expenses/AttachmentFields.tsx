import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface AttachmentFieldsProps {
  control: Control<any>;
}

export function AttachmentFields({ control }: AttachmentFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="invoiceAttachment"
        render={({ field: { value, onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Fatura</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="paymentProofAttachment"
        render={({ field: { value, onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Comprovante de Pagamento</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="otherAttachment"
        render={({ field: { value, onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Outros Anexos</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}