import FormStepOne from "@/components/FormStepOne";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("FormStepOne Component", () => {

  beforeEach(() => (
    jest.clearAllMocks()
  ))

  it("renders all input fields correctly", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);

    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("firstName-input")).toBeInTheDocument();
    expect(screen.getByTestId("lastName-input")).toBeInTheDocument();
    expect(screen.getByTestId("dateOfBirth-input")).toBeInTheDocument();
    expect(screen.getByTestId("fiscalCode-input")).toBeInTheDocument();
  });

  it("allows user input in the fields", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  it("disables submit button when submitting", () => {
    render(<FormStepOne onNext={jest.fn()} defaultValues={{}} />);
    const submitButton = screen.getByText("Continua");
    expect(submitButton).toBeDisabled();
  });


  it("calls onNext when form is submitted", async () => {
    const mockOnNext = jest.fn();
    render(<FormStepOne onNext={mockOnNext} defaultValues={{}} />);

    await userEvent.type(screen.getByTestId('email-input'), 'test@example.com');
    await userEvent.type(screen.getByTestId('firstName-input'), 'John');
    await userEvent.type(screen.getByTestId('lastName-input'), 'Doe');
    await userEvent.type(screen.getByTestId('dateOfBirth-input'), '01/01/2001');
    await userEvent.type(screen.getByTestId('fiscalCode-input'), 'ABCDEF85S14F112Y');

    const nextButton = screen.getByRole('button', { name: /Continua/i })
    expect(nextButton).not.toBeDisabled

    await userEvent.click(nextButton)

    await waitFor(() => {
      expect(mockOnNext).toHaveBeenCalled()
    })
  });
});

