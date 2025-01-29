import { ptBR } from "date-fns/locale";
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy", { locale: ptBR }).toUpperCase()}</time>;
};

export default DateFormatter;
