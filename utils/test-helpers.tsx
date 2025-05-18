import { store } from "@/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

//USE THIS TO RENDER ALL TEST COMPONENTS THAT USES REDUX
export const renderWithProvider = (ui: React.ReactNode) => {
  return render(<Provider store={store}>{ui}</Provider>);
};
