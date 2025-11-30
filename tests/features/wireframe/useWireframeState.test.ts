
import { renderHook, act } from "@testing-library/react";
import { useWireframeState } from "@/features/wireframe/hooks/useWireframeState";
import { routes } from "@/features/wireframe/constants";
import { vi, beforeEach, describe, it, expect } from "vitest";

describe("useWireframeState", () => {
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: vi.fn(),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                clear: vi.fn(),
            },
            writable: true
        });
    });
    it("initializes with auth stage", () => {
        const { result } = renderHook(() => useWireframeState());
        expect(result.current.stage).toBe("auth");
    });

    it("advances through stages and manages links", () => {
        const { result } = renderHook(() => useWireframeState());

        act(() => {
            result.current.setStage("routes");
        });
        expect(result.current.stage).toBe("routes");

        const route = routes[0]; // Creator Link-in-Bio
        act(() => {
            result.current.handleRouteSelect(route);
        });

        expect(result.current.selectedRoute).toBe(route);
        // The implementation sets stage to "link-in-bio" if route title is "Creator Link-in-Bio"
        // Otherwise "config".
        // routes[0] is "Creator Link-in-Bio" so it should be "link-in-bio".
        expect(result.current.stage).toBe("link-in-bio");

        // Test links
        const initialLinksCount = result.current.links.length;
        act(() => {
            result.current.addNewLink();
        });
        expect(result.current.links.length).toBe(initialLinksCount + 1);
    });
});
