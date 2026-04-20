import { CardProfile } from "./features/CardProfile";
import { CardPost } from "./features/CardPost";
import { InputText } from "./components/InputText";

export function App() {
  return (
    <>
      <CardProfile />
      <CardPost />
      <InputText placeholder="Texto" />
    </>
  );
}
