import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddNewTrans from './components/AddNewTrans';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<div className='main-container'>
				<Header title="Expense Tracker" />
				<div className="container">
					<Balance />
					<IncomeExpense />
					<TransactionList />
					<AddNewTrans />
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;