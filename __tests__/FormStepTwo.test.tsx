import FormStepTwo from "@/components/FormStepTwo"
import { renderWithProvider } from "@/utils/test-helpers"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"


describe('FormStepTwo Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders all input fields correctly', () => {
        renderWithProvider(<FormStepTwo onSubmit={jest.fn()} defaultValues={{}} />)

        expect(screen.getByLabelText('Street')).toBeInTheDocument();
        expect(screen.getByLabelText('Number')).toBeInTheDocument()
        expect(screen.getByLabelText('Postal Code')).toBeInTheDocument()
        expect(screen.getByLabelText('Province')).toBeInTheDocument()
        expect(screen.getByLabelText('City')).toBeInTheDocument()
        expect(screen.getByLabelText('Country')).toBeInTheDocument()
        expect(screen.getByLabelText('I currently live here')).toBeInTheDocument()
        expect(screen.getByLabelText('Dichiaro di essere una PEP')).toBeInTheDocument()

    })

    it('calls onSubmit when form is submitted', async () => {
        const mockOnSubmit = jest.fn()

        renderWithProvider(<FormStepTwo onSubmit={mockOnSubmit} defaultValues={{}} />)

        await userEvent.type(screen.getByLabelText('Street'), 'Via Roma')
        await userEvent.type(screen.getByLabelText('Number'), '5')
        await userEvent.type(screen.getByLabelText('Postal Code'), '01000')
        await userEvent.type(screen.getByLabelText('City'), 'Rome')
        await userEvent.type(screen.getByLabelText('Province'), 'RM')
        await userEvent.type(screen.getByLabelText('Country'),
            'Italia')
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