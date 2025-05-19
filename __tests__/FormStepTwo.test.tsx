import FormStepTwo from "@/components/FormStepTwo"
import { renderWithProvider } from "@/utils/test-helpers"
import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"


describe('FormStepTwo Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders all input fields correctly', () => {
        renderWithProvider(<FormStepTwo onSubmit={jest.fn()} defaultValues={{}} />)

        expect(screen.getByTestId('street-input')).toBeInTheDocument();
        expect(screen.getByTestId('number-input')).toBeInTheDocument()
        expect(screen.getByTestId('postalCode-input')).toBeInTheDocument()
        expect(screen.getByTestId('province-input')).toBeInTheDocument()
        expect(screen.getByTestId('city-input')).toBeInTheDocument()
        expect(screen.getByTestId('country-input')).toBeInTheDocument()
        expect(screen.getByLabelText('I currently live here')).toBeInTheDocument()
        expect(screen.getByLabelText('Dichiaro di essere una PEP')).toBeInTheDocument()

    })

    it('calls onSubmit when form is submitted', async () => {
        const mockOnSubmit = jest.fn()

        renderWithProvider(<FormStepTwo onSubmit={mockOnSubmit} defaultValues={{}} />)

        await userEvent.type(screen.getByTestId('street-input'), 'Via Roma')
        await userEvent.type(screen.getByTestId('number-input'), '5')
        await userEvent.type(screen.getByTestId('postalCode-input'), '01000')
        await userEvent.type(screen.getByTestId('city-input'), 'Rome')
        await userEvent.type(screen.getByTestId('province-input'), 'RM')
        await userEvent.type(screen.getByTestId('country-input'),
            'Italy')
        const dropdown = await screen.findByTestId('country-dropdown-list');
        await userEvent.click(within(dropdown).getByText('Italy'));
        await userEvent.click(screen.getByRole('switch', { name: /I currently live here/i }))
        await userEvent.click(screen.getByRole('switch', { name: /Dichiaro di essere una PEP/i }))

        await userEvent.click(screen.getByRole('button', {
            name: /Salva/i
        }))

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })

})