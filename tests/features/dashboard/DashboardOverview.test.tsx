
import { render, screen } from "@testing-library/react";
import { DashboardOverview } from "@/features/dashboard/components/DashboardOverview";
import { vi, beforeEach, describe, it, expect } from "vitest";

describe("DashboardOverview", () => {
  beforeEach(() => {
    // Mock ResizeObserver
    global.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    // Mock Recharts ResponsiveContainer to render children directly
    vi.mock('recharts', async () => {
      const originalModule = await vi.importActual('recharts');
      return {
        ...originalModule,
        ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      };
    });
  });

  it("renders KPI cards", () => {
    render(<DashboardOverview />);
    expect(screen.getByText(/Total Revenue/i)).toBeInTheDocument();
    // 'Orders' appears in KPI card and Recent Orders table header
    expect(screen.getAllByText(/Orders/i).length).toBeGreaterThan(0);
  });
});
