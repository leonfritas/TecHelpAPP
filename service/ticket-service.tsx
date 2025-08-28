import api from './api';

export type TicketType = {
  idTicket: number;
  nameTicket: string;
  dateTicket: string;
  idUser: number;  
  description: string;
  idCategory: number;
  status: string;
  nameUser: string;
  nameCategory: string;
};

export const getTickets = async (filters?: { 
  idTicket?: number | null; 
  dateTicket?: Date | null; 
  status?: string | null 
}) => {
  const response = await api.post<TicketType[]>('/ticket/search', {
    idTicket: filters?.idTicket ?? null,
    dateTicket: filters?.dateTicket ?? null,
    status: filters?.status ?? null,
  });

  return response.data;
};
