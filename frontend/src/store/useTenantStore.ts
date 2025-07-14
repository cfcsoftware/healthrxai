import { create } from 'zustand';

interface TenantState {
  tenant: string | null;
  setTenant: (tenant: string) => void;
}

export const useTenantStore = create<TenantState>((set) => ({
  tenant: null,
  setTenant: (tenant) => set({ tenant }),
}));
