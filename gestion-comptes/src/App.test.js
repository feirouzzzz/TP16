import { render, screen } from "@testing-library/react";
import Application from "./App";

describe("Application rendering", () => {
    it("affiche le lien principal React", () => {
        render(<Application />);

        const reactLink = screen.getByRole("link", {
            name: /react/i,
        });

        expect(reactLink).toBeVisible();
    });
});
