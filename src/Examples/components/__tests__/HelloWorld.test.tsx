import { render } from "@testing-library/react";
import { HelloWorld } from "../HelloWorld";

test("if HelloWorld helloes the world", async () => {
  const { container } = render(<HelloWorld />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        Hello 
        World
      </span>
    </div>
  `);
});

test("if HelloWorld helloes the user", async () => {
  const { container } = render(<HelloWorld name="User" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        Hello 
        User
      </span>
    </div>
  `);
});
