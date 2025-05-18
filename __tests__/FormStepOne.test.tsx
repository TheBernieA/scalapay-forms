import FormStepOne from "@/components/FormStepOne";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("FormStepOne Component", () => {

  beforeEach(() => (
    jest.clearAllMocks()
  ))

  it("renders all input fields correctly", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Date Of Birth")).toBeInTheDocument();
    expect(screen.getByLabelText("Fiscal Code")).toBeInTheDocument();
  });

  it("allows user input in the fields", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  // it("Fiscal Code input only accepts ABCDEF85S14F112Y", async () => {

  // })

  it("disables submit button when submitting", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);
    const submitButton = screen.getByText("Prossimo");
    expect(submitButton).toBeDisabled();
  });


  it("calls onNext when form is submitted", async () => {
    const mockOnNext = jest.fn();
    render(<FormStepOne onNext={mockOnNext} defaultValues={{}} />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('First Name'), 'John');
    await userEvent.type(screen.getByLabelText('Last Name'), 'Doe');
    await userEvent.type(screen.getByLabelText('Date Of Birth'), '2001-01-01');
    await userEvent.type(screen.getByLabelText('Fiscal Code'), 'ABCDEF85S14F112Y');

    const nextButton = screen.getByRole('button', { name: /Next/i })
    expect(nextButton).not.toBeDisabled

    await userEvent.click(nextButton)

    await waitFor(() => {
      expect(mockOnNext).toHaveBeenCalled()
    })
  });
});

