import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  const txt = screen.getByText("ankit kumar");
  const title = screen.getByTitle(/my Img/i);
  expect(linkElement).toBeInTheDocument();
  expect(txt).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

// =============Button click test============
test("")

// test("onChange test", ()=>{
//   render(<App/>);
//   const onChnge = screen.getByRole("textbox");
//   fireEvent.change(onChnge, {target:{value:"a"}});
//   expect(onChnge.value).toBe("a");

// })
// test("Testing input box", () => {
//   render(<App />);
//   let checkInput = screen.getByRole("textbox");
//   let checkInputPlaceholder = screen.getByPlaceholderText("Enter your name");
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name", "ankit");
//   expect(checkInput).toHaveAttribute("id", "myname");
//   expect(checkInput).toHaveAttribute("type", "text");
// });


// describe()
// describe("ui testing", () => {
//   test("Test-case-1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceholder = screen.getByPlaceholderText("Enter your name");
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceholder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "ankit");
//     expect(checkInput).toHaveAttribute("id", "myname");
//     expect(checkInput).toHaveAttribute("type", "text");
//   });



  
// test("test-case-2", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello/i);
//   const txt = screen.getByText("ankit kumar");
//   const title = screen.getByTitle(/my Img/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(txt).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });
// });


// describe.skip();
// describe.only("ui testing-2", () => {
//   test("Test-case-3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     let checkInputPlaceholder = screen.getByPlaceholderText("Enter your name");
//     expect(checkInput).toBeInTheDocument();
//     expect(checkInputPlaceholder).toBeInTheDocument();
//     expect(checkInput).toHaveAttribute("name", "ankit");
//     expect(checkInput).toHaveAttribute("id", "myname");
//     expect(checkInput).toHaveAttribute("type", "text");
//   });



  
// test("test-case-4", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello/i);
//   const txt = screen.getByText("ankit kumar");
//   const title = screen.getByTitle(/my Img/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(txt).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });
// });