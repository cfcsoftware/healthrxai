import { create } from 'zustand';
import { getTenant } from '../utils/getTenant';

interface TenantState {
  tenant: string | null;
  setTenant: (tenant: string | null) => void;
}

export const useTenantStore = create<TenantState>((set) => ({
  tenant: getTenant(),
  setTenant: (tenant) => set({ tenant }),
}));
