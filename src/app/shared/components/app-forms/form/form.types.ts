export interface DataProps {
  [key: string]: string | DataProps;
}

interface FormatterListProps {
  name: string;
  format: FormatterDataProps;
}

export type FormatterDataProps = (string | FormatterListProps)[];
