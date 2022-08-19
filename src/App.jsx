import styles from "./App.module.css";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <div className={styles.App}>
      <main>
        <SignUpForm />
      </main>
    </div>
  );
}

export default App;

/*create card wrapper component for the input fields*/
