import { HttpParams } from '@angular/common/http';
import { DataProps } from '@components/app-forms/form/form.types';

export interface RequestProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  relativeURL: string;
  body?: DataProps;
  params?: HttpParams;
}
